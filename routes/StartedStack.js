import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Started from '../components/Started'
import Login from '../components/Login'
const screens ={
    Started:{
        screen: Started
    },
    Login:{
        screen: Login
    },
   
}

const StartedStack = createStackNavigator(screens);

export default createAppContainer(StartedStack);