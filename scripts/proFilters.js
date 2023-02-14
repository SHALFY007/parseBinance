import { filterInputFrom } from "./inputFilters.js"
import { filterRate } from "./inputFilters.js"

export function proFilters() {
    const volFrom = document.querySelector('#input-vol-from')
    const volTo = document.querySelector('#input-vol-to')
    const inputRate = document.querySelector('#input-rate')
    const inputCount = document.querySelector('#input-count')

    volFrom.addEventListener('input', e => {
        filterInputFrom(e.target.value, '-')
        // console.log(e.target.value)
    })

    volTo.addEventListener('input', e => {
        filterInputFrom(e.target.value, '+')
    })

    inputRate.addEventListener('input', e=> {
        filterRate(e.target.value, 'rate')
    })

    inputCount.addEventListener('input', e => {
        filterRate(e.target.value, 'count')
    })
}