import s from "./profile.module.css"
import React from "react";
import { Item } from "../item/Item";
import cupSvg from "../../media/svg/img/trophy.svg";
import { Stats } from "./Stats";

const Profile:React.FC<{}> = () => {
    return (
        <div>
            <div className={s.back}>← Back</div>
            <div className={s.content}>
                <div className={s.info}>
                    <div className={s.name}>
                        <div className={s.nickName}><b>Fedor GreeFedor</b></div>
                        <div className={s.top}> Top 10<object type="image/svg+xml" data={cupSvg} className={s.cupSvg}>Cup</object></div>
                    </div>
                    <div className={s.top+" " +s.age}>32y.o.</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus ad alias aspernatur culpa ducimus eum
                        illum obcaecati porro quos reiciendis! A beatae dolor expedita itaque molestias omnis placeat veritatis vero?</p>

                    <img className={s.avatar} alt={"avatar"} src={"https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg"}/>
                    <Stats/>
                </div>

                <div className={s.best}>
                    <div className={s.bestTitle}><b>Best recipes</b></div>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        </div>
    )
}

export default Profile