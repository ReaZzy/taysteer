import React from "react";
import s from "./Item.module.css"
import {BsBookmark, FiClock} from "react-icons/all";
import { useHistory } from "react-router-dom";

export const Item:React.FC<{}> = () => {
    const history = useHistory()
    const handleClick = (id:number) =>{
        history.push(`/recipe/${id}`)
    }

    return (
        <div className={s.card} onClick={()=>{handleClick(1)}}>
             <div><img className={s.img} src={"https://pngimg.com/uploads/pizza/pizza_PNG44095.png"} alt={"recipe"}/></div>
            <div className={s.cardInfo}>
                <div className={s.topInfo}>
                    <div className={s.title}>BaBaasBBaasBaasaasBaasas</div>
                    <div><BsBookmark className={s.saveSvg}/></div>
                </div>
                {/*<BsFillBookmarkFill className={s.saveSvg} color="#FFC107"/>*/}
                <div className={s.rowInfo}>
                    <div className={s.author}><b>Author:</b> LoreLoremDePa r</div>
                    <div className={s.time}><b>pizza 15-30</b><FiClock className={s.clockSvg}/></div>
                </div>
                <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi
                    consequuntur deserunt dignissimos dolore doloribus eaque, maiores nam non quasi, ratione
                    suscipit vel, veniam voluptate? Dolorem ex libero voluptatem.</div>
            </div>
        </div>
    )
}
