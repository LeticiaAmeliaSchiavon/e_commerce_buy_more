import React from 'react';

interface ItemDetailProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  };
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  return (
    <div className="card" style={{ width: '24rem', margin: 'auto' }}>
      <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">R${item.price.toFixed(2)}</p>
        <a href="#" className="btn btn-success">
          Adicionar ao Carrinho
        </a>
      </div>
    </div>
  );
};

export default ItemDetail;
