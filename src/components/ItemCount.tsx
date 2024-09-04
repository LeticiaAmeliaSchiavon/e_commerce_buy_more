import React, { useState } from 'react';

interface ItemCountProps {
  initial: number;
  stock: number;
  onAdd: (quantity: number) => void;
}

const ItemCount: React.FC<ItemCountProps> = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-secondary" onClick={handleDecrease} disabled={count <= 1}>
          -
        </button>
        <span className="mx-2">{count}</span>
        <button className="btn btn-outline-secondary" onClick={handleIncrease} disabled={count >= stock}>
          +
        </button>
      </div>
      <button className="btn btn-primary mt-2" onClick={handleAdd} disabled={stock === 0}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ItemCount;
