
import React from "react"
const Error = ({ touched, message}) => {

    if(!touched){
        return <div >&nbsp;
        </div>;
    }
    if(message){
        return <div><span style={{ color: 'red' }}>
        {message}
      </span></div>;
    }
    return <div >&nbsp;</div>;
}

export default Error;