import React from "react";
import s from "./profile.module.css";
import stars from "../../media/svg/img/star.svg";
import cloche from "../../media/svg/img/crystal-cloche.svg";

export const Stats:React.FC<{}> = () => {
    return(
        <div className={s.starBox}>
            <div>
                1500 <object type="image/svg+xml" data={stars} className={s.starBoxSvg + " " + s.starSvg}>Star</object>
            </div>
            <div>
                200 <object type="image/svg+xml" data={cloche} className={s.starBoxSvg+ " " + s.clocheSvg}>Cloche</object>
            </div>
        </div>
    )
}