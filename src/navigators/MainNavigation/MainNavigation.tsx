import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  User,
  Users,
  DefaultText,
  UsersInfiniteScroll,
} from '@src/components';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Profile"
          component={User}
          options={{
            headerBackTitleVisible: false,
            headerTitle: () => {
              return <DefaultText size="medium">Profile</DefaultText>;
            },
          }}
        />
        <Stack.Screen
          name="Users"
          component={Users}
          options={{
            headerBackTitleVisible: false,
            headerTitle: () => {
              return <DefaultText size="medium">Users</DefaultText>;
            },
          }}
        />
        <Stack.Screen
          name="UsersInfiniteScroll"
          options={{
            headerBackTitleVisible: false,
            headerTitle: () => {
              return (
                <DefaultText size="medium">Users/Infinite Scroll</DefaultText>
              );
            },
          }}
          component={UsersInfiniteScroll}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
