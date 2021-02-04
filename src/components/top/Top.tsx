import React from "react";
/*import {Person} from "./person/Person";*/
import s from "./top.module.css"
import {Person} from "./person/Person";
import {TopThree} from "./TopThree";
import {Link, NavLink} from "react-router-dom";
const Top:React.FC<{}> = () => {
    return(
        <div className={s.content}>
            <div className={s.parent}>
                <div className={s.nav}>
                    <NavLink exact to={"/top"} activeClassName={s.active}>
                    <div className={s.navItem}>All time</div>
                    </NavLink>
                    <NavLink to={"/top/today"} activeClassName={s.active}>
                        <div className={s.navItem}>Today</div>
                    </NavLink>
                    <NavLink to={"/top/week"} activeClassName={s.active}>
                     <div className={s.navItem}>This week</div>
                    </NavLink>
                    <NavLink to={"/top/month"} activeClassName={s.active}>
                        <div className={s.navItem}>This month</div>
                    </NavLink>
                </div>
            </div>
            <div className={s.block}>
                <TopThree size="20vh" color="#B2B2B2"/>
                <TopThree size="25vh" color="#FFC107"/>
                <TopThree size="15vh" color="#CD7F32"/>
            </div>
            <Person/>
            <Person/>
            <Person/>
            <Link to={"/top/users/"} className={s.viewMore}><div>View more</div></Link>
        </div>
    )
}

export default Top