import Category from "../dashboard_seller_pages/Category";
import AddCategory from "../dashboard_seller_pages/addcategory";
import Dashboard from "../dashboard_seller_pages/Dashboard";
import Product from "../dashboard_seller_pages/Product";
import AddProduct from "../dashboard_seller_pages/addproduct";
import Brunch from "../dashboard_seller_pages/Brunch";
import AddBrunch from "../dashboard_seller_pages/addbrunch";
import Store from "../dashboard_seller_pages/Store";
import AddStore from "../dashboard_seller_pages/addstore";
const routes = [
    { path: '/seller', exact: true, name: 'Seller' },
    { path: '/Product', exact: true, name: 'product', component: Product },
    { path: '/Product/Add', exact: true, name: 'addproduct', component: AddProduct },
    { path: '/Category', exact: true, name: 'category', component: Category },
    { path: '/Category/Add', exact: true, name: 'addcategory', component: AddCategory },
    { path: '/Brunch', exact: true, name: 'category', component: Brunch },
    { path: '/Brunch/Add', exact: true, name: 'addbrunch', component: AddBrunch },
    { path: '/Dashboard', exact: true, name: 'dashboard', component: Dashboard },
    { path: '/Store', exact: true, name: 'store', component: Store },
    { path: '/Store/Add', exact: true, name: 'addstore', component: AddStore },

];


export default routes;