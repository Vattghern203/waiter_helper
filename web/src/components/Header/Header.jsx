import logo from "../../assets/img/react.svg"

export function Header() {

    return (
        <header className="header">
            <div className="header__logo--container">
                <img className="header__logo--img" src={logo}>

                </img>
            </div>

            <nav className="header__nav">
                <a className="header__nav--link" href="#">link</a>
                <a className="header__nav--link" href="#">link</a>
                <a className="header__nav--link" href="#">link</a>
                <a className="header__nav--link" href="#">link</a>
            </nav>
        </header>
    )
}