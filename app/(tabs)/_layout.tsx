import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { Animated, Platform, StyleSheet } from 'react-native'


const PRIMARY_GREEN = '#4CAF50'
const INACTIVE_GRAY = '#A0A0A0'

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarPosition: 'bottom',
                headerShown: false,
                tabBarActiveTintColor: PRIMARY_GREEN,
                tabBarInactiveTintColor: INACTIVE_GRAY,
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? 85 : 85,
                    paddingTop: 10,
                    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 0,
                    elevation: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '500',
                    marginTop: 4,
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='coupon'
                options={{
                    title: 'Coupon',
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'ticket-percent' : 'ticket-percent-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => {
                        const animValue = useRef(new Animated.Value(focused ? 1 : 0)).current

                        useEffect(() => {
                            Animated.timing(animValue, {
                                toValue: focused ? 1 : 0,
                                duration: 250,
                                useNativeDriver: false,
                            }).start()
                        }, [focused])

                        const backgroundColor = animValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['#81C784', PRIMARY_GREEN],
                        })

                        return (
                            <Animated.View
                                style={[
                                    styles.centerButton,
                                    { backgroundColor },
                                ]}
                            >
                                <MaterialCommunityIcons
                                    name="shopping-outline"
                                    size={26}
                                    color="#FFFFFF"
                                />
                            </Animated.View>
                        )
                    },
                    tabBarLabel: () => null,
                }}
            />
            <Tabs.Screen
                name='cart'
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ color, focused }) => (
                        <Feather
                            name='shopping-cart'
                            size={22}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    centerButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: PRIMARY_GREEN,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Platform.OS === 'ios' ? 30 : 25,
        shadowColor: PRIMARY_GREEN,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 8,
    },
})

export default _layout