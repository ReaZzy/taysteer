import React from "react"
import s from "./add.module.css";
import {Field} from "formik";
import {FaTrash} from "react-icons/all";

type IngredientType = {
    index:number
    remove:any
}
export const Ingredient:React.FC<IngredientType> =
    ({index, remove}) => {

    return(
        <div className={s.row}>
                <b>{index + 1}</b>
                <Field required className={s.input + " " + s.count} name={`ingredients.${index}.count`} component={"input"}
                       type={"text"}/>
                <Field required className={s.input + " " + s.item} name={`ingredients.${index}.item`} component={"input"}
                       type={"text"}/>

                <FaTrash onClick={() => {remove(index)}} className={s.plusSvg + " " + s.trashSvg}/>
        </div>

    )
}