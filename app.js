
let myInput = document.querySelector("#myInput");
let screenParagraph = document.querySelector("#myPara");
let form = document.querySelector("#weatherForm")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let temp = Number(myInput.value);

    let condition = temp > 25;



    if (condition) {
        screenParagraph.innerText = "Garmi";

        console.log("garmi");
    } else {
        screenParagraph.innerText = "Sardi";

        console.log("sardi");
    }


});

