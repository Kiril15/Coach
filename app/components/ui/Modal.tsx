import { FC, PropsWithChildren } from 'react';
import { View, Text, Modal as RNModal, TouchableOpacity, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface IModalProps extends PropsWithChildren {
    visible: boolean;
    onClose: () => void;
    title?: string;
    showCloseButton?: boolean;
}

const Modal: FC<IModalProps> = ({ 
    visible, 
    onClose, 
    title, 
    showCloseButton = true,
    children 
}) => {
    return (
        <RNModal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <Pressable 
                className='flex-1 bg-black/80 justify-center items-center px-5'
                onPress={onClose}
            >
                <Pressable 
                    className='w-full max-w-md bg-[#1A1B1B] rounded-2xl p-6 border border-zinc-700/50'
                    onPress={(e) => e.stopPropagation()}
                >
                    {(title || showCloseButton) && (
                        <View className='flex-row justify-between items-center mb-4'>
                            {title ? (
                                <Text className='text-white text-xl font-bold flex-1'>
                                    {title}
                                </Text>
                            ) : (
                                <View />
                            )}
                            
                            {showCloseButton && (
                                <TouchableOpacity 
                                    onPress={onClose}
                                    className='w-8 h-8 bg-zinc-800 rounded-full items-center justify-center'
                                >
                                    <Feather name="x" size={18} color="white" />
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                    {children}
                </Pressable>
            </Pressable>
        </RNModal>
    );
};

export default Modal;