function Informazioa({ selectedItem }) {
    return (
        <>
            <h4>Aukeratutako lokalekuaren informazioa</h4>
            <label>Izena:</label>
            <input
                type="text"
                id="izena"
                value={selectedItem?.templateType || ""}
                readOnly
            />
            <label>Kokalekua:</label>
            <input
                type="text"
                id="lokalekua"
                value={selectedItem?.locality || ""}
                readOnly
            />
            <br />
            <label>Mota:</label>
            <input
                type="text"
                id="mota"
                value={selectedItem?.friendlyUrl || ""}
                readOnly
            />
            <br />
            <label>Euskal herriko turismoa:</label>
            <input
                type="text"
                id="turismoa"
                value={selectedItem?.turismDescription || ""}
                readOnly
            />
            <br />
            <label>Deskripzioa:</label>
            <textarea
                id="deskripzioa"
                value={selectedItem?.turismDescription || ""}
                readOnly
            />
        </>
    );
}

export default Informazioa;
