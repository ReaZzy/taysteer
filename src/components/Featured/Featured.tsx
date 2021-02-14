import React from "react";
import s from "./featured.module.css"
import {Item} from "../item/Item";
import {Paginator} from "../users/Paginator/Paginator";
import {Back} from "../Back/Back";

const Featured: React.FC<{}> = () => {
    return (
        <div>
            <Back/>
            <div className={s.title}>Featured</div>
            <div className={s.items}>
                <div className={s.item}>
                    <Item/>
                </div><div className={s.item}>
                    <Item/>
                </div><div className={s.item}>
                    <Item/>
                </div>
            </div>
            <Paginator/>
        </div>
    )
}

export default Featured