import React from 'react'
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomDrawer from '@/components/CustomDrawer';
const DrawerLayout = () => {

    return (
        <Drawer
        drawerContent={ CustomDrawer}
            screenOptions={{
                overlayColor: 'rgba(0, 0, 0, 0.5)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'User',
                    title: 'Usuario',
                    drawerIcon: () => <Ionicons name="person-circle-outline" size={24} color="black" />
                }}
            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Horario',
                    title: 'Horarios',
                    drawerIcon: () => <Ionicons name="calendar-outline" size={24} color="black" />
                }}
            />
        </Drawer>
    )
}

export default DrawerLayout