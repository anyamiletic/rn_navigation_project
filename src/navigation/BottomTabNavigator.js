import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet, View } from 'react-native'

import HomeStackNavigator from './stack-navigators/HomeStackNavigator'
import BookStackNavigator from './stack-navigators/BookStackNavigator'
import ContactStackNavigator from './stack-navigators/ContactStackNavigator'
import MyRewardsStackNavigator from './stack-navigators/MyRewardsStackNavigator'
import LocationsStackNavigator from './stack-navigators/LocationsStackNavigator'
import { routes, screens } from './RouteItems'

const Tab = createBottomTabNavigator()

const tabOptions = ({ route }) => {
  const item = routes.find(routeItem => routeItem.name === route.name)

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    }
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: () => (
      <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
    ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  }
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
      <Tab.Screen name={screens.BookStack} component={BookStackNavigator} />
      <Tab.Screen name={screens.ContactStack} component={ContactStackNavigator} />

      <Tab.Screen name={screens.MyRewardsStack} component={MyRewardsStackNavigator} />
      <Tab.Screen name={screens.LocationsStack} component={LocationsStackNavigator} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  }
})

export default BottomTabNavigator
