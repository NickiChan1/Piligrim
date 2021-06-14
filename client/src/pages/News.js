import React, {useEffect, useState} from "react";
import  news_img from '../components/media/img/moto.png';
import axios from "axios";
import dotenv from  'dotenv';
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
export default function News(){
    const [content, setNewsContent] = useState([]);
        useEffect(() => {
            let LoadData = axios.get(REACT_APP_API_URL + 'app/news/all')
                .then(res => {
                    setNewsContent(res.data);
                });
        }, []);
        console.log(content);
    return(
        <div>
             <div className="page__info"><span className="text-center page__pointer">Новости</span></div>

<div className="container-fluid content_container">
    {content.map((data, index) =>
        <div className="news__container">
                <div className="card " style={{width:"42rem"}} key={index}>
                    <div className="card-header news__heaeder"><span className="news__name">{data.news_name}</span></div>
                    <img style={{width: '42rem', height:'35rem'}} src={REACT_APP_API_URL + 'static/img/' + data.news_image} className="card-img-top" alt="news_image"/>
                    <div className="card-body">
                        <p className="card-text">
                            {data.news_content}

                        </p>
                    </div>
                    <div className="card-footer news__footer">
                        <span className="news__date">{data.news_data}</span>
                    </div>
                </div>
        </div>
    )}
    {content.length == 0 &&
    <div style={{width:'100%'}} className='info_container align-items-center'>
        <p className='alert alert-info text-center'>
            Нет данных для отображения
        </p>
    </div>}
    </div>
            {content.length == 0 &&
            <nav className="navbar fixed-bottom main__footer">
                <div className="main__footer_content">
                    <span>Copyright: 2021-2022</span>
                </div>
            </nav>
            }
            {content.length > 0 &&
            <nav className="navbar main__footer">
                <div className="main__footer_content">
                    <span>Copyright: 2021-2022</span>
                </div>
            </nav>
            }

        </div>
    );
}