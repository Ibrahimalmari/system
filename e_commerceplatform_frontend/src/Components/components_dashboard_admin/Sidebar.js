import { React, useEffect, useState } from 'react'
import axios from "axios";
import swal from "sweetalert";
import {
    BsCart3,
    BsGrid1X2Fill,
    BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsListCheck,
    BsMenuButtonWideFill,
    BsFillGearFill,
    BsChevronRight
}
from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function Sidebar({ openSidebarToggle, OpenSidebar }) {

    const [showProductSublinks, setShowProductSublinks] = useState(false); // حالة لعرض الروابط الفرعية للمنتج

    const toggleProductSublinks = () => {
        setShowProductSublinks(!showProductSublinks);
    };
    const [showCategorySublinks, setShowCategorySublinks] = useState(false);

    const toggleCategorySublinks = () => {
        setShowCategorySublinks(!showCategorySublinks);
    };
    const [showSellerSublinks, setShowSellerSublinks] = useState(false);

    const toggleSellerSublinks = () => {
        setShowSellerSublinks(!showSellerSublinks);
    };
    const [showBrunchSublinks, setShowBrunchSublinks] = useState(false);

    const toggleBrunchSublinks = () => {
        setShowBrunchSublinks(!showBrunchSublinks);
    };

    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/Admin/Login');
        }
    }, )


    const logoutSubmit = async(e) => {
        e.preventDefault();
        const id = localStorage.getItem("id");
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/adminlogout/${id}`);
            if (response.data.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("name");
                localStorage.removeItem("role_auth");
                localStorage.removeItem("id");
                console.log(response.data);
                swal("success", response.data.message, "success")
                navigate('/Admin/Login');
            }
        } catch (error) {
            swal("error", error.message, "error")
            console.error(error.message);

        }
    };

    return ( <
        aside id = "sidebar"
        className = { openSidebarToggle ? "sidebar-responsive" : "" } >
        <
        div className = 'sidebar-title' >
        <
        div className = 'sidebar-brand' >
        <
        BsCart3 className = 'icon_header' / > YAM <
        /div> <
        hr / >
        <
        span className = 'icon close_icon'
        onClick = { OpenSidebar } > X < /span> <
        /div>

        <
        ul className = 'sidebar-list' >
        <
        li className = 'sidebar-list-item' >
        <
        Link href = ""
        to = "/admin/Dashboard" >
        <
        BsGrid1X2Fill className = 'icon' / > Dashboard <
        /Link> <
        /li> <
        li className = 'sidebar-list-item' >
        <
        div className = "sidebar-sublink-header"
        onClick = { toggleProductSublinks } >
        <
        span className = 'main-product' >
        <
        BsFillArchiveFill className = 'icon' / > Product <
        /span> <
        span className = "arrow-icon" >
        <
        BsChevronRight / >
        <
        /span> <
        /div> {
            showProductSublinks && ( <
                ul className = 'sidebar-sublist gray-background' > { /* الروابط الفرعية للمنتج */ } <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/admin/Product/"
                className = 'sublink' >
                All Products <
                /Link> <
                /li> <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/admin/Product/Add"
                className = 'sublink' >
                Add Product <
                /Link> <
                /li> <
                /ul>
            )
        } <
        /li>               <
        li className = 'sidebar-list-item' >
        <
        div className = "sidebar-sublink-header"
        onClick = { toggleCategorySublinks } >
        <
        span className = 'main-product' >
        <
        BsFillGrid3X3GapFill className = 'icon' / > Category <
        /span> <
        span className = "arrow-icon" >
        <
        BsChevronRight / >
        <
        /span> <
        /div> {
            showCategorySublinks && ( <
                ul className = 'sidebar-sublist gray-background' > { /* الروابط الفرعية للمنتج */ } <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/admin/Category/"
                className = 'sublink' >
                All Category <
                /Link> <
                /li> <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/admin/Category/Add"
                className = 'sublink' >
                Add Category <
                /Link> <
                /li> <
                /ul>
            )
        } <
        /li> <
        li className = 'sidebar-list-item' >
        <
        div className = "sidebar-sublink-header"
        onClick = { toggleBrunchSublinks } >
        <
        span className = 'main-product' >
        <
        BsFillGrid3X3GapFill className = 'icon' / > Brunch <
        /span> <
        span className = "arrow-icon" >
        <
        BsChevronRight / >
        <
        /span> <
        /div> {
            showBrunchSublinks && ( <
                ul className = 'sidebar-sublist gray-background' > { /* الروابط الفرعية للمنتج */ } <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/admin/Brunch/"
                className = 'sublink' >
                All Brunch <
                /Link> <
                /li> <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/admin/Brunch/Add"
                className = 'sublink' >
                Add Brunch <
                /Link> <
                /li> <
                /ul>
            )
        } <
        /li> <
        li className = 'sidebar-list-item' >
        <
        div className = "sidebar-sublink-header"
        onClick = { toggleSellerSublinks } >
        <
        span className = 'main-product' >
        <
        BsPeopleFill className = 'icon' / > Seller <
        /span> <
        span className = "arrow-icon" >
        <
        BsChevronRight / >
        <
        /span> <
        /div> {
            showSellerSublinks && ( <
                ul className = 'sidebar-sublist gray-background' >
                <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/admin/Seller/"
                className = 'sublink' >
                All Seller <
                /Link> <
                /li> <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/admin/Seller/Add/"
                className = 'sublink' >
                Add Seller <
                /Link> <
                /li> <
                /ul>
            )
        } <
        /li> <
        li className = 'sidebar-list-item' >
        <
        Link href = ""
        to = "admin/Inventory" >
        <
        BsListCheck className = 'icon' / > Inventory <
        /Link> <
        /li> <
        li className = 'sidebar-list-item' >
        <
        Link href = ""
        to = "admin/Report" >
        <
        BsMenuButtonWideFill className = 'icon' / > Reports <
        /Link> <
        /li> <
        li className = 'sidebar-list-item' >
        <
        Link href = ""
        to = "admin/Inventory" >
        <
        BsFillGearFill className = 'icon' / > Setting <
        /Link> <
        /li> <
        li className = 'sidebar-list-item' >
        <
        Link href = ""
        onClick = { logoutSubmit } >
        <
        BsFillGearFill className = 'icon' / > Logout <
        /Link> <
        /li> <
        /ul> <
        /aside>
    )
}

export default Sidebar