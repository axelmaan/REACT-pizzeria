import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card mb-4">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ingredientes: {ingredients.join(', ')}</p>
        <p className="card-text">Precio: ${price}</p>
        <button className="btn btn-primary">Ver Más</button>
        <button className="btn btn-secondary">Agregar</button>
      </div>
    </div>
  );
};

export default CardPizza;
