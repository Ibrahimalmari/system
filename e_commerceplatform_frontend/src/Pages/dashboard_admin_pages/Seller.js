import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { BsPencil, BsTrash, BsTable } from 'react-icons/bs';
import "../../App.css";

import axios from 'axios';

export default function Seller() {


    const [data, setData] = useState([]);



    useEffect(() => {
        const fetchData = async() => {

            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/seller/`);
                setData(response.data.seller);
                console.log(response.data.seller);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/deleteseller/${id}`);
            // تحديث الحالة المحلية بعد حذف العنصر
            setData(data.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting seller: ', error);
        }
    };


    return ( <
        div className = 'main-container' >
        <
        div className = 'row ' >
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
        Seller <
        Link to = "/Admin/Seller/Add"
        className = 'btn btn-secondary float-end' > Add Seller < /Link> <
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
        th scope = "col" > Name < /th> <
        th scope = "col" > Email < /th> <
        th scope = "col" > Personal Number < /th> <
        th scope = "col" > Address < /th> <
        th scope = "col" > Gender < /th> <
        th scope = "col" > Photo Of Personal ID < /th> <
        th scope = "col" > Phone < /th> <
        th scope = "col" > Birthday < /th> <
        th scope = "col" > Status < /th> <
        th scope = "col" > < /th> <
        /tr> <
        /thead> <
        tbody > {
            data.map((item) => ( <
                tr key = { item.id } >
                <
                td className = "d-md-table-cell" > { item.id } < /td> <
                td className = "d-md-table-cell" > { item.name } < /td> <
                td className = "d-md-table-cell" > { item.email } < /td> <
                td className = "d-md-table-cell" > { item.personalNumber } < /td> <
                td className = "d-md-table-cell" > { item.address } < /td> <
                td className = "d-md-table-cell" > { item.gender } < /td> <
                td >
                <
                img width = "75px"
                src = { `http://127.0.0.1:8000/seller_men/${item.PhotoOfPersonalID}` }
                alt = { item.name }
                /> <
                /td> <
                td className = "d-md-table-cell" > { item.phone } < /td> <
                td className = "d-md-table-cell" > { item.birthday } < /td> <
                td className = "d-md-table-cell" > { item.status } < /td> <
                td className = "d-md-table-cell" >
                <
                Link to = { `EditSeller/${item.id}` }
                className = "btn btn-link me-2" >
                <
                BsPencil size = { 20 }
                color = "#28a745" / >
                <
                /Link> <
                button className = "btn btn-link"
                onClick = {
                    () => handleDelete(item.id) } >
                <
                BsTrash size = { 20 }
                color = "#dc3545" / >
                <
                /button> <
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