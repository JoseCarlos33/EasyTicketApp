import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

interface AuthProviderProps {
  children: ReactNode;
}

interface TicketProps {
  id: number;
  value: number;
  title: string;
}

interface CartProps {
  productId: number;
  tickets: Array<TicketProps>;
}

interface IAuthContextData {
  cart: Array<CartProps>;
  handleChangeCart: (product: CartProps) => void;
  handleClearCart: () => void;
  totalTicketsValue: number;
}

const CartContext = createContext({} as IAuthContextData);

function CartProvider({ children }: AuthProviderProps) {
  const [cart, setCart] = useState<Array<CartProps>>([]);
  const [allTickets, setAllTickets] = useState<Array<TicketProps>>([]);
  const [totalTicketsValue, setTotalTicketsValue] = useState(0);

  function calculateTotalValue(){
    const totalValue = allTickets?.reduce((total: number, ticket: any) => total + ticket.value, 0);
    console.log("teste value", totalValue, allTickets)
    setTotalTicketsValue(totalValue)
  }

  function handleChangeCart(product: CartProps) {
    const isSameProduct = cart.filter(item => item.productId === product.productId)?.[0]
    const cartWithoutFindProduct = cart.filter(item => item.productId !== product.productId)

    const newProductsOrsTickets = !!isSameProduct
      ? [...cartWithoutFindProduct, { ...isSameProduct, ["tickets"]: [...isSameProduct.tickets, ...product.tickets] }]
      : [...cart, product]

    setCart(newProductsOrsTickets)
    Alert.alert('Produto adicionado ao carrinho com sucesso!');

    newProductsOrsTickets.map((item, index) => {
      if(index === 0){
        setAllTickets([...item.tickets])
      }
      if(index !== 0){
        setAllTickets(oldTickets => [...oldTickets, ...item.tickets])
      }
    })
  }

  function handleClearCart(){
    setCart([])
  }

  useEffect(() => {
    calculateTotalValue();
  }, [allTickets])

  return (
    <CartContext.Provider value={{
      cart,
      handleChangeCart,
      totalTicketsValue,
      handleClearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}



function useCart() {
  const context = useContext(CartContext);

  return context;
}


export { CartProvider, useCart }
