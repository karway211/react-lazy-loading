import React, { useEffect, useRef, useState } from 'react'
import styles from './LoadableImage.module.css';
import cn from 'classnames';

type LoadableImageType = {
  src: string
  alt?: string
  onLoad?: () => void
}

const LoadableImage: React.FC<LoadableImageType> = ({ src, alt = '', onLoad = () => { } }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => setIsLoaded(true);
      imageRef.current.src = src;
    }
  }, [src]);

  console.log(isLoaded);
  return (
    <div className={cn(styles.container, {
      [styles.containerLoaded]: isLoaded
    })}>
      <img src={''} ref={imageRef} className={cn(styles.image, {
        [styles.imageLoaded]: isLoaded
      })} alt={alt} />
    </div>
  )
}

export default LoadableImage;
