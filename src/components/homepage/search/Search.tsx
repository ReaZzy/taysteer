import React from "react";
import s from "./Search.module.css"
import searchSvg from "./../../../media/svg/img/search (1).svg"

export const Search:React.FC<{}> = () =>{
    return (
        <div>
            <img className={s.bcImg} src={"https://previews.123rf.com/images/tbralnina/tbralnina1812/tbralnina181200062/117179599-pepperoni-pizza-top-view-.jpg"} alt={""}/>
        <section className={s.filters}>
            <form className={s.form}>
                <div className={s.search}>
                    <object type="image/svg+xml" data={searchSvg} className={s.searchSvg}>Search</object>
                    <input/>
                </div>
                <select className={s.select} id="cars" name="cars">
                    <option value="">Category</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <select className={s.select} id="cars" name="cars">
                    <option value="">Category</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <select className={s.select} id="cars" name="cars">
                    <option value="">Category</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <select className={s.select} id="cars" name="cars">
                    <option value="">Category</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>

                <button className={s.submit} type={"submit"}>Search</button>
            </form>
        </section>
        </div>
    )
}