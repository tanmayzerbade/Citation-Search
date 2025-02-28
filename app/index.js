import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CitationList from './citationList';
import CitationSearch1 from './citationSearch1';

const Stack = createStackNavigator();

const App = () => {
  return (

    <Stack.Navigator initialRouteName="CitationSearch1">
        <Stack.Screen name="CitationSearch1" component={CitationSearch1} />
        <Stack.Screen name="citationList" component={CitationList} />
    </Stack.Navigator>
        
  
  );
}

export default App;

