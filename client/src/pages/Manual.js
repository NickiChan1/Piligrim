import React from "react";
import {NavLink} from "react-router-dom";
import {BMW_ROUTE, CLUB_ROUTE, MAIN_ROUTE, MOTOWIKI_ROUTE, NEWS_ROUTE} from "../path/PathConst";
import moto from "../components/media/img/moto.png";

export default function Manual(){
    return(
        <div>
            <div className="page__info"><span className="text-center page__pointer">Мануалы</span></div>
            <div className="container">
                <div className="container__navigation">
                    {/* Карточки навигации */}
                    <div className="card container__navigation_card" style={{width: "18rem"}}>
                        <img src={moto} alt="News"/>
                        <div className="card-body">
                            <NavLink to={NEWS_ROUTE} target="_blank" class="card-text">Honda</NavLink>
                            <div>
                                <span className="badge badge-primary badge-pill">14</span>
                            </div>
                        </div>
                    </div>

                    <div className="card container__navigation_card" style={{width: "18rem"}}>
                        <img src={moto} alt="News"/>
                        <div className="card-body">
                            <NavLink to={BMW_ROUTE} target="_blank" class="card-text">BMW</NavLink>
                            <div>
                                <span className="badge badge-primary badge-pill">8</span>
                            </div>
                        </div>
                    </div>

                    <div className="card container__navigation_card" style={{width: "18rem"}}>
                        <img src={moto} alt="News"/>
                        <div className="card-body">
                            <NavLink to={MAIN_ROUTE} target="_blank" class="card-text">Suzuki</NavLink>
                            <div>
                                <span className="badge badge-primary badge-pill">5</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container__navigation">
                    {/* Карточки навигации */}
                    <div className="card container__navigation_card" style={{width: "18rem"}}>
                        <img src={moto} alt="News"/>
                        <div className="card-body">
                            <NavLink to={MAIN_ROUTE} target="_blank" class="card-text">Harley-Davidson</NavLink>
                            <div>
                                <span className="badge badge-primary badge-pill">2</span>
                            </div>
                        </div>
                    </div>

                    <div className="card container__navigation_card" style={{width: "18rem"}}>
                        <img src={moto} alt="News"/>
                        <div className="card-body">
                            <NavLink to={MAIN_ROUTE} target="_blank" class="card-text">Kawasaki</NavLink>
                            <div>
                                <span className="badge badge-primary badge-pill">4</span>
                            </div>
                        </div>
                    </div>

                    <div className="card container__navigation_card" style={{width: "18rem"}}>
                        <img src={moto} alt="News"/>
                        <div className="card-body">
                            <NavLink to={MAIN_ROUTE} target="_blank" class="card-text">Ducati</NavLink>
                            <div>
                                <span className="badge badge-primary badge-pill">6</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <nav className="navbar  main__footer">
                <div className="main__footer_content">
                    <span>Copyright: 2021-2022</span>
                </div>
            </nav>
        </div>
    );
}