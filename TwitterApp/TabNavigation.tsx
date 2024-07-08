import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from './Screens/HomePage';
import { ChatPage } from './Screens/ChatPage';
import { NotificationPage } from './Screens/NotificationPage';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { SearchPage } from './Screens/Searchpage';
import AddItemScreen from './Screens/AddItemScreen';


const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
   
      <Tab.Navigator screenOptions={{ 
        headerShown: false ,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        

        }}>
        <Tab.Screen name="HomePage" component={HomePage} options={{
          headerShown: true,
          headerTitle: 'Home',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'left', // Align the title to the left
          },
           tabBarIcon:({color, size})=>(
            <Fontisto  name="home" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name="SearchPage" component={SearchPage} options={{
           headerShown: true,
           headerTitle: 'SearchBar',
           headerTitleStyle: {
             fontSize: 20,
             fontWeight: 'bold',
            
           },
           tabBarIcon:({color, size})=>(
            <FontAwesome  name="search" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name="NotificationPage" component={NotificationPage} options={{
           headerShown: true,
           headerTitle: 'Notifications',
           headerTitleStyle: {
             fontSize: 20,
             fontWeight: 'bold',
           },
            tabBarIcon:({color, size})=>(
            <Ionicons name="notifications" size={size} color={color} />

          )
           }}/>
        <Tab.Screen name="ChatPage" component={ChatPage} options={{
           headerShown: true,
           headerTitle: 'Messages',
           headerTitleStyle: {
             fontSize: 20,
             fontWeight: 'bold',
           },
           tabBarIcon:({color, size})=>(
            <Entypo name="message" size={size} color={color} />

          )
           }}/>
      </Tab.Navigator>
   
  );
}