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
      <blockquote className="coincidence-poem">
        <p><em>{momentos.texto}</em></p>
      </blockquote>
    </article>
  );
}
