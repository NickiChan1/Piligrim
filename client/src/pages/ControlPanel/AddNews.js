import React, {useState} from 'react';
import {add_news} from "../../http/userApi";

    export default function AddNews() {
        const [news_name, setNews_Name] = useState('');
        const [news_content, setNews_Content] = useState('');
        const [news_image, setNews_Image] = useState('');
        const [news_data, setNews_Date] = useState('');

            const AddNews = async () => {
                let news_data = new Date().toLocaleString();
                console.log(news_data);
                console.log(news_image);
                const require = await add_news(news_name, news_content, news_image,news_data)
                    .then( req => {
                        console.log('Новость успешно добавлена!');
                    }).catch(error => {
                      console.log('Произошла ошибка!');
                    }
                )
                console.log(require);
            }


     const  handleImageChange = (e) => {
            e.preventDefault();

            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
               setNews_Image(file);
            }

            reader.readAsDataURL(file)
        }

        return(
          <div>
              <div className="page__info"><span className="text-center page__pointer">Добавить новость</span></div>
              <div className="container add_news_form_container">
                  <form className="add_news_form">
                        <div className="form-group">
                            <label>Название новости</label>
                            <input type="text" value={news_name} onChange={e => setNews_Name(e.target.value)} className="form-control" id="newsName" placeholder="Название новости"/>
                        </div>
                        <div className="form-group">
                            <label>Содержание новости</label>
                            <textarea value={news_content} onChange={e => setNews_Content(e.target.value)} className="form-control" id="news_text" rows='5' placeholder='Содержание новости'></textarea>
                        </div>
                        <div className="form-group">
                            <label>Добавить фото</label>
                            <input name="files" type="file" onChange={e => handleImageChange(e)} className="form-control-file" id="news_img"/>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={AddNews}>Добавить</button>
                        </div>
                  </form>
              </div>
          </div>
        );
    }