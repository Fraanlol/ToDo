import * as form from "./addBook";

export function loadInteractions(){
    const body = document.querySelector('body');

    (function asideInt(){
        let projArrow = document.querySelector('.projArrow');
        projArrow.addEventListener('click',()=> {
            projArrow.classList.toggle("projArrowRot");
        });

        Array.from(document.querySelectorAll('.menuText')).forEach((key) => {
            key.addEventListener('click', (e) => {
                document.querySelector('.currentSgn').textContent = `${e.target.innerText}`;
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
};



export function formButtons(){
    (function cancelButton(){
        let button = document.querySelector('.todoEraseBtn');
        let list = document.querySelector('.todoListContainer');
        button.addEventListener('click',(e) => {
            list.removeChild(list.lastChild);
            form.createAddButton();
            addBook();
        })
    })();
    (function submitButton(){

    })();
}
export function addBook(){
    let button = document.querySelector('.addTaskButton');
    let list = document.querySelector('.todoListContainer');
    button.addEventListener("click", (e)=>{
        list.removeChild(list.lastChild);
        form.createAddForm();
        formButtons();
    })
};