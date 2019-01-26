// '../assets/MinisClassicBen.jpg',
// '../assets/MinisClassicEmily.jpg',
// '../assets/MinisClassicFerdinand.jpg',
// '../assets/MinisClassicHenry.png',
// '../assets/MinisClassicHiro.jpg',
// '../assets/MinisClassicJames.jpg',
// '../assets/MinisClassicThomas.png',
// '../assets/MinisClassicToby.jpg',
// '../assets/PrototypeDuck.jpg',
export const IMAGES = [
    '../assets/thomas.jpg',
    '../assets/thomas.jpg',
    '../assets/thomas.jpg',
    '../assets/thomas.png',
    '../assets/thomas.jpg',
    '../assets/thomas.jpg',
    '../assets/thomas.png',
    '../assets/thomas.jpg',
    '../assets/thomas.jpg',
];


export const getShuffleImages = (loadedUrls) => {
    const copy = [].concat(loadedUrls).concat(loadedUrls);
    const result = [];
    while (copy.length > 0) {
        const randonIndex = Math.round(Math.random()*copy.length);
        result.push( copy.splice(randonIndex,1)[0]);
    }
    return result;
}

