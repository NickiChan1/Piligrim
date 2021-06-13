import React from "react";
import {registration} from "../http/userApi";
export default function Auth(){

    return(
        <div>
            <div class="page__info"><span class="text-center page__pointer">Авторизация</span></div>

<div class="container reg__container">
    <form class="reg__form">
        <div class="reg__form_container">
            <div class="form-group row reg__input_group">
                <label class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control reg__form_input"/>
                </div>
            </div>
            <div class="form-group row reg__input_group">
                <label class="col-sm-2 col-form-label">Пароль</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control reg__form_input"/>
                </div>
            </div>
            <div class="reg__btn_content">
                <button class="btn  btn__login">Войти</button>
            </div>
        </div>
    </form>

</div>
<nav class="navbar fixed-bottom reg__footer">
    <div class="main__footer_content">
        <span>Copyright: 2021-2022</span>
    </div>
</nav>
        </div>
    );
}