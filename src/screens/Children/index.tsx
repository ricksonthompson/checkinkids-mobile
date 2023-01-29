import {Image} from 'react-native';
import React from 'react';
import {Container, Form, Header, TextInput, Title} from './styles';
import IBCLKidsLogo from '../../assets/kids-logo.png';
import {Center, Heading, NativeBaseProvider, VStack} from 'native-base';
import {Input} from '../../components/Input';

export const Children = () => {
  return (
    <NativeBaseProvider>
      <Header>
        <Image source={IBCLKidsLogo} style={{height: 75, width: 85}} />
      </Header>
      <VStack bgColor="gray.300" flex={1} px={10}>
        <Center>
          <Heading>Cadastrar criança</Heading>

          <Input placeholder="Nome" />
          <Input placeholder="Data de nascimento" />
          <Input placeholder="Contato" />
          <Input placeholder="E-mail" />
          
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
};
