import Navbar from '../app/components/navbar.jsx';
import Home from '../app/components/home.jsx';
import User from '../app/components/user.jsx';

export default {
    routes: [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/user',
            component: User,
            exact: true
        }
    ],
    redirects: [
        {
            from: '/people',
            to: '/user',
            status: 301
        }
    ]
}