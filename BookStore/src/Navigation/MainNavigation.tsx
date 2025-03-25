import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LandingScreen from '../Screens/LandingScreen'
import Cart from '../Screens/Cart'
import Header from '../Components/Header'
import WishList from '../Screens/WishList'
import Login from '../Screens/Login'
import Signup from '../Screens/SignupScreen'
import ThankyouScreen from '../Screens/ThankyouScreen'

const Stack = createNativeStackNavigator()

const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login'component={Login}  options={{ headerShown: false }} />
          <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false}} />
            <Stack.Screen name="Home" component={LandingScreen}  options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart}  options={{ headerShown: false }}/>
            <Stack.Screen name="Header" component={Header}  options={{ headerShown: false }}/>
            <Stack.Screen name="WishList" component={WishList}  options={{ headerShown: false }}/>
            <Stack.Screen name="Thankyou" component={ThankyouScreen}  options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})