import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts } from '../mockProducts';
import '../assets/styles/ItemListContainer.css'; 


interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

const ItemListContainer: React.FC<{ greeting: string }> = ({ greeting }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((products: Product[]) => {
      if (categoryId) {
        setItems(products.filter((product: Product) => product.id === parseInt(categoryId)));
      } else {
        setItems(products);
      }
    });
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">{greeting}</h1>
        <p className="lead">Veja todos os nossos produtos!</p>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
