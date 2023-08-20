import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';
import SavedScreen from './screens/SavedScreen';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import colors from './utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false, 
        tabBarStyle: {
          justifyContent: "space-evenly"
        }
      }} 
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (props) => {
            return <Entypo name="home" size={props.size} color={props.color} />
          }
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: (props) => {
            return <Ionicons name="settings" size={props.size} color={props.color} />
          }
        }}
      />

      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: (props) => {
            return <FontAwesome name="bookmark" size={props.size} color={props.color} />
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false); 
  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require("./assets/fonts/Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          thisItalic: require("./assets/fonts/Roboto-ThinItalic.ttf")
        });
      }
      catch (e) {
              console.log(e)
      }
      finally {
              setAppIsLoaded(true);
      }
    };
    prepare();
  }, []);
  
  const onlayout = useCallback(async () => {
    if(appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if(!appIsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View onlayout={onlayout} style={{
        flex: 1
      }}>
        <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'medium',
            color: 'white',
          },
          headerStyle: {
            backgroundColor: colors.primary
          }
        }}
        >
          <Stack.Group>
            <Stack.Screen
              name="main"
              component={TabNavigator}
              options={{
                headerTitle: "Translate"
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}