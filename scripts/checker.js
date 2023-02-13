import { renderList } from "./renderBlock.js"

export function checkerData(checker) {
    // const checker = document.querySelectorAll('.form-check')
    const isBuy = document.querySelector('.payloads-buy-paymethods-list')

    checker.forEach(el => {
        el.addEventListener('input', (e) => {
            let isChecked = e.target.checked
            let valueName =  e.target.parentNode.parentNode.querySelector('.value')
            let imgId =  valueName.innerHTML.toLowerCase().split(' ').join('')
            let currencyId = valueName.innerHTML
            
            if (!isBuy.classList.contains('hide')) {
                //Test
            if(imgId.includes('(')) {
                let ind = imgId.indexOf('(')
                imgId = imgId.substring(0, ind)
            }
            if(e.target.parentElement.classList.contains('form-currencies-list')) {
                document.querySelectorAll(`.order-currency-${currencyId}-buy`).forEach(e => {
                    e.parentNode.classList.add('hide')
                })
            } else {
                document.querySelectorAll(`.order-${imgId}-buy`).forEach(e => {
                    if (e.parentElement.children.length < 2 || e.parentElement.querySelectorAll('.hide').length === e.parentElement.children.length-1) {
    
                        e.parentElement.parentNode.classList.add('hide')
                    } else {
                        e.classList.add('hide')
                    }
                })
            }
            
            //end test
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
                    //
                    if(imgId.includes('(')) {
                        let ind = imgId.indexOf('(')
                        imgId = imgId.substring(0, ind)
                    }
                    if(e.target.parentElement.classList.contains('form-currencies-list')) {
                        document.querySelectorAll(`.order-currency-${currencyId}-buy`).forEach(e => {
                            e.parentNode.classList.remove('hide')
                        })
                    } else {
                        document.querySelectorAll(`.order-${imgId}-buy`).forEach(e => {
                            if (e.parentElement.children.length < 2 || e.parentElement.querySelectorAll('.hide').length <= e.parentElement.children.length-1) {
                                
                                e.parentElement.parentNode.classList.remove('hide')
                                e.classList.remove('hide')
                            } else {
                                e.classList.remove('hide')
                            }
                        })
                    }
                    
                    
                    //
                    renderList('order_imges_buy', `<img src="${link}" alt="${imgId}" id="${imgId}-buy" class="logo">`)
                }
                
            } else {
            if(imgId.includes('(')) {
                let ind = imgId.indexOf('(')
                imgId = imgId.substring(0, ind)
            }
            if(e.target.parentElement.classList.contains('form-currencies-list')) {
                document.querySelectorAll(`.order-currency-${currencyId}-sell`).forEach(e => {
                    e.parentNode.classList.add('hide')
                })
            } else {
                document.querySelectorAll(`.order-${imgId}-sell`).forEach(e => {
                
                    if (e.parentElement.children.length < 2 || e.parentElement.querySelectorAll('.hide').length === e.parentElement.children.length-1) {
                        e.parentElement.parentNode.classList.add('hide')
                    } else { 
                        e.classList.add('hide')
                    }
                })
            }
            
            
                if (!isChecked) {
                    if(imgId.includes('(')) {
                        let ind = imgId.indexOf('(')
                        imgId = imgId.substring(0, ind)
                        
                    }
                    let delEl = document.querySelector(`#${imgId}-sell`)
                        delEl.remove()
                } else {
                    if(imgId.includes('(')) {
                        let ind = imgId.indexOf('(')
                        imgId = imgId.substring(0, ind)
                    }
                    if(e.target.parentElement.classList.contains('form-currencies-list')) {
                        document.querySelectorAll(`.order-currency-${currencyId}-sell`).forEach(e => {
                            e.parentNode.classList.remove('hide')
                        })
                    } else {
                        document.querySelectorAll(`.order-${imgId}-sell`).forEach(e => {
                            if (e.parentElement.children.length < 2 || e.parentElement.querySelectorAll('.hide').length <= e.parentElement.children.length-1) {
                                
                                e.parentElement.parentNode.classList.remove('hide')
                                e.classList.remove('hide')
                            } else {
                                e.classList.remove('hide')
                            }
                        })
                    }
                    
                    
                    let link = `./img/${imgId}.png`
                    renderList('order_imges_sell', `<img src="${link}" alt="${imgId}" id="${imgId}-sell" class="logo">`)
                }
            }
             }

        )
    })
}