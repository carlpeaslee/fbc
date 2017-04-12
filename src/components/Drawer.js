import React, {Component} from 'react'
import {Button} from 'react-native'
import {DrawerView, DrawerButton} from '../styled'



export default class Drawer extends Component {



  render() {

    return (
      <DrawerView>
        <Button
          title="test"
          onPress={()=>{console.log("this.props", this.props)}}
        />
      </DrawerView>
    )
  }
}
