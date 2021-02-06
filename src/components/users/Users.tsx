import React from "react";
import {Person} from "../top/person/Person";
import s from "./users.module.css"
import {SearchInput} from "../homepage/search/SearchInput";
import {Form, Formik} from "formik";
import Pagination from "react-js-pagination";
const Users:React.FC<{}> = () => {
    const handleSubmit = (data:any) => {
        console.log(data)
    }
    return(
        <div className={s.content}>
            <div className={s.block}>
                <Formik onSubmit={handleSubmit} initialValues={{term:""}}>
                    <Form className={s.search}>
                        <SearchInput/>
                    </Form>
                </Formik>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Pagination
                    activePage={1}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={()=>{
                        console.log(1)}}
                    hideFirstLastPages
                    activeLinkClass={s.activeA}
                    linkClass={s.pageA}
                    itemClass={s.paginationItem}
                    innerClass={s.pagination}
                    activeClass={s.activeLi}
                    nextPageText={"🠖"}
                    prevPageText={"🠔"}
                />
            </div>
        </div>
    )
}

export default Users