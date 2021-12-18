import * as create from "../../helperFunctions.js";
import {projectHandler} from "./taskManipulation.js";
import { addInteractivity } from "../eventListeners.js";

export const renderTask = (task,where) => {
    const taskList = document.querySelector(".todoListContainer");

    // TO DO ELEMENTS
    const container = create.newElement("div","todoHolder");
        container.dataset.id = task.getData().uniqueId;
    const status = create.newElement("div", "taskStatus");
        const statusCircle = create.newElement("div","statusCircle");
                statusCircle.append(create.createImage("../../assets/images/bx-check.svg","circleImg"));

                status.append(statusCircle);
    const taskContent = create.newElement("div","taskContent");
        const title = create.newElement("div", "taskTitle", task.getData().title);

        const description = create.newElement("div","taskDescription",task.getData().description);

        const date = create.newElement("div","dateContainer");
                date.append(create.createImage("../../assets/images/bxs-calendar-check.svg"));
                date.append(create.newElement("div", "taskDate", `${task.getData().date}`));

    const taskOptions = create.newElement("div", "taskOptions");
        const edit = create.newElement("div", "taskEdit");

                // EDIT IMAGE ON TASKS
                let editImage = create.createImage("../../assets/images/bxs-edit-alt.svg");
                    editImage.addEventListener("click", (e) => {
                        updateTask(task,e.path[3])
                    });
                edit.append(editImage);

        const eraser = create.newElement("div", "taskErase");

                // ERASER IMAGE ON TASKS
                let eraserImage = create.createImage("../../assets/images/bxs-trash.svg");
                    eraserImage.addEventListener("click", () => {projectHandler.deleteTask(document.querySelector('.currentSgn').textContent,container)})
                eraser.append(eraserImage);
    // TO DO ELEMENTS


    taskContent.append(title,description,date);
    taskOptions.append(edit,eraser);
    container.append(status,taskContent,taskOptions);

    console.log(where);
    where != undefined ? taskList.insertBefore(container,where):taskList.insertBefore(container,taskList.lastChild);
}

export const renderProject = (projName) => {
    const container = document.querySelector(".projList");
    container.append(create.newElement("div","projElm",projName));
}



export function updateTask(task, taskParent){
    const container = create.newElement("form");
        const data = create.newElement("div", "infoRow");
            const title = create.newInput("text","todoTitle");
                title.value = task.getData().title;
            const description = create.newElement("textarea","todoText");
                description.textContent = task.getData().description;
            const date = create.newInput("date","todoDate","Date");
                date.value = task.getData().date;
        const buttons = create.newElement("div","buttonsRow");
            const accept = create.newElement("Button","todoEditBtn","Add ToDo");
            accept.type="Button";

            const cancel = create.newElement("Button","todoEdCancelBtn","Cancel");
            cancel.type="Button";

            setTimeout(() => document.addEventListener("click", function deleteA(e){
                console.log(e.target);
                console.log(e.target.classList.contains("todoEdCancelBtn"))
                if(!container.contains(e.target) || e.target.classList.contains("todoEdCancelBtn")){
                    renderTask(task,container);
                    document.querySelector('.todoListContainer').removeChild(container);
                    document.removeEventListener("click", deleteA);
                } else if(e.target.classList.contains("todoEditBtn")){
                    let data = {newTitle:title.value,
                        newDesc:description.value,
                        newDate:date.value,
                        }
                    if(data.newTitle.trim() == "" || data.newDesc.trim() == "" || data.newDate.trim() == ""){
                        console.log("NO PAPI");
                        return
                    }else{
                        task.setData(data);
                        renderTask(task,container);
                        document.querySelector('.todoListContainer').removeChild(container);
                        document.removeEventListener("click", deleteA);
                    }
                }
            }),100)


    data.append(title,description,date);
    buttons.append(accept,cancel);
    container.append(data,buttons);
    let tasklist=document.querySelector('.todoListContainer');
    tasklist.insertBefore(container,taskParent);
    tasklist.removeChild(taskParent);

}

export const createProjectMenu = () => {
    const outerContainer = create.newElement("div","outerForm");
    let container = create.newElement("div","newProjMenu");

        let formHeader = create.newElement("header","formHeader");
            let areaName = create.newElement("p","formAreaName", "New Project");
        let formContainer = create.newElement("div","newProjForm");
            let nameContainer = create.newElement("div","newProjName");
                nameContainer.append(create.newElement("p","newProjNameTitle","Name"));
                nameContainer.append(create.newInput("text","newProjNameInput","Project Name"));
            let colorContainer = create.newElement("div","newProjColor");
                colorContainer.append(create.newElement("p","newProjColorTitle","Color"));
                colorContainer.append(create.newInput("color","newProjColorInput"));
        const formFooter = create.newElement("footer", "formFooter");
                let projCancelButton  = create.newElement("button","newProjDecline","Cancel");
                    projCancelButton.type = "button";
                let projCreateButton = create.newElement("button","newProjCreate","Create");
                    projCreateButton.type = "button";

            setTimeout( () => document.addEventListener("click", function cancelForm(e){
                if(!container.contains(e.target) || e.target.classList.contains("newProjDecline")){
                    console.log(!container.contains(e.target))
                    document.querySelector("body").removeChild(outerContainer);
                    document.removeEventListener("click",cancelForm);
                }else if(e.target.classList.contains("newProjCreate")){
                    if(document.querySelector(".newProjNameInput").value.trim() != ""){
                        addProjMenu(document.querySelector(".newProjNameInput").value);
                        document.querySelector("body").removeChild(outerContainer);
                        document.removeEventListener("click",cancelForm);
                    }else{
                        document.querySelector(".newProjNameInput").style.borderColor = "red";
                        document.querySelector(".newProjNameInput").placeholder = "Pleaser insert title";
                        document.querySelector(".newProjNameInput").value = "";
                    }
                }
            }),100);
    formHeader.append(areaName);
    formContainer.append(nameContainer,colorContainer);
    formFooter.append(projCreateButton,projCancelButton);
    container.append(formHeader,formContainer, formFooter);
    outerContainer.append(container);
    return outerContainer;
}

export const addProjMenu = (title) => {
    let container = document.querySelector(".projList");
        let projCont = create.newElement("li","projItem");
        let name = create.newElement("div","projTitle");
            name.textContent = title;
        projCont.append(name);

    projectHandler.newProject(title);
    addInteractivity(projCont);
    container.append(projCont);
}