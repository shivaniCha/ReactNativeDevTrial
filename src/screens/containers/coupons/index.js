import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';
import Constant from '../../../helper/themeHelper';
import {NavigationBar} from '../../common';

const ITEM_SIZE = (Constant.screenWidth - 30) / 2;

class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      CapturedTypes: [
        {label: 'Pounds Captured', value: 'Pounds Captured'},
        {label: 'Pounds Captured1', value: 'Pounds Captured1'},
        {label: 'Pounds Captured2', value: 'Pounds Captured2'},
      ],
    };
  }

  onSelectItem = item => {};

  // Pagination
  onEndReached = () => {};

  itemSeparatorComponent = () => {
    return <View style={{width: '100%', height: 10}} />;
  };

  renderItem = ({item, index}) => {
    const {rowOuter, rowImg, txtPrice, txtTitle, imgRow} = styles;
    const {title, image, price} = item;
    return (
      <View
        key={index}
        style={[rowOuter, {marginLeft: (index % 2 !== 0 && 10) || 0}]}>
        <Image
          source={{uri: image}}
          resizeMode={'contain'}
          style={{height: '100%', width: '100%'}}
        />
        <View style={rowImg}>
          <TouchableOpacity style={{padding: 10}}>
            <Image
              source={{uri: 'ic_favorites'}}
              resizeMode={'contain'}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <View style={{flex: 1}} />
          <Text style={txtPrice}>{price}</Text>
          <Text style={txtTitle} numberOfLines={1}>
            {title}
          </Text>
          <Image
            source={{uri: 'ic_couponblue'}}
            resizeMode={'contain'}
            style={imgRow}
          />
        </View>
      </View>
    );
  };

  renderIcon = data => {
    const {icon, onPress} = data;
    return (
      <TouchableOpacity style={{paddingHorizontal: 10}} onPress={onPress}>
        <Image
          source={{uri: icon}}
          resizeMode={'contain'}
          style={{height: 25, width: 25}}
        />
      </TouchableOpacity>
    );
  };

  renderSearchbar = () => {
    const {searchOuter, searchBarTxt} = styles;
    return (
      <View style={searchOuter}>
        <TextInput
          style={searchBarTxt}
          clearButtonMode={'while-editing'}
          autoCapitalize={'none'}
          autoCorrect={false}
          placeholder={'Search'}
        />
      </View>
    );
  };

  renderHeader = () => {
    const {headerRow} = styles;
    const {CapturedTypes} = this.state;
    return (
      <View style={headerRow}>
        <View style={{flex: 1}}>
          <RNPickerSelect
            onValueChange={this.onSelectItem}
            placeholder={{}}
            style={{
              viewContainer: {
                borderColor: Constant.color.lightGray,
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
              },
            }}
            items={CapturedTypes}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          {this.renderIcon({icon: 'ic_listviewinactive'})}
          {this.renderIcon({icon: 'ic_tileviewactiveblue'})}
          {this.renderIcon({icon: 'ic_tileviewinactive'})}
        </View>
      </View>
    );
  };

  render() {
    const {container, innerContainer} = styles;
    const {products = []} = this.props;
    return (
      <SafeAreaView style={container}>
        <NavigationBar captured={'5,445 LBS CAPTURED'} title={'SHOP'} />
        {this.renderSearchbar()}
        <View style={innerContainer}>
          {this.renderHeader()}
          <FlatList
            contentInset={{bottom: 20}}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            automaticallyAdjustContentInsets={false}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
            numColumns={2}
            data={products}
            keyExtractor={(item, index) => {
              return index + '';
            }}
            onEndReached={this.onEndReached}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.itemSeparatorComponent}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.color.blue,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Constant.color.white,
    paddingHorizontal: 10,
  },
  searchOuter: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: Constant.color.lightGray,
    justifyContent: 'center',
  },
  searchBarTxt: {
    borderRadius: 6,
    width: '100%',
    color: Constant.color.black,
    minHeight: 35,
    backgroundColor: Constant.color.white,
    textAlign: 'center',
    fontSize: Constant.fontSize.medium,
  },
  rowOuter: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderColor: Constant.color.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    width: Constant.screenWidth,
    paddingVertical: 10,
  },
  rowImg: {
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 10,
    position: 'absolute',
  },
  txtPrice: {
    textAlign: 'center',
    color: Constant.color.black,
    fontSize: Constant.fontSize.mini,
  },
  txtTitle: {
    textAlign: 'center',
    color: Constant.color.green,
    fontSize: Constant.fontSize.medium,
    fontWeight: '700',
  },
  imgRow: {
    height: 20,
    width: 20,
    right: 10,
    bottom: 0,
    position: 'absolute',
  },
});

const mapStateToProps = state => {
  const {products} = state.product;
  return {
    products,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Coupons);
