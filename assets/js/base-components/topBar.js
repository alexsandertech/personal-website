
export function topBar(id, parent, stars) {
    document.querySelector(parent).insertAdjacentHTML("beforeend", createCardItemTech(id, stars));
}