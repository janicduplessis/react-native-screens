import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { Button, Square, ToastProvider } from '../shared';

type StackParamList = {
  Main: undefined;
  Settings: undefined;
};

interface MainScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Main'>;
}

const MainScreen = ({ navigation }: MainScreenProps): React.JSX.Element => {
  return (
    <ScrollView style={{ marginTop: 100 }}>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Go to next screen"
      />
      <Button onPress={() => navigation.pop()} title="🔙 Back to Examples" />
    </ScrollView>
  );
};

interface SettingsScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Settings'>;
}

const SettingsScreen = ({
  navigation,
}: SettingsScreenProps): React.JSX.Element => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <TextInput autoFocus style={{ backgroundColor: '#eee' }} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

const Stack = createNativeStackNavigator<StackParamList>();

const App = (): React.JSX.Element => (
  <ToastProvider>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
        component={MainScreen}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTintColor: 'hotpink',
          headerBackTitleVisible: false,
          headerTitle: () => (
            <View style={{ gap: 16, flexDirection: 'row' }}>
              <Square color="green" size={20} />
              <Square color="green" size={20} />
              <Square color="green" size={20} />
              <Square color="green" size={20} />
            </View>
          ),
          headerRight: () => <Square color="red" size={20} />,
        }}
      />
    </Stack.Navigator>
  </ToastProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  heading: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
