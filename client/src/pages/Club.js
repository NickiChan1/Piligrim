import React, {useEffect, useState} from "react";
import axios from "axios";
import dotenv from  'dotenv';
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
export default function Club(){
    const [userList, setUserList] = useState([]);
        useEffect(() => {
            let LoadData = axios.get(REACT_APP_API_URL + "app/history/clubhistory")
                .then(res => {
                setUserList(res.data);
            });
        }, []);

    return(
        <div className="app">
            <div class="page__info"><span class="text-center page__pointer">История клуба</span></div>
<div class="container-fluid">
    <div class="card club__rules">
        <div class="card-body">
            {
                userList.map(x =>
                    <p className="card-text" style={{fontSize:'1.5rem'}}>{x.history_text}</p>
                )
            }

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