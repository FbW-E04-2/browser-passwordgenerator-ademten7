const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
charsetArray = [...charset];
console.log(charsetArray);

//to show password
let p = document.createElement("p");
p.style.cssText = "padding:10px;text-align:center; margin-top:2em;font-size:20px"
p.classList.add("para");

//add the password to DOM tree
let div = document.querySelector(".container");
div.insertBefore(p, div.firstElementChild)

//to generate random index number
const randomNumberGenerator = () => {
    let randomNumber = Math.floor(Math.random() * charsetArray.length);
    return randomNumber;
}

//input box
let input = document.querySelector("input");





//Generate the first password as soon as the page is loaded, using a default length of 20.
input.value = 20;

//generate password function if the check box is checked
const generatePasswordForCheckedBox = () => {
    let str = "";

    for (let i = 0; i < Number(input.value); i++) {

        if (i % 3 === 0) {
            str += charsetArray[randomNumberGenerator()].toUpperCase();
        } else {
            str += charsetArray[randomNumberGenerator()];
        }

    }
    return str;

}

//generate password function if the check box is  not checked
const generatePasswordForUnCheckedBox = () => {
    let str = "";

    for (let i = 0; i < Number(input.value); i++) {

        str += charsetArray[randomNumberGenerator()]
    }
    return str;

}


//generate a default password
const defaultPassword = () => {

    return generatePasswordForCheckedBox();


}


p.innerText = defaultPassword();

let button = document.querySelector(".btn-success");
let checkBox = document.querySelector(".form-check-input");

button.addEventListener("click", (e) => {

    if (checkBox.checked === true) {
        p.innerText = generatePasswordForCheckedBox();

    } else {
        p.innerText = generatePasswordForUnCheckedBox();
    }

})

input.addEventListener("focus", () => {
    input.style.backgroundColor = "yellow"
    input.style.color = "black"
})
input.addEventListener("focusout", () => {
    input.style.backgroundColor = "rgb(110, 107, 107)"
    input.style.color = "skyblue";

})