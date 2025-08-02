const sharp = require('sharp');
const fs = require('fs'); 
const path = require('path');



const inputFolder = path.join(__dirname,'originals');
const outputFolder = path.join(__dirname, '../frontend/public/images/carousel');

console.log('Input folder:', inputFolder);
console.log('Output folder:', outputFolder);
if (!fs.existsSync(outputFolder)) { 

    fs.mkdirSync(outputFolder, { recursive : true});
}

fs.readdirSync(inputFolder).forEach(file => {
    sharp(path.join(inputFolder, file))
        .resize(1280)
        .webp({ quality: 75 })
        .toFile(path.join(outputFolder, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')))
        .then(() => console.log(`${file} optimisé et converti en WebP`))
        .catch(error => console.error(`Erreur lors de l'optimisation de ${file}:`, error));
});