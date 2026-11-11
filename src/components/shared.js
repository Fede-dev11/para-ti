export const rise={initial:{opacity:0,y:24},animate:{opacity:1,y:0},exit:{opacity:0,y:-15},transition:{duration:.55}};
export const asset=src=>/^https?:|^data:/.test(src)?src:import.meta.env.BASE_URL+src.replace(/^\//,'');
