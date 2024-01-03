import { React, useState } from 'react'
import { Routes, Navigate, Route } from "react-router-dom"
import Header from '../../Components/components_dashboard_admin/Header'
import Sidebar from '../../Components/components_dashboard_admin/Sidebar'
import "./MasterLayoutAdmin.css"
import routes from '../routes_dashboard_admin/routes'
export default function MasterLayoutAdmin() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return ( <
        div className = 'grid-container' >
        <
        Header OpenSidebar = { OpenSidebar }
        openSidebarToggle = { openSidebarToggle }
        /> <
        Sidebar OpenSidebar = { OpenSidebar }
        openSidebarToggle = { openSidebarToggle }
        /> <
        Routes > {
            routes.filter(route => route.component)
            .map(({ path, component: Component }, idx, name) => ( <
                Route key = { idx }
                path = { path }
                name = { name }
                element = { < Component / > }
                />
            ))
        }

        <
        Route path = "/"
        element = { < Navigate to = "/admin/dashboard" / > }
        />

        <
        /Routes> <
        /div>

    )
}