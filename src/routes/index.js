import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Films from "../pages/Films";
import People from "../pages/People";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Films" component={Films} options={{ headerShown: false }} />
      <Stack.Screen name="People" component={People} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
