import { getPaymethods } from "./data.js"
import { getExchange } from "./data.js"
import { getCurrencies } from "./data.js"
import { getPayIcons } from "./data.js"
import { buyClick } from "./openClicks.js"
import { sellClick } from "./openClicks.js"
import { allMethods } from "./renderBlock.js"
import { checkerData } from "./checker.js"
import { getOrders } from "./data.js"
import { hideAllEl } from "./filters.js"
import { proFilters } from "./proFilters.js"

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
    getOrders('sell')
    
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
            hideAllEl('buy_order_list')
            document.querySelectorAll('.form-buy').forEach(e => {
                e.checked = false
                allMethods('order_imges_buy', '')
                // allMethods('buy_order_list', '')
            })
             
        } else {
            hideAllEl('sell_order_list')
            document.querySelectorAll('.form-sell').forEach(e => {
                e.checked = false
                allMethods('order_imges_sell', '')
                // allMethods('sell_order_list', '')
            })
             
        }
        
    })
    addAll.addEventListener('click', () => {
        if (buy.classList.contains('activate')) {
            // getOrders()
            let list = document.querySelector('#buy_order_list')
            list.querySelectorAll('.all-orders-list').forEach(e => {
                e.classList.remove('hide')
            })
            document.querySelectorAll('.form-buy').forEach(e => {
                e.checked = true
                allMethods('order_imges_buy', '')
                getPayIcons(data)
            })
             
        } else {
            // getOrders('sell')
            let list = document.querySelector('#sell_order_list')
            list.querySelectorAll('.all-orders-list').forEach(e => {
                e.classList.remove('hide')
            })
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
    let order = document.querySelectorAll('.order')

    if (order) {
        
        order.forEach(e => {
            e.addEventListener('click', event => {
                if (document.querySelector('.active_bg') && document.querySelector('.active_bg') != event.target) {
                    document.querySelector('.active_bg').parentNode.querySelector('.order_drop').classList.add('hide')
                    document.querySelector('.active_bg').classList.remove('active_bg')
                    
                }
                console.log(event.target.parentNode.parentNode)
                // console.log(event.target)
                let q 
                if (event.target.classList.contains('order')) {
                     q = event.target
                } else {
                     q = event.target.parentNode.parentNode
                }
                let infoEl = q.parentNode.querySelector('.order_drop')
                infoEl.classList.toggle('hide')
                q.classList.toggle('active_bg')
            })
        })
    }   
    

    proFilters()
}