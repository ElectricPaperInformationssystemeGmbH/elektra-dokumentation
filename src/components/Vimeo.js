import React from 'react';

// Responsiver, lazy-ladender Vimeo-Player.
// Verwendung in Markdown/MDX:  <Vimeo id="1079705067" title="Aufgaben" />
export default function Vimeo({id, title = ''}) {
  return (
    <div className="vimeoEmbed">
      <iframe
        src={`https://player.vimeo.com/video/${id}`}
        title={title || `Vimeo ${id}`}
        loading="lazy"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        allowFullScreen
      />
    </div>
  );
}
