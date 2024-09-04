import React from 'react';
import Item from './Item';


interface ItemListProps {
  items: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  }[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="d-flex flex-wrap">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          pictureUrl={item.pictureUrl}
        />
      ))}
    </div>
  );
};

export default ItemList;
