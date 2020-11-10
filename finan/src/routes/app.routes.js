import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import New from '../pages/New'
import Profile from '../pages/Profile'
import List from '../pages/List'
import Search from '../pages/Search'

const AppDrawer = createDrawerNavigator()
const AppStack = createStackNavigator()

function AppRoutes(){
    return(
        <AppDrawer.Navigator
        drawerStyle={{
            backgroundColor: '#171717'
        }}
        drawerContentOptions={{
            labelStyle:{
                fontWeight: 'bold'
            },
            activeTintColor: '#171717',
            activeBackgroundColor: '#FFFD42',
            inactiveBackgroundColor: '#000',
            inactiveTintColor: '#DDD',
            itemStyle: {
                marginVertical: 5,
            }
        }}
        >
            <AppDrawer.Screen 
            name="Home" 
            component={Home} 
            options={{headerShown: false}}
            />
            <AppDrawer.Screen 
            name="New" 
            component={New} 
            options={{headerShown: false}}
            />
            <AppDrawer.Screen 
            name="Profile" 
            component={Profile} 
            options={{headerShown: false}}
            />
            <AppDrawer.Screen 
            name="List" 
            component={List} 
            options={{headerShown: false}}
            />
            <AppDrawer.Screen 
            name="Search" 
            component={Search} 
            options={{headerShown: false}}
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes