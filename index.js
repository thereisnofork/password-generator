const passEl = document.getElementById("pass");
const clipboardEl = document.getElementById("clipboard");
const passLentEl = document.getElementById("passLent");
const uppercaseEl = document.getElementById("uppercase");
const lowecaseEl = document.getElementById("lowecase");
const numberEl = document.getElementById("number");
const symbolsEl = document.getElementById("symbols");
const GenerateEl = document.getElementById("Generate");

const textForSave = "";

let len = passLentEl.value;
passLentEl.addEventListener("input", (e) => {
  len = passLentEl.value;
});

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymbol() {
  const symbols = "!?@#$%&*{}[]()<>-+*/.";
  return symbols[Math.floor(Math.random() * 21)];
}

GenerateEl.addEventListener("click", () => {
  const createdPass = writePasswords(
    uppercaseEl.checked,
    lowecaseEl.checked,
    numberEl.checked,
    symbolsEl.checked
  );

  passEl.innerText = createdPass.join("");
});

clipboardEl.addEventListener("click", () => {
  copyToClipboard(passEl.innerText);
});

function writePasswords(
  uppercaseCheck,
  lowecaseCheck,
  numberCheck,
  symbolsCheck
) {
  let mixedPass = [];
  let i = 0;

  if (!uppercaseCheck & !lowecaseCheck & !numberCheck & !symbolsCheck) {
    alert("please choose you'r options");
    return;
  }

  while (i < len) {
    let n = Math.floor(Math.random() * 4);

    switch (n) {
      case 0:
        if (uppercaseCheck == false) {
          break;
        }
        mixedPass.push(randomUpper());
        i++;
        break;

      case 1:
        if (lowecaseCheck == false) {
          break;
        }
        mixedPass.push(randomLower());
        i++;
        break;

      case 2:
        if (numberCheck == false) {
          break;
        }
        mixedPass.push(randomNumber());
        i++;
        break;

      case 3:
        if (symbolsCheck == false) {
          break;
        }
        mixedPass.push(randomSymbol());
        i++;
        break;
    }
  }
  return mixedPass;
}

function copyToClipboard(text) {
  const elem = document.createElement("textarea");
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}
