import {useEffect, useState} from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../components/Header';
import Input from '../../components/Input';
import {useAuth} from '../../hooks/auth';
import {ChildrenDTO} from '../../interfaces/children/children.interface';
import {getAllChildrens} from '../../services/childrens/children.service';
import {logger} from '../../utils/logger.service';
import {
  Children,
  Container,
  InfoChildren,
  ListChildrens,
  Text,
  Title,
  Button,
  ProfileAndInfo,
} from './styles';
import AvatarIcon from '../../assets/avatar.png';
import {calculateAge} from '../../utils/date.service';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CultsScreenNavigationProp, SelectChildrenScreenRouteProp} from '../../interfaces/navigation/types';

export const SelectChildrenScreen = () => {
  const context = useAuth();
  const {cultId} = useRoute<SelectChildrenScreenRouteProp>().params;
  const navigation = useNavigation<CultsScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [childrens, setChildren] = useState<ChildrenDTO[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [childrenListed, setChildrenListed] = useState<ChildrenDTO[]>([]);

  async function litsAllChildrens(data?: FieldValues) {
    try {
      setLoading(true);

      const response = await getAllChildrens(context.user!.token, data);

      setChildren(response.items);
      setLoading(false);

      logger.info(childrens);
    } catch (error) {
      logger.info(error);
    }
  }

  useEffect(() => {
    litsAllChildrens();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>Adicionar criança:</Title>
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
          onPress={handleSubmit(litsAllChildrens)}>
          <Text>Pesquisar</Text>
        </TouchableOpacity>
        <ListChildrens>
          {isLoading ? (
            <ActivityIndicator size="large" color="#F64427" />
          ) : childrenListed?.length ? (
            childrens.map(children => (
              <Children key={children.id}>
                <Image source={AvatarIcon} style={{height: 60, width: 60}} />
                <InfoChildren>
                  <Text>{children.name}</Text>
                  <Text>{`${calculateAge(children.birthDate)}`}</Text>
                </InfoChildren>
              </Children>
            ))
          ) : childrens?.length ? (
            childrens.map(children => (
              <Children key={children.id}>
                <ProfileAndInfo>
                  <Image source={AvatarIcon} style={{height: 60, width: 60}} />
                  <InfoChildren>
                    <Text>{children.name}</Text>
                    <Text>{`${calculateAge(children.birthDate)}`}</Text>
                  </InfoChildren>
                </ProfileAndInfo>
                <Button onPress={() => navigation.navigate('Check', {
                  children,
                  cultId
                })}>
                  <Icon name="arrow-forward-circle" size={55} color="#63C280" />
                </Button>
              </Children>
            ))
          ) : (
            <></>
          )}
        </ListChildrens>
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
