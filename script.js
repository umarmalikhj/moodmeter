"use strict";
console.log("DOM Connected");
const moods = {
    Happy: {
        text: "Happy",
        color: "Yellow"
    },
    Sad: {
        text: "Sad",
        color: "Grey"
    },
    Angry: {
        text: "Angry",
        color: "Red"
    },
    Excited: {
        text: "Excited",
        color: "Gold"
    },
    Calm: {
        text: "Calm",
        color: "LightBlue"
    },
    Bored: {
        text: "Bored",
        color: "LightGrey"
    },
    Tired: {
        text: "Tired",
        color: "LightPink"
    },
    Motivated: {
        text: "Motivated",
        color: "LightGreen"
    },

};

function updateMood(type) {
    const selectedMood = moods[type];
    mood.innerText = selectedMood.text;
    document.body.style.backgroundColor = selectedMood.color;
    mood.style.transition = "0.75s";
    document.body.style.transition = "0.75s";
}

happy.addEventListener("click", function () {
    updateMood("Happy");
});

sad.addEventListener("click", function () {
    updateMood("Sad");
});

angry.addEventListener("click", function () {
    updateMood("Angry");
});
excited.addEventListener("click", function () {
    updateMood("Excited");
});

calm.addEventListener("click", function () {
    updateMood("Calm");
});

bored.addEventListener("click", function () {
    updateMood("Bored");
});

tired.addEventListener("click", function () {
    updateMood("Tired");
});

motivated.addEventListener("click", function () {
    updateMood("Motivated");
});