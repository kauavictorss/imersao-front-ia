document.addEventListener('DOMContentLoaded', () => {
    const profilesList = document.getElementById('profiles-list');
    const btnManage = document.getElementById('btn-manage');
    const profileModal = document.getElementById('profile-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalProfileImg = document.getElementById('modal-profile-img');
    const modalProfileName = document.getElementById('modal-profile-name');
    const btnSaveProfile = document.getElementById('btn-save-profile');
    const btnCancelModal = document.getElementById('btn-cancel-modal');
    const btnDeleteProfile = document.getElementById('btn-delete-profile');
    const imgOptions = document.querySelectorAll('.img-option');

    let profiles = JSON.parse(localStorage.getItem('netflix_profiles')) || [
        { id: Date.now() + 1, name: 'Kauã', image: 'assets/perfil-2.png' },
        { id: Date.now() + 2, name: 'Gisele', image: 'assets/perfil-3.png' },
        { id: Date.now() + 3, name: 'Giovana', image: 'assets/perfil-4.png' }
    ];

    let isManageMode = false;
    let currentEditingId = null;
    let selectedImage = 'assets/perfil-1.png';

    function saveToStorage() {
        localStorage.setItem('netflix_profiles', JSON.stringify(profiles));
    }

    function renderProfiles() {
        profilesList.innerHTML = '';
        
        profiles.forEach(profile => {
            const li = document.createElement('li');
            li.className = `profile ${isManageMode ? 'manage-mode' : ''}`;
            
            li.innerHTML = `
                <a href="${isManageMode ? '#' : 'catalogo/catalogo.html'}" data-id="${profile.id}">
                    <figure style="position: relative;">
                        <img src="${profile.image}" alt="Perfil do ${profile.name}">
                        ${isManageMode ? '<div class="edit-overlay"><i class="fas fa-pencil-alt"></i></div>' : ''}
                        <figcaption>${profile.name}</figcaption>
                    </figure>
                </a>
            `;

            li.querySelector('a').addEventListener('click', (e) => {
                if (isManageMode) {
                    e.preventDefault();
                    openModal('edit', profile.id);
                } else {
                    localStorage.setItem('perfilAtivoNome', profile.name);
                    localStorage.setItem('perfilAtivoImagem', profile.image);
                }
            });

            profilesList.appendChild(li);
        });

        if (profiles.length < 5) {
            const addLi = document.createElement('li');
            addLi.className = 'profile';
            addLi.innerHTML = `
                <div class="profile-add">
                    <div class="add-icon-container">
                        <i class="fas fa-plus-circle"></i>
                    </div>
                    <figcaption>Adicionar perfil</figcaption>
                </div>
            `;
            addLi.addEventListener('click', () => openModal('add'));
            profilesList.appendChild(addLi);
        }
    }

    function openModal(mode, id = null) {
        currentEditingId = id;
        if (mode === 'edit') {
            const profile = profiles.find(p => p.id === id);
            modalTitle.textContent = 'Editar perfil';
            modalProfileName.value = profile.name;
            selectedImage = profile.image;
            btnDeleteProfile.style.display = 'block';
        } else {
            modalTitle.textContent = 'Adicionar perfil';
            modalProfileName.value = '';
            selectedImage = 'assets/perfil-1.png';
            btnDeleteProfile.style.display = 'none';
        }
        
        updateModalImage(selectedImage);
        profileModal.style.display = 'flex';
    }

    function updateModalImage(src) {
        selectedImage = src;
        modalProfileImg.src = src;
        imgOptions.forEach(opt => {
            opt.classList.toggle('selected', opt.getAttribute('data-img') === src);
        });
    }

    imgOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            updateModalImage(opt.getAttribute('data-img'));
        });
    });

    btnSaveProfile.addEventListener('click', () => {
        const name = modalProfileName.value.trim();
        if (!name) return alert('Por favor, insira um nome.');

        if (currentEditingId) {
            const index = profiles.findIndex(p => p.id === currentEditingId);
            profiles[index].name = name;
            profiles[index].image = selectedImage;
        } else {
            profiles.push({
                id: Date.now(),
                name: name,
                image: selectedImage
            });
        }

        saveToStorage();
        renderProfiles();
        profileModal.style.display = 'none';
    });

    btnDeleteProfile.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja excluir este perfil?')) {
            profiles = profiles.filter(p => p.id !== currentEditingId);
            saveToStorage();
            renderProfiles();
            profileModal.style.display = 'none';
        }
    });

    btnCancelModal.addEventListener('click', () => {
        profileModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === profileModal) {
            profileModal.style.display = 'none';
        }
    });

    btnManage.addEventListener('click', () => {
        isManageMode = !isManageMode;
        btnManage.textContent = isManageMode ? 'Concluído' : 'Gerenciar perfis';
        btnManage.classList.toggle('btn-primary', isManageMode);
        btnManage.classList.toggle('btn-secondary', !isManageMode);
        renderProfiles();
    });

    // Initial render
    if (window.location.hash === '#manage') {
        isManageMode = true;
        btnManage.textContent = 'Concluído';
        btnManage.classList.add('btn-primary');
        btnManage.classList.remove('btn-secondary');
        window.location.hash = ''; // Clean up hash
    }
    renderProfiles();
});
