import React from 'react'
import Started from './screens/Started'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Header from './screens/Header'
import Suggestion from './screens/Suggestion'
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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
    return (

        <Drawer.Navigator drawerContent={props =><CustomDrawer {...props} />} initialRouteName="Home" screenOptions={{headerShown: true}}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="ComplementInfo" component={ComplementInfo}/>
            <Drawer.Screen name="Contact" component={Contact}/>


        </Drawer.Navigator>

    );
}

function App(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Started" component={Started}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Home" component={DrawerRoutes}/>
            <Stack.Screen name="Header" component={Header}/>
            <Stack.Screen name="Suggestion" component={Suggestion}/>
            <Stack.Screen name="Menuds" component={Menuds}/>
            <Stack.Screen name="Task" component={Task}/>
            <Stack.Screen name="Info" component={Info}/>
            <Stack.Screen name="Convocation" component={Convocation}/>
            <Stack.Screen name="ListTask" component={ListTask}/>
            <Stack.Screen name="ListInfo" component={ListInfo}/>
            <Stack.Screen name="ListConv" component={ListConv}/>
            <Stack.Screen name="ForgotPass" component={ForgotPass}/>
            <Stack.Screen name="Contact" component={Contact}/>
            <Stack.Screen name="MultiStepForm" component={MultiStepForm}/>









        </Stack.Navigator>
    );
}

export default () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>

    )
}
