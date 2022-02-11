import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import Home from '../Pages/Home';
import Biograph from '../Pages/Biograph';
import About from '../Pages/About';

export default function Routes(){

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <StatusBar barStyle='dark-content' backgroundColor="#FFF"/>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Biograph" component={Biograph}/>
                <Stack.Screen name="About" component={About}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

