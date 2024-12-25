import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/sharedCustomButton'

const HomeScreen = () => {
  return (

    <View className='px-5 mt-5'>
      <Text>HomeScreen</Text>
      <CustomButton children='Productos' onPress={() => router.push('/tabs/(stack)/products/')} />
      <CustomButton children='Profile' color='secondary' onPress={() => router.push('/tabs/(stack)/profile')} />
      <CustomButton children='Settings' color='tertiary' onPress={() => router.push('/tabs/(stack)/settings')} />
        

    </View>

  )
}

export default HomeScreen