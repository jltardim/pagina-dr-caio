import React, { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
};

const DEFAULT_FALLBACK = '/images/placeholder.svg';

const ImageWithFallback: React.FC<Props> = ({ src, alt, className, fallbackSrc }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      decoding="async"
      onError={() => setCurrentSrc(fallbackSrc || DEFAULT_FALLBACK)}
      loading="lazy"
    />
  );
};

export default ImageWithFallback;