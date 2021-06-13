import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {AUTH_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../../path/PathConst";
import {NavLink} from "react-router-dom";
import logo from '../media/img/skOxGhl6nic.webp'

const MainHeader = observer(() => {
    const {user} = useContext(Context);
    return (
        <header className="main__header navbar">
            <div className="main__header_content navbar-brand">
                <div className="main__header_logo">
                    <img alt="LOGO" src={logo} style={{width:"110px", height:"110px"}}/>
                    <NavLink to={MAIN_ROUTE} className="text-white text__logo">Piligrim70</NavLink>
                </div>
                {
                    user.checkUser ?
                        <div className="main__header_reg">
                            <button className="btn btn_enter" onClick={()=> user.setCheckUser(false)}>Выйти</button>
                        </div>
                    :
                    <div className="main__header_reg">
                        <NavLink to={AUTH_ROUTE} className="btn btn_enter">Войти</NavLink>
                        <NavLink to={REGISTRATION_ROUTE} className="btn btn_rega">Регистрация</NavLink>
                    </div>
                }

            </div>
        </header>
        
        );
    });
export default MainHeader;