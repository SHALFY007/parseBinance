import { getPaymethods } from "./data.js"
import { getExchange } from "./data.js"
import { getCurrencies } from "./data.js"
import { getPayIcons } from "./data.js"

const filters = document.querySelector('.filters')
const hideBtn = document.querySelector('.filter_hide')
const buy = document.querySelector('#buy')
const sell = document.querySelector('#sell')
const removeAll = document.querySelector('#remove_all')
const addAll = document.querySelector('#add_all')






if (document.readyState !== 'loading') {
    getPaymethods()
    getExchange()
    getCurrencies()
    getPaymethods('sell')
    getExchange('sell')
    getCurrencies('sell')

// document.addEventListener('DOMContentLoaded', () => {

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
    getPayIcons('sell')

// })
}