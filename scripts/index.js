import { getPaymethods } from "./paymethods.js"
import { getParseObj } from "./parser.js"
import { paymethodsLayout } from "./createLayout.js"
import { renderBlock } from "./renderBlock.js"

const filters = document.querySelector('.filters')

window.addEventListener('load', () => {
    renderBlock(filters, paymethodsLayout(getPaymethods()))
    getPaymethods()
})