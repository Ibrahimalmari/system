import React from 'react'

export default function addcategory() {
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
        h4 > Add Category <
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
        label > Slug < /label> <
        input type = "text"
        name = "slug"
        className = "form-control" / >
        <
        /div> <
        div className = 'col-md-12 mb-3' >
        <
        label > description < /label> <
        input type = "text"
        name = "description"
        className = "form-control" / >
        <
        /div> <
        div className = 'col-md-6 mb-3' >
        <
        label > image < /label> <
        input type = "file"
        name = "image"
        className = "form-control" / >
        <
        /div> <
        div class = "form-check form-switch" >
        <
        input class = "form-check-input"
        type = "checkbox"
        id = "flexSwitchCheckDefault" / >
        <
        label class = "form-check-label "
        for = "flexSwitchCheckDefault" > Active < /label> <
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