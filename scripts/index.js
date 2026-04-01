document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile a');

    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const figure = link.querySelector('figure');
            const img = figure.querySelector('img');
            const caption = figure.querySelector('figcaption');

            const perfilNome = caption.textContent;
            const perfilImagem = img.getAttribute('src');

            localStorage.setItem('perfilAtivoNome', perfilNome);
            localStorage.setItem('perfilAtivoImagem', perfilImagem);
        });
    });
});
