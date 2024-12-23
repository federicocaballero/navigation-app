import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='home/index' options={{ title: 'Home Screen' }} />
            <Stack.Screen name='products/index' options={{ title: 'Products Screen', animation: 'ios_from_left' }} />
            <Stack.Screen name='profile/index' options={{ title: 'Profile Screen', animation: 'ios_from_right' }} />
            <Stack.Screen name='settings/index' options={{ title: 'Settings Screen' }} />
        </Stack>
    )
}

export default StackLayout