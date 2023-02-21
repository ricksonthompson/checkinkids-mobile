import {useEffect, useState} from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/Input';
import {useAuth} from '../../hooks/auth';
import {ChildrenDTO} from '../../interfaces/children/children.interface';
import {getAll} from '../../services/childrens/children.service';
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
  IconNative,
} from './styles';
import AvatarIcon from '../../assets/avatar.png';
import InfoIcon from '../../assets/info.png';
import {calculateAge} from '../../utils/date.service';
import Icon from 'react-native-vector-icons/Ionicons';

export const ChildrensScreen = () => {
  const context = useAuth();

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

      const response = await getAll(context.user!.token, data);

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
      <Container>
        <Title>Crianças</Title>
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
                <Button>
                  <IconNative source={InfoIcon} />
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
