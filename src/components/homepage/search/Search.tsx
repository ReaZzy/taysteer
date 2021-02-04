import React from "react";
import s from "./Search.module.css"
import {SearchInput} from "./SearchInput";
import {Field, Form, Formik} from "formik";

export const Search:React.FC<{}> = () =>{
    const handleSubmit = (data:any) =>{
        console.log(data)
    }
    return (
        <div>
            <img className={s.bcImg+" noselect"} src={"https://previews.123rf.com/images/tbralnina/tbralnina1812/tbralnina181200062/117179599-pepperoni-pizza-top-view-.jpg"} alt={""}/>
            <section className={s.filters}>
                <Formik onSubmit={handleSubmit} initialValues={{term:""}}>
                    <Form className={s.form}>
                            <SearchInput/>
                            <Field
                                component="select"
                                id="location1"
                                name="location1"
                                className={s.select}
                            >
                                <option value="NY">New York</option>
                                <option value="SF">San Francisco</option>
                                <option value="CH">Chicago</option>
                                <option value="OTHER">Other</option>
                            </Field>
                            <Field
                                component="select"
                                id="location"
                                name="location"
                                className={s.select}
                            >
                                <option value="NY">New York</option>
                                <option value="SF">San Francisco</option>
                                <option value="CH">Chicago</option>
                                <option value="OTHER">Other</option>
                            </Field>
                            <Field
                                component="select"
                                id="location2"
                                name="location2"
                                className={s.select}
                            >
                                <option value="NY">New York</option>
                                <option value="SF">San Francisco</option>
                                <option value="CH">Chicago</option>
                                <option value="OTHER">Other</option>
                            </Field>
                            <button className={s.submit} type={"submit"}>Search</button>
                    </Form>
                </Formik>

            </section>
        </div>
    )
}