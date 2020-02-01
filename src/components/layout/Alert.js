import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const {alert} = alertContext; 

        return (
            alert !== null && (<div>
                <p>{alert.msg}</p> 
            </div>)
        )
}

Alert.propTypes = {
    // alertStatus: PropTypes.object.isRequired,
}

export default Alert;
