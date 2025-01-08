import Informazioa from "./Informazioa";

function Herria() {
    return (
        <>
            <label>Herria</label>
            <select id="herriak" name="herriak" defaultValue="">
                <option value="" disabled>Aukeratu Herria</option>
            </select>
            <label>Gune naturala</label>
            <select id="guneak" name="guneak" defaultValue="">
                <option value="" disabled>Aukeratu Gune Naturala</option>
            </select>
            <br />
            <Informazioa />
        </>
    );
}
export default Herria;