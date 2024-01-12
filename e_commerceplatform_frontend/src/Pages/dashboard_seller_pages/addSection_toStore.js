import React, { useState, useEffect } from 'react';
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const AddSection_toStore = ({ handleAddSection_toStore }) => {

    const navigate = useNavigate()


    const [sections, setSection] = useState([]); ///جلب القيم الاقسام
    const [selectedsection, setSelectedSection] = useState();

    const [stores, setStore] = useState([]); ///جلب  المتاجر
    const [selectedstore, setSelectedStore] = useState();


    useEffect(() => {
        Promise.all([
                axios.get("http://127.0.0.1:8000/api/section"),
                axios.get("http://127.0.0.1:8000/api/store"),

            ])
            .then(([sectionRes, storeRes]) => {
                if (sectionRes.data.status === 200) {
                    setSection(sectionRes.data.section);
                }
                if (storeRes.data.status === 200) {
                    setStore(storeRes.data.store);
                }

            })
            .catch((error) => {
                console.error(error);
                // يمكنك إضافة التعامل مع الأخطاء هنا
            });
    }, []);

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const validationErrors = {};

        if (!selectedstore) {
            validationErrors.selectedstore = 'Please select a store';
        }
        if (!selectedsection) {
            validationErrors.selectedsection = 'Please select a section';
        }



        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };


    const handleSubmit = async(e) => {
        e.preventDefault();


        const isFormValid = validateForm();

        if (!isFormValid) {
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('section_id', selectedsection);
        formDataToSend.append('store_id', selectedstore);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/SectionAddToStore/', formDataToSend);
            if (response.data.status === 401) {
                console.log(response.data);
                swal("warning", response.data.message, "warning")
            } else {
                console.log(response.data);
                swal("success", response.data.message, "success").then(() => {
                    navigate('/seller/Section/');
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
        h4 > Add Section To Store <
        /h4> <
        /div> <
        div className = 'card-body' >
        <
        form onSubmit = { handleSubmit } >
        <
        div className = "col-md-6 mb-3" >
        <
        label > Select Store < /label> <
        select className = { `form-control  ${errors.selectedstore ? "is-invalid" : ""}` }
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
        /select> {
            errors.selectedstore && ( <
                div className = 'invalid-feedback' > { errors.selectedstore } <
                /div>
            )
        } <
        /div>       <
        div className = "col-md-6 mb-3" >
        <
        label > Select Section < /label> <
        select className = { `form-control  ${errors.selectedsection ? "is-invalid" : ""}` }
        name = "section_id"
        value = { selectedsection }
        onChange = {
            (e) => { setSelectedSection(e.target.value) } } >
        <
        option value = "" > Select Section < /option> {
            sections.map((section) => ( <
                option key = { section.id }
                value = { section.id } > { section.name } <
                /option>
            ))
        } <
        /select> {
            errors.selectedsection && ( <
                div className = 'invalid-feedback' > { errors.selectedsection } <
                /div>
            )
        } <
        /div>     <
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

export default AddSection_toStore;