import logo from "../images/logo.png"

function Nav() {
    return(
        <nav className="nav">
        <div className="nav__container">
            <img className="nav__image" src={logo} alt="logo do site IATHON IA no diabetes"></img>
        </div>
        </nav>
    )
}

export default Nav;