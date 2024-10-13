import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const cartContext = useContext(CartContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email !== emailConfirm) {
      alert('Os e-mails não correspondem!');
      return;
    }

    console.log('Informações de check-out:', { name, surname, phone, email, cart: cartContext?.cart });
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Sobrenome</label>
          <input type="text" className="form-control" value={surname} onChange={(e) => setSurname(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirme o E-mail</label>
          <input type="email" className="form-control" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Concluir compra</button>
      </form>
    </div>
  );
};


export default Checkout;
