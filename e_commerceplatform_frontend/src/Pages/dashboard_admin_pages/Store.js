import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../dashboard_seller_pages/store.css";
import { BsPencil, BsTrash } from 'react-icons/bs';


export default function Store() {

    const [data, setData] = useState([
        []
    ]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/store/`);
                setData(response.data.store);
                console.log(response.data.store);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);


    return ( <
        div className = 'main-container' >
        <
        div className = "restaurant-list" > {
            data.map(item => ( <
                div key = { item.id }
                className = "restaurant-card" >
                <
                div className = "restaurant-cover" >
                <
                img src = { `http://127.0.0.1:8000/stores/${item.coverPhoto}` }
                alt = { item.name }
                className = "cover-image" / >
                <
                /div> <
                div className = "restaurant-info" >
                <
                h4 className = "restaurant-name" > { item.name } < /h4> <
                hr style = {
                    { width: "50%" } }
                /> <
                p className = "restaurant-address" > { item.description } < /p> <
                p className = "restaurant-hours" > Seller: { item.seller ? item.seller.name : 'N/A' } < /p> <
                div className = "actions" >
                <
                Link to = { `EditSeller/${item.id}` }
                className = "btn btn-link me-2" >
                <
                BsPencil size = { 20 }
                color = "#28a745" / >
                <
                /Link> <
                button className = "btn btn-link" >
                <
                BsTrash size = { 20 }
                color = "#dc3545" / >
                <
                /button> <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div>
    )
}