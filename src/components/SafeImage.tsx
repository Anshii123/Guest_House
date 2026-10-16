"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/images/hero-exterior.jpg",
  containerClassName = "",
  className = "",
  fill,
  priority = false,
  sizes,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes || (fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined)}
      onError={handleError}
      className={`duration-500 ease-out ${className}`}
    />
  );
}
