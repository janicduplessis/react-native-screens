import React from 'react';
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const NStack = createNativeStackNavigator();
const Stack = createStackNavigator();

const Home = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate('DETAILS');
        }}
      />
    </View>
  );
};

const Details = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput
        style={{ backgroundColor: 'lime', height: 40 }}
        autoFocus={true}
      />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ textAlign: 'center', fontSize: 20, color: 'black' }}>
        JS Navigation
      </Text>
      <NavigationContainer>
        <Stack.Navigator detachInactiveScreens={true}>
          <Stack.Screen component={Home} name="HOME" />
          <Stack.Screen component={Details} name="DETAILS" />
        </Stack.Navigator>
      </NavigationContainer>
      <Text style={{ textAlign: 'center', fontSize: 20, color: 'black' }}>
        Native Navigation
      </Text>
      <NavigationContainer>
        <NStack.Navigator screenOptions={{ animation: 'fade' }}>
          <NStack.Screen component={Home} name="HOME" />
          <NStack.Screen component={Details} name="DETAILS" />
        </NStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
