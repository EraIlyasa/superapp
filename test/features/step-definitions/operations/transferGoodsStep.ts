import { Given, When, Then } from "@cucumber/cucumber";
import transferGoodsv4 from "../../pageobjects/operations/transferGoodsv4";

const transferGoods = transferGoodsv4;

When ('User click "navMenuLogistik" button in "Global" page', async() => {
    await transferGoods.navMenuLogistik.scrollIntoView();
    await transferGoods.navMenuLogistik.click();
})


When ('User click "menuTransferGoodsV4" button in "PO" page', async() => {
    await transferGoods.menuTransferGoodsV4.scrollIntoView();
    await transferGoods.menuTransferGoodsV4.click();
})


Given ('User click "btnBuatTransferGoods"', async() => {
    await transferGoods.btnBuatTransferGoods.click();
})


When ('User click "fieldGudangAsal"', async() => {
    await transferGoods.fieldGudangAsal.click();
})


When ('User click "optGudangAsal"', async() => {
    await transferGoods.optGudangAsal.click();
    await browser.pause(1000);
})


When ('User click "fieldGudangTujuan"', async() => {
    await transferGoods.fieldGudangTujuan.click();
})


When ('User click "optGudangTujuan"', async() => {
    await transferGoods.optGudangTujuan.click();
    await browser.pause(1000);
})


When ('User click "fieldTanggalKirim"', async() => {
    await transferGoods.fieldTanggalKirim.click();
})


When ('User input {string} into "fieldTanggalKirim"', async(tglKirim) => {
    await transferGoods.fieldTanggalKirim.setValue(tglKirim);
})


When ('User click "fieldInputCatatan"', async() => {
    await transferGoods.fieldInputCatatan.click();
})


When ('User click "fieldTipePT"', async() => {
    await transferGoods.fieldTipePT.click();
})


When ('User click "optTipePT"', async() => {
    await transferGoods.optTipePT.click();
})


When ('User input {string} into "fieldInputCatatan"', async(catatan) => {
    await transferGoods.fieldInputCatatan.setValue(catatan);
})

When ('User click "btnTambahkanProduk"', async() => {
    await transferGoods.btnTambahkanProduk.scrollIntoView();
    await transferGoods.btnTambahkanProduk.click();
})


When ('User click "btnTambahProdukModal"', async() => {
    await transferGoods.btnTambahProdukModal.click();
})


When ('User click "fieldPilihProduk"', async() => {
    await transferGoods.fieldPilihProduk.click();
})


When ('User click "optPilihProduk"', async() => {
    await transferGoods.optPilihProduk.click();
})


When ('User click "fieldPilihSatuan"', async() => {
    await transferGoods.fieldPilihSatuan.click();
})


When ('User click "optPilihSatuan"', async() => {
    await transferGoods.optPilihSatuan.click();
})


When ('User click "fieldQtyTransfer"', async() => {
    await transferGoods.fieldQtyTransfer.click();
})


When ('User input {string} into "fieldQtyTransfer"', async(qty) => {
    for (const char of qty) {
        await transferGoods.fieldQtyTransfer.setValue(char);
        await browser.pause(50);  
    }
    
})


When ('User click "btnSimpanModal"', async() => {
    await transferGoods.btnSimpanModal.click();
})


When ('User click "btnSimpan"', async() => {
    await transferGoods.btnSimpan.click();
})