import { renderBlock, renderList } from "./renderBlock.js";

export function getLayout(methods, classEl, check, action) {
    let layout = ``
    try {
        
        methods.forEach(el => {
            let link = el.toLowerCase().split(' ').join('')
            if(link.includes('(')) {
                let ind = link.indexOf('(')
                link = link.substring(0, ind)
            }
            layout += `<li class="payload-switch">
            <img src="./img/${link}.png" alt="${link}" class="logo">
            <span class="value">${el}</span> 
            <div class="form-check form-switch form-${classEl}">
            <input class="form-check-input form-${link}" type="checkbox" id="flexSwitchCheckDefault" checked>
            </div></li>`
        });
    } catch (error) {
        console.log(error)
    }

    
    renderBlock(classEl, `
    <ul class="payloads-${action}-${classEl} payloads">
        ${layout}
    </ul>
    `, check, action)
}

export function getIcons(icons, action) {
    let layout = ``

    try {
        icons.forEach(e => {
            let link = e.path.toLowerCase().split(' ').join('')
            if(e.name.includes('(')) {
                let ind = e.name.indexOf('(')
                e.name = e.name.substring(0, ind)
            }
            layout += `<img src="${link}" alt="${e.name}" id="${e.name}-${action}" class="logo">`
        })
    } catch (error) {
        console.log(error)
    }
    renderList(`order_imges_${action}`, layout)
}