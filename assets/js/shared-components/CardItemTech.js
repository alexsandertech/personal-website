export function newCardItemTech(id, parent, stars) {
    document.querySelector(parent).insertAdjacentHTML("beforeend", createCardItemTech(id, stars));
}

function createCardItemTech(id, totalStars) {
    let component = "<div class='card-item-tech' id='" + id + "-item-tech' >"
    component += "<div class='title-card'>" + id + "</div>"
    component += "<div class='icon-box-card'>"
    component += "<img class='icon-card' src='/assets/svg/" + id + ".svg' alt='Icone ilustrativo da ferramenta " + id + ".'>"
    component += "</div>"
    component += "<div class='stars-card'>"
    component += initStarsCardTech(totalStars);
    component += "</div>"
    component += "</div>"

    return component;
}

function initStarsCardTech(totalStars) {
    let component = "";
    for (let i = 0; i < 5; i++) {
        if (totalStars <= 0)
            component += "<img class='star-icon' src='/assets/svg/STAR-EMPTY.svg'>"
        else if (totalStars < 1)
            component += "<img class='star-icon' src='/assets/svg/STAR-PARTIAL.svg'>"
        else
            component += "<img class='star-icon' src='/assets/svg/STAR-FILLED.svg'>"
        totalStars--;
    }
    return component;
}


/*
export function createDiv(id, texti) {
    let component = "<div id='" + id + "'>";
    component += texti + " </div>";
    return component;
}

export function createBoxItemTech(id) {
    return component = "<div class='item-tech' id='" + id + "'> </div>";
}*/
