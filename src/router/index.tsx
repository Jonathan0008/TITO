import React, {createContext, useEffect, useState} from 'react';
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
  Add,
} from '../pages';
import auth from '@react-native-firebase/auth';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();
export const UserContext = createContext<any>(null);

const index = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    console.log('user', user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <UserContext.Provider value={user}>
      <Stack.Navigator>
        {!user ? (
          <>
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
          </>
        ) : (
          <>
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
            <Stack.Screen
              name="Add"
              component={Add}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </UserContext.Provider>
  );
};

export default index;
