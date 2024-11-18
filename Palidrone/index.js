
const inputEle = document.getElementById("text-input");

const checkBtn = document.getElementById("check-btn")

const resultEle = document.getElementById("result")



inputEle.addEventListener("input", updateValue);
checkBtn.addEventListener("click", handleCheckBtn)

function updateValue(e) {
    console.log(e.target.value)
}

function handleCheckBtn() {

    const inputValue = inputEle.value;

    if (inputValue.length > 0) {

        const palidroneBoolValue = isPalidrone(inputValue);

        if (palidroneBoolValue) {
            resultEle.innerHTML = `${inputValue} is a Palidrone`
        }
        else {
            resultEle.innerHTML = `${inputValue} is not a Palidrone`
        }
    }
    else {
        alert("Please input a value");

    }
}


function isPalidrone(inputText) {

    let reversedStr = "";

    for (let i = inputText.length - 1; i >= 0; i--) {
        reversedStr += inputText[i]
    }

    if (reversedStr.toLocaleLowerCase() == inputText.toLocaleLowerCase()) {
        return true
    }

    return false

};