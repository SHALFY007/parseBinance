export function renderBlock(classEl, html, check, action) {
    const el = document.getElementsByClassName(classEl)
    try {
        if (!document.querySelector(`.payloads-sell-${classEl}`)) {
            if (action !== 'buy') {
                document.querySelector(`.payloads-buy-${classEl}`).classList.add('hide')
            }
            el[0].insertAdjacentHTML('beforeend', html)
        }
        
    } catch (error) {
        console.log(error)
    }
    if (document.querySelector(`.payloads-sell-${classEl}`)) {
        if (action == 'buy') {
            document.querySelector(`.payloads-sell-${classEl}`).classList.add('hide')
            document.querySelector(`.payloads-buy-${classEl}`).classList.remove('hide')
        } else {
            document.querySelector(`.payloads-sell-${classEl}`).classList.remove('hide')
            document.querySelector(`.payloads-buy-${classEl}`).classList.add('hide')
            
        }
    }
    
    
    if ( check ) {
        const checker = document.querySelectorAll('.form-check')
        
        if (checker) {
            checker.forEach(el => {
                el.addEventListener('input', (e) => {
                    const isBuy = document.querySelector('.payloads-buy-paymethods-list')
                    let isChecked = e.target.checked
                    let valueName =  e.target.parentNode.parentNode.querySelector('.value')
                    let imgId =  valueName.innerHTML.toLowerCase().split(' ').join('')
                    if (!isBuy.classList.contains('hide')) {
                        if (!isChecked) {
                        
                            if(imgId.includes('(')) {
                            let ind = imgId.indexOf('(')
                            imgId = imgId.substring(0, ind)
                            console.log(imgId)
                        }
                        
                        let delEl = document.querySelector(`#${imgId}-buy`)
                        try {
                            delEl.remove()
                        } catch(e) {
                            console.log(e)
                        }
                        
                        } else {
                            let link = `./img/${imgId}.png`
                            renderList('order_imges_buy', `<img src="${link}" alt="${imgId}" id="${imgId}-buy" class="logo">`)
                        }
                        // if(imgId.includes('(')) {
                        //     let ind = imgId.indexOf('(')
                        //     imgId = imgId.substring(0, ind)
                        //     console.log(imgId)
                        //     let delEl = document.querySelector(`#${imgId}-buy`)
                        //     delEl.remove()
                        // } else {
                        // let link = `./img/${imgId}.png`
                        // renderList('order_imges_buy', `<img src="${link}" alt="${imgId}" id="${imgId}-buy" class="logo">`)
                        // }
                    } else {
                        if(imgId.includes('(')) {
                            let ind = imgId.indexOf('(')
                            imgId = imgId.substring(0, ind)
                            console.log(imgId)
                            let delEl = document.querySelector(`#${imgId}-sell`)
                            delEl.remove()
                        } else {
                        let link = `./img/${imgId}.png`
                        renderList('order_imges_sell', `<img src="${link}" alt="${imgId}" id="${imgId}-sell" class="logo">`)
                        }
                    }
                    
                    
                })
            })
        }
        }
    
    }

export function renderList(IdEl, layout) {
    let el = document.getElementById(IdEl)
    el.insertAdjacentHTML('beforeend', layout)
}