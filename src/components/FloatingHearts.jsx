import React,{useState,useEffect} from 'react';
import {motion,AnimatePresence} from 'motion/react';
import {Heart,ArrowRight,Sparkles,Mail,Camera,X,ChevronLeft,ChevronRight,Download} from 'lucide-react';
import {rise,asset} from './shared';
export default function FloatingHearts(){return <div className="floating" aria-hidden="true">{Array.from({length:18},(_,i)=><span key={i} style={{left:`${(i*37)%100}%`,animationDelay:`${-i*1.7}s`,animationDuration:`${14+i%5}s`,fontSize:12+i%4*5}}>{i%3?'♡':'✧'}</span>)}</div>}
