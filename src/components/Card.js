import React from 'react';

const Card = (props) => {
  return (
    <div>
        <p>{props.nome}</p>
        <p>{props.sobrenome}`</p>
    </div>
  );
};

export default Card;