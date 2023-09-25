import logo from "../images/logo.png";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <img
          className="nav__image"
          src={logo}
          alt="logo do site IATHON IA no diabetes"
        ></img>
        <ul className="nav__menu">
          <li>
            <a className="nav__button" href="#">
              MUNDO
            </a>
          </li>
          <li>
            <a className="nav__button" href="#ia">
              IA NA DIABETES
            </a>
          </li>
          <li>
            <a className="nav__button" href="#">
              TIPOS
            </a>
          </li>
          <li>
            <a className="nav__button" href="#">
              BRASIL
            </a>
          </li>
          <li>
            <a className="nav__button" href="#">
              TESTE
            </a>
          </li>
          <li>
            <a className="nav__button" href="#footer">
              CONTATOS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
