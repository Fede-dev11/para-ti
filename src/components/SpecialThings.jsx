import React,{useState,useEffect} from 'react';
import {motion,AnimatePresence} from 'motion/react';
import {Heart,ArrowRight,Sparkles,Mail,Camera,X,ChevronLeft,ChevronRight,Download} from 'lucide-react';
import {rise,asset} from './shared';
export default function SpecialThings({data}){const [selected,setSelected]=useState(null);return <><div className="constellation">{data.cualidades.map(([title],i)=><button key={i} className={'star star-'+i+(selected===i?' selected':'')} onClick={()=>setSelected(i)}><Sparkles size={20}/><span>{title}</span></button>)}<div className="orbit"/><div className="orbit second"/></div><div className="quality-message" aria-live="polite"><AnimatePresence mode="wait"><motion.p key={selected} {...rise}>{selected===null?'Cada estrella guarda algo bonito. Toca una para descubrirlo.':data.cualidades[selected][1]}</motion.p></AnimatePresence></div></>}
