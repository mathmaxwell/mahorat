import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function RevealSection({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} id={id} className={`reveal-section ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
