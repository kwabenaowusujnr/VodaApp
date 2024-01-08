import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


import { FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons/build/Icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cash from "../screens/Cash";
import ServicePage from "../screens/ServicePage";
import Bundles from "../screens/Bundles";
import Settings from "../screens/Settings";
import Home from '../screens/Home';


const Tab = createBottomTabNavigator();


const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            top: -2,
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <View style={{
            width: 70,
            height: 70
        }}>
            {children}
        </View>

    </TouchableOpacity>
)

function AppMenu() {

    return (
        <Tab.Navigator
            initialRouteName="tobi"
            screenOptions={{
                tabBarActiveTintColor: "#E30613",
                tabBarStyle: {
                    borderRadius: 0,
                    backgroundColor: "#ffffff",
                    position: 'absolute',
                    elevation: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }
            }}
        >

            <Tab.Screen
                name="Services"
                component={ServicePage}
                options={{
                    tabBarLabel: 'Services',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="computer" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Cash"
                component={Cash}
                options={{
                    tabBarLabel: 'Cash',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="money" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="tobi"
                component={Home}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={require('../assets/tobi.png')}
                            resizeMode='contain'
                            style={{
                                width: 50,
                                position: 'absolute',
                                height: 50
                            }}
                        ></Image>

                        // <Ionicons name="add-circle-outline" color={color} size={size} />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Bundles"
                component={Bundles}
                options={{
                    tabBarLabel: 'Bundles',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                    ),
                }}
            />


        </Tab.Navigator>
    );
}

export default AppMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
