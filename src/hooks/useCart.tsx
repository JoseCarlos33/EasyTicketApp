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
}

const CartContext = createContext({} as IAuthContextData);

function CartProvider({ children }: AuthProviderProps) {
  const [cart, setCart] = useState<Array<CartProps>>([]);
  // const [signed, setSigned] = useState(false);

  // const userTokenKey = '@ea:token';
  // const userKey = '@easyTicket:user';

  function handleChangeCart(product: CartProps) {
    const isSameProduct = cart.filter(item => item.productId === product.productId)?.[0]
    const cartWithoutFindProduct = cart.filter(item => item.productId !== product.productId)

    const newProductsOrsTickets = !!isSameProduct 
      ? [...cartWithoutFindProduct, {...isSameProduct, ["tickets"]: [...isSameProduct.tickets, ...product.tickets]}]
      : [...cart, product]
    
    setCart(newProductsOrsTickets)
    Alert.alert('Produto adicionado ao carrinho com sucesso!');
  }


// useEffect(() => {
// async function loadStorageData(): Promise<void> {
//   setUserStorageLoading(true)
//   const user = await AsyncStorage.getItem(userKey) ?? "{}";
//   const useFormatted = JSON.parse(user);

//   if (user) {
//     setSigned(true);
//   }

//   setTimeout(() => {
//     setUserStorageLoading(false)
//   }, 500);
// }

//   loadStorageData();
// }, []);
return (
  <CartContext.Provider value={{
    cart,
    handleChangeCart
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
