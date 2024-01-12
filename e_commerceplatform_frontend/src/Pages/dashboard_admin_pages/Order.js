import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Order() {


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {

            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/order/`);
                setData(response.data.order);
                console.log(response.data.order);
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
        h4 >
        Order <
        /h4> <
        /div> <
        div className = 'card-body' >
        <
        table className = "table table-striped table-hover" >
        <
        thead >
        <
        tr >
        <
        th scope = "col" > Id < /th> <
        th scope = "col" > name < /th> <
        th scope = "col" > email < /th> <
        th scope = "col" > personalNumber < /th> <
        th scope = "col" > address < /th> <
        th scope = "col" > gender < /th> <
        th scope = "col" > PhotoOfPersonalID < /th> <
        th scope = "col" > phone < /th> <
        th scope = "col" > birthday < /th> <
        th scope = "col" > status < /th> <
        th scope = "col" > action < /th> <
        /tr> <
        /thead> <
        tbody className = 'center' > {
            data.map((item) => ( <
                tr key = { item.id } >
                <
                td > { item.id } < /td>  <
                td > { item.name } < /td>  <
                td > { item.email } < /td>  <
                td > { item.personalNumber } < /td>  <
                td > { item.address } < /td>  <
                td > { item.gender } < /td>   <
                td >
                <
                img width = "75px"
                src = { `http://127.0.0.1:8000/seller/${item.PhotoOfPersonalID}` }
                alt = { item.name }
                /> <
                /td>  <
                td > { item.phone } < /td>  <
                td > { item.birthday } < /td>  <
                td > { item.status } < /td>  <
                td >
                <
                Link to = { `edit-seller/${item.id}` }
                className = "btn btn-success btn-sm" > Edit < /Link> <
                Link to = { `edit-seller/${item.id}` }
                className = "btn btn-danger btn-sm" > Delete < /Link> <
                /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div> <
        /div> <
        /div>

        <
        /div> <
        /div> 
    )
}