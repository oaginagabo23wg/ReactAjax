import Probintzia from "./Probintzia.js";
import Herria from "./Herria.js";
import React from 'react';

function Header({ onRadioChange }) {
    return (
        <>
            <Probintzia onRadioChange={onRadioChange}/>
            <Herria />
        </>
    );
}
export default Header;