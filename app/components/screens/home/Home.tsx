import { useTypedSelector } from '@/components/hooks/useTypedSelector';
import Layout from '@/components/ui/layout/Layout';
import { FC, memo, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import StatsGrid from '../profile/widgets/StatsGrid';
import DailyTip from './actions/DayliTip';
import UserCard from './actions/UserCard.';
import WeeklyChallenge from './challenge/WeeklyChallenge';
import { useActions } from '@/components/hooks/useAction';
import Trains from './actions/Trains';

const Home: FC = () => {
    const { user } = useTypedSelector(state => state.user);
    const {getUserChallenges} = useActions()

    useEffect(() => {
        getUserChallenges()
    }, [])

    return (
        <Layout>
            <View className='px-6 mt-5'>
                <UserCard/>

                <StatsGrid
                    level={user?.level as number ?? 1}
                    experience={user?.expirience as number}
                    streak={user?.dayStrick as number}
                />

                <DailyTip styles='mb-6' />

                <WeeklyChallenge/>

                <Trains/>
            </View>
        </Layout>
    );
};

export default memo(Home);