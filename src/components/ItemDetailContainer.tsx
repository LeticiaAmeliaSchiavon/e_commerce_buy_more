import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

interface ItemDetailProps {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

const itemData: ItemDetailProps = {
  id: 1, title: 'Produto 1', description: 'Descrição do Produto 1', price: 100, pictureUrl: 'https://via.placeholder.com/150'
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState<ItemDetailProps | null>(null);

  useEffect(() => {
    const mockFetch = new Promise<ItemDetailProps>((resolve) => {
      setTimeout(() => {
        resolve(itemData);
      }, 2000);
    });

    mockFetch.then((data) => {
      setItem(data);
    });
  }, []);

  return (
    <div>
      {item ? <ItemDetail {...item} /> : <p>Carregando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
