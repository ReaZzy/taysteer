import React from "react";
import s from "../EditProfile/editProfile.module.css";
import {useHistory} from "react-router-dom";

export const Back:React.FC<{}> = () => {

    const history = useHistory()
    const handleBack = () =>{
        history.goBack()
    }

    return(
        <div className={s.back} onClick={handleBack}>
            ← Back
        </div>
    )
}