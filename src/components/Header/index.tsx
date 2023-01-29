import {Image} from 'react-native';
import React from 'react';
import IBCLKidsLogo from '../../assets/kids-logo.png';
import AvatarIcon from '../../assets/avatar.png';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/Entypo';

export const Header = () => {
  return (
    <Container>
      <Icon name="menu" size={35} color="#4b5c6b" />
      <Image source={IBCLKidsLogo} style={{height: 60, width: 68}} />
      <Image source={AvatarIcon} style={{height: 45, width: 45}} />
    </Container>
  );
};
