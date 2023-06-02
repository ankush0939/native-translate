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
  return (
    <NavigationContainer>
      <View style={{
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
      }}>
        <Text>My first native project</Text>
        <Stack.Navigator>
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