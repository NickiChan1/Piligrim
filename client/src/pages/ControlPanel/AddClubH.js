import React, {useState} from 'react';
import {add_history} from "../../http/userApi";
    export default function AddClubH() {
        const [history_text, setHistory_Text] = useState('');
        const AddClub = async () => {
         const require = await add_history(history_text)
             .then(req => {
                console.log(history_text);
             }).catch(error => {
                 console.log(error);
             })
            console.log(require);
        }
        return(
            <div>
                <div className="page__info"><span className="text-center page__pointer">Добавить новость</span></div>
                <div className="container add_news_form_container">
                    <form className="add_news_form">
                        <div className="form-group">
                            <label>Содержание Истории</label>
                            <textarea value={history_text} onChange={e => setHistory_Text(e.target.value)} className="form-control" id="club_text" rows='10' placeholder='Содержание Истории'></textarea>
                        </div>

                        <div>
                            <button className="btn btn-primary" onClick={AddClub}>Добавить</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }