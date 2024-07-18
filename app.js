function encriptarTexto(texto) {
    // Reglas de encriptación
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return texto.replace(/[eioua]/g, (match) => reglas[match]);
}

function desencriptarTexto(texto) {
    // Reglas de desencriptación
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return texto.replace(/enter|imes|ai|ober|ufat/g, (match) => reglas[match]);
}

function encriptarBtn() {
    // Obtén el contenido del textarea
    const textarea = document.getElementById('textarea');
    let texto = textarea.value;

    // Validación: solo letras minúsculas sin caracteres especiales
    if (!/^[a-z\s]*$/.test(texto)) {
        alert('Solo se permiten letras minúsculas y espacios, sin caracteres especiales ni acentos.');
        return;
    }

    // Encripta el texto
    texto = encriptarTexto(texto);

    // Muestra el texto encriptado en la sección de salida
    mostrarResultado(texto);
    
    // Limpia el textarea
    textarea.value = '';
}

function desencriptarBtn() {
    // Obtén el contenido del textarea
    const textarea = document.getElementById('textarea');
    let texto = textarea.value;

    // Validación: solo letras minúsculas sin caracteres especiales
    if (!/^[a-z\s]*$/.test(texto)) {
        alert('Solo se permiten letras minúsculas y espacios, sin caracteres especiales ni acentos.');
        return;
    }

    // Desencripta el texto
    texto = desencriptarTexto(texto);

    // Muestra el texto desencriptado en la sección de salida
    mostrarResultado(texto);
    
    // Limpia el textarea
    textarea.value = '';
}

function mostrarResultado(texto) {
    // Selecciona la sección de salida
    const sectionOutput = document.getElementById('sectionOutput');

    // Borra el contenido existente de la sección de salida
    sectionOutput.innerHTML = '';

    // Crea un nuevo párrafo y agrega el texto del textarea
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = texto;
    nuevoParrafo.className = 'nuevo_parrafo';
    nuevoParrafo.id = 'nuevo_parrafo';

    // Añade el nuevo párrafo a la sección de salida
    sectionOutput.appendChild(nuevoParrafo);

    // Crea el nuevo botón "Copiar"
    const nuevoBtn = document.createElement('button');
    nuevoBtn.textContent = 'Copiar';
    nuevoBtn.className = 'nuevo_btn';
    nuevoBtn.onclick = () => copyFunction(texto);
    sectionOutput.appendChild(nuevoBtn);
}

function copyFunction() {
    // Seleccionar el párrafo
    const nuevoParrafo = document.getElementById('nuevo_parrafo');
    const range = document.createRange();
    range.selectNode(nuevoParrafo);

    // Seleccionar el texto
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copiar el texto al portapapeles
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Oops, unable to copy', err);
    }

    // Deseleccionar el texto
    selection.removeAllRanges();
}