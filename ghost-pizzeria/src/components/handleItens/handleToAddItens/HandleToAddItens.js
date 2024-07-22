import React from 'react';
import { useState } from 'react';

const HandleToAddItens = (item, cart, setCart) => {
  return (
    <div>
      <ul>
        {cart.map((item, index) => <p key={index}>{item.displayName}</p>)}
      </ul>
    </div>
  );
};

export default HandleToAddItens;