import Home from "@/components/screens/home/Home";
import { IRoute } from "./navigation.types";
import Profile from "@/components/screens/profile/Profile";
import Statistics from "@/components/screens/statistics/Statistics";
import Training from "@/components/screens/training/Training";
import FAQ from "@/components/screens/information/FAQ";
import PrivacyPolicy from "@/components/screens/information/PrivacyPolicy";
import Works from "@/components/screens/information/Works";
import TermsConditions from "@/components/screens/information/TermsConditions";
import EditProfile from "@/components/screens/edits/EditProfile";

export const routes: IRoute[] = [
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'Training',
        component: Training
    },
    {
        name: 'Statistics',
        component: Statistics
    },
    {
        name: 'Profile',
        component: Profile
    },
    {
        name: 'FAQ',
        component: FAQ
    },
    {
        name: 'PrivacyPolicy',
        component: PrivacyPolicy
    },
    {
        name: 'Works',
        component: Works
    },
    {
        name: 'TermsConditions',
        component: TermsConditions
    },
    {
        name: 'EditProfile',
        component: EditProfile
    },
]