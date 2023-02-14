export function hideEl(imgId, currencyId, e, action) {
    if(imgId.includes('(')) {
        let ind = imgId.indexOf('(')
        imgId = imgId.substring(0, ind)
    }
    if(e.target.parentElement.classList.contains('form-currencies-list')) {
        document.querySelectorAll(`.order-currency-${currencyId}-${action}`).forEach(e => {
            e.parentNode.parentNode.classList.add('hide')
        })
    } else {
        document.querySelectorAll(`.order-${imgId}-${action}`).forEach(e => {
            if (e.parentElement.children.length < 2 || e.parentElement.querySelectorAll('.hide').length === e.parentElement.children.length-1) {

                e.parentElement.parentNode.parentNode.classList.add('hide')
            } else {
                e.classList.add('hide')
            }
        })
    }
}

export function showEl(imgId, currencyId, e, action) {
    if(imgId.includes('(')) {
        let ind = imgId.indexOf('(')
        imgId = imgId.substring(0, ind)
    }
    if(e.target.parentElement.classList.contains('form-currencies-list')) {
        document.querySelectorAll(`.order-currency-${currencyId}-${action}`).forEach(e => {
            e.parentNode.parentNode.classList.remove('hide')
        })
    } else {
        document.querySelectorAll(`.order-${imgId}-${action}`).forEach(e => {
            if (e.parentElement.children.length < 2 || e.parentElement.querySelectorAll('.hide').length <= e.parentElement.children.length-1) {
                
                e.parentElement.parentNode.parentNode.classList.remove('hide')
                e.classList.remove('hide')
            } else {
                e.classList.remove('hide')
            }
        })
    }
}

export function hideAllEl(el) {
    let i = document.querySelector(`#${el}`)
    console.log(typeof i.children)
    for(let key in i.children) {
        try {
            i.children[key].classList.add('hide')
        } catch (error) {
        }
        
    }
}