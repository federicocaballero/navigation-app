import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
    children: string,
    color?: 'primary' | 'secondary' | 'tertiary'
}
const CustomButton = ({ children, color = 'primary', onPress }: Props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color]
    return (
        <Pressable className={` p-3 rounded-md ${btnColor} mt-5`}
        onPress={onPress}>
            <Text className='text-center text-white'>{children}</Text>
        </Pressable>
    )
}

export default CustomButton