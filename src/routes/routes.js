import config from '~/config/';

// Pages
import Advance from '~/Pages/Advance/';
import API from '~/Pages/API';
import Admin from '~/Pages/Admin';
import Product from '~/Pages/product';
import Home from '~/Pages/Home';
import Resource from '~/Pages/Resource';
import Login from '~/Auth/Login';
import SignUp from '~/Auth/SignUp';
// Screen
import BirthDay from '~/screens/birthday';
import Tours from '~/screens/tours';
import Reviews from '~/screens/reviews';
import Accordino from '~/screens/accordion/Accordion';
import Menu from '~/screens/menu';
import TabsProduct from '~/screens/tabs';
import Slider from '~/screens/slider';
import Lorem from '~/screens/lorem';
import Grocery from '~/screens/grocary';

const publicLayout = [
    { path: config.routes.home, conponent: Home, header: 'display' },
    { path: config.routes.advance, conponent: Advance, header: 'display' },
    { path: config.routes.api, conponent: API, header: 'display' },
    { path: config.routes.login, conponent: Login, header: 'none' },
    { path: config.routes.signup, conponent: SignUp, header: 'none' },
    { path: config.routes.product, conponent: Product, header: 'display' },
    { path: config.routes.resources, conponent: Resource, header: 'display' },
];

const privateLayout = [{ path: config.routes.admin, conponent: Admin, header: 'display' }];

// Product layout
const productLayout = [
    { path: config.route_product.birthday, conponent: BirthDay },
    { path: config.route_product.tours, conponent: Tours },
    { path: config.route_product.review, conponent: Reviews },
    { path: config.route_product.accordion, conponent: Accordino },
    { path: config.route_product.menu, conponent: Menu },
    { path: config.route_product.tabsProduct, conponent: TabsProduct },
    { path: config.route_product.slider, conponent: Slider },
    { path: config.route_product.lorem, conponent: Lorem },
    { path: config.route_product.grocery, conponent: Grocery },
];

export { publicLayout, privateLayout, productLayout };
