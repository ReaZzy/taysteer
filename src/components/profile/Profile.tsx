import s from "./profile.module.css"
import React from "react";
import { Item } from "../item/Item";

const Profile:React.FC<{}> = () => {
    return (
        <div>
            <div className={s.back}>← Back</div>
            <div className={s.content}>
                <div className={s.info}>
                    <div className={s.name}>
                        <div>Fedor Greedann</div>
                        <div> Top 100 (_)</div>
                    </div>
                    <div>42 y.o.</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur eum ipsa laboriosam numquam praesentium quaerat quam, quidem rem ullam. Cum facere illo laudantium magni maiores, sequi sit soluta tenetur?</p>
                    <div className={s.imgCover}>
                        <img className={s.avatar} alt={"avatar"} src={"https://htn.com.au/wp-content/uploads/2018/02/PP18-DIPLOMA-IN-PROFESSIONAL-CHEF.jpg"}/>
                    </div>

                    <div>
                        <div>
                            1500
                        </div>
                        <div>
                            200
                        </div>
                    </div>
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