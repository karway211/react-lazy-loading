import React from 'react';
import LoadableImageType from '../LoadableImage/LoadableImage';
import styles from './ItemsGrid.module.css';

type ItemsGridType = {
  data: Array<string>
}

const ItemsGrid: React.FC<ItemsGridType> = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item, ix) => {
        return (
          <div key={ix} className={styles.item}>
            <LoadableImageType src={item} />
          </div>
        )
      })}
    </div>
  )
}

export default ItemsGrid;
