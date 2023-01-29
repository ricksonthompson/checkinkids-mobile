import React, {useEffect, useState} from 'react';
import {Container, Title} from './styles';
import {Header} from '../../components/Header';
import {getAllCults} from '../../services/cults/cult.service';
import {logger} from '../../utils/logger.service';
import {Cult} from '../../components/Cult';
import {ICult} from '../../interfaces/cult/cult.interface';
import { ActivityIndicator } from 'react-native';

export const Cults = () => {
  const [cults, setCult] = useState<ICult[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  async function getCults() {
    try {
      setLoading(true);

      const response = await getAllCults();

      setCult(response.items);
      setLoading(false);

      logger.info(cults);
    } catch (error) {
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
              date={cult.date}
              shift={cult.shift}
              status={cult.status}
              time={cult.time}
              quantityChildrens={cult.childrens?.length ?? 0}
            />
          ))
        ) : (
          <></>
        )}

      </Container>
    </>
  );
};
