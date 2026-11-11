import React,{useState,useEffect} from 'react';
import {motion,AnimatePresence} from 'motion/react';
import {Heart,ArrowRight,Sparkles,Mail,Camera,X,ChevronLeft,ChevronRight,Download} from 'lucide-react';
import {rise,asset} from './shared';
import Burst from './Burst';
export default function SurpriseGift({data}){const [open,setOpen]=useState(false);return <><button className={'gift-box '+(open?'open':'')} onClick={()=>setOpen(true)} aria-label="Abrir regalo"><div className="bow">♡</div><div className="gift-lid"/><div className="gift-body"><span/></div><Burst id={open?1:0}/></button><AnimatePresence>{open?<motion.div {...rise} className="surprise-message"><Sparkles/><h3>{data.sorpresa}</h3></motion.div>:<motion.p {...rise} className="hint">Toca el regalo. Lo guardé para ti.</motion.p>}</AnimatePresence></>}
