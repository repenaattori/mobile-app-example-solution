import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Messages from './components/SendMessage';
import MessageList from './components/MessageList';
import { IconButton, MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createContext, useState } from 'react';
import SendMessages from './components/SendMessage';
import {MessageContext} from './components/MessageContext';

const Tab = createBottomTabNavigator();

export default function App() {

  const [messages, setMessages] = useState([]);
  
  return (
      <PaperProvider theme={MyTheme}>
        <MessageContext.Provider value={{messages, setMessages}}>
          <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: {height: 70, paddingBottom: 5}
              }}>
              <Tab.Screen 
                name='Add message' 
                component={SendMessages} 
                options={{tabBarIcon: () => <IconButton icon='cube-send' size={40}/>}}/>
              <Tab.Screen 
                name='All messages' 
                component={MessageList} 
                options={{tabBarIcon: () => <IconButton icon='format-list-bulleted' size={40}/>}}/>
            </Tab.Navigator>
          </NavigationContainer>
        </MessageContext.Provider>
      </PaperProvider>
  );
}

const MyTheme = {
  ...MD3LightTheme,
  roundness: 2,
  colors:{
    ...MD3LightTheme.colors,
    primary: 'rgb(231, 166, 3)',
    secondaryContainer: 'rgb(231, 166, 3)',
    onPrimary: 'black'
  }
}
