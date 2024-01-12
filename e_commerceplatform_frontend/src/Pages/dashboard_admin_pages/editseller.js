import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const EditSeller = () => {
        const { id } = useParams();


        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [address, setAddress] = useState('');
        const [gender, setGender] = useState('');
        const [birthday, setBirthday] = useState('');
        const [phone, setPhone] = useState('');
        const [personalNumber, setPersonalNumber] = useState('');
        const [jobs, setJobs] = useState([]);
        const [selectedJob, setSelectedJob] = useState('');
        const [image, setImage] = useState(null);
        const [data, setData] = useState({});
        const [errors, setErrors] = useState({});

        useEffect(() => {
            const fetchData = async() => {
                try {
                    const [rolesResponse, sellerResponse] = await Promise.all([
                        axios.get('http://127.0.0.1:8000/api/role'),
                        axios.get(`http://127.0.0.1:8000/api/seller/${id}`),
                    ]);

                    if (rolesResponse.data.status === 200) {
                        setJobs(rolesResponse.data.roles);
                    }

                    if (sellerResponse.data.status === 200) {
                        const sellerData = sellerResponse.data.seller;
                        setData(sellerData);
                        setName(sellerData.name || '');
                        setEmail(sellerData.email || '');
                        setAddress(sellerData.address || '');
                        setGender(sellerData.gender || '');
                        setImage(sellerData.image || '');
                        setBirthday(sellerData.birthday || '');
                        setPhone(sellerData.phone || '');
                        setPersonalNumber(sellerData.personalNumber || '');
                        setSelectedJob(sellerData.role_id || '');
                    }
                } catch (error) {
                    console.error(error);
                }
            };

            fetchData();
        }, [id]);

        const validateForm = () => {
            const validationErrors = {};

            if (!name.trim()) {
                validationErrors.name = 'Name is required';
            }

            if (!email.trim()) {
                validationErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                validationErrors.email = 'Email address is invalid';
            }

            if (!address.trim()) {
                validationErrors.address = 'Address is required';
            }

            if (!gender) {
                validationErrors.gender = 'Gender is required';
            }

            if (!birthday) {
                validationErrors.birthday = 'Birthday is required';
            }

            if (!phone.trim()) {
                validationErrors.phone = 'Phone is required';
            }

            if (!selectedJob) {
                validationErrors.selectedJob = 'Please select a role';
            }

            if (!personalNumber.trim()) {
                validationErrors.personalNumber = 'Personal Number is required';
            }

            setErrors(validationErrors);

            return Object.keys(validationErrors).length === 0;
        };

        const handleFileChange = (e) => {
            const selectedFiles = e.target.files;
            setImage([...selectedFiles]);
        };

        const handleSubmit = async(e) => {
            e.preventDefault();

            const isFormValid = validateForm();

            if (!isFormValid) {
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append('_method', 'PUT');
            formDataToSend.append('name', name);
            console.log(name);
            formDataToSend.append('email', email);
            formDataToSend.append('address', address);
            formDataToSend.append('gender', gender);
            formDataToSend.append('phone', phone);

            if (image) {
                image.forEach((file) => {
                    formDataToSend.append('image[]', file);
                    console.log(file);
                });
            }
            formDataToSend.append('birthday', birthday);
            formDataToSend.append('personalNumber', personalNumber);
            formDataToSend.append('role_id', selectedJob);

            try {
                const response = await axios.post(
                    `http://127.0.0.1:8000/api/updateseller/${id}`,
                    formDataToSend);

                if (response.data.status === 401) {
                    console.log(response.data);
                    swal('warning', response.data.message, 'warning');
                } else {
                    console.log(response.data);
                    swal('success', response.data.message, 'success');
                    // navigate('/seller/Dashboard');
                }
            } catch (error) {
                console.error(error.message);
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
                h4 >
                Edit Seller <
                /h4> <
                /div> <
                div className = 'card-body' >
                <
                form onSubmit = { handleSubmit }
                encType = "multipart/form-data" >
                <
                div className = "row align-items-center" >
                <
                div className = "form-group" >
                <
                label > Name: < /label> <
                input type = "text"
                className = { `form-control ${errors.name ? "is-invalid" : ""}` }
                name = "name"
                value = { name }
                onChange = {
                    (e) => { setName(e.target.value) } }
                /> {
                    errors.name && < div className = "invalid-feedback" > { errors.name } < /div>} <
                        /div> <
                        /div> <
                        div className = "row align-items-center mt-4" > { /* Email */ } <
                        div className = "col" >
                        <
                        label > Email: < /label> <
                        input
                    type = "email"
                    className = { `form-control ${errors.email ? "is-invalid" : ""}` }
                    name = "email"
                    value = { email }
                    onChange = {
                        (e) => { setEmail(e.target.value) } }
                    /> {
                        errors.email && < div className = "invalid-feedback" > { errors.email } < /div>} <
                            /div> <
                            /div> <
                            br / > { /* Identity Photo */ } <
                            div className = "form-group" >
                            <
                            label > Identity Photo: < /label> <
                            input
                        type = "file"
                        name = "image[]"
                        className = { `form-control-file ` }
                        onChange = { handleFileChange }
                        multiple
                            /
                            >
                            <
                            /div> <
                            div className = "row align-items-center mt-4" > { /* Address */ } <
                            div className = "col" >
                            <
                            label > Address: < /label> <
                            input
                        type = "text"
                        className = { `form-control ${errors.address ? "is-invalid" : ""}` }
                        name = "address"
                        value = { address }
                        onChange = {
                            (e) => { setAddress(e.target.value) } }
                        /> {
                            errors.address && < div className = "invalid-feedback" > { errors.address } < /div>} <
                                /div> { /* Gender */ } <
                                div className = "col" >
                                <
                                label > Gender: < /label> <
                                select
                            className = { `form-control ${errors.gender ? "is-invalid" : ""}` }
                            name = "gender"
                            value = { gender }
                            onChange = {
                                    (e) => { setGender(e.target.value) } } >
                                <
                                option value = "" > Select gender < /option> <
                                option value = "male" > Male < /option> <
                                option value = "female" > Female < /option> <
                                /select> {
                                    errors.gender && < div className = "invalid-feedback" > { errors.gender } < /div>} <
                                        /div> <
                                        /div> <
                                        div className = "row align-items-center mt-4" > { /* role */ } <
                                        div className = "col" >
                                        <
                                        label > role: < /label> <
                                        select
                                    className = { `form-control  ${errors.selectedJob ? "is-invalid" : ""}` }
                                    name = "role_id"
                                    value = { selectedJob }
                                    onChange = {
                                            (e) => { setSelectedJob(e.target.value) } } >
                                        <
                                        option value = "" > Select role < /option> {
                                            jobs.map((job) => ( <
                                                option key = { job.id }
                                                value = { job.id } > { job.name } <
                                                /option>
                                            ))
                                        } <
                                        /select> {
                                            errors.selectedJob && ( <
                                                div className = 'invalid-feedback' > { errors.selectedJob } <
                                                /div>
                                            )
                                        } <
                                        /div> { /* Phone */ } <
                                        div className = "col" >
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
                                        errors.phone && < div className = "invalid-feedback" > { errors.phone } < /div>} <
                                            /div> <
                                            /div> <
                                            div className = "row align-items-center mt-4" > { /* Birthday */ } <
                                            div className = "col" >
                                            <
                                            label > Birthday: < /label> <
                                            input
                                        type = "date"
                                        className = { `form-control ${errors.birthday ? "is-invalid" : ""} ` }
                                        name = "birthday"
                                        value = { birthday }
                                        onChange = {
                                            (e) => { setBirthday(e.target.value) } }
                                        /> {
                                            errors.birthday && < div className = "invalid-feedback" > { errors.birthday } < /div>} <
                                                /div> { /* Personal Number */ } <
                                                div className = "col" >
                                                <
                                                label > Personal Number: < /label> <
                                                input
                                            type = "text"
                                            className = { `form-control ${errors.personalNumber ? "is-invalid" : ""}  ` }
                                            name = "personalNumber"
                                            value = { personalNumber }
                                            onChange = {
                                                (e) => { setPersonalNumber(e.target.value) } }
                                            /> {
                                                errors.personalNumber && < div className = "invalid-feedback" > { errors.personalNumber } < /div>} <
                                                    /div> <
                                                    /div> <
                                                    br / > { /* Submit Button */ } <
                                                    div className = "form-group" >
                                                    <
                                                    button type = "submit"
                                                className = "btn btn-secondary" >
                                                    Update <
                                                    /button> <
                                                    /div> <
                                                    /form> <
                                                    /div> <
                                                    /div> <
                                                    /div>   <
                                                    /div> <
                                                    /div>
                                            )
                                        }


                                        export default EditSeller;