import * as form from "./addBook.js";
import * as task from "./todoObject/taskManipulation.js";
import * as domMan from "./todoObject/domManipulation.js";


export function loadInteractions(){
    (function asideInt(){
        Array.from(document.querySelectorAll('.menuText')).forEach((key) => {
            key.addEventListener('click', (e) => {
                document.querySelector('.currentSgn').textContent = `${e.target.innerText}`;
                task.projectHandler.loadProject(e.target.innerText);
            })
        })
    })();

    (function hideAside(){
        let burgMenu = document.querySelector('.burgMenu');
        burgMenu.addEventListener("click", (e) => {
            document.querySelector('.sideMenu').classList.toggle('sideMenuHide');
            document.querySelector('.mainBar').classList.toggle('contentDisp');
            document.querySelector('.todoListContainer').classList.toggle('contentDisp');
        })
    })();

    (function loadProjectManager(){
        let container = document.querySelector("body");
        let addProjButton = document.querySelector(".addButton");
        addProjButton.addEventListener("click", () => {
            container.append(domMan.createProjectMenu());
        })
    })();

    (function hideProjects(){
        let target = document.querySelector(".projArrow");
        let list = document.querySelector(".projList");
        target.addEventListener("click", () => {
            target.classList.toggle("projArrowRot");
            list.classList.toggle("collapse");
        })
    })();
};



export function formButtons(){
    function buttonPress(){
    let list = document.querySelector('.todoListContainer');
            list.removeChild(list.lastChild);
            form.createAddButton();
            addBookButton();
    }

    (function cancelButton(){
        let button = document.querySelector('.todoEraseBtn');
        button.addEventListener('click',(e) => {
            buttonPress();
        })
    })();
    (function submitButton(){
        let button = document.querySelector('.todoAcceptBtn');
        button.addEventListener('click',(e) => {
            let title = document.querySelector(".todoTitle").value;
            let description = document.querySelector(".todoText").value;
            let date = document.querySelector(".todoDate").value;
            let currProj = document.querySelector(".currentSgn").textContent;
            if(title.trim() == "" || description.trim() == "" || date.trim() == ""){
                console.log("campos vacios");
                return;
            }else{
                task.projectHandler.addTask(currProj,task.createTask(title,description,date));
                buttonPress();
            }
        })
    })();
}
export function addBookButton(){
    let button = document.querySelector('.addTaskButton');
    let list = document.querySelector('.todoListContainer');
    button.addEventListener("click", (e)=>{
        list.removeChild(list.lastChild);
        form.createAddForm();
        formButtons();
    })
};

export function  addInteractivity(element){
    element.addEventListener("click", (e) => {
        document.querySelector('.currentSgn').textContent = `${e.target.innerText}`;
        task.projectHandler.loadProject(e.target.innerText);
    })
}