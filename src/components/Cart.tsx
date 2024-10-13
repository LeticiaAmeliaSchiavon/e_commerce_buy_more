import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext || cartContext.cart.length === 0) {
    return (
      <div className="container mt-5">
        <h2>Seu carrinho está vazio</h2>
        <Link to="/" className="btn btn-primary">Continuar comprando</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Seu carrinho</h2>
      <ul className="list-group">
        {cartContext.cart.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.title} - ${item.price} x {item.quantity}
            <button className="btn btn-danger" onClick={() => cartContext.removeItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3>Total: ${cartContext.totalPrice()}</h3>
        <button className="btn btn-success">
        <Link to="/checkout" className="btn btn-success">Fazer o check-out</Link>
        </button>
      </div>
      <button className="btn btn-danger mt-2" onClick={cartContext.clearCart}>Limpar carrinho</button>
    </div>
  );
};

export default Cart;
