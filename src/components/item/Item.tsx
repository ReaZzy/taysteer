import React from "react";
import s from "./Item.module.css"
import {BsFillBookmarkFill, FiClock} from "react-icons/all";

export const Item:React.FC<{}> = () => {
    return (
        <div className={s.card}>
             <div><img className={s.img} src={"https://pngimg.com/uploads/pizza/pizza_PNG44095.png"} alt={"recipe"}/></div>
            <div className={s.cardInfo}>
                <div className={s.title}>BaBaasBBaasBaasaasBaasas</div>
                <BsFillBookmarkFill className={s.saveSvg}/>
                {/*<BsFillBookmarkFill className={s.saveSvg} color="#FFC107"/>*/}
                <div className={s.time}><b>pizza 15-30</b><FiClock className={s.clockSvg}/></div>
                <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi
                    consequuntur deserunt dignissimos dolore doloribus eaque, maiores nam non quasi, ratione
                    suscipit vel, veniam voluptate? Dolorem ex libero voluptatem.</div>
                <button className={s.readMore}><b>Read more</b></button>
            </div>
        </div>
    )
}
