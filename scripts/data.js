import { getParseObj } from "./parser.js"
import { getLayout } from "./createLayout.js"
import { getIcons } from "./createLayout.js"
import { getOrderList } from "./createLayout.js"

const objBuy = await getParseObj('buy').then(data => data)
const objSell = await getParseObj('sell').then(data => data)


async function getData(action, payload, classEl, check='') {
    const methods = []

    if (action == 'buy') {
        for (let key in objBuy) {
            objBuy[key].forEach(el => {
                if (typeof el[payload] === "object") {
                    el[payload].forEach(e => {
                        if (!methods.includes(e)) {
                            methods.push(e)
                        }
                    })
                }
                if (typeof el[payload] === "string") {
                    if (!methods.includes(el[payload])) {
                        methods.push(el[payload])
                    } 
                }
        });
    } 
    
    } else {
        for (let key in objSell) {
            objSell[key].forEach(el => {
                if (typeof el[payload] === "object") {
                    el[payload].forEach(e => {
                        if (!methods.includes(e)) {
                            methods.push(e)
                        }
                    })
                }
                if (typeof el[payload] === "string") {
                    if (!methods.includes(el[payload])) {
                        methods.push(el[payload])
                    } 
                }
        });
    } 
    }

    getLayout(methods, classEl, check, action)
}

export async function getPaymethods(action='buy') {
    getData(action, 'paymethod', 'paymethods-list')
}

export async function getExchange(action='buy') {
    getData(action, 'market_name', 'exchange-list')

}

export async function getCurrencies(action='buy') {
    getData(action, 'cryptocurrency', 'currencies-list', 'checked')
    
}
export async function getPayIcons(blocks, action='buy') {
    let images = []
    blocks.forEach((el) => {
        const findBlock = document.querySelector(`.payloads-${action}-${el}-list`)
    try {
        findBlock.querySelectorAll('.logo').forEach(e => {
            let a = new Object()
            a.path = e.attributes.src.value
            a.name = e.alt
            // console.log(a)
            images.push(a)
        })
    } catch(e) {
        console.log(e)
    }
    })
    
    

    getIcons(images, action)
}

export async function getOrders(action='buy') {
    let orders = []

    try {
        let obj = objBuy
        if (action !== 'buy') {
            obj = objSell
        } 
        for (let key in obj) {
           obj[key].forEach(e => {
            let order = new Object()
            order.currency = e.cryptocurrency
            order.exchange = 'Binance'
            order.payments = []
            e.paymethod.forEach(el => {
                let link = el.toLowerCase().split(' ').join('')
                if(link.includes('(')) {
                let ind = link.indexOf('(')
                link = link.substring(0, ind)
            }
            order.payments.push(link) 
            })
            order.volume = e.limit.min
            order.price = e.price

            orders.push(order)
           })
        }
    } catch (error) {
        console.log(error)
    }

    getOrderList(orders, action)
}