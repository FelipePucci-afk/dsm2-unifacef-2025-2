import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './screens/Inicio';
import CompDia from './screens/CompDia';
import CompSemana from './screens/CompSemana';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="CompDia"
          component={CompDia}
          options={{ title: 'Compromissos do dia' }}
        />
        <Stack.Screen
          name="CompSemana"
          component={CompSemana}
          options={{ title: 'Compromissos da semana' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
