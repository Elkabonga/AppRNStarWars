import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Films from'./src/pages/Films'
import Home from'./src/pages/Home'
import People from'./src/pages/People'
import Routes from'./src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
