import { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useActions } from '@/components/hooks/useAction';
import { useTypedSelector } from '@/components/hooks/useTypedSelector';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const AvatarUpload: FC = () => {
    const { uploadAvatar, clearAuthError } = useActions(); 
    const { t } = useTranslation();
    const { user, uploading, error } = useTypedSelector(state => state.user);

    const handlePickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.8,
            });

            if (!result.canceled && result.assets && result.assets.length > 0) {
                const asset = result.assets[0];

                await uploadAvatar({
                    uri: asset.uri,
                    type: asset.mimeType || 'image/jpeg', 
                    name: asset.fileName || 'avatar.jpg' 
                });
            }
        } catch (error) {
            console.error('Image picker error:', error);
        }
    };

    return (
        <View className='items-center'>
            <TouchableOpacity 
                onPress={handlePickImage}
                disabled={uploading}
                className='relative'
                activeOpacity={0.8}
            >
                {user?.image ? (
                    <Image 
                        source={{ uri: user.image }}
                        className='w-[125px] h-[125px] rounded-full border-2 border-zinc-700'
                    />
                ) : (
                    <View className='w-[125px] h-[125px] rounded-full bg-zinc-800 border-2 border-zinc-700 items-center justify-center'>
                        <Feather name="user" size={40} color="#9CA3AF" />
                    </View>
                )}
                
                {uploading && (
                    <View className='absolute inset-0 rounded-full bg-black/70 items-center justify-center'>
                        <Text className='text-white text-xs font-semibold'>
                            Uploading...
                        </Text>
                    </View>
                )}
                
                {!uploading && (
                    <View className='absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 border-2 border-black'>
                        <Feather name="camera" size={16} color="white" />
                    </View>
                )}
            </TouchableOpacity>

            {!uploading && (
                <Text className='text-zinc-400 text-sm text-center mt-3'>
                    {t('edit.changeAvatar')}
                </Text>
            )}

            {error && (
                <TouchableOpacity 
                    className='mt-3 bg-red-500/10 rounded-lg px-4 py-2'
                    onPress={() => clearAuthError()}
                >
                    <View className='flex-row items-center gap-2'>
                        <Feather name="alert-circle" size={14} color="#EF4444" />
                        <Text className='text-red-500 text-sm flex-1'>{error}</Text>
                        <Feather name="x" size={14} color="#EF4444" />
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default AvatarUpload;