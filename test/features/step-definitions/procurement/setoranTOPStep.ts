import { Given, When, Then } from '@cucumber/cucumber';
import setoranTOPPage from '../../pageobjects/procurement/setoranTOPPage';
import path from 'path';
import { expect } from 'chai';


let text: any
let displayed: any

let getTodayDateTime: any

getTodayDateTime = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth()) 
    const day = (today.getDate()) 
    const hours = (today.getHours()) 
    const minutes = (today.getMinutes()) 
    const seconds = (today.getSeconds())

    return `${year}-${month}-${day} ${hours}-${minutes}-${seconds}`;
}


When ('User click {string} filter setoranTOPPage', async(x:string) => {
    if (x === 'tglSetoranFilter') {
        await setoranTOPPage.tglSetoranTOPFilter.click();
        await browser.pause(1000);
    
    }
})

When ('User choose {string} in tglSetoran setoranTOPPage', async(x:string) => {
    if (x === 'Hari Ini') {
        await setoranTOPPage.hariIni.waitForDisplayed();
        await setoranTOPPage.hariIni.click();
        await browser.pause(1000);

    } else if (x === 'Bulan Ini') {
        await setoranTOPPage.bulanIni.waitForDisplayed();
        await setoranTOPPage.bulanIni.click();
        await browser.pause(1000);

    } else if (x === 'Custom') {
        await setoranTOPPage.custom.waitForDisplayed();
        await setoranTOPPage.custom.click();
        await browser.pause(1000);

    }
})
When ('User input {string} into fieldInputSearch setoranTOPPage', async(kodeTransaksi) => {
    await setoranTOPPage.fieldInputSearch.waitForClickable({timeout:40000, timeoutMsg:'field inptu search still not clickable'});
    await setoranTOPPage.fieldInputSearch.click();
    await setoranTOPPage.fieldInputSearch.setValue(kodeTransaksi)
    await browser.pause(3000);
})

Then ('User able to see {string} in setoranTOPPage', async(x:string) => {
    if (x === 'T-GSA241018-63') {
        try {
            await browser.waitUntil(async() => {
                return expect(await setoranTOPPage.textKodeTransaksi.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'Kode setoranTOPPage still not displayed'
            })
            console.log('Kode setoranTOPPage:', await setoranTOPPage.textKodeTransaksi.getText())
            await browser.pause(5000);

        } catch {
            console.error('Kode setoranTOPPage is not displayed in merek page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await setoranTOPPage.noDataSetoranTOP.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataSetoranTOP still not displayed'
        })
        text = await setoranTOPPage.noDataSetoranTOP.getText();
        displayed = await setoranTOPPage.noDataSetoranTOP.isDisplayed();
        console.log('Kode setoranTOPPage:',await text);
        expect (await displayed).to.be.true;

    } 
})

Then ('User verify titlePage in setoranTOPPage', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await setoranTOPPage.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await setoranTOPPage.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(2000);
        console.log('Time:',getTodayDateTime());
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})

When ('User click btnExportPIC button in Product page', async() => {
    await setoranTOPPage.btnExportCSV.waitForClickable({timeout:10000})
    await setoranTOPPage.btnExportCSV.click();
    getTodayDateTime();
    console.log(getTodayDateTime());
    // await browser.pause(20000);
})




// When ('User click "navMenuFinance" in global page', async() => {
    // await browser.waitUntil(async() => {
    //     const isDisplayed = await setoranTOPPage.navMenuFinance.isDisplayed();
    //     return isDisplayed;
    // }, {
    //     timeout:10000,
    //     timeoutMsg: 'navMenuFinance is not displayed'
        
    // })
    // await setoranTOPPage.navMenuFinance.click();

// When ('User click "menuSetoran"', async() => {
//     await setoranTOPPage.menuSetoran.scrollIntoView();
//     await setoranTOPPage.menuSetoran.click();
// })

// Given ('User click "btnBuatSetoranNew"', async() => {
//     await browser.waitUntil( async() => {
//         const isClickable = await setoranTOPPage.btnBuatSetoranNew.isClickable();
//         return isClickable;
//     }, {
//         timeout:10000,
//         timeoutMsg: 'btnBuatSetoranNew is not clickable'
//     }
// )
//     await setoranTOPPage.btnBuatSetoranNew.click();
// })


// When ('User click "fieldTipeOrder" in setoranTOPPage page', async() => {
//     await setoranTOPPage.fieldTipeOrder.click();
//     await browser.pause(1000);
// })


// When ('User click "optTipeOrder0" in setoranTOPPage page', async() => {
//     await setoranTOPPage.optTipeOrder0.click();
//     await browser.pause(1000);
// })


// When ('User click "optTipeOrder1" in setoranTOPPage page', async() => {
//     await setoranTOPPage.optTipeOrder1.click();
//     await browser.pause(1000);
// })


// When ('User click "fieldGudang" in setoranTOPPage page', async() => {
//     await setoranTOPPage.fieldGudang.click();
//     await browser.pause(1000);
// })


// When ('User click "optGudang0" in setoranTOPPage page', async() => {
//     await setoranTOPPage.optGudang0.click();
//     await browser.pause(1000);
// })


// When ('User click "fieldInputNamaKurir" in setoranTOPPage page', async() => {
//     await setoranTOPPage.fieldInputNamaKurir.click();
// })


// When ('User input {string} inhouse into "fieldInputNamaKurir"', async(namaKurir) => {
//     await setoranTOPPage.fieldInputNamaKurir.setValue(namaKurir);
//     await browser.keys(['Enter']);  

//     await browser.waitUntil( async() => {
//         const isDisplayed = await setoranTOPPage.optNamaKurirInhouse.isDisplayed();
//         return isDisplayed;
//     }, {
//         timeout: 10000,
//         timeoutMsg : 'cannot input kurir name'
//     })
//     await browser.pause(1000);
    
// })


// When ('User input {string} vendor into "fieldInputNamaKurir"', async(namaKurir) => {
//     await setoranTOPPage.fieldInputNamaKurir.setValue(namaKurir);
//     await browser.keys(['Enter']);  

//     await browser.waitUntil( async() => {
//         const isDisplayed = await setoranTOPPage.optNamaKurirVendor.isDisplayed();
//         return isDisplayed;
//     }, {
//         timeout: 10000,
//         timeoutMsg : 'cannot input kurir name'
//     })
//     await browser.pause(1000);
    
// })


// When ('User click "aksiKonfirmasi0" in setoranTOPPage page', async() => {
//     await setoranTOPPage.aksiKonfirmasi0.scrollIntoView();
//     await setoranTOPPage.aksiKonfirmasi0.click();
// })


// When ('User click "aksiKonfirmasi1" in setoranTOPPage page', async() => {
//     await setoranTOPPage.aksiKonfirmasi1.scrollIntoView();
//     await browser.pause(2000);
//     await setoranTOPPage.aksiKonfirmasi1.click();
// })


// When ('User click "fieldInputBayarCash" in modal konfirmasi setoranTOPPage', async() => {
//     await setoranTOPPage.fieldInputBayarCash.click();
// })


// When ('User input {string} into "fieldInputBayarCash"', async(cash) => {
//     for (const int of cash) {
//         await setoranTOPPage.fieldInputBayarCash.setValue(int);
//         await browser.pause(50);
//     }
    
// })


// When ('User upload image to "uploadImage1" in modal konfirmasi button', async() => {
//     const uploadElement = await setoranTOPPage.uploadImage1;

//     await uploadElement.waitForExist({ timeout: 5000 });

//     await browser.execute((el:HTMLElement) => {
//         el.style.display = 'block';
//     }, uploadElement);
//     const filePath = path.resolve('C:\\Users\\Asus\\Documents\\git\\griya-super\\Images\\Product Banner Design.jpg');
//     const uploadFile = await browser.uploadFile(filePath)

//     await uploadElement.setValue(uploadFile);
//     await browser.keys(['Enter'])
// })


// When ('User click "fieldInputBuktiTF1" in modal konfirmasi button', async() => {
//     await setoranTOPPage.fieldInputBuktiTF1.click();
// }) 


// When ('User input {string} into "fieldInputBuktiTF1"', async(cash) => {
//     for (const int of cash) {
//         await setoranTOPPage.fieldInputBuktiTF1.setValue(int);
//         await browser.pause(50);
//     }
// })


// When ('User click "btnSimpanModal" in modal konfirmasi button', async() => {
//     await setoranTOPPage.btnSimpanModal.click();
// }) 


// When ('User click "btnBuatSetoran" in setoranTOPPage page', async() => {
//     await setoranTOPPage.btnBuatSetoran.click();
// }) 


// When ('User click "btnSayaYakin" in setoranTOPPage page', async() => {
//     await setoranTOPPage.btnSayaYakin.click();
// })


// When ('User delete "hapusRow1" in setoranTOPPage page', async() => {
//     // await setoranTOPPage.hapusRow1.scrollIntoView();
//     // const coba = 5;
//     await browser.waitUntil(async() => {
//         await setoranTOPPage.hapusRow1.click();
//         const isExisting = await setoranTOPPage.btnConfirmDelete.isExisting();
//         return isExisting;
//     }, {
//         timeout:10000,
//         timeoutMsg: 'btnConfirmDelete is not isExisting'
//     })

//     await browser.pause(1000);

//     if (await setoranTOPPage.btnConfirmDelete.isClickable()) {
//         await setoranTOPPage.btnConfirmDelete.click();
//     } else {
//         console.log('Repeating the step...')
//         await browser.refresh()
//     }
// })


// When ('User delete "hapusRow2" in setoranTOPPage page', async() => {
//     await setoranTOPPage.hapusRow2.scrollIntoView();
//     await setoranTOPPage.hapusRow2.click();
//     await setoranTOPPage.btnConfirmDelete.click();

// })


// Then ('User able to see successfull message create setoranTOPPage', async() => {
//     await browser.pause(5000);
// }) 


// When ('User attach file import CSV inhouse', async() => {
//     await setoranTOPPage.btnImportCSV.click();
//     await browser.pause(3000);

//     const uploadElement = await setoranTOPPage.importCSVModal;
//     await uploadElement.waitForExist({ timeout: 5000 });
//     await browser.execute((el:HTMLElement) => {
//         el.style.display = 'block';
//     }, uploadElement);
//     const filePath = path.resolve('C:\\Users\\Asus\\Documents\\git\\griya-super\\file-csv\\template-inhouse.csv');
//     const uploadFile = await browser.uploadFile(filePath)

//     await uploadElement.setValue(uploadFile);
//     await browser.keys(['Enter'])
//     await browser.pause(5000);
//     await setoranTOPPage.btnImport.click();
  
// })


// When ('User attach file import CSV vendor', async() => {
//     await setoranTOPPage.btnImportCSV.click();
//     await browser.pause(3000);

//     const uploadElement = await setoranTOPPage.importCSVModal;
//     await uploadElement.waitForExist({ timeout: 5000 });
//     await browser.execute((el:HTMLElement) => {
//         el.style.display = 'block';
//     }, uploadElement);
//     const filePath = path.resolve('file-csv\\template-vendor.csv');
//     const uploadFile = await browser.uploadFile(filePath)

//     await uploadElement.setValue(uploadFile);
//     await browser.keys(['Enter'])
//     await browser.pause(5000);
//     await setoranTOPPage.btnImport.click();
  
// })


// When ('User delete nominal inside "fieldInputBayarCash"', async() => {
//     await setoranTOPPage.fieldInputBayarCash.click();
//     await setoranTOPPage.btnClearRevisiBayar.click();
// })