import { useMemo, useEffect } from 'react';
import { useTypedSelector } from '@/components/hooks/useTypedSelector';
import { useTypesDispatch } from '@/components/hooks/useTypedDispatch';
import { useActions } from '@/components/hooks/useAction';
import { claimChallengeReward } from '@/store/challenge/challenge.action';
import { CHALLENGE_COMPLETION_EXP } from '@/app.constants';

export const useWeeklyChallenge = () => {
    const { user, isLoading } = useTypedSelector(state => state.user);
    const dispatch = useTypesDispatch();
    const { updateExp } = useActions();

    const stats = useMemo(() => {
        const challenges = user?.challenge || [];
        const totalCount = challenges.length;
        const completedCount = challenges.filter(c => c.current >= c.target).length;
        const isRewardNotClaimed = challenges.every(c => c.useWeekly === false);
        const overallProgressPercent = totalCount > 0 
            ? Math.round((completedCount / totalCount) * 100) 
            : 0;
        const allCompleted = completedCount === totalCount && totalCount > 0;

        return {
            challenges,
            totalCount,
            completedCount,
            isRewardNotClaimed,
            overallProgressPercent,
            allCompleted
        };
    }, [user?.challenge]);

    const claimReward = async () => {
        try {
            const result = await dispatch(claimChallengeReward()).unwrap();
            if (result === true) {
                await updateExp({ expirience: CHALLENGE_COMPLETION_EXP });
            }
        } catch (error) {
            console.error('Failed to claim reward:', error);
        }
    };

    useEffect(() => {
        if (!stats.allCompleted || !stats.isRewardNotClaimed) return

        claimReward();
    }, [stats.allCompleted, stats.isRewardNotClaimed, dispatch, updateExp]);

    return {
        isLoading,
        ...stats
    };
};