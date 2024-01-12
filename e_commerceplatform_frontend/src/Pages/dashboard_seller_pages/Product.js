import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsPencil, BsTrash, BsTable } from 'react-icons/bs';
import "../../App.css";

export default function Product() {


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const id = localStorage.getItem('id');

            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}`);
                setData(response.data.product);
                console.log(response.data.product);
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
        div className = 'card-header  justify-content-between align-items-center' >
        <
        h4 className = 'fw-bold ' >
        <
        BsTable size = { 24 }
        color = "#1F3750"
        className = "me-1 mb-1" / >
        Product <
        Link to = "/Seller/Product/Add"
        className = 'btn btn-secondary float-end' > Add Product < /Link> <
        /h4> <
        /div> <
        div className = 'card-body' >
        <
        div style = {
            { overflowX: 'auto' } } >
        <
        table className = "table table-striped table-hover" >
        <
        thead className = 'text-white bg-dark' >
        <
        tr >
        <
        th scope = "col" > Id < /th> <
        th scope = "col" > name < /th> <
        th scope = "col" > description < /th> <
        th scope = "col" > price < /th> <
        th scope = "col" > images < /th> <
        th scope = "col" > quantity < /th> <
        th scope = "col" > category_id < /th> <
        th scope = "col" > branch_id < /th> <
        th scope = "col" > store_id < /th> <
        /tr> <
        /thead> <
        tbody > {
            data.map((item) => ( <
                tr key = { item.id } >
                <
                td className = "d-md-table-cell" > { item.name } < /td>  <
                td className = "d-md-table-cell" > { item.description } < /td>  <
                td className = "d-md-table-cell" > { item.price } < /td>  <
                td className = "d-md-table-cell" >
                <
                img width = "75px"
                src = { `http://127.0.0.1:8000/products/${item.images}` }
                alt = { item.name }
                /> <
                /td>  <
                td className = "d-md-table-cell" > { item.quantity } < /td>  <
                td className = "d-md-table-cell" > { item.category_id } < /td>  <
                td className = "d-md-table-cell" > { item.branch_id } < /td>  <
                td className = "d-md-table-cell" > { item.store_id } < /td>  <
                td className = "d-md-table-cell" >
                <
                Link to = { `EditProduct/${item.id}` }
                className = "btn btn-link me-2" >
                <
                BsPencil size = { 20 }
                color = "#28a745" / >
                <
                /Link>                           <
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
        /div> <
        /div> <
        /div>

        <
        /div> <
        /div> 
    )
}