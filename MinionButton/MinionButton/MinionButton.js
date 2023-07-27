const buttonElement = document.getElementById('Minion-Button');
const minionImg = document.getElementsByClassName("Minion-img");


const toggleImgElement = (minionImgToToggle) => {
    if (minionImgToToggle.style.display === 'none') {
        minionImgToToggle.style.display = 'block';
    } else {
        minionImgToToggle.style.display = 'none';
    }
}

const minions = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHG5TO-yM75v31thy5BH9R2QLAQfOvqdIxQzSScKrgLNrvBoOh9zdoJXbLGmntefVoYvQ&usqp=CAU",
                 "https://static.wikia.nocookie.net/mycun-the-movie/images/f/fc/Dave_the_Minion.png/revision/latest?cb=20141115203113",
                  "https://i.etsystatic.com/14582438/r/il/a08fac/1568698361/il_1080xN.1568698361_4dbn.jpg"]

getRandomMinion = () => {
    const randomNumber = Math.floor(Math.random() * minions.length);
    return minions[randomNumber];
}


buttonElement.addEventListener('click', () => {
    toggleImgElement(minionImg);
})