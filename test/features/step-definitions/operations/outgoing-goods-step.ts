import { Given, When, Then } from '@cucumber/cucumber'
import outgoingGoodsPage from '../../pageobjects/operations/outgoing-goods-page.ts';
import { kodeTransaksi } from '../../step-definitions/procurement/penjualan-step.ts'
import { expect } from 'chai';
import axios from 'axios'

let title: any
let getTomorrowDate: any
let year: any
let day: any
let month: any
let tomorrow: any
let requestBody: any
let response: any


getTomorrowDate = (): string => {
    tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    year = tomorrow.getFullYear()
    month = String(tomorrow.getMonth() + 1).padStart(2, '0')
    day = String(tomorrow.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}


When('I click tanggal kirim', async() => {
    await outgoingGoodsPage.tanggalKirim.click();
        });

When('I click tanggal kirim v4', async() => {
    await outgoingGoodsPage.tanggalKirimV4.click();
        });

When('I select hari ini', async() => {
    await outgoingGoodsPage.tanggalHariIni.click();
        });

When('I select hari ini v4', async() => {
    await outgoingGoodsPage.tanggalHariIniV4.click();
        });

When('I input kode invoice', async () => {
    await outgoingGoodsPage.buttonKodeInvoice.click()
    await outgoingGoodsPage.inputKodeInvoice.setValue(kodeTransaksi)
    await browser.pause(3000);
});

When('I input detail kode invoice', async () => {
    await outgoingGoodsPage.buttonDetailKodeInvoice.click()
    await outgoingGoodsPage.inputDetailKodeInvoice.setValue(kodeTransaksi)
    await browser.pause(3000);
});

When('I input kode invoice v4', async () => {
    await outgoingGoodsPage.inputKodeInvoiceV4.setValue(kodeTransaksi);
    await browser.pause(20000);
});

When('I click cari kode invoice', async () => {
    await outgoingGoodsPage.cariKodeInvoice.click()
    await browser.pause(3000);
})

When('I click see details', async () => {
    await outgoingGoodsPage.seeDetails.click()
    await browser.pause(4000);
})

When('I input kode transaksi', async() => {
    await outgoingGoodsPage.inputKodeTransaksi.setValue(kodeTransaksi);
    await browser.pause(10000);
         });

When('I click detail outgoing', async() => {
    await outgoingGoodsPage.detailOutgoing.click();
    await browser.pause(10000)
        });

When('I click checkbox', async() => {
    await outgoingGoodsPage.checkbox.click()
        })

When('I click checkbox v4', async() => {
    await outgoingGoodsPage.checkboxV4.click()
        })

When('I click terapkan', async() => {
    await outgoingGoodsPage.terapkan.click()
    await browser.pause(5000)
        })

When('I click ganti vendor', async() => {
    await outgoingGoodsPage.gantiVendor.click()
})

When('I select vendor tujuan', async() => {
    await outgoingGoodsPage.vendorTujuan.click()
    await outgoingGoodsPage.vendorTujuan.setValue('Inhouse')
    await outgoingGoodsPage.vendorTujuanInhouseAllArea.click()
})

When('I select alasan', async() => {
    await outgoingGoodsPage.alasan.click()
    await outgoingGoodsPage.alasanMinimalDrop.click()
})

When('I click ganti', async() => {
    await outgoingGoodsPage.btnGanti.click()
    await browser.pause(5000)
});

When('I refresh the page', async() => {
    await browser.refresh()
});

When('I click assign kurir', async() => {
    await outgoingGoodsPage.assignKurir.click();
});

When('I select driver', async() => {
    await outgoingGoodsPage.driver.click();
    await outgoingGoodsPage.driver.setValue('Kurir NF');
    await browser.keys('Enter');
});

When('I select plat nomor', async() => {
    await outgoingGoodsPage.noPlate.click();
    await outgoingGoodsPage.noPlate.setValue('S9430NG');
    await browser.keys('Enter');
    await browser.pause(2000)
});

When('I click assign', async() => {
    await outgoingGoodsPage.btnAssign.click();
});

When('I click siap dikirim', async() => {
    await browser.pause(2000)
    await outgoingGoodsPage.btnSiapDikirim.click();
});

When('I click ubah status', async() => {
    await outgoingGoodsPage.btnUbahStatus.click();
    await browser.pause(5000);
});

When('I click dikirim', async() => {
    await browser.pause(2000)
    await outgoingGoodsPage.btnDikirim.click();
});

Then ('User verify titlePage in outgoing goods page', async() => {
    await browser.waitUntil(async() => {
        return await outgoingGoodsPage.titlePage.isDisplayed()
    }, {
        timeout:120000, timeoutMsg:'titlePage still not displayed'
    })
    title = await outgoingGoodsPage.titlePage.getText();
    console.log('### ',await title);
    expect(outgoingGoodsPage.titlePage.isDisplayed).to.be.true
})

When ('User create order from api', async function() {
    
    requestBody = {
        customer_id: 195945,
        superagent_id: 46823,
        customer_level: "SA",
        customer_address_id: 166855,
        payment_type: "COD",
        note: "",
        delivery_date: getTomorrowDate(),
        group_type: "grosir",
        promos: [],
        promo_type: "",
        use_point: true,
        grand_total: 900000,
        sub_total: 900000,
        discount: 0,
        items: [
            {
                sub_total: 900000,
                promos: [],
                id: null,
                item_id: null,
                product_detail_id: 22647,
                product_attribute_id: 11622,
                product_id: 7504,
                product_name: "Automated Stock | ra",
                product_sku: "",
                selling_price: 90000,
                discount: 0,
                selling_price_now: 0,
                conversion_points: 0,
                deduction_points: 0,
                unit: "Bag",
                content: "",
                dimension_length: "",
                dimension_height: "",
                dimension_width: "",
                weight: "0",
                delete: 0,
                quantity: 10,
                type: "regular"
            }
        ],
        superagent_discount: 0,
        warehouse_company_id: "0",
        discount_percent: 0,
        page_id: "dummy page id",
        token: "WAgyQtzpfnKAEPCgA-Wj",
        profit: 0,
        cash_received: 0,
        deduction_points: 0
    }
    
    response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/order/create', requestBody, {
        headers: {
            "Authorization": `Bearer ${this.token}`
            
        }
    }) 
    let error: any
    console.error('Error response:', error.response?.data || error.message) 
})

When ('User input {string} into inputKodeInvoice outgoing goods page', async(kode) => {
    await outgoingGoodsPage.btnSearch.click();
    await browser.pause(1000);
    await outgoingGoodsPage.inputDetailKodeInvoice.setValue(kode)
    await browser.pause(1000);
}) 

When ('User click cariKodeInvoice in outgoing goods', async() => {
    await outgoingGoodsPage.cariKodeInvoice.click();
    await browser.pause(3000);
}) 

Then ('User able to see {string} in outgoing goods page', async(x:string) => {
    if (x === 'list mobil') {
        await browser.waitUntil(async() => {
            let exist = await outgoingGoodsPage.listMobil.isDisplayed();
            return expect(await exist).to.be.true
            ;
        }, {
            timeout:60000,
            timeoutMsg: 'list mobil still not displayed'
        })
        await browser.pause(5000);

    } else if (x === 'list mobil') {
        await outgoingGoodsPage.btnTabMotor.click();
        await browser.waitUntil(async() => {
            let exist = await outgoingGoodsPage.listMobil.isDisplayed();
            return expect(await exist).to.be.true
            ;
        }, {
            timeout:60000,
            timeoutMsg: 'list mobil still not displayed'
        })
        await browser.pause(5000);
            
    }
}) 





