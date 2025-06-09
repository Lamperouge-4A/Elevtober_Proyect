console.log('Hola');

const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('toggleSidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Opcional: Cambia el ícono del botón al abrir/cerrar
toggleBtn.addEventListener('click', () => {
    const icon = toggleBtn.querySelector('i');
    if (sidebar.classList.contains('open')) {
        icon.classList.replace('bx-menu', 'bx-x');
    } else {
        icon.classList.replace('bx-x', 'bx-menu');
    }
});