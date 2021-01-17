import React, { useState } from 'react'
import styles from './LoadableImage.module.css';

type LoadableImageType = {
  src: string,
  alt?: string,
  onLoad?: () => void
}

const LoadableImage: React.FC<LoadableImageType> = ({ src, alt = '', onLoad = () => { } }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerLoaded = isLoaded && styles.containerLoaded;
  const imageLoaded = isLoaded && styles.imageLoaded;
  return (
    <div className={`${styles.container} ${containerLoaded}`}>
      <img className={`${styles.image} ${imageLoaded}`} src={src} alt={alt} />
    </div>
  )
}

export default LoadableImage;
