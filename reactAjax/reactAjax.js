// fetchEspacios.js
document.addEventListener("DOMContentLoaded", () => {
    const fetchEspacios = () => {
        // Crear una solicitud HTTP
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "./espacios.php", true); // Reemplaza "tu-ruta" con la ruta adecuada

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        // Parsear la respuesta JSON
                        const data = JSON.parse(xhr.responseText);
                        console.log("Datos obtenidos de espacios.php:", data);

                        // Llamar a una función para manejar los datos (opcional)
                        renderEspacios(data);
                    } catch (error) {
                        console.error("Error al parsear el JSON:", error);
                    }
                } else {
                    console.error("Error en la solicitud:", xhr.statusText);
                }
            }
        };

        // Enviar la solicitud
        xhr.send();
    };

    const renderEspacios = (data) => {
        // Ejemplo: Mostrar los datos en una lista en el DOM
        const container = document.getElementById("espacios-container");
        if (!container) return;

        container.innerHTML = ""; // Limpiar el contenedor

        data.forEach((espacio) => {
            const item = document.createElement("div");
            item.className = "espacio-item";
            item.innerHTML = `
                <h3>${espacio.name}</h3>
                <p>${espacio.description}</p>
            `;
            container.appendChild(item);
        });
    };

    // Llamar a la función para obtener los datos
    fetchEspacios();
});
