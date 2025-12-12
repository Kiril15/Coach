import { lazy } from 'react';
import { IRoute } from "./navigation.types";

const Home = lazy(() => import("@/components/screens/home/Home"));
const Training = lazy(() => import("@/components/screens/training/Training"));
const Statistics = lazy(() => import("@/components/screens/statistics/Statistics"));
const Profile = lazy(() => import("@/components/screens/profile/Profile"));
const FAQ = lazy(() => import("@/components/screens/information/FAQ"));
const PrivacyPolicy = lazy(() => import("@/components/screens/information/PrivacyPolicy"));
const Works = lazy(() => import("@/components/screens/information/Works"));
const TermsConditions = lazy(() => import("@/components/screens/information/TermsConditions"));
const EditProfile = lazy(() => import("@/components/screens/edits/EditProfile"));

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
];