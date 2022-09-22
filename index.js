let colorOpts =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const currentClr = document.querySelector('#currentClr');

function setClr() {
    let newColor = generateHex();
    currentClr.innerText = newColor;
    currentClr.style.color = newColor;
    const body = document.body.style.backgroundColor = newColor;
}

function generateHex() {
    let color = "#";
    for(let i = 1; i <= 6; i++)
    {
        color += colorOpts[generateRandomNum()];
    }
    console.log(color)
    return color;
}

function generateRandomNum() {
    let num = Math.floor(Math.random() * 15) + 1;
    return num;
}

function copyClr() {
    let colorHex = currentClr.innerText;
    let tempText = document.createElement('textarea');
    tempText.value = colorHex;
    tempText.setAttribute('readonly', '');
    document.body.appendChild(tempText);
    tempText.select();
    document.execCommand('copy');
    tempText.remove();
    const alert = document.createElement('span');
    alert.classList.add('alert');
    alert.textContent = `Copied ${colorHex}`;
    const container = document.querySelector('.main-div');
    container.insertAdjacentElement('afterbegin', alert);
    setTimeout(function(){alert.remove()}, 750);
}