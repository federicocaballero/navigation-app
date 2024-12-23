import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/sharedCustomButton'

const HomeScreen = () => {
  return (

    <View className='px-5 mt-5'>
      <Text>HomeScreen</Text>
      <CustomButton children='Productos' onPress={() => router.push('/products')} />
      <CustomButton children='Profile' color='secondary' onPress={() => router.push('/profile')} />
      <CustomButton children='Productos' color='tertiary' onPress={() => router.push('/settings')} />
        
      {/* <Text>HomeScreen</Text>

      <Link className='mb-5' href={'/products'}>Productos</Link>
      <Link className='mb-5' href={'/profile'}>Perfil</Link>
      <Link className='mb-5' href={'/settings'}>Settings</Link> */}

    </View>

  )
}

export default HomeScreen