import { getRandomColor } from './utils.js';

export default function initApp() {
    const buttonHTML = document.createElement('button');
    buttonHTML.className = 'button';
    buttonHTML.textContent = 'Изменить цвет страницы';
    document.body.appendChild(buttonHTML);

    buttonHTML.addEventListener('click', function () {
        const randomColor = getRandomColor()
        document.body.style.backgroundColor = randomColor;
    });
}