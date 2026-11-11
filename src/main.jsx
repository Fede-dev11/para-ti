import React,{useState,useEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {motion,AnimatePresence,MotionConfig} from 'motion/react';
import {Heart,ArrowRight,ArrowDown,Sparkles,Mail,Gift,Camera,X,ChevronLeft,ChevronRight,Download} from 'lucide-react';
import {contenido} from './data/contenido';
import MusicPlayer from './components/MusicPlayer';
import './style.css';
import {rise} from './components/shared';
import FloatingHearts from './components/FloatingHearts';
import Burst from './components/Burst';
import LoveHeart from './components/LoveHeart';
import RomanticMessages from './components/RomanticMessages';
import SpecialThings from './components/SpecialThings';
import LoveLetter from './components/LoveLetter';
import MemoriesGallery from './components/MemoriesGallery';
import SurpriseGift from './components/SurpriseGift';
import FinalMessage from './components/FinalMessage';
import LocalEditor from './components/LocalEditor';
const base=import.meta.env.BASE_URL;
const chapters=['El comienzo','Palabras bonitas','En cada idioma','Tu universo','Una carta','Momentos','La sorpresa','Un abrazo'];











function App(){const [data,setData]=useState(()=>{if(import.meta.env.DEV){try{return JSON.parse(localStorage.getItem('para-ti-contenido'))||contenido}catch{}}return contenido}),[step,setStep]=useState(0),[burst,setBurst]=useState(0),[editor,setEditor]=useState(false);const main=useRef(null);function go(n){setStep(n);setBurst(x=>x+1);window.scrollTo({top:0,behavior:'smooth'})}return <MotionConfig reducedMotion="user"><div className="app"><FloatingHearts/><header><a className="brand" href={base} aria-label="Para ti, volver al inicio">para ti<span>♡</span></a><span className="header-note">HECHO CON EL CORAZÓN</span><MusicPlayer config={data.musica}/></header><main ref={main}><AnimatePresence mode="wait"><motion.div className="chapter" key={step} {...rise}>{step===0?<section className="welcome"><div className="eyebrow"><span/> UN PEQUEÑO DETALLE, UN GRAN SENTIMIENTO</div><div className="hero-art" aria-hidden="true"><div className="hero-orbit"/><span className="art-star one">✧</span><span className="art-star two">✦</span><span className="art-star three">✧</span><div className="hero-envelope"><div className="hero-paper"><span>Para ti,</span><i>con todo mi cariño.</i><Heart size={23} strokeWidth={1}/></div><div className="envelope-front"/><div className="hero-seal">♥</div></div><span className="small-heart">♡</span><span className="handwritten">algo bonito te espera</span></div><p className="intro">{data.nombre?`Para ${data.nombre}, con cariño`:'A veces, las palabras necesitan un lugar especial.'}</p><h1>{data.bienvenida}<span className="title-heart"> ♡</span></h1><p className="subtitle">{data.subtitulo}</p><button className="primary" onClick={()=>go(1)}>¿Quieres descubrirlo? <Heart size={17}/><ArrowRight size={17}/></button><div className="welcome-foot"><span/> SOLO NECESITAS UN MOMENTITO Y TU SONRISA <span/></div><ArrowDown size={17} className="down-arrow"/></section>:<section className={'experience section-'+step}><div className="eyebrow">CAPÍTULO {String(step).padStart(2,'0')} <span/> PARA TI, CON CARIÑO</div><h2>{['','Quiero que sepas algo','Te amo en todos los idiomas','Un universo de cosas bonitas sobre ti','Hay algo que quiero decirte…','Nuestros pequeños momentos','Tengo una sorpresa más','Una última cosita…'][step]}</h2><p className="section-intro">{['','Hay palabras que merecen decirse, una a una.','Tantas formas de decirlo. Un mismo sentimiento.','Cada detalle tuyo tiene su propia luz.','Algunas palabras se guardan mejor en una carta.','Un rincón para las fotos que tú elijas.','Pensabas que eso era todo… pero todavía tengo algo para ti.','Este pequeño viaje termina. El cariño se queda.'][step]}</p>{step===1&&<RomanticMessages data={data}/>} {step===2&&<LoveHeart data={data}/>} {step===3&&<SpecialThings data={data}/>} {step===4&&<LoveLetter data={data}/>} {step===5&&<MemoriesGallery data={data}/>} {step===6&&<SurpriseGift data={data}/>} {step===7&&<FinalMessage data={data}/>}<div className="chapter-nav"><button className="text-button" onClick={()=>go(step-1)}><ChevronLeft size={15}/> Volver</button>{step<7?<button className="text-button" onClick={()=>go(step+1)}> {['','','Otro pequeño detalle','Hay una carta para ti','Guardar un momento','Todavía hay más','Un último detalle'][step]||'Sigue descubriendo'} <ArrowRight size={16}/></button>:<button className="text-button" onClick={()=>go(0)}>Volver a vivirlo <Heart size={15}/></button>}</div></section>}</motion.div></AnimatePresence></main><footer><span>Un detalle que dice mucho.</span><div className="journey" aria-label={`Capítulo ${step+1} de 8`}>{chapters.map((c,i)=><button key={c} disabled={i>step} className={i===step?'current':''} aria-label={c} title={c} onClick={()=>go(i)}/>)}</div><span>Con cariño, siempre <Heart size={12}/></span></footer>{import.meta.env.DEV&&<button className="edit-button" onClick={()=>setEditor(true)}>Personalizar</button>}{editor&&<LocalEditor data={data} onClose={()=>setEditor(false)} onSave={v=>{setData(v);localStorage.setItem('para-ti-contenido',JSON.stringify(v))}}/>}<Burst id={burst}/></div></MotionConfig>}
createRoot(document.getElementById('root')).render(<App/>);
