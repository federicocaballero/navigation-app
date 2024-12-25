import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import { Link, useRouter } from 'expo-router'

const Products = () => {
  const router = useRouter();
  return (
    <View className='flex flex-1 px-4'>
      <Text>Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View className='mt-10'>
            <Text className='text-2xl font-work-black'>{item.title}</Text>
            <Text className=''>{item.description}</Text>
            <View className='flex flex-row justify-between'>
              <Text className='font-work-black'>{item.title}</Text>
              <Pressable onPress={() => router.push(
                {
                  pathname: `/tabs/(stack)/products/productDetails`,
                  params: { title: item.title, description: item.description, price: item.price, id: item.id }
                })}>
                <Text className='text-primary'>Ver detalless</Text>
              </Pressable>
            </View>
          </View>
        )}>

      </FlatList>
    </View >
  )
}

export default Products