const imageNames = [
    "2019-11-a",
    "IMG-20220130-WA0004_Original",
    "Facetune_28-09-2022-16-06-08"
];

const baseUrl = "https://github.com/lucvs4/fotos/blob/main/";

const images = imageNames.map(name => `${baseUrl}${name}.jpg?raw=true`);

function displayRandomImage() {
    const gallery = document.getElementById('photo-gallery');
    const randomIndex = Math.floor(Math.random() * images.length);
    gallery.style.backgroundImage = `url('${images[randomIndex]}')`;
}

// Troca a imagem a cada 30seg
setInterval(displayRandomImage, 100);

// Inicializa com uma imagem aleatória
displayRandomImage();
