import confetti from "canvas-confetti"

export class MainController {
    constructor() {

    }

    render() {
        const mainController = document.getElementById('main-container');

        const button1 = document.createElement('button');
        button1.appendChild(document.createTextNode('fire1'));
        button1.addEventListener('click', () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: {y: 0.6}
            })
        });
        mainController.appendChild(button1);

        const button2 = document.createElement('button');
        button2.appendChild(document.createTextNode('fire2'));
        button2.addEventListener('click', () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: {y: 0.6}
            })
        });
        mainController.appendChild(button2);

        const button3 = document.createElement('button');
        button3.appendChild(document.createTextNode('fire3'));
        button3.addEventListener('click', () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: {y: 0.6}
            })
        });
        mainController.appendChild(button3);
    }
}