import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen,
  SignIn,
  SignUp,
  Home,
  Search,
  Notif,
  Upload,
  Status,
  Profile,
  EditProfile,
  OrganicRecycle,
  PlasticRecycle,
  OrganicApproved,
} from '../pages';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notif"
        component={Notif}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Upload"
        component={Upload}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Status"
        component={Status}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganicRecycle"
        component={OrganicRecycle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlasticRecycle"
        component={PlasticRecycle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganicApproved"
        component={OrganicApproved}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
