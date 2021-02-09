function toggleMenu(){
    if(document.getElementById('menuHamburger').checked == true) {        
        document.getElementById('menuHamburgerMobile').checked = true;
        document.querySelector('.sideBar').style.width = "170px";    
        document.querySelector('.menuOpennerMobile').style.minWidth = "170px";
        document.querySelector('.sideOptions').style.marginLeft = "0";
    } else {
        document.getElementById('menuHamburgerMobile').checked = false;
        document.querySelector('.sideBar').style.width = "60px";
        document.querySelector('.sideOptions').style.marginLeft = "0px";    
        document.querySelector('.menuOpennerMobile').style.width = "50px";            
    }
}

function toggleMenuMobile(){
    if(document.getElementById('menuHamburgerMobile').checked == true) {        
        document.getElementById('menuHamburger').checked = true;
        document.querySelector('.sideBar').style.width = "170px";    
        document.querySelector('.menuOpennerMobile').style.minWidth = "170px";
        document.querySelector('.sideOptions').style.marginLeft = "0";
    } else {
        document.getElementById('menuHamburger').checked = false;
        document.querySelector('.sideBar').style.width = "0px";        
        document.querySelector('.sideOptions').style.marginLeft = "-170px";   
        document.querySelector('.menuOpennerMobile').style.minWidth = "50px";              
    }
}

function setColorMode(){
    if(document.getElementById('btnModeColor').checked == false) {
        document.documentElement.style.setProperty('--bg-color', '#19191e');
        document.documentElement.style.setProperty('--bg-color-element', '#1e1e23');
        document.documentElement.style.setProperty('--bg-color-box','#1e1e29');
        document.documentElement.style.setProperty('--line-color', '#333346');
        document.documentElement.style.setProperty('--font-color', '#CCCCCC');
        document.documentElement.style.setProperty('--color-highlight', '#01cc00');
        document.documentElement.style.setProperty('--color-highlight-item-menu-02', 'rgba(51,51,70, 0.7)');
        document.querySelector(".sideBar").style.backgroundColor = "rgba(30, 30, 35, 0.5)";
        
        
        localStorage.theme = "DARK";
        let highlightOp = document.querySelector(".dark");
        highlightOp.style.opacity = "100%";
        let highlightOp2 = document.querySelector(".light");
        highlightOp2.style.opacity = "50%";
    } else {
        document.documentElement.style.setProperty('--bg-color', '#F0F2F5');
        document.documentElement.style.setProperty('--bg-color-element', '#e3e3fc');
        document.documentElement.style.setProperty('--bg-color-box','#FFF');
        document.documentElement.style.setProperty('--line-color', '#8080a5');
        document.documentElement.style.setProperty('--font-color', '#22222b');
        document.documentElement.style.setProperty('--color-highlight', '#01cc00');
        document.documentElement.style.setProperty('--color-highlight-item-menu-02', 'rgba(200,200,200, 0.7)');
        document.querySelector(".sideBar").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        
        
        localStorage.theme = "LIGHT";
        let highlightOp = document.querySelector(".dark");
        highlightOp.style.opacity = "50%";
        let highlightOp2 = document.querySelector(".light");
        highlightOp2.style.opacity = "100%";
    }   
}

function showModarPersonalInfo(){
    document.querySelector(".modalContainer").style.display = "flex";
}

function closeModalPersonalInfo(){
    document.querySelector(".modalContainer").style.display = "none";

}
function setSalvedTheme(){
    if(localStorage.theme == "DARK")
        document.getElementById('btnModeColor').checked = false;
    else 
        document.getElementById('btnModeColor').checked = true;
    
    setColorMode();
}

function redefineScreen(){
    if(window.innerWidth < 1100)
        toggleMenuMobile();
    else
        toggleMenu();

    if(localStorage.theme == undefined)
        localStorage.theme = "DARK";
    else
        setSalvedTheme();
}


window.onresize = redefineScreen;
redefineScreen();
