import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, User, Users, UsersInfiniteScroll} from '@src/components';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={User} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen
          name="UsersInfiniteScroll"
          options={{title: 'Users/Infinite Scroll'}}
          component={UsersInfiniteScroll}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
