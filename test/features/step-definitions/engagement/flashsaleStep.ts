import flashsalePage from '../../pageobjects/Engagement/flashsalePage';
import { Given, When, Then } from '@cucumber/cucumber';

import * as path from 'path';


// const uploadFile = async (selector: string, filePath: string) => {
//     const element = $(selector);
//     await element.setValue(filePath);
// };

const Flashsale = flashsalePage;

Given ('User click "btnBuatFlashSale" in "menuFlashsaleV4"', async() => {
})

When('User click "menuFlashsale" inside "navMenuMarketing"', async () => {
    // Click on the Flashsale menu.
    await Flashsale.menuFlashsaleV4.scrollIntoView();
    await Flashsale.menuFlashsaleV4.click();
});


Given ('User click "createFsale" inside "Flashsale"', async () => {
    // Click on the create flash sale button.
    // await Flashsale.btnBuatFlashsale.scrollIntoView();
    await Flashsale.btnBuatFlashsale.click();
});


When ('User click "uploadFsale" inside "Flashsale"', async() => {
    await Flashsale.clickGambar.click();
})


When ('User wait for 10 seconds', async() => {
    await browser.pause(10000);
})


When ('User input "filePath" into "uploadGambar"', async () => {

    const uploadElement = await Flashsale.uploadGambar;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('C:\\Users\\Asus\\Documents\\git\\griya-super\\Images\\Product Banner Design.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
    await browser.keys(['Enter'])
});


When ('User input {string} into "fieldInputNamaFlashsale"', async(namaFlashsale) => {
    await Flashsale.fieldInputName.scrollIntoView();
    await Flashsale.fieldInputName.setValue(namaFlashsale)
})


When ('User click "toggleFsCountdown" in "menuFlashsaleV4"', async() => {
    await Flashsale.toggleFsCountdown.click();
})


When ('User click and input {string} into "fieldPeriodeFlashsale"', async(startDate) => {
    await Flashsale.startDate.click();
    await browser.pause();
    await browser.keys(['Control', 'a']);
    await browser.keys(['Delete']);
    await Flashsale.startDate.setValue(startDate);
    await browser.keys(['Enter']);
})


When ('User click and input {string} in "menuFlashsaleV4"', async(endDate) => {
    await Flashsale.endDate.click();
    await browser.pause();
    await browser.keys(['Control', 'a']);
    await browser.keys(['Delete']);
    await Flashsale.endDate.setValue(endDate)
    await browser.keys(['Enter']);
})


When ('User click "fieldSegment" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldSegment.scrollIntoView();
    await Flashsale.fieldSegment.click();
})


When ('User click "optSegment" in "menuFlashsaleV4"', async() => {
    await Flashsale.optSegment.scrollIntoView();
    await Flashsale.optSegment.click();
})


When ('User click "fieldInputProductQuotaUser" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldInputProductQuotaUser.click();
})


When ('User input "fieldInputProductQuotaUser" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldInputProductQuotaUser.setValue('5');
})


When ('User click "fieldInputFlashsaleQuota" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldInputFlashsaleQuota.click();
})


When ('User input "fieldInputFlashsaleQuota" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldInputFlashsaleQuota.setValue('5');
})


When ('User click "fieldMinPurchase" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldMinPurchase.click();
})


When ('User input "fieldMinPurchase" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldMinPurchase.setValue('5');
})


When ('User click "btnTambahProduk" in "menuFlashsaleV4"', async() => {
    await Flashsale.btnTambahProduk.scrollIntoView();
    await Flashsale.btnTambahProduk.click();
})


When ('User click "fieldCariProduk" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldCariProduk.click();
})


When ('User click "optCariProduk0" in "menuFlashsaleV4"', async() => {
    await Flashsale.optCariProduk0.click();
})


When ('User input {string} in "fieldCariProduk"', async(product) => {
    await Flashsale.fieldCariProduk.setValue(product);
})


When ('User click "fieldCariUnit" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldCariUnit.click();
})


When ('User click "optUnit0" in "menuFlashsaleV4"', async() => {
    await Flashsale.optUnit0.click();
    await browser.pause(1000)
})



When ('User click "fieldInputQty" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldInputQty.click();
    await browser.pause(1000)
})


When ('User input "fieldInputQty" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldInputQty.setValue('2');
    
})


When ('User click "fieldInputHargaJual" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldInputHargaJual.waitForClickable();
    await Flashsale.fieldInputHargaJual.click();
    await browser.pause(1000)
})


When ('User input "fieldInputHargaJual" in "menuFlashsaleV4"', async() => {
    // await Flashsale.fieldInputHargaJual.setValue('95000');
    // await browser.keys(['Control', 'a']);
    // await browser.pause(1000)
    await browser.keys(['9']);
    // await browser.pause(1000);
    await browser.keys(['5']);
    // await browser.pause(1000);
    await browser.keys(['0']);
    // await browser.pause(1000);
    await browser.keys(['0']);
    // await browser.pause(1000);
    await browser.keys(['0']);
})


When ('User click "fieldQtyPerUser" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldQtyPerUser.click();
    await browser.pause(1000)
})


When ('User input "fieldQtyPerUser" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldQtyPerUser.setValue('5');
})


When ('User click "btnCancelModal" in "menuFlashsaleV4"', async() => {
    await Flashsale.btnCancelModal.click();
})


When ('User click "btnSaveModal" in "menuFlashsaleV4"', async() => {
    await Flashsale.btnSaveModal.click();
})


When ('User click "btnUploadCsvModal" in "menuFlashsaleV4"', async() => {
    await Flashsale.btnUploadCsvModal.click();
})


When ('User click "btnAddProductModal" in "menuFlashsaleV4"', async() => {
    await Flashsale.btnAddProductModal.click();
})


When ('User click "btnCreateFlashsale" in "menuFlashsaleV4"', async() => {
    await Flashsale.btnCreateFlashsale.click();
})


When ('User click "btnBatal" in "menuFlashsaleV4" ', async() => {
    await Flashsale.btnBatal.click();
})


When ('User click "btnAksi" in "menuFlashsaleV4" ', async() => {
    await Flashsale.btnAksi.click();
})



When ('User click "startDate" into "fieldPeriodeFlashsale"', async() => {
    await Flashsale.startDate.click();
})


When ('User click "endDate" into "fieldPeriodeFlashsale"', async() => {
    await Flashsale.endDate.scrollIntoView();
    await Flashsale.endDate.click();
})


// Then ('User able to see "Data berhasil disimpan" message verification', async() => {
//     await browser.pause(5000);
// })


When ('User click "fieldInputWarehouse" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldInputWarehouse.click();
})


When ('User click "optWarehouse" in "menuFlashsaleV4"', async() => {
    await Flashsale.optWarehouse0.click();
})


When ('User click "fieldInputArea" in "menuFlashsaleV4"', async() => {
    await Flashsale.fieldInputArea.click();
})


When ('User click "optArea0" in "menuFlashsaleV4"', async() => {
    await Flashsale.optArea0.click();
})


Then ('displayed {string} on field image flashsale', async(allertMessage) => {
    await Flashsale.allertUploadBanner.scrollIntoView();
    expect (await Flashsale.allertUploadBanner.isDisplayed());
    const text = await Flashsale.allertUploadBanner.getText(); 
    expect (await text).toEqual(allertMessage);
})



Then ('Displayed {string} on field name flashsale', async(allertMessage) => {
    await Flashsale.allertName.scrollIntoView();
    expect (await Flashsale.allertName.isDisplayed());
    const text = await Flashsale.allertName.getText(); 
    expect (await text).toEqual(allertMessage);
})

 	
Then ('I see Invalid Message modal popup "tanggal selesai flashsale harus lebih besar dari tanggal mulai"', async() => {

})


Then ('I see Invalid Message modal popup "Nama tidak boleh kosong"', async() => {})



Then ('Displayed {string} on field product quota SKU', async(allertMessage) => {
    (await Flashsale.getAllertSection3('[1]')).scrollIntoView();
    const allert = (await Flashsale.getAllertSection3('[1]')).getText();
    expect (await allert).toEqual(allertMessage);
    await browser.pause(1000);
})


Then ('Displayed {string} on field flashsale quota', async(allertMessage) => {
    (await Flashsale.getAllertSection3('[2]')).scrollIntoView();
    const allert = (await Flashsale.getAllertSection3('[2]')).getText();
    expect (await allert).toEqual(allertMessage);
    await browser.pause(1000);
})


Then ('Displayed {string} on field min. purchase', async(allertMessage) => {
    (await Flashsale.getAllertSection3('[3]')).scrollIntoView();
    const allert = (await Flashsale.getAllertSection3('[3]')).getText();
    expect (await allert).toEqual(allertMessage);
    await browser.pause(1000);
})


Then ('I see Invalid Message modal popup "Terdapat flashsale lain di antara tanggal mulai dan tanggal selesai', async() => {
    if  (await Flashsale.titleMenu.waitForExist({ timeout: 5000})) {
        const title= await Flashsale.titleMenu.getText();
        console.log(title)
    } else {
        console.log('Terdapat flashsale lain di antara tanggal mulai dan tanggal selesai')
    }
})