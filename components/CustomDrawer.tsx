import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView
            {...props}
            scrollEnabled={false}
        >
            <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150] rounded-xl bg-primary'>
                <View className='flex justify-center items-center bg-white rounded-full h-20 w-20'>
                    <Text className='text-primary font-work-black text-3xl'>FC</Text>
                </View>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer