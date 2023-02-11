export function renderBlock(classEl, html, check) {
    const el = document.getElementsByClassName(classEl)
    try {
        el[0].innerHTML = html
        console.log('here')
    } catch (error) {
        console.log(error)
    }
    
    if (check) {
    const checker = document.querySelectorAll('.form-check')
    
    if (checker) {
        checker.forEach(el => {
            el.addEventListener('click', () => {
                console.log(1111)
            }, false)
        })
        
    }
    }

}