import React, {useRef,useState,useEffect} from 'react';
import {Music2,VolumeX} from 'lucide-react';
export default function MusicPlayer({config}) {
 const [playing,setPlaying]=useState(false),[volume,setVolume]=useState(config.volumen); const engine=useRef(null),audio=useRef(null);
 useEffect(()=>()=>{clearTimeout(engine.current?.timer);engine.current?.ctx.close();audio.current?.pause()},[]);
 async function toggle(){
  if(config.src){if(!audio.current){audio.current=new Audio(/^https?:/.test(config.src)?config.src:import.meta.env.BASE_URL+config.src.replace(/^\//,''));audio.current.loop=true}audio.current.volume=volume;if(playing)audio.current.pause();else {try{await audio.current.play()}catch{ return }}setPlaying(!playing);return;}
  if(!engine.current){const ctx=new AudioContext(),gain=ctx.createGain();gain.connect(ctx.destination);gain.gain.value=volume*0.24;engine.current={ctx,gain};let step=0;const notes=[261.63,329.63,392,523.25,440,392,329.63,293.66];function play(){if(ctx.state==='closed')return;const t=ctx.currentTime,osc=ctx.createOscillator(),env=ctx.createGain();osc.type='sine';osc.frequency.value=notes[step++%notes.length];env.gain.setValueAtTime(0,t);env.gain.linearRampToValueAtTime(.5,t+.04);env.gain.exponentialRampToValueAtTime(.001,t+2.5);osc.connect(env);env.connect(gain);osc.start(t);osc.stop(t+2.6);engine.current.timer=setTimeout(play,750)}play();}
  if(playing)await engine.current.ctx.suspend();else await engine.current.ctx.resume();setPlaying(!playing);
 }
 useEffect(()=>{if(engine.current)engine.current.gain.gain.value=volume*.24;if(audio.current)audio.current.volume=volume},[volume]);
 return <div className="music"><button onClick={toggle} aria-label={playing?'Pausar música':'Activar música'}>{playing?<Music2 size={16}/>:<VolumeX size={16}/>}<span>{playing?'Sonando con cariño':'Un poco de música'}</span></button><input aria-label="Volumen de música" type="range" min="0" max="1" step=".01" value={volume} onChange={e=>setVolume(+e.target.value)}/></div>
}
