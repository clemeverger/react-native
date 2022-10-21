import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import HourlyConditions from './HourlyConditions';
import theme from '../utilities/theme';

const stack = createStackNavigator();

const Stack = () => {
    return (
        <stack.Navigator >
            <stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <stack.Screen name="HourlyConditions" component={HourlyConditions} options={{
                headerStyle: {
                    backgroundColor: theme.colors.secondary,
                },
                headerTitleStyle: {
                    color: theme.colors.base
                },
                headerBackTitleStyle:{
                    color: theme.colors.base
                },
                headerTintColor: theme.colors.base
            }} />
        </stack.Navigator>
    )
}

export default Stack