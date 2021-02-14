import React from "react";
import s from "./add.module.css"
import {Field, FieldArray, Form, Formik} from "formik";
import {Step} from "./Step";
import {Ingredient} from "./Ingredient";
import {AiOutlinePlusCircle} from "react-icons/all";
import {Back} from "../Back/Back";

type formDataTypes = {
    title:string
    img: File
    note: string
    description:string
    steps: Array<{
        description?:string,
        title?:string,
        img?:File,
    }>
    ingredients:ingredientsType
}
export type ingredientsType = Array<{
    item?: string
    count?: string
}>

const Add: React.FC<{}> = () => {

    const handleSubmit = (data:any) => {
        const formData:formDataTypes = {
            title: data["title"],
            description: data["description"],
            img: data["img"],
            note: data["note"],
            steps:data["steps"],
            ingredients:data["ingredients"]
        }

        console.log(formData)
    }
    const initialValues = {
        img:undefined,
        title:"",
        description: "",
        note:"",
        steps:[],
        ingredients:[]
    }
    return (
        <div>
            <Back/>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, setFieldValue}) => (
                    <Form className={s.content}>
                            <div>
                                <Step index={-1} setFieldValue={setFieldValue}/>
                                <div className={s.info}>
                                    <div className={s.ingredients}>
                                        <label>Ingredients</label>
                                        <div>
                                            <FieldArray name={"ingredients"} render={arrayHelpers => (
                                                <div>
                                                    {values.ingredients?.map((ingredient:any, index:number) => {
                                                        return <Ingredient key={index} index={index} remove={arrayHelpers.remove}/>
                                                    })}
                                                    <AiOutlinePlusCircle className={s.plusSvg} onClick={()=>{arrayHelpers.push({count:"", item:""})}}/>
                                                </div>
                                            )}/>
                                        </div>
                                    </div>
                                    <div className={s.note}>
                                        <label>Note</label>
                                        <Field required className={s.input + " " + s.description} name={"note"} component={"textarea"} type={"text"}/>
                                    </div>
                                </div>
                                <div className={s.steps}>
                                    <b>Steps to make it</b>
                                    <div>
                                        <FieldArray name={"steps"} render={arrayHelpers  =>(
                                            <div>
                                                {values.steps?.map((step:any, index:number)=>{
                                                    return <Step setFieldValue={setFieldValue} key={index} index={index} remove={arrayHelpers.remove}/>
                                                })}
                                                <AiOutlinePlusCircle onClick={()=>{arrayHelpers.push({title:"",description:"", img: undefined})}} className={s.plusSvg}/>
                                            </div>
                                        )}/>
                                    </div>
                                </div>
                                <div className={s.buttons}>
                                    <button className={s.cancel}>Cancel</button>
                                    <button type={"submit"} className={s.save}>Save</button>
                                </div>
                            </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Add