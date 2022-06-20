import React from 'react'
import Started from './screens/Started'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Header from './screens/Header'
import Suggestion from './screens/Suggestion'
import Emploi from './screens/Emploi'
import EmpByClass from './screens/EmpByClass'


import Menuds from './screens/Menuds'
import Task from './screens/Task'
import Info from './screens/Info'
import Convocation from './screens/Convocation'
import ListTask from './screens/ListTask'
import ListInfo from './screens/ListInfo'
import ListConv from './screens/ListConv'
import ForgotPass from './screens/ForgotPass'
import Profile from './screens/Profile'
import Contact from './screens/Contact'
import ComplementInfo from './screens/ComplementInfo'
import CustomDrawer from "./components/CustomDrawer";
import MultiStepForm from "./screens/MultiStepForm";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>


    );
}

function DrawerRoutes() {
    return (

        <Drawer.Navigator drawerContent={props =><CustomDrawer {...props} />} initialRouteName="Home" screenOptions={{headerShown: true, drawerStyle: {
                    backgroundColor: '#fff'},}}>
            <Drawer.Screen name="Home" component={Home}
                           options={{

                               headerStyle: {
                                   backgroundColor: '#17a2b8',
                               },
                               headerTintColor: '#fff',
                               headerTitleStyle: {
                                   fontWeight: 'bold',
                               },
                           }}/>
            <Drawer.Screen name="Profile" component={Profile}
                           options={{

                               headerStyle: {
                                   backgroundColor: '#17a2b8',
                               },
                               headerTintColor: '#fff',
                               headerTitleStyle: {
                                   fontWeight: 'bold',
                               },
                           }}/>
            <Drawer.Screen name="ComplementInfo" component={ComplementInfo}
                           options={{

                               headerStyle: {
                                   backgroundColor: '#17a2b8',
                               },
                               headerTintColor: '#fff',
                               headerTitleStyle: {
                                   fontWeight: 'bold',
                               },
                           }}/>
            <Drawer.Screen name="Contact" component={Contact}
                           options={{

                               headerStyle: {
                                   backgroundColor: '#17a2b8',
                               },
                               headerTintColor: '#fff',
                               headerTitleStyle: {
                                   fontWeight: 'bold',
                               },
                           }}/>


        </Drawer.Navigator>

    );
}

function Router(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Started" component={Started}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Home"   options={{
                title: 'My home',}} component={DrawerRoutes}/>
            <Stack.Screen name="Header" component={Header}/>
            <Stack.Screen name="Suggestion" component={Suggestion}/>
            <Stack.Screen name="Emploi" component={Emploi}/>
            <Stack.Screen name="EmpByClass" component={EmpByClass}/>


            <Stack.Screen name="Menuds" component={Menuds}/>
            <Stack.Screen name="Task" component={Task}/>
            <Stack.Screen name="Info" component={Info}/>
            <Stack.Screen name="Convocation" options={{
                title: 'Mes enfants',}}component={Convocation}/>
            <Stack.Screen name="ListTask"
                          options={{
                              title: 'Convocations',}}component={ListTask}/>
            <Stack.Screen name="ListInfo" component={ListInfo}/>
            <Stack.Screen name="ListConv" component={ListConv}/>
            <Stack.Screen name="ForgotPass" component={ForgotPass}/>
            <Stack.Screen name="Contact" component={Contact}/>
            <Stack.Screen name="MultiStepForm" component={MultiStepForm}/>









        </Stack.Navigator>
    );
}


