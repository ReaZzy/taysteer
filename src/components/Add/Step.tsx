import React from "react";
import s from "./add.module.css";
import {Field} from "formik";
import {FaTrash} from "react-icons/all";
import { v1 as uuidv1 } from 'uuid';

type StepType = {
    index:number
    remove?:any
    setFieldValue?:any
}

export const Step:React.FC<StepType> = ({index, remove,  setFieldValue}) => {
    const imgId = uuidv1()
    const handleChange = (e:any) => {
        setFieldValue(index===-1? "img": `steps.${index}.img`, e.currentTarget.files[0]);
        loadFile(e)
    }
    const loadFile = (e: any) => {
        const output: any = document.getElementById(`output${imgId}`);
        output.src = URL.createObjectURL(e.target?.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src)
        }
    }

    return(
        <div className={s.topInfo}>
            <div className={s.topLeftSide}>
                <label>Title</label>
                <Field required className={s.input} name={index===-1? "title": `steps.${index}.title`} component={"input"} type={"text"}/>
                <label>Description</label>
                <Field  className={s.input + " " + s.description} name={index===-1? "description": `steps.${index}.description`} component={"textarea"}
                       type={"text"}/>
            </div>
            <div className={s.topRightSide}>
                <div className={s.imgWrap}>
                    <img
                        id={`output${imgId}`}
                        src={""}
                        alt={"Upload photo"} className={s.avatar + " noselect"}/>
                    <label className={s.fileInput}>
                        <input type={"file"} name={index===-1? "img": `steps.${index}.img`}
                                onChange={handleChange}
                        />
                    </label>
                </div>
            </div>
            {index >= 0 && <FaTrash onClick={() => {remove(index)}} className={s.plusSvg + " " + s.trashSvg}/>}
        </div>
    )
}