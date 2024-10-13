import React, { createContext, useState, ReactNode } from 'react';

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addItem: (item: CartItem, quantity: number) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
  isInCart: (itemId: number) => boolean;
  totalItems: () => number;
  totalPrice: () => number;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (item: CartItem, quantity: number) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId: number) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId: number) => {
    return cart.some((item) => item.id === itemId);
  };

  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isInCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
