import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from './src/screens/Homepage';
import SingleNote from './src/screens/SingleNote';
import {NoteContextProvider} from './src/context/noteContext';
import CreateNote from './src/screens/CreateNote';
import EditNote from './src/screens/EditNote';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NoteContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Homepage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SingleNote"
            component={SingleNote}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="CreateNote"
            component={CreateNote}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="EditNote"
            component={EditNote}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteContextProvider>
  );
}

export default App;
