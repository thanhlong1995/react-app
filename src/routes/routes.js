import config from '~/config/';

// Pages
import Advance from '~/Pages/Advance/';
import API from '~/Pages/API';
import Admin from '~/Pages/Admin';
import GetStart from '~/Pages/GetStart';
import Home from '~/Pages/Home';
import Resource from '~/Pages/Resource';
import Login from '~/Auth/Login';
import SignUp from '~/Auth/SignUp';

const publicLayout = [
    { path: config.routes.home, conponent: Home, header: 'display' },
    { path: config.routes.advance, conponent: Advance, header: 'display' },
    { path: config.routes.api, conponent: API, header: 'display' },
    { path: config.routes.login, conponent: Login, header: 'none' },
    { path: config.routes.signup, conponent: SignUp, header: 'none' },
    { path: config.routes.getstart, conponent: GetStart, header: 'display' },
    { path: config.routes.resources, conponent: Resource, header: 'display' },
];
const privateLayout = [
    { path: config.routes.admin, conponent: Admin, header: 'display' },
];

export { publicLayout, privateLayout };
