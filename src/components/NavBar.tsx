import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';
import '../assets/styles/custom.css'; 

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ height: '60px', marginRight: '5px', marginLeft: '70px' }} />
          BUY MORE
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/1">Eletrodomésticos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/2">Informática</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/3">Móveis</Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
