import { React } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSeller from './Components/components_register_login_seller/Login';
import LoginAdmin from './Components/components_login_admin/Login';
import MasterLayoutSeller from './Pages/dashboard_seller/MasterLayoutSeller';
import MasterLayoutAadmin from './Pages/dashboard_admin/MasterLayoutAdmin';

axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < div > Default Page Content < /div>} / >
            <
            Route path = "/admin/*"
            element = { < MasterLayoutAadmin / > }
            />   <
            Route path = "/Admin/Login"
            element = { < LoginAdmin / > }
            />  <
            Route path = "/Seller/Login"
            element = { < LoginSeller / > }
            />  <
            Route path = "/Seller/*"
            element = { < MasterLayoutSeller / > }
            />

            <
            /Routes> <
            /Router>
            // <Dashboard/>
        )

    }

    export default App;