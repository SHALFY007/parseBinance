import { getPaymethods } from "./data.js"
import { getExchange } from "./data.js"
import { getCurrencies } from "./data.js"

export function buyClick(buy, sell) {
    buy.classList.add('activate')
    sell.classList.remove('activate')
    getPaymethods()
    getExchange()
    getCurrencies()
}
export function sellClick(buy, sell) {
    buy.classList.remove('activate')
    sell.classList.add('activate')
    getPaymethods('sell')
    getExchange('sell')
    getCurrencies('sell')
}