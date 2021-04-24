import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConventionsPage from '../pages/conventions-page/ConventionsPage';
import * as ScreenKeys from './screenKeys';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenKeys.CONVENTIONS_PAGE}
        component={ConventionsPage}
        options={{
          title: 'Conventions',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
