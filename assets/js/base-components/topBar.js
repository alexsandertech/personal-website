
export function createTopBar(parent) {
    document.querySelector(parent).insertAdjacentHTML("beforeend", topBar());
}

function topBar() {
    let component = "<a href='https://alexsander.tech/' class='backgroundTransparent totalCenter itemTopBar'>";
    component += "<img src='./assets/svg/LOGOTEXT.svg' class='backgroundTransparent'/></a>";

    component += "<a href='https://alexsander.tech/' class='backgroundTransparent totalCenter itemTopBar'>";
    component += "<img src='./assets/svg/LOGO.svg' class='backgroundTransparent'/></a >";

    component += "<div id='itemSubItems' class='backgroundTransparent totalCenter' style='cursor: pointer;'>";
    component += "<img src='./assets/imgs/FOTO.png' class='backgroundTransparent' style='width: 35px; margin-right: 10px;' />";
    component += "<span class='backgroundTransparent' >alexsandertech &#709;</span>";
    component += "<ul id='socialItems'>";
    component += "<li> <a href='https://www.github.com/alexsandertech' class='backgroundTransparent totalCenter'>github</a> </li>";
    component += "<li> <a href='https://www.facebook.com/alexsandertech/' class='backgroundTransparent totalCenter'>facebook</a> </li>";
    component += "<li> <a href='https://www.instagram.com/alexsandertech/' class='backgroundTransparent totalCenter'>instagram</a> </li>";
    component += "<li> <a href='https://www.linkedin.com/in/alexsandertech/' class='backgroundTransparent totalCenter'>linkedin</a> </li>";
    component += "<li> <a href='https://alexsander.tech/' class='backgroundTransparent totalCenter'>whatsapp</a> </li>";
    component += "</ul>";
    component += "</div>";

    return component;
}