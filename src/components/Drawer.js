import React, {Component} from 'react'
import {Button} from 'react-native'
import {DrawerView, DrawerButton} from '../styled'



export default class Drawer extends Component {



  render() {

    return (
      <DrawerView>
        {this.props.navigation.state.routes.map(route => {
          return (
            <Button
              key={route.key}
              title={route.routeName}
              onPress={()=>{this.props.navigation.navigate(route.routeName)}}
            />
          )
        })}
      </DrawerView>
    )
  }
}
