/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsPencil, BsTrash, BsTable } from 'react-icons/bs';
import "../../App.css";

export default function Category() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const id = localStorage.getItem('id');

            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/category/${id}`);
                setData(response.data.category);
                console.log(response.data.category);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);




    return ( <
        div className = 'main-container' >
        <
        div className = 'row' >
        <
        div className = 'col-md-12' >
        <
        div className = 'card' >
        <
        div className = 'card-header' >
        <
        h4 className = 'fw-bold ' >
        <
        BsTable size = { 24 }
        color = "#1F3750"
        className = "me-1 mb-1" / >
        Category <
        Link to = "/Seller/Category/Add"
        className = 'btn btn-secondary float-end' > Add Category < /Link> <
        /h4> <
        /div> <
        div className = 'card-body' >
        <
        div style = {
            { overflowX: 'auto' } } >
        <
        table class = "table table-striped table-hover" >
        <
        thead className = 'text-white bg-dark' >
        <
        tr >
        <
        th scope = "col" > Id < /th> <
        th scope = "col" > name < /th> <
        th scope = "col" > slug < /th> <
        th scope = "col" > description < /th> <
        th scope = "col" > image < /th> <
        th scope = "col" > status < /th> <
        /tr> <
        /thead> <
        tbody > {
            Array.isArray(data) && data.map((item) => ( <
                tr key = { item.id } >
                <
                td className = "d-md-table-cell" > { item.id } < /td>  <
                td className = "d-md-table-cell" > { item.name } < /td>  <
                td className = "d-md-table-cell" > { item.slug } < /td>  <
                td className = "d-md-table-cell" > { item.description } < /td>  <
                td className = "d-md-table-cell" >
                <
                img width = "75px"
                src = { `http://127.0.0.1:8000/categories/${item.image}` }
                alt = { item.name }
                /> <
                /td>  <
                td className = "d-md-table-cell" > { item.status } < /td>  <
                td className = "d-md-table-cell" >
                <
                Link to = { `EditCategory/${item.id}` }
                className = "btn btn-link me-2" >
                <
                BsPencil size = { 20 }
                color = "#28a745" / >
                <
                /Link>                             <
                button className = "btn btn-link" >
                <
                BsTrash size = { 20 }
                color = "#dc3545" / >
                <
                /button>                             <
                /td> <
                /tr>

            ))
        } <
        /tbody> <
        /table> <
        /div> <
        /div>  <
        /div> <
        /div>

        <
        /div> <
        /div> 
    )
}