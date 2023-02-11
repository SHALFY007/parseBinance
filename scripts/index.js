import { getPaymethods } from "./data.js"
import { getLayout } from "./createLayout.js"
import { renderBlock } from "./renderBlock.js"
import { getExchange } from "./data.js"
import { getCurrencies } from "./data.js"

const filters = document.querySelector('.filters')
const hideBtn = document.querySelector('.filter_hide')

window.addEventListener('load', () => {
    hideBtn.addEventListener('click', () => {
        filters.classList.add('hide')
    })
    getPaymethods()
    getExchange()
    getCurrencies()


})