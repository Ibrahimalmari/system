import React, { useState } from 'react';
const RegisterComponent = ({ handleRegister }) => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            address: '',
            gender: '',
            phone: '',
            image: '',
            birthday: '',
            personalNumber: '',
            password: '',
        });


        const [errors, setErrors] = useState({});

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleFileChange = (e) => {
            console.log(e.target.files[0])
            setFormData({
                ...formData,
                image: e.target.files[0],
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            submitFormData(formData);
            // Validation
            let validationErrors = {};
            if (!formData.name) {
                validationErrors.name = 'Name is required';
            }
            if (!formData.email) {
                validationErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                validationErrors.email = 'Email is invalid';
            }
            if (!formData.address) {
                validationErrors.address = 'Address is required';
            }
            if (!formData.gender) {
                validationErrors.gender = 'Gender is required';
            }
            if (!formData.phone) {
                validationErrors.phone = 'Phone number is required';
            } else if (!/^\d{10}$/.test(formData.phone)) {
                validationErrors.phone = 'Phone number is invalid';
            }
            if (!formData.image) {
                validationErrors.image = 'Identity photo is required';
            }
            if (!formData.birthday) {
                validationErrors.birthday = 'Birthday is required';
            }
            if (!formData.personalNumber) {
                validationErrors.personalNumber = 'Personal number is required';
            }
            if (!formData.password) {
                validationErrors.password = 'Password is required';
            } else if (formData.password.length < 6) {
                validationErrors.password = 'Password should be at least 6 characters';
            }

            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
            } else {
                // Call the handleRegister function and pass the form data
                handleRegister(formData);
            }
        };

        const submitFormData = async(formData) => {

            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('address', formData.address);
            formDataToSend.append('gender', formData.gender);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('personal_identity_photo', formData.image);
            formDataToSend.append('birthday', formData.birthday);
            formDataToSend.append('personalNumber', formData.personalNumber);
            formDataToSend.append('password', formData.password);

            try {
                const response = await fetch('http://127.0.0.1:8000/api/seller/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                console.log('Registration successful', data);
                // Handle success response here
            } catch (error) {
                console.error('Registration failed', error);
                // Handle error response here
            }

        };



        return ( <
                div className = 'container' >
                <
                form onSubmit = { handleSubmit }
                encType = 'multipart/form-data' >
                <
                h2 > Register < /h2> <
                div className = "form-group" >
                <
                label > Name: < /label> <
                input type = "text"
                className = { `form-control ${errors.name ? 'is-invalid' : ''}` }
                name = "name"
                value = { formData.name }
                onChange = { handleInputChange }
                /> {
                    errors.name && < div className = "invalid-feedback" > { errors.name } < /div>} <
                        /div> { /* Add similar structures for other form fields */ } { /* Email */ } <
                        div className = "form-group" >
                        <
                        label > Email: < /label> <
                        input
                    type = "email"
                    className = { `form-control ${errors.email ? 'is-invalid' : ''}` }
                    name = "email"
                    value = { formData.email }
                    onChange = { handleInputChange }
                    /> {
                        errors.email && < div className = "invalid-feedback" > { errors.email } < /div>} <
                            /div> { /* Address */ } <
                            div className = "form-group" >
                            <
                            label > Address: < /label> <
                            input
                        type = "text"
                        className = { `form-control ${errors.address ? 'is-invalid' : ''}` }
                        name = "address"
                        value = { formData.address }
                        onChange = { handleInputChange }
                        /> {
                            errors.address && < div className = "invalid-feedback" > { errors.address } < /div>} <
                                /div> { /* Gender */ } <
                                div className = "form-group" >
                                <
                                label > Gender: < /label> <
                                select
                            className = { `form-control ${errors.gender ? 'is-invalid' : ''}` }
                            name = "gender"
                            value = { formData.gender }
                            onChange = { handleInputChange } >
                                <
                                option value = "" > Select gender < /option> <
                                option value = "male" > Male < /option> <
                                option value = "female" > Female < /option> <
                                /select> {
                                    errors.gender && < div className = "invalid-feedback" > { errors.gender } < /div>} <
                                        /div> { /* Phone */ } <
                                        div className = "form-group" >
                                        <
                                        label > Phone: < /label> <
                                        input
                                    type = "text"
                                    className = { `form-control ${errors.phone ? 'is-invalid' : ''}` }
                                    name = "phone"
                                    value = { formData.phone }
                                    onChange = { handleInputChange }
                                    /> {
                                        errors.phone && < div className = "invalid-feedback" > { errors.phone } < /div>} <
                                            /div> { /* Identity Photo */ } <
                                            div className = "form-group" >
                                            <
                                            label > Identity Photo: < /label> <
                                            input
                                        type = "file"
                                        className = { `form-control-file ${errors.image	 ? 'is-invalid' : ''}` }
                                        accept = "image/*"
                                        name = "image"
                                        multiple
                                        onChange = { handleFileChange }
                                        /> {
                                            errors.image && < div className = "invalid-feedback" > { errors.image } < /div>} <
                                                /div> { /* Birthday */ } <
                                                div className = "form-group" >
                                                <
                                                label > Birthday: < /label> <
                                                input
                                            type = "date"
                                            className = { `form-control ${errors.birthday ? 'is-invalid' : ''}` }
                                            name = "birthday"
                                            value = { formData.birthday }
                                            onChange = { handleInputChange }
                                            /> {
                                                errors.birthday && < div className = "invalid-feedback" > { errors.birthday } < /div>} <
                                                    /div> { /* Personal Number */ } <
                                                    div className = "form-group" >
                                                    <
                                                    label > Personal Number: < /label> <
                                                    input
                                                type = "text"
                                                className = { `form-control ${errors.personalNumber ? 'is-invalid' : ''}` }
                                                name = "personalNumber"
                                                value = { formData.personalNumber }
                                                onChange = { handleInputChange }
                                                /> {
                                                    errors.personalNumber && < div className = "invalid-feedback" > { errors.personalNumber } < /div>} <
                                                        /div> { /* Password */ } <
                                                        div className = "form-group" >
                                                        <
                                                        label > Password: < /label> <
                                                        input
                                                    type = "password"
                                                    className = { `form-control ${errors.password ? 'is-invalid' : ''}` }
                                                    name = "password"
                                                    value = { formData.password }
                                                    onChange = { handleInputChange }
                                                    /> {
                                                        errors.password && < div className = "invalid-feedback" > { errors.password } < /div>} <
                                                            /div> { /* Submit Button */ } <
                                                            div className = "form-group" >
                                                            <
                                                            button type = "submit"
                                                        className = "btn btn-primary" >
                                                            Register <
                                                            /button> <
                                                            /div> <
                                                            /form> <
                                                            /div>
                                                    )
                                                }


                                                export default RegisterComponent;