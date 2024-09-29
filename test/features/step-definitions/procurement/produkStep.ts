import { When, Then } from "@cucumber/cucumber";
import produkPage from "../../pageobjects/procurement/produkPage";
import path from "path";
// import sideMenuBarPage from "../../pageobjects/side-menu/side-menu-page"

When ('User directed to List barang yang terdaftar di Super page', async() => {
    await browser.waitUntil(async() => {
        return await produkPage.titleProduk.isDisplayed();
    }, {
        timeout:10000,
        timeoutMsg:'titleProduk still not existing'
    })
    let title = await produkPage.titleProduk.getText();
    console.log(await title);
    await browser.pause(3000);
})


When ('User click btnCreateProduk button in Product page', async() => {
    await produkPage.btnCreateProduk.click();
    await browser.pause(5000);
})


When ('User send image in containerUploadGambar', async() => {
    const uploadImage = await produkPage.uploadImage;
    await uploadImage.waitForExist({timeout:10000})
    await browser.execute((el:HTMLElement) => {
    el.style.display = 'block';
  }, uploadImage);
    const filePath = path.resolve('Images\\Product Banner Design.jpg');
    const uploadFile = await browser.uploadFile(filePath);
    await uploadImage.setValue(uploadFile);
    await browser.keys(['Enter']);
    await browser.pause(2000);
})


When ('User click fieldSubType button in Product page', async() => {
    await produkPage.fieldSubtipe.click();
    await browser.pause(1000);
})


When ('User click optSubtipe in fieldSubType', async() => {
    await produkPage.optSubtipe.click();
    await browser.pause(1000);
})


When ('User click fieldNamaProduk in product page', async() => {
    await produkPage.fieldNamaProduk.scrollIntoView()
    await produkPage.fieldNamaProduk.click();
    await browser.pause(1000);
}) 


When ('User fill fieldNamaProduk with {string} in fieldNamaPRoduk', async(namaProduk) => {
    await produkPage.fieldNamaProduk.setValue(namaProduk);
    await browser.pause(1000);
})


When ('User click fieldKategori in product page', async() => {
    await produkPage.fieldKategori.click();
    await browser.pause(1000);

}) 


When ('User choose optKategori in fieldKategori', async() => {
    (await produkPage.optKategori('0')).click();
}) 


When ('User click fieldMerek in product page', async() => {
    await produkPage.fieldMerek.click();
    await browser.pause(1000);
}) 


When ('User click fieldInputBarcode in product page', async() =>{
    await produkPage.fieldInputBarcode.setValue('0839172era');
    await browser.pause(1000);
}) 


When ('User click field and choose Pilih Tag Produk in product page', async() => {
    (await produkPage.field('1')).click();
    (await produkPage.inputField('2')).setValue('100g');
    await browser.pause(1000);
    await browser.keys('Enter');
})


When ('User click field and choose Pilih Referensi Produk in product page', async() => {
    (await produkPage.field('2')).click();
    (await produkPage.inputField('3')).setValue('100g');
    await browser.pause(1000);
    await browser.keys('Enter');
})


When ('User click field and choose Pilih Variant in product page', async() => {
    (await produkPage.field('3')).click();
    (await produkPage.inputField('4')).setValue('100g');
    await browser.pause(1000);
    await browser.keys('Enter');
})


When ('User click field and choose Pilih Packaging Material in product page', async() => {
    (await produkPage.field('4')).click();
    (await produkPage.inputField('5')).setValue('100g');
    await browser.pause(1000);
    await browser.keys('Enter');
})


When ('User click field and choose Pilih Packaging Color in product page', async() => {
    (await produkPage.field('5')).click();
    (await produkPage.inputField('6')).setValue('100g');
    await browser.pause(1000);
    await browser.keys('Enter');
})


When ('User click field and choose Pilih Main Ingredients in product page', async() => {
    (await produkPage.field('6')).click();
    (await produkPage.inputField('7')).setValue('100g');
    await browser.pause(1000);
    await browser.keys(['Enter']);
})


When ('User click field and choose Pilih Texture in product page', async() => {
    (await produkPage.field('7')).click();
    (await produkPage.inputField('8')).setValue('100g');
    await browser.pause(1000);
    await browser.keys(['Enter']);
})


When ('User click field and choose Pilih Taste in product page', async() => {
    (await produkPage.field('8')).click();
    (await produkPage.inputField('9')).setValue('100g');
    await browser.pause(1000);
    await browser.keys(['Enter']);
})


When ('User choose merek in optMerek', async() => {
    (await produkPage.optMerek('[1]')).click();
    await browser.pause(1000);
})


When ('User click fieldTargetUsia in product page', async() => {
    await produkPage.fieldTargetUsia.scrollIntoView();
    await produkPage.fieldTargetUsia.click();
    await browser.pause(2000);
}) 


When ('User choose taget usia', async() => {
    (await produkPage.optTargetUsia('[2]')).click();
}) 


When ('User click fieldPPNPenjualan in product page', async() => {
    await produkPage.fieldPPNPenjualan.click();
    await browser.pause(2000);
}) 


When ('User choose PPN Penjualan', async() => {
    (await produkPage.optPPNPenjualan('[1]')).click();
}) 


When ('User click btnTambahAtribut in product page', async() => {
    await produkPage.btnTambahAtribut.scrollIntoView();
    await produkPage.btnTambahAtribut.click();
    await browser.pause(5000);
}) 


When ('User click fieldSatuanModal in tambah atribut', async() => {
    (await produkPage.fieldSatuanModal('[1]')).click();
    await browser.pause(3000);
}) 


When ('User choose satuan', async() => {
    (await produkPage.inputSatuanModal('0')).click();
}) 


When ('User click and input {string} in tambah atribut', async(konversi) => {
    (await produkPage.fieldInputKonversi('[1]')).click();
    (await produkPage.fieldInputKonversi('[1]')).setValue(konversi);
    await browser.pause(3000);
    // for (const x of konversi) {
    //     (await produkPage.fieldInputKonversi('[1]')).setValue(x)
    //     await browser.pause(500);
    // }
}) 


When ('User click and input isi {string} in tambah atribut', async(produk) => {
    (await produkPage.fieldInputIsiProduk('[1]')).click();
    // (await produkPage.fieldInputIsiProduk('[1]')).waitForEnabled();
    // (await produkPage.fieldInputIsiProduk('[1]')).setValue(produk);
    for (const x of produk) {
        (await produkPage.fieldInputIsiProduk('[1]')).setValue(x);
        await browser.pause(200);
    }
    await browser.pause(3000);
}) 


When ('User click btnSimpanModal', async() => {
    await produkPage.btnSimpanModal.click();
    await browser.pause(1000);
})


When ('User click btnSimpan in product page', async() => {
    await produkPage.btnSimpan.click();
}) 


Then ('User able to see Berhasil membuat produk baru message verification', async() => {
    await browser.waitUntil(async() => {
        return await produkPage.successAlert.isDisplayed();
    }, {
        timeout:10000,
        timeoutMsg:'successAlert stil not displayed'
    })
})





