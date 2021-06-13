import {
    ADD_NEWS_ROUTE,
    MAIN_CONTROL,
    ADMIN_AUTH,
    MANUAL_ROUTE,
    AUTH_ROUTE,
    CLUB_ROUTE,
    MAIN_ROUTE,
    MEDIA_ROUTE,
    MOTOWIKI_ROUTE,
    MUSIC_ROUTE,
    NEWS_ROUTE,
    PHOTO_ROUTE,
    REGISTRATION_ROUTE,
    RULES_ROUTE,
    VIDEO_ROUTE} from './path/PathConst';
import {BMW_ROUTE,
    HONDA_ROUTE} from './path/PathConst';
import Auth from './pages/Auth';
import Registration from './pages/Registration';
import Manual from './pages/Manual';
import Main from './pages/Main';
import Club from './pages/Club';
import Img from './pages/Img';
import Media from './pages/Media';
import Moto from './pages/Moto';
import Music from './pages/Music';
import News from './pages/News';
import Rule from './pages/Rule';
import Video from './pages/Video';
//Админ импорты
import AuthAdmin from "./pages/ControlPanel/AuthAdmin";
import MainControl from "./pages/ControlPanel/MainControl";
import AddNews from "./pages/ControlPanel/AddNews";
//Роуты на мануалы
import Bmw from './pages/manual/BMW';
import Honda from './pages/manual/Honda';


    export const publicPages = [
        {
            path: MAIN_ROUTE,
            Component: Main
        },

        {
            path: CLUB_ROUTE,
            Component: Club
        },

        {
            path: MEDIA_ROUTE,
            Component: Media
        },

        {
            path: MOTOWIKI_ROUTE,
            Component: Moto
        },

        {
            path: NEWS_ROUTE,
            Component: News
        },

        {
            path: RULES_ROUTE,
            Component: Rule
        },

        {
            path: AUTH_ROUTE,
            Component: Auth
        },

        {
            path: REGISTRATION_ROUTE,
            Component: Registration
        },

        {
            path: MUSIC_ROUTE,
            Component: Music
        },

        {
            path: PHOTO_ROUTE,
            Component: Img
        },

        {
            path: VIDEO_ROUTE,
            Component: Video
        },

        {
            path: MANUAL_ROUTE,
            Component: Manual
        },

        {
            path: BMW_ROUTE,
            Component: Bmw
        },

        {
            path: HONDA_ROUTE,
            Component: Honda
        },

        {
            path: ADMIN_AUTH,
            Component: AuthAdmin
        },

        {
            path: MAIN_CONTROL,
            Component: MainControl
        },

        {
            path: ADD_NEWS_ROUTE,
            Component: AddNews
        }
    ]

    export const authPages = [

    ]

