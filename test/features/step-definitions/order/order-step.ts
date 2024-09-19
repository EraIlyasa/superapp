import { Given, When, Then } from '@cucumber/cucumber';
import orderPage from '../../../src/pages/order/order-page.ts';

let kodeTransaksi: string
let orderId: string

When('I click button add', async() => {
    orderPage.btnAdd.isClickable;
    await orderPage.btnAdd.click();
        });
        
When('I click marketplace', async() => {
    await orderPage.marketplace.click();
        });  

 When('I select agen pemesanan', async() => {
    await orderPage.agenPemesanan.click();
    await orderPage.optAgenPemesan.click();
         });

 When('I select alamat kirim', async() => {
    await orderPage.alamatKirim.click();
    await orderPage.optAlamatKirim.click();
         }); 
         
 When('I select superagen', async() => {
    await orderPage.superagen.click();
    await orderPage.optSuperagen.click();
         });
         
When('I click button tambah produk', async() => {
    await orderPage.btnTambahProduk.scrollIntoView();
    await orderPage.btnTambahProduk.click();
         });  
        
When('I select nama produk', async() => {
    await orderPage.namaProduct.click();
    await orderPage.optNamaProduct.click();
         });
         
When('I select satuan', async() => {
    await orderPage.satuan.click();
    await orderPage.optSatuan.click();
         });

When('I select quantity {string}', async(x : string) => {
    await orderPage.quantity.setValue(x);
    await browser.pause(2000);
         });

 When('I click simpan item', async() => {
    await orderPage.btnSave.click();
         });

When('I click simpan form', async() => {
    await orderPage.btnUpdate.click();
         });

When('I click simpan order', async() => {
    await orderPage.btnSubmit.click()
         });

Then('I get kode transaksi', async() => {
    await orderPage.kodeTransaksi.isDisplayed()
    kodeTransaksi = await orderPage.kodeTransaksi.getText()
    console.log('Kode Transaksi is : ' + kodeTransaksi)
    await browser.pause(3000)
         })
    export { kodeTransaksi }

When('I click kode transaksi', async() => {
    await orderPage.kodeTransaksi.click()
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
                       

         
         