import React from "react";

export default function BMW() {
    return(
      <div>
          <div className="page__info"><span className="text-center page__pointer">BMW</span></div>
          <div className="container-fluid">
              <div className="card manual__card" style={{width:"30rem", height:"auto"}}>
                  <div className="card-header manual__card_header"><span className="manual__header_text">Файлы для загрузки</span></div>
                <div className="card-body">
                    <ul className="list-group manual_select">
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
          </div>
          <nav className="navbar  main__footer">
              <div className="main__footer_content">
                  <span>Copyright: 2021-2022</span>
              </div>
          </nav>
      </div>
    );
}