import React, {useEffect, useState} from 'react';
import {Container, Text, Title} from './styles';
import {getAllCults} from '../../services/cults/cult.service';
import {logger} from '../../utils/logger.service';
import {Cult} from '../../components/Cult';
import {ICult} from '../../interfaces/cult/cult.interface';
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {useAuth} from '../../hooks/auth';
import {IAlert} from '../../interfaces/alert/alert.interface';
import {Footer} from '../../components/Footer';

export const Cults = () => {
  const context = useAuth();

  const [cults, setCult] = useState<ICult[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleAlert = (props: IAlert) => {
    Alert.alert(`${props.title}`, `${props.message}`, [
      {
        text: `${props.closeMessage}`,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: `${props.confirmMessage}`,
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  const getCults = async () => {
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

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getAllCults(context.user!.token);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    getCults();
  }, []);

  return (
    <>
      <Container>
        <Title>Cultos</Title>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
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
        </ScrollView>
      </Container>
      <Footer />
    </>
  );
};
