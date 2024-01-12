import Category from "../dashboard_seller_pages/Category";
import AddCategory from "../dashboard_seller_pages/addcategory";
import Dashboard from "../dashboard_seller_pages/Dashboard";
import Product from "../dashboard_seller_pages/Product";
import AddProduct from "../dashboard_seller_pages/addproduct";
import Branch from "../dashboard_seller_pages/Branch";
import AddBranch from "../dashboard_seller_pages/addbranch";
import MyStore from "../dashboard_seller_pages/Store";
import Section from "../dashboard_seller_pages/Section";
import AddSection from "../dashboard_seller_pages/addsection";
import AddSection_toStore from "../dashboard_seller_pages/addSection_toStore";
const routes = [
    { path: '/seller', exact: true, name: 'Seller' },
    { path: '/Product', exact: true, name: 'product', component: Product },
    { path: '/Product/Add', exact: true, name: 'addproduct', component: AddProduct },
    { path: '/Category', exact: true, name: 'category', component: Category },
    { path: '/Category/Add', exact: true, name: 'addcategory', component: AddCategory },
    { path: '/Branch', exact: true, name: 'branch', component: Branch },
    { path: '/Branch/Add', exact: true, name: 'addbranch', component: AddBranch },
    { path: '/Dashboard', exact: true, name: 'dashboard', component: Dashboard },
    { path: '/MyStore', exact: true, name: 'mystore', component: MyStore },
    { path: '/Section/', exact: true, name: 'section', component: Section },
    { path: '/Section/Add', exact: true, name: 'addsection', component: AddSection },
    { path: '/Section/AddSectionToStore', exact: true, name: 'addsection_tostore', component: AddSection_toStore },

];


export default routes;