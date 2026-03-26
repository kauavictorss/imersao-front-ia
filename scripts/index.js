const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Verificar preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    // Salvar preferência
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
