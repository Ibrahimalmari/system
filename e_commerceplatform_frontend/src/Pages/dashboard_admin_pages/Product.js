import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
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
        Product <
        Link to = "/Admin/Product/Add"
        className = 'btn btn-secondary float-end' > Add Product < /Link> <
        /h4> <
        /div> <
        div className = 'card-body' >
        <
        table class = "table table-striped table-hover" >
        <
        thead >
        <
        tr >
        <
        th scope = "col" > # < /th> <
        th scope = "col" > First < /th> <
        th scope = "col" > Last < /th> <
        th scope = "col" > Handle < /th> <
        /tr> <
        /thead> <
        tbody >
        <
        tr >
        <
        th scope = "row" > 1 < /th> <
        td > Mark < /td> <
        td > Otto < /td> <
        td > @mdo < /td> <
        /tr> <
        tr >
        <
        th scope = "row" > 2 < /th> <
        td > Jacob < /td> <
        td > Thornton < /td> <
        td > @fat < /td> <
        /tr> <
        tr >
        <
        th scope = "row" > 3 < /th> <
        td colspan = "2" > Larry the Bird < /td> <
        td > @twitter < /td> <
        /tr> <
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