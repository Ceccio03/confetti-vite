class MainController {
    constructor() {

    }

    render() {
        const mainController = document.getElementById('main-container');

        const button1 = document.createElement('button');
        button1.appendChild(document.createTextNode('fire1'));
        mainController.appendChild(button1);

        const button2 = document.createElement('button');
        button1.appendChild(document.createTextNode('fire2'));
        mainController.appendChild(button2);

        const button3 = document.createElement('button');
        button1.appendChild(document.createTextNode('fire3'));
        mainController.appendChild(button3);
    }
}