import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const orderId = location.state?.orderId;

  return (
    <div className="container mt-5">
      <h1>Obrigado pela sua compra!</h1>
      <p>O ID do seu pedido é: <strong>{orderId}</strong></p>
      <p>Enviaremos um e-mail de confirmação em breve.</p>
    </div>
  );
};

export default OrderConfirmation;
