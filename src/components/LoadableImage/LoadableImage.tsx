import React, { useEffect, useRef, useState } from 'react'
import styles from './LoadableImage.module.css';
import cn from 'classnames';
import useOnScreen from '../../hooks/useOnScreen';

type LoadableImageType = {
  src: string
  alt?: string
  onLoad?: () => void
}

const LoadableImage: React.FC<LoadableImageType> = ({ src, alt = '', onLoad = () => { } }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(containerRef);

  useEffect(() => {
    if (!isVisible || isLoaded) {
      return;
    }
    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
        onLoad();
      }
      imageRef.current.src = src;
    }
  }, [src, isVisible, onLoad, isLoaded]);

  return (
    <div ref={containerRef} className={cn(styles.container, {
      [styles.containerLoaded]: isLoaded
    })}>
      {(isVisible || isLoaded) && (<img src={''} ref={imageRef} className={cn(styles.image, {
        [styles.imageLoaded]: isLoaded
      })} alt={alt} />)}
    </div>
  )
}

export default LoadableImage;
