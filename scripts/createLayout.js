import { renderBlock } from "./renderBlock.js";
export function paymethodsLayout(methods) {
    let layout = ``
    methods.forEach(el => {
        layout += `<li>${el}</li>`
    });

    renderBlock('filters', `
    <ul>
        ${layout}
    </ul>
    `)
}