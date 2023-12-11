const imageNames = [
    "2019-11-a",
    "IMG-20220130-WA0004_Original",
    "IMG-20220220-WA0009_Original",
    "Facetune_08-07-2023-01-46-39",
    "IMG-20220101-WA0039_Original",
    "Vó",
    "2019-11-27_160323as",
    "2019-11-12_1654441",
    "2019-11-27_1605562"
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
