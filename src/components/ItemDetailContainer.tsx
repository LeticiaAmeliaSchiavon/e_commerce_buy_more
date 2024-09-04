import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../mockProducts';
import ItemDetail from './ItemDetail';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

const ItemDetailContainer: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const [item, setItem] = useState<Product | null>(null);

  useEffect(() => {
    if (itemId) {
      getItem(parseInt(itemId)).then((product) => {
        setItem(product);
      });
    }
  }, [itemId]);

  return (
    <div className="container mt-4">
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Carregando detalhes do produto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
