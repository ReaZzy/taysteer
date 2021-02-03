import React from "react";
import s from "./login.module.css"
import twitterSvg from "../../../media/svg/img/twitter.svg";
import facebookSvg from "../../../media/svg/img/facebook.svg";
import googleSvg from "../../../media/svg/img/search.svg";
import padlockSvg from "../../../media/svg/img/padlock.svg";
import userSvg from "../../../media/svg/img/user.svg";

const Login: React.FC<{}> = () => {
    return (
        <div className={s.content}>
            <div className={s.contentForm}>
                <div className={s.contentPadding}>
                    <div className={s.title}>Login</div>
                    <div className={s.form}>
                        <div className={s.userName}>
                            <label>Username</label>
                            <div className={s.inputForm}>
                                <object type="image/svg+xml" data={userSvg} className={s.searchSvg}>Login</object>
                                <input type={"text"}/>
                            </div>
                        </div>
                        <div className={s.password}>
                            <label>Password</label>
                            <div className={s.inputForm}>
                                <object type="image/svg+xml" data={padlockSvg} className={s.searchSvg}>Password</object>
                                <input type={"password"}/>
                            </div>
                        </div>
                        <div className={s.row}>
                            <div className={s.box}>
                                <label className="checkBox">
                                    <input type="checkbox"/>
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
                                    <object type="image/svg+xml" data={twitterSvg} className={s.socialItem}>Twitter</object>
                                    <object style={{marginLeft:"15px"}} type="image/svg+xml" data={facebookSvg} className={s.socialItem}>Facebook</object>
                                    <object style={{marginLeft:"15px"}} type="image/svg+xml" data={googleSvg} className={s.socialItem}>Google</object>
                                </div>
                            </div>

                        </div>
                        <div className={s.dontHave}>
                            Don`t have acoount? Signup now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login