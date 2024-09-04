import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget: React.FC = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
    </div>
  );
};

export default CartWidget;
