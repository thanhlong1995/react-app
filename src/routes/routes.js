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
    { path: config.routes.home, conponent: Home },
    { path: config.routes.advance, conponent: Advance },
    { path: config.routes.api, conponent: API },
    { path: config.routes.admin, conponent: Login },
    { path: config.routes.admin, conponent: SignUp },
    { path: config.routes.getstart, conponent: GetStart },
    { path: config.routes.resources, conponent: Resource },
];
const privateLayout = [{ path: config.routes.admin, conponent: Admin }];

export { publicLayout, privateLayout };
