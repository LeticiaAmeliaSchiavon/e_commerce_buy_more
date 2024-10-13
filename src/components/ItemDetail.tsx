import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

interface ItemDetailProps {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

const ItemDetail = ({ id, title, description, price, pictureUrl }: ItemDetailProps) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Erro: O CartContext não foi encontrado.</div>;
  }

  const { addItem } = cartContext;

  const onAdd = (quantity: number) => {
    addItem({ id, title, price, quantity }, quantity);
    alert(`Adicionado ${quantity} de ${title} ao carrinho.`);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">R${price.toFixed(2)}</Button>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
