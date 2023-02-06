// Import IMG
import Zen from "../assets/Zen.png";
import Swim from "../assets/Swim.png";
import Strength from "../assets/Strength.png";
import Bike from "../assets/Bike.png";


/**
 *
 * @returns {JSX}
 */

// Function barre sur le coté 
function Aside({nage, velo, force, yoga}) {
    return(
        <aside className="AsideBar">
            <ul className="AsideBox">
                <li className="AsideLi">
                    <img src={yoga} alt='yoga' />
                </li>
                <li className="AsideLi">
                    <img src={nage} alt='nageur' />
                </li>
                <li className="AsideLi">
                    <img src={velo} alt='velo' />
                </li>
                <li className="AsideLi">
                    <img src={force} alt='force' />
                </li>
            </ul>

            <div className="AsideTextBox">
                <p className="AsideBarText">Copiryght, SportSee 2020</p>
            </div>
        </aside>
    )
}

// defaultProps img
Aside.defaultProps = {
    nage : Swim,
    velo : Bike,
    force : Strength,
    yoga : Zen,
}

export default Aside;