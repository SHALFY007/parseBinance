import { getPaymethods } from "./data.js"
import { getExchange } from "./data.js"
import { getCurrencies } from "./data.js"
import { getPayIcons } from "./data.js"
import { renderList } from "./renderBlock.js"
import { buyClick } from "./openClicks.js"
import { sellClick } from "./openClicks.js"
import { allMethods } from "./renderBlock.js"

const filters = document.querySelector('.filters')
const hideBtn = document.querySelector('.filter_hide')
const buy = document.querySelector('#buy')
const sell = document.querySelector('#sell')
const removeAll = document.querySelector('#remove_all')
const addAll = document.querySelector('#add_all')
const orderBuy = document.querySelector('#order_buy')
const orderSell = document.querySelector('#order_sell')

const data = ['paymethods', 'exchange', 'currencies']

function start() {
    sellClick(buy, sell)
    getPayIcons(data, 'sell')
    buyClick(buy, sell)
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
            buyClick(buy, sell)
        }
        
    })
    sell.addEventListener('click', () => {
        if (!sell.classList.contains('activate')) {
            sellClick(buy, sell)
        }
    })
    
    removeAll.addEventListener('click', () => {
        
        document.querySelectorAll('.form-check-input').forEach(e => {
            e.checked = false
        })
        if (buy.classList.contains('activate')) {
            allMethods('order_imges_buy', '')
        } else {
            allMethods('order_imges_sell', '')
        }
        
    })
    addAll.addEventListener('click', () => {
        document.querySelectorAll('.form-check-input').forEach(e => {
            e.checked = true
        })
        if (buy.classList.contains('activate')) {
            allMethods('order_imges_buy', '')
            getPayIcons(data)
        } else {
            allMethods('order_imges_sell', '')
            getPayIcons(data, 'sell')
        }
        
    })

    orderBuy.addEventListener('click', () => {
        if (filters.classList.contains('hide')) filters.classList.remove('hide')
        buyClick(buy, sell)
    })

    orderSell.addEventListener('click', () => {
        if (filters.classList.contains('hide')) filters.classList.remove('hide')
        sellClick(buy, sell)
    })

    getPayIcons(data)
    const checker = document.querySelectorAll('.form-check')
    const isBuy = document.querySelector('.payloads-buy-paymethods-list')
        
        if (checker) {
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

}