import React,{useState,useEffect} from 'react';
import {motion,AnimatePresence} from 'motion/react';
import {Heart,ArrowRight,Sparkles,Mail,Camera,X,ChevronLeft,ChevronRight,Download} from 'lucide-react';
import {rise,asset} from './shared';
export default function Burst({id}) {return <AnimatePresence>{id>0&&<div key={id} className="burst" aria-hidden="true">{Array.from({length:24},(_,i)=><motion.span key={i} initial={{x:0,y:0,opacity:1,scale:.3}} animate={{x:Math.cos(i)* (100+i*7),y:Math.sin(i)*(100+i*6),opacity:0,scale:1.3}} transition={{duration:1.7}} >♥</motion.span>)}</div>}</AnimatePresence>}
