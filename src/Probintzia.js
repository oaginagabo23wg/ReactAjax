import React from 'react';
function Probintzia({ onRadioChange }) {
    const handleRadioChange = (event) => {
        const value = event.target.value;
        onRadioChange(value);
    }
    return (
        <>
            <label>
                <input type="radio" name="probintzia" value="Araba" onChange={handleRadioChange}
                /> Araba
            </label>
            <label>
                <input type="radio" name="probintzia" value="Bizkaia" onChange={handleRadioChange}
                /> Bizkaia
            </label>
            <label>
                <input type="radio" name="probintzia" value="Gipuzkoa" onChange={handleRadioChange}
                /> Gipuzkoa
            </label>
            <br/>
            <br/>
        </>
    );
}
export default Probintzia;