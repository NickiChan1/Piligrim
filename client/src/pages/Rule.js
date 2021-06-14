import React, {useEffect, useState} from "react";
import axios from "axios";
import dotenv from  'dotenv';
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export default function Rule(){
    const [ruleData, setRuleData] = useState([]);
    useEffect(() => {
        let RuleData = axios.get(REACT_APP_API_URL + 'app/faq/getoneFaq/1')
            .then(res => {
                setRuleData(res.data);
            }).catch(error => {
                console.log('Something went wrong!!!');
                console.log(error);
            })
    }, []);
    return(
        <div>
            <div className="page__info"><span className="text-center page__pointer">Правила</span></div>
            <div className="container-fluid">
                <div className="card chavo__rules">
                    <div className="card-body">
                        <p className="card-text" style={{fontSize:'1.2rem'}}>{ruleData.faq_text}</p>
                    </div>
                </div>
            </div>
            <nav className="navbar fixed-bottom media__footer">
                <div className="main__footer_content">
                    <span>Copyright: 2021-2022</span>
                </div>
            </nav>
        </div>
    );
}
