const gifs = [
    'https://cades-archive1.neocities.org/Assets/Food/giphy%20(40).gif',
    'https://cades-archive1.neocities.org/Assets/Food/giphy%20(38).gif',
    'https://cades-archive1.neocities.org/Assets/Food/giphy%20(38)%20(2).gif',
    'https://cades-archive1.neocities.org/Assets/Food/giphy%20(35).gif',
    'https://cades-archive1.neocities.org/Assets/Food/giphy%20(18)%20(2).gif',
    'https://cades-archive1.neocities.org/Assets/Food/giphy%20(1)%20(2).gif',
    'https://cades-archive1.neocities.org/Assets/Food/giphy%20(2)%20(1).gif',
    'https://i.redd.it/0dolvq8uts181.gif',
    'https://i.redd.it/h6yfu3guts181.gif',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXBjbTBxdWtmZmJ1Nm9vcmlmc2FmYWc4bm9waXpsb2p1N3d2eGgzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/73qVuimQcAk8WMV3A7/giphy.webp',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnpsdmpvMHBpODhvaGE2NHZqZmdreTV4OWtiY3N4d2R4b2cxOXBodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mTMmHn7VX3XvMeUADM/giphy.webp',
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamwzZWlrNnRzNmdtdmV5M21xd3d6aXNoOGQyZHU5ZXRqMTF5YzNzZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LdlnJB7K6dXCqKuwNf/giphy.webp',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2J2bG1nb2wzZW5pcWRvdzBjcWVxZzJ5Y3lnczdpaHBkOXZ4aDh4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c3lYMOKCkOrK3SOpzL/giphy.webp',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGY1MHFkM2NnMnYzcGFmMDMzbTN1N3Z2bGxsenU5amU5YmRyMW81NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AqnpTELxKDYl1IwcuB/giphy.webp'
];

function getRandomGif() {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    return gifs[randomIndex];
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomGifAndColor() {
    const gifElement = document.getElementById('gif');
    gifElement.src = getRandomGif();
    document.body.style.backgroundColor = getRandomColor();
}

setRandomGifAndColor();
