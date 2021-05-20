import { createTopBar } from "./base-components/topBar.js"

import { newCardItemTech } from './shared-components/CardItemTech.js'
import { newCardItemProject } from './shared-components/CardItemProject.js'

/*
function main() {
    newCardItemTech("CSS3", "#content", 5);
    newCardItemTech("HTML5", "#content", 5);
    newCardItemTech("GIT", "#content", 4);
}*/
function main() {
    createTopBar("#topBar");

    newCardItemProject("Campo-Minado",
        "minesweeper",
        "#content",
        "JOGAR",
        "https://alexsander.tech/projects/minesweeper/");
}

main();

/*
function redefineScreen(){
    if(window.innerWidth < 1100)
        toggleMenuMobile();
    else
        toggleMenu();

    if(localStorage.theme == undefined)
        localStorage.theme = "DARK";
    else
        setSalvedTheme();
}*/
