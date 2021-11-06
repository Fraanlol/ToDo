import * as create from "../helperFunctions.js";

export function createAddButton(){
    const container = create.newElement("div","addTaskButton");
        const img = create.createImage("../assets/images/add.svg");
        const descr = create.newElement("div","createDescription","Add Task");

        container.append(img,descr);
        document.querySelector('.todoListContainer').appendChild(container);
}

export function createAddForm(){
    const container = create.newElement("form");
        const data = create.newElement("div", "infoRow");
            const title = create.newInput("text","todoTitle","Title: Read Session");
            const description = create.newElement("textarea","todoText");
                description.placeholder = "Description: e.g: Read 30 pages of my book";
            const date = create.newInput("date","todoDate","Date");
        const buttons = create.newElement("div","buttonsRow");
            const accept = create.newElement("Button","todoAcceptBtn","Add ToDo");
            accept.type="Button";
            const cancel = create.newElement("Button","todoEraseBtn","Cancel");
            cancel.type="Button";

    data.append(title,description,date);
    buttons.append(accept,cancel);
    container.append(data,buttons);
    document.querySelector('.todoListContainer').appendChild(container);
}