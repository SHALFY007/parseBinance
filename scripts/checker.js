import { renderList } from "./renderBlock.js"

export function checkerData(checker) {
    // const checker = document.querySelectorAll('.form-check')
    const isBuy = document.querySelector('.payloads-buy-paymethods-list')

    checker.forEach(el => {
        el.addEventListener('input', (e) => {
            let isChecked = e.target.checked
            let valueName =  e.target.parentNode.parentNode.querySelector('.value')
            let imgId =  valueName.innerHTML.toLowerCase().split(' ').join('')
            
            if (!isBuy.classList.contains('hide')) {
                if (!isChecked) {
                    if(imgId.includes('(')) {
                        let ind = imgId.indexOf('(')
                        imgId = imgId.substring(0, ind)
                        
                    }
                    let delEl = document.querySelector(`#${imgId}-buy`)
                    delEl.remove()
                } else {
                    if(imgId.includes('(')) {
                        let ind = imgId.indexOf('(')
                        imgId = imgId.substring(0, ind)
                        
                    }
                    let link = `./img/${imgId}.png`
                    renderList('order_imges_buy', `<img src="${link}" alt="${imgId}" id="${imgId}-buy" class="logo">`)
                }
                
            } else {
                if (!isChecked) {
                    if(imgId.includes('(')) {
                        let ind = imgId.indexOf('(')
                        imgId = imgId.substring(0, ind)
                        
                    }
                    let delEl = document.querySelector(`#${imgId}-sell`)
                        delEl.remove()
                } else {
                    let link = `./img/${imgId}.png`
                    renderList('order_imges_sell', `<img src="${link}" alt="${imgId}" id="${imgId}-sell" class="logo">`)
                }
            }
             }

        )
    })
}