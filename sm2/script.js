"use strict:";

let name = prompt("Как тебя зовут?");

let age = prompt("Сколько тебе лет?");

alert(age < 20 ? "Тебе меньше 20" : "Привет".repeat(5));

let isLearningJs = confirm("Хочешь учить JS?");

if (isLearningJs) {
    alert("Супер!");
}
