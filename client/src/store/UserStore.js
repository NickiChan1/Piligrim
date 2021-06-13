import {makeAutoObservable} from "mobx";
    export default class UserStore {
        constructor() {
            this._checkUser = false;
            this._user = {};
            makeAutoObservable(this);
        }

        setCheckUser(bool) {
            this._checkUser = bool;
        }

        setUser(bool) {
            this._user = bool;
        }

        get checkUser() {
            return this._checkUser;
        }

        get user() {
            return this._user;
        }
    }