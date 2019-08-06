import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Video from "react-native-video";
export default class rnvideo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('rnvideo', () => rnvideo);
