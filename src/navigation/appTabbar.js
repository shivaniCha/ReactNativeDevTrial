import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Constant from '../helper/themeHelper';
import Favorites from '../screens/containers/favorites';
import Featured from '../screens/containers/featured';
import Coupons from '../screens/containers/coupons';
import Categories from '../screens/containers/categories';
import More from '../screens/containers/more';

const RootTabs = createBottomTabNavigator(
  {
    Favorites,
    Featured,
    Coupons,
    Categories,
    More,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Favorites') {
          iconName = 'ic_navfavorites';
        } else if (routeName === 'Featured') {
          iconName = 'ic_navfeatured';
        } else if (routeName === 'Coupons') {
          iconName = 'ic_couponblue';
        } else if (routeName === 'Categories') {
          iconName = 'ic_navcategories';
        } else {
          iconName = 'ic_navmore';
        }
        return (
          <Image
            source={{uri: iconName}}
            resizeMode={'contain'}
            style={{height: 20, width: 20, tintColor}}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: Constant.color.blue,
      inactiveTintColor: Constant.color.white,
      style: {
        backgroundColor: Constant.color.black,
      },
    },
    lazy: true,
    initialRouteName: 'Coupons',
  },
);

const TabContainer = createAppContainer(RootTabs);

export default TabContainer;
