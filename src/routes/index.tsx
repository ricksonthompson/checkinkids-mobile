import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
import Stack from './Stack';
import Login from '../screens/Login';
import {useAuth} from '../hooks/auth';

export default function () {
  const context = useAuth();

  return (
    <>
      <NavigationContainer>
        {context.signed ? <Drawer /> : <Login />}
      </NavigationContainer>
    </>
  );
}
