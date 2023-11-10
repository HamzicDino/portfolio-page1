import { HeaderStyle } from "./header.styled";

const Header = () => {
    return (
        <HeaderStyle>
        <div className="content">
            <nav className="header-nav">
            <ul>
                <li><a STYLE="text-decoration:underline" href="">Startseite</a></li>
                <li><a href="HTML/experience.html">Arbeitserfahrungen</a></li>
                <li><a href="HTML/contact.html">Kontakt</a></li>
            </ul>
        </nav>
        </div>
        </HeaderStyle>
    )
};

export default Header;