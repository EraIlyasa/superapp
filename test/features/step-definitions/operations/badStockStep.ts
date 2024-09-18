import { Given, When, Then } from '@cucumber/cucumber';
import badStockPage from '../../pageobjects/operations/badStockPage';
import path from 'path';
const bs = badStockPage;


When ('User click "navMenuStock" button in "Global" page', async() => {
    await bs.navMenuStock.click();
})


When ('User click "menuStockBermasalahV4" button in "Stock" page', async() => {
    await bs.menuStockBermasalahV4.scrollIntoView();
    await bs.menuStockBermasalahV4.click();
})


Given ('User click "btnCreateStokBermasalah"', async() => {
    await bs.btnCreateStokBermasalah.click();
})


When ('User click "fieldInputGudang"', async() => {
    await bs.fieldInputGudang.click();
})


When ('User click "optGudang0"', async() => {
    await bs.optGudang0.click();
})


When ('User click "btntambahProduk"', async() => {
    await bs.btntambahProduk.scrollIntoView();
    await bs.btntambahProduk.click();
})


When ('User click "btnTambahProdukModal"', async() => {
    await bs.btnTambahProdukModal.click();
})


When ('User click "fieldNamaProduk"', async() => {
    await bs.fieldNamaProduk.click();
})


When ('User click "optNamaProduk0"', async() => {
    await bs.optNamaProduk0.click();
})


When ('User click "fieldKodeSumber"', async() => {
    await bs.fieldKodeSumber.click();
})


When ('User click "optKodeSumber0"', async() => {
    await bs.optKodeSumber0.click();
})


When ('User click "fieldInputQty"', async() => {
    await bs.fieldInputQty.click();
})


When ('User input {string} "fieldInputQty"', async(qty) => {
    for (const char of qty){
        await bs.fieldInputQty.setValue(char);
        await browser.pause(50)
    }
    
})


When ('User upload file to "imgUploadModal"', async() => {
    const uploadElement = await bs.imgUploadModal;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('C:\\Users\\Asus\\Documents\\git\\griya-super\\Images\\Product Banner Design.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
    await browser.keys(['Enter'])
})


When ('User click "fieldInputCatatanModal"', async() => {
    await bs.fieldInputCatatanModal.click();
})


When ('User input {string} into "fieldInputCatatanModal"', async(catatan) => {
    await bs.fieldInputCatatanModal.setValue(catatan); 
})


When ('User click "btnSimpanModal" in BS page', async() => {
    await bs.btnSimpanModal.click();
})



When ('User upload file to "imgUploadPB"', async() => {
    const uploadElement = await bs.imgUploadPB;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('C:\\Users\\Asus\\Documents\\git\\griya-super\\Images\\Product Banner Design.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
    await browser.keys(['Enter'])
})

When ('User click "menuBuktiAlokasiBarang"', async() => {
    await bs.menuBuktiAlokasiBarang.click();
})

When ('User upload file into "imgUploadBAB0"', async() => {
    const uploadElement = await bs.imgUploadBAB0;
    await uploadElement.waitForExist({timeout:5000});
    await browser.execute((el:HTMLElement) => {
        el.style.display= 'block';
    }, uploadElement);

    const filePath = path.resolve('C:\\Users\\Asus\\Documents\\git\\griya-super\\Images\\200 x300 .png');
    const uploadFIle = await browser.uploadFile(filePath);
    await uploadElement.setValue(uploadFIle)
    await browser.keys(['Enter']);
})


When ('User click "btnSimpan" to create BS', async() => {
    await bs.btnSimpan.click();
})


Then ('User able to see "Success Message"', async() => {

})


When ('User click "btnYaSimpanModal" to create BS', async() => {
    await bs.btnYaSimpanModal.click();
})

