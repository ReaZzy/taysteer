import React from "react";
import {Search} from "./search/Search";
import {Item} from "../item/Item";
import s from "./homepage.module.css"
export const Homepage:React.FC<{}> = () => {
    return (
        <div className={s.content}>
            <Search/>
            <aside className={s.cards}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </aside>
        </div>
    )
}