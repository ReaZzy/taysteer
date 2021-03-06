import s from "./profile.module.css"
import React from "react";
import { Item } from "../item/Item";
import { Stats } from "./Stats";
import {BsBookmarkFill, FaTrophy} from "react-icons/all";
import {Link} from "react-router-dom";
import {Back} from "../Back/Back";

const Profile:React.FC<{}> = () => {
    return (
        <div>
            <Back/>
            <div className={s.content}>
                <div className={s.info}>
                    <div className={s.name}>
                        <div className={s.nickName}><b>Fedor GreeFedor</b></div>
                        <div className={s.top}> Top 10<FaTrophy className={s.cupSvg} color={"#FFC107"}/></div>
                    </div>
                    <div className={s.top+" " +s.age}>32y.o.</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus ad alias aspernatur culpa ducimus eum
                        illum obcaecati porro quos reiciendis! A beatae dolor expedita itaque molestias omnis placeat veritatis vero?</p>

                    <img className={s.avatar+" noselect"} alt={"avatar"} src={"https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg"}/>
                    <Stats/>
                    <div className={s.settings}>
                        <Link  to={"/featured"}><button><BsBookmarkFill/></button></Link>
                        <Link to={"/edit"}><button>Edit profile</button></Link>
                    </div>
                </div>

                <div className={s.best}>
                        <b className={s.bestTitle}>Best recipes</b>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                </div>
            </div>
        </div>
    )
}

export default Profile