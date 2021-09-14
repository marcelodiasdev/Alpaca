const AvatarGenerator = require('avatar-generator')
const avatar = new AvatarGenerator({
    parts: ['background', 'face', 'clothes', 'head', 'hair', 'eye', 'mouth'], //order in which sprites should be combined
    partsLocation: path.join(__dirname, '../img'), // path to sprites
    imageExtension: '.png' // sprite file extension
})
const variant = 'female' // By default 'male' and 'female' supported
const image = await avatar.generate('email@example.com', variant)
// Now `image` contains sharp image pipeline http://sharp.pixelplumbing.com/en/stable/api-output/
// you can write it to file
image
    .png()
    .toFile('output.png')
// or write to stream
image
    .png()
    .pipe(someWriteableStream)
// or reszie
image
    .resize(300,300)
    .png()
    .toFile('output300x300.png')
// or use different format
image
    .webp()
    .toFile('output.webp')