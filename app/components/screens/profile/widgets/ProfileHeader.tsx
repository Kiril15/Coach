import { FC } from 'react';
import { View, Text, Image } from 'react-native';
import UserSkeleton from '@/components/ui/layout/skeleton/UserSkeleton';
import { useTypedSelector } from '@/components/hooks/useTypedSelector';

interface IProfileHeaderProps {
    email?: string;
}

const ProfileHeader: FC<IProfileHeaderProps> = ({ email }) => {
    const {user} = useTypedSelector(state => state.user);

    return (
        <View className='items-center mt-6 mb-8'>
            {user?.image ? (
                <View className='w-[125px] h-[125px] rounded-full overflow-hidden border-2 border-zinc-700'>
                    <Image 
                        source={{ uri: user?.image }}
                        className='w-[125px] h-[125px] rounded-full'
                    />
                </View>
            ) : (
                <UserSkeleton compact={false} styles='mb-2'/>
            )}
            <Text className='text-muted text-lg'>{email}</Text>
        </View>
    )
}

export default ProfileHeader;