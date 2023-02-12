import { getParseObj } from "./parser.js"
import { getLayout } from "./createLayout.js"
import { getIcons } from "./createLayout.js"

const objBuy = await getParseObj('buy').then(data => data)
const objSell = await getParseObj('sell').then(data => data)


async function getData(action, payload, classEl, check='') {
    const methods = []
    console.log(objBuy)
    // let obj = {}

    // await getParseObj(action).then(data => obj = data)
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
                // console.log(typeof  el[payload])
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
                // console.log(typeof  el[payload])
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
export async function getPayIcons(action='buy') {
    let images = []
    const findBlock = document.querySelector(`.payloads-${action}-paymethods-list`)
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
    

    getIcons(images, action)
}