import React from "react";

// Proptype
import PropType from "prop-types";


/**
 * @param { Object } params
 * @param { HTMLImageElement } params.image
 * @param { Number } params.stat
 * @param { String } params.title
 * @param { String } params.type
 * @returns {JSX}
 */


// function pour les cards nutriments
export default function UserStats({ image, stat, title, type }) {

  // propTypes selon https://fr.reactjs.org/docs/typechecking-with-proptypes.html
    UserStats.propTypes = {
      image: PropType.elementType.isRequired,
      stat: PropType.number.isRequired,
      title: PropType.string.isRequired,
      type: PropType.string.isRequired,
    };
  
    return (
      <div className="result-user-container">
        <div className="result-user">
          <img className="icone" src={image} alt="icon" />
          <div>
            <span className="keydata">
              {stat}
              {type}
            </span>
            <p className="nutrimentTitle">{title}</p>
          </div>
        </div>
      </div>
    );
  }
