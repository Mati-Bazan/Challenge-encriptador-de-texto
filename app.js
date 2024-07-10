function encriptarBtn() {
    // Obtén el contenido del textarea
    const textarea = document.getElementById('textarea');
    const texto = textarea.value;

    // Selecciona la sección de salida
    const sectionOutput = document.getElementById('sectionOutput');

    // Borra el contenido existente de la sección de salida
    sectionOutput.innerHTML = '';

    // Crea un nuevo párrafo y agrega el texto del textarea
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = texto;
    nuevoParrafo.className = 'nuevo_parrafo';

    // Añade el nuevo párrafo a la sección de salida
    sectionOutput.appendChild(nuevoParrafo);

     // Crea el nuevo botón "Copiar"
     const nuevoBtn = document.createElement('button');
     nuevoBtn.textContent = 'Copiar';
     nuevoBtn.className = 'nuevo_btn'; // Agrega una clase al nuevo botón
     sectionOutput.appendChild(nuevoBtn);

    // Opcional: Limpia el textarea después de pegar el contenido
    textarea.value = '';
}