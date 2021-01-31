import React from "react";
import s from "./Item.module.css"

export const Item:React.FC<{}> = () => {
    return (
        <div className={s.card}>
             <div><img className={s.img} src={"https://lh3.googleusercontent.com/proxy/_o25MtfLTupLQ83rbbIFMIXr8CfDDRbAa2e2_NeHcEIZkOm2MhTt5m_y33jDvvo0iA0QlQy8WljrSLRtaBBjH5iJJsdNLLXapr3dGuIluu_lDswRak0N4PI9PHT1cu31A7ebm8M"} alt={"recipe"}/></div>
            <div>
                <div className={s.title}>BaBaasBBaasBaasaasBaasas</div>
                <div className={s.time}><b>pizza 15-30pizza 15-30 ()pizza 15-30 ()pizza 15-30 ()pizza 15-30 () ()</b></div>
                <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi
                    consequuntur deserunt dignissimos dolore doloribus eaque, maiores nam non quasi, ratione
                    suscipit vel, veniam voluptate? Dolorem ex libero voluptatem.</div>
                <button className={s.readMore}>Read more</button>
            </div>
        </div>
    )
}
