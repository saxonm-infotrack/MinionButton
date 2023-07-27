const buttonElement = document.getElementById('Minion-Button');
const minionImg = document.getElementById("Minion-img");


const toggleImgElement = (minionImgToToggle) => {
    if (minionImgToToggle.style.display === 'none') {
        minionImgToToggle.style.display = 'block';
        document.getElementById("Minion-img").src = getRandomMinion()
    } else {
        minionImgToToggle.style.display = 'none';
    }
}

const createMinionImg = () => {
    const newMinionImg = document.createElement("img");
    newMinionImg.setAttribute('height', '100px');
    newMinionImg.setAttribute('width', '100px');
    newMinionImg.src = getRandomMinion();
    document.getElementById("div").appendChild(newMinionImg)
}


 const minionURL = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHG5TO-yM75v31thy5BH9R2QLAQfOvqdIxQzSScKrgLNrvBoOh9zdoJXbLGmntefVoYvQ&usqp=CAU",
                 "https://w7.pngwing.com/pngs/474/713/png-transparent-youtube-minions-despicable-me-dave-the-minion-youtube-desktop-wallpaper-despicable-me-dave-the-minion.png",
                  "https://i.etsystatic.com/14582438/r/il/a08fac/1568698361/il_1080xN.1568698361_4dbn.jpg"]

getRandomMinion = () => {
    const randomNumber = Math.floor(Math.random() * minionURL.length);
    return minionURL[randomNumber];
}

let clickTracker = 0;

buttonElement.addEventListener('click', () => {
      if (clickTracker <= 5) {
        clickTracker++;
        createMinionImg();
      } else {
        for (i = 0; i = 2; i++) {
            i = 0;
        }
      }
}) 
