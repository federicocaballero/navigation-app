import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'white', 
      headerShown: false, 
      tabBarStyle: { 
        backgroundColor: 'black', 
        height: 60 } 
      }} >
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'HomeScreen',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favourites/index"
        options={{
          title: 'Favourites Screen',
          tabBarIcon: ({ color }) => <Ionicons name="star-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack Screen',
          tabBarIcon: ({ color }) => <Ionicons name="people" size={28} color={color} />,
        }}
      />
    </ Tabs>
  );
}
