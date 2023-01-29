import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {propsNavigationStack} from '../../interfaces/navigation/types';
import {Children} from '../../screens/Children';
import {Cults} from '../../screens/Cults';
import { SelectChildrenScreen } from '../../screens/SelectChildren';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator initialRouteName="Cults" screenOptions={{headerShown: false}}>
      <Screen name="Children" component={Children} />
      <Screen name="Cults" component={Cults} />
      <Screen name="SelectChildren" component={SelectChildrenScreen} />
    </Navigator>
  );
}
