import { Given, When, Then } from '@cucumber/cucumber'
import e2eBadStockPage from '../../pageobjects/e2e/e2eBadStockPage'
import * as path from 'path';
const bs = e2eBadStockPage;
import { Key } from 'webdriverio';

let POCode : string;
let namaRM_1 : string;
let namaRM_2 : string;
let kodeRetur : string;
let namaPRO = 'PRO-201024-154637';
let PROCode : string;

When('User click "menuInventory" button in "Stock"', async () => {
    await browser.waitUntil(async () => {
            await bs.menuInventory.scrollIntoView();
            return bs.menuInventory.isClickable();
        },
        {
            timeout: 17000, // Wait for up to 17 seconds
            timeoutMsg: 'menuInventory was not clickable after 17s'
        }
    );
    await bs.menuInventory.click();
});



When('User click "btnSearch" button in inventory page', async () => {
    // Custom wait for the button to be clickable
    await browser.waitUntil(
        async () => await bs.btnSearch.isClickable(),
        {
            timeout: 17000, // Wait for up to 17 seconds
            timeoutMsg: 'btnSearch was not clickable after 17s'
        }
    );
    
    // Then click the button
    await bs.btnSearch.click();
});


When ('User click "fieldInputSearchStock" button in inventory page', async() => {
    await bs.fieldInputSearchStock.click();
})


Given ('User input {string} into "fieldInputSearchStock"', async(productName) => {
    await bs.fieldInputSearchStock.setValue(productName);
})


When ('User click "btnCariStock"', async() => {
    await bs.btnCariStock.click();
})


When ('User verify amount of "textStokBlmRilis"', async() => {
    await bs.textStokBlmRilis.scrollIntoView();
    const stokBlmRilis = await bs.textStokBlmRilis.getText();
    console.log('Stok belum rilis before : ', await stokBlmRilis);
    await browser.pause(1000);
})


When ('User verify amount of "textStokTemporary"', async() => {
    await bs.textStokTemporary.scrollIntoView();
    const StokTemporary = await bs.textStokTemporary.getText();
    console.log('Stok temporary before : ', await StokTemporary);
    await browser.pause(1000);
})


When ('User verify amount of "textStokRusak"', async() => {
    await bs.textStokRusak.scrollIntoView();
    const StokRusak = await bs.textStokRusak.getText();
    console.log('Stok rusak before : ', await StokRusak);
    await browser.pause(1000);
})


When ('User verify amount of "textStokRetur"', async() => {
    await bs.textStokRetur.scrollIntoView();
    const StokRetur = await bs.textStokRetur.getText();
    console.log('Stok retur before : ', await StokRetur);
    await browser.pause(1000);
})


When ('User click "btnExpandSG"', async() => {
    await bs.btnExpandSG.click();
})


When ('User directed to "Stok Bermasalah" via {string}', async(url) => {
    await browser.url(url);
})

When ('User click "menuRawMaterialV3" inside "navMenuPurchasing"', async() => {
    await bs.menuRawMaterialV3.scrollIntoView();
    await bs.menuRawMaterialV3.click();
})

When ('User click "menuRawMaterialV3_2" inside "navMenuPurchasing"', async() => {
    await bs.menuRawMaterialV3_2.scrollIntoView();
    await bs.menuRawMaterialV3_2.click();
})

When('User click "btnCreateRM"', async() => {
    await bs.btnCreateRM.click();
    await browser.pause(2000);
})

When('User click "imgUploadRM"', async() => {
    await bs.imgUploadRM.click();
})

When('User upload file to "imgUploadRM"', async() => {
    const uploadElement = await bs.gambarProdukRM;

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('../griya-super/Images/0dd6b78a51616feeb7985e6404ca8847.jpeg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
})

When('User click "pilihMerek"', async() => {
    await bs.pilihMerek.click();
    await browser.pause(2000);
})

When('User type {string} in "pilihMerek"', async(merek) => {
    await bs.pilihMerek.setValue(merek);
    await browser.keys(['Enter']);
})

When('User click "inputNamaRM"', async() => {
    await bs.inputNama.click();
    await browser.pause(2000);
})

function generateRMName(): string {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    return `RM-${day}${month}${year}-${hour}${minute}${second}`;
}

When('User type raw material name into "inputNamaRM1"', async() => {
    const nama = generateRMName();
    await bs.inputNama.setValue(nama);
    namaRM_1 = nama;
    console.log(namaRM_1);
    await browser.pause(2000);
})

export { namaRM_1 }

When('User click "pilihKategori"', async() => {
    await bs.pilihKategori.click();
    await browser.pause(2000);
})

When('User type {string} into "pilihKategori"', async(kategori) => {
    await bs.pilihKategori.setValue(kategori);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})

When('User click "btnTambahAttribute"', async() => {
    await bs.btnTambahAttribute.scrollIntoView();
    await bs.btnTambahAttribute.click();
    await browser.pause(2000);
})

When('User click "inputSatuan"', async() => {
    await bs.inputSatuan.click();
    await browser.pause(2000);
})

When('User type {string} into "inputSatuan"', async(satuan) => {
    await bs.inputSatuan.setValue(satuan);
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "inputKonversi"', async() => {
    await bs.inputKonversi.click();
    await browser.pause(2000);
})

When('User type {string} into "inputKonversi"', async(konversi) => {
    await bs.inputKonversi.setValue(konversi);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})

When('User click "inputIsi"', async() => {
    await bs.inputIsi.click();
    await browser.pause(2000);
})

When('User type {string} into "inputIsi"', async(isi) => {
    await bs.inputIsi.setValue(isi);
})

When('User click "btnSimpanAttribute"', async () => {
    await bs.btnSimpanAttribute.click();
    await browser.pause(2000);
})

When('User click "btnSimpanRM"', async() => {
    await bs.btnSimpanRM.click();
    await browser.pause(2000);
})

When('User click "menuPurchasingV3"', async() => {
    await bs.menuPurchasingV3.click();
})

When('User click "menuPurchaseOrderV3" inside "menuPurchasingV3"', async () => {
    await bs.menuPurchaseOrderV3.scrollIntoView();
    await bs.menuPurchaseOrderV3.click();
})

When('User click "btnCreatePO"', async () => {
    await bs.btnCreatePO.click();
    await browser.pause(2000);
})

When('User click "selectJenisPO"', async () => {
    await bs.selectJenisPO.click();
    await browser.pause(2000);
})

When('User select "optJenisPORawMaterial" in "selectJenisPO"', async () => {
    await bs.optJenisPORawMaterial.click();
    await browser.pause(2000);
})

When('User click "selectGudangPO"', async () => {
    await bs.selectGudang.click();
    await browser.pause(2000);
})

When('User select "optGudangAloha" in "selectGudang"', async () => {
    await bs.optGudangAloha.click();
    await browser.pause(2000);
})

When('User click "selectTipePT"', async () => {
    await bs.selectTipePT.click();
    await browser.pause(2000);
})

When('User type {string} into "selectTipePT"', async (nama) => {
    await bs.selectTipePT.setValue(nama);
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "selectSupplier"', async () => {
    await bs.selectSupplier.click();
    await browser.pause(2000);
})

When('User type {string} into "selectSupplier"', async (nama) => {
    await bs.selectSupplier.setValue(nama);
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "selectTanggalKirim"', async () => {
    await bs.selectTanggalKirim.click();
    await browser.pause(2000);
})

When('User click "selectToday" in "selectTanggalKirim"', async () => {
    await bs.selectToday.click();
    await browser.pause(2000);
})

When('User click "selectMetodeBayar"', async () => {
    await bs.selectMetodeBayar.scrollIntoView();
    await bs.selectMetodeBayar.click();
    await browser.pause(2000);
})

When('User click "optMetodeBayarCOD" in "selectMetodeBayar"', async () => {
    await bs.optMetodeBayarCOD.click();
    await browser.pause(2000);
})

When('User click "selectPengiriman"', async () => {
    await bs.selectPengiriman.click();
    await browser.pause(2000);
})

When('User click "optPengirimanLocco" in "selectPengiriman"', async () => {
    await bs.optPengirimanLocco.click();
    await browser.pause(2000);
})

When('User click "selectPIC"', async () => {
    await bs.selectPIC.click();
    await browser.pause(2000);
})

When('User type {string} into "selectPIC"', async (nama) => {
    await bs.selectPIC.setValue(nama);
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "selectBankSupplier"', async () => {
    await bs.selectBankSupplier.click();
    await browser.pause(2000);
})

When('User type {string} into "selectBankSupplier"', async (nama) => {
    await bs.selectBankSupplier.setValue(nama);
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "btnTambahProdukPO"', async () => {
    await bs.btnTambahProdukPO.scrollIntoView();
    await bs.btnTambahProdukPO.click();
    await browser.pause(2000);
})

When('User click "inputNamaProduk"', async () => {
    await bs.inputNamaProduk.click();
    await browser.pause(2000);
})

When('User type raw material name into "inputNamaProduk"', async () => {
    await bs.inputNamaProduk.setValue(namaRM_1);
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "selectSatuan"', async () => {
    await bs.selectSatuan.click();
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "inputQty"', async () => {
    await bs.inputQty.click();
    await browser.pause(2000);
})

When('User type {string} into "inputQty"', async (qty) => {
    await bs.inputQty.setValue(qty);
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "inputHargaSatuan"', async () => {
    await bs.inputHargaSatuan.click();
    await browser.pause(2000);
})

When('User type {string} into "inputHargaSatuan"', async (harga) => {
    await bs.inputHargaSatuan.setValue(harga);
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "btnSimpanTambahProduk"', async () => {
    await bs.btnSimpanTambahProduk.click();
    await browser.pause(2000);
    await browser.pause(2000);
})

When('User click "imgUploadNotaPengajuan"', async () => {
    await bs.imgUploadNotaPengajuan.click();
})

When('User upload file to "imgUploadNotaPengajuan"', async() => {
    const uploadElement = await bs.gambarNotaPengajuan;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('../griya-super/Images/16Photo0094_1.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
})

When('User click "btnSimpanPO"', async () => {
    await bs.btnSimpanPO.click();
    await browser.pause(2000);
})

When('User get "kodePO"', async () => {
    POCode = await bs.kodePO.getText();
    console.log('Kode PO:', POCode);
    await browser.pause(2000);
})

export { POCode }

When('User click "btnDetailPO"', async () => {
    await bs.btnDetailPO.click();
    await browser.pause(2000);
})

When('User click "btnRequestPrepayment"', async () => {
    await bs.btnRequestPrepayment.click();
    await browser.pause(2000);
})

When('User click "btnSimpanRequestPrepayment"', async () => {
    await bs.btnSimpanRequestPrepayment.click();
    await browser.pause(2000);
})

When('User click "menuLogisticV3_1"', async () => {
    await bs.menuLogisticV3_1.scrollIntoView();
    await bs.menuLogisticV3_1.click();
})

When('User click "menuLogisticV3_2"', async () => {
    await bs.menuLogisticV3_2.scrollIntoView();
    await bs.menuLogisticV3_2.click();
})

When('User click "menuLogisticV3_3"', async () => {
    await bs.menuLogisticV3_3.scrollIntoView();
    await bs.menuLogisticV3_3.click();
})

When('User click "filterGudangV3"', async () => {
    await bs.filterGudangV3.click();
})

When('User click "warehouseSumberPangan" in "filterGudangV3"', async () => {
    await bs.warehouseSumberPangan.click();
    await browser.pause(2000);
})

When('User click "warehouseJember" in "filterGudangV3"', async () => {
    await bs.warehouseJember.click();
    await browser.pause(2000);
})

When('User click "btnSearchV3"', async () => {
    await bs.btnSearchV3.click();
})

When('User click "searchBarV3"', async () => {
    await bs.searchBarV3.click();
})

When('User click "searchBarV3_2"', async () => {
    await bs.searchBarV3_2.click();
})

When('User type PO code to "searchBarV3"', async () => {
    await bs.searchBarV3.setValue(POCode);
})

When('User type PRO code to "searchBarV3"', async () => {
    await bs.searchBarV3.setValue(PROCode);
})

When('User click "searchBarIncomingChecker"', async () => {
    await bs.searchBarIncomingChecker.click();
})

When('User type PO code to "searchBarIncomingChecker"', async () => {
    await bs.searchBarIncomingChecker.setValue(POCode);
})

When('User type PRO code to "searchBarIncomingChecker"', async () => {
    await bs.searchBarIncomingChecker.setValue(PROCode);
})

When('User click "btnCariV3"', async () => {
    await bs.btnCariV3.click();
})

When('User click "btnAmbilAntrian"', async () => {
    await bs.btnAmbilAntrian.waitForClickable();
    await bs.btnAmbilAntrian.click();
    await browser.pause(2000);
})

When('User click "imgUploadSuratJalan"', async () => {
    await bs.imgUploadSuratJalan.click();
})

When('User upload file to "imgUploadSuratJalan"', async() => {
    const uploadElement = await bs.gambarSuratJalan;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('../griya-super/Images/16Photo0094_1.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
})

When('User click "inputNamaDriver"', async () => {
    await bs.inputNamaDriver.click();
    await browser.pause(2000);
})

When('User type {string} into "inputNamaDriver"', async (nama) => {
    await bs.inputNamaDriver.setValue(nama);
    await browser.pause(2000);
})

When('User click "btnCheckIn"', async () => {
    await bs.btnCheckIn.click();
    await browser.pause(2000);
})

When('User click "menuIncomingChecker" in "navMenuLogistic"', async () => {
    await bs.menuIncomingChecker.click();
})

When('User click "btnInputIncomingV3"', async () => {
    await bs.btnInputIncomingV3.click();
    await browser.pause(2000);
})

When('User click "addProductInputIncoming"', async () => {
    await bs.addProductInputIncoming.click();
    await browser.pause(2000);
})

When('User click "imgUploadProductIncoming"', async () => {
    await bs.imgUploadProductIncoming.click();
})

When('User upload file to "imgUploadProductIncoming"', async() => {
    const uploadElement = await bs.gambarProductIncoming;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('../griya-super/Images/0dd6b78a51616feeb7985e6404ca8847.jpeg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
})

When('User click "selectProductIncoming"', async () => {
    await bs.selectProductIncoming.click();
    await browser.keys(['Enter']);
})

When('User click "selectUnitIncoming"', async () => {
    await bs.selectUnitIncoming.click();
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "inputQuantityIncoming"', async () => {
    await bs.inputQuantityIncoming.click();
    await browser.pause(2000);
})

When('User type {string} into "inputQuantityIncoming"', async (qty) => {
    await bs.inputQuantityIncoming.setValue(qty);
    await browser.pause(2000);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})

When('User click "selectProductionDate"', async () => {
    await bs.selectProductionDate.scrollIntoView();
    await bs.selectProductionDate.click();
    await browser.pause(2000);
})

When('User click "selectProductionDateToday" in "selectProductionDate"', async () => {
    await bs.selectProductionDateToday.click();
    await browser.pause(2000);
})

When('User click "btnSubmitIncomingModal"', async () => {
    await bs.btnSubmitIncomingModal.click();
    await browser.pause(2000);
})

When('User click "btnConfirmSubmitIncomingModal"', async () => {
    await bs.btnConfirmSubmitIncomingModal.click();
    await browser.pause(2000);
})

When('User click "btnValidasiChecker"', async () => {
    await bs.btnValidasiChecker.click();
    await browser.pause(2000);
})

When('User click "btnSubmitValidasiIncoming"', async () => {
    await bs.btnSubmitValidasiIncoming.click();
    await browser.pause(2000);
})

When('User click "menuStockV3"', async () => {
    await bs.menuStockV3.scrollIntoView();
    await bs.menuStockV3.click();
})

When('User click "menuStokBermasalah" in "menuStockV3"', async () => {
    await bs.menuStokBermasalah.click();
})

When('User click "btnTambahStokBermasalah"', async () => {
    await bs.btnTambahStokBermasalah.click();
    await browser.pause(2000);
})

When('User click "optKategoriRM"', async () => {
    await bs.optKategoriRM.click();
})

When('User click "selectGudangRM"', async() => {
    await bs.selectGudangRM.click();
})

When('User click "optGudangSumberPangan" in "selectGudangRM"', async () => {
    async function sendArrowDownMultipleTimes(n: number) {
        for (let i = 0; i < n; i++) {
            await browser.keys(Key.ArrowDown);
        }
    }
    async function checkElementAndStop() {
        const maxRetries = 100; // Set a limit for retries
        let found = false;
    
        for (let i = 0; i < maxRetries; i++) {
            const element = await bs.optGudangRMSumberPangan;
            
            if (await element.isDisplayed()) { // Check if the element is displayed
                console.log('Found');
                found = true;
                await bs.optGudangRMSumberPangan.click();
                break; // Exit the loop if the element is found
            } else {
                await sendArrowDownMultipleTimes(3); // Send Arrow Down multiple times
                await browser.pause(1000); // Wait for a second before retrying
            }
        }
    
        if (!found) {
            console.log('Element not found after maximum retries.');
        }
    }
    checkElementAndStop();
})

When('User click "optGudangFGJember" in "selectGudangFG"', async () => {
    async function sendArrowDownMultipleTimes(n: number) {
        for (let i = 0; i < n; i++) {
            await browser.keys(Key.ArrowDown);
        }
    }
    async function checkElementAndStop() {
        const maxRetries = 100; // Set a limit for retries
        let found = false;
    
        for (let i = 0; i < maxRetries; i++) {
            const element = await bs.optGudangFGJember;
            
            if (await element.isDisplayed()) { // Check if the element is displayed
                console.log('Found');
                found = true;
                await bs.optGudangFGJember.click();
                break; // Exit the loop if the element is found
            } else {
                await sendArrowDownMultipleTimes(3); // Send Arrow Down multiple times
                await browser.pause(1000); // Wait for a second before retrying
            }
        }
    
        if (!found) {
            console.log('Element not found after maximum retries.');
        }
    }
    checkElementAndStop();
})

When('User click "cariProdukBermasalah"', async () => {
    await bs.cariProdukBermasalah.click();
})

When('User type raw material name into "cariProdukBermasalah"', async () => {
    await bs.cariProdukBermasalah.setValue(namaRM_1);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})

When('User type product name into "cariProdukBermasalah"', async () => {
    await bs.cariProdukBermasalah.setValue(namaPRO);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})

When('User click "pilihKodeSource"', async () => {
    await bs.pilihKodeSource.click();
})

When('User click "checkboxKodeSource"', async () => {
    await browser.pause(2000);
    await bs.checkboxKodeSource.click();
})

When('User click "inputQtyRusak"', async () => {
    await bs.inputQtyRusak.click();
})

When('User type {string} into "inputQtyRusak"', async (qtyRusak) => {
    await bs.inputQtyRusak.setValue(qtyRusak);
    await browser.pause(2000);
})

When('User click "imgUploadBuktiRusak"', async () => {
    await bs.imgUploadBuktiRusak.click();
})

When('User upload file to "imgUploadBuktiRusak"', async() => {
    const uploadElement = await bs.gambarBuktiRusak;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('../griya-super/Images/16Photo0094_1.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
})

When('User click "inputCatatanRusak"', async () => {
    await bs.inputCatatanRusak.click();
})

When('User type {string} into "inputCatatanRusak"', async (catatanRusak) => {
    await bs.inputCatatanRusak.waitForClickable();
    await bs.inputCatatanRusak.clearValue();
    await browser.pause(500);
    await bs.inputCatatanRusak.setValue(catatanRusak);
})

When('User click "btnSubmitModalProdukBermasalah"', async () => {
    await bs.btnSubmitModalProdukBermasalah.click();
    await browser.pause(2000);
})

When('User click "gambarPermintaanBarang"', async () => {
    await bs.imgUploadPermintaanBarang.click();
})

When('User upload file to "gambarPermintaanBarang"', async() => {
    const uploadElement = await bs.gambarPermintaanBarang;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('../griya-super/Images/16Photo0094_1.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
})

When('User click "tabBuktiAlokasiBarang"', async () => {
    await bs.tabBuktiAlokasiBarang.click();
    await browser.pause(2000);
})

When('User click "imgUploadBuktiAlokasiBarang"', async () => {
    await bs.imgUploadBuktiAlokasiBarang.click();
})

When('User upload file to "imgUploadBuktiAlokasiBarang"', async() => {
    const uploadElement = await bs.gambarBuktiAlokasiBarang;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('../griya-super/Images/16Photo0094_1.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
})

When('User click "btnSubmitBuatStokBermasalah"', async () => {
    await bs.btnSubmitBuatStokBermasalah.click();
    await browser.pause(2000);
})

When('User click "filterGudang"', async () => {
    await bs.filterGudang.click();
})

When('User click "warehouseSumberPangan" in "filterGudang"', async () => {
    await bs.warehouseSumberPangan.click();
})

When('User click "btnAjukan"', async () => {
    await bs.btnAjukan.click();
})

When('User click "btnConfirmAjukan"', async () => {
    await bs.btnConfirmAjukan.click();
})

When('User click "btnSetujuAjukan"', async () => {
    await bs.btnSetujuAjukan.click();
})

When('User click "optTipeStokRetur"', async () => {
    await bs.optTipeStokRetur.click();
})

When('User click "MenuPurchasingV3"', async () => {
    await bs.menuPurchasingV3.click();
})

When('User click "menuReturnV3"', async () => {
    await bs.menuReturnV3.click();
})

When('User click "btnBuatRetur"', async () => {
    await bs.btnBuatRetur.click();
})

When('User click "selectGudangRetur"', async () => {
    await bs.selectGudangRetur.click();
})

When('User click "optGudangSumberPangan" in "selectGudangRetur"', async () => {
    async function findAndSelectElement() {
        const maxRetries = 100;
        
        for (let i = 0; i < maxRetries; i++) {
            const element = await bs.optGudangReturSumberPangan;
            
            if (await element.isDisplayed()) {
                console.log('Found');
                await element.click();
                return;
            }
    
            await browser.keys(Array(3).fill('ArrowDown'));
            await browser.pause(1000);
        }
    
        console.log('Element not found after maximum retries.');
    }
    
    findAndSelectElement();
})

When('User click "optGudangAloha" in "selectGudangRetur"', async () => {
    await bs.optGudangAloha.click();
})

When('User click "optGudangAloha_1" in "selectGudangRetur"', async () => {
    await bs.optGudangAloha_1.click();
})

When('User click "selectKategoriRetur"', async () => {
    await bs.selectKategoriRetur.click();
})

When('User click "optKategoriReturRM" in "selectKategoriRetur"', async () => {
    await bs.optKategoriReturRM.click();
})

When('User click "selectSupplierRetur"', async () => {
    await bs.selectSupplierRetur.click();
})

When('User type {string} into "selectSupplierRetur"', async (nama) => {
    await bs.selectSupplierRetur.setValue(nama);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})

When('User click "selectKodeTransaksiRetur"', async () => {
    await bs.selectKodeTransaksiRetur.waitForClickable();
    await bs.selectKodeTransaksiRetur.click();
})

When('User type PO code into "selectKodeTransaksiRetur"', async () => {
    await bs.selectKodeTransaksiRetur.setValue(POCode);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})

When('User click "inputQtyRetur"', async () => {
    await bs.inputQtyRetur.click();
})

When('User type {string} into "inputQtyRetur"', async (qty) => {
    await bs.inputQtyRetur.setValue(qty);
})

When('User click "selectTipeRetur"', async () => {
    await bs.selectTipeRetur.click();
})

When('User click "optTipeReturBarang" in "selectTipeRetur"', async () => {
    await bs.optTipeReturBarang.click();
})

When('User type raw material name into "inputNamaRM2"', async() => {
    const nama2 = generateRMName();
    await bs.inputNama.setValue(nama2);
    namaRM_2 = nama2;
    console.log(namaRM_2);
    await browser.pause(2000);
})

export { namaRM_2 }

When('User click "pilihProdukRetur"', async () => {
    await bs.pilihProdukRetur.click();
})

When('User type raw material name into "pilihProdukRetur"', async() => {
    await bs.pilihProdukRetur.setValue(namaRM_2);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})

When('User click "pilihUnitRetur"', async () => {
    await bs.pilihUnitRetur.click();
    await browser.keys(['Enter']);
})

When('User click "inputQtyImbalanRetur"', async () => {
    await bs.inputQtyImbalanRetur.click();
})

When('User type {string} into "inputQtyImbalanRetur"', async (qty) => {
    await bs.inputQtyImbalanRetur.setValue(qty);
})

When('User click "inputHargaBeliImbalanRetur"', async () => {
    await bs.inputHargaBeliImbalanRetur.click();
})

When('User type {string} into "inputHargaBeliImbalanRetur"', async (hrg) => {
    await bs.inputHargaBeliImbalanRetur.setValue(hrg);
})

When('User click "btnSubmitRetur"', async () => {
    await bs.btnSubmitRetur.click();
})

When('User click "filterGudangRetur"', async () => {
    await bs.filterGudangRetur.click();
})

When('User get "kodeRetur"', async () => {
    kodeRetur = await bs.kodeRetur.getText();
    kodeRetur = kodeRetur.toString();
    console.log(kodeRetur);
    await browser.pause(5000);
    await browser.refresh();
})

export { kodeRetur }

When('User click "btnSubmitReturModal"', async () => {
    await bs.btnSubmitReturModal.click();
})

When('User click "btnSetujuRetur"', async () => {
    await bs.btnSetujuRetur.click();
})

When('User click "tabReturSupplier"', async () => {
    await bs.tabReturSupplier.click();
})

When('User click "searchBarReturSupplier"', async () => {
    await bs.searchBarReturSupplier.click();
})

When('User type "kodeRetur" into "searchBarReturSupplier"', async () => {
    await bs.searchBarReturSupplier.setValue(kodeRetur);
})

When('User click "checkboxReturSupplier"', async () => {
    await bs.checkboxReturSupplier.click();
})

When('User click "btnSiapDikeluarkan"', async () => {
    await bs.btnSiapDikeluarkan.click();
})

When('User click "imgUploadPicklist"', async () => {
    await bs.imgUploadPicklist.click();
})

When('User upload file to "imgUploadPicklist"', async() => {
    const uploadElement = await bs.gambarPicklist;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('../griya-super/Images/16Photo0094_1.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
})

When('User click "btnSubmitSiapDikeluarkan"', async () => {
    await bs.btnSubmitSiapDikeluarkan.click();
})

When('User click "btnConfirmUpdateStatus"', async () => {
    await bs.btnConfirmUpdateStatus.click();
    // await browser.refresh();
})

When('User click "menuIncomingGoodsV3"', async () => {
    await bs.menuIncomingGoodsV3.scrollIntoView();
    await bs.menuIncomingGoodsV3.click();
})

When('User click "tabReturSupplierV3"', async () => {
    await bs.tabReturSupplierV3.click();
})

When('User type return code to "searchBarV3"', async () => {
    await bs.searchBarV3.setValue(kodeRetur);
})

When('User type return code to "searchBarV3_2"', async () => {
    await bs.searchBarV3_2.setValue(kodeRetur);
})

When('User click "menuIncomingGoodsV3_2" in "navMenuLogistic"', async () => {
    await bs.menuIncomingGoodsV3_2.click();
})

When('User click "menuProductV3"', async () => {
    await bs.menuProductV3.click();
})

When('User click "pilihTipeProduk"', async () => {
    await bs.pilihTipeProduk.click();
})

When('User click "optTipeProdukRTP" in "pilihTipeProduk"', async () => {
    await bs.optTipeProdukRTP.click();
})

When('User click "pilihSubtipeProduk"', async () => {
    await bs.pilihSubtipeProduk.click();
})

When('User type {string} into "pilihSubtipeProduk"', async (tipe) => {
    await bs.pilihSubtipeProduk.setValue(tipe);
    await browser.pause(3000);
    await browser.keys(['Enter']);
})

When('User click "inputNamaProdukRTP"', async () => {
    await bs.inputNamaProdukRTP.click();
})

function generatePROName(): string {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    return `PRO-${day}${month}${year}-${hour}${minute}${second}`;
}

When('User type product name into "inputNamaProdukRTP"', async () => {
    const nama = generatePROName();
    await bs.inputNamaProdukRTP.setValue(nama);
    namaPRO = nama;
    namaPRO = namaPRO.toString();
    console.log(namaPRO);
    await browser.pause(2000);
})

export { namaPRO }

When('User click "pilihMerek2"', async () => {
    await bs.pilihMerek2.scrollIntoView();
    await bs.pilihMerek2.click();
})

When('User type {string} into "pilihMerek2"', async (merek) => {
    await bs.pilihMerek2.setValue(merek);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})

When('User click "pilihKategori2"', async () => {
    await bs.pilihKategori2.click();
})

When('User type {string} into "pilihKategori2"', async (kategori) => {
    await bs.pilihKategori2.setValue(kategori);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})

When('User click "checkboxIngredients"', async () => {
    await bs.checkboxIngredients.click();
})

When('User click "inputNamaIngredients"', async () => {
    await bs.inputNamaIngredients.click();
})

When('User type {string} into "inputNamaIngredients"', async (nama) => {
    await bs.inputNamaIngredients.setValue(nama);
})

When('User type product name into "pilihProdukRetur"', async () => {
    await bs.pilihProdukRetur.setValue(namaRM_2);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})

When('User click "menuPROV4"', async () => {
    await bs.menuPROV4.click();
    await browser.pause(10000);
})

When('User click "tabReturSupplierIncomingCheckerV3"', async () => {
    await bs.tabReturSupplierIncomingCheckerV3.click();
})

When('User click "btnBuatPRO"', async () => {
    await bs.btnBuatPRO.click();
})

When('User click "btnDikeluarkan"', async () => {
    await bs.btnDikeluarkan.click();
})

When('User wait for refresh', async () => {
    await browser.pause(3000);
    await browser.refresh();
})

When('User click "btnAmbilAntrian_2"', async () => {
    await bs.btnAmbilAntrian_2.click();
})

When('User click "btnInputIncomingV3_2"', async () => {
    await bs.btnInputIncomingV3_2.click();
})

When('User click "btnValidasiChecker_2"', async () => {
    await bs.btnValidasiChecker_2.click();
})

When('User click "selectGudangPRO"', async () => {
    await bs.selectGudangPRO.click();
    await browser.pause(2000);
})

When('User type {string} into "selectGudangPRO"', async (gudang) => {
    // await bs.selectGudangPRO.setValue(gudang);
    await bs.selectGudangPROJember.click();
    // await browser.keys(['Enter']);
    await browser.pause(1000);
})

When('User click "selectTipePT_2"', async () => {
    await bs.selectTipePT_2.click();
    await browser.pause(2000);
})

When('User type {string} into "selectTipePT_2"', async (tipe) => {
    // await bs.selectTipePT_2.setValue(tipe);
    await browser.keys(['Enter']);
    await browser.pause(1000);
})

When('User click "selectSupplierPRO"', async () => {
    await bs.selectSupplierPRO.click();
    await browser.pause(2000);
})

When('User type {string} into "selectSupplierPRO"', async (supplier) => {
    await bs.selectSupplierPRO.setValue(supplier);
    await browser.keys(['Enter']);
    await browser.pause(1000);
})

When('User click "pilihPengirimanPRO"', async () => {
    await bs.pilihPengirimanPRO.click();
    await browser.pause(2000);
})

When('User type {string} into "pilihPengirimanPRO"', async (pengiriman) => {
    await bs.pilihPengirimanPRO.setValue(pengiriman);
    await browser.keys(['Enter']);
    await browser.pause(1000);
})

When('User click "pilihPICPRO"', async () => {
    await bs.pilihPICPRO.click();
    await browser.pause(2000);
});

When('User type {string} into "pilihPICPRO"', async (pic) => {
    await bs.pilihPICPRO.setValue(pic);
    await browser.keys(['Enter']);
    await browser.pause(1000);
});

When('User click "pilihGudangStok"', async () => {
    await bs.pilihGudangStok.scrollIntoView();
    await browser.pause(1000);
    await bs.pilihGudangStok.click();
    await browser.pause(1000);
    await bs.pilihGudangStok.setValue('Aloha');
    await browser.keys(['Enter']);
    await browser.pause(1000);
})

When('User click "btnTambahBarangPRO"', async () => {
    await bs.btnTambahBarangPRO.click();
})

When('User click "btnTambahBarangModalPRO"', async () => {
    await bs.btnTambahBarangModalPRO.click();
})

When('User click "pilihProdukModalPRO"', async () => {
    await bs.pilihProdukModalPRO.click();
})

When('User type product name into "pilihProdukModalPRO"', async () => {
    await bs.inputProdukPRO.addValue(namaPRO);
    await browser.pause(4000);
    await browser.keys(['Enter']);
})

When('User click "pilihIngredientsModalPRO"', async () => {
    await bs.pilihIngredientsModalPRO.click();
    await browser.keys(['Enter']);
})

When('User click "inputQtyPRO"', async () => {
    await bs.inputQtyPRO.click();
})

When('User type {string} into "inputQtyPRO"', async (qty) => {
    await bs.inputQtyPRO.setValue(qty);
})

When('User click "checklistProduct"', async () => {
    await bs.checklistProduct.click();
})

When('User click "btnSimpanModalPRO"', async () => {
    await bs.btnSimpanModalPRO.click();
})

When('User click "btnSubmitPRO"', async () => {
    await bs.btnSubmitPRO.click();
})

When('User click "filterGudangPRO"', async () => {
    await bs.filterGudangPRO.click();
})

When('User click "selectGudangJember"', async () => {
    await bs.selectGudangJember.click();
    await browser.pause(2000);
})

When('User click "applyFilterGudangPRO"', async () => {
    await bs.applyFilterGudangPRO.click();
})

When('User click "btnDetailPRO"', async () => {
    await bs.btnDetailPRO.click();
})

When('User get "kodePRO"', async () => {
    const kodePRO = await bs.kodePRO.getText();
    PROCode = kodePRO.replace('Kode PRO: ', '');
    console.log(PROCode);
})

export { PROCode }

When('User click "btnQtyRusakDariRM"', async () => {
    await bs.btnQtyRusakDariRM.click();
})

When('User click "btnExpandRowIngredients"', async () => {
    await bs.btnExpandRowIngredients.click();
    await browser.pause(1000);
})

When('User click "qtyDiperlukan"', async () => {
    await bs.qtyDiperlukan.click();
    await browser.pause(1000);
})

When('User type {string} into "qtyDiperlukan"', async (qty) => {
    await bs.qtyDiperlukan.setValue(qty);
    await browser.pause(1000);
})

When('User click "qtyRusakModalRM"', async () => {
    await bs.qtyRusakModalRM.click();
    await browser.pause(1000);
})

When('User type {string} into "qtyRusakModalRM"', async (qty) => {
    await bs.qtyRusakModalRM.setValue(qty);
    await browser.pause(1000);
})

When('User type "rusak" into "catatanRusakModalRM"', async (notes) => {
    await bs.catatanRusakModalRM.click();
    await browser.pause(1000);
    await bs.catatanRusakModalRM.setValue(notes);
    await browser.pause(1000);
})

When('User type "rusak" into "catatanStokRusak"', async (notes) => {
    await bs.catatanStokRusak.click();
    await browser.pause(1000);
    await bs.catatanStokRusak.setValue(notes);
    await browser.pause(1000);
})