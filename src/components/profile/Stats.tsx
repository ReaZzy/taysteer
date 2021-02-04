import React from "react";
import s from "./profile.module.css";
import {BsStarFill, MdRestaurantMenu} from "react-icons/all";

export const Stats:React.FC<{}> = () => {
    return(
        <div className={s.starBox}>
                1500 <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                200  <MdRestaurantMenu className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
        </div>
    )
}