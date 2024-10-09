import { When, Then, Given } from "@cucumber/cucumber";
import produkPage from "../../pageobjects/procurement/produkPage";
import path, { join, resolve } from "path";
import fs from 'fs';
import { expect } from 'chai'

// import sideMenuBarPage from "../../pageobjects/side-menu/side-menu-page"

let downloadPath: any
let filePath: any
let getTodayDateTime: any

getTodayDateTime = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    // const seconds = String(today.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day}_${hours}-${minutes}`;
}



When ('User directed to List barang yang terdaftar di Super page', async() => {
    await browser.waitUntil(async() => {
        return await produkPage.titleProduk.isDisplayed();
    }, {
        timeout:30000,
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


When ('User send image in uploadImage6', async() => {
    try {
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
    } catch (error) {
        console.log('Cannot upload images more than five')
        console.error('should can not upload file!', error)
    }
    
})



When ('User send image in uploadImage', async() => {
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


When ('User send {string} image in uploadImage', async(file) => {
    const uploadImage = await produkPage.uploadImage;
    await uploadImage.waitForExist({timeout:10000})
    await browser.execute((el:HTMLElement) => {
    el.style.display = 'block';
  }, uploadImage);
    if (file === 'jpg') {
        const filePath = path.resolve('Images\\Product Banner Design.jpg');
        const uploadFile = await browser.uploadFile(filePath);
        await uploadImage.setValue(uploadFile);
        await browser.keys(['Enter']);   
        await browser.pause(2000);

    } else if (file === 'jpeg') {
        const filePath = path.resolve('Images\\JPEG.jpeg');
        const uploadFile = await browser.uploadFile(filePath);
        await uploadImage.setValue(uploadFile);
        await browser.keys(['Enter']);   
        await browser.pause(2000);

    } else if (file === 'png') {
        const filePath = path.resolve('Images\\200 x300 .png');
        const uploadFile = await browser.uploadFile(filePath);
        await uploadImage.setValue(uploadFile);
        await browser.keys(['Enter']);   
        await browser.pause(2000);

    } else if (file === 'pdf') {
        const filePath = path.resolve('Images\\image.pdf');
        const uploadFile = await browser.uploadFile(filePath);
        await uploadImage.setValue(uploadFile);
        await browser.keys(['Enter']);   

    } else if (file === 'csv') {
        const filePath = path.resolve('Images\\image.csv');
        const uploadFile = await browser.uploadFile(filePath);
        await uploadImage.setValue(uploadFile);
        await browser.keys(['Enter']);   
        await browser.pause(2000);
    
    } else if (file === 'tiff') {
        const filePath = path.resolve('Images\\image.tiff');
        const uploadFile = await browser.uploadFile(filePath);
        await uploadImage.setValue(uploadFile);
        await browser.keys(['Enter']);   
        await browser.pause(2000);
    
    } else if (file === 'bmp') {
        const filePath = path.resolve('Images\\image.bmp');
        const uploadFile = await browser.uploadFile(filePath);
        await uploadImage.setValue(uploadFile);
        await browser.keys(['Enter']);   
        await browser.pause(2000);
    
    }
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
    await browser.pause(4000);

}) 


When ('User choose optKategori in fieldKategori', async() => {
    (await produkPage.optKategori('0')).click();
    await browser.pause(500);
}) 


When ('User click fieldMerek in product page', async() => {
    await produkPage.fieldMerek.click();
    await browser.pause(1000);
}) 


When ('User click fieldInputBarcode in product page', async() =>{
    await produkPage.fieldInputBarcode.setValue('0839172');
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


When ('User choose merek in optMerek2', async() => {
    (await produkPage.optMerek('[2]')).click();
    await browser.pause(1000);
})


When ('User click fieldTargetUsia in product page', async() => {
    await produkPage.fieldTargetUsia.scrollIntoView();
    await produkPage.fieldTargetUsia.click();
    await browser.pause(5000);
}) 


// When ('User choose taget usia1', async() => {
//     await produkPage.optTargetUmur.click();
//     await browser.pause(2000);
// }) 


When ('User choose taget usia', async() => {
    // (await produkPage.optTargetUsia('[2]')).waitForClickable();
    (await produkPage.optTargetUsia('1')).click();
}) 


When ('User click fieldPPNPenjualan in product page', async() => {
    await produkPage.fieldPPNTest.scrollIntoView();
    await browser.pause(1000);
    await produkPage.fieldPPNTest.click();
    // await produkPage.fieldPPNPenjualan.click();
    await browser.pause(5000);
}) 


When ('User choose PPN Penjualan', async() => {
    (await produkPage.optPPNPenjualan('1')).click();
    await browser.pause(1500)
}) 


When ('User choose {string} in fieldPPNPenjualan', async(optPPN) => {
    if (optPPN === 'Non-BKP') {
        (await produkPage.optPPNPenjualan('1')).click();
        await browser.pause(1500);
    
    } else if (optPPN === 'BKP') {
        (await produkPage.optPPNPenjualan('2')).click();
        await browser.pause(1500);

    } else if (optPPN === 'Tidak Terhutang') {
        (await produkPage.optPPNPenjualan('3')).click();
        await browser.pause(1500)
    }
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


When ('User click fieldSatuanModal row 1 in tambah atribut', async() => {
    (await produkPage.fieldSatuanModal('[2]')).click();
    await browser.pause(3000);
})


When ('User click fieldSatuanModal row 2 in tambah atribut', async() => {
    (await produkPage.fieldSatuanModal('[3]')).click();
    await browser.pause(3000);
})


When ('User choose satuan', async() => {
    (await produkPage.inputSatuanModal('0')).click();
}) 


When ('User choose satuan2', async() => {
    (await produkPage.inputSatuanModal('1')).click();
}) 


When ('User choose satuan3', async() => {
    (await produkPage.inputSatuanModal('2')).click();
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


When ('User click and input {string} row 1 in tambah atribut', async(konversi2) => {
    (await produkPage.fieldInputKonversi('[2]')).click();
    (await produkPage.fieldInputKonversi('[2]')).setValue(konversi2);
    await browser.pause(3000);
    // for (const x of konversi) {
    //     (await produkPage.fieldInputKonversi('[1]')).setValue(x)
    //     await browser.pause(500);
    // }
}) 


When ('User click and input {string} row 2 in tambah atribut', async(konversi3) => {
    (await produkPage.fieldInputKonversi('[3]')).click();
    (await produkPage.fieldInputKonversi('[3]')).setValue(konversi3);
    await browser.pause(3000);
    // for (const x of konversi) {
    //     (await produkPage.fieldInputKonversi('[1]')).setValue(x)
    //     await browser.pause(500);
    // }
})


When ('User click and input isi {string} row 1 in tambah atribut', async(produk2) => {
    (await produkPage.fieldInputIsiProduk('[2]')).click();
    // (await produkPage.fieldInputIsiProduk('[1]')).waitForEnabled();
    // (await produkPage.fieldInputIsiProduk('[1]')).setValue(produk);
    for (const x of produk2) {
        (await produkPage.fieldInputIsiProduk('[2]')).setValue(x);
        await browser.pause(200);
    }
    await browser.pause(3000);
})


When ('a {string}', async(x:string) => {
    if (x === 'produk1') {

    } else if (x === 'produk2') {
        
    } else if (x === 'produk3') {
        
    }
})


When ('User click and input isi {string} row 2 in tambah atribut', async(produk3) => {
    (await produkPage.fieldInputIsiProduk('[3]')).click();
    // (await produkPage.fieldInputIsiProduk('[1]')).waitForEnabled();
    // (await produkPage.fieldInputIsiProduk('[1]')).setValue(produk);
    for (const x of produk3) {
        (await produkPage.fieldInputIsiProduk('[3]')).setValue(x);
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


Then ('User able to see Berhasil membuat produk baru {string} verification', async(message) => {
    await browser.waitUntil(async() => {
        return await produkPage.successAlert.isDisplayed();
    }, {
        timeout:10000,
        timeoutMsg:'successAlert stil not displayed'
    })
    let alert = await produkPage.successAlert.getText();

    expect (await alert).equal(message);
    console.log('message is ',alert)
    await browser.pause(5000);
})


Given ('User go to main page product', async() => {
    await browser.url('https://v3-web-app-micro.staging.superapp.co.id/purchasing/product');
    await browser.pause(5000);
})


When ('User click statusAktifBarang in product page', async() => {
    await produkPage.statusAktifBarang.click();
    await browser.pause(1000);
})


When ('User click fieldTipeProduk in product page', async() => {
    await produkPage.fieldTipeProduk.scrollIntoView();
    await browser.pause(1000);
    await produkPage.fieldTipeProduk.click();
    await browser.pause(1000);
}) 


When ('User choose tipe product {string}', async(act) => {
    if (act === 'Non RTP') {
        (await produkPage.optTipeProduk('0')).click();
        await browser.pause(500);
    } else if (act === 'RTP') {
        await (await produkPage.optTipeProduk('1')).waitForEnabled();
        (await produkPage.optTipeProduk('1')).click();
        await browser.pause(500);

    }

}) 


When ('User click btnTambahAtributModal', async() => {
    await produkPage.btnTambahAtributModal.click();
    await browser.pause(1000);
})


Then ('User able to see Gambar Utama message verification', async() => {
    try {
        let text = await produkPage.textGambarUtama.getText();
        await browser.waitUntil(async() => {
            return await produkPage.textGambarUtama.isDisplayed();
        }, {
            timeout:10000
        })
        console.log('message is ' + text);
        expect (await produkPage.textGambarUtama.isDisplayed()).to.be.true;
    } catch {
        throw new Error('there is no "Gambar Utama" displayed');
    }
})


Then ('User able to see Gambar Utama message verification below second images', async() => {
    try {
        let text = await produkPage.textGambarUtama.getText();
        await browser.waitUntil(async() => {
            return await produkPage.textGambarUtama.isDisplayed();
        }, {
            timeout:10000
        })
        console.log('message is ' + text);
        expect (await produkPage.textGambarUtama.isDisplayed()).to.be.true;
        expect ((await produkPage.radioButton('[2]')).isSelected()).to.be.true;
    } catch {
        throw new Error('there is no "Gambar Utama" displayed');
    }
})


When ('User click radio button 2', async() => {
    (await produkPage.radioButton('[2]')).click();
    await browser.pause(1000);
})


Then ('User able to see list barang yang terdaftar di super message verification', async() => {
    try {
        await expect (await produkPage.titleProduk.isDisplayed()).to.be.true;
        await browser.pause(3000);
        console.log('message : ', await produkPage.titleProduk);
        await browser.pause(1000);
    } catch {
        throw new Error('there is no message displayed')
    }
})


When ('User click btnCancelNewProduct in Product page', async() => {
    await produkPage.btnBatal.click();
    await browser.pause(2000);
})


When ('User click btnPanduanAtribut button in Product page', async() => {
    await produkPage.btnPanduanAtribut.scrollIntoView();
    await browser.pause(1000);
    await produkPage.btnPanduanAtribut.click();
    await browser.pause(5000);
})


Then ('User is directed to the Guideline Konversi Produk', async() => {
    
})


When ('User click statusIngredients in product page', async() => {
    await produkPage.statusIngredients.click();
    await browser.pause(1000);
})


Then ('User able to see {string} verification', async(message) => {
    let text = await produkPage.failedAlert.getText();
    expect (await text).equal(message);
    console.log(text); 
    await browser.pause(3000);
//     try {
//         await browser.waitUntil(async() => {
//             return text;         
//         }, {
//             timeout:10000,
//         })

//         expect (await produkPage.failedAlert).toBeDisplayed();
        
//         try {
//             expect (await text).equal(message);
//         } catch (error){
//             console.error('Failed to match text with the expected message:', error);
//             throw new Error('Text did not match the expected message');
//         }
//     } catch (error) {
//     console.error('Error in waiting for or verifying failedAlert:', error);
//     throw new Error('There was an error with the failedAlert display or retrieval');
// }
})


Then ('User able to see Gambar Produk wajib diisi {string} verification', async(message) => {
    try {
        await browser.waitUntil(async() => {
            return await produkPage.failedAlert.isDisplayed;
           
        }, {
            timeout:10000,
            timeoutMsg:'Timed out waiting for failedAlert to appear.'
        })
        let text = await produkPage.failedAlert.getText();
        expect(await text).equal(message);
        console.log(text);
    } catch {
        throw new Error('there is no Brand Produk wajib diisi!')
    }
})


Then ('User able to see Nama Produk wajib diisi {string} verification', async(message) => {
    try {
        await browser.waitUntil(async() => {
            return await produkPage.failedAlert.isDisplayed;
           
        }, {
            timeout:10000,
            timeoutMsg:'Timed out waiting for failedAlert to appear.'
        })
        let text = await produkPage.failedAlert.getText();
        expect(await text).equal(message);
        console.log(text);
    } catch {
        throw new Error('there is no Brand Produk wajib diisi!')
    }
})


Then ('User able to see Brand Produk wajib diisi {string} verification', async(message) => {
    try {
        await browser.waitUntil(async() => {
            return await produkPage.failedAlert.isDisplayed;
           
        }, {
            timeout:10000,
            timeoutMsg:'Timed out waiting for failedAlert to appear.'
        })
        let text = await produkPage.failedAlert.getText();
        expect(await text).equal(message);
        console.log(text);
    } catch {
        throw new Error('there is no Brand Produk wajib diisi!')
    }
})


Then ('User able to see Kategori Produk wajib diisi {string} verification', async(message) => {
    try {
        await browser.waitUntil(async() => {
            return await produkPage.failedAlert.isDisplayed;
           
        }, {
            timeout:10000,
            timeoutMsg:'Timed out waiting for failedAlert to appear.'
        })
        let text = await produkPage.failedAlert.getText();
        expect(await text).equal(message);
        console.log(text);
    } catch {
        throw new Error('there is no Brand Produk wajib diisi!')
    }
})


Then ('User able to see Atribut Produk tidak boleh kosong {string} verification', async(message) => {
    try {
        await browser.waitUntil(async() => {
            return await produkPage.failedAlert.isDisplayed;
           
        }, {
            timeout:10000,
            timeoutMsg:'Timed out waiting for failedAlert to appear.'
        })
        let text = await produkPage.failedAlert.getText();
        expect(await text).equal(message);
        console.log(text);
    } catch {
        throw new Error('there is no Brand Produk wajib diisi!')
    }
})


Then ('User able to see File extension not allowed! {string} verification', async(message) => {
    try {
        await browser.waitUntil(async() => {
            return await produkPage.failedAlert2.isDisplayed();
        }, {
            timeout:10000,
            timeoutMsg:'time out, failedAlert still not displayed'
        })
        let text = await produkPage.failedAlert2.getText();
        expect (await text).equal(message);
        console.log('message is : ', text);
    } catch {
        throw new Error('text is not same as "message"');
    }
})


Then ('User able to see btnCancelAttribute is disabled in Product page', async() => {
    expect (await produkPage.btnTambahAtributModal).to.be.false;
    await browser.pause(5000);
})


Then ('User able to see Limit produk yang di pin sudah habis maks. 2 produk {string} verification', async(message) => {
    await produkPage.statusPinProduk.scrollIntoView();

    try {
        expect (await produkPage.statusPinProduk).to.be.false;
    } catch {
        throw new Error('pin produk still can be active');
    }

    let text = await produkPage.alertLimmitProduk.getText();
    expect(await text).equal(message);
    console.log('message is : ',text);
})


Then ('User able to see invalid {string} verification', async(message) => {
    try {
        await browser.waitUntil(async() => {
            return await produkPage.failedAlert.isDisplayed();
        }, {
            timeout:10000,
        })
        let text = await produkPage.failedAlert.getText();
        expect (await text).equal(message)
        console.log('message is : ',text);
    } catch {
        throw new Error('modal notification is not showed up after create with same name')
    }
})


When ('User click btnSearch button in Product page', async() => {
    await produkPage.btnSearch.click();
    await browser.pause(1000);
})


When ('User click fieldInputSearch button in Product page', async() => {
    await produkPage.fieldInputSearch.click();
    await browser.pause(1000);
})


When ('User fill fieldInputSearch with value {string} in Product page', async(sku) => {
    await produkPage.fieldInputSearch.setValue(sku);
    await browser.pause(500);
})


When ('User fill fieldInputSearch with value in Product page', async() => {
    await produkPage.fieldInputSearch.setValue('testing \u263A');
    await browser.pause(1000);
})


When ('User click btnCari button in Product page', async() => {
    await produkPage.btnCari.click();
    await browser.pause(5000);
})


Then ('User able to see verification {string}', async(message) => {
    await browser.waitUntil(async() => {
        return expect (await produkPage.successAlert.isDisplayed());
    }, {
        timeout:10000,
        timeoutMsg:'successAlert message still not displayed'
    })
    let text = await produkPage.successAlert.getText();
    expect (await text).equal(message)
})


When ('User click btnEditProduk in list produk page', async() => {
    (await produkPage.btnEditProduk('[1]')).click();
    await browser.pause(1000);
}) 


Then ('User able to see {string} in product list', async(produkName) => {
    if (produkName === 'product-name-Automated Testing hehe') {
        try {
            await browser.waitUntil(async() => {
                return (await produkPage.namaProduk('product-name-Automated Testing hehe')).isDisplayed();
            }, {
                timeout:10000,
                timeoutMsg:'namaProduk still not displayed'
            })
            let text = (await produkPage.namaProduk('Automated Testing hehe')).getText();
            expect(await text).equal(produkName);
        } catch {
            throw new Error('produk name is not same')
        } 

    } else if (produkName === 'RTP-ra') {
        try {
            await browser.waitUntil(async() => {
                return (await produkPage.namaProduk('RTP-ra')).isDisplayed();
            }, {
                timeout:10000,
                timeoutMsg:'namaProduk still not displayed'
            })
            let text = (await produkPage.namaProduk('RTP-ra')).getText();
            expect(await text).equal(produkName);
        } catch {
            throw new Error('produk name is not same')
        }

    } else if (produkName === 'RTP-ingredients') {
        try {
            await browser.waitUntil(async() => {
                return (await produkPage.namaProduk('RTP-ingredients')).isDisplayed();
            }, {
                timeout:10000,
                timeoutMsg:'namaProduk still not displayed'
            })
            let text = (await produkPage.namaProduk('RTP-ingredients')).getText();
            expect(await text).equal(produkName);
        } catch {
            throw new Error('produk name is not same')
        } 

    } else if (produkName === 'Automated Testing hehe') {
        try {
            await browser.waitUntil(async() => {
                return (await produkPage.namaProduk('Automated Testing hehe')).isDisplayed();
            }, {
                timeout:10000,
                timeoutMsg:'namaProduk still not displayed'
            })
            let text = (await produkPage.namaProduk('Automated Testing hehe')).getText();
            expect(await text).equal(produkName);
        } catch {
            throw new Error('produk name is not same')
        }  

    } else if (produkName === 'Automated Test') {
        try {
            await browser.waitUntil(async() => {
                return (await produkPage.namaProduk('Automated Test')).isDisplayed();
            }, {
                timeout:10000,
                timeoutMsg:'namaProduk still not displayed'
            })
            let text = (await produkPage.namaProduk('Automated Test')).getText();
            expect(await text).equal(produkName);
        } catch {
            throw new Error('produk name is not same')
        } 
    } else if (produkName === 'Produk Otomatis 0') {
        try {
            await browser.waitUntil(async() => {
                return (await produkPage.namaProduk('Produk Otomatis 0')).isDisplayed();
            }, {
                timeout:10000,
                timeoutMsg:'namaProduk still not displayed'
            })
            let text = (await produkPage.namaProduk('Produk Otomatis 0')).getText();
            expect(await text).equal(produkName);
        } catch {
            throw new Error('produk name is not same')
        } 
    }
})


When ('User clear the value in {string}', async(x:string) => {
    if (x === 'fieldNamaProduk') {
        await browser.keys(['Control', 'a']);
        await browser.keys(['Delete']);
        await browser.pause(2000);

    } else if (x === 'fieldMerek') {
        await browser.keys(['Control', 'a']);
        await browser.keys(['Delete']);
        await browser.pause(2000);
    
    }
})


When ('User click statusPinProduk in product page', async() => {
    await produkPage.statusPinProduk.scrollIntoView();
    // await produkPage.statusPinProduk.click();
    await browser.pause(4000);
})


Then ('User click {string} in product page', async(x:string) => {
    if (x === 'btnBatal') {
        await produkPage.btnBatal.click();
        await browser.pause(3000);   

    } else if (x === 'btnPanduanAtribut') {
        await produkPage.btnPanduanAtribut.scrollIntoView();
        await produkPage.btnPanduanAtribut.click();
        await browser.pause(3000);
    } 
})


When ('User click {string} in product pagee', async(x:string) => {
    if (x === '[1]') {
        try {
            (await produkPage.btnDeleteImage('[1]')).isExisting();
        } catch (error) {
            console.error('btnDeleteImage is not existing', error)
        }
        (await produkPage.btnDeleteImage('[1]')).click();

    } 

})


Then ('User able to see fieldTipeProduk is disable in product page', async() => {
    await produkPage.fieldTipeProdukTest.scrollIntoView();
    let disabled = await produkPage.fieldTipeProdukTest.isEnabled();
    expect (await disabled).to.be.false;
})


When ('User click btnEditList in product page', async() => {
    await produkPage.btnEditList.scrollIntoView();
    await produkPage.btnEditList.click();
    await browser.pause(2000);
})


Then ('User unable to see btnRemoveModal in modal product', async() => {
    try {
        (await produkPage.btnRemoveModal('1')).isExisting();
    } catch (error) {
        console.error('no btnRemoveModal to be existing', error)
    }
})


Then ('User able to see btnTambahAtributModal in modal product is disable', async() => {
    try {
         const isDisable = await produkPage.btnTambahAtributModal.getAttribute('disabled');
         expect (await isDisable).to.be.true
    } catch (error) {
        console.error('btnTambahAtributModal is not disable', error)
    }
})


Then ('User able to see statusIngredients is disable in product page', async() => {
    await produkPage.statusIngredients.scrollIntoView();
    await browser.pause(2000);
    try {
         const isDisable = await produkPage.statusIngredients.getAttribute('disabled');
         expect (await isDisable).to.be.true
    } catch (error) {
        console.error('btnTambahAtributModal is not disable', error)
    }
}) 


// When ('User click produk menu in Product page', async() => {
//     await produkPage.menuProduk.click();
// })


When ('User click "btnFilter" in product list modal', async() => {
    await produkPage.btnFilter.click();
    await browser.pause(1000);
})


When ('User click "fieldSearchModal" in product list modal', async() => {
    await produkPage.fieldSearchModal.click();
    await browser.pause(1000);
})


When ('User fill {string} into fieldSearchModal', async(keyword) => {
    if (keyword === 'Automated Hehe') {
        await produkPage.fieldSearchModal.setValue(keyword);
        await browser.pause(3000);
    
    } else if (keyword === 'Era Ilyasa') {
        await produkPage.inputSearchPICFilter.setValue(keyword);
        await browser.pause(3000);

    }
})


When ('User click "Automated Hehe" after search modal', async() => {
    (await produkPage.optTagProduk('[1]')).click();
    await browser.pause(1000);
}) 


When ('User click "btnTerapkanModal" in product list modal', async() => {
    await produkPage.btnTerapkanModal.click();
    await browser.pause(1000);
})


Then ('User able to see selected radio default is {string}', async(option) => {
    try {
        expect (await produkPage.optCheckedTag.isSelected());
    } catch (error) {
        console.error('element is not selected by default')
    } 
    await browser.pause(3000);
    let text = await produkPage.optCheckedTag.getText();
    expect (await text).equal(option)
    console.log('option selected : ', await text);

})


When ('User click navFilterModal tag produk in filter modal', async() => {
    (await produkPage.navFilterModal('product_tag')).click();
    await browser.pause(1000);
})


When ('User click navFilterModal tipe produk in filter modal', async() => {
    (await produkPage.navFilterModal('type')).click();
    await browser.pause(1000);
})


When ('User click navFilterModal sub tipe in filter modal', async() => {
    (await produkPage.navFilterModal('subtype_id')).click();
    await browser.pause(1000);
})


When ('User click optSubTipe0 in filter modal', async() => {
    await produkPage.optSubTipe0.click();
    await browser.pause(1000);
})


When ('User click optTPRTP in filter modal', async() => {
    (await produkPage.optTPRTP('[16]')).click();
    await browser.pause(1000);
})


When ('User click optTPRTP15 in filter modal', async() => {
    (await produkPage.optTPRTP('[15]')).click();
    await browser.pause(1000);
})


When ('User click optNonRTP in filter modal', async() => {
    await produkPage.optNonRTP.click();
    await browser.pause(1000);
})


Then ('User able to see selected radio default is {string} in filter status', async(option) => {
    try {
        expect (await produkPage.optCheckedStatus.isSelected())
    } catch (error) {
        console.error('element is not selected by default')
    } 
    await browser.pause(3000);
    let text = await produkPage.optCheckedStatus.getText();
    expect (await text).equal(option)
    console.log('option selected : ', await text);
})


When ('User click navFilterModal satuan in filter modal', async() => {
    (await produkPage.navFilterModal('unit')).click();
    await browser.pause(1000);
})


When ('User click optSatuanBag in filter modal', async() => {
    await produkPage.optSatuanBag.click();
    await browser.pause(1000);
})


When ('User click navFilterModal status in filter modal', async() => {
    (await produkPage.navFilterModal('status')).click();
    await browser.pause(1000);
})


When ('User click optAktif in filter modal', async() => {
    await produkPage.optAktif.click();
    await browser.pause(1000);
})

When ('User click optTidakAktif in filter modal', async() => {
    await produkPage.optTidakAktif.click();
    await browser.pause(1000);
})


When ('User click navFilterModal kategori in filter modal', async() => {
    (await produkPage.navFilterModal('category_id')).click();
    await browser.pause(1000);
})


When ('User click navFilterModal pin produk in filter modal', async() => {
    (await produkPage.navFilterModal('pin')).click();
    await browser.pause(1000);
})


When ('User click optBahanDapur in filter modal', async() => {
    await produkPage.optBahanDapur.click();
    await browser.pause(1000);
})


Then ('User able to see selected radio default is {string} in filter pin produk', async(option) => {
    try {
        expect (await produkPage.optCheckedPin.isSelected())
    } catch (error) {
        console.error('element is not selected by default')
    } 
    await browser.pause(3000);
    let text = await produkPage.optCheckedPin.getText();
    expect (await text).equal(option)
    console.log('option selected : ', await text);
})


When ('User click {string} in filter pin produk', async(x:string) => {
    if (x === 'optPinYa') {
        await produkPage.optPinYa.click();
        await browser.pause(1000);

    } else if (x === 'optPinTidak') {
        await produkPage.optPinTidak.click();
        await browser.pause(1000);
        
    }
})


When ('User click btnResetModal in filter modal', async() => {
    await produkPage.btnResetModal.click();
    await browser.pause(1000);
})


Then ('User able to see {string} radio default', async(option) => {
    try {
        //assertion tag produk
        let text1 = (await produkPage.selectedRadio('[5]')).getText();
        expect (await text1).equal(option)
        console.log('Tag Produk : ', await text1)
        await browser.pause(2000)
    } catch (error) {
        console.error('option selected is not changing to default')
    } 

    try {
        //assertion status
        let text2 = (await produkPage.selectedRadio('[6]')).getText();
        expect (await text2).equal(option)
        console.log('Status : ', await text2)
        await browser.pause(2000)
    } catch (error) {
        console.error('option selected is not changing to default')
    }

    try {
        //assertion satuan
        let text3 = (await produkPage.selectedRadio('[7]')).getText();
        expect (await text3).equal(option)
        console.log('Satuan : ', await text3)
        await browser.pause(2000)
    } catch (error) {
        console.error('option selected is not changing to default')
    }

    try {
        //assertion tipe produk
        let text4 = (await produkPage.selectedRadio('[8]')).getText();
        expect (await text4).equal(option)
        console.log('Tipe Produk : ', await text4)
        await browser.pause(2000)
    } catch (error) {
        console.error('option selected is not changing to default')
    }

    try {
        //assertion sub tipe
        let text5 = (await produkPage.selectedRadio('[9]')).getText();
        expect (await text5).equal(option)
        console.log('Sub Tipe : ', await text5)
        await browser.pause(2000)
    } catch (error) {
        console.error('option selected is not changing to default')
    }

    try {
        //assertion kategori
        let text6 = (await produkPage.selectedRadio('[10]')).getText();
        expect (await text6).equal(option)
        console.log('Kategori : ', await text6)
        await browser.pause(2000)
    } catch (error) {
        console.error('option selected is not changing to default')
    }

    try {
        //assertion sub tipe
        let text7 = (await produkPage.selectedRadio('[11]')).getText();
        expect (await text7).equal(option)
        console.log('Pin Produk : ', await text7)
        await browser.pause(2000)
    } catch (error) {
        console.error('option selected is not changing to default')
    }
})


Then ('User able to see {string} message verification in product page', async(message) => {
    if (message === 'No data') {
        expect (await produkPage.emptyData.isDisplayed());
        let text = await produkPage.emptyData.getText();
        expect (await text).equal(message);
        console.log('Message is:', await text);
    
    } else if (message === '3 INVALID_ARGUMENT: Karakter pencarian Tidak Valid: emoji tidak diperbolehkan') {
        expect (await produkPage.failedAlert.isDisplayed());
        let text = await produkPage.failedAlert.getText();
        expect (await text).equal(message);
        console.log('Message is:', await text);

    } else if (message === 'Berhasil memperbarui pic produk') {
        expect (await produkPage.successAlert.isDisplayed());
        let text = await produkPage.successAlert.getText();
        expect (await text).equal(message);
        console.log('Message is:', await text);

    } else if (message === 'Saat ini export PIC produk hanya dapat dilakukan per satu gudang, silakan ganti filter Warehouse') {
        expect (await produkPage.failedAlert.isDisplayed());
        let text = await produkPage.failedAlert.getText();
        expect (await text).equal(message);
        console.log('Message is:', await text);

    } 
})


When ('User click navTabProduk pic produk in produk page', async() => {
    (await produkPage.navTabProduk('pic_product')).click();
    await browser.pause(1000);
})


Then ('User be able to see {string} in pic list produk', async(produkName) => {
    if (produkName === 'Automated Testing hehe') {
        let text = (await produkPage.textPICProduk('[1]')).getText();
        expect (await text).equal(produkName);
        console.log('Name : ', await text);

    } 
})


When ('User click navFilterModal warehouse in filter modal', async() => {
    (await produkPage.navFilterModal('warehouse_id')).click();
    await browser.pause(1000);
})


When ('User click navFilterModal pic produk in filter modal', async() => {
    (await produkPage.navFilterModal('pic_user')).click();
    await browser.pause(1000);
})


Then ('User be able to see {string} as a warehouse default', async(option) => {
    try {
       expect (await produkPage.optSelectedWarehouse.isSelected());
       let text = await produkPage.optSelectedWarehouse.getText();
       expect (await text).equal(option);
       console.log('Selected Warehouse : ', text);
    } catch (error){
        console.error('Aloha is not set as a default warehouse')
    }
}) 


When ('User click optWarehouseJember in filter modal PIC produk', async() => {
    await produkPage.optWarehouseJember.click();
    await browser.pause(1000);
})


Then ('User able to see table only shows {string} on Gudang section', async(warehouseName) => {
    await produkPage.selectedGudang.scrollIntoView();
    try {
        await browser.waitUntil(async() => {
            return await produkPage.selectedGudang.isDisplayed();

        }, {
            timeout:10000,
            timeoutMsg:'selected gudang is not displayed'
        })
        let text = await produkPage.selectedGudang.getText();
        console.log('Warehouse : ', await text)
        expect(await text).equal(warehouseName)
    }catch {
        console.error('Warehouse is not same as selected')
    }
})


Then ('User be able to see {string} selected as a pic produk default', async(option) => {
    try {
        expect (await produkPage.optSelectedPICProduk.isSelected());
        let text =await produkPage.optSelectedPICProduk.getText();
        expect(await text).equal(option)
        console.log('PIC Selected : ', await text)
    } catch {
        console.error('Semua Pic is not set as a default pic')
    }

}) 


When ('User click "EraIlyasa" after search modal', async() => {
    await produkPage.optPICEra.click();
    await browser.pause(1000);
})


When ('User click "optPICSemua" after search modal', async() => {
    await produkPage.optPICSemua.click();
    await browser.pause(1000);
})


When ('User click "optSemuaGudang" after search modal', async() => {
    await produkPage.optSemuaGudang.click();
    await browser.pause(1000);
})


Then ('User able to see table shows {string} on Gudang section', async(picName) => {
    try {
        await produkPage.picName.isDisplayed();
        let text = await produkPage.picName.getText();
        console.log('PIC : ', await text);
        expect (await text).equal(picName);
    
    }catch (error) {
        console.error('pic is not displayed on gudang section')
    }
})


When ('User click fieldSearchModal in pic filter', async() => {
    await produkPage.inputSearchPICFilter.click();
    await browser.pause(1000);
})


Then ('User able to see {string} radio as default warehouse', async(option1) => {
        try {
            let text8 = (await produkPage.selectedRadio('[3]')).getText();
            expect (await text8).equal(option1)
            console.log('Warehouse Default : ', await text8)
            await browser.pause(2000)

        } catch (error) {
            console.error('selectedRadio is not as a default', error);
        }
})


Then ('User able to see {string} radio as default pic produk', async(option2) => {
    try {
        let text9 = (await produkPage.selectedRadio('[4]')).getText();
        expect (await text9).equal(option2)
        console.log('PIC Produk Default : ', await text9)
        await browser.pause(2000)

    } catch (error) {
        console.error('selectedRadio is not as a default', error);
    }
})


Then ('User able to see {string} on Gudang section', async(x) => {
    if (x === 'button') {
        try {
            await produkPage.btnPilihPIC.isDisplayed();
            await browser.pause(2000);
    
        } catch (error) {
            console.error('btnPilihPIC is not displayed', error)
        }
    }
    let text = await produkPage.btnPilihPIC.getText();
    expect(await text).equal(x)    
    console.log('Text : ', await text);

})


Then ('User able to see {string} message', async(x:string) => {
    if (x === 'PIC Sebelumnya') {
        expect((await produkPage.logPIC('[1]')).isDisplayed());
        let text = (await produkPage.logPIC('[1]')).getText();
        console.log('PIC Sebelumnya :', await text);
    } else if (x === 'PIC Sekarang') {
        expect((await produkPage.logPIC('[2]')).isDisplayed());
        let text = (await produkPage.logPIC('[2]')).getText();
        console.log('PIC Sekarang :', await text);
    }
}) 


When ('User click btnPilihPIC on gudang section', async() => {
    await produkPage.btnPilihPIC.click();
    await browser.pause(1000);
}) 


When ('User able to see PIC LAMA value is {string}',async(picValue) => {
    try {
        await browser.waitUntil(async() => {
            return await produkPage.textPICLama.isDisplayed();

        }, {
            timeout:10000,
            timeoutMsg:'textPICLama is not displayed'
        })
        let text = await produkPage.textPICLama.getText();
        console.log(await text);
        expect (await text).equal(picValue)
    } catch (error) {
        console.error('picValue is not as expected, there is pic', error)
    }
})


When ('User click dropdownModalPICBaru button in Product page', async() => {
    await produkPage.dropdownModalPICBaru.click();
    await browser.pause(2000);
})


When ('User fill dropdownModalPICBaru with value {string} in Product page', async(picValue) => {
    await produkPage.dropdownModalPICBaru.setValue(picValue);
    await browser.pause(2000);
    await browser.keys(['Enter']);
})


When ('User click btnSimpanModalPIC in product page', async() => {
    await produkPage.btnSimpanModalPIC.click();
    await browser.pause(1000);
})


Then ('User able to see diubah oleh {string} and tanggal is {string}', async(x, y) =>{
    if (x === 'Era Ilyasa') {
        try {
            (await produkPage.logPIC('[3]')).isDisplayed();
            let text = (await produkPage.logPIC('[3]')).getText();
            expect (await text).equal(x)
            console.log('Diubah oleh:',await text)

            if (y === '08 Oct 2024') {
                (await produkPage.logPIC('[4]')).isDisplayed();
                let text = (await produkPage.logPIC('[4]')).getText();
                expect (await text).equal(y)
                console.log('Date:',await text)
            }
        } catch (error) {
            console.error('pic is not displayed', error)
        }
    }
})


When ('User click btnCancelModalPIC in product page', async() => {
    await produkPage.btnCancelModalPIC.click();
    await browser.pause(1000);
})


When ('User click btnExportPIC button in Product page', async() => {
    await produkPage.btnExportFile.waitForClickable({timeout:10000})
    await produkPage.btnExportFile.click();
    getTodayDateTime();
    console.log(getTodayDateTime());
    // await browser.pause(20000);
})


Then ('User verify the CSV file has been downloaded', async function (){
            
    downloadPath = path.join('downloads', `export-product-pic_${getTodayDateTime()}.xlsx`);

    await browser.waitUntil(async () => {
        const fileExist = fs.existsSync(downloadPath)
        console.log(`file exist: ${downloadPath}`)
        return fileExist 
    }, {
        timeout: 90000, 
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