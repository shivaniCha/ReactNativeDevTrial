import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import RootTabs from './appTabbar';

const AppNavigator = createStackNavigator(
  {
    RootTabs,
  },
  {
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
