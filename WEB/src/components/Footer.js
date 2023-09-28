import logo from "../images/logo.png";

function Footer() {

 const currentYear = new Date(Date.now()).getFullYear();
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <img
          className="footer__image"
          src={logo}
          alt="Logo iathon IA no Diabetes"
        ></img>
        <div className="footer__container-about">
          <p className="footer__copyright">
            &copy;
            {`${currentYear}. Projeto desenvolvido por: `}
          </p>
          <ul className="footer__team">
            <li>
              <a
                className="footer__member"
                href="https://www.linkedin.com/in/maikon-correa-9a5407264/"
                target="_blank"
                rel="noreferrer"
              >
                Maikon
              </a>
            </li>
            <li>
              <a
                className="footer__member"
                href="https://www.linkedin.com/in/miriam-kavulamine-746597154"
                target="_blank"
                rel="noreferrer"
              >
                Miriam
              </a>
            </li>
            <li>
              <a
                className="footer__member"
                href="https://www.linkedin.com/in/nuno-j-machado/"
                target="_blank"
                rel="noreferrer"
              >
                Nuno
              </a>
            </li>
            <li>
              <a
                className="footer__member"
                href="https://www.linkedin.com/in/raphael-ramier-a824b711a/"
                target="_blank"
                rel="noreferrer"
              >
                Raphael
              </a>
            </li>
            <li>
              <a
                className="footer__member"
                href="https://www.linkedin.com/in/sidney-sudatti-8231401b8"
                target="_blank"
                rel="noreferrer"
              >
                Sidney
              </a>
            </li>
            <li>
              <a
                className="footer__member"
                href="https://www.linkedin.com/in/willian-roberto-carneiro-de-albuquerque-3250221a0/"
                target="_blank"
                rel="noreferrer"
              >
                Willian
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="footer__repo">
          Link para o Repositório
        </a>
      </div>
    </footer>
  );
}

export default Footer;
