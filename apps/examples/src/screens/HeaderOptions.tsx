import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Button, SettingsSwitch, Square, ToastProvider } from '../shared';

type StackParamList = {
  Main: undefined;
  Settings: undefined;
};

interface MainScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Main'>;
}

const MainScreen = ({ navigation }: MainScreenProps): React.JSX.Element => {
  useEffect(() => {
    navigation.navigate('Settings');
  }, []);

  return (
    <ScrollView>
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
  const [headerLargeItem, setHeaderLargeItem] = useState(false);

  useLayoutEffect(() => {
    const square1 = (props: { tintColor?: string }) => (
      <View style={{ gap: 8, flexDirection: 'row' }}>
        {headerLargeItem && <Square {...props} color="green" size={20} />}
        <Square {...props} color="green" size={20} />
      </View>
    );

    const square2 = (props: { tintColor?: string }) => (
      <Square {...props} color="red" size={20} />
    );

    navigation.setOptions({
      headerRight: square1,
      headerTitle: undefined,
      headerLeft: headerLargeItem ? square2 : undefined,
      headerBackTitleVisible: false,
    });
  }, [navigation, headerLargeItem]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <SettingsSwitch
        label="Header large item"
        value={headerLargeItem}
        onValueChange={setHeaderLargeItem}
      />
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
          title: 'Header Options',
        }}
        component={MainScreen}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTintColor: 'hotpink',
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
