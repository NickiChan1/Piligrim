import React from "react";
import { NavLink } from "react-router-dom";
import {MUSIC_ROUTE,PHOTO_ROUTE, VIDEO_ROUTE} from "../path/PathConst";
import moto from '../components/media/img/moto.png';
export default function Media(){
    return(
        <div>
            <div class="page__info"><span class="text-center page__pointer">Медиа</span></div>

<div class="container">
    <div class="container__media">
        <div class="card container__navigation_card" style={{width: "18rem"}}>
            <img src={moto} alt="News"/>
            <div class="card-body">
                <NavLink to={MUSIC_ROUTE} class="card-text">Музыка</NavLink>
            </div>
        </div>

        <div class="card container__navigation_card" style={{width: "18rem"}}>
            <img src={moto} alt="News"/>
            <div class="card-body">
                <NavLink to={VIDEO_ROUTE} class="card-text">Видео</NavLink>
            </div>
        </div>

        <div class="card container__navigation_card" style={{width: "18rem"}}>
            <img src={moto} alt="News"/>
            <div class="card-body">
                <NavLink to={PHOTO_ROUTE} class="card-text">Фото</NavLink>
            </div>
        </div>
    </div>
</div>
<nav class="navbar fixed-bottom media__footer">
<div class="main__footer_content">
    <span>Copyright: 2021-2022</span>
</div>
</nav>
        </div>
    );
}