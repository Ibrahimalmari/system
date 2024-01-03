import React, { useState, useEffect } from 'react';
import axios from "axios";
import swal from "sweetalert";
//  import {useNavigate} from "react-router-dom";

const AddProduct = ({ handleAddProduct }) => {


        const [name, setName] = useState('')
        const [image, setImage] = useState([]);
        const [description, setDescription] = useState('')
        const [price, setPrice] = useState('')
        const [quantity, setQuantity] = useState('')
        const [categories, setCategory] = useState([]); ///جلب القيم الفئات
        const [selectedcategory, setSelectedCategory] = useState();

        const [stores, setStore] = useState([]); ///جلب  المتاجر
        const [selectedstore, setSelectedStore] = useState();

        const [brunches, setBrunch] = useState([]); ///جلب   افرع الفئات
        const [selectedbrunch, setSelectedBrunch] = useState();


        //   useEffect(() => {
        //     axios.get("http://127.0.0.1:8000/api/category").then(res =>{
        //        if(res.data.status === 200 ){
        //         setCategory(res.data.category)
        //        console.log(res.data.category)
        //        }
        //     })
        //  }, [])

        //  useEffect(() => {
        //     axios.get("http://127.0.0.1:8000/api/brunch").then(res =>{
        //        if(res.data.status === 200 ){
        //         setBrunch(res.data.brunch)
        //        console.log(res.data.brunch)
        //        }
        //     })
        //  }, [])


        //  useEffect(() => {
        //     axios.get("http://127.0.0.1:8000/api/store").then(res =>{
        //        if(res.data.status === 200 ){
        //         setStore(res.data.store)
        //        console.log(res.data.store)
        //        }
        //     })
        //  }, [])




        const [errors, setErrors] = useState({});

        const validateForm = () => {
            const validationErrors = {};

            if (!image) {
                validationErrors.image = "Image is required";
            }

            if (!quantity.trim()) {
                validationErrors.quantity = "Quantity is required";
            }

            if (!price.trim()) {
                validationErrors.price = "Price is required";
            }

            if (!name.trim()) {
                validationErrors.name = "Name is required";
            }

            if (!description.trim()) {
                validationErrors.description = "Description is required";
            }



            setErrors(validationErrors);

            return Object.keys(validationErrors).length === 0;
        };



        const handleFileChange = (e) => {
            const selectedFiles = e.target.files;
            setImage([...image, ...selectedFiles]);
        }


        const handleSubmit = async(e) => {
            e.preventDefault();


            const isFormValid = validateForm();

            if (!isFormValid) {
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append('name', name);
            formDataToSend.append('description', description);
            formDataToSend.append('price', price);
            formDataToSend.append('quantity', quantity);
            formDataToSend.append('category_id', selectedcategory);
            formDataToSend.append('brunch_id', selectedbrunch);
            formDataToSend.append('store_id', selectedstore);
            image.forEach((image) => {
                formDataToSend.append('image[]', image);
            });

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/ProductAdd/', formDataToSend);
                if (response.data.status === 401) {
                    console.log(response.data);
                    swal("warning", response.data.message, "warning")
                } else {
                    console.log(response.data);
                    swal("success", response.data.message, "success")
                        //  navigate('seller/Category/');
                }
            } catch (error) {
                console.error(error.message);
                swal("error", error.message, "error")
            }
        };



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
                h4 > Add Product <
                /h4> <
                /div> <
                div className = 'card-body' >
                <
                form onSubmit = { handleSubmit }
                encType = 'multipart/form-data' >
                <
                div className = "row align-items-center mt-4" >
                <
                div className = 'col  mb-3' >
                <
                label > Name < /label> <
                input type = "text"
                className = { `form-control  ${errors.name ? "is-invalid" : ""}` }
                name = "name"
                value = { name }
                onChange = {
                    (e) => { setName(e.target.value) } }
                /> {
                    errors.name && < div className = "invalid-feedback" > { errors.name } < /div>}

                    <
                    /div> <
                    div className = 'col  mb-3' >
                        <
                        label > Description < /label> <
                        input type = "text"
                    name = "description"
                    className = { `form-control  ${errors.description ? "is-invalid" : ""}` }
                    value = { description }
                    onChange = {
                        (e) => { setDescription(e.target.value) } }
                    /> {
                        errors.description && < div className = "invalid-feedback" > { errors.description } < /div>}

                        <
                        /div> <
                        /div> <
                        div className = "row align-items-center mt-4" >
                            <
                            div className = 'col  mb-3' >
                            <
                            label > Price < /label> <
                            input type = "text"
                        name = "price"
                        className = { `form-control  ${errors.price ? "is-invalid" : ""}` }
                        value = { price }
                        onChange = {
                            (e) => { setPrice(e.target.value) } }
                        /> {
                            errors.price && < div className = "invalid-feedback" > { errors.price } < /div>} <
                                /div> <
                                div className = 'col  mb-3' >
                                <
                                label > Image < /label> <
                                input type = "file"
                            name = "image"
                            className = "form-control"
                            onChange = { handleFileChange }
                            /> <
                            /div>   <
                            /div> <
                            div className = "row align-items-center mt-4" >
                                <
                                div className = 'col  mb-3' >
                                <
                                label > Quantity < /label> <
                                input type = "number"
                            name = "quantity"
                            className = { `form-control  ${errors.quantity ? "is-invalid" : ""}` }
                            value = { quantity }
                            onChange = {
                                (e) => { setQuantity(e.target.value) } }
                            /> {
                                errors.quantity && < div className = "invalid-feedback" > { errors.quantity } < /div>} <
                                    /div> <
                                    div className = "col-md-6 mb-3" >
                                    <
                                    label > Select Category < /label> <
                                    select
                                className = "form-control"
                                name = "category_id"
                                value = { selectedcategory }
                                onChange = {
                                        (e) => { setSelectedCategory(e.target.value) } } >
                                    <
                                    option value = "" > Select Category < /option> {
                                        categories.map((category) => ( <
                                            option key = { category.id }
                                            value = { category.id } > { category.name } <
                                            /option>
                                        ))
                                    } <
                                    /select> <
                                    /div> <
                                    /div> <
                                    div className = "row align-items-center mt-4" >
                                    <
                                    div className = "col-md-6 mb-3" >
                                    <
                                    label > Select Brunch < /label> <
                                    select
                                className = "form-control"
                                name = "category_id"
                                value = { selectedbrunch }
                                onChange = {
                                        (e) => { setSelectedBrunch(e.target.value) } } >
                                    <
                                    option value = "" > Select Brunch < /option> {
                                        brunches.map((brunch) => ( <
                                            option key = { brunch.id }
                                            value = { brunch.id } > { brunch.name } <
                                            /option>
                                        ))
                                    } <
                                    /select> <
                                    /div> <
                                    div className = "col-md-6 mb-3" >
                                    <
                                    label > Select Store < /label> <
                                    select
                                className = "form-control"
                                name = "category_id"
                                value = { selectedstore }
                                onChange = {
                                        (e) => { setSelectedStore(e.target.value) } } >
                                    <
                                    option value = "" > Select Store < /option> {
                                        stores.map((store) => ( <
                                            option key = { store.id }
                                            value = { store.id } > { store.name } <
                                            /option>
                                        ))
                                    } <
                                    /select> <
                                    /div> <
                                    /div> {
                                        /* <div class="col form-check form-switch mt-3 ml-5 ">
                                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                                                <label class="form-check-label " for="flexSwitchCheckDefault">Active /InAcive</label>
                                                            </div> */
                                    } <
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

                        export default AddProduct;