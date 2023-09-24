import image_type2 from "../images/image_type2.png"

function Types() {
  return(
    <section className="types">
      <div className="types__container-text">
        <h2 className="types__title" >Diabetes Tipo 2</h2>
        <p className="types__paragraph">O Tipo 2 aparece quando o organismo não consegue usar adequadamente a insulina que produz; ou não produz insulina suficiente para controla a taxa de glicemia.
Cerca de 90% das pessoas com diabetes têm o Tipo 2. Ele se manifesta mais frequentemente em adultos, mas crianças também podem apresentar. Dependendo da gravidade, ele pode ser controlado com atividade física e planejamento alimentar. Em outros casos, exige o uso de insulina e/ou outros medicamentos para controlar a glicose.</p>
      </div>
      <div className="Types__carousel">
        <ul className="types__list">
        <li className="types__item">
            <img className="types__item-image" src={image_type2} alt="imagem de um glicosimetro"></img>
            <h4 className="types__item-text">Tipo 2</h4>
          </li>
          <li className="types__item">
            <img className="types__item-image" src={image_type2} alt="imagem de um glicosimetro"></img>
            <h4 className="types__item-text">Tipo 2</h4>
          </li>
          <li className="types__item">
            <img className="types__item-image" src={image_type2} alt="imagem de um glicosimetro"></img>
            <h4 className="types__item-text">Tipo 2</h4>
          </li>
          <li className="types__item">
            <img className="types__item-image" src={image_type2} alt="imagem de um glicosimetro"></img>
            <h4 className="types__item-text">Tipo 2</h4>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Types;