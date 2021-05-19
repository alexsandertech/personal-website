export function newCardItemProject(title, id, parent, textBtn, linkBtn) {
    document.querySelector(parent).insertAdjacentHTML("beforeend", createCardItemProject(title, id, textBtn, linkBtn));
}
//newCardItemProject("Campo-Minado", "minesweeper", "#content", "JOGAR", "https://alexsander.tech/projects/minesweeper/");
function createCardItemProject(title, id, textBtn, linkBtn) {
    let component = "<div class='card-item-project' id='" + id + "-item-project' >"
    component += "<div class='title-card'>" + title + "</div>";
    component += "<div class='icon-box-card'>"
    component += "<img class='icon-card' src='/assets/imgs/" + id + ".png' alt='Imagem ilustrativa do projeto " + title + " criado.'>"
    component += "</div>"
    component += "<div class='technologies-card-project'>"
    component += "<img class='star-icon' src='/assets/svg/STAR-FILLED.svg'>"
    component += "</div>"
    component += "<a class='btn-card-project' href='" + linkBtn + "' target='_blank'>" + textBtn + "</a>"
    component += "</div>"

    return component;
}

function initTechnologiesCardProject(totalStars) {
    let component = "";

    return component;
}
