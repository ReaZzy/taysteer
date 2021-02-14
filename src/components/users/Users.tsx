import React from "react";
import {Person} from "../top/person/Person";
import s from "./users.module.css"
import {SearchInput} from "../homepage/search/SearchInput";
import {Form, Formik} from "formik";
import {Paginator} from "./Paginator/Paginator";
const Users:React.FC<{}> = () => {
    const handleSubmit = (data:any) => {
        console.log(data)
    }
    return(
        <div className={s.content}>
            <div className={s.block}>
                <Formik onSubmit={handleSubmit} initialValues={{term:""}}>
                    <Form className={s.search}>
                        <SearchInput/>
                    </Form>
                </Formik>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Paginator/>
            </div>
        </div>
    )
}

export default Users