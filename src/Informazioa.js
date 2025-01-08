function Informazioa() {
    return (
        <>
            <h4>Aukeratutako lokalekuaren informazioa</h4>
            <label>Izena:</label>
            <input type='text' id='izena'></input>
            <label>Lokalekua:</label>
            <input type='text' id='lokalekua'></input>
            <br />
            <label>Mota:</label>
            <input type='text' id='mota'></input>
            <br />
            <label>Euskal herriko turismoa:</label>
            <input type='text' id='turismoa'></input>
            <br />
            <label>Deskripzioa:</label>
            <textarea id="deskripzioa"></textarea>
        </>
    );
}
export default Informazioa;