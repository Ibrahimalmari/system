import Product from "../dashboard_admin_pages/Product";
import Category from "../dashboard_admin_pages/Category";
import AddCategory from "../dashboard_admin_pages/addcategory";
import Dashboard from "../dashboard_admin_pages/Dashboard";
import AddProduct from "../dashboard_admin_pages/addproduct";
import Seller from "../dashboard_admin_pages/Seller";
import AddSeller from "../dashboard_admin_pages/addseller";
import Brunch from "../dashboard_admin_pages/Brunch";
import AddBrunch from "../dashboard_admin_pages/addbrunch";
const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/Product', exact: true, name: 'product', component: Product },
    { path: '/Product/Add', exact: true, name: 'addproduct', component: AddProduct },
    { path: '/Category', exact: true, name: 'category', component: Category },
    { path: '/Category/Add', exact: true, name: 'addcategory', component: AddCategory },
    { path: '/Dashboard', exact: true, name: 'dashboard', component: Dashboard },
    { path: '/Seller', exact: true, name: 'seller', component: Seller },
    { path: '/Seller/Add', exact: true, name: 'addseller', component: AddSeller },
    { path: '/Brunch', exact: true, name: 'brunch', component: Brunch },
    { path: '/Brunch/Add', exact: true, name: 'addbrunch', component: AddBrunch },

];


export default routes;