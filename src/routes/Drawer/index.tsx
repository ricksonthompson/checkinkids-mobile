import React, {useState} from 'react';
import {propsNavigationDrawer} from '../../interfaces/navigation/types';
import {ChildrensScreen} from '../../screens/Childrens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Stack from '../Stack';
import {logger} from '../../utils/logger.service';
import {Header} from '../../components/Header';
import {useAuth} from '../../hooks/auth';
import Login from '../../screens/Login';

const {Navigator, Screen} = createDrawerNavigator<propsNavigationDrawer>();

export default function () {
  const {user} = useAuth();

  const [currentRoute, setCurrentRoute] = useState<string>();

  return (
    <Navigator
      screenOptions={{
        drawerStyle: {
          justifyContent: 'center',
          borderTopRightRadius: 20,
        },
        headerStyle: {
          backgroundColor: '#F9E435',
          height: 75,
        },
        header: () => <Header />,
        headerShown:
          currentRoute === 'Check' || currentRoute === 'SelectChildren'
            ? false
            : true,
        gestureHandlerProps: {
          enabled:
            currentRoute === 'Check' || currentRoute === 'SelectChildren'
              ? false
              : true,
        },
      }}
      screenListeners={{
        state: (event: any) => {
          event?.data?.state.routes?.forEach((routeHistory: any) => {
            routeHistory.state?.routes.forEach((route?: any) => {
              if (route.name === 'Check' || route.name === 'SelectChildren') {
                logger.debug('---------> Route:', route.name);
                setCurrentRoute(route?.name);
                return;
              }
              setCurrentRoute('');
            });
          });
        },
      }}>
      {user?.token == null ? (
        <Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Screen
            name="CultsStack"
            component={Stack}
            options={{
              title: 'Cultos',
              headerTitle: 'Checkin Kids',
              headerTitleStyle: {
                fontFamily: 'DINNextW1G-Bold',
              },
            }}
          />
          <Screen
            name="Childrens"
            component={ChildrensScreen}
            options={{
              title: 'Crianças',
              headerTitle: 'Checkin Kids',
              headerTitleStyle: {
                fontFamily: 'DINNextW1G-Bold',
              },
            }}
          />
        </>
      )}
    </Navigator>
  );
}
