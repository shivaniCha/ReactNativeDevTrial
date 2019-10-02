import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Constant from '../../../helper/themeHelper';

export default class More extends Component {
  render() {
    const {container, text} = styles;
    return (
      <View style={container}>
        <Text style={text}>{'More....'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constant.color.white,
  },
  text: {
    fontSize: Constant.fontSize.small,
    color: Constant.color.black,
  },
});
