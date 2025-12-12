import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import cn from "clsx"; 

interface IBackArrow {
  styles?: string
}


const BackArrow: FC<IBackArrow> = ({styles}) => {
  const navigation = useNavigation();

  const canGoBack = navigation.canGoBack();

  if (!canGoBack) {
    return null;
  }

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress} className={cn('', styles)} activeOpacity={0.7}>
      <Ionicons 
        name="arrow-back"
        size={24} 
        color={"white"} 
      />
    </TouchableOpacity>
  );
};

export default BackArrow;