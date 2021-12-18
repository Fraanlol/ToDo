import {v4 as uuidv4} from 'uuid';
import * as load from "./domManipulation.js";


export const createTask = (title,description,date) => {
    const uniqueId = uuidv4();
    const getData = () => { return {title,description,date,uniqueId} };
    const setData = (data) => {
        title = data.newTitle;
        description = data.newDesc;
        date = data.newDate;
    }
    return {getData,setData};
}

//Constructor for sections (Home, Projects etc..)
const section = () => {
    let todoList = [];

    const addToDo = (task) => {
        todoList.push(task);
        load.renderTask(task);
    }

    const eraseToDo = (element) => {
        todoList = todoList.filter(item => item.getData().uniqueId != element.dataset.id);
        let taskList = document.querySelector(".todoListContainer");
        taskList.removeChild(element);
    }

    const loadDom = () => {
        let list = document.querySelector(".todoListContainer");
        let lastel = list.lastChild;
        list.textContent = "";
        list.append(lastel);
        todoList.forEach(item => {load.renderTask(item)})
    }

    const updateTask = (targetId,data) => {
        for(let i of todoList){
            if(i.uniqueId == targetId){
                i.setData(data)
                console.log(i);
            }
        }
    }
    return {addToDo,eraseToDo,loadDom, updateTask};
}

export const projects = () => {
let projectList = [];

if(!projectList.length != 0){
    newProject("Inbox");
    newProject("Today");
}
function newProject(projectName){
    projectList.push({name:projectName,list:section()})
}

function addTask(projectName, task){
    for(let i of projectList ){
        if(i.name == projectName){
            i.list.addToDo(task);
            console.log("AÑADIDA");
            break;
        }
    }
}

function loadProject(projName){
    for(let i of projectList){
        if(i.name == projName){
            i.list.loadDom();
        }
    }
}

function getProys(){
    for(let i of projectList){
        console.log(i);
    }
}

function deleteTask(projName,element){
    for(let i of projectList){
        if(i.name == projName){
            i.list.eraseToDo(element);
        }
    }
}
return {newProject,addTask,loadProject,getProys,deleteTask}
}


export const projectHandler = projects();
projectHandler.getProys();