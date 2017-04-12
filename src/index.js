import React, {Component} from 'react'
import {DrawerNavigator, StackNavigator} from 'react-navigation'
import {DrawerButton} from './styled'

import Home from './components/Home'
import Brewery from './components/Brewery'

import Drawer from './components/Drawer'


const breweries = [
  '612 Brew',
  'Lakes and Legends',
  'Lake Monster',
  'Sociable Cider Werks',
  'BlackStack'
]

const RouteConfigs = {
  Home: {
    name: 'Home',
    screen: Home
  },
  Brewery: {
    screen: Brewery
  }
}

const DrawerNavigatorConfigs = {
  drawerWidth: 200,
  drawerPosition: 'right',
  contentComponent: (props) => {
    return (
      <Drawer
        {...props}
      />
    )
  }
}

const DrawerNav = DrawerNavigator(RouteConfigs, DrawerNavigatorConfigs)


const Src = StackNavigator({
  Drawer: {
    name: 'Drawer',
    screen: DrawerNav
  },

})

export default Src
