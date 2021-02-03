import React from "react";
import s from "./topThree.module.css";
import {Stats} from "../profile/Stats";

export const TopThree:React.FC<{size:string, color:string}> = ({size, color}) => {
    return(
        <div className={s.Top}>
            <img className={s.avatar} alt={"avatar"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Illuminati_triangle_eye.png/1200px-Illuminati_triangle_eye.png"}/>
            <div className={s.TOp} style={{height: `${size}`, backgroundColor:`${color}`}}>
                <div className={s.info}>
                    <div className={s.name}>FedorNaama</div>
                    <Stats/>
                    <button>→</button>
                </div>
            </div>
        </div>
    )
}