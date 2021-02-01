import React from "react";
import s from "./Item.module.css"
import clockSvg from "../../media/svg/img/clock.svg";
import saveSvg from "../../media/svg/img/bookmark.svg";
//import saveSvgActive from "../../media/svg/img/bookmarkActive.svg";

export const Item:React.FC<{}> = () => {
    return (
        <div className={s.card}>
             <div><img className={s.img} src={"https://pngimg.com/uploads/pizza/pizza_PNG44095.png"} alt={"recipe"}/></div>
            <div>
                <div className={s.title}>BaBaasBBaasBaasaasBaasas</div>
                <object type="image/svg+xml" data={saveSvg} className={s.saveSvg}>Save</object>
                {/*<object type="image/svg+xml" data={saveSvgActive} className={s.saveSvg}>Save</object>*/}
                <div className={s.time}><b>pizza 15-30</b><object type="image/svg+xml" data={clockSvg} className={s.clockSvg}>Clock</object></div>
                <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi
                    consequuntur deserunt dignissimos dolore doloribus eaque, maiores nam non quasi, ratione
                    suscipit vel, veniam voluptate? Dolorem ex libero voluptatem.</div>
                <button className={s.readMore}><b>Read more</b></button>
            </div>
        </div>
    )
}
