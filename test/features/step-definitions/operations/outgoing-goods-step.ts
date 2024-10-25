import { Given, When, Then } from '@cucumber/cucumber'
import outgoingGoodsPage from '../../pageobjects/operations/outgoing-goods-page.ts';
import { kodeTransaksi } from '../../step-definitions/procurement/penjualan-step.ts'
import { expect } from 'chai';
import axios from 'axios'
import path from 'path';
import fs from 'fs';
import { error } from 'console';

let found;

let title: any
let invoiceId: any
let orderId: any
let invoiceGlobal: any
let downloadPath: any
let text: any

let getTodayDateCSV: any
let getTomorrowDate: any
let getYesterdayDate: any
let year: any
let day: any
let month: any
let tomorrow: Date
let requestBody: any
let response: any
let getTodayDate: any 
let today: Date
let Yesterday: Date
let minutes: any
let hours: any



getTodayDateCSV = (): string => {
    today = new Date()
    year = today.getFullYear()
    month = String(today.getMonth() + 1).padStart(2, '0')
    day = String(today.getDate()).padStart(2, '0')
    hours = String(today.getHours()).padStart(2, '0');
    minutes = String(today.getMinutes()).padStart(2, '0');
    return `${year}${month}${day}${hours}${minutes}`
}
getYesterdayDate = (): string => {
    Yesterday = new Date()
    year = Yesterday.getFullYear()
    month = String(Yesterday.getMonth() + 1).padStart(2, '0')
    day = String(Yesterday.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}
getTodayDate = (): string => {
    today = new Date()
    year = today.getFullYear()
    month = String(today.getMonth() + 1).padStart(2, '0')
    day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}
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

When('User click cari kode invoice', async () => {
    await outgoingGoodsPage.btnCari.click()
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
    await outgoingGoodsPage.btnTerapkan.click()
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

When('User click assign kurir', async() => {
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
    await browser.pause(1000);
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

Then ('User verify {string} in outgoing goods page', async(x:string) => {
    if (x === 'titlePageV3') {
        try {
            await browser.waitUntil(async() => {
                return await outgoingGoodsPage.titlePageV3.isDisplayed()
            }, {
                timeout:120000, timeoutMsg:'titlePageV3 still not displayed'
            })
            title = await outgoingGoodsPage.titlePageV3.getText();
            console.log('### ',await title);
            expect(outgoingGoodsPage.titlePageV3.isDisplayed())
        
        } catch {
            console.error('Title V3',error)
        }
    
    } else if (x === 'titlePageV4') {
        try {
            await browser.waitUntil(async() => {
                return await outgoingGoodsPage.titlePage.isDisplayed()
            }, {
                timeout:120000, timeoutMsg:'titlePage still not displayed'
            })
            title = await outgoingGoodsPage.titlePage.getText();
            console.log('### ',await title);
            expect(outgoingGoodsPage.titlePage.isDisplayed())
    
        } catch {
            console.error('Title V4',error)
        }    
    }

})

When ('User create order from api {string}', async function(shipment) {
    
    if (shipment === 'tomorrow') {
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
                    id: "null",
                    item_id: "null",
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
        await browser.pause(2000);
        expect(response.status).to.equal(200)
        console.log('ID:',response.data.result.id)
    
        orderId = response.data.result.id
        this.orderId = orderId
    
    } else if (shipment === 'today') {
        requestBody = {
            customer_id: 195945,
            superagent_id: 46823,
            customer_level: "SA",
            customer_address_id: 166855,
            payment_type: "COD",
            note: "",
            delivery_date: getTodayDate(),
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
                    id: "null",
                    item_id: "null",
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
        await browser.pause(2000);
        expect(response.status).to.equal(200)
        console.log('ID:',response.data.result.id)
    
        orderId = response.data.result.id
        this.orderId = orderId

    } else if (shipment === 'yesterday') {
        requestBody = {
            customer_id: 195945,
            superagent_id: 46823,
            customer_level: "SA",
            customer_address_id: 166855,
            payment_type: "COD",
            note: "",
            delivery_date: getYesterdayDate(),
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
                    id: "null",
                    item_id: "null",
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
        await browser.pause(2000);
        expect(response.status).to.equal(200)
        console.log('ID:',response.data.result.id)
    
        orderId = response.data.result.id
        this.orderId = orderId
    }
    // let error: any
    // console.error('Error response:', error.response?.data || error.message) 
})

When ('User get kode invoice order', async function() {
    
    await browser.pause(3000);

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.orderId}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })
    await browser.pause(1000);
    console.log('Response status :', response.status)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    invoiceId = response.data.result.invoice
    console.log('Invoice Order:', invoiceId);

    invoiceGlobal = response.data.result.invoice_global
    console.log('Invoice Order:', invoiceGlobal);

    this.invoiceId = invoiceId
    this.invoiceGlobal = invoiceGlobal

})


When ('User input {string} into inputKodeInvoice outgoing goods page', async(kode) => {
    await outgoingGoodsPage.btnSearch.click();
    await browser.pause(1000);
    await outgoingGoodsPage.inputDetailKodeInvoice.setValue(kode)
    await browser.pause(1000);
}) 

When ('User input invoice into inputKodeInvoice outgoing goods page', async function() {
    await outgoingGoodsPage.btnSearch.click();
    await browser.pause(1000);

    if (this.invoiceId) {
        await outgoingGoodsPage.inputDetailKodeInvoice.setValue(this.invoiceId)
        await browser.pause(1000);

    } else if (this.invoiceOrder) {
        await outgoingGoodsPage.inputDetailKodeInvoice.setValue(this.invoiceOrder)
        await browser.pause(1000);
            
    }
}) 

When ('User input invoice into {string} outgoing goods page', async function(x:string) {
    if ( x === 'inputKodeTransaksi') {
        await outgoingGoodsPage.inputKodeTransaksi.click();
        await browser.pause(750)
        if (this.invoiceId) {
            await outgoingGoodsPage.inputKodeTransaksi.setValue(this.invoiceId)
            await browser.pause(1000);
    
        } else if (this.invoiceOrder) {
            await outgoingGoodsPage.inputKodeTransaksi.setValue(this.invoiceOrder)
            await browser.pause(1000);
                
        }
    
    } else if ( x === 'inputKodeTransaksiDetail') {
        await outgoingGoodsPage.inputKodeTransaksiDetail.click();
        await browser.pause(750)
        if (this.invoiceId) {
            await outgoingGoodsPage.inputKodeTransaksiDetail.setValue(this.invoiceId)
            await browser.pause(1000);
    
        } else if (this.invoiceOrder) {
            await outgoingGoodsPage.inputKodeTransaksiDetail.setValue(this.invoiceOrder)
            await browser.pause(1000);
                
        }
    
    }
}) 

When ('User input  code into {string} outgoing goods page', async function(x:string) {
    await browser.refresh();
    if ( x === 'inputKodeTransaksi') {
        await outgoingGoodsPage.inputKodeInvoice.click();
        await browser.pause(750)
        if (this.invoiceId) {
            await outgoingGoodsPage.inputKodeInvoice.setValue(this.invoiceId)
            await browser.pause(1000);
    
        } else if (this.invoiceOrder) {
            await outgoingGoodsPage.inputKodeInvoice.setValue(this.invoiceOrder)
            await browser.pause(1000);
                
        }
    
    } else if ( x === 'inputKodeTransaksiDetail') {
        await outgoingGoodsPage.inputKodeTransaksiDetail.click();
        await browser.pause(750)
        if (this.invoiceId) {
            await outgoingGoodsPage.inputKodeTransaksiDetail.setValue(this.invoiceId)
            await browser.pause(1000);
    
        } else if (this.invoiceOrder) {
            await outgoingGoodsPage.inputKodeTransaksiDetail.setValue(this.invoiceOrder)
            await browser.pause(1000);
                
        }
    
    }
}) 

When ('User click cariKodeInvoice in outgoing goods', async() => {
    await outgoingGoodsPage.btnCari.click();
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
            
    } else if (x === 'error') {
        await browser.waitUntil(async() => {
            let exist = await outgoingGoodsPage.erorValidation.isDisplayed();
            return expect(await exist).to.be.true
            ;
        }, {
            timeout:60000,
            timeoutMsg: 'erorValidation not displayed'
        })
        await browser.pause(5000);
            
    }
}) 

When ('User click {string} in tab filter outgoing goods', async(x:string) => {
    if (x === 'btnPeriode') {
        await outgoingGoodsPage.btnPeriode.click();
        await browser.pause(1000);

    } else if (x === 'btnKota') {
        await outgoingGoodsPage.btnPeriode.click();
        await browser.pause(1000);
        
    }
})

When ('User click optFilter {string} modal in outgoing goods page', async(x:string) => {
    if (x === 'Hari ini') {
        await outgoingGoodsPage.optKirimHariIni.click();
        await browser.pause(2000);
    
    } else if (x === 'Besok') {
        await outgoingGoodsPage.optKirimBesok.click();
        await browser.pause(2000);
    
    } else if (x === 'Kemarin') {
        await outgoingGoodsPage.optKirimKemarin.click();
        await browser.pause(2000);
    
    }
})

When ('User click nav {string} in filter modal', async(x:string) => {
    if (x === 'Gudang') {
        await outgoingGoodsPage.navGudang.click();
        await browser.pause(1000);

    } else if (x === 'Tgl Kirim') {
        await outgoingGoodsPage.navTglKirim.click();
        await browser.pause(1000);
        
    } else if (x === 'Tipe Vendor') {
        await outgoingGoodsPage.navTipeVendor.click();
        await browser.pause(1000);
        
    } else if (x === 'City') {
        await outgoingGoodsPage.navCity.click();
        await browser.pause(1000);
        
    } else if (x === 'Kecamatan') {
        await outgoingGoodsPage.navKecamatan.click();
        await browser.pause(1000);
        
    }
})
When ('User click optFilter {string} modal in outgoing goods', async(x:string) => {
    if (x === 'Hari ini') {
        await outgoingGoodsPage.optHariIni.click();
        await browser.pause(2000);
    
    } else if (x === 'Besok') {
        await outgoingGoodsPage.optBesok.click();
        await browser.pause(2000);
    
    } else if (x === 'Kemarin') {
        await outgoingGoodsPage.optKemarin.click();
        await browser.pause(2000);
    
    } else if (x === 'Custom') {
        await outgoingGoodsPage.optCustom.click();
        await browser.pause(2000);
    
    } else if (x === 'Besok V3') {
        await outgoingGoodsPage.optBesokV3.click();
        await browser.pause(2000);
    
    } else if (x === 'Kemarin V3') {
        await outgoingGoodsPage.optKemarinV3.click();
        await browser.pause(2000);
    
    } else if (x === 'Custom V3') {
        await outgoingGoodsPage.optCustomV3.click();
        await browser.pause(2000);
    
    } else if (x === 'Hari ini V3') {
        await outgoingGoodsPage.optHariIniV3.click();
        await browser.pause(2000);
    
    }
})


When ('User click btnTerapkan in modal filter outgoing goods', async() => {
    await outgoingGoodsPage.btnTerapkan.click();
    await browser.pause(3000);
})

When ('User export csv in outgoing goods page', async() => {
    downloadPath = path.join('downloads', `outgoing_mobil_Aloha_${getTodayDateCSV()}.csv`);

    await outgoingGoodsPage.btnExportCSV.click();
    console.log('Time:',getTodayDateCSV())
    await browser.waitUntil(async () => {
        const fileExist = fs.existsSync(downloadPath)
        console.log(`file exist: ${downloadPath}`)
        return fileExist 
    }, {
        timeout: 120000, 
        timeoutMsg: 'File tidak ditemukan dalam waktu yang ditentukan'
    });

    const fileExists = fs.existsSync(downloadPath);
    const fileIsValid = fileExists && fs.statSync(downloadPath).isFile();

    if (fileIsValid) {
        console.log('File berhasil diunduh dan valid.');
    } else {
        console.log('File tidak valid atau tidak ditemukan.');
    }
})

When ('User clik btnMore filter in outgoin goods page', async() => {
    await outgoingGoodsPage.btnMoreFilter.click();
    await browser.pause(1000);
})

When('User click {string} filter on outgoing page', async(x:string) => {
    if (x==='tanggal kirim') {
        await outgoingGoodsPage.tanggalKirim.click();
        await browser.pause(1000);

    }
});

When ('User click {string} in outgoing goods', async(x:string) => {
    if (x === 'tabTanggalKirim'){
        await outgoingGoodsPage.tabTanggalKirim.click();
        await browser.pause(1000);

    } else if (x === 'tabTanggalKirim'){

    }

})

When ('User click btnDetailOutgoing on outgoing goods', async() => {
    await outgoingGoodsPage.btnDetailOutgoing.waitForClickable({timeout:30000, timeoutMsg:'btnDetailOutgoing is not clickable'})
    await outgoingGoodsPage.btnDetailOutgoing.click();
    await browser.pause(1000);
})

When ('User click checkbox v4 outgoing goods', async() => {
    await outgoingGoodsPage.cbOutgoingAll.click();
    await browser.pause(1000);
})

When ('User click checkbox v3 outgoing goods', async() => {
    await outgoingGoodsPage.checkBoxAll.click();
    await browser.pause(1000);
})

When ('User click {string} outgoing goods', async(x:string) => {
    if (x === 'btnAssignKurir') {
        await outgoingGoodsPage.btnAssignKurir.click();
        await browser.pause(1000);

    } else if (x === 'btnSiapDikirimV4') {
        await outgoingGoodsPage.btnSiapDikirimV4.click();
        await browser.pause(1000);
        
    } else if (x === 'btnDikirimV4') {
        await outgoingGoodsPage.btnDikirimV4.click();
        await browser.pause(1000);
        
    } else if (x === 'btnGantiVendorV4') {
        await outgoingGoodsPage.btnGantiVendorV4.click();
        await browser.pause(1000);
        
    } else if (x === 'btnAssignKurirV4') {
        await outgoingGoodsPage.btnAssignKurirV4.click();
        await browser.pause(1000);
        
    } else if (x === 'btnGantiVendor') {
        await outgoingGoodsPage.btnGantiVendor.click();
        await browser.pause(1000);
        
    } else if (x === 'btnSiapDikirim') {
        await outgoingGoodsPage.btnSiapDikirim.click();
        await browser.pause(1000);
        
    }
})

When ('User click {string} in btnGantiVendor', async(x:string) => {
    if ( x === 'fieldVendorTo') {
        await outgoingGoodsPage.fieldVendorTo.click();
        await browser.pause(1000);

    } else if ( x === 'fieldAlasan') {
        await outgoingGoodsPage.fieldAlasan.click();
        await browser.pause(1000);
    }
})

When ('User click {string} in btnAssignKurir', async(x:string) => {
    if ( x === 'fieldInputDriver') {
        await outgoingGoodsPage.fieldInputDriver.click();
        await browser.pause(1000);

    } else if ( x === 'fieldInputPlat') {
        await outgoingGoodsPage.fieldInputPlat.click();
        await browser.pause(1000);

    } else if ( x === 'fieldInputDriverV4') {
        await outgoingGoodsPage.fieldInputDriverV4.click();
        await browser.pause(1000);

    } else if ( x === 'fieldInputHelperV4') {
        await outgoingGoodsPage.fieldInputHelperV4.click();
        await browser.pause(1000);

    } else if ( x === 'fieldHelper') {
        await outgoingGoodsPage.fieldHelper.click();
        await browser.pause(1000);

    } else if ( x === 'fieldInputPlatV4') {
        await outgoingGoodsPage.fieldInputPlatV4.click();
        await browser.pause(1000);

    }
})

When ('User input {string} in btnGantiVendor', async(x:string) => {
    if ( x === 'INHOUSE ALL AREA') {
        // await outgoingGoodsPage.fieldVendorToV4.setValue(x)
        // await browser.pause(1000);
        // await outgoingGoodsPage.optVendorTo.click();
        await browser.pause(1000);

        found = false;
        while (!found) {
            await browser.keys(['ArrowDown']);
            console.log(`down`)
            await browser.pause(100);

            if (await outgoingGoodsPage.optVendorTo.isDisplayed()) {
                found = true;
                await outgoingGoodsPage.optVendorTo.scrollIntoView();
                await outgoingGoodsPage.optVendorTo.click();
                await browser.pause(1000);
            }
                
        }

    } else if ( x === 'Order jumlah besar') {
        // await outgoingGoodsPage.fieldAlasanV4.setValue(x)
        await browser.pause(1000);
        await outgoingGoodsPage.optAlasan.scrollIntoView();
        await outgoingGoodsPage.optAlasan.click();
        await browser.pause(1000);
    }
})

When ('User input {string} in btnAssignKurir', async(x:string) => {
    if ( x === 'Kurir NF') {
        await outgoingGoodsPage.fieldInputDriver.setValue(x)
        await browser.pause(750);
        await browser.keys(['Enter']);
        await browser.pause(1000);

    } else if ( x === 'S9430NG') {
        await outgoingGoodsPage.fieldInputPlat.setValue(x)
        await browser.pause(750);
        await browser.keys(['Enter']);
        await browser.pause(1000);

    } else if ( x === 'udin') {
        await outgoingGoodsPage.fieldHelper.setValue(x)
        await browser.pause(750);
        await outgoingGoodsPage.optHelper.click();
        await browser.pause(1000);
    }
})

When ('User input {string} in btnAssignKurir v4', async(x:string) => {
    if ( x === 'Kurir NF') {
        await outgoingGoodsPage.fieldInputDriverV4.setValue(x)
        await browser.pause(750);
        await browser.keys(['Enter']);
        await browser.pause(1000);

    } else if ( x === 'S9430NG') {
        await outgoingGoodsPage.fieldInputPlatV4.setValue(x)
        await browser.pause(750);
        await browser.keys(['Enter']);
        await browser.pause(1000);

    } else if ( x === 'udin') {
        await outgoingGoodsPage.fieldInputHelperV4.setValue(x)
        await browser.pause(750);
        await outgoingGoodsPage.optHelperV4.click();
        await browser.pause(1000);
    }
})

When('User click btnAssignModal in btnAssignKurir', async() => {
    await outgoingGoodsPage.btnAssignModal.click();
    await browser.pause(1000);
});

When ('User click btnGanti in btnGantiVendor', async() => {
    await outgoingGoodsPage.btnGanti.click();
    await browser.pause(1000)
})

When ('User click btnGantiV4 in btnGantiVendor', async() => {
    await outgoingGoodsPage.btnGantiV4.click();
    await browser.pause(1000)
})

Then ('User able to see {string} message in detail outgoing goods', async(x:string) => {
    if ( x === 'successAlert') {
        try {
            await browser.waitUntil(async() => {
                return expect (await outgoingGoodsPage.successAlert.isDisplayed());
            }, {
                timeout:35000
            })
            text = await outgoingGoodsPage.successAlert.getText();
            console.log('Message is:',await text);
            await browser.pause(5000)
    
        }catch{
            console.error(error)
        }

    } else if ( x === 'successAlertV3') {
        try {
            await browser.waitUntil(async() => {
                return expect (await outgoingGoodsPage.successAlertV3.isDisplayed());
            }, {
                timeout:35000
            })
            text = await outgoingGoodsPage.successAlertV3.getText();
            console.log('Message is:',await text);
            await browser.pause(5000)
    
        }catch{
            console.error(error)
        }

    }
})

When ('User click {string} in modal detail outgoing', async(x:string) => {
    if (x === 'Ubah Status') {
        await outgoingGoodsPage.btnUbahStatusModal.click();
        await browser.pause(1000);
    
    } else if (x === 'Batal Ubah') {
        await outgoingGoodsPage.btnTidakJadi.click();
        await browser.pause(1000);
    
    } if (x === 'Ubah Status V3') {
        await outgoingGoodsPage.btnUbahStatusModalV3.click();
        await browser.pause(1000);
    
    } else if (x === 'Batal Ubah V3') {
        await outgoingGoodsPage.btnTidakJadiV3.click();
        await browser.pause(1000);
    
    }

})

When ('User click btnSeeDetails in outgoing goods', async() => {
    await outgoingGoodsPage.btnSeeDetails.waitForClickable({timeout:90000})
    await outgoingGoodsPage.btnSeeDetails.click();
    await browser.pause(1000);
})
