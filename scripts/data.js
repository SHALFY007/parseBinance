import { getParseObj } from "./parser.js"
import { getLayout } from "./createLayout.js"

async function getData(action, payload, classEl, check=false) {
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

    getLayout(methods, classEl, check)
}

export async function getPaymethods() {
    getData('buy', 'paymethod', 'paymethods-list')
}

export async function getExchange() {
    getData('buy', 'market_name', 'exchange-list')

}

export async function getCurrencies() {
    getData('buy', 'cryptocurrency', 'currencies-list', true)
    
}