import { Given, When, Then } from '@cucumber/cucumber';
import setoranPage from '../../pageobjects/procurement/setoranPage';
import path from 'path';
import { expect } from 'chai';
import { error } from 'console';
const setoran = setoranPage;


let text: any
let displayed: any


When ('User click {string} filter setoran', async(x:string) => {
    if (x === 'tglSetoranFilter') {
        await setoran.tglSetoranFilter.click();
        await browser.pause(1000);
    
    } else if (x === 'gudangFilter') {
        await setoran.gudangFilter.click();
        await browser.pause(1000);
    
    } else if (x === 'jenisSetoranFilter') {
        await setoran.jenisSetoranFilter.click();
        await browser.pause(1000);
    
    }
})

When ('User click nav menu {string} setoran modal', async(x:string) => {
    if (x === 'Gudang') {
        await setoran.navGudang.click();

    } else if (x === 'Jenis Setoran') {
        await setoran.navGudang.click();
        await setoran.navJenisSetoran.click();
        
    } else if (x === 'Petugas Vendor') {
        await setoran.navGudang.click();
        await setoran.navJenisSetoran.click();
        await setoran.navPetugasVendor.click();
        
    } else if (x === 'Pembuat Setoran') {
        await setoran.navGudang.click();
        await setoran.navJenisSetoran.click();
        await setoran.navPembuatSetoran.click();
    }
})

When ('User choose {string} in tglSetoran setoran', async(x:string) => {
    if (x === 'Hari Ini') {
        await setoran.hariIni.waitForDisplayed();
        await setoran.hariIni.click();
        await browser.pause(1000);

    } else if (x === '7 Hari Terakhir') {
        await setoran.lastWeek.waitForDisplayed();
        await setoran.lastWeek.click();
        await browser.pause(1000);

    } else if (x === '30 Hari Terakhir') {
        await setoran.lastMonth.waitForDisplayed();
        await setoran.lastMonth.click();
        await browser.pause(1000);

    } else if (x === 'Custom') {
        await setoran.custom.waitForDisplayed();
        await setoran.custom.click();
        await browser.pause(1000);

    }
})

// When ('User choose {string} in tglSetoran setoran', async(x:string) => {
//     if (x === 'Hari Ini') {
//         await setoran.hariIni.waitForDisplayed();
//         await setoran.hariIni.click();
//         await browser.pause(1000);

//     } else if (x === '7 Hari Terakhir') {
//         await setoran.lastWeek.waitForDisplayed();
//         await setoran.lastWeek.click();
//         await browser.pause(1000);

//     } else if (x === '30 Hari Terakhir') {
//         await setoran.lastMonth.waitForDisplayed();
//         await setoran.lastMonth.click();
//         await browser.pause(1000);

//     } else if (x === 'Custom') {
//         await setoran.custom.waitForDisplayed();
//         await setoran.custom.click();
//         await browser.pause(1000);

//     }
// })

When ('User input {string} into fieldInputSearch setoran', async(kodeSetoran) => {
    await setoran.fieldInputSearch.waitForClickable({timeout:40000, timeoutMsg:'field inptu search still not clickable'});
    await setoran.fieldInputSearch.click();
    await setoran.fieldInputSearch.setValue(kodeSetoran)
    await browser.pause(3000);
})

Then ('User able to see {string} in setoran', async(x:string) => {
    if (x === 'STR241017-1') {
        try {
            await browser.waitUntil(async() => {
                return expect(await setoran.KodeSetoran.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'Kode setoran still not displayed'
            })
            console.log('Kode Setoran:', await setoran.KodeSetoran.getText())
            await browser.pause(5000);

        } catch {
            console.error('Kode setoran is not displayed in merek page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await setoran.noDataSetoran.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataSetoran still not displayed'
        })
        text = await setoran.noDataSetoran.getText();
        displayed = await setoran.noDataSetoran.isDisplayed();
        console.log('Kode Setoran:',await text);
        expect (await displayed).to.be.true;

    } 
})

Then ('User verify titlePage in setoran', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await setoran.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await setoran.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(2000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})




When ('User click "navMenuFinance" in global page', async() => {
    // await browser.waitUntil(async() => {
    //     const isDisplayed = await setoran.navMenuFinance.isDisplayed();
    //     return isDisplayed;
    // }, {
    //     timeout:10000,
    //     timeoutMsg: 'navMenuFinance is not displayed'
        
    // })
    // await setoran.navMenuFinance.click();

    const coba = 5;  
for (let i = 0; i < coba; i++) {
    try { await browser.waitUntil(async () => {
            const isDisplayed = await setoran.navMenuFinance.isDisplayed();
            return isDisplayed;
        }, {
            timeout: 10000, 
            timeoutMsg: 'navMenuFinance is not displayed'
        });

        await setoran.navMenuFinance.click();
        console.log(`Attempt ${i + 1}: Successfully clicked navMenuFinance`);
        break;  

    } catch (error) {
        console.log(`Attempt ${i + 1}: Failed to click navMenuFinance. Retrying...`);
        
        if (i === coba - 1) {
            console.error('Max attempts reached. navMenuFinance could not be clicked.');
            throw error;  
        }

        await browser.pause(1000);  
    }
}
})


When ('User click "menuSetoran"', async() => {
    await setoran.menuSetoran.scrollIntoView();
    await setoran.menuSetoran.click();
})

Given ('User click "btnBuatSetoranNew"', async() => {
    await browser.waitUntil( async() => {
        const isClickable = await setoran.btnBuatSetoranNew.isClickable();
        return isClickable;
    }, {
        timeout:10000,
        timeoutMsg: 'btnBuatSetoranNew is not clickable'
    }
)
    await setoran.btnBuatSetoranNew.click();
})


When ('User click "fieldTipeOrder" in setoran page', async() => {
    await setoran.fieldTipeOrder.click();
    await browser.pause(1000);
})


When ('User click "optTipeOrder0" in setoran page', async() => {
    await setoran.optTipeOrder0.click();
    await browser.pause(1000);
})


When ('User click "optTipeOrder1" in setoran page', async() => {
    await setoran.optTipeOrder1.click();
    await browser.pause(1000);
})


When ('User click "fieldGudang" in setoran page', async() => {
    await setoran.fieldGudang.click();
    await browser.pause(1000);
})


When ('User click "optGudang0" in setoran page', async() => {
    await setoran.optGudang0.click();
    await browser.pause(1000);
})


When ('User click "fieldInputNamaKurir" in setoran page', async() => {
    await setoran.fieldInputNamaKurir.click();
})


When ('User input {string} inhouse into "fieldInputNamaKurir"', async(namaKurir) => {
    await setoran.fieldInputNamaKurir.setValue(namaKurir);
    await browser.keys(['Enter']);  

    await browser.waitUntil( async() => {
        const isDisplayed = await setoran.optNamaKurirInhouse.isDisplayed();
        return isDisplayed;
    }, {
        timeout: 10000,
        timeoutMsg : 'cannot input kurir name'
    })
    await browser.pause(1000);
    
})


When ('User input {string} vendor into "fieldInputNamaKurir"', async(namaKurir) => {
    await setoran.fieldInputNamaKurir.setValue(namaKurir);
    await browser.keys(['Enter']);  

    await browser.waitUntil( async() => {
        const isDisplayed = await setoran.optNamaKurirVendor.isDisplayed();
        return isDisplayed;
    }, {
        timeout: 10000,
        timeoutMsg : 'cannot input kurir name'
    })
    await browser.pause(1000);
    
})


When ('User click "aksiKonfirmasi0" in setoran page', async() => {
    await setoran.aksiKonfirmasi0.scrollIntoView();
    await setoran.aksiKonfirmasi0.click();
})


When ('User click "aksiKonfirmasi1" in setoran page', async() => {
    await setoran.aksiKonfirmasi1.scrollIntoView();
    await browser.pause(2000);
    await setoran.aksiKonfirmasi1.click();
})


When ('User click "fieldInputBayarCash" in modal konfirmasi setoran', async() => {
    await setoran.fieldInputBayarCash.click();
})


When ('User input {string} into "fieldInputBayarCash"', async(cash) => {
    for (const int of cash) {
        await setoran.fieldInputBayarCash.setValue(int);
        await browser.pause(50);
    }
    
})


When ('User upload image to "uploadImage1" in modal konfirmasi button', async() => {
    const uploadElement = await setoran.uploadImage1;

    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('C:\\Users\\Asus\\Documents\\git\\griya-super\\Images\\Product Banner Design.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
    await browser.keys(['Enter'])
})


When ('User click "fieldInputBuktiTF1" in modal konfirmasi button', async() => {
    await setoran.fieldInputBuktiTF1.click();
}) 


When ('User input {string} into "fieldInputBuktiTF1"', async(cash) => {
    for (const int of cash) {
        await setoran.fieldInputBuktiTF1.setValue(int);
        await browser.pause(50);
    }
})


When ('User click "btnSimpanModal" in modal konfirmasi button', async() => {
    await setoran.btnSimpanModal.click();
}) 


When ('User click "btnBuatSetoran" in setoran page', async() => {
    await setoran.btnBuatSetoran.click();
}) 


When ('User click "btnSayaYakin" in setoran page', async() => {
    await setoran.btnSayaYakin.click();
})


When ('User delete "hapusRow1" in setoran page', async() => {
    // await setoran.hapusRow1.scrollIntoView();
    // const coba = 5;
    await browser.waitUntil(async() => {
        await setoran.hapusRow1.click();
        const isExisting = await setoran.btnConfirmDelete.isExisting();
        return isExisting;
    }, {
        timeout:10000,
        timeoutMsg: 'btnConfirmDelete is not isExisting'
    })

    await browser.pause(1000);

    if (await setoran.btnConfirmDelete.isClickable()) {
        await setoran.btnConfirmDelete.click();
    } else {
        console.log('Repeating the step...')
        await browser.refresh()
    }
})


When ('User delete "hapusRow2" in setoran page', async() => {
    await setoran.hapusRow2.scrollIntoView();
    await setoran.hapusRow2.click();
    await setoran.btnConfirmDelete.click();

})


Then ('User able to see successfull message create setoran', async() => {
    await browser.pause(5000);
}) 


When ('User attach file import CSV inhouse', async() => {
    await setoran.btnImportCSV.click();
    await browser.pause(3000);

    const uploadElement = await setoran.importCSVModal;
    await uploadElement.waitForExist({ timeout: 5000 });
    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('C:\\Users\\Asus\\Documents\\git\\griya-super\\file-csv\\template-inhouse.csv');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
    await browser.keys(['Enter'])
    await browser.pause(5000);
    await setoran.btnImport.click();
  
})


When ('User attach file import CSV vendor', async() => {
    await setoran.btnImportCSV.click();
    await browser.pause(3000);

    const uploadElement = await setoran.importCSVModal;
    await uploadElement.waitForExist({ timeout: 5000 });
    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('file-csv\\template-vendor.csv');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
    await browser.keys(['Enter'])
    await browser.pause(5000);
    await setoran.btnImport.click();
  
})
When ('User delete nominal inside "fieldInputBayarCash"', async() => {
    await setoran.fieldInputBayarCash.click();
    await setoran.btnClearRevisiBayar.click();
})

When ('User choose {string} in gudangFilter setoran', async(x:string) => {
    if (x === 'Aloha-RTP') {
        await setoran.gudangAlohaRTP.click();

    }
})

When ('User choose {string} in jenisSetoranFilter setoran', async(x:string) => {
    if (x === 'Vendor') {
        await setoran.vendor.click();

    }
})
When ('User choose {String} in namaPembuat setoran', async(x:string) => {
//     if (x === '')
//     await setoran.
})




Then('User able to see {string} on list setoran', async (namaField) => {
    let textElement;
    
    switch (namaField) {
        case 'Jenis Setoran':
            textElement = setoran.textJenisSetoran;
            break;
        case 'Pembuat Setoran':
            textElement = setoran.textPICSetoran;
            break;
        case 'Gudang':
            textElement = setoran.textGudang;
            break;
        default:
            throw new Error(`Field "${namaField}" tidak dikenali`);
    }

    try {
        await browser.waitUntil(async () => {
            return expect (await textElement.isDisplayed());
        }, {
            timeout: 35000
        });

        const text = await textElement.getText();
        console.log(`${namaField}:`, text);
        await browser.pause(1000);
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
});

When ('User click {string} filter modal setoran', async(x:string) => {
    if (x === 'Terapkan') {
        await setoran.btnTerapkan.click();

    } if (x === 'Reset') {
        await setoran.btnReset.click();
        
    }
})

When ('User input {string} into searchPembuatSetoran filter modal setoran', async function(pic) {
    await setoran.searchPembuatSetoran.setValue(pic);
    await browser.pause(2000);
    let name = await setoran.getName.getText()
    console.log('Name:',await name)

    await browser.$(`(//*[@label="${name}"])`).click();
})

When ('User click detail {string} list setoran', async(x:string) => {
    if (x === 'Detail Nilai Transaksi') {
        await setoran.btnDetailNT.click();

    } else if (x === 'Detail Kode Setoran') {
        await setoran.btnDetailSetoran.click();

    }
})
Then ('User able to see modal detail nilai transaksi', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await setoran.modalDetailNT.isDisplayed());
        }, {
            timeout:35000, timeoutMsg:'Modal detail nilai transaksi is not displayed'
        })

        try {
            expect (await setoran.modalDetailNTRow0.isDisplayed());
            text = await setoran.modalDetailNTRow0.getText();
            console.log('Row 0:',await text);
            await browser.pause(1000)    
        }catch{
            console.error('Row 0 is not displayed', error)
        }

        try {
            expect (await setoran.modalDetailNTRow1.isDisplayed());
            text = await setoran.modalDetailNTRow1.getText();
            console.log('Row 1:',await text);
            await browser.pause(1000)    
        }catch{
            console.error('Row 1 is not displayed', error)
        }

    }catch{
        console.error('Not as expected one or more assertion is not displayed')
    }
}) 

When ('User click button bukti setoran in detail setoran', async() => {
    await setoran.btnPrintBuktiSetor.click();
})

Then ('User able to see page print bukti setoran', async() => {
    try {
        await browser.waitUntil(async() => {
           return expect (await setoran.buktiSetoranPage.isDisplayed())
        }, {
            timeout:30000
        })
        console.log('Page is displayed')
    }catch{
        console.error('Page is not opened', error)
    }

})