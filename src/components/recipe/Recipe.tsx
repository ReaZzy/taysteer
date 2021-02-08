import React from "react";
import s from "./recipe.module.css"
import {BsStarFill, FaRegStar, FiClock, ImReply} from "react-icons/all";

const Recipe: React.FC<{}> = () => {
    return (
        <div>
            <div className={s.top}>
                <div className={s.img}>
                    <img className={s.bcImg + " noselect"}
                         src={"https://previews.123rf.com/images/tbralnina/tbralnina1812/tbralnina181200062/117179599-pepperoni-pizza-top-view-.jpg"}
                         alt={""}/>'
                </div>
                <div className={s.topInfo}>
                    <div className={s.back}>← Back</div>
                    <div className={s.title}><b>Papperoni</b>
                        <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                        <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                        <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                        <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                    </div>

                    <div className={s.rowInfo}>
                        <div className={s.author}><b>Author:</b> LoreLoremDePa r</div>
                        <div className={s.time}><b>pizza 15-30</b><FiClock className={s.clockSvg}/></div>
                    </div>
                    <p className={s.description}>LoreLorem Lorem Ipsum is simply dummy text of the printinreLorem Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry.reLorem Lorem Ipsum is
                        simply dummy text of the printing and typesetting industry.reLorem Lorem Ipsum ireLorem Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry.reLorem Lorem Ipsum is
                        simply dummy text of the printing and typesetting industry.reLorem Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.s simply dummy text of the printing and
                        typesetting industry.g and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text evLorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text evm Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
            <div className={s.info}>
                <div className={s.ingredients}>
                    <b>Ingredients</b>
                    <ul className={s.list}>
                        <li>7 pounds pork butt</li>
                        <li>3 pounds beef chuck</li>
                        <li>5 tablespoons salt</li>
                        <li>1 tablespoon sugar</li>
                        <li>2 tablespoons cayenne pepper</li>
                        <li>3 tablespoons paprika</li>
                    </ul>
                </div>
                <div className={s.note}>
                    <b>Note</b>
                    <p>While there are multiple steps to this recipe, this dish is broken down into workable caWhile
                        there are multiple steps to this recipe, this dish is broken down into workable categories to
                        help you better plan for preparation and cooWhile there are multiple steps to this recipe, this
                        dish is broken down into workable categories to help you better plan for preparation and
                        cooWhile there are multiple steps to this recipe, this dish is broken down into workable
                        categories to help you better plan for preparation and cooWhile there are multiple steps to this
                        recipe, this dish is broken down into workable categories to help you better plan for
                        preparation and cooWhile there are multiple steps to this recipe, this dish is broken down into
                        workable categories to help you better plan for preparation and cootegories to help you better
                        plan for preparation and cooking.</p>
                </div>
            </div>
            <div className={s.steps}>
                <b className={s.stepTitle}>Steps to make it</b>
                <div className={s.stepsItems}>
                    <div className={s.stepItem}>
                        <div className={s.stepInfo}>
                            <img
                                src={"https://media1.s-nbcnews.com/i/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.jpg"}
                                alt={"stepImage"}/>

                            <div className={s.stepInfoMain}>
                                <b className={s.stepName}>Step 1</b>
                                <p className={s.descriptionStep}>Lorem ipsum dolor sit amet, coLorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Beatae culpa, deleniti ducimus explicabo
                                    ipsLorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa, deleniti
                                    ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae culpa, deleniti ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Beatae culpa, deleniti ducimus explicabo ipsLorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Beatae culpa, deleniti ducimus explicabo
                                    ipsLorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa, deleniti
                                    ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae culpa, deleniti ducimus explicabo ipsnsectetur adipisicing elit. Beatae
                                    culpa, deleniti ducimus explicabo ipsam iure labore, necessitatibus nemo nostrum
                                    officiis quaerat repellendus tempora totam. Cupiditate error ex ullam velit
                                    voluptatem!</p>

                            </div>
                        </div>
                    </div>
                    <div className={s.stepItem}>
                        <div className={s.stepInfo}>
                            <img
                                src={"https://media1.s-nbcnews.com/i/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.jpg"}
                                alt={"stepImage"}/>
                            <div className={s.stepInfoMain}>
                                <b className={s.stepName}>Step 1</b>
                                <p className={s.descriptionStep}>Lorem ipsum dolor sit amet, coLorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Beatae culpa, deleniti ducimus explicabo
                                    ipsLorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa, deleniti
                                    ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae culpa, deleniti ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Beatae culpa, deleniti ducimus explicabo ipsLorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Beatae culpa, deleniti ducimus explicabo
                                    ipsLorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa, deleniti
                                    ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae culpa, deleniti ducimus explicabo ipsnsectetur adipisicing elit. Beatae
                                    culpa, deleniti ducimus explicabo ipsam iure labore, necessitatibus nemo nostrum
                                    officiis quaerat repellendus tempora totam. Cupiditate error ex ullam velit
                                    voluptatem!</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.stepItem}>
                        <div className={s.stepInfo}>
                            <img
                                src={"https://media1.s-nbcnews.com/i/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.jpg"}
                                alt={"stepImage"}/>

                            <div className={s.stepInfoMain}>
                                <b className={s.stepName}>Step 1</b>
                                <p className={s.descriptionStep}>Lorem ipsum dolor sit amet, coLorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Beatae culpa, deleniti ducimus explicabo
                                    ipsLorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa, deleniti
                                    ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae culpa, deleniti ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Beatae culpa, deleniti ducimus explicabo ipsLorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Beatae culpa, deleniti ducimus explicabo
                                    ipsLorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa, deleniti
                                    ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae culpa, deleniti ducimus explicabo ipsnsectetur adipisicing elit. Beatae
                                    culpa, deleniti ducimus explicabo ipsam iure labore, necessitatibus nemo nostrum
                                    officiis quaerat repellendus tempora totam. Cupiditate error ex ullam velit
                                    voluptatem!</p>

                            </div>
                        </div>
                    </div>
                    <div className={s.stepItem}>
                        <div className={s.stepInfo}>
                            <img
                                src={"https://media1.s-nbcnews.com/i/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.jpg"}
                                alt={"stepImage"}/>
                            <div className={s.stepInfoMain}>
                                <b className={s.stepName}>Step 1</b>
                                <p className={s.descriptionStep}>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                                    coLorem ipsum dolor sit amet, consectetur adipisicing elit. BeataeLorem ipsum dolor
                                    sit amet, coLorem ipsum dolor sit amet, consectetur adipisicing elit. BeataeLorem
                                    ipsum dolor sit amet, coLorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    BeataeLorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. BeataecoLorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae culpa, deleniti ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Beatae culpa, deleniti ducimus explicabo ipsLorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Beatae culpa, deleniti ducimus explicabo
                                    ipsLorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa, deleniti
                                    ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae culpa, deleniti ducimus explicabo ipsLorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Beatae culpa, deleniti ducimus explicabo ipsLorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Beatae culpa, deleniti ducimus explicabo
                                    ipsnsectetur adipisicing elit. Beatae culpa, deleniti ducimus explicabo ipsam iure
                                    labore, necessitatibus nemo nostrum officiis quaerat repellendus tempora totam.
                                    Cupiditate error ex ullam velit voluptatem!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.rate}><b>Rate this recipe</b>
                <FaRegStar className={s.starSvgOutline} color={"#FFC107"}/>
                <FaRegStar className={s.starSvgOutline} color={"#FFC107"}/>
                <FaRegStar className={s.starSvgOutline} color={"#FFC107"}/>
                <FaRegStar className={s.starSvgOutline} color={"#FFC107"}/>
                <FaRegStar className={s.starSvgOutline} color={"#FFC107"}/>
            </div>
            <div className={s.comments}>
                <div className={s.commentForm}>
                    <img className={s.commentImg}
                         src={"https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"} alt={"avatar"}/>
                    <textarea/>
                    <button>Send</button>
                </div>
                <div className={s.commentList}>
                    <div className={s.comment}>
                        <img className={s.commentImg}
                             src={"https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"} alt={"avatar"}/>
                        <div className={s.commentBox}>
                            <div className={s.commentName}>
                                <div className={s.stars}>
                                    <b className={s.boxName}>Maxim Nebela 123</b>
                                    <div>
                                        <BsStarFill className={s.starSvg} color={"#ffc107"}/>
                                        <BsStarFill className={s.starSvg} color={"#FFC107"}/>
                                        <BsStarFill className={s.starSvg} color={"#FFC107"}/>
                                        <BsStarFill className={s.starSvg} color={"#FFC107"}/>
                                        <BsStarFill className={s.starSvg} color={"#FFC107"}/>
                                    </div>
                                </div>
                                <div className={s.commentDate}>
                                    11.04.15 22:15
                                </div>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa
                                debitis dolore dolorum enim esse et facere hic ipsa, iste iure maiores pariatur quidem
                                repellat repellendus. DolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                beatae blanditiis culpa debitis dolLorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ad beatae blanditiis culpa debitis dolLorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ad beatae blanditiis culpa debitis dolLorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Ad beatae blanditiis culpa debitis dolLorem ipsum dolor
                                sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa debitis dolLorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa debitis
                                dolLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa
                                debitis dolLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
                                blanditiis culpa debitis dolLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                beatae blanditiis culpa debitis dole, quas.
                            </div>
                        </div>
                        <div>
                            <ImReply className={s.replySvg+ " "+ s.stepInfoMain}/>
                        </div>
                    </div>
                    <div className={s.comment}>
                        <img className={s.commentImg}
                             src={"https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"} alt={"avatar"}/>
                        <div className={s.commentBox}>
                            <div className={s.commentName}>
                                <div className={s.stars}>
                                    <b className={s.boxName}>Maxim Nebela 123</b>
                                    <div>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    </div>
                                </div>
                                <div className={s.commentDate}>
                                    11.04.15 22:15
                                </div>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa
                                debitis dolore dolorum enim esse et facere hic ipsa, iste iure maiores pariatur quidem
                                repellat repellendus. DolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                beatae blanditiis culpa debitis dolLorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ad beatae blanditiis culpa debitis dolLorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ad beatae blanditiis culpa debitis dolLorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Ad beatae blanditiis culpa debitis dolLorem ipsum dolor
                                sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa debitis dolLorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa debitis
                                dolLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa
                                debitis dolLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
                                blanditiis culpa debitis dolLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                beatae blanditiis culpa debitis dole, quas.
                            </div>
                        </div>
                        <div>
                            <ImReply className={s.replySvg+ " "+ s.stepInfoMain}/>
                        </div>
                    </div>
                    <div className={s.comment + " " + s.reply}>
                        <img className={s.commentImg}
                             src={"https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"} alt={"avatar"}/>
                        <div className={s.commentBox}>
                            <div className={s.commentName}>
                                <div className={s.stars}>
                                    <b className={s.boxName}>Maxim Nebela 123</b>
                                    <div>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    </div>
                                </div>
                                <div className={s.commentDate}>
                                    11.04.15 22:15
                                </div>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa
                                debitis dolore dolorum enim esse et facere hic ipsa, iste iure maiores pariatur quidem
                                repellat repellendus. DolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                beatae blanditiis culpa debitis dolLorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ad beatae blanditiis culpa debitis dolLorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ad beatae blanditiis culpa debitis dolLorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Ad beatae blanditiis culpa debitis dolLorem ipsum dolor
                                sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa debitis dolLorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa debitis
                                dolLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis culpa
                                debitis dolLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
                                blanditiis culpa debitis dolLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                beatae blanditiis culpa debitis dole, quas.
                            </div>
                        </div>
                    </div>
                    <div className={s.comment}>
                        <img className={s.commentImg}
                             src={"https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"} alt={"avatar"}/>
                        <div className={s.commentBox}>
                            <div className={s.commentName}>
                                <div className={s.stars}>
                                    <b className={s.boxName}>Maxim Nebela 123</b>
                                    <div>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    <BsStarFill className={s.starBoxSvg + " " + s.starSvg} color={"#FFC107"}/>
                                    </div>
                                </div>
                                <div className={s.commentDate}>
                                    11.04.15 22:15
                                </div>
                            </div>
                            <div>Lorem ipsum
                            </div>
                        </div>
                        <div>
                            <ImReply className={s.replySvg+ " "+ s.stepInfoMain}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe