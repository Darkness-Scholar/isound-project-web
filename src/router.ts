import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import routes from './config/config';
import User from './pages/User/User';
import Home from './pages/Home/Home';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

const publicRoutes = [
    {
        path: routes.home,
        component: Home,
        layout: DefaultLayout
    },
    {
        path: routes.user,
        component: User,
        layout: DefaultLayout
        
    }
]

export default publicRoutes