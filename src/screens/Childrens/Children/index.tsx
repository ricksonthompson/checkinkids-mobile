import {useEffect, useState} from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Text, Title} from './styles';
import AvatarIcon from '../../assets/avatar.png';
import {useAuth} from '../../../hooks/auth';
import {ChildrenDTO} from '../../../interfaces/children/children.interface';
import Input from '../../../components/Input';
import {calculateAge} from '../../../utils/date.service';
import {create} from '../../../services/childrens/children.service';
import {logger} from '../../../utils/logger.service';

export const ChildrenScreen = () => {
  const context = useAuth();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [children, setChildren] = useState<ChildrenDTO>();
  const [isLoading, setLoading] = useState<boolean>(false);

  async function registerChildren(data?: FieldValues) {
    try {
      setLoading(true);

      const response = await create(context.user!.token, data as any);

      setChildren(response);
      setLoading(false);

      logger.info(children);
    } catch (error) {
      logger.info(error);
    }
  }

  return (
    <>
      <Container>
        <Title>Cadastrar</Title>
        <Input
          name="name"
          control={control}
          rules={{
            required: true,
            minLength: 3,
          }}
          error={errors.name}
          placeholder="Nome"
        />
        <TouchableOpacity
          style={style.button}
          onPress={handleSubmit(registerChildren)}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
};

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
    borderRadius: 12,
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
