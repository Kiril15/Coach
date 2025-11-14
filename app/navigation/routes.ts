import Home from "@/components/screens/home/Home";
import { IRoute } from "./navigation.types";
import Profile from "@/components/screens/profile/Profile";
import Statistics from "@/components/screens/statistics/Statistics";
import Training from "@/components/screens/Training/Training";

export const routes: IRoute[] = [
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'Profile',
        component: Profile
    },
    {
        name: 'Statistics',
        component: Statistics
    },
    {
        name: 'Training',
        component: Training
    }
]