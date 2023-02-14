import { renderBlock, renderList } from "./renderBlock.js";

export function getLayout(methods, classEl, check, action) {
    let layout = ``
    try {
        
        methods.forEach(el => {
            let link = el.toLowerCase().split(' ').join('')
            if(link.includes('(')) {
                let ind = link.indexOf('(')
                link = link.substring(0, ind)
            }
            layout += `<li class="payload-switch">
            <img src="./img/${link}.png" alt="${link}" class="logo">
            <span class="value">${el}</span> 
            <div class="form-check form-switch form-${classEl}">
            <input class="form-check-input form-${action}" type="checkbox" id="flexSwitchCheckDefault" checked>
            </div></li>`
        });
    } catch (error) {
        console.log(error)
    }

    
    renderBlock(classEl, `
    <ul class="payloads-${action}-${classEl} payloads">
        ${layout}
    </ul>
    `, check, action)
}

export function getIcons(icons, action) {
    let layout = ``

    try {
        icons.forEach(e => {
            let link = e.path.toLowerCase().split(' ').join('')
            if(e.name.includes('(')) {
                let ind = e.name.indexOf('(')
                e.name = e.name.substring(0, ind)
            }
            layout += `<img src="${link}" alt="${e.name}" id="${e.name}-${action}" class="logo">`
        })
    } catch (error) {
        console.log(error)
    }
    renderList(`order_imges_${action}`, layout)
}

export function getOrderList(orders, action) {
    let layout = ``

    try {
        
        orders.forEach(e => {
            
            if (e.payments.length <2) {
                layout += `
                <div class="all-orders-list">
                <div class="order">
                <div class="order-currency order-currency-${e.currency}-${action}" id="">${e.currency}</div>  ${e.exchange} <div class="order_payments">
                 <img src="./img/${e.payments}.png" alt="${e.payments}" class='logo order-${e.payments}-${action}'></div> 
                 <div class="volume"><span class="volume-min">${e.volumeMin}</span>-<span class="volume-max">${e.volumeMax}</span></div>
                  ${e.price} <br>
                 
                </div>
                <div class="order_drop hide">Продавец:${e.owner} Рейтинг:<span class="rate">${e.rate}</span>% Сделок:<span class="count">${e.count}</span></div>   
                </div>
                `
            } else {
                let imgLay = ``
                e.payments.forEach(el => {
                    imgLay += `<img src="./img/${el}.png" alt="${el}" class='logo order-${el}-${action}'> `
                })
                layout += `
                <div  class="all-orders-list">
                <div class="order"><div class="order-currency order-currency-${e.currency}-${action}" id="">${e.currency}</div> ${e.exchange} 
                <div class="order_payments">${imgLay}</div> 
                <div class="volume"><span class="volume-min">${e.volumeMin}</span>-<span class="volume-max">${e.volumeMax}</span></div>
                ${e.price} <br> 
                </div>
                <div class="order_drop hide">Продавец:${e.owner} Рейтинг:<span class="rate">${e.rate}</span>% Сделок:<span class="count">${e.count}</span></div>
                </div>
                `
            }
            
        })
    } catch (error) {
        console.log(error)
    }

    // console.log(layout)

    renderList(`${action}_order_list`, layout)
}