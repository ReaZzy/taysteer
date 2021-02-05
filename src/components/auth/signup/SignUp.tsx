import React from "react";
import {Field, Form, Formik} from "formik";
import s from "../login/login.module.css";
import {
    AiFillFacebook,
    AiFillGoogleCircle,
    AiFillTwitterCircle,
    FaUserAlt,
    MdEmail,
    RiLockPasswordFill
} from "react-icons/all";

const SignUp:React.FC<{}> = () => {
    const  handleSubmit = (data:any) => {
        console.log(data)
    }

    return(
        <div className={s.content}>
            <div className={s.contentForm}>
                <div className={s.contentPadding}>
                    <Formik initialValues={{userName:"",password:"", email:"", passwordRepeat:""}} onSubmit={handleSubmit}>
                        <Form>
                            <div className={s.title}>Sign up</div>
                            <div className={s.form}>
                                <div className={s.userName}>
                                    <label>Username</label>
                                    <div className={s.inputForm}>
                                        <FaUserAlt className={s.searchSvg}/>
                                        <Field component={"input"} name={"userName"} type={"text"}/>
                                    </div>
                                </div>
                                <div className={s.password}>
                                    <label>Email</label>
                                    <div className={s.inputForm}>
                                        <MdEmail className={s.searchSvg}/>
                                        <Field component={"input"} name={"email"} type={"email"}/>
                                    </div>
                                </div>
                                <div className={s.password}>
                                    <label>Password</label>
                                    <div className={s.inputForm}>
                                        <RiLockPasswordFill className={s.searchSvg}/>
                                        <Field component={"input"} name={"password"} type={"password"}/>
                                    </div>
                                </div>
                                <div className={s.password}>
                                    <label>Repeat your password</label>
                                    <div className={s.inputForm}>
                                        <RiLockPasswordFill className={s.searchSvg}/>
                                        <Field component={"input"} name={"passwordRepeat"} type={"password"}/>
                                    </div>
                                </div>
                                <button className={s.buttonLogin} type={"submit"}>Login</button>
                                <div>
                                    <div className={s.orLogin}>Or sign up with</div>
                                    <div className={s.socialWidth}>
                                        <div className={s.social}>
                                            <AiFillFacebook className={s.socialItem}/>
                                            <AiFillGoogleCircle style={{marginLeft:"15px"}} className={s.socialItem}/>
                                            <AiFillTwitterCircle style={{marginLeft:"15px"}} className={s.socialItem}/>
                                        </div>
                                    </div>

                                </div>
                                <div className={s.dontHave}>
                                    Already a member? Login
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default SignUp