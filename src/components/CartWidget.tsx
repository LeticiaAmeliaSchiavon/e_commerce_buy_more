import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';


const CartWidget: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext || cartContext.totalItems() === 0) {
    return null;
  }

  return (
    <Link to="/cart" className="btn btn-outline-light">
      <FaShoppingCart size={30} /> {cartContext.totalItems() > 0 && <span>{cartContext.totalItems()}</span>}
    </Link>
  );
};

export default CartWidget;
