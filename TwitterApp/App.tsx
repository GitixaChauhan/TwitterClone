import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SignIn } from './Screens/SignIn';
import { SignUp } from './Screens/SignUp';
import { TabNavigation } from './TabNavigation';
import AddItemScreen from './Screens/AddItemScreen';




const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
           headerBackTitleVisible: false,
        }}/>
        <Stack.Screen name="HomePage" component={TabNavigation} options={{
          headerShown: false,
              headerBackVisible: false,
              headerTitle: 'Home', 
              // headerTitleAlign: 'left',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                //textAlign: 'left', // Align the title to the left
              },
          }} />
          <Stack.Screen name="AddItemScreen" component={AddItemScreen} options={{
            headerBackTitleVisible: false,
            headerTitle: ""
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
