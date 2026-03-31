document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verificar preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const isLight = body.classList.contains('light-mode');
            // Salvar preferência
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    const profileLinks = document.querySelectorAll('.profiles a');

    profileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const profile = link.closest('.profile');
            const profileName = profile?.querySelector('figcaption')?.textContent?.trim() || '';
            const profileImage = profile?.querySelector('img')?.src || '';

            localStorage.setItem('perfilAtivoNome', profileName);
            localStorage.setItem('perfilAtivoImagem', profileImage);
        });
    });
});
