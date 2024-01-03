import { React, useState } from 'react'
import { Routes, Navigate, Route } from "react-router-dom"

import Header from '../../Components/components_dashboard_seller/Header'
import Sidebar from '../../Components/components_dashboard_seller/Sidebar'
import "./MasterLayoutSeller.css"
import routes from '../routes_dashboard_seller/routes'
export default function MasterLayoutSeller() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)




    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return ( <
        div className = 'grid-container' >
        <
        Header OpenSidebar = { OpenSidebar }
        /> <
        Sidebar openSidebarToggle = { openSidebarToggle }
        OpenSidebar = { OpenSidebar }
        />  <
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
        element = { < Navigate to = "/seller/dashboard" / > }
        />

        <
        /Routes> <
        /div>
    )
}