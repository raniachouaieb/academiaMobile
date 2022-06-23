import 'react-native-gesture-handler';
import React from 'react'
import Started from './screens/Started'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Header from './screens/Header'
import Suggestion from './screens/Suggestion'
import Emploi from './screens/Emploi'
import EmpByClass from './screens/EmpByClass'
import  Enfant from './screens/stepForm/Enfant'

import Menuds from './screens/Menuds'
import Task from './screens/Task'
import Info from './screens/Info'
import KidsInformation from'./screens/KidsInformation'
import Convocation from './screens/Convocation'
import ListTask from './screens/ListTask'
import ListInfo from './screens/ListInfo'
import ListConv from './screens/ListConv'
import ForgotPass from './screens/ForgotPass'
import Profile from './screens/Profile'
import Contact from './screens/Contact'
import Contact1 from './screens/stepForm/Contact'
import ComplementInfo from './screens/ComplementInfo'
import CustomDrawer from "./components/CustomDrawer";
import MultiStepForm from "./screens/MultiStepForm";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import  { useState, useEffect, useRef } from 'react';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);
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
            <Stack.Screen name="Contact1" component={Contact1}/>
            <Stack.Screen name="Enfant" component={Enfant}/>
            <Stack.Screen name="KidsInformation" component={KidsInformation}/>












        </Stack.Navigator>
    );
}
async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}


