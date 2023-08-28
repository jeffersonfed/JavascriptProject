// random number generator
function generateRandomNumber() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max)) {
        document.getElementById("result").textContent = "Invalid input";
    } else if (min >= max) {
        document.getElementById("result").textContent = "Min must be less than max";
    } else {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("result").textContent = randomNumber;
    }
}

// color generator
function generateColor() {
    const randomColor = getRandomColor();
    document.getElementById("colorBox").style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let count = 0;
const valueElement = document.getElementById("value");

function updateValue() {
    valueElement.textContent = count;
}

function increment() {
    count++;
    updateValue();
}

function decrement() {
    count--;
    updateValue();
}

updateValue(); // Initialize with initial value