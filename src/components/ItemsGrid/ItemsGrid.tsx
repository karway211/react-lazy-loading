import React from 'react';
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
            <img src={item} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default ItemsGrid;
