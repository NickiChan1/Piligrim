import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {NEWS_ROUTE} from "../../path/PathConst";

    export default function MainControl(){
        return(
            <div>
                <div className="container">
                    <div className="main__control">
                        <div className="card control_action">
                            <div className="card-header action_card justify-content-center"><span>Управление новстной лентой</span></div>
                            <div className="card-body">
                                <ul className="list-group action_select">
                                    <NavLink to={NEWS_ROUTE} className="btn list-group-item add_btn">Добавить Новость</NavLink>
                                    <NavLink to={NEWS_ROUTE} className="btn list-group-item update_btn">Изменить Новость</NavLink>
                                    <NavLink to={NEWS_ROUTE} className="btn list-group-item delete_btn">Удалить Новость</NavLink>
                                </ul>
                            </div>
                        </div>

                        <div className="card control_action">
                            <div className="card-header action_card justify-content-center"><span>Управление МотоWiki</span></div>
                            <div className="card-body">
                                <ul className="list-group action_select">
                                    <button className="btn list-group-item add_btn">Добавить Мотоцикл</button>
                                    <button className="btn list-group-item update_btn">Изменить Мотоцикл</button>
                                    <button className="btn list-group-item delete_btn">Удалить Мотоцикл</button>
                                </ul>
                            </div>
                        </div>

                        <div className="card control_action">
                            <div className="card-header action_card justify-content-center"><span>Управление История клуба</span></div>
                            <div className="card-body">
                                <ul className="list-group action_select">
                                    <button className="btn list-group-item add_btn">Добавить История клуба</button>
                                    <button className="btn list-group-item update_btn">Изменить Историю клуба</button>
                                    <button className="btn list-group-item delete_btn">Удалить Историю клуба</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }