import e2eOrder from '../../pageobjects/e2e/e2eOrderPage.ts';
import { Given, When, Then } from '@cucumber/cucumber';
import { Key } from 'webdriverio';
import axios from 'axios';
import { expect } from 'chai';
import * as path from 'path';
import fs from 'fs';

const order = e2eOrder;
let token: string;
let tokenCourier: string;
let orderId: number;
let orderItemId: number;
let orderItemId1: number;
let orderDelivery: string;
let invoiceNumber: string;
let grandTotal: string;
let firstLine: string;
let secondLine: string;
let thirdLine: string;
let fourthLine: string;
let fifthLine: string;
let sixthLine: string;
let seventhLine: string;
let eighthLine: string;

When ('User wait for 1 minute', async () => {
    await browser.pause(60000);
})

When ('User wait for 45 seconds', async () => {
    await browser.pause(45000);
})

When ('User wait for 3 second', async () => {
    await browser.pause(3000);
})

When ('User click "navMenuOrder" in global page', async() => {
    await order.navMenuOrder.scrollIntoView();
    await order.navMenuOrder.click();
})

When ('User click "menuPenjualan" in "navMenuOrder"', async() => {
    await order.menuPenjualan.click();
})

When ('User click "btnAddOrder"', async () => {
    await order.btnAddOrder.click();
})

//order marketplace

When ('User click "btnMarketPlace" in "btnAddOrder"', async () => {
    await order.btnMarketPlace.click();
})

When ('User click "agenPemesanMarketPlace"', async () => {
    await order.agenPemesanMarketPlace.click();
})

When ('User click "optAgenPemesan" in "agenPemesanMarketPlace"', async () => {
    await order.optAgenPemesan.click();
})

When ('User click "alamatKirimMarketPlace"', async () => {
    await order.alamatKirimMarketPlace.click();
})

When ('User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"', async () => {
    await order.optAlamatKirimMarketPlace.click();
})

When ('User click "superAgenMarketPlace"', async () => {
    await order.superAgenMarketPlace.click();
})

When ('User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"', async () => {
    await order.optSuperAgenMarketPlace.click();
})

When ('User click "addProductMP"', async () => {
    await order.addProductMP.scrollIntoView();
    await order.addProductMP.click();
})

When ('User click "namaProductModalMP"', async () => {
    await order.namaProductModalMP.click();
})

When ('User click "namaProductModalMP2"', async () => {
    await order.namaProductModalMP2.click();
})

When ('User click "optNamaProduct" in "namaProductModalMP"', async () => {
    await order.optNamaProduct.click();
})

When ('User click "optNamaProduct2" in "namaProductModalMP"', async () => {
    await order.optNamaProduct2.click();
})

When ('User click "optNamaProduct3" in "namaProductModalMP2"', async () => {
    await order.optNamaProduct3.click();
})

When ('User type {string} in "namaProductModalMP"', async (nama) => {
    // await order.namaProductModalMP2.click();
    // await browser.pause(3000);
    await order.namaProductModalMP.setValue(nama);
    await browser.pause(3000);
    // await browser.sendKeys(['Enter']);
})

When ('User click "optNamaProduct4" in "namaProductModalMP"', async () => {
    await order.optNamaProduct4.click();
})

When ('User click "optNamaProduct5" in "namaProductModalMP"', async () => {
    await order.optNamaProduct5.scrollIntoView();
    await order.optNamaProduct5.click();
})

When ('User type {string} in "namaProductModalMP2"', async (nama) => {
    await order.namaProductModalMP2.setValue(nama);
    await browser.keys(['Enter']);
})

When ('User click "inputSatuanModalMP"', async () => {
    await order.inputSatuanModalMP.click();
})

When ('User click "optSatuanModalMP" in "inputSatuanModalMP"', async () => {
    await order.optSatuanModalMP.click();
})

When ('User click "optSatuanModalMP2" in "inputSatuanModalMP"', async () => {
    await order.optSatuanModalMP2.click();
})

When ('User click "optSatuanModalMP3" in "inputSatuanModalMP"', async () => {
    await order.optSatuanModalMP3.click();
})

When ('User click "optSatuanModalMP4" in "inputSatuanModalMP"', async () => {
    await order.optSatuanModalMP4.click();
})

When ('User click "optSatuanModalMP5" in "inputSatuanModalMP"', async () => {
    await order.optSatuanModalMP5.click();
})

When ('User click "inputQtyModalMP"', async () => {
    await order.inputQtyModalMP.click();
})

When ('User input {string} in "inputQtyModalMP"', async (qty) => {
    await order.inputQtyModalMP.setValue(qty);
})

When ('User click "inputQtyModalMP2"', async () => {
    await order.inputQtyModalMP2.click();
})

When ('User input {string} in "inputQtyModalMP2"', async (qty) => {
    await order.inputQtyModalMP2.setValue(qty);
})

When ('User click "btnSimpanModalListMP"', async () => {
    await order.btnSimpanModalListMP.click();
})

When ('User click "btnSimpanModalMP"', async () => {
    await order.btnSimpanModalMP.click();
})

When ('User click "btnTambahVoucher"', async () => {
    await order.btnTambahVoucher.click();
})

When ('User click "checkboxVoucher"', async () => {
    await order.checkboxVoucher.click();
})

When ('User click "btnSimpanVoucher"', async () => {
    await order.btnSimpanVoucher.click();
})

When ('User click "editProductMP"', async () => {
    await order.editProductMP.scrollIntoView();
    await order.editProductMP.click();
})

When ('User click "btnDeleteProductModal"', async () => {
    await order.btnDeleteProductModal.click();
});

When('Alert voucher disabled shown', async () => {
    const notificationElement = await order.alertVoucherLepas;

    await notificationElement.waitForExist({ timeout: 5000 });

    const notificationText = await notificationElement.getText();

    expect(notificationText).equal('Voucher terlepas karena tidak memenuhi persyaratan');
});

When ('User click "btnSubmitOrder"', async () => {
    await order.btnSubmitOrder.click();
})

// When ('User select the invoice number', async () => {
//     const invoiceElement = await $(`span[id^="detail-invoice-penjualan-"]`);

//     const invoiceNumber = await invoiceElement.getText();

//     console.log('Invoice Number:', invoiceNumber);

//     await browser.execute((code) => {
//         navigator.clipboard.writeText(code);
//     }, invoiceNumber);

//     if (process.platform === 'darwin') {
//         await browser.keys(['Meta', 'c']); // Cmd+C for macOS
//     } else {
//         await browser.keys(['Control', 'c']); // Ctrl+C for Windows/Linux
//     }
// })

When('User select the invoice number', async () => {
    let invoiceElement = await $(`span[id^="detail-invoice-penjualan-"]`);

    // Get the invoice number
    let invoiceNumber = await invoiceElement.getText();
    console.log('Invoice Number:', invoiceNumber);

    // Execute script to copy the invoice number to the clipboard
    await browser.execute(async (code) => {
        try {
            await navigator.clipboard.writeText(code);
            console.log('Invoice number copied to clipboard:', code);
        } catch (err) {
            console.error('Failed to copy text to clipboard', err);
        }
    }, invoiceNumber);
});

When ('User click "navMenuLogistic"', async () => {
    await order.navMenuLogistic.scrollIntoView();
    await order.navMenuLogistic.click();
})

When ('User click "menuOutgoingGoods" in "navMenuLogistic"', async () => {
    await order.menuOutgoingGoods.scrollIntoView();
    await order.menuOutgoingGoods.click();
})

When ('User click "tabMotor"', async () => {
    await order.tabMotor.click();
})

When ('User click "tanggalKirim"', async () => {
    await order.tanggalKirim.click();
})

When ('User click "pilihHariIni" in "tanggalKirim"', async () => {
    await order.pilihHariIni.click();
})

When ('User click "inputSearchKodeInvoice"', async () => {
    await order.inputSearchKodeInvoice.click();
})

When ('User click "searchTransaction"', async () => {
    await order.searchTransaction.click();
})

When ('User click "selectOrderNewest"', async () => {
    await order.selectOrderNewest.click();
})

When ('User paste the copied invoice number into "searchTransaction"', async () => {
    await order.searchTransaction.click();
    if (process.platform === 'darwin') {
        await browser.keys(['Meta', 'v']); // for mac
    } else {
        await browser.keys(['Control', 'v']); // for windows
    }
})

When ('User paste the copied invoice number into "inputSearchKodeInvoice"', async () => {
    await order.inputSearchKodeInvoice.click();
    if (process.platform === 'darwin') {
        await browser.keys(['Meta', 'v']); // for mac
    } else {
        await browser.keys(['Control', 'v']); // for windows
    }
})

When ('User type enter button', async () => {
    await browser.keys(['Shift', 'Enter']);
})

When ('User click "detailOutgoingBtn"', async () => {
    await order.detailOutgoingBtn.click();
})

When ('User click "detailOutgoingBtn2"', async () => {
    await order.detailOutgoingBtn2.click();
});

When ('User click "checkBox"', async () => {
    await order.checkBox.click();
})

When ('User click "checkbox"', async () => {
    await order.checkbox.click();
});

When ('User click "gantiVendor"', async () => {
    await order.gantiVendor.click();
});

When ('User click "vendorTujuan"', async () => {
    await order.vendorTujuan.click();
});

When ('User type {string} in "vendorTujuan"', async (nama) => {
    await order.vendorTujuan.setValue(nama);
    await browser.keys('Enter');
});

When ('User click "optVendor"', async () => {
    await order.optVendor.click();
});

When ('User click "alasan"', async () => {
    await order.alasan.click();
});

When ('User click "optAlasan"', async () => {
    await order.optAlasan.click();
});

When ('User type {string} in "alasan"', async (alasan) => {
    await order.alasan.setValue(alasan);
    await browser.keys('Enter');
});

When ('User click "btnGanti"', async () => {
    await order.btnGanti.click();
});

When ('User click "btnBack"', async () => {
    await order.btnBack.click();
});

When ('User click "btnSiapDikirim"', async () => {
    await order.btnSiapDikirim.click();
});

When ('User click "btnUbahStatus"', async () => {
    await order.btnUbahStatus.click();
});

When ('User click "btnDikirim"', async () => {
    await order.btnDikirim.click();
})

When('the response should contain a valid access token', function() {
    console.log('Access Token:', this.token);
    expect(this.token).to.not.be.undefined;
    expect(this.token).to.be.a('string').that.is.not.empty;
});

When ('User refresh the page', async () => {
    await browser.refresh();
})

When('User fetches data from API using the existing session', async function () {
    const cookies = await browser.getCookies();
    const tokenCookie = cookies.find(cookie => cookie.name === 'zupper_authorization');

    if (!tokenCookie) {
        throw new Error('Access token not found in cookies.');
    }

    token = tokenCookie.value;
    token = token.replace(/%20/g, ' ');
    console.log('Access Token:', token);
});

When ('User click detail of the transaction', async () => {

    const currentUrl = await browser.getUrl();
    console.log('Current URL:', currentUrl);

    const urlParts = currentUrl.split('/');
    const orderNumber = urlParts[urlParts.length - 1];
    console.log('Order Number:', orderNumber);

    const response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${orderNumber}`, {
        headers: {
            'Authorization': `${token}`
        }
    });

    // console.log('Response:', response);

    orderId = response.data.result.id;
    console.log(`Order ID: ${orderId}`);

    // First, retrieve the primary order item (orderItemId)
    orderItemId = response?.data?.result?.detail_items?.[0]?.order_item_id;
    console.log(`Order Item ID 1: ${orderItemId}`);

    // Now, try to retrieve the second order item (orderItemId1), if it exists
    orderItemId1 = response?.data?.result?.detail_items?.[1]?.order_item_id;

    // Check if orderItemId1 exists; if not, use orderItemId
    const selectedOrderItemId = orderItemId1 || orderItemId;

    // Log the final order item ID
    console.log(`Selected Order Item ID: ${selectedOrderItemId}`);

    orderDelivery = response.data.result.order_delivery.date;
    console.log(`Order Delivery: ${orderDelivery}`);

    grandTotal = response.data.result.grand_total;
    console.log(`Grand Total: ${grandTotal}`);

    invoiceNumber = response.data.result.invoice;
    console.log(`Invoice Number: ${invoiceNumber}`);
})

When('User logged in and have obtained a valid token', async function () {
    const response = await axios.post('https://staging-api-courier.superapp.co.id/api/auth/login', {
        username: "maulanastg",
        password: "123456",
        device_id: "TE1A.220922.029",
        phone_model: "google, emu64a, sdk_gphone64_arm64"
    }, {
        headers: {
            'user-agent': 'Dart/3.3 (dart:io)',
            'accept': 'application/json',
            'content-type': 'application/json'
        }
    });
    tokenCourier = response.data.result.token;
    console.log('Token Courier:', tokenCourier);
});

When('User perform a transaction with specific ID', async function () {

    const response = await axios.post('https://staging-api-courier.superapp.co.id/api/transaction/', {
        latitude: -7.3249667,
        longitude: 112.7891394,
        goods_photos: ["https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png"],
        reject_reason_note: "fraud",
        customer_reject_reason: "Fraud Potential",
        reject_reason: "Customer: Fraud Potential",
        payments: [
            {
                amount: grandTotal,
                payment_photo: "https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png",
                payment_type: "cash"
            }
        ],
        orders: [
            {
                grand_total: grandTotal,
                is_no_rejected: false,
                order_id: orderId,
                items: [
                    {
                        order_item_id: orderItemId,
                        reject_quantity: 1,
                        reject_from: 2
                    }
                ]
            }
        ]
    }, {
        headers: {
            'user-agent': 'Dart/3.3 (dart:io)',
            'accept': 'application/json',
            'content-type': 'application/json',
            'authorization': `Bearer ${tokenCourier}`
        }
    });
});

When('User perform a transaction with specific ID and accept all', async function () {

    const response = await axios.post('https://staging-api-courier.superapp.co.id/api/transaction/', {
        latitude: -7.3249667,
        longitude: 112.7891394,
        goods_photos: ["https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png"],
        reject_reason_note: "",
        customer_reject_reason: "",
        reject_reason: "Customer:",
        payments: [
            {
                amount: grandTotal,
                payment_photo: "https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png",
                payment_type: "cash"
            }
        ],
        orders: [
            {
                grand_total: grandTotal,
                is_no_rejected: true,
                order_id: orderId,
                items: [
                    {
                        order_item_id: orderItemId,
                        reject_quantity: 0,
                        reject_from: 3
                    }
                ]
            }
        ]
    }, {
        headers: {
            'user-agent': 'Dart/3.3 (dart:io)',
            'accept': 'application/json',
            'content-type': 'application/json',
            'authorization': `Bearer ${tokenCourier}`
        }
    });
});

When('User perform a transaction with specific ID 2 products', async function () {

    const response = await axios.post('https://staging-api-courier.superapp.co.id/api/transaction/', {
        latitude: -7.3249667,
        longitude: 112.7891394,
        goods_photos: ["https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png"],
        reject_reason_note: "",
        customer_reject_reason: "",
        reject_reason: "Customer:",
        payments: [
            {
                amount: grandTotal,
                payment_photo: "https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png",
                payment_type: "cash"
            }
        ],
        orders: [
            {
                grand_total: grandTotal,
                is_no_rejected: true,
                order_id: orderId,
                items: [
                    {
                        order_item_id: orderItemId,
                        reject_quantity: 0,
                        reject_from: 1
                    },
                    {
                        order_item_id: orderItemId1,
                        reject_quantity: 0,
                        reject_from: 1
                    }
                ]
            }
        ]
    }, {
        headers: {
            'user-agent': 'Dart/3.3 (dart:io)',
            'accept': 'application/json',
            'content-type': 'application/json',
            'authorization': `Bearer ${tokenCourier}`
        }
    });
});

When ('the transaction should be successfully processed', function () {
    expect(this.response.result).to.equal("true");
    expect(this.response.message).to.equal("Success");
});

When ('User click "navMenuFinance" in global page', async () => {
    // await order.navMenuFinance.scrollIntoView();
    await order.navMenuFinance.click();
});

When ('User click "menuFinance" in global page', async () => {
    await order.menuFinance.scrollIntoView();
    await order.menuFinance.click();
})

When ('User click "menuSetoran" in "navMenuFinance"', async () => {
    await order.menuSetoran.click();
});

When ('User click "menuSetoranV4" in "navMenuFinance"', async () => {
    await order.menuSetoranV4.click();
});

When ('User click "btnBuatSetoran"', async () => {
    await order.btnBuatSetoran.click();
});

When ('User click "pilihTipeOrder"', async () => {
    await order.pilihTipeOrder.click();
});

When ('User click "pilihVendor"', async () => {
    await order.pilihVendor.click();
});

When ('User click "pilihGudang"', async () => {
    await order.pilihGudang.click();
});

When ('User click "pilihGudangAloha"', async () => {
    await order.pilihGudangAloha.click();
});

When ('User click "pilihGudangAlohaRTP"', async () => {
    await order.pilihGudangAlohaRTP.click();
});

When ('User click "pilihKurirVendor"', async () => {
    await order.pilihKurirVendor.click();
});

When ('User type {string} into "pilihKurirVendor"', async (namaKurirVendor) => {
    await order.pilihKurirVendor.setValue(namaKurirVendor);
    await browser.keys(['Enter']);
});

When ('User click "btnImportCSV"', async () => {
    await order.btnImportCSV.click();
});

When ('User click "uploadFileCSV"', async () => {
    await order.uploadFileCSV.click();
});

When ('User upload file to "uploadFileCSV"', async () => {
    async function updateCSVFile(filePath: string, newDate: string, newInvoice: string, newCash: string) {
        // Read csv file
        let csvContent = fs.readFileSync(filePath, 'utf8');

        const rows = csvContent.split('\n');
        const firstDataRow = rows[1].split(',');
        firstDataRow[0] = newDate;
        firstDataRow[1] = newInvoice;
        firstDataRow[2] = newCash;
        rows[1] = firstDataRow.join(',');
        const updatedCSVContent = rows.join('\n');

        fs.writeFileSync(filePath, updatedCSVContent, 'utf8');

        console.log('CSV file updated successfully.');
}

const filePath = path.resolve('../file-csv/file-27bf619c-62ce-4bb7-8c04-cc549f75d0c6 (1).csv');
const newDate = orderDelivery;
const newInvoice = invoiceNumber;
const newCash = grandTotal;

async function updateAndUploadCSV() {
    await updateCSVFile(filePath, newDate, newInvoice, newCash);

    const uploadElement = await order.fileCSV;
    await uploadElement.waitForExist({ timeout: 5000 });
    await browser.execute((el: HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);

    const remoteFilePath = await browser.uploadFile(filePath);
    await uploadElement.setValue(remoteFilePath); // Set the file path to the input element

    await browser.keys(['Enter']);

    console.log('File uploaded successfully.');
}

await updateAndUploadCSV();
});

When ('User click "submitCSV"', async () => {
    await order.submitCSV.click();
});

When ('User click "btnSetor"', async () => {
    await order.btnSetor.click();
});

When ('User click "btnConfirmSetor"', async () => {
    await order.btnConfirmSetor.click();
});

When ('User click "tabInvoiceSudahDisetor"', async () => {
    await order.tabInvoiceSudahDisetor.click();
});

When ('User click "inputSearchKodeInvoiceSudahDisetor"', async () => {
    await order.inputSearchKodeInvoiceSudahDisetor.click();
});

When ('User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"', async () => {
    await order.inputSearchKodeInvoiceSudahDisetor.click();
    if (process.platform === 'darwin') {
        await browser.keys(['Meta', 'v']); // for mac
    } else {
        await browser.keys(['Control', 'v']); // for windows
    }
});

When ('User click "checkboxInvoice"', async () => {
    await order.checkboxInvoice.click();
});

When ('User click "btnSelesaikanPesanan"', async () => {
    await order.btnSelesaikanPesanan.click();
});

When ('User click "uploadBuktiBayar"', async () => {
    await order.uploadBuktiBayar.click();
});

When ('User upload file to "uploadBuktiBayar"', async () => {
    const uploadElement = await order.buktiBayar;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('../Images/16Photo0094_1.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
    await browser.keys(['Enter'])
});

When ('User click "btnUploadBuktiBayar"', async () => {
    await order.btnUploadBuktiBayar.click();
});

When ('User click "btnConfirmCompleteTransaction"', async () => {
    await order.btnConfirmCompleteTransaction.click();
});

When ('User click "menuCompleteOrder" in "navMenuFinance"', async () => {
    await order.menuCompleteOrder.click();
});

When ('User click "inputSearchKodeBulkInvoice"', async () => {
    await order.inputSearchKodeBulkInvoice.click();
});

When ('User paste the copied invoice number into "inputSearchKodeBulkInvoice"', async () => {
    await order.inputSearchKodeBulkInvoice.click();
    if (process.platform === 'darwin') {
        await browser.keys(['Meta', 'v']); // for mac
    } else {
        await browser.keys(['Control', 'v']); // for windows
    }
});

When ('User click "btnDetailBulkInvoice"', async () => {
    await order.btnDetailBulkInvoice.click();
});

When ('User click "btnSimpanCompleteOrder"', async () => {
    await order.btnSimpanCompleteOrder.click();
});

When ('User click "btnConfirmCompleteOrder"', async () => {
    await order.btnConfirmCompleteOrder.click();
});

Then ('User able to see message verification', async() => {
    await browser.waitUntil(async() => {
        return await order.successAlert.isDisplayed();
    }, {
        timeout:10000,
        timeoutMsg:'successAlert stil not displayed'
    })
})
//cek mutasi stock
Then ('User click "navMenuStock" in global page', async () => {
    await order.navMenuStock.scrollIntoView();
    await order.navMenuStock.click();
});

Then ('User click "menuMutasiStockV4" in "navMenuStock"', async () => {
    await order.menuMutasiStockV4.click();
});

Then ('User click "pilihGudangCekMutasiStock"', async () => {
    await order.pilihGudangCekMutasiStock.click();
});

Then ('User click "pilihGudangAlohaCekMutasiStock"', async () => {
    await order.pilihGudangAlohaCekMutasiStock.click();
});

Then ('User click "pilihProdukCekMutasiStock"', async () => {
    await order.pilihProdukCekMutasiStock.click();
});

Then ('User click "pilihSemuaProdukCekMutasiStock"', async () => {
    await order.pilihSemuaProdukCekMutasiStock.click();
});

Then ('User click "btnTampilkanMutasiStock"', async () => {
    await order.btnTampilkanMutasiStock.click();
});

Then ('User click "dataPageMutasiStock"', async () => {
    await order.dataPageMutasiStock.scrollIntoView();
    await order.dataPageMutasiStock.click();
});

Then ('User click "show100DataPerPageMutasiStock"', async () => {
    await order.show100DataPerPageMutasiStock.click();
});

Then ('User select the row element', async () => {

    let rowElement = await $(`//tr[.//span[text()="${invoiceNumber}"]]`);
    await rowElement.scrollIntoView();
    qtyStock = await rowElement.$('.//span[@class="text-danger-50"]').getText();
    qtyStock = qtyStock.replace('-', '');
    console.log('Stock: ' + qtyStock);
    console.log(`Real Quantity: ${qty}`);
    expect(qtyStock).to.equal(qty);
});

//order direct
Then ('User click "tipePenjualanDirect"', async () => {
    await order.tipePenjualanDirect.click();
});

Then ('User click "optRTP" in "tipePenjualanDirect"', async () => {
    await order.optRTP.click();
});

Then ('User click "btnDirect" in "btnAddOrder"', async () => {
    await order.btnDirect.click();
});

Then ('User click "agenPemesanDirect"', async () => {
    await order.agenPemesanDirect.click();
});

Then ('User click "optAgenPemesan" in "agenPemesanDirect"', async () => {
    await order.optAgenPemesan.click();
});

Then ('User click "alamatKirimDirect"', async () => {
    await order.alamatKirimDirect.click();
});

Then ('User click "optAlamatKirimDirect" in "alamatKirimDirect"', async () => {
    await order.optAlamatKirimDirect.click();
});

Then ('User click "tipePtDirect"', async () => {
    await order.tipePtDirect.click();
});

Then ('User click "optTipePTDirect" in "tipePtDirect"', async () => {
    await order.optTipePTDirect.click();
});

Then ('User click "superAgenDirect"', async () => {
    await order.superAgenDirect.click();
});

Then ('User click "optSuperAgenDirect" in "superAgenDirect"', async () => {
    await order.optSuperAgenDirect.click();
});

Then ('User click "addProductDirect"', async () => {
    await order.addProductDirect.scrollIntoView();
    await order.addProductDirect.click();
});

Then ('User click "addProductModalDirect"', async () => {
    await order.addProductDirect.scrollIntoView();
    await order.addProductModalDirect.click();
});

Then ('User click "pilihProductModalDirect"', async () => {
    await order.pilihProductModalDirect.click();
});

Then ('User input {string} in "pilihProductModalDirect"', async (namaProduk) => {
    await order.pilihProductModalDirect.setValue(namaProduk);
});

Then ('User click "optPilihProductModalDirect" in "pilihProductModalDirect"', async () => {
    await order.optPilihProductModalDirect.click();
});

Then ('User click "inputSatuanModalDirect"', async () => {
    await order.inputSatuanModalDirect.click();
});

Then ('User click "optSatuanModalDirect" in "inputSatuanModalDirect"', async () => {
    await order.optSatuanModalDirect.click();
});

Then ('User click "inputQtyModalDirect"', async () => {
    await order.inputQtyModalDirect.click();
});

Then ('User input {string} in "inputQtyModalDirect"', async (qty) => {
    await order.inputQtyModalDirect.setValue(qty);
});

Then ('User click "btnModalSimpanListDirect"', async () => {
    await order.btnModalSimpanListDirect.click();
});

Then ('User click "btnModalSimpanDirect"', async () => {
    await order.btnModalSimpanDirect.click();
});

Then ('User click "selectGudang"', async () => {
    await order.selectGudang.click();
});

Then ('User click "optGudangAlohaRTP" in "selectGudang"', async () => {
    await order.optGudangAlohaRTP.click();
});

Then ('User click "applyGudang"', async () => {
    await order.applyGudang.click();
});

Then ('User click "btnEditOrder"', async () => {
    await order.btnEditOrder.click();
});

Then ('User click "btnEditVoucher"', async () => {
    await order.btnEditVoucher.click();
});

Then ('User click "btnUpdateOrder"', async () => {
    await order.btnUpdateOrder.click();
});

Then ('User click "btnConfirmUpdateOrder"', async () => {
    await order.btnConfirmUpdateOrder.click();
});

Then ('User click "pilihFilterGudang"', async () => {
    await order.pilihFilterGudang.click();
});

Then ('User click "pilihFilterGudangAlohaRTP" in "pilihFilterGudang"', async () => {
    await order.pilihFilterGudangAlohaRTP.click();
});

Then ('User click "btnApplyFilterModal"', async () => {
    await order.btnApplyFilterModal.click();
});

Then ('User click "pilihFilterGudangSetoran"', async () => {
    await order.pilihFilterGudangSetoran.click();
});

Then ('User click "pilihFilterGudangCompleteOrder"', async () => {
    await order.pilihFilterGudangCompleteOrder.click();
});

Then ('User click "pilihFilterGudangAlohaRTP" in "pilihFilterGudangCompleteOrder"', async () => {
    await order.pilihFilterGudangAlohaRTP.click();
});

//all product voucher
Then ('User select voucher discount all product', async () => {
    const filePath = path.join('../griya-super/file-csv', 'voucher-code.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    if (lines.length > 0 && lines[0].trim() !== '') {
        firstLine = lines[0].trim();
        console.log('Kode voucher diskon all product:', firstLine);
    } else {
        console.log('The file is empty or the Kode voucher diskon all product is blank');
    }
})

export { firstLine }; 

Then ('User click "allProductVoucher"', async () => {
    await order.allProductVoucher.click();
});

//all product except voucher
Then ('User select voucher discount all product except', async () => {
    const filePath = path.join('../griya-super/file-csv', 'voucher-code.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    if (lines.length > 0 && lines[1].trim() !== '') {
        secondLine = lines[1].trim();
        console.log('Kode voucher diskon all product except:', secondLine);
    } else {
        console.log('The file is empty or the Kode voucher diskon all product except is blank');
    }
})

export { secondLine };

Then ('User click "allProductExceptVoucher"', async () => {
    await order.allProductExceptVoucher.click();
});

//all product except special voucher
Then ('User select voucher discount all product except special', async () => {
    const filePath = path.join('../griya-super/file-csv', 'voucher-code.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    if (lines.length > 0 && lines[2].trim() !== '') {
        thirdLine = lines[2].trim();
        console.log('Kode voucher diskon all product except special:', thirdLine);
    } else {
        console.log('The file is empty or the Kode voucher diskon all product except special is blank');
    }
})

export { thirdLine };

Then ('User click "allProductExceptSpecialVoucher"', async () => {
    await order.allProductExceptSpecialVoucher.click();
});

//all product except cigarette voucher
Then ('User select voucher discount all product except cigarette', async () => {
    const filePath = path.join('../griya-super/file-csv', 'voucher-code.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    if (lines.length > 0 && lines[3].trim() !== '') {
        fourthLine = lines[3].trim();
        console.log('Kode voucher diskon all product except cigarette:', fourthLine);
    } else {
        console.log('The file is empty or the Kode voucher diskon all product except cigarette is blank');
    }
})

export { fourthLine };

Then ('User click "allProductExceptCigaretteVoucher"', async () => {
    await order.allProductExceptCigaretteVoucher.click();
});

//and voucher
Then ('User select voucher discount and', async () => {
    const filePath = path.join('../griya-super/file-csv', 'voucher-code.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    if (lines.length > 0 && lines[4].trim() !== '') {
        fifthLine = lines[4].trim();
        console.log('Kode voucher diskon and:', fifthLine);
    } else {
        console.log('The file is empty or the Kode voucher diskon and is blank');
    }
})

export { fifthLine };

Then ('User click "andVoucher"', async () => {
    await order.andVoucher.click();
});

//or except voucher
Then ('User select voucher discount or', async () => {
    const filePath = path.join('../griya-super/file-csv', 'voucher-code.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    if (lines.length > 0 && lines[5].trim() !== '') {
        sixthLine = lines[5].trim();
        console.log('Kode voucher diskon or:', sixthLine);
    } else {
        console.log('The file is empty or the Kode voucher diskon or is blank');
    }
})

export { sixthLine };

Then ('User click "orVoucher"', async () => {
    await order.orVoucher.click();
});

//and special voucher
Then ('User select voucher discount and special', async () => {
    const filePath = path.join('../griya-super/file-csv', 'voucher-code.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    if (lines.length > 0 && lines[6].trim() !== '') {
        seventhLine = lines[6].trim();
        console.log('Kode voucher diskon and special:', seventhLine);
    } else {
        console.log('The file is empty or the Kode voucher diskon and special is blank');
    }
})

export { seventhLine };

Then ('User click "andSpecialVoucher"', async () => {
    await order.andSpecialVoucher.click();
});

//or special voucher
Then ('User select voucher discount or special', async () => {
    const filePath = path.join('../griya-super/file-csv', 'voucher-code.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    if (lines.length > 0 && lines[7].trim() !== '') {
        eighthLine = lines[7].trim();
        console.log('Kode voucher diskon or special:', eighthLine);
    } else {
        console.log('The file is empty or the Kode voucher diskon or special is blank');
    }
})

export { eighthLine };

Then ('User click "orSpecialVoucher"', async () => {
    await order.orSpecialVoucher.click();
});