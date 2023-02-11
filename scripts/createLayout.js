import { renderBlock } from "./renderBlock.js";

export function getLayout(methods, classEl, check) {
    let layout = ``
    try {
        methods.forEach(el => {
            layout += `<li class="payload-switch">${el} 
            <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked>
            </div></li>`
        });
    } catch (error) {
        console.log(error)
    }

    
    renderBlock(classEl, `
    <ul class="payloads">
        ${layout}
    </ul>
    `, check)
}