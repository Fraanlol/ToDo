import "./styles/mainStyle.css";
import * as interactions from "./modules/eventListeners.js";
import * as create from "./helperFunctions.js";
import * as form from "./modules/addBook.js";
import * as task from "./modules/todoObject/taskManipulation.js"


( function buildPage(){
    // First build the Header Bar
    const body = document.querySelector('body');

    ( function buildHeader(){
        const header = create.newElement('header','header');
        const burguerMenu = create.newIcon('burgMenu','fas fa-bars');
        const title = create.newElement('div','title', '2-Do');
        const userInfo = create.newElement('ul','userInfo');
            const register = create.newElement('button','register','Register');
            const login = create.newElement('button','login','login');

        userInfo.append(register,login);
        header.append(burguerMenu, title, userInfo);
        body.append(header);
    })();

    ( function buildSideMenu(){
        const container = create.newElement('aside', 'sideMenu');
        const menuList = create.newElement('ul', 'menuList');
            const inbox = create.newElement('li', 'inboxContainer','','asideItem');
            const today = create.newElement('li', 'todayContainer','','asideItem');
            const upcoming = create.newElement('li', 'upcomingContainer','','asideItem');

            // Menu elements
            inbox.append( create.menuItem('mailbox', 'menuText',"Inbox" ));
            today.append( create.menuItem('calendar','menuText', "Today") );
            upcoming.append( create.menuItem('calendarUp','menuText',"Week") );

            menuList.append(inbox,today,upcoming);

        const projHeader = create.newElement('div','projHeader');
        const projList = create.newElement('ul','projList');
        const projArrow = create.newElement('div', 'projArrow');
        const projectsTitle = create.newElement('p','projectsTitle', 'Projects');
        const addProjBtton = create.newElement('div','addButton');

        projHeader.append(projArrow,projectsTitle,addProjBtton);

        container.append(menuList,projHeader,projList);
        body.append(container);


    })();

    ( function buildMainContent(){
        const mainContent = create.newElement("div","mainContentContainer");

        (function topBar() {
            const container = create.newElement('div','mainBar');
            const title = create.newElement('h1','currentSgn','Testing');
            const addContainer = create.newElement("div", "addContainer");
    
            const extras = create.newElement('div','sgnOptions');
                extras.append(create.newElement('button','sortButton'), create.newElement('button','optsButton'));
            container.append(title,addContainer,extras);
            mainContent.append(container);
        })();

        (function todoList(){
            const container = create.newElement('div','todoListContainer');
            mainContent.append(container);
        })();

       body.append(mainContent);
       form.createAddButton();
       interactions.addBookButton();
    })();

    
})();



(function loadSvg() {
    document.querySelector('.mailbox').innerHTML = `<svg class="inbox" width="32" height="32" viewBox="0 0 24 24">
                                                        <g fill="blue" fill-rule="nonzero">
                                                            <path d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z" opacity="0.1"></path>
                                                            <path d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path>
                                                        </g>
                                                    </svg>`;
    document.querySelector('.calendar').innerHTML = `<svg class="day" width="32" height="32" viewBox="0 0 24 24">
                                                        <g fill="purple" fill-rule="evenodd">
                                                            <path fill-rule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1"></path>
                                                            <path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path>
                                                            <text font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" font-size="9" transform="translate(4 2)" font-weight="500">
                                                                <tspan x="8" y="15" text-anchor="middle" id="todayDate">08</tspan>
                                                            </text>
                                                        </g>
                                                    </svg>`;
    document.querySelector('.calendarUp').innerHTML =  `<svg class="project" width="32" height="32" viewBox="0 0 24 24">
                                                            <g fill="orangered" fill-rule="nonzero">
                                                                <path d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z" opacity="0.1"></path>
                                                                <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"></path>
                                                            </g>
                                                        </svg>`;
    document.querySelector('.projArrow').innerHTML = `<svg width="16px" height="16px" viewBox="0 0 16 16">
                                                        <g transform="translate(-266, -17)" fill="#777777">
                                                            <path d="M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545 L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727 C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909 274.0144,27.9809091 280,22.7581818">
                                                            </path>
                                                        </g>
                                                    </svg>`;
    document.querySelector('.addButton').innerHTML = `<svg class="invert" width="18" height="18" viewBox="0 0 24 24">
                                                        <g  fill-rule="evenodd" transform="translate(4 3)">
                                                            <mask id="jd4FBg" fill="#fff">
                                                                <path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"></path>
                                                            </mask>
                                                            <g mask="url(#jd4FBg)">
                                                                <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
                                                            </g>
                                                        </g>
                                                    </svg>`;
    document.querySelector('.sortButton').innerHTML =  `<svg width="24" height="24" viewBox="0 0 24 24">
                                                            <path  d="M16.854 5.146l3 3a.502.502 0 01-.708.708L17 6.707V18.5a.5.5 0 01-1 0V6.707l-2.146 2.147a.502.502 0 01-.708-.708l3-3a.502.502 0 01.708 0zM7.5 5a.5.5 0 01.5.5v11.791l2.146-2.145a.502.502 0 01.708.708l-3 3a.502.502 0 01-.708 0l-3-3a.502.502 0 01.708-.708L7 17.293V5.5a.5.5 0 01.5-.5z">
                                                            </path>
                                                        </svg>
                                                        <p> Sort </p>`;
    document.querySelector('.optsButton').innerHTML = `<svg width="24" height="24">
                                                            <g  stroke="grey" stroke-linecap="round" transform="translate(3 10)">
                                                                <circle cx="2" cy="2" r="2"></circle>
                                                                <circle cx="9" cy="2" r="2"></circle>
                                                                <circle cx="16" cy="2" r="2"></circle>
                                                            </g>
                                                        </svg>`;
})();

interactions.loadInteractions();
document.querySelector('.currentSgn').textContent = `Inbox`;
task.projectHandler.loadProject("Inbox");