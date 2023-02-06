import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {useForm, FieldValues} from 'react-hook-form';
import Input from '../../components/Input';
import {Container, Text} from './styles';
import {signInRequest} from '../../services/user/user.service';
import {logger} from '../../utils/logger.service';
import {StackActions, useNavigation} from '@react-navigation/native';
import {CultsScreenNavigationProp} from '../../interfaces/navigation/types';
import {Footer} from '../../components/Footer';
import CheckInKidsLogo from '../../assets/checkin-kids-logo.png';
import { EUserType } from '../../utils/ETypes';
import { useAuth } from '../../hooks/auth';
import { IAlert } from '../../interfaces/alert/alert.interface';
import { IUser } from '../../interfaces/user/user.interface';

export default function Login() {
  const context = useAuth();
  
  const [isLoading, setLoading] = useState<boolean>(false);
  const [userLogged, setUserLogged] = useState<IUser | null>(context.user);

  const navigation = useNavigation<CultsScreenNavigationProp>();

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

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const SignIn = async (data: FieldValues) => {
    const {email, password} = data;

    try {
      setLoading(true);

      const response = await signInRequest({
        email,
        password,
      });

      setLoading(false);
      
      context.SetUserLogged({
        id: response.id,
        name: response.name,
        email: response.email,
        profileUrl: response.profileUrl,
        phone: response.phone,
        token: response.token,
        type: response.type,
      })

      logger.info(response);

      navigation.dispatch(StackActions.replace('Cults'));
      
    } catch (error: any) {
      setLoading(false);

      handleAlert({
        title: 'Falha na autenticação',
        message: error?.message === 'Network Error' 
        ? 'O servidor está indisponível!'
        : error?.response?.data?.message,
        closeMessage: 'Fechar',
        confirmMessage: 'OK'
      })

      logger.error(error);
    }
  };

  return (
    <Container>
      <View style={style.container}>
        <View style={{alignSelf: 'center', marginBottom: 50}}>
          <Image source={CheckInKidsLogo} style={{height: 100, width: 230}} />
        </View>

        <Input
          name="email"
          control={control}
          rules={{
            required: true,
            minLength: 10,
          }}
          error={errors.email}
          placeholder="Seu e-mail"
        />

        <Input
          name="password"
          control={control}
          rules={{
            minLength: 3,
            required: true,
          }}
          error={errors.password}
          placeholder="Sua senha"
          secureTextEntry={true}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color="#F64427" />
        ) : (
          <TouchableOpacity style={style.button} onPress={handleSubmit(SignIn)}>
            <Text>Acessar</Text>
          </TouchableOpacity>
        )}
      </View>
      <Footer />
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9E435',
    marginTop: 20,
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    color: '#4b5c6b',
    fontSize: 14,
    fontFamily: 'DINNextW1G-Regular',
  },
  input: {
    fontFamily: 'DINNextW1G-Regular',
    fontSize: 14,
    color: '#4b5c6b',
  },
});
