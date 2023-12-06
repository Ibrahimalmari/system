import React, { useState } from 'react';
import axios from "axios";
const RegisterComponent = ({ handleRegister }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGenger] = useState('')
    const [birthday, setBirthday] = useState('')
    const [phone, setPhone] = useState('')
    const [personalNumber, setPersonalNumber] = useState('')
    const [password, setPassword] = useState('')

    const [image, setImage] = useState('')

    // const [formData, setFormData] = useState({
    //   name: '',
    //   email: '',
    //   address: '',
    //   gender: '',
    //   phone: '',
    //   birthday: '',
    //   personalNumber: '',
    //   password: '',
    // });





    const handleFileChange = (e) => {
            console.log(e.target.files[0])
            setImage(e.target.files[0]);
        }
        // const handleFileChange = (e) => {
        //   console.log(e.target.files[0])
        //   setFormData({
        //     ...formData,
        //     image:e.target.files[0],
        //   });
        // };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', name);
        formDataToSend.append('email', email);
        formDataToSend.append('address', address);
        formDataToSend.append('gender', gender);
        formDataToSend.append('phone', phone);
        formDataToSend.append('image', image);
        formDataToSend.append('birthday', birthday);
        formDataToSend.append('personalNumber', personalNumber);
        formDataToSend.append('password', password);


        await axios.post('http://127.0.0.1:8000/api/seller/', formDataToSend).then(({ data }) => {
            console.log(data.message)
        }).catch(({ response }) => {
            if (response.status === 442) {
                console.log(response.data.error)
            } else {
                console.log(response.data.message)
            }
        })



        // try {
        //         const response = await fetch('http://127.0.0.1:8000/api/seller/',{
        //           method: 'POST',
        //           headers: {
        //             'Content-Type': 'application/json',
        //           },
        //         });

        //         const data = await response.json();
        //         console.log('Registration successful', data);
        //         // Handle success response here
        //       } catch (error) {
        //         console.error('Registration failed', error);
        //         // Handle error response here
        //       }

    };



    return ( <
        div className = 'container' >
        <
        form onSubmit = { handleSubmit } >
        <
        h2 > Register < /h2> <
        div className = "form-group" >
        <
        label > Name: < /label> <
        input type = "text"
        className = { `form-control` }
        name = "name"
        value = { name }
        onChange = {
            (e) => { setName(e.target.value) } }
        /> <
        /div> { /* Add similar structures for other form fields */ } { /* Email */ } <
        div className = "form-group" >
        <
        label > Email: < /label> <
        input type = "email"
        className = { `form-control` }
        name = "email"
        value = { email }
        onChange = {
            (e) => { setEmail(e.target.value) } }
        /> <
        /div> { /* Address */ } <
        div className = "form-group" >
        <
        label > Address: < /label> <
        input type = "text"
        className = { `form-control ` }
        name = "address"
        value = { address }
        onChange = {
            (e) => { setAddress(e.target.value) } }
        /> <
        /div> { /* Gender */ } <
        div className = "form-group" >
        <
        label > Gender: < /label> <
        select className = { `form-control` }
        name = "gender"
        value = { gender }
        onChange = {
            (e) => { setGenger(e.target.value) } } >
        <
        option value = "" > Select gender < /option> <
        option value = "male" > Male < /option> <
        option value = "female" > Female < /option> <
        /select> <
        /div> { /* Phone */ } <
        div className = "form-group" >
        <
        label > Phone: < /label> <
        input type = "text"
        className = { `form-control ` }
        name = "phone"
        value = { phone }
        onChange = {
            (e) => { setPhone(e.target.value) } }
        /> <
        /div> { /* Identity Photo */ } <
        div className = "form-group" >
        <
        label > Identity Photo: < /label> <
        input type = "file"
        name = "image"
        className = { `form-control-file ` }
        onChange = { handleFileChange }
        /> <
        /div> { /* Birthday */ } <
        div className = "form-group" >
        <
        label > Birthday: < /label> <
        input type = "date"
        className = { `form-control ` }
        name = "birthday"
        value = { birthday }
        onChange = {
            (e) => { setBirthday(e.target.value) } }
        /> <
        /div> { /* Personal Number */ } <
        div className = "form-group" >
        <
        label > Personal Number: < /label> <
        input type = "text"
        className = { `form-control ` }
        name = "personalNumber"
        value = { personalNumber }
        onChange = {
            (e) => { setPersonalNumber(e.target.value) } }
        /> <
        /div> { /* Password */ } <
        div className = "form-group" >
        <
        label > Password: < /label> <
        input type = "password"
        className = { `form-control ` }
        name = "password"
        value = { password }
        onChange = {
            (e) => { setPassword(e.target.value) } }
        /> <
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