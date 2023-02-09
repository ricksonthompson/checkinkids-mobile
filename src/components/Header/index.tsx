import {Image, StatusBar, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import IBCLKidsLogo from '../../assets/kids-logo.png';
import LogoutIcon from '../../assets/logout.png';

import type {StatusBarStyle} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

export const Header = () => {
  const {Logout} = useAuth();
  
  const navigation = useNavigation();

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);

  return (
    <Container>
      <StatusBar
        animated={true}
        backgroundColor="#c9bb44"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon name="menu" size={35} color="#4b5c6b" />
      </TouchableOpacity>
      <Image source={IBCLKidsLogo} style={{height: 60, width: 68}} />
      <TouchableOpacity
        onPress={() => Logout()}>
        <Image source={LogoutIcon} style={{height: 30, width: 30}} />
      </TouchableOpacity>
    </Container>
  );
};
