import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;

interface Workout {
    id: number;
    title: string;
    category: string;
    duration: string;
    difficulty: 'Легко' | 'Средне' | 'Сложно';
    exercises: number;
    icon: keyof typeof Feather.glyphMap;
    color: string;
}

const WORKOUTS: Workout[] = [
    {
        id: 1,
        title: 'Подтягивания для начинающих',
        category: 'Спина',
        duration: '20 мин',
        difficulty: 'Легко',
        exercises: 5,
        icon: 'arrow-up',
        color: '#0ddb74'
    },
    {
        id: 2,
        title: 'Взрывные отжимания',
        category: 'Грудь',
        duration: '25 мин',
        difficulty: 'Средне',
        exercises: 6,
        icon: 'trending-up',
        color: '#3b82f6'
    },
    {
        id: 3,
        title: 'Пресс за 15 минут',
        category: 'Кор',
        duration: '15 мин',
        difficulty: 'Легко',
        exercises: 8,
        icon: 'zap',
        color: '#f59e0b'
    },
    {
        id: 4,
        title: 'Силовые брусья',
        category: 'Трицепс',
        duration: '30 мин',
        difficulty: 'Сложно',
        exercises: 5,
        icon: 'activity',
        color: '#ef4444'
    },
    {
        id: 5,
        title: 'Подтягивания широким хватом',
        category: 'Спина',
        duration: '25 мин',
        difficulty: 'Средне',
        exercises: 6,
        icon: 'layers',
        color: '#8b5cf6'
    },
    {
        id: 6,
        title: 'Полная тренировка тела',
        category: 'Full Body',
        duration: '45 мин',
        difficulty: 'Сложно',
        exercises: 10,
        icon: 'target',
        color: '#ec4899'
    },
    {
        id: 7,
        title: 'Выносливость верха',
        category: 'Грудь & Спина',
        duration: '35 мин',
        difficulty: 'Средне',
        exercises: 7,
        icon: 'battery-charging',
        color: '#14b8a6'
    },
    {
        id: 8,
        title: 'Статические удержания',
        category: 'Сила',
        duration: '20 мин',
        difficulty: 'Сложно',
        exercises: 4,
        icon: 'pause',
        color: '#f97316'
    }
];

const Trains = () => {
    const getDifficultyColor = (difficulty: Workout['difficulty']) => {
        switch (difficulty) {
            case 'Легко': return '#0ddb74';
            case 'Средне': return '#f59e0b';
            case 'Сложно': return '#ef4444';
        }
    };

    return (
        <View className='mb-6'>
            {/* Header */}
            <View className='flex-row items-center justify-between px-6 mb-4'>
                <View className='flex-row items-center gap-2'>
                    <View className='w-2 h-2 bg-neon rounded-full' />
                    <Text className='text-white text-lg font-bold'>
                        Популярные тренировки
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text className='text-neon text-sm font-semibold'>
                        Все
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Horizontal Scroll */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + 16}
                decelerationRate="fast"
                contentContainerStyle={{ paddingHorizontal: 24 }}
            >
                {WORKOUTS.map((workout, index) => (
                    <TouchableOpacity
                        key={workout.id}
                        activeOpacity={0.8}
                        style={{ width: CARD_WIDTH, marginRight: index === WORKOUTS.length - 1 ? 0 : 16 }}
                    >
                        <View className='bg-zinc-800/40 border border-zinc-700/50 rounded-2xl p-5 relative overflow-hidden'>
                            {/* Background decoration */}
                            <View 
                                className='absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-20'
                                style={{ backgroundColor: workout.color }}
                            />

                            {/* Icon */}
                            <View 
                                className='w-12 h-12 rounded-xl items-center justify-center mb-4'
                                style={{ backgroundColor: `${workout.color}20` }}
                            >
                                <Feather name={workout.icon} size={24} color={workout.color} />
                            </View>

                            {/* Content */}
                            <View className='mb-4'>
                                <Text className='text-zinc-400 text-xs font-semibold mb-1'>
                                    {workout.category}
                                </Text>
                                <Text className='text-white text-xl font-bold mb-2'>
                                    {workout.title}
                                </Text>
                            </View>

                            {/* Stats */}
                            <View className='flex-row items-center gap-4 mb-4'>
                                <View className='flex-row items-center gap-1'>
                                    <Feather name="clock" size={14} color="#a1a1aa" />
                                    <Text className='text-zinc-400 text-xs'>
                                        {workout.duration}
                                    </Text>
                                </View>
                                <View className='flex-row items-center gap-1'>
                                    <Feather name="list" size={14} color="#a1a1aa" />
                                    <Text className='text-zinc-400 text-xs'>
                                        {workout.exercises} упражнений
                                    </Text>
                                </View>
                            </View>

                            {/* Difficulty Badge */}
                            <View 
                                className='self-start px-3 py-1 rounded-lg'
                                style={{ backgroundColor: `${getDifficultyColor(workout.difficulty)}20` }}
                            >
                                <Text 
                                    className='text-xs font-bold'
                                    style={{ color: getDifficultyColor(workout.difficulty) }}
                                >
                                    {workout.difficulty}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Trains;