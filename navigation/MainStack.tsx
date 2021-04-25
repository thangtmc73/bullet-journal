import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConventionsPage from '../pages/conventions-page/ConventionsPage';
import DayDetailPage from '../pages/day-detail-page/DayDetailPage';
import { ScreenKey } from '../constants';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName={ScreenKey.CONVENTIONS_PAGE}>
      <Stack.Screen
        name={ScreenKey.CONVENTIONS_PAGE}
        component={ConventionsPage}
        options={{
          title: 'Conventions',
        }}
      />
      <Stack.Screen
        name={ScreenKey.DAY_DETAIL_PAGE}
        component={DayDetailPage}
        options={{
          title: 'Today',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
