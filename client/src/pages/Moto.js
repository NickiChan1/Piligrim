import React from "react";
import moto from '../components/media/img/moto.png';

    export default function Moto(){
        return(
            <div>
                <div className="page__info"><span className="text-center page__pointer">Мото WiKi</span></div>

<div className="container-fluid static__content">
    <div className="card motowiki__card" style={{width: "30rem", height: 'auto'}}>
        <div className="card-header motowiki__card_header"><span className="motowiki__header_text">Мото Wiki</span></div>
        <div className="card-body">
            <ul className="list-group moto__wiki_select">
                <button className="btn_group list-group-item">Заглушка названия</button>
                <button className="btn_group list-group-item">Заглушка названия</button>
                <button className="btn_group list-group-item">Заглушка названия</button>
                <button className="btn_group list-group-item">Заглушка названия</button>
                <button className="btn_group list-group-item">Заглушка названия</button>
                <button className="btn_group list-group-item">Заглушка названия</button>
                <button className="btn_group list-group-item">Заглушка названия</button>
                <button className="btn_group list-group-item">Заглушка названия</button>
                <button className="btn_group list-group-item">Заглушка названия</button>
                <button className="btn_group list-group-item">Заглушка названия</button>
            </ul>
        </div>
    </div>

    <div className="position-static">
        <div className="card moto__card" style={{maxWidth:"95%"}}>
            <div className="card-header">
                <span className="card-text">Название мото</span>
            </div>
            <img src={moto} className="card-img-top moto__img"/>
            <div className="card-body">
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut excepturi fugit laudantium. Cum dicta maxime modi molestias, quae saepe soluta tenetur!
                    Eos nulla, officia? Blanditiis error facilis in modi molestiae neque, quasi quia quod totam veritatis! Amet asperiores dolor eveniet sequi voluptatum.
                    Dolorum et in iusto nihil perferendis praesentium quaerat.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut excepturi fugit laudantium. Cum dicta maxime modi molestias, quae saepe soluta tenetur!
                    Eos nulla, officia? Blanditiis error facilis in modi molestiae neque, quasi quia quod totam veritatis! Amet asperiores dolor eveniet sequi voluptatum.
                    Dolorum et in iusto nihil perferendis praesentium quaerat.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut excepturi fugit laudantium. Cum dicta maxime modi molestias, quae saepe soluta tenetur!
                    Eos nulla, officia? Blanditiis error facilis in modi molestiae neque, quasi quia quod totam veritatis! Amet asperiores dolor eveniet sequi voluptatum.
                    Dolorum et in iusto nihil perferendis praesentium quaerat.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut excepturi fugit laudantium. Cum dicta maxime modi molestias, quae saepe soluta tenetur!
                    Eos nulla, officia? Blanditiis error facilis in modi molestiae neque, quasi quia quod totam veritatis! Amet asperiores dolor eveniet sequi voluptatum.
                    Dolorum et in iusto nihil perferendis praesentium quaerat.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut excepturi fugit laudantium. Cum dicta maxime modi molestias, quae saepe soluta tenetur!
                    Eos nulla, officia? Blanditiis error facilis in modi molestiae neque, quasi quia quod totam veritatis! Amet asperiores dolor eveniet sequi voluptatum.
                    Dolorum et in iusto nihil perferendis praesentium quaerat.</p>
            </div>
        </div>
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