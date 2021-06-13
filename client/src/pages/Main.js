import React from "react";
import { NavLink } from "react-router-dom";
import {MOTOWIKI_ROUTE, NEWS_ROUTE, MANUAL_ROUTE, CLUB_ROUTE, MEDIA_ROUTE, RULES_ROUTE} from "../path/PathConst";
import moto from '../components/media/img/moto.png';

export default function Main(){
    return(
        <div>
            <div class="container">
            <div class="container__navigation">
{/* Карточки навигации */}
                <div class="card container__navigation_card" style={{width: "18rem"}}>
                    <img src={moto} alt="News"/>
                    <div class="card-body">
                        <NavLink to={NEWS_ROUTE} class="card-text">Новости</NavLink>
                        <div>
                            <span className="badge badge-primary badge-pill">12</span>
                        </div>
                    </div>
                </div>

                <div class="card container__navigation_card" style={{width: "18rem"}}>
                    <img src={moto} alt="News"/>
                    <div class="card-body">
                        <NavLink to={MOTOWIKI_ROUTE} class="card-text">МотоWiKi</NavLink>
                        <div>
                            <span className="badge badge-primary badge-pill">15</span>
                        </div>
                    </div>
                </div>

                <div class="card container__navigation_card" style={{width: "18rem"}}>
                    <img src={moto} alt="News"/>
                    <div class="card-body">
                        <NavLink to={CLUB_ROUTE} class="card-text">Клуб</NavLink>
                        <div>
                            <span className="badge badge-primary badge-pill">!</span>
                        </div>
                    </div>
                </div>

            </div>

            <div class="container__navigation">
                {/* <!--Карточки навигации--> */}
                <div class="card container__navigation_card" style={{width: "18rem"}}>
                    <img src={moto} alt="News"/>
                    <div class="card-body">
                        <NavLink to={MEDIA_ROUTE}  class="card-text">Медиа</NavLink>
                        <div>
                            <span className="badge badge-primary badge-pill">15</span>
                        </div>
                    </div>
                </div>

                <div class="card container__navigation_card" style={{width: "18rem"}}>
                    <img src={moto} alt="News"/>
                    <div class="card-body">
                        <NavLink to={MANUAL_ROUTE} class="card-text">Мануалы</NavLink>
                        <div>
                            <span className="badge badge-primary badge-pill">6</span>
                        </div>
                    </div>
                </div>

                <div class="card container__navigation_card" style={{width: "18rem"}}>
                    <img src={moto} alt="News"/>
                    <div class="card-body">
                        <NavLink to={RULES_ROUTE} class="card-text">Правила</NavLink>
                        <div>
                            <span className="badge badge-primary badge-pill">!</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

<nav class="navbar  main__footer">
    <div class="main__footer_content">
        <span>Copyright: 2021-2022</span>
    </div>
</nav>
        </div>
    );
}