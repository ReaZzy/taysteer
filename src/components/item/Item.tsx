import React from "react";
import s from "./Item.module.css"

export const Item:React.FC<{}> = () => {
    return (
        <div className={s.card}>
             <div><img className={s.img} src={"https://previews.123rf.com/images/tbralnina/tbralnina1812/tbralnina181200062/117179599-pepperoni-pizza-top-view-.jpg"} alt={"recipe"}/></div>
            <div>
                <div className={s.title}>Baas</div>
                <div className={s.time}><b>pizza 15-30 ()</b></div>
                <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi
                    consequuntur deserunt dignissimos dolore doloribus eaque, maiores nam non quasi, ratione
                    suscipit vel, veniam voluptate? Dolorem ex libero voluptatem.</div>
                <button className={s.readMore}>Read more</button>
            </div>
        </div>
    )
}
