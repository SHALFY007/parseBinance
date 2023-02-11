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
    
    
    if (check ) {
    const checker = document.querySelectorAll('.form-check')
    
    if (checker) {
        checker.forEach(el => {
            el.addEventListener('input', (e) => {
                let isChecked = e.target.checked
                let valueName =  e.target.parentNode.parentNode.querySelector('.value')
                
            })
        })
        
    }
    }

}