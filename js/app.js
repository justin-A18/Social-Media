const $body = document.querySelector("body");
const $cards = document.querySelectorAll(".card");
const $header = document.querySelector(".header");
const $checkbox = document.getElementById("switch");
const $modo = document.querySelector(".toggle-mode");
const $tarjetas = document.querySelectorAll(".tajeta");
const $numbers = document.querySelectorAll(".numbers");
const $user = document.querySelectorAll(".header-user");
const $titleDark = document.querySelector(".title-dark");
const $infoTitle = document.querySelector(".info-title");
const $follow = document.querySelectorAll(".body-follow");
const $ConCards = document.querySelector(".container__cards");
const $infoFollower = document.querySelector(".info-followers");
const $tarjetaTitle = document.querySelectorAll(".tarjeta-title");


$checkbox.addEventListener("click", () => {

    if($checkbox.checked){
        $modo.innerHTML = "Light Mode";
    }else{
        $modo.innerHTML = "Dark Mode";
    }

    $infoTitle.classList.toggle("dark");
    $body.classList.toggle("body-light");
    $ConCards.classList.toggle("bg-dark");
    $titleDark.classList.toggle("dark-h2");
    $header.classList.toggle("header-light");
    $infoFollower.classList.toggle("dark-h2");

    $cards.forEach(e => {
        e.classList.toggle("bg-dark-card");
    });

    $numbers.forEach(e => {
        e.classList.toggle("dark");
    })

    $tarjetas.forEach(e => {
        e.classList.toggle("bg-dark-card");
    });

    $user.forEach(e => {
        e.classList.toggle("dark-h2");
    });

    $follow.forEach(e => {
        e.classList.toggle("dark-h2")
    });

    $tarjetaTitle.forEach(e => {
        e.classList.toggle("dark-h2")
    });
});


