import React, {useEffect, useState} from 'react';
import {Container, Text, Title} from './styles';
import {Header} from '../../components/Header';
import {getAllCults} from '../../services/cults/cult.service';
import {logger} from '../../utils/logger.service';
import {Cult} from '../../components/Cult';
import {ICult} from '../../interfaces/cult/cult.interface';
import {ActivityIndicator, Alert} from 'react-native';
import {useAuth} from '../../hooks/auth';
import {IUser} from '../../interfaces/user/user.interface';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {CultsScreenNavigationProp} from '../../interfaces/navigation/types';
import { IAlert } from '../../interfaces/alert/alert.interface';
import { Footer } from '../../components/Footer';

export const Cults = () => {
  const context = useAuth();
  const navigation = useNavigation<CultsScreenNavigationProp>();

  const [cults, setCult] = useState<ICult[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [userLogged, setUserLogged] = useState<IUser | null>(context.user);

  const handleAlert = (props: IAlert) => {
    Alert.alert(`${props.title}`, `${props.message}`, [
      {
        text: `${props.closeMessage}`,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: `${props.confirmMessage}`, onPress: () => console.log('OK Pressed')},
    ]);
  }

  async function getCults() {
    try {
      setLoading(true);

      const response = await getAllCults(context.user!.token);

      setCult(response.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      logger.info(error);
    }
  }

  useEffect(() => {
    getCults();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>Cultos</Title>
        {isLoading ? (
          <ActivityIndicator size="large" color="#F64427" />
        ) : cults?.length ? (
          cults.map(cult => (
            <Cult
              key={cult.id}
              id={cult.id}
              date={cult.date}
              shift={cult.shift}
              status={cult.status}
              time={cult.time}
              quantityChildrens={cult.childrens?.length ?? 0}
            />
          ))
        ) : (
          <>
            <Text>⚠️ Erro ao listar as informações do servidor.</Text>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};
