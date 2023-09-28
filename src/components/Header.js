import React, { useState, useEffect } from "react";
import imageHeader1 from "../images/image_header.jpg";
import imageHeader2 from "../images/image_header2.jpg";
import imageHeader3 from "../images/image_header3.jpg";

function Header() {
  const imageArray = [
    {
      image: imageHeader1,
      text: "Inteligência Artificial no diagnóstico de retinopatia diabética",
      link: "https://portugues.medscape.com/verartigo/6508991?0=0=reg=1&1=reg=1",
    },
    {
      image: imageHeader2,
      text: "O exercício físico é fundamental para prevenção e tratamento do diabetes mellitus",
      link: "https://diabetes.org.br/o-exercicio-fisico-e-fundamental-para-prevencao-e-tratamento-do-diabetes-mellitus/",
    },
    {
      image: imageHeader3,
      text: "Cresce o número de pessoas com diabetes nas Américas",
      link: "https://diabetes.org.br/cresce-o-numero-de-pessoas-com-diabetes-nas-americas/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImageObj = imageArray[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [imageArray]);

  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__description">
          <div className="header__wrap">
            <h1 className="header__title">
              O uso da IA no controle e diagnóstico do Diabetes
            </h1>
            <p className="header__paragraph">
              Especificamente na esfera do diabetes (doença de incidência
              crescente que atinge 8,8% da população mundial e já representa 10%
              do gasto global em saúde), dados de bases populacionais,
              prontuários eletrônicos ou dispositivos vestíveis ou de
              monitorização contínua da glicemia podem fornecer substrato para
              algoritmos que executem diagnósticos mais precoces e acurados
            </p>
            <a className="header__link" href="#ia">
              Saiba mais...
            </a>
          </div>
        </div>
        <div className="header__image-container">
          <a href={currentImageObj.link} target="_blanc">
            <img
              className="header__image"
              src={currentImageObj.image}
              alt={currentImageObj.text}
              style={{}}
            />
            <div className="header__text-container">
              <div className="header__image-text">{currentImageObj.text}</div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
