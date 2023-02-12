export function renderBlock(classEl, html, check, action) {
    const el = document.getElementsByClassName(classEl)
    try {
        if (!document.querySelector(`.payloads-sell-${classEl}`)) {     
            if (action !== 'buy') {
                document.querySelector(`.payloads-buy-${classEl}`).classList.add('hide')
            } else {

            }
            el[0].insertAdjacentHTML('beforeend', html)
        } else {
            
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
        console.log('check!!')
        // const checker = document.querySelectorAll('.form-check')
        
        // if (checker) {
        //     console.log(checker)
        //     checker.forEach(el => {
        //         el.addEventListener('input', (e) => {
        //             let isChecked = e.target.checked
        //             let valueName =  e.target.parentNode.parentNode.querySelector('.value')
        //             let imgId =  valueName.innerHTML.toLowerCase().split(' ').join('')
                    
        //             if (!isChecked) {       
        //                 if(imgId.includes('(')) {
        //                 let ind = imgId.indexOf('(')
        //                 imgId = imgId.substring(0, ind)
        //                 console.log(imgId)
        //             }
                    
        //             let delEl = document.querySelector(`#${imgId}-buy`)
        //             delEl.remove()
        //             } else {
        //                 let link = `./img/${imgId}.png`
        //                 renderList('order_imges_buy', `<img src="${link}" alt="${imgId}" id="${imgId}-buy" class="logo">`)
        //             }
        //         })
        //     })
        // }
        }
    
    
}



export function renderList(IdEl, layout) {
    let el = document.getElementById(IdEl)
    el.insertAdjacentHTML('beforeend', layout)
}