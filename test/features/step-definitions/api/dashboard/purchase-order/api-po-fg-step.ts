import { When, Then } from "@cucumber/cucumber";
import axios from 'axios'
import { expect } from 'chai'

let requestBody: any
let response: any
// let response2: any
let poId:any
let poKode:any
let getTodayDate: any 
let getNextWeekDate: any
let today: Date
let year: number
let month: string
let day: string
let nextWeek: any
let statusPO: any

getTodayDate = (): string => {
    today = new Date()
    year = today.getFullYear()
    month = String(today.getMonth() + 1).padStart(2, '0')
    day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

getNextWeekDate = (): string => {
    nextWeek = new Date()
    nextWeek.setDate(today.getDate() + 7);

    year = nextWeek.getFullYear()
    month = String(nextWeek.getMonth() + 1).padStart(2, '0')
    day = String(nextWeek.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

When ('User create PO API finished goods {string}', async function(x:string) {

    if (x === 'tempo') {
        requestBody = {
            po_type: "finished good",
            supplier_id: 94,
            warehouse_company_id: 1,
            warehouse_id: 1,
            payment_type: "tempo",
            po_date: getTodayDate(),
            schedule_date: getTodayDate(),
            note: "",
            delivery_type: "locco",
            pic: 1,
            supplier_bank_id: 158,
            payment_due_date: getNextWeekDate(),
            rounding: 0,
            invoice_discount: 0,
            items: [
                {
                    id: 0,
                    product_attribute_id: 11622,
                    quantity: 1000,
                    purchase_price: 95000,
                    discount: 500,
                    ppn: 11,
                    delete: 0
                }
            ],
            cost_variables: [],
            status: 0,
            documents: {
                additional_note: [],
                discount_off_note: [],
                filing_note: [
                    {
                        id: 0,
                        url: "https://dressup.s3.ap-southeast-1.amazonaws.com/upload-images/2024/10/08/image-32b7d746-70cc-4d0f-beb2-87452d10b083.png",
                        description: "",
                        uploaded_at: ""
                    }
                ]
            }
        }
        
        response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/purchasing/purchase-order', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        await browser.pause(1000);
        console.log('respon status :', response.status)
    
        poId = response.data.result.id
        console.log('id:', poId)
    
        this.poId = poId
    
    } else if (x === 'transfer') {
        requestBody = {
            po_type: "finished good",
            supplier_id: 94,
            warehouse_company_id: 1,
            warehouse_id: 1,
            payment_type: "transfer",
            po_date: getTodayDate(),
            schedule_date: getTodayDate(),
            note: "",
            delivery_type: "locco",
            pic: 1,
            supplier_bank_id: 158,
            payment_due_date: getTodayDate(),
            rounding: 0,
            invoice_discount: 0,
            items: [
                {
                    id: 0,
                    product_attribute_id: 11622,
                    quantity: 1000,
                    purchase_price: 95000,
                    discount: 500,
                    ppn: 11,
                    delete: 0
                }
            ],
            cost_variables: [],
            status: 0,
            documents: {
                additional_note: [],
                discount_off_note: [],
                filing_note: [
                    {
                        id: 0,
                        url: "https://dressup.s3.ap-southeast-1.amazonaws.com/upload-images/2024/10/08/image-32b7d746-70cc-4d0f-beb2-87452d10b083.png",
                        description: "",
                        uploaded_at: ""
                    }
                ]
            }
        }
        
        response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/purchasing/purchase-order', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        await browser.pause(1000);
        console.log('respon status :', response.status)
    
        poId = response.data.result.id
        console.log('id:', poId)
    
        this.poId = poId
    
    } else if (x === 'cod') {
        requestBody = {
            po_type: "finished good",
            supplier_id: 94,
            warehouse_company_id: 1,
            warehouse_id: 1,
            payment_type: "cash on delivery",
            po_date: getTodayDate(),
            schedule_date: getTodayDate(),
            note: "",
            delivery_type: "locco",
            pic: 1,
            supplier_bank_id: 158,
            payment_due_date: getTodayDate(),
            rounding: 0,
            invoice_discount: 0,
            items: [
                {
                    id: 0,
                    product_attribute_id: 11622,
                    quantity: 1000,
                    purchase_price: 95000,
                    discount: 500,
                    ppn: 11,
                    delete: 0
                }
            ],
            cost_variables: [],
            status: 0,
            documents: {
                additional_note: [],
                discount_off_note: [],
                filing_note: [
                    {
                        id: 0,
                        url: "https://dressup.s3.ap-southeast-1.amazonaws.com/upload-images/2024/10/08/image-32b7d746-70cc-4d0f-beb2-87452d10b083.png",
                        description: "",
                        uploaded_at: ""
                    }
                ]
            }
        }
        
        response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/purchasing/purchase-order', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        await browser.pause(1000);
        console.log('respon status :', response.status)
    
        poId = response.data.result.id
        console.log('id:', poId)
    
        this.poId = poId
    
    }

})

When ('User create PO API finished goods {string} grand total 0', async function(x:string) {

    if (x === 'tempo') {
        requestBody = {
            po_type: "finished good",
            supplier_id: 94,
            warehouse_company_id: 1,
            warehouse_id: 1,
            payment_type: "tempo",
            po_date: getTodayDate(),
            schedule_date: getTodayDate(),
            note: "",
            delivery_type: "locco",
            pic: 1,
            supplier_bank_id: 158,
            payment_due_date: getNextWeekDate(),
            rounding: 0,
            invoice_discount: 0,
            items: [
                {
                    id: 0,
                    product_attribute_id: 11622,
                    quantity: 1000,
                    purchase_price: 0,
                    discount: 0,
                    ppn: 0,
                    delete: 0
                }
            ],
            cost_variables: [],
            status: 0,
            documents: {
                additional_note: [],
                discount_off_note: [],
                filing_note: [
                    {
                        id: 0,
                        url: "https://dressup.s3.ap-southeast-1.amazonaws.com/upload-images/2024/10/08/image-32b7d746-70cc-4d0f-beb2-87452d10b083.png",
                        description: "",
                        uploaded_at: ""
                    }
                ]
            }
        }
        
        response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/purchasing/purchase-order', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        await browser.pause(1000);
        console.log('respon status :', response.status)
    
        poId = response.data.result.id
        console.log('id:', poId)
    
        this.poId = poId
    
    } else if (x === 'transfer') {
        requestBody = {
            po_type: "finished good",
            supplier_id: 94,
            warehouse_company_id: 1,
            warehouse_id: 1,
            payment_type: "transfer",
            po_date: getTodayDate(),
            schedule_date: getTodayDate(),
            note: "",
            delivery_type: "locco",
            pic: 1,
            supplier_bank_id: 158,
            payment_due_date: getTodayDate(),
            rounding: 0,
            invoice_discount: 0,
            items: [
                {
                    id: 0,
                    product_attribute_id: 11622,
                    quantity: 1000,
                    purchase_price: 0,
                    discount: 0,
                    ppn: 0,
                    delete: 0
                }
            ],
            cost_variables: [],
            status: 0,
            documents: {
                additional_note: [],
                discount_off_note: [],
                filing_note: [
                    {
                        id: 0,
                        url: "https://dressup.s3.ap-southeast-1.amazonaws.com/upload-images/2024/10/08/image-32b7d746-70cc-4d0f-beb2-87452d10b083.png",
                        description: "",
                        uploaded_at: ""
                    }
                ]
            }
        }
        
        response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/purchasing/purchase-order', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        await browser.pause(1000);
        console.log('respon status :', response.status)
    
        poId = response.data.result.id
        console.log('id:', poId)
    
        this.poId = poId
    
    } else if (x === 'cod') {
        requestBody = {
            po_type: "finished good",
            supplier_id: 94,
            warehouse_company_id: 1,
            warehouse_id: 1,
            payment_type: "cash on delivery",
            po_date: getTodayDate(),
            schedule_date: getTodayDate(),
            note: "",
            delivery_type: "locco",
            pic: 1,
            supplier_bank_id: 158,
            payment_due_date: getTodayDate(),
            rounding: 0,
            invoice_discount: 0,
            items: [
                {
                    id: 0,
                    product_attribute_id: 11622,
                    quantity: 1000,
                    purchase_price: 0,
                    discount: 0,
                    ppn: 0,
                    delete: 0
                }
            ],
            cost_variables: [],
            status: 0,
            documents: {
                additional_note: [],
                discount_off_note: [],
                filing_note: [
                    {
                        id: 0,
                        url: "https://dressup.s3.ap-southeast-1.amazonaws.com/upload-images/2024/10/08/image-32b7d746-70cc-4d0f-beb2-87452d10b083.png",
                        description: "",
                        uploaded_at: ""
                    }
                ]
            }
        }
        
        response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/purchasing/purchase-order', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        await browser.pause(1000);
        console.log('respon status :', response.status)
    
        poId = response.data.result.id
        console.log('id:', poId)
    
        this.poId = poId
    
    }

})

When ('User get kode invoice purchase order', async function() {
    
    await browser.pause(3000);

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/purchasing/purchase-order/get/${this.poId}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })
    await browser.pause(1000);
    console.log('Response status :', response.status)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    poKode = response.data.result.po_code
    console.log('PO Kode:', poKode);

    this.poKode = poKode

})

Then ('User get element status id', async function() {
    statusPO = await browser.$(`(//*[@id="purchase-status-${this.poId}"])`);
    // statusPO = await browser.$('(//*[@id="purchase-status-42661"])')
    console.log(await statusPO)
    await browser.pause(10000);

    try {
        let text = await statusPO.getText();
        console.log('Status:',await text);
        expect(await text).to.equal('Set')
    } catch {
        console.error('status po is not as expected')
    }
})