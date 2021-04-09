import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from "./screens/HomeScreen";
import SummaryScreen from "./screens/SummaryScreen";
import {createAppContainer,createSwitchNavigator} from "react-navigation"
export default function App() {
  return (
    <View>
    <AppHeader/>
    <AppContainer/>
    </View>
  );
}
var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
})
const AppContainer=createAppContainer(AppNavigator)
