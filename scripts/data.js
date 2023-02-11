import { getParseObj } from "./parser.js"
import { getLayout } from "./createLayout.js"

async function getData(action, payload, classEl, check='') {
    const methods = []

    let obj = {}

    await getParseObj(action).then(data => obj = data)
    for (let key in obj) {
        obj[key].forEach(el => {
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