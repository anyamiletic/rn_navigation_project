import * as React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'

import MyRewardsStackNavigator from './stack-navigators/MyRewardsStackNavigator'
import LocationsStackNavigator from './stack-navigators/LocationsStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {
        Object.entries(props.descriptors).map(([key, descriptor], index) => {
          const focused = index === props.state.index
          return (
            <DrawerItem
              key={key}
              label={() => (
                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                  {descriptor.options.title}
                </Text>
              )}
              onPress={() => descriptor.navigation.navigate(descriptor.route.name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
            />
          )
        })
      }
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#551E18',
          height: 50,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Icon name="bars" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} options={{
        title: 'Home',
        headerTitle: () => <Image source={require('../assets/hotel_logo.jpg')} />,
        headerRight: () => (
          <View style={styles.headerRight}>
            <Icon name="bell" size={20} color="#fff" />
          </View>
        ),
      }}/>
      <Drawer.Screen name="MyRewardsStack" component={MyRewardsStackNavigator} options={{
        title: 'My Rewards',
        headerTitle: () => <Text style={styles.headerTitle}>My Rewards</Text>,
      }}/>
      <Drawer.Screen name="LocationsStack" component={LocationsStackNavigator} options={{
        title: 'Locations',
        headerTitle: () => <Text style={styles.headerTitle}>Our Locations</Text>,
      }}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
})

export default DrawerNavigator
