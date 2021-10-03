const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
charsetArray = [...charset];
console.log(charsetArray);

//to show password
let p = document.createElement("p");
p.style.cssText = "padding:10px;text-align:center; margin-top:2em;font-size:40px"
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
let showPass = document.querySelector(".show-password");


//generate a default password
const defaultPassword = () => {

    return generatePasswordForCheckedBox();


}


p.innerText = defaultPassword();
//to keep actuall password in temp variable
let openPass = p.innerText;







let button = document.querySelector(".btn-success");
let checkBox = document.querySelector(".form-check-input");

button.addEventListener("click", (e) => {
    if (showPass.checked) {
        if (checkBox.checked === true) {
            p.innerText = generatePasswordForCheckedBox();


        } else {
            p.innerText = generatePasswordForUnCheckedBox();

        }
    } else {
        if (checkBox.checked === true) {
            p.innerText = generatePasswordForCheckedBox();
            p.innerText = "*".repeat(p.innerText.length);

        } else {
            p.innerText = generatePasswordForUnCheckedBox();
            p.innerText = "*".repeat(p.innerText.length);
        }

    }



})

input.addEventListener("focus", () => {
    input.style.backgroundColor = "skyblue"
    input.style.color = "black"
})
input.addEventListener("focusout", () => {
    input.style.backgroundColor = "rgb(110, 107, 107)"
    input.style.color = "skyblue";

})


//to hide  and show the password

showPass.addEventListener("click", (e) => {
    
    // there is a two same click event. 
    //to prevent the bubbling.
    e.stopPropagation()
    showPass.classList.toggle("show-and-hide");
    if (showPass.classList.contains("show-and-hide")) {
        p.innerText = openPass
    } else {
        p.innerText = openPass
        p.innerText = "*".repeat(p.innerText.length);
    }
});



