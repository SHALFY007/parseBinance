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
    
}



export function renderList(IdEl, layout) {
    let el = document.getElementById(IdEl)
    el.insertAdjacentHTML('beforeend', layout)
}