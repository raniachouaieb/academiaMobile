import React from 'react'
import Started from './components/Started'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Header from './components/Header'
import Suggestion from './components/Suggestion'
import Menuds from './components/Menuds'
import Task from './components/Task'
import Info from './components/Info'
import Convocation from './components/Convocation'
import ListTask from './components/ListTask'
import ListInfo from './components/ListInfo'
import ListConv from './components/ListConv'
import ForgotPass from './components/ForgotPass'
import Profile from './components/Profile'
import Contact from './components/Contact'
import ComplementInfo from './components/ComplementInfo'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

function App(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Started" component={Started}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Home" component={Home}/>
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
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="ComplementInfo" component={ComplementInfo}/>
      <Stack.Screen name="Contact" component={Contact}/>









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
