import React from "react";
import s from "./Search.module.css";
import {AiOutlineSearch} from "react-icons/all";
import {Field} from "formik";

export const SearchInput:React.FC<{}> = () => {
    return(
        <div className={s.search}>
            <Field component={"input"} id={"term"} type={"search"} name={"term"}/>
            <button className={s.button} type={"submit"}><AiOutlineSearch className={s.searchSvg}/></button>
        </div>
    )
}
