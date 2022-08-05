import React from 'react';

export const CartContext = React.createContext(null);

export function useCartContext() {
  const context = React.useContext(CartContext);
  if (context == null) throw new Error('Context must be used inside Provider!');
  return context;
}
