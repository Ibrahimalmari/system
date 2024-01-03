import { React, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
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

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const navigate = useNavigate()

    const [showProductSublinks, setShowProductSublinks] = useState(false); // حالة لعرض الروابط الفرعية للمنتج

    const toggleProductSublinks = () => {
        setShowProductSublinks(!showProductSublinks);
    };
    const [showCategorySublinks, setShowCategorySublinks] = useState(false);

    const toggleCategorySublinks = () => {
        setShowCategorySublinks(!showCategorySublinks);
    };
    const [showStoreSublinks, setShowStoreSublinks] = useState(false);

    const toggleStoreSublinks = () => {
        setShowStoreSublinks(!showStoreSublinks);
    };
    const [showBrunchSublinks, setShowBrunchSublinks] = useState(false);

    const toggleBrunchSublinks = () => {
        setShowBrunchSublinks(!showBrunchSublinks);
    };

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/Seller/Login');
        }
    }, )


    const logoutSubmit = async(e) => {
        e.preventDefault();
        const id = localStorage.getItem("id");
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/sellerlogout/${id}`);
            if (response.data.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("name");
                localStorage.removeItem("role_auth");
                localStorage.removeItem("id");
                console.log(response.data);
                swal("success", response.data.message, "success")
                navigate('/Seller/Login');
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
        span className = 'icon close_icon'
        onClick = { OpenSidebar } > X < /span> <
        /div>

        <
        ul className = 'sidebar-list' >
        <
        li className = 'sidebar-list-item' >
        <
        Link href = ""
        to = "/seller/Dashboard" >
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
                Link to = "/seller/Product/"
                className = 'sublink' >
                All Products <
                /Link> <
                /li> <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/seller/Product/Add"
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
                Link to = "/seller/Category/"
                className = 'sublink' >
                All Category <
                /Link> <
                /li> <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/seller/Category/Add"
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
                Link to = "/seller/Brunch/"
                className = 'sublink' >
                All Brunch <
                /Link> <
                /li> <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/seller/Brunch/Add"
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
        onClick = { toggleStoreSublinks } >
        <
        span className = 'main-product' >
        <
        BsPeopleFill className = 'icon' / > Store <
        /span> <
        span className = "arrow-icon" >
        <
        BsChevronRight / >
        <
        /span> <
        /div> {
            showStoreSublinks && ( <
                ul className = 'sidebar-sublist gray-background' >
                <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/seller/Store/"
                className = 'sublink' >
                All Store <
                /Link> <
                /li> <
                li className = 'sidebar-sublist-item' >
                <
                Link to = "/seller/Store/Add/"
                className = 'sublink' >
                Add Store <
                /Link> <
                /li> <
                /ul>
            )
        } <
        /li> <
        li className = 'sidebar-list-item' >
        <
        Link href = ""
        to = "seller/Inventory" >
        <
        BsListCheck className = 'icon' / > Inventory <
        /Link> <
        /li> <
        li className = 'sidebar-list-item' >
        <
        Link href = ""
        to = "seller/Report" >
        <
        BsMenuButtonWideFill className = 'icon' / > Reports <
        /Link> <
        /li> <
        li className = 'sidebar-list-item' >
        <
        Link href = ""
        to = "seller/Inventory" >
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