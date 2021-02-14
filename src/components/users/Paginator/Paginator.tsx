import React from "react";
import s from "../users.module.css";
import Pagination from "react-js-pagination";

export const Paginator:React.FC<{}> = () => {
    return(
        <Pagination
            activePage={1}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={()=>{console.log(1)}}
            hideFirstLastPages
            activeLinkClass={s.activeA}
            linkClass={s.pageA}
            itemClass={s.paginationItem}
            innerClass={s.pagination}
            activeClass={s.activeLi}
            nextPageText={"🠖"}
            prevPageText={"🠔"}
        />
    )
}