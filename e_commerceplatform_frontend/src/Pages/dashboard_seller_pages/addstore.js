import React from 'react'

export default function addstore() {
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
        h4 > Add Store <
        /h4> <
        /div> <
        div className = 'card-body' >
        <
        form encType = 'multipart/form-data' >
        <
        div className = 'col-md-6 mb-3' >
        <
        label > Name < /label> <
        input type = "text"
        name = "name"
        className = "form-control" / >
        <
        /div> <
        div className = 'col-md-6 mb-3' >
        <
        label > Address < /label> <
        input type = "text"
        name = "address"
        className = "form-control" / >
        <
        /div> <
        div className = "row align-items-center mt-4" >
        <
        div className = 'col mb-3' >
        <
        label > PersonalNumber < /label> <
        input type = "text"
        name = "personalnumber"
        className = "form-control" / >
        <
        /div> <
        div className = ' col  mb-3' >
        <
        label > Type < /label> <
        input type = "text"
        name = "type"
        className = "form-control" / >
        <
        /div> <
        /div> <
        div className = "row align-items-center mt-4" >
        <
        div className = 'col  mb-3' >
        <
        label > Phone < /label> <
        input type = "text"
        name = "phone"
        className = "form-control" / >
        <
        /div> <
        div className = 'col  mb-3' >
        <
        label > Cover Photo < /label> <
        input type = "file"
        name = "image"
        className = "form-control" / >
        <
        /div>   <
        /div> <
        div class = "col form-check form-switch mt-3 ml-5 " >
        <
        input class = "form-check-input"
        type = "checkbox"
        id = "flexSwitchCheckDefault" / >
        <
        label class = "form-check-label "
        for = "flexSwitchCheckDefault" > Active / InActive < /label> <
        /div> <
        div className = 'col-md-12 mb-3' >
        <
        button type = "submit"
        className = "btn btn-secondary float-end" > Sava < /button> <
        /div> <
        /form> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> 
    )
}