import React, {useEffect, useState} from "react";
import axios from "axios";
import dotenv from  'dotenv';
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export default function Img(){
    const [photo, setPhoto] = useState([]);
        useEffect(() => {
            let LoadData = axios.get( REACT_APP_API_URL + "app/photo/getphoto")
                .then(res => {
                    setPhoto(res.data);
                });
        },[]);
    return(
        <div>
            <div className="container" style={{marginTop:"1rem"}}>
                <div className="row">
                    {photo.map((data, index) =>
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top"
                                 data-src={data.img}
                                 style={{height: "225px", width: "100%", display: "block"}}
                                 src={REACT_APP_API_URL + 'static/img/' + data.img}
                                 data-holder-rendered="true"/>
                                <div className="card-body">
                                    <p className="card-text">{data.photo_text}</p>
                                </div>
                        </div>
                    </div>
                            )}
                </div>
            </div>
            <nav className="navbar main__footer">
                <div className="main__footer_content">
                    <span>Copyright: 2021-2022</span>
                </div>
            </nav>
        </div>
    );
}