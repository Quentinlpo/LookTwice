let currentIndex = 0;
let score = 0;

const photo = [
    {real: "img/real_1.webp", ai:"img/ai_1.webp"},
    {real: "img/hamster2.webp", ai:"img/hamster1.webp"},
    {real: "img/4.webp", ai:"img/3.webp"},
    {real: "img/6.webp", ai:"img/5.webp"},
    {real: "img/8.webp", ai:"img/7.webp"},
    {real: "img/10.webp", ai:"img/9.webp"},
    {real: "img/12.webp", ai:"img/11.webp"},
    {real: "img/14.webp", ai:"img/13.webp"},
    {real: "img/16.webp", ai:"img/15.webp"},
    {real: "img/18.webp", ai:"img/17.webp"},
    {real: "img/20.webp", ai:"img/19.webp"},
    {real: "img/22.webp", ai:"img/21.webp"},
    {real: "img/24.webp", ai:"img/23.webp"},
    {real: "img/26.webp", ai:"img/25.webp"},
    {real: "img/28.webp", ai:"img/27.webp"},
    {real: "img/30.webp", ai:"img/29.webp"},
    {real: "img/32.webp", ai:"img/31.webp"},
    {real: "img/34.webp", ai:"img/33.webp"},
    {real: "img/36.webp", ai:"img/35.webp"},
    {real: "img/38.webp", ai:"img/37.webp"}
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