/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function pathUrl(urlTarget, urlDestination) {
  const targetLocation = path.resolve(__dirname, urlTarget);
  const destinationLocation = path.resolve(__dirname, urlDestination);

  if (!fs.existsSync(destinationLocation)) {
    fs.mkdirSync(destinationLocation, { recursive: true });
  }
  return { targetLocation, destinationLocation };
}

function imageResponsive(target, destination, format) {
  console.log(target);
  fs.readdirSync(target)
    .forEach((image) => {
      sharp(`${target}/${image}`)
        .resize(800)
        .toFile(path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}_large.${format}`,
        ));

      sharp(`${target}/${image}`)
        .resize(360)
        .toFile(path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}_small.${format}`,
        ));
    });
}

function main() {
  let pathImageRes = pathUrl('src/public/heros', 'dist/public/heros');
  imageResponsive(pathImageRes.targetLocation, pathImageRes.destinationLocation, 'jpg');

  pathImageRes = pathUrl('src/public/heros', 'dist/public/heros');
  imageResponsive(pathImageRes.targetLocation, pathImageRes.destinationLocation, 'webp');
}

main();
