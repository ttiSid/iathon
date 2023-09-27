import React, { useState, useEffect } from "react";
import { types } from "../mock/types";
import imageType2 from "../images/image_type2.png";
import imageType1 from "../images/image_type1.png"
import imageGestational from "../images/image_gestational.png"
import imagePre from "../images/image_pre_diabetes.png"


function Types() {
  const [type1, type2, gestational, prediabetes] = types;

  const [text, setText] = useState(null);
  const [title, setTitle] = useState(null);
  const [activeClass, setActiveClass] = useState("");

  function changeType(title, text) {
    setTitle(title);
    setText(text);
  }

  useEffect(() => {
    setActiveClass("inactive");
    setTimeout(() => {
      setTitle(title);
      setText(text);
      setActiveClass("active");
    }, 300);
  }, [title, text]);

  return (
    <section className="types" id="types">
      <div className="types__container-text">
        <h2 className={`types__title ${activeClass}`}>
          {title === null ? "Tipos de Diabetes" : title}
        </h2>
        <p className={`types__paragraph ${activeClass}`}>
          {text === null ? "Selecione um tipo do diabetes para saber mais." : text}
        </p>
      </div>
      <div className="types__carousel">
        <ul className="types__list">
          <li className="types__item">
            <button
              className={
                title === type1.type
                  ? "types__item-button-active"
                  : "types__item-button"
              }
              onClick={() => {
                changeType(type1.type, type1.text);
              }}
            >
              <img
                className="types__item-image"
                src={imageType1}
                alt="imagem de uma gota de sangue com um símbolo de positivo no centro"
              ></img>
              {type1.type}
            </button>
          </li>
          <li className="types__item">
            <button
              className={
                title === type2.type
                  ? "types__item-button-active"
                  : "types__item-button"
              }
              onClick={() => changeType(type2.type, type2.text)}
            >
              <img
                className="types__item-image"
                src={imageType2}
                alt="imagem de um glicosimetro"
              ></img>
              Tipo 2
            </button>
          </li>
          <li className="types__item">
            <button
              className={
                title === gestational.type
                  ? "types__item-button-active"
                  : "types__item-button"
              }
              onClick={() => changeType(gestational.type, gestational.text)}
            >
              <img
                className="types__item-image"
                src={imageGestational}
                alt="imagem de uma gestante e ao lado uma gota de sangue com simbolo de positivo"
              ></img>
              Gestacional
            </button>
          </li>
          <li className="types__item">
            <button
              className={
                title === prediabetes.type
                  ? "types__item-button-active"
                  : "types__item-button"
              }
              onClick={() => changeType(prediabetes.type, prediabetes.text)}
            >
              <img
                className="types__item-image"
                src={imagePre}
                alt="imagem de um glicosímetro coletando sangue da ponta do dedo indicador"
              ></img>
              Pré-diabetes
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Types;
