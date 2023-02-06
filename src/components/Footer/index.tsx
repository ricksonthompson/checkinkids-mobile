import {Image} from 'react-native';
import React from 'react';
import IBCLLogo from '../../assets/ibcl-logo-v2.png';
import {Container} from './styles';

export const Footer = () => {
  return (
    <Container>
      <Image source={IBCLLogo} style={{height: 60, width: 85}} />
    </Container>
  );
};
