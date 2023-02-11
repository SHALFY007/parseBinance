import { getPaymethods } from "./data.js"
import { getExchange } from "./data.js"
import { getCurrencies } from "./data.js"

const filters = document.querySelector('.filters')
const hideBtn = document.querySelector('.filter_hide')
const buy = document.querySelector('#buy')
const sell = document.querySelector('#sell')

getPaymethods()
getExchange()
getCurrencies()

window.addEventListener('load', () => {
    hideBtn.addEventListener('click', () => {
        filters.classList.add('hide')
    })
    
    buy.addEventListener('click', () => {
        getPaymethods()
        getExchange()
        getCurrencies()
    })
    sell.addEventListener('click', () => {
        getPaymethods('sell')
        getExchange('sell')
        getCurrencies('sell')
    })

})