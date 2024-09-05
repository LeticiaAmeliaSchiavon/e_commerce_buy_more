import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Item.css'; 


interface ItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

const Item: React.FC<ItemProps> = ({ id, title, description, price, pictureUrl }) => {
  return (
    <div className="card" style={{ width: '20rem', margin: '10px', padding: '10px'  }}>
       <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text-price">R${price.toFixed(2)}</p>
        <Link to={`/item/${id}`} className="btn btn-success">
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default Item;
