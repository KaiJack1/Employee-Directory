import React from "react";
import "./Wrapper.css";
//Grouping the children components.
function Wrapper ({ children }){
    return (
        <div className="wrapper">
            { children }
        </div>
    );
}
export default Wrapper;