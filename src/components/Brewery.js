import React, {Component} from 'react'
import {Button} from 'react-native'
import {BreweryView, DrawerButton} from '../styled'



export default class Brewery extends Component {

  static navigationOptions = {
    header: (navigation) => {
      let right = (
        <DrawerButton
          title={'Drawer'}
          onPress={()=>navigation.navigate('DrawerOpen')}
        />
      )
      return {
        right
      }
    },
    title: 'Friendly Brew Crew'
  }

  render() {
    return (
      <BreweryView >


      </BreweryView>
    )
  }
}
