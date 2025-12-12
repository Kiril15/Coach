import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { IChallenge } from "@/types/challenge.interface";
import { useCallback, memo } from "react";

interface ChallengeItemProps {
    challenge: IChallenge;
    onUpdate?: (title: string, current?: number) => void;
}

const ChallengeItem = ({ challenge, onUpdate }: ChallengeItemProps) => {
    const isCompleted = challenge.current >= challenge.target;
    const progressPercent = Math.min(Math.round((challenge.current / challenge.target) * 100), 100);

    const handlePress = useCallback(async () => {
        if (onUpdate && !isCompleted) {
            await onUpdate(challenge.title, 1); 
        }
    }, [onUpdate, isCompleted, challenge.title]);

    return (
        <TouchableOpacity 
            onPress={handlePress}
            activeOpacity={isCompleted ? 1 : 0.7}
        >
            <View className='bg-zinc-900/50 rounded-xl p-4 border border-zinc-700/30'>
                <View className='flex-row items-center justify-between mb-3'>
                    <View className='flex-row items-center gap-3 flex-1'>
                        <View className={`w-6 h-6 rounded-full items-center justify-center ${
                            isCompleted ? 'bg-neon' : 'border-2 border-zinc-600'
                        }`}>
                            {isCompleted && <Feather name="check" size={14} color="#0a0a0a" />}
                        </View>
                        <Text 
                            className={`text-sm font-semibold flex-1 ${isCompleted ? 'text-zinc-500' : 'text-white'}`}
                            style={isCompleted ? { textDecorationLine: 'line-through' } : {}}
                        >
                            {challenge.title}
                        </Text>
                    </View>
                    <Text className={`text-xs font-bold ${isCompleted ? 'text-neon' : 'text-zinc-400'}`}>
                        {challenge.current}/{challenge.target}
                    </Text>
                </View>
                {!isCompleted && (
                    <View className='h-1.5 bg-zinc-700/50 rounded-full overflow-hidden'>
                        <View 
                            className='h-full bg-neon/60 rounded-full' 
                            style={{ width: `${progressPercent}%` }} 
                        />
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default memo(ChallengeItem);