import { When, Then } from '@cucumber/cucumber'
import penjualanPage from '../../pageobjects/procurement/penjualan-page'

let kodeTransaksi: string
let orderId: string

When('I click button add', async() => {
    penjualanPage.btnAdd.isClickable
    await penjualanPage.btnAdd.click()
        })
        
When('I click marketplace', async() => {
    await penjualanPage.marketplace.click()
        })

 When('I select agen pemesanan', async() => {
    await penjualanPage.agenPemesanan.click()
    await penjualanPage.optAgenPemesan.click()
         })

 When('I select alamat kirim', async() => {
    await penjualanPage.alamatKirim.click()
    await penjualanPage.optAlamatKirim.click()
         })
         
 When('I select superagen', async() => {
    await penjualanPage.superagen.click();
    await penjualanPage.optSuperagen.click();
         })
         
When('I click button tambah produk', async() => {
    await penjualanPage.btnTambahProduk.scrollIntoView();
    await penjualanPage.btnTambahProduk.click();
         })
        
When('I select nama produk', async() => {
    await penjualanPage.namaProduct.click();
    await penjualanPage.optNamaProduct.click();
         });
         
When('I select satuan', async() => {
    await penjualanPage.satuan.click();
    await penjualanPage.optSatuan.click();
         });

When('I select quantity {string}', async(x : string) => {
    await penjualanPage.quantity.setValue(x);
    await browser.pause(2000);
         });

 When('I click simpan item', async() => {
    await penjualanPage.btnSave.click();
         });

When('I click simpan form', async() => {
    await penjualanPage.btnUpdate.click();
         });

When('I click simpan order', async() => {
    await penjualanPage.btnSubmit.click()
         });

Then('I get kode transaksi', async() => {
    await penjualanPage.kodeTransaksi.isDisplayed()
    kodeTransaksi = await penjualanPage.kodeTransaksi.getText()
    console.log('Kode Transaksi is : ' + kodeTransaksi)
    await browser.pause(3000)
         })
    export { kodeTransaksi }

When('I click kode transaksi', async() => {
    await penjualanPage.kodeTransaksi.click()
    await browser.pause(5000)
})

Then('I get order id', async () => {
    const currentUrl = await browser.getUrl();
    const match = currentUrl.match(/\/(\d+)$/);
    if (match) {
        orderId = match[1];
        console.log('Order Id is : ' + orderId);
    } else {
        console.log('Kode Transaksi tidak ditemukan di URL')
    }
    await browser.pause(3000);
});
    export { orderId };
                       

         
         