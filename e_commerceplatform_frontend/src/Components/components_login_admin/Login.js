import React, { useState } from 'react';
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import { BsEye, BsEyeSlash } from 'react-icons/bs';
const Login = ({ handleRegister }) => {

        const navigate = useNavigate()
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [errors, setErrors] = useState({});
        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

        const validateForm = () => {
            let errors = {};
            let formIsValid = true;

            if (!email) {
                formIsValid = false;
                errors['email'] = 'Email cannot be empty';
            }

            if (!password) {
                formIsValid = false;
                errors['password'] = 'Password cannot be empty';
            }

            setErrors(errors);
            return formIsValid;
        };



        const handleSubmit = async(e) => {
            e.preventDefault();
            if (validateForm()) {
                const formDataToSend = new FormData();
                formDataToSend.append('email', email);
                formDataToSend.append('password', password);



                try {
                    const response = await axios.post('http://127.0.0.1:8000/api/adminlogin/', formDataToSend);
                    if (response.data.status === 401) {
                        console.log(response.data);
                        swal("warning", response.data.message, "warning")
                    } else {
                        localStorage.setItem("name", response.data.user);
                        localStorage.setItem("role_auth", response.data.role);
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("id", response.data.id);
                        if (localStorage.getItem("role_auth") > 1) {

                            localStorage.removeItem("token");
                            localStorage.removeItem("role_auth");
                            swal("Unauthorized", response.data.message, "warning")
                            navigate('/Seller/Login');
                            return 0;
                        }
                        console.log(response.data);
                        swal("success", response.data.message, "success")
                        navigate('/admin');
                    }
                } catch (error) {
                    swal("error", error.message, "error")
                    console.error(error.message);

                }
            }
        };

        return ( <
                div id = "main-wrapper"
                className = "container py-5" >
                <
                div className = "row justify-content-center" >
                <
                div className = "col-xl-10" >
                <
                div className = "card border-0" >
                <
                div className = "card-body p-0" >
                <
                div className = "row no-gutters" >
                <
                div className = "col-lg-6" >
                <
                div className = "p-5" >
                <
                div className = "mb-5" >
                <
                h3 className = "h4 font-weight-bold text-theme" > Login < /h3> <
                /div> <
                h6 className = "h5 mb-0" > Welcome back! < /h6> <
                p className = "text-muted mt-2 mb-5" > Enter your email address and password to access admin panel. < /p> <
                form onSubmit = { handleSubmit } >
                <
                div className = "form-group" >
                <
                label htmlFor = "exampleInputEmail1" > Email address < /label> <
                div className = "input-group" >
                <
                input type = "email"
                className = { `form-control ${errors.email ? 'is-invalid' : ''}` }
                id = "exampleInputEmail1"
                value = { email }
                onChange = {
                    (e) => setEmail(e.target.value) }
                /> {
                    errors.email && < div className = 'invalid-feedback' > { errors.email } < /div>} <
                        /div> <
                        /div> <
                        div className = "form-group mb-5" >
                        <
                        label htmlFor = "exampleInputPassword1" > Password < /label> <
                        div className = "input-group" >
                        <
                        input
                    type = { showPassword ? 'text' : 'password' }
                    className = { `form-control ${errors.password ? 'is-invalid' : ''}` }
                    id = "exampleInputPassword1"
                    value = { password }
                    onChange = {
                        (e) => setPassword(e.target.value) }
                    /> {
                        errors.password && < div className = 'invalid-feedback' > { errors.password } < /div>} <
                            div className = "input-group-append" >
                            <
                            button
                        className = "btn btn-outline-secondary"
                        type = "button"
                        onClick = { togglePasswordVisibility } >
                            { showPassword ? < BsEyeSlash / > : < BsEye / > } <
                            /button> <
                            /div> <
                            /div> <
                            /div> <
                            button type = "submit"
                        className = "btn btn-theme" > Login < /button> <
                            a href = "#l"
                        className = "forgot-link float-right text-primary" > Forgot password ? < /a> <
                            /form> <
                            /div> <
                            /div> <
                            div className = "col-lg-6 d-none d-lg-inline-block" >
                            <
                            div className = "account-block rounded-right" > < /div> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /div>
                    )
                }
                export default Login;