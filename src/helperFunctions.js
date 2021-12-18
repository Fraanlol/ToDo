export function newElement(element, classname, text, extraClass) {
    let creation = document.createElement(`${element}`);
    classname != undefined ? creation.classList.add(classname):false;
    extraClass != undefined ? creation.classList.add(extraClass):false;
    creation.textContent = text != undefined ? text:'';
    return creation;
}

export function createImage(src,classname){
    let creation = document.createElement('img');
    classname != undefined ? creation.classList.add(classname):false;
    creation.src = src;
    return creation;
}

export function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export function newIcon(elmClass,src) {
    let container = document.createElement('div');
    container.classList.add(elmClass);
    container.innerHTML = `<i class="${src}"></i>`;
    return container;
}

export function menuItem(iconClass,elmClass,text) {
    const container = document.createElement('div');
    container.append(newElement('div',iconClass),
                     newElement('p',elmClass, text)
                    );
    return container;
}

export function newInput(type,elmClass,placeholder){
    const container = newElement("input",elmClass);
        container.type = type;
        container.placeholder = placeholder;
        container.autocomplete = "off";
    return container;
}