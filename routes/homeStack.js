import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';
import Calculator from '../screens/calculator';
import Product_List from '../screens/productlist';
import Contacts from '../screens/contact';
import LoginPage from '../screens/loginpage';
import Graph from '../screens/graphs';

const screens = {
  Home: {
    screen: Home,
  },
  LoginPage: {
    screen: LoginPage,
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
  ,
  Graphs: {
    screen: Graph,
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);


