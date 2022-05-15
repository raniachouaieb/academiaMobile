import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Started from "../screens/Started";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Header from "../screens/Header";
import Suggestion from "../screens/Suggestion";
import Menuds from "../screens/Menuds";
import Task from "../screens/Task";
import Info from "../screens/Info";
import Convocation from "../screens/Convocation";
import ListTask from "../screens/ListTask";
import ListInfo from "../screens/ListInfo";
import ListConv from "../screens/ListConv";
import ForgotPass from "../screens/ForgotPass";
import Contact from "../screens/Contact";
import Home from '../screens/Home'
import {createDrawerNavigator} from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const AppStack = () =>{
    return(
        <Drawer.Navigator screenOptions={{headerShown: true}}>

            <Drawer.Screen name="Home" component={Home}/>



        </Drawer.Navigator>
    )
}
export default AppStack;

