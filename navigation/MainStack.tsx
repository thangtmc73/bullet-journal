import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConventionsPage from '../pages/conventions-page/ConventionsPage';
import DayDetailPage from '../pages/day-detail-page/DayDetailPage';
import * as ScreenKeys from './screenKeys';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName={ScreenKeys.DAY_DETAIL_PAGE}>
      <Stack.Screen
        name={ScreenKeys.CONVENTIONS_PAGE}
        component={ConventionsPage}
        options={{
          title: 'Conventions',
        }}
      />
      <Stack.Screen
        name={ScreenKeys.DAY_DETAIL_PAGE}
        component={DayDetailPage}
        options={{
          title: 'Today',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
