document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('image-input');
    const addImageBtn = document.getElementById('add-image-btn');
    const galleryContainer = document.getElementById('gallery-container');
    const message = document.createElement('div');
    message.id = 'message';
    document.body.appendChild(message);

    function displayMessage(text) {
        message.textContent = text;
        message.style.display = 'block';
        message.style.opacity = '1';
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.style.display = 'none';
            }, 500);
        }, 2000);
    }

    addImageBtn.addEventListener('click', () => {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');

                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Gallery Image';

                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.classList.add('remove-image-btn');
                removeBtn.addEventListener('click', () => {
                    galleryContainer.removeChild(galleryItem);
                    displayMessage('Image removed successfully!');
                });

                galleryItem.appendChild(img);
                galleryItem.appendChild(removeBtn);
                galleryContainer.appendChild(galleryItem);
                imageInput.value = '';
                displayMessage('Image added successfully!');
            };
            reader.readAsDataURL(file);
        }
    });

    galleryContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-image-btn')) {
            const galleryItem = e.target.parentElement;
            galleryContainer.removeChild(galleryItem);
            displayMessage('Image removed successfully!');
        }
    });
});
