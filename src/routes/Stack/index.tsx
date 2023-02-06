import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {propsNavigationStack} from '../../interfaces/navigation/types';
import {Children} from '../../screens/Children';
import {Cults} from '../../screens/Cults';
import Login from '../../screens/Login';
import { SelectChildrenScreen } from '../../screens/SelectChildren';
import { useAuth } from '../../hooks/auth';
import { CheckScreen } from '../../screens/Check';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {
  const context = useAuth();

  return (
    <Navigator initialRouteName={context.signed ? "Cults" : "Login"} screenOptions={{headerShown: false}}>
      <Screen name="Children" component={Children} />
      <Screen name="Cults" component={Cults} />
      <Screen name="Login" component={Login} />
      <Screen name="SelectChildren" component={SelectChildrenScreen} />
      <Screen name="Check" component={CheckScreen} />
    </Navigator>
  );
}
