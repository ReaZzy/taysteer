import React from "react";
import { Stats } from "../../profile/Stats";
import s from "./person.module.css"

export const Person:React.FC<{}> = () =>{
    return(
        <div className={s.row}>
            <b className={s.name} style={{marginLeft:"10px"}}>1</b>
            <img className={s.avatar} alt={"avatar"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Illuminati_triangle_eye.png/1200px-Illuminati_triangle_eye.png"}/>
            <span className={s.name}>Grereess Basreess Basreess Basreess Basreess Basreess Basess Basdq123</span>
            <Stats/>
            <button>→</button>
        </div>
    )
}