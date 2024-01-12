import React, { useState, useEffect } from 'react';
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const AddSection = ({ handleAddSection }) => {

        const navigate = useNavigate()


        const [name, setName] = useState('')

        const [errors, setErrors] = useState({});

        const validateForm = () => {
            const validationErrors = {};

            if (!name.trim()) {
                validationErrors.name = "Name is required";
            }

            setErrors(validationErrors);

            return Object.keys(validationErrors).length === 0;
        };


        const handleSubmit = async(e) => {
            e.preventDefault();
            const id = localStorage.getItem('id');


            const isFormValid = validateForm();

            if (!isFormValid) {
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append('name', name);

            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/SectionAdd/${id}`, formDataToSend);
                if (response.data.status === 401) {
                    console.log(response.data);
                    swal("warning", response.data.message, "warning")
                } else {
                    console.log(response.data);
                    swal("success", response.data.message, "success").then(() => {
                        navigate('/seller/Section/AddSectionToStore');
                    })
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
            h4 > Add Section <
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
            className = { `form-control  ${errors.name ? "is-invalid" : ""}` }
            name = "name"
            value = { name }
            onChange = {
                (e) => { setName(e.target.value) } }
            /> {
                errors.name && < div className = "invalid-feedback" > { errors.name } < /div>} <
                    /div>                <
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

        export default AddSection;