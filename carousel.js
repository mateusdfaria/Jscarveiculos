function showImage(index) {
    const images = document.querySelectorAll('.carousel-images .car-image');
    const buttons = document.querySelectorAll('.image-buttons button');
    
    images.forEach((img, i) => {
        img.classList.remove('active');
        buttons[i].classList.remove('active');
        if (i === index - 1) {
            img.classList.add('active');
            buttons[i].classList.add('active');
        }
    });
}

// Inicializar a primeira imagem e botão como ativos
showImage(1);
