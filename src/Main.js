import Probintzia from "./Probintzia.js";
import Herria from "./Herria.js";
import React from 'react';

function Header({ onRadioChange, filteredData }) {
    return (
        <>
            <Probintzia onRadioChange={onRadioChange}/>
            <Herria data={filteredData} />
        </>
    );
}
export default Header;