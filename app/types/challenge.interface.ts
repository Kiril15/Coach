export interface IChallenge {
    id: number
    title: string
    current: number
    target: number
    useWeekly: boolean
    userId: number
}

export interface IChallengeRequest extends Omit<IChallenge, 'id' | 'target' | 'useWeekly' | "userId"> {}