import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginProps {
  email: string;
  password: string;
}

interface UserProps {
  id: string;
  name: string;
}

interface IAuthContextData {
  user: UserProps;
  signOut(): Promise<void>;
  signIn: ({ email, password }: LoginProps) => Promise<void>;
  userStorageLoading: boolean;
  signed: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [userStorageLoading, setUserStorageLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  const userTokenKey = '@ea:token';
  const userKey = '@easyTicket:user';

  const signIn = async ({ email, password }: LoginProps) => {
    const data = {
      id: "12373",
      name: "José",
      email: email
    }
    setSigned(true);
    await AsyncStorage.setItem(userTokenKey, "12312434123");
    await AsyncStorage.setItem(userKey, JSON.stringify(data));
  };

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem(userKey);
    setSigned(false);
    setUser({} as UserProps);
  }, []);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      setUserStorageLoading(true)
      const user = await AsyncStorage.getItem(userKey) ?? "{}";
      const useFormatted = JSON.parse(user);

      if (user) {
        setSigned(true);
        setUser(useFormatted);
      }

      setTimeout(() => {
        setUserStorageLoading(false)
      }, 500);
    }

    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      signOut,
      signIn,
      signed,
      userStorageLoading,
    }}>
      {children}
    </AuthContext.Provider>
  )
}


function useAuth() {
  const context = useContext(AuthContext);

  return context;
}


export { AuthProvider, useAuth }
