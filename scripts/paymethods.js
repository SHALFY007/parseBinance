import { getParseObj } from "./parser.js"
import { paymethodsLayout } from "./createLayout.js"

export async function getPaymethods() {
    const methods = []

    let obj = {}

    await getParseObj().then(data => obj = data)
    console.log(obj)
    for (let key in obj) {
        obj[key].forEach(el => {
            el.paymethod.forEach(e => {
                if (!methods.includes(e)) {
                    console.log(e)
                    methods.push(e)
                }
            })
        });
    }
    paymethodsLayout(methods)
}