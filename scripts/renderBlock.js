export function renderBlock(classEl, html) {
    const el = document.querySelector(`.${classEl}`)
    el.innerHTML = html
}