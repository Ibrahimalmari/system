import React, { useState, useEffect } from 'react';
import axios from "axios";
import swal from "sweetalert";

const AddStore = ({ handleAddStore }) => {

        const [name, setName] = useState('')
        const [image, setImage] = useState([])
        const [phone, setPhone] = useState('')
        const [description, setDescription] = useState('')
        const [type, setType] = useState('')
        const [address, setAddress] = useState('')
        const [time, setTime] = useState('')
        const [personalNumber, setPersonalNumber] = useState('')
        const [seller_men, setSeller] = useState([]); ///جلب  المتاجر
        const [selectedseller, setSelectedSeller] = useState();


        useEffect(() => {
            axios.get("http://127.0.0.1:8000/api/seller").then(res => {
                if (res.data.status === 200) {
                    setSeller(res.data.seller)
                    console.log(res.data.seller)
                }
            })
        }, [])




        const [errors, setErrors] = useState({});

        const validateForm = () => {
            const validationErrors = {};

            if (!name.trim()) {
                validationErrors.name = "Name is required";
            }

            if (!address.trim()) {
                validationErrors.address = "Address is required";
            }

            if (!time.trim()) {
                validationErrors.time = "Open Time is required";
            }

            if (!type.trim()) {
                validationErrors.type = "Address is required";
            }

            if (!phone.trim()) {
                validationErrors.phone = "Phone is required";
            }

            if (!personalNumber.trim()) {
                validationErrors.personalNumber = "Phone is required";
            }
            if (!description.trim()) {
                validationErrors.description = "Description is required";
            }

            if (image.length === 0) {
                validationErrors.image = 'Please upload at least one image';
            }

            if (!selectedseller) {
                validationErrors.selectedseller = 'Please select a category';
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
            const id = localStorage.getItem('id');

            const isFormValid = validateForm();

            if (!isFormValid) {
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append('name', name);
            formDataToSend.append('address', address);
            formDataToSend.append('description', description);
            formDataToSend.append('personalNumber', personalNumber);
            formDataToSend.append('phone', phone);
            formDataToSend.append('type', type);
            formDataToSend.append('openTime', time);
            formDataToSend.append('seller_id', selectedseller);
            image.forEach((image) => {
                formDataToSend.append('image[]', image);
            });

            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/StoreAdd/${id}`, formDataToSend);
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
                h4 > Add Store < /h4>  <
                /div>  <
                div className = 'card-body' >
                <
                form onSubmit = { handleSubmit } >
                <
                div className = "row align-items-center mt-4" >
                <
                div className = 'col-md-6 mb-3' >
                <
                label > Name < /label> <
                input type = "text"
                name = "name"
                className = { `form-control  ${errors.name ? "is-invalid" : ""}` }
                value = { name }
                onChange = {
                    (e) => { setName(e.target.value) } }
                /> {
                    errors.name && < div className = "invalid-feedback" > { errors.name } < /div>} <
                        /div>

                    <
                    div className = 'col-md-6 mb-3' >
                        <
                        label > Address < /label>  <
                        input type = "text"
                    name = "address"
                    className = { `form-control  ${errors.address ? "is-invalid" : ""}` }
                    value = { address }
                    onChange = {
                        (e) => { setAddress(e.target.value) } }
                    /> {
                        errors.address && < div className = "invalid-feedback" > { errors.address } < /div>} <
                            /div>  <
                            /div> <
                            div className = "row align-items-center mt-4" >
                            <
                            div className = 'col-md-6 mb-3' >
                            <
                            label > PersonalNumber < /label>  <
                            input
                        type = "text"
                        className = { `form-control ${errors.personalNumber ? "is-invalid" : ""}  ` }
                        name = "personalNumber"
                        value = { personalNumber }
                        onChange = {
                            (e) => { setPersonalNumber(e.target.value) } }
                        /> {
                            errors.personalNumber &&
                                <
                                div className = "invalid-feedback" > { errors.personalNumber } <
                                /div>
                        } <
                        /div>  <
                        div className = 'col-md-6  mb-3' >
                            <
                            label > Type < /label>  <
                            input type = "text"
                        name = "type"
                        className = { `form-control ${errors.type ? "is-invalid" : ""}` }
                        value = { type }
                        onChange = {
                            (e) => { setType(e.target.value) } }
                        /> {
                            errors.type &&
                                <
                                div className = "invalid-feedback" > { errors.type } <
                                /div>
                        } <
                        /div>  <
                        /div>  <
                        div className = "row align-items-center mt-4" >
                            <
                            div className = 'col-md-6  mb-3' >
                            <
                            label > Phone: < /label> <
                            input
                        type = "text"
                        className = { `form-control ${errors.phone ? "is-invalid" : ""} ` }
                        name = "phone"
                        value = { phone }
                        onChange = {
                            (e) => { setPhone(e.target.value) } }
                        /> {
                            errors.phone &&
                                <
                                div className = "invalid-feedback" > { errors.phone } < /div>} <
                                /div>  <
                                div className = 'col-md-6  mb-3' >
                                <
                                label > Cover Photo < /label>  <
                                input type = "file"
                            name = "image"
                            className = { `form-control ${errors.image ? "is-invalid" : ""} ` }
                            onChange = { handleFileChange }
                            /> {
                                errors.image && < div className = "invalid-feedback" > { errors.image } < /div>}                  <
                                    /div>  <
                                    /div>  <
                                    div className = "row align-items-center mt-4" >
                                    <
                                    div className = "col-md-6 mb-3" >
                                    <
                                    label > Select Seller < /label> <
                                    select
                                className = { `form-control  ${errors.selectedseller ? "is-invalid" : ""}` }
                                name = "seller_id"
                                value = { selectedseller }
                                onChange = {
                                        (e) => { setSelectedSeller(e.target.value) } } >
                                    <
                                    option value = "" > Select Seller < /option> {
                                        seller_men.map((seller) => ( <
                                            option key = { seller.id }
                                            value = { seller.id } > { seller.name } <
                                            /option>
                                        ))
                                    } <
                                    /select> {
                                        errors.selectedseller && ( <
                                            div className = 'invalid-feedback' > { errors.selectedseller } <
                                            /div>
                                        )
                                    } <
                                    /div> <
                                    div className = 'col-md-6 mb-3' >
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
                                    /div>   <
                                    /div>  <
                                    div className = 'col  mb-3' >
                                        <
                                        label > Open Time: < /label> <
                                        input
                                    type = "time"
                                    className = { `form-control ${errors.time ? "is-invalid" : ""} ` }
                                    name = "openTime"
                                    value = { time }
                                    onChange = {
                                        (e) => { setTime(e.target.value) } }
                                    /> {
                                        errors.time &&
                                            <
                                            div className = "invalid-feedback" > { errors.time } < /div>} <
                                            /div>    {
                                                /* <div class = "col form-check form-switch mt-3 ml-5 " >
                                                                        <input class = "form-check-input"
                                                                        type = "checkbox"
                                                                        id = "flexSwitchCheckDefault"/>
                                                                        <label class = "form-check-label" for = "flexSwitchCheckDefault" > Active / InActive </label> 
                                                                        </div>  */
                                            } <
                                            div className = 'col-md-12 mb-3' >
                                            <
                                            button type = "submit"
                                        className = "btn btn-secondary float-end" > Sava < /button>  <
                                            /div>  <
                                            /form>  <
                                            /div>  <
                                            /div>  <
                                            /div>  <
                                            /div>  <
                                            /div> 
                                    )
                                }

                                export default AddStore;