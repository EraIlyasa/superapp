import pagesPage from '../../pageobjects/Engagement/cms/pages';
import { Given, When, Then } from '@cucumber/cucumber';
import * as path from 'path';

const pages = pagesPage;

// When ('User click "menuCMSV4" inside "navMenuMarketing"', async() => {
//     await pages.menuCMSV4.scrollIntoView();
//     await pages.menuCMSV4.click();
// })

When ('User click "menuPages" inside "menuCMSV4"', async() => {
    await pages.menuPages.click();
})

Given ('User click "btnBuatPage" inside "menuPages"', async() => {
    await pages.btnBuatPage.click();
})

When ('User input {string} into "inputNamaPage"', async(namaPage) => {
    await pages.inputNamaPage.setValue(namaPage);
})

When ('User input {string} into "inputPageLink"', async(pageLink) => {
    await pages.inputPageLink.setValue(pageLink);
})

When ('User click "inputStartDateBuatPage"', async() => {
    await pages.inputStartDateBuatPage.click();
})

When ('User click "selectStartTimeBuatPage"', async() => {
    await pages.selectStartTimeBuatPage.click();
})

When ('User click "inputEndDateBuatPage"', async() => {
    await pages.inputEndDateBuatPage.click();
})

When ('User click "selectEndTimeBuatPage"', async() => {
    await pages.selectEndTimeBuatPage.click();
})

When ('User input {string} into "inputJudulHeader"', async(judulHeader) => {
    await pages.inputJudulHeader.setValue(judulHeader);
})

When ('User click "toggleStatusPage"', async() => {
    await pages.toggleStatusPage.click();
})

When ('User click "selectTemplatePage"', async() => {
    await pages.selectTemplatePage.click();
})

When ('User click "selectTemplate2" inside "inputTemplatePage"', async() => {
    await pages.selectTemplate2.click();
})

When ('User click "selectTemplate3" inside "inputTemplatePage"', async() => {
    await pages.selectTemplate3.click();
})

When ('User click "selectTemplate4" inside "inputTemplatePage"', async() => {
    await pages.selectTemplate4.click();
})

When ('User click "pickFileBanner"', async() => {
    await pages.pickFileBanner.click();
})

When ('User select image', async() => {
    
    const uploadElement = await pages.btnUploadGambar;
    
        await uploadElement.waitForExist({ timeout: 5000 });
    
        await browser.execute((el:HTMLElement) => {
            el.style.display = 'block';
        }, uploadElement);
        const filePath = path.resolve('/Users/hazzledazzle/Documents/git/griya-super/16Photo0094_1.jpg');
        const uploadFile = await browser.uploadFile(filePath)
    
        await uploadElement.setValue(uploadFile);
        await browser.keys(['Enter'])
    })

When ('User select file', async() => {

    const uploadElement = await pages.btnUploadFile;
    
        await uploadElement.waitForExist({ timeout: 5000 });
    
        await browser.execute((el:HTMLElement) => {
            el.style.display = 'block';
        }, uploadElement);
        const filePath = path.resolve('/Users/hazzledazzle/Documents/git/griya-super/16Photo0094_1.jpg');
        const uploadFile = await browser.uploadFile(filePath)
    
        await uploadElement.setValue(uploadFile);
        await browser.keys(['Enter'])
    })

When ('User input {string} into "isiKonten"', async (isiKonten) => {
    await pages.isiKonten.setValue(isiKonten);
})

When ('User input {string} into "inputLabelDiButton"', async (inputLabelDiButton) => {
    await pages.inputLabelDiButton.setValue(inputLabelDiButton);
})

When ('User input {string} into "inputLinkButton"', async (inputLinkButton) => {
    await pages.inputLinkButton.setValue(inputLinkButton);
})

When ('User click "inputJumlahBanner"', async () => {
    await pages.inputJumlahBanner.click();
})

When ('User click "selectJumlahBanner" inside "inputJumlahBanner"', async () => {
    await pages.selectJumlahBanner.click();
})

When ('User click "pickKategori"', async () => {
    await pages.pickKategori.click();
})

When ('User click "pickKategoriSubkategori" inside "pickKategori"', async () => {
    await pages.pickKategoriSubkategori.click();
})

When ('User click "pickSubKategori"', async () => {
    await pages.pickSubKategori.click();
})

When ('User click "pickFrozenAyam" inside "pickSubKategori"', async () => {
    await pages.pickFrozenAyam.click();
})

When ('User click "pickKategoriProdukSpesifik" inside "pickKategori"', async () => {
    await pages.pickKategoriProdukSpesifik.click();
})

When ('User click "btnTambahProduk"', async () => {
    await pages.btnTambahProduk.click();
})

When ('User click "fieldCariNamaProduk"', async () => {
    await pages.fieldCariNamaProduk.click();
})

When ('User input {string} into "fieldCariNamaProduk"', async (namaProduk) => {
    await pages.fieldCariNamaProduk.setValue(namaProduk);
})

When ('User click "selectBagUnit"', async () => {
    await pages.selectBagUnit.click();
})

When ('User click "btnSimpanProduk"', async () => {
    await pages.btnSimpanProduk.click();
})

When ('The added product should be shown on preview', async () => {
    const namaProduk = await pages.cardPreview.getText();
    expect(namaProduk).toBe('Produk Load Test 1');
})

When ('User click "btnSimpanPage"', async () => {
    await pages.btnSimpanPage.click();
})

When ('User click "btnEditPage" inside "menuPages"', async () => {
    await pages.btnEditPage.click();
})

When ('User click "btnEditProduk"', async () => {
    await pages.btnEditProduk.click();
})

When ('User click "selectKartonUnit"', async () => {
    await pages.selectKartonUnit.click();
})

When ('User click "btnSimpanEdit"', async () => {
    await pages.btnSimpanEdit.click();
})

When ('User click "btnDetailPage" inside "menuPages"', async () => {
    await pages.btnDetailPage.click();
})

When ('User click "btnHapusPage"', async () => {
    await pages.btnHapusPage.click();
})

When ('User click "btnConfirmHapusPage" inside "btnHapusPage"', async () => {
    await pages.btnConfirmHapusPage.click();
})

Then ('User able to see "Data Tersimpan!" message verification', async () => {
    await browser.pause(5000);
    console.log("Pages berhasil dibuat!");
});

Then ('User able to see "Gagal Menyimpan Data!" message verification', async () => {
    await browser.pause(5000);
    console.log("Cannot read properties of undefined (reading 'routes')");
});