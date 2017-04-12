import React, {Component} from 'react'
import {Button} from 'react-native'
import {HomeView, DrawerButton} from '../styled'



export default class Home extends Component {

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
      <HomeView >


      </HomeView>
    )
  }
}
