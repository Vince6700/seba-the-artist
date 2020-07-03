import React from "react";
import PropTypes from "prop-types";
import style from "./expoCard.module.scss";

const ExpoCard = ({expo}) => {
    console.log(expo)
    return (
        <div className={style.container}>
            <div className={style.infos}>
                <h2>{expo.name}</h2>
                <p>{expo.description}</p>
            </div>
            <div>

            </div>
        </div>)
}

ExpoCard.propTypes = {
    expo: PropTypes.object
};

export default ExpoCard;
