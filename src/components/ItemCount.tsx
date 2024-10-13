import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface ItemCountProps {
  stock: number;
  initial: number;
  onAdd: (quantity: number) => void;
}

const ItemCount = ({ stock, initial, onAdd }: ItemCountProps) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Button variant="dark" onClick={decrease}>-</Button>
      <span>{count}</span>
      <Button variant="dark" onClick={increase}>+</Button>
      <Button variant="primary" onClick={() => onAdd(count)}>Adicionar ao Carrinho</Button>
    </div>
  );
}

export default ItemCount;
