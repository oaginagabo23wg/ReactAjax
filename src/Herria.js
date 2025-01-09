import React, { useState } from "react";
import Informazioa from "./Informazioa";

function Herria({ data }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleHerriaChange = (event) => {
        const selectedLocality = event.target.value;
        const item = data.find((item) => item.locality === selectedLocality);
        setSelectedItem(item || null);
    };

    return (
        <>
            <label>Herria</label>
            <select id="herriak" name="herriak" defaultValue="" onChange={handleHerriaChange}>
                <option value="" disabled>
                    Aukeratu Herria
                </option>
                {data.map((item, index) => (
                    <option key={index} value={item.locality}>
                        {item.locality}
                    </option>
                ))}
            </select>
            <br />
            <Informazioa selectedItem={selectedItem} />
        </>
    );
}

export default Herria;
