import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { momentos } from '../data/momentos';

export default function MomentsInvitation() {
  return (
    <article className="moments-invitation">
      <div className="moments-symbol" aria-hidden="true">
        <Sparkles size={20} />
        <Heart size={62} strokeWidth={1} />
        <Sparkles size={16} />
      </div>
      <h3>{momentos.mensaje}</h3>
      <p>{momentos.invitacion}</p>
      <span className="moments-signature" aria-hidden="true">Contigo, desde el primer momento. ♡</span>
    </article>
  );
}
