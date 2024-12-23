import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductDetail = () => {
    const { title, description, price, id } = useLocalSearchParams();
    
    return (
        <View className='px-5 mt-5'>
            <Text className='font-work-black text-2xl' >{title}</Text>
            <Text className=''>{description}</Text>
            <Text className='font-work-black'>${price}</Text>
        </View>
    )
}

export default ProductDetail