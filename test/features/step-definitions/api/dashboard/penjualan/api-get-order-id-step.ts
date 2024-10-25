import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let date: any

let first_order_invoice: any
let second_order_invoice: any
let first_order_id: any
let second_order_id: any

let first_order_first_product_order_item_id: any
let first_order_second_product_order_item_id: any
let first_order_third_product_order_item_id: any
let first_order_fourth_product_order_item_id: any

let first_order_first_product_quantity: any
let first_order_second_product_quantity: any
let first_order_third_product_quantity: any
let first_order_fourth_product_quantity: any

let second_order_first_product_order_item_id: any
let second_order_second_product_order_item_id: any
let second_order_third_product_order_item_id: any
let second_order_fourth_product_order_item_id: any

let second_order_first_product_quantity: any
let second_order_second_product_quantity: any
let second_order_third_product_quantity: any
let second_order_fourth_product_quantity: any

let first_order_grand_total: any
let second_order_grand_total: any
let invoice: any
let id: any

When('User get api order detail', async function () {

    await browser.pause(3000)

    console.log('api user get order detail')

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.orderId}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    date = response.data.result.order_delivery.date
    console.log('date: ', date)

    first_order_invoice = response.data.result.invoice
    console.log('invoice: ', first_order_invoice)

    first_order_id = response.data.result.id
    console.log('order id: ', first_order_id)

    first_order_first_product_order_item_id = response.data.result.detail_items[0].order_item_id
    console.log('order item id: ', first_order_first_product_order_item_id)

    first_order_first_product_quantity = response.data.result.order_items[0].quantity
    console.log('quantity: ', first_order_first_product_quantity)
    
    first_order_grand_total = response.data.result.grand_total
    console.log('grand total: ', first_order_grand_total)

    this.date = date
    this.first_order_invoice = first_order_invoice
    this.first_order_id = first_order_id
    this.first_order_first_product_order_item_id = first_order_first_product_order_item_id
    this.first_order_first_product_quantity = first_order_first_product_quantity
    this.first_order_grand_total = first_order_grand_total
})

// export { invoice, orderId, orderItemId }