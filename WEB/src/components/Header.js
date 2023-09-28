import React, { useState, useEffect } from 'react';
import imageHeader1 from '../images/image_header.jpg';
import imageHeader2 from '../images/image_header2.jpg';
import imageHeader3 from '../images/image_header3.jpg';

function Header() {
  const [currentImage, setCurrentImage] = useState(imageHeader1);

  useEffect(() => {
    const imageArray = [imageHeader1, imageHeader2, imageHeader3];
    let currentIndex = 0;
    const changeImage = () => {
      currentIndex = (currentIndex + 1) % imageArray.length;
      setCurrentImage(imageArray[currentIndex]);
    };
    const interval = setInterval(changeImage, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
        <div
           className="header__image"
           style={{
             backgroundImage: `url(${currentImage})`,
             transition: 'background-image 0.5s ease-in-out',}}
        ></div>
      </div>
    </header>
  );
}

export default Header;

