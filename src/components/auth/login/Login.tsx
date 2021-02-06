import React from "react";
import s from "./login.module.css"
import {
    AiFillFacebook,
    AiFillGoogleCircle,
    AiFillTwitterCircle,
    FaUserAlt,
    RiLockPasswordFill,
} from "react-icons/all";
import {Field, Form, Formik} from "formik";

const Login: React.FC<{}> = () => {
    const handleSubmit = (data:any) =>{
        console.log(data)
    }
    return (
        <div className={s.content}>
            <div className={s.contentForm}>
                <div className={s.contentPadding}>
                    <Formik initialValues={{userName:"",password:"",rememberMe:""}} onSubmit={handleSubmit}>
                        <Form>
                            <div className={s.title}>Login</div>
                            <div className={s.form}>
                                <div className={s.userName}>
                                    <label>Username</label>
                                    <div className={s.inputForm}>
                                        <FaUserAlt className={s.searchSvg}/>
                                        <Field component={"input"} name={"userName"} type={"text"}/>
                                    </div>
                                </div>
                                <div className={s.password}>
                                    <label>Password</label>
                                    <div className={s.inputForm}>
                                        <RiLockPasswordFill className={s.searchSvg}/>
                                        <Field component={"input"} name={"password"} type={"password"}/>
                                    </div>
                                </div>
                                <div className={s.row}>
                                    <div className={s.box}>
                                        <label className="checkBox">
                                            <Field type="checkbox" name={"rememberMe"}/>
                                            <span className="checkmark"/>
                                        </label>
                                        <div>Remember me</div>
                                    </div>
                                    <div>Forget password?</div>
                                </div>
                                <button className={s.buttonLogin} type={"submit"}>Login</button>
                                <div>
                                    <div className={s.orLogin}>Or login with</div>
                                    <div className={s.socialWidth}>
                                        <div className={s.social}>
                                            <AiFillFacebook className={s.socialItem}/>
                                            <AiFillGoogleCircle style={{marginLeft:"15px"}} className={s.socialItem}/>
                                            <AiFillTwitterCircle style={{marginLeft:"15px"}} className={s.socialItem}/>
                                        </div>
                                    </div>

                                </div>
                                <div className={s.dontHave}>
                                    Don`t have acoount? Signup now
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login