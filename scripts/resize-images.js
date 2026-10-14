// Builds the resized images in static/ from the originals in images-src/.
// Run inside the dev container (it has sharp): make images
const sharp = require('sharp')

const jobs = [
  // About page photo (pages/about.vue)
  { src: 'images-src/trfhi.jpg', out: 'static/trfhi-640.webp', resize: { width: 640 }, quality: 78 },
  { src: 'images-src/trfhi.jpg', out: 'static/trfhi-1024.webp', resize: { width: 1024 }, quality: 78 },
  // Header logo, ~2x its largest displayed height (components/UI/Navigation.vue)
  { src: 'images-src/logo_blue.png', out: 'static/logo_blue.webp', resize: { height: 120 }, quality: 90 },
]

Promise.all(
  jobs.map(({ src, out, resize, quality }) =>
    sharp(src)
      .resize(resize)
      .webp({ quality })
      .toFile(out)
      .then((info) => console.log(`${out}: ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`))
  )
).catch((err) => {
  console.error(err)
  process.exit(1)
})
