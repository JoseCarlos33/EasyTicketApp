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

interface TicketProviderProps {
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

interface ITicketContextData {
  cart: Array<CartProps>;
  handleChangeCart: (product: CartProps) => void;
  deleteTicket: (ticketId: number) => void;
  handleClearCart: () => void;
  totalTicketsValue: number;
}

const CartContext = createContext({} as ITicketContextData);

function CartProvider({ children }: TicketProviderProps) {
  const [cart, setCart] = useState<Array<CartProps>>([]);
  const [allTickets, setAllTickets] = useState<Array<TicketProps>>([]);
  const [totalTicketsValue, setTotalTicketsValue] = useState(0);
  const cartStorageKey = '@easyTicket:cart';

  function calculateTotalValue(){
    const totalValue = allTickets?.reduce((total: number, ticket: any) => total + ticket.value, 0);
    setTotalTicketsValue(totalValue)
  }

  function handleChangeTickets(tickets: any){
    tickets.map((item: any, index: any) => {
      if(index === 0){
        setAllTickets([...item.tickets])
      }
      if(index !== 0){
        setAllTickets(oldTickets => [...oldTickets, ...item.tickets])
      }
    })
  }

  function handleChangeCart(product: CartProps) {
    const isSameProduct = cart.filter(item => item.productId === product.productId)?.[0]
    const cartWithoutFindProduct = cart.filter(item => item.productId !== product.productId)

    const newProductsOrsTickets = !!isSameProduct
      ? [...cartWithoutFindProduct, { ...isSameProduct, ["tickets"]: [...isSameProduct.tickets, ...product.tickets] }]
      : [...cart, product]

    setCart(newProductsOrsTickets)
    Alert.alert('Produto adicionado ao carrinho com sucesso!');
  }

  function handleClearCart(){
    setCart([])
  }

  function deleteTicket(ticketId: number){
    const cartWithoutCurrentTicket = cart.filter( ticket => ticket.productId !== ticketId);
    setCart(cartWithoutCurrentTicket)
  }

  useEffect(() => {
    calculateTotalValue();
  }, [allTickets])

  useEffect(() => {
    async function changeStorageData(): Promise<void> {
      const cartFormatted = JSON.stringify(cart);
      await AsyncStorage.setItem(cartStorageKey, cartFormatted);
    }

    changeStorageData();
    handleChangeTickets(cart);
  }, [cart])


  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const cart = await AsyncStorage.getItem(cartStorageKey) ?? "{}";
      const cartFormatted = JSON.parse(cart);

      if (cart) {
        setCart(cartFormatted);
      }
      console.log("CART STORAGE",cartFormatted);
    }

    loadStorageData();
  }, [])

  return (
    <CartContext.Provider value={{
      cart,
      handleChangeCart,
      totalTicketsValue,
      handleClearCart,
      deleteTicket
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
