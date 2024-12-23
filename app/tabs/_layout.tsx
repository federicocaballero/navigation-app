import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black', tabBarShowLabel: false }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'HomeScreen',
          tabBarIcon: ({ color }) =>  <Ionicons name="home" size={28} color="purple" />,
        }}
      />
      <Tabs.Screen
        name="favourites/index"
        options={{
          title: 'Favourites Screen',
          tabBarIcon: ({ color }) =>  <Ionicons name="star-outline" size={28} color="purple" />,
        }}
      />
    </Tabs>
  );
}
