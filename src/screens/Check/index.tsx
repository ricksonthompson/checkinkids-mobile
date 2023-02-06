import {useNavigation, useRoute} from '@react-navigation/native';
import {Image} from 'react-native';
import {Header} from '../../components/Header';
import {useAuth} from '../../hooks/auth';
import {CheckScreenNavigationProp} from '../../interfaces/navigation/types';
import {calculateAge} from '../../utils/date.service';
import {Container, InfoChildren, ProfileAndInfo, Text, Title} from './styles';
import AvatarIcon from '../../assets/avatar.png';

export const CheckScreen = () => {
  const context = useAuth();
  const {children} = useRoute<CheckScreenNavigationProp>().params;

  return (
    <>
      <Header />
      <Container>
        <ProfileAndInfo>
          <Image source={AvatarIcon} style={{height: 85, width: 85}} />
          <InfoChildren>
            <Text>{children.name}</Text>
            <Text>{`${calculateAge(children.birthDate)}`}</Text>
          </InfoChildren>
        </ProfileAndInfo>
        <Title>Responsáveis</Title>
        <Title>Check</Title>
      </Container>
    </>
  );
};
