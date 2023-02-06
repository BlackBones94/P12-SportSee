import {Link} from "react-router-dom";

function ButtonAccess (props){
    return(
        <Link to={'user/' + props.id} className="buttonAccess">{props.userInfos.firstName}</Link> 
    )
}

export default ButtonAccess;