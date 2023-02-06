import {USER_MAIN_DATA} from '../data/mock';
import ButtonAccess from '../componants/ButtonAccess';

// Pages home contenant le button access pour 
// choisir l'utilisateur
function Home() {
    return(
        <div>
            <div className='globalDiv'>
                <div>
                    <p className='choiseUser'>Choisir un Utilisateur</p>
                </div>
                {USER_MAIN_DATA.map((user) => {
                    return(
                        <ButtonAccess 
                            {...user} key={user.id}
                        />
                    )
                })}      
            </div>
        </div>
    )
}


export default Home;