import config from '~/config/';

// Pages
import Advance from '~/Pages/Advance/';
import API from '~/Pages/API';
import GetStart from '~/Pages/GetStart';
import Home from '~/Pages/Home';
import Resource from '~/Pages/Resource';

const publicLayout = [
    { path: config.routes.home, conponent: Home },
    { path: config.routes.advance, conponent: Advance },
    { path: config.routes.api, conponent: API },
    { path: config.routes.getstart, conponent: GetStart },
    { path: config.routes.resources, conponent: Resource },
];
const privateLayout = [];

export { publicLayout, privateLayout };
