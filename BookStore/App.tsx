import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LandingScreen from './src/Screens/LandingScreen'
import Card from './src/Components/Card'
import { Provider } from 'react-redux'
import Store from './src/Redux/Store'
import Cart from './src/Screens/Cart'
import MainNavigation from './src/Navigation/MainNavigation.tsx'

const App = () => {
  return (
    <Provider store={Store}>
      {/* <LandingScreen /> */}
      {/* <Cart /> */}
      <MainNavigation />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})