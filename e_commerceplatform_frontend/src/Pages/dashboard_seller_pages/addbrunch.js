import React, { useState, useEffect } from 'react';
import axios from "axios";
import swal from "sweetalert";

const AddBrunch = ({ handleAddBrunch }) => {

        const [name, setName] = useState('')
        const [image, setImage] = useState([]);
        const [categories, setCategory] = useState([]);
        const [selectedcategory, setSelectedCategory] = useState();

        const [errors, setErrors] = useState({});



        useEffect(() => {
            axios.get("http://127.0.0.1:8000/api/category").then(res => {
                if (res.data.status === 200) {
                    setCategory(res.data.category)
                    console.log(res.data.category)
                }
            })
        }, [])


        const validateForm = () => {
            const validationErrors = {};


            if (!name.trim()) {
                validationErrors.name = "name is required";
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
            formDataToSend.append('category_id', selectedcategory);
            image.forEach((image) => {
                formDataToSend.append('image[]', image);
            });


            try {
                const response = await axios.post('http://127.0.0.1:8000/api/BrunchAdd/', formDataToSend);
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
            h4 > Add Brunch <
            /h4> <
            /div> <
            div className = 'card-body' >
            <
            form onSubmit = { handleSubmit } >
            <
            div className = 'col-md-6 mb-3' >
            <
            label > Name < /label> <
            input type = "text"
            name = "name"
            value = { name }
            onChange = {
                (e) => { setName(e.target.value) } }
            className = { `form-control  ${errors.name ? "is-invalid" : ""}` }
            /> <
            /div> {
                errors.name && < div className = "invalid-feedback" > { errors.name } < /div>}

                <
                div className = 'col-md-6 mb-3' >
                    <
                    label > image < /label> <
                    input type = "file"
                name = "image[]"
                className = "form-control"
                onChange = { handleFileChange }
                /> <
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
                    /select>

                <
                /div> {
                    /* <div class="form-check form-switch mt-3 ml-5">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                            <label class="form-check-label " for="flexSwitchCheckDefault">Active</label>
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
        export default AddBrunch;