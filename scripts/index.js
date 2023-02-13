import { getPaymethods } from "./data.js"
import { getExchange } from "./data.js"
import { getCurrencies } from "./data.js"
import { getPayIcons } from "./data.js"
import { buyClick } from "./openClicks.js"
import { sellClick } from "./openClicks.js"
import { allMethods } from "./renderBlock.js"
import { checkerData } from "./checker.js"
import { getOrders } from "./data.js"

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

    getOrders()
    
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

        if (buy.classList.contains('activate')) {
            document.querySelectorAll('.form-buy').forEach(e => {
                e.checked = false
                allMethods('order_imges_buy', '')
            })
             
        } else {
            document.querySelectorAll('.form-sell').forEach(e => {
                e.checked = false
                allMethods('order_imges_sell', '')
            })
             
        }
        
    })
    addAll.addEventListener('click', () => {
        if (buy.classList.contains('activate')) {
            document.querySelectorAll('.form-buy').forEach(e => {
                e.checked = true
                allMethods('order_imges_buy', '')
                getPayIcons(data)
            })
             
        } else {
            document.querySelectorAll('.form-sell').forEach(e => {
                e.checked = true
                allMethods('order_imges_sell', '')
                getPayIcons(data, 'sell')
            })
             
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
        
        if (checker) {
            checkerData(checker)
        }

}