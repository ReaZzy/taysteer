import React, {useState} from "react";
import s from "./editProfile.module.css"
import {Field, Form, Formik} from "formik";
import { useHistory } from "react-router-dom";
import {Back} from "../Back/Back";

const EditProfile: React.FC<{}> = () => {
    const [file, setFile] = useState()
    const handleChange = (e:any) =>{
        setFile(e.currentTarget.files[0])
        loadFile(e)
    }
    const handleSubmit = (data: any) => {
        console.log(data, file)
    }

    const loadFile = (e: any) => {
        const output: any = document.getElementById('output');
        output.src = URL.createObjectURL(e.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src)
        }
    };

    return (
        <div>
            <Back/>
            <Formik initialValues={{}} onSubmit={handleSubmit}>
                    <Form className={s.content}>

                        <div className={s.leftSide}>
                            <div className={s.imgWrap}>
                                <img
                                    id={"output"}
                                    src={"https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg"}
                                    alt={"avatar"} className={s.avatar + " noselect"}/>
                                <label className={s.input}>
                                    <input type={"file"} className={s.text} onChange={handleChange}/>
                                </label>
                            </div>
                        </div>

                        <div className={s.rightSide}>
                            <div className={s.title}>
                                <b>Edit profile</b>
                            </div>
                            <label>Name</label>
                            <Field name={"name"} component={"input"} type={"text"}/>
                            <label>Email</label>
                            <Field name={"email"} component={"input"} type={"email"}/>

                            <label>Description</label>
                            <Field name={"description"} component={"input"} type={"text"}/>
                            <div className={s.age}>
                                <label>Age</label>
                                <Field name={"age"} component={"input"} type={"number"}/>
                            </div>
                            <div>
                                <label>Sex</label>
                                <Field name={"sex"} value={"male"} component={"input"} type={"radio"}/>
                                <label>Male</label>
                                <Field name={"sex"} value={"female"} component={"input"} type={"radio"}/>
                                <label>Female</label>
                            </div>
                            <details className={s.details + " noselect"}>
                                <div className={s.password}>
                                    <label>Password</label>
                                    <Field name={"password"} component={"input"} type={"password"}/>
                                </div>
                                <div className={s.password}>
                                    <label>Repeat password</label>
                                    <Field name={"passwordRepeat"} component={"input"} type={"password"}/>
                                </div>
                                <summary>
                                    Change password
                                </summary>
                            </details>

                            <div className={s.buttons}>
                                <button className={s.cancel}>Cancel</button>
                                <button type={"submit"} className={s.save}>Save</button>
                            </div>
                        </div>
                    </Form>
            </Formik>
        </div>
    )
}

export default EditProfile