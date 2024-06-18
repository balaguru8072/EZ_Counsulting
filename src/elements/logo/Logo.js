import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
import images_logos from "../../assets/images/Logos/CZ_consulting_logo.jpeg"

const Logo = ({image, image2}) => {
    // const images_logo = require("../../assets/images/Logos/CZ_consulting_logo.jpeg")
    return(
        <div className="logo">
            <Link to={process.env.PUBLIC_URL + "/consulting"}>
                <img className="logo-light" src={images_logos} alt="Corporate Logo" />
                <img className="logo-dark" src={images_logos} alt="Corporate Logo" />
            </Link>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
