/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StyleSheet, View } from 'react-native'
import React from 'react'
import Grid from 'react-native-grid-component'

export interface MyAppProps {
  
}

export interface MyAppState { 
  items: string[]
}

export default class ReactPrototype extends React.Component<MyAppProps, MyAppState> {

  constructor(props) {
    super(props)
    this.state = { items: ['red', 'green', 'yellow'] }
  }

  _renderItem = (data, i) => <View style={[{backgroundColor: data}, styles.item]} key={i}/>

  render() {
    return (
      <Grid
      style={styles.list}
      renderItem={this._renderItem}
      data={this.state.items}
      itemsPerRow={2}
      />
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  list: {
    flex: 1
  }
})
