let currentIndex = 0;
let score = 0;

const photo = [
    {real: "img/real_1.png", ai:"img/ai_1.png"},
    {real: "img/hamster2.jpg", ai:"img/hamster1.jpg"},
    {real: "img/4.png", ai:"img/3.png"},
    {real: "img/6.png", ai:"img/5.png"},
    {real: "img/8.png", ai:"img/7.png"},
    {real: "img/10.png", ai:"img/9.png"},
    {real: "img/12.png", ai:"img/11.png"},
    {real: "img/14.png", ai:"img/13.png"},
    {real: "img/16.png", ai:"img/15.png"},
    {real: "img/18.png", ai:"img/17.png"},
    {real: "img/20.png", ai:"img/19.png"},
    {real: "img/22.png", ai:"img/21.png"},
    {real: "img/24.png", ai:"img/23.png"},
    {real: "img/26.png", ai:"img/25.png"},
    {real: "img/28.png", ai:"img/27.png"},
    {real: "img/30.png", ai:"img/29.png"},
    {real: "img/32.png", ai:"img/31.png"},
    {real: "img/34.png", ai:"img/33.png"},
    {real: "img/36.png", ai:"img/35.png"},
    {real: "img/38.png", ai:"img/37.png"}
]

window.addEventListener("DOMContentLoaded", () => {
    displayImages(currentIndex);
});

function displayImages(index) {
    const containerImage = document.getElementById("game-wrapper");
    containerImage.innerHTML = '';
    const current = photo[index];

        // Si on a terminé le tableau
    if (index >= photo.length) {
        showResult();
        return;
    }

    const images = [
        {src: current.real, isReal:true},
        {src: current.ai, isReal:false}
    ];

    images.sort(() => Math.random() -0.5);

    images.forEach((imgData, index, array) => {
        const img = document.createElement('img');
        img.src = imgData.src;
        img.dataset.real = imgData.isReal; // utile pour savoir si l'utilisateur a cliqué sur la bonne
        img.classList.add('game-image');

        const scoreDisplay = document.createElement("p");

        img.addEventListener('click', handleImageClick);
        containerImage.appendChild(img);

    });
}

function showResult(){
    const containerScore = document.getElementById("score");
    const displayScore = document.createElement('p');
    const facebook = document.createElement('a');

    facebook.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.looktwicegame.com");
    facebook.textContent = "Partager sur Facebook";
    facebook.classList.add("fb-button");
    displayScore.textContent = "Your score is " + score + "/20";

    containerScore.appendChild(displayScore);
    containerScore.appendChild(facebook);
}

function handleImageClick(event) {
    const isReal = event.target.dataset.real === 'true';
    const response = document.getElementById("response");
    response.innerHTML = '';


    if (isReal === true) {
        const real = document.createElement("p"); 
        const buttonnext = document.createElement("button");

        real.textContent = "This is a real image, nice one buddy";
        buttonnext.textContent = "Next image";

        response.appendChild(real);
        response.appendChild(buttonnext);

        buttonnext.addEventListener("click", () => {
            currentIndex++;
            score++;
            displayImages(currentIndex);
            response.innerHTML = '';
            console.log(score);
        });
    }
    else {
        const ai = document.createElement("p");
        const buttonnext = document.createElement("button");

        ai.textContent = "Ah ah ah, got you ! This is AI image."
        buttonnext.textContent = "Next image";

        response.appendChild(ai);
        response.appendChild(buttonnext);

       buttonnext.addEventListener("click", () => {
            currentIndex++;
            displayImages(currentIndex);
            response.innerHTML = '';
            console.log(score);
        });

    }
}