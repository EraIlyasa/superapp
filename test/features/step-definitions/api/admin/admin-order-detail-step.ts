import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'
import { orderId } from '../../procurement/penjualan-step';

let response: any
let orderId2: string
let orderItemId: string

When('I get order detail', async function () {

    const token = this.token;

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${orderId}`, {
    headers: {
            "Authorization": `Bearer ${token}`
        }
    })
            // response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/1435419666`, {
            //     headers: {
            //             "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg0NiwiaWF0IjoxNzI2NzQwODI0LCJleHAiOjE3MjY4MjcyMjR9.uSvWC43sSjRk6nI6QbXYO_-N6dVyl09fe4InqS4k34g`
            //         }
            //     })

    console.log('Response Data:', JSON.stringify(response.data, null, 2))

    orderId2 = response.data.result.id
    console.log('Order ID:', orderId2)

    orderItemId = response.data.result.detail_items[0].order_item_id;
    console.log('Order Item ID:', orderItemId)

    expect(response.status).to.equal(200)

})

export { orderItemId }
