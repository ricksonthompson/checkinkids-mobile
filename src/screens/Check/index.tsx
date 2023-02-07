import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../components/Header';
import {CheckScreenNavigationProp, CultsScreenNavigationProp} from '../../interfaces/navigation/types';
import {calculateAge} from '../../utils/date.service';
import {
  Button,
  Container,
  Footer,
  InfoChildren,
  ProfileAndInfo,
  Responsibles,
  Text,
  Title,
} from './styles';
import AvatarIcon from '../../assets/avatar.png';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useEffect, useState} from 'react';
import {RegisterPointRequest} from '../../services/cults/request/registerPoints.request';
import {registerPoints} from '../../services/cults/cult.service';
import {useAuth} from '../../hooks/auth';
import {logger} from '../../utils/logger.service';
import { IAlert } from '../../interfaces/alert/alert.interface';

export const CheckScreen = () => {
  const context = useAuth();
  const {children, cultId} = useRoute<CheckScreenNavigationProp>().params;
  const navigation = useNavigation<CultsScreenNavigationProp>();
  
  const [points, setPoints] = useState<RegisterPointRequest>({});
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleAlert = (props: IAlert) => {
    Alert.alert(`${props.title}`, `${props.message}`, [
      {
        text: `${props.closeMessage}`,
        onPress: () => props.closeAction ? props.closeAction() : console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: `${props.confirmMessage}`,
        onPress: () => props.confirmAction ? props.confirmAction() : console.log('OK Pressed'),
      },
    ]);
  };

  async function handleRegisterPoints() {
    try {
      setLoading(true);

      const response = await registerPoints(
        cultId,
        children.id,
        context.user!.token,
        points,
      );

      logger.info(response);
      setLoading(false);

      handleAlert({
        title: '🥳 Check-in realizado com sucesso!',
        message: `${children.name} foi adicionado ao culto!`,
        closeMessage: 'FECHAR',
        confirmMessage: 'Voltar para o início',
        confirmAction: () => navigation.dispatch(StackActions.replace('Cults')),
        closeAction: () => navigation.dispatch(StackActions.replace('Cults')),
      })
    } catch (error: any) {
      setLoading(false);
      handleAlert({
        title: '❌ Erro ao realizar check-in',
        message: error?.message === 'Network Error'
        ? 'O servidor está indisponível!'
        : error?.response?.data?.message,
        closeMessage: 'FECHAR',
        confirmMessage: 'Voltar para o início',
        confirmAction: () => navigation.dispatch(StackActions.replace('Cults')),
        closeAction: () => navigation.dispatch(StackActions.replace('Cults')),
      })
    }
  }

  useEffect(() => {
    logger.info('point updated', points)
  }, [points])

  return (
    <>
      <Header />
      <Container>
        <ProfileAndInfo>
          <Image source={AvatarIcon} style={{height: 80, width: 80}} />
          <InfoChildren>
            <Text style={{fontSize: 25}} fontStyle={'Bold'}>
              {children.name}
            </Text>
            <Text style={{fontSize: 20}} fontStyle={'Regular'}>{`${calculateAge(
              children.birthDate,
            )}`}</Text>
          </InfoChildren>
        </ProfileAndInfo>
        <Title style={{fontSize: 25}}>Responsáveis</Title>
        {children.responsibles.map(resposible => (
          <Responsibles key={resposible.id}>
            <Text fontStyle={'Bold'}>{resposible.name}</Text>
            <Text fontStyle={'Regular'}>{resposible.email}</Text>
            <Text fontStyle={'Regular'}>{resposible.phone}</Text>
          </Responsibles>
        ))}
        <Title style={{fontSize: 25}}>Check:</Title>
        <BouncyCheckbox
          onPress={(isChecked: boolean) => {
            setPoints({...points, isInvited: isChecked});
          }}
          size={35}
          textComponent={
            <Text fontStyle={'Regular'} style={{fontSize: 16, marginLeft: 5}}>
              É visitante?
            </Text>
          }
          innerIconStyle={{borderWidth: 2}}
          style={{marginBottom: 5, marginTop: 5}}
        />
        <BouncyCheckbox
          onPress={(isChecked: boolean) => {
            setPoints({...points, meditation: isChecked});
          }}
          size={35}
          textComponent={
            <Text fontStyle={'Regular'} style={{fontSize: 16, marginLeft: 5}}>
              Meditação
            </Text>
          }
          innerIconStyle={{borderWidth: 2}}
          style={{marginBottom: 5, marginTop: 5}}
        />
        <BouncyCheckbox
          onPress={(isChecked: boolean) => {
            setPoints({...points, verse: isChecked});
          }}
          size={35}
          textComponent={
            <Text fontStyle={'Regular'} style={{fontSize: 16, marginLeft: 5}}>
              Versículo da semana
            </Text>
          }
          innerIconStyle={{borderWidth: 2}}
          style={{marginBottom: 5, marginTop: 5}}
        />
      </Container>
      <Footer>
        {isLoading ? (
          <ActivityIndicator size="large" color="#F64427" />
        ) : (
          <TouchableOpacity style={style.button} onPress={handleRegisterPoints}>
            <Text fontStyle="Bold">Concluir</Text>
          </TouchableOpacity>
        )}
      </Footer>
    </>
  );
};

const style = StyleSheet.create({
  button: {
    width: '40%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B0F76D',
    borderRadius: 12,
  },
});
