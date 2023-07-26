const buttonElement = document.getElementById('Minion-Button');
const imgElement = document.getElementById('Minion-img');

const toggleImgElement = (minionImg) => {
    if (minionImg.style.display === 'none') {
        minionImg.style.display = 'block';
    } else {
        minionImg.style.display = 'none';
    }
}

buttonElement.addEventListener('click', () => {
    toggleImgElement(imgElement);
})