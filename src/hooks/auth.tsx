import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  PropsWithChildren,
} from 'react';
import {EUserType} from '../utils/ETypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logger } from '../utils/logger.service';

interface IUser {
  id: string;
  name: string;
  phone: string;
  email: string;
  profileUrl?: string;
  type: EUserType;
  token: string;
}

interface AuthContextData {
  signed: boolean;
  user: IUser | null;
  SetUserLogged(user: IUser): Promise<void>;
  Logout(): void;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  async function getUserFromStorage() {
    try {
      const storagedUser = await AsyncStorage.getItem('@CheckInKids:user');

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
    } catch(e) {
      logger.error('Erro ao recuperar usuário logado!')
    }
  }

  useEffect(() => {
    getUserFromStorage();
  }, []);

  async function SetUserLogged(user: IUser) {
    const userInString = JSON.stringify(user);

    await AsyncStorage.setItem('@CheckInKids:user', userInString);

    setUser(user);
  }

  async function Logout() {
    setUser(null);
    await AsyncStorage.setItem('@CheckInKids:user', '');
  }

  return (
    <AuthContext.Provider
      value={{signed: Boolean(user?.token), user, SetUserLogged, Logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
