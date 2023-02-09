import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  propsNavigationDrawer,
  propsNavigationStack,
} from '../../interfaces/navigation/types';
import {Children} from '../../screens/Children';
import {Cults} from '../../screens/Cults';
import {SelectChildrenScreen} from '../../screens/SelectChildren';
import {CheckScreen} from '../../screens/Check';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {

  return (
    <Navigator initialRouteName={'Cults'}>
      <Screen
        name="Children"
        component={Children}
        options={{title: 'Crianças'}}
      />
      <Screen
        name="Cults"
        component={Cults}
        options={{
          title: 'Cultos',
          headerShown: false,
        }}
      />
      <Screen
        name="SelectChildren"
        component={SelectChildrenScreen}
        options={{
          headerTitle: 'Adicionar crianças',
          headerTitleStyle: {
            fontFamily: 'DINNextW1G-Bold',
          },
          headerShown: true,
        }}
      />
      <Screen
        name="Check"
        component={CheckScreen}
        options={{
          headerTitle: 'Checar informações',
          headerTitleStyle: {
            fontFamily: 'DINNextW1G-Bold',
          },
        }}
      />
    </Navigator>
  );
}
