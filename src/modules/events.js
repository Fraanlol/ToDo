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
            document.querySelector('.mainBar').classList.toggle('mainBarDesp');
        })
    })();

};