var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

// console.log(random);

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + " ," + color2.value + ")";

    css.textContent = body.style.background + ";"
}

//**This generates a random colour code */
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

//**This uses generateRandomColor and assigns new values to color1 and color2 values, and then applies those changes to background style.  */
function randomColor() {
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    body.style.background = "linear-gradient(to right, " + color1.value + " ," + color2.value + ")";

}


color1.addEventListener("input", setGradient,)


color2.addEventListener("input", setGradient,)

random.addEventListener("click", randomColor,)
