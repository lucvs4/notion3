const imageNames = [
    "2019-11-a",
    "IMG-20220130-WA0004_Original",
    "IMG-20220220-WA0009_Original",
    "Facetune_08-07-2023-01-46-39",
    "IMG-20220101-WA0039_Original",
    "IMG_0131",
    "Facetune_28-09-2022-16-06-08",
    "Facetune_29-12-2022-00-39-49",
    "IMG-20210801-WA0020_Original",
    "IMG-20200222-WA0109_Original",
    "IMG-20180304-WA0094_Original",
    "IMG_-1ovicb_Original",
    "Imagem 095",
    "IMG-20171024-WA0024",
    "29314237_1145621202247704_3377092730324114384_n",
    "2019-11-27_160323",
    "2019-11-12_170822",
    "213",
    "141",
    "2019-11-12_165444",
    "2019-11-27_160556",
    "2019-11-27_160944",
    "2019-11-27_161909",
    "2019-11-27_162129",
    "5112",
    "5114",
    "5115",
    "13413553_1010310179064163_6675673916627367885_n",
    "aad",
    "CIMG1084 (1)",
    "DSC02087",
    "DSC02211",
    "DSC04042",
    "DSC04059",
    "DSC04202",
    "DSC04344",
    "Eu",
    "Família Prado (2008)2",
    "fasf",
    "Foto-0020",
    "Imagem 173",
    "Imagem 224",
    "Imagem 361",
    "IMG_20190107_151449_080",
    "IMG-20150323-WA0035",
    "IMG-20141024-WA0239 (1)",
    "IMG-20181208-WA0001",
    "jhsd",
    "Mãe",
    "Pai, Gabi e Mãe",
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

// Troca a imagem a cada 10seg
setInterval(displayRandomImage, 10000);

// Inicializa com uma imagem aleatória
displayRandomImage();
