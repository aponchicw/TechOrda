import buttons from "./buttons.js";

function init_buttons_grid(keyboard) {
    const fragment = document.createDocumentFragment();
    buttons.forEach((button) => {
        const key = createElement("div", ".key", `#${button.name}`);
        const key_content = createElement("div", ".key-content");
        const key_border = createElement("div", ".key-border");

        key_content.innerHTML = button.symbol;
        key.appendChild(key_border);
        key.appendChild(key_content);

        fragment.appendChild(key);
    });

    keyboard.appendChild(fragment);
}

function createElement() {
    const element = document.createElement(arguments[0]);
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index].includes(".")) {
            element.classList.add(arguments[index].substring(1));
        }
        if (arguments[index].includes("#")) {
            element.id = arguments[index].substring(1);
        }
    }
    return element;
}

export default init_buttons_grid;
