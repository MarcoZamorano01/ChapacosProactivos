let selectedAvatar = 'public/img/PerfilFotos/carlos.png'; // Avatar por defecto

function setAvatar(avatarUrl, element) {
    selectedAvatar = avatarUrl; // Guarda el avatar seleccionado
    
    // Remover el contorno de todos los avatares
    const avatars = document.querySelectorAll('.avatar-selection img');
    avatars.forEach(avatar => {
        avatar.style.border = 'none'; // Eliminar contorno
    });

    // Agregar contorno al avatar seleccionado
    element.style.border = '2px solid #00d1b2'; // Cambiar el color según tu diseño
    console.log("Avatar seleccionado:", selectedAvatar);
}

// Función para enviar el mensaje
document.getElementById('sendBtn').addEventListener('click', function() {
    const name = document.getElementById('userName').value; // Obtén el nombre
    const message = document.getElementById('userMessage').value; // Obtén el mensaje

    if (name && message) {
        // Actualiza la vista previa
        document.getElementById('previewAvatar').src = selectedAvatar;
        document.getElementById('previewName').textContent = name;
        document.getElementById('previewMessage').textContent = message;

        // Muestra la vista previa
        document.getElementById('preview').style.display = 'block';
    } else {
        alert('Por favor, completa ambos campos.');
    }
});

// Función para cancelar
document.getElementById('cancelBtn').addEventListener('click', function() {
    // Limpiar los campos de entrada
    document.getElementById('userName').value = '';
    document.getElementById('userMessage').value = '';

    // Ocultar la vista previa
    document.getElementById('preview').style.display = 'none';

    // Limpiar selección de avatar
    const avatars = document.querySelectorAll('.avatar-selection img');
    avatars.forEach(avatar => {
        avatar.style.border = 'none'; // Eliminar contorno
    });
});
