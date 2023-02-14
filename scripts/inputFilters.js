export function filterInputFrom(value, eq) {
    let isBuy = document.querySelector('.payloads-buy-paymethods-list').classList.contains('hide')
    if (!isBuy) {
        renderChange(value, 'buy', eq)
    } else {
        renderChange(value, 'sell', eq)
    }
    
}

export function filterRate(value, act) {
    let isBuy = document.querySelector('.payloads-buy-paymethods-list').classList.contains('hide')
    if (!isBuy) {
        renderRate(value, 'buy', act)
    } else {
        renderRate(value, 'sell', act)
    }
}

function renderChange(value, action, eq) {
    let findEl = document.getElementById(`${action}_order_list`)
    findEl.querySelectorAll('.volume-min').forEach(e => {
        if (eq === '-') {
            if (+e.innerHTML < +value) {
                e.parentElement.parentNode.classList.add('hide')
            } else if (e.parentElement.parentNode.classList.contains('hide')) {
                e.parentElement.parentNode.classList.remove('hide')
            }
        } else {
            if (+e.innerHTML > +value &&  value != '') {
                e.parentElement.parentNode.classList.add('hide')
            } else if (e.parentElement.parentNode.classList.contains('hide')) {
                e.parentElement.parentNode.classList.remove('hide')
            }
        }
        
    })
}

function renderRate(value, action, act) {
    let findEl = document.getElementById(`${action}_order_list`)
    findEl.querySelectorAll(`.${act}`).forEach(e => {
        console.log(e.innerHTML)
        if (+e.innerHTML < +value) {
            e.parentElement.parentNode.classList.add('hide')
        } else if (e.parentElement.parentNode.classList.contains('hide')) {
            e.parentElement.parentNode.classList.remove('hide')
        }
    })
}