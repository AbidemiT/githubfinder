import React, {useReducer, useContext} from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import {
    SET_ALERT,
    REMOVE_ALERT
} from "../types";

const AlertState = props => {
    const initialState = null;

    // Dispatching to reducer
    const [state, dispatch] = useReducer(AlertReducer,initialState);

    // set alert
    // const [alert, setAlert] = useState(null);

    const alertStatus = (msg, status) => {
      dispatch({type: SET_ALERT,
        payload: {msg, status}})
      
      
      setTimeout(() => {
        dispatch({type: REMOVE_ALERT})
      }, 5000);
    }

    return <AlertContext.Provider 
    value={{
        alertStatus,
        alert: state
    }}
    >
        {props.children}
    </AlertContext.Provider>

}
export default AlertState;