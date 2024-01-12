import Product from "../dashboard_admin_pages/Product";
import Category from "../dashboard_admin_pages/Category";
import AddCategory from "../dashboard_admin_pages/addcategory";
import Dashboard from "../dashboard_admin_pages/Dashboard";
import AddProduct from "../dashboard_admin_pages/addproduct";
import Seller from "../dashboard_admin_pages/Seller";
import AddSeller from "../dashboard_admin_pages/addseller";
import Branch from "../dashboard_admin_pages/Branch";
import AddBranch from "../dashboard_admin_pages/addbranch";
import Store from "../dashboard_admin_pages/Store";
import AddStore from "../dashboard_admin_pages/addstore";
import EditSeller from "../dashboard_admin_pages/editseller";
import EditStore from "../dashboard_admin_pages/editstore";
const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/Product', exact: true, name: 'product', component: Product },
    { path: '/Product/Add', exact: true, name: 'addproduct', component: AddProduct },
    { path: '/Category', exact: true, name: 'category', component: Category },
    { path: '/Category/Add', exact: true, name: 'addcategory', component: AddCategory },
    { path: '/Dashboard', exact: true, name: 'dashboard', component: Dashboard },
    { path: '/Seller', exact: true, name: 'seller', component: Seller },
    { path: '/Seller/Add', exact: true, name: 'addseller', component: AddSeller },
    { path: '/Seller/EditSeller/:id', exact: true, name: 'editseller', component: EditSeller },
    { path: '/Branch', exact: true, name: 'branch', component: Branch },
    { path: '/Branch/Add', exact: true, name: 'addbranch', component: AddBranch },
    { path: '/Store', exact: true, name: 'store', component: Store },
    { path: '/Store/Add', exact: true, name: 'addstore', component: AddStore },
    { path: '/Store/EditStore/:id', exact: true, name: 'editstore', component: EditStore },

];


export default routes;