import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  propsNavigationDrawer,
  propsNavigationStack,
} from '../../interfaces/navigation/types';
import {ChildrensScreen} from '../../screens/Childrens';
import {Cults} from '../../screens/Cults';
import {SelectChildrenScreen} from '../../screens/Cults/SelectChildren';
import {CheckScreen} from '../../screens/Cults/Check';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {

  return (
    <Navigator initialRouteName={'Cults'}>
      <Screen
        name="Childrens"
        component={ChildrensScreen}
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
