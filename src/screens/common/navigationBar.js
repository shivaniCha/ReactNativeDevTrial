import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Constant from '../../helper/themeHelper';

const NavigationBar = props => {
  const {
    outer,
    capturedView,
    capturedText,
    titleText,
    titleOuter,
    imageOuter,
  } = styles;
  const {captured, title, onPress} = props;
  return (
    <View style={outer}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={capturedView}>
          <Text style={capturedText}>{captured}</Text>
        </View>
      </View>
      <View style={titleOuter}>
        <Text style={titleText}>{title}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity style={imageOuter} onPress={onPress}>
          <Image
            source={{uri: 'ic_user'}}
            resizeMode={'contain'}
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    flexDirection: 'row',
    backgroundColor: Constant.color.blue,
  },
  titleOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imageOuter: {
    padding: 15,
  },
  titleText: {
    color: Constant.color.white,
    fontSize: Constant.fontSize.large,
    fontWeight: '700',
    textAlign: 'center',
  },
  capturedView: {
    padding: 2,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Constant.color.white,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
  },
  capturedText: {
    fontSize: Constant.fontSize.mini,
    color: Constant.color.white,
    fontWeight: '600',
  },
});

export {NavigationBar};
