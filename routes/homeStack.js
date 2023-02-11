import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';
import Calculator from '../screens/calculator';
import Product_List from '../screens/productlist';
import Contacts from '../screens/contact';

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
  About: {
    screen: About,
  },
  Calculator: {
    screen: Calculator,
  },
  Product_List: {
    screen: Product_List,
  },
  Contacts: {
    screen: Contacts,
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);


