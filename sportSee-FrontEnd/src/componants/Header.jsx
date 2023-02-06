
// Nav
import { NavLink } from "react-router-dom";

// Img
import logo from "../assets/logo.png";
import Title from "../assets/Title.png"; 

/**
 * 
 * @returns {JSX}
 */


// Function Header
function Header({logoHeader, titleHeader}){

    return(
        <div className="StyledGlobalHeader">

            <div className="LogoDiv">
                <div className="DivLogo">
                    <img src= {logoHeader}  alt = 'logo' />
                </div>
                <div className="DivTitle">
                    <img src= {titleHeader}  alt = 'logo' />
                </div>
            </div>
        
                <ul className="NavBox">
                    <li className="NavBoxLi">
                        <NavLink className="StyledNavLink" activeclassname ="active">Accueil</NavLink>
                    </li>
                    <li className="NavBoxLi">
                        <NavLink className="StyledNavLink" activeclassname ="active">Profil</NavLink>
                    </li>
                    <li className="NavBoxLi">
                        <NavLink className="StyledNavLink" activeclassname ="active">Réglage</NavLink>
                    </li>
                    <li className="NavBoxLi">
                        <NavLink className="StyledNavLink" activeclassname ="active">Communauté</NavLink>
                    </li>
                </ul>
        </div>
    )
}

// DefaultProps img
Header.defaultProps = {
    logoHeader : logo,
    titleHeader : Title,
}

export default Header;