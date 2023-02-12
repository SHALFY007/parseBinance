import { getPaymethods } from "./data.js"
import { getExchange } from "./data.js"
import { getCurrencies } from "./data.js"
import { getPayIcons } from "./data.js"
import { renderList } from "./renderBlock.js"

const filters = document.querySelector('.filters')
const hideBtn = document.querySelector('.filter_hide')
const buy = document.querySelector('#buy')
const sell = document.querySelector('#sell')
const removeAll = document.querySelector('#remove_all')
const addAll = document.querySelector('#add_all')


function start() {
    buy.classList.remove('activate')
    sell.classList.add('activate')
    getPaymethods('sell')
    getExchange('sell')
    getCurrencies('sell')
    getPayIcons('sell')
    buy.classList.add('activate')
    sell.classList.remove('activate')
    getPaymethods()
    getExchange()
    getCurrencies()
}

if (document.readyState !== 'loading') {


    getPaymethods()
    getExchange()
    getCurrencies()
    
    start()

    console.log('1111')
    hideBtn.addEventListener('click', () => {
        filters.classList.add('hide')
    })
    
    buy.addEventListener('click', () => {
        if (!buy.classList.contains('activate')) {
            buy.classList.add('activate')
            sell.classList.remove('activate')
            getPaymethods()
            getExchange()
            getCurrencies()
        }
        
    })
    sell.addEventListener('click', () => {
        if (!sell.classList.contains('activate')) {
            buy.classList.remove('activate')
            sell.classList.add('activate')
            getPaymethods('sell')
            getExchange('sell')
            getCurrencies('sell')
        }
    })
    
    removeAll.addEventListener('click', () => {
        
        document.querySelectorAll('.form-check-input').forEach(e => {
            e.checked = false
        })
    })
    addAll.addEventListener('click', () => {
        document.querySelectorAll('.form-check-input').forEach(e => {
            e.checked = true
        })
    })

    getPayIcons()
    const checker = document.querySelectorAll('.form-check')
    const isBuy = document.querySelector('.payloads-buy-paymethods-list')
        
        if (checker) {
            console.log(checker)
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
                                console.log(imgId)
                                
                            }
                            let delEl = document.querySelector(`#${imgId}-buy`)
                            delEl.remove()
                        } else {
                            if(imgId.includes('(')) {
                                let ind = imgId.indexOf('(')
                                imgId = imgId.substring(0, ind)
                                console.log(imgId)
                                
                            }
                            let link = `./img/${imgId}.png`
                            renderList('order_imges_buy', `<img src="${link}" alt="${imgId}" id="${imgId}-buy" class="logo">`)
                        }
                        
                    } else {
                        if (!isChecked) {
                            if(imgId.includes('(')) {
                                let ind = imgId.indexOf('(')
                                imgId = imgId.substring(0, ind)
                                console.log(imgId)
                                
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

}