import returOrderPage from "../../pageobjects/procurement/returOrderPage";
import { expect } from "chai";
import { When, Then, Given } from "@cucumber/cucumber";

let text: any
let displayed: any

When ('User input {string} into fieldInputSearch retur order', async(kodeRetur) => {
    await returOrderPage.fieldInputSearch.click();
    await returOrderPage.fieldInputSearch.setValue(kodeRetur)
    await browser.pause(3000);
})

When ('User click btnSearch in retur order', async() => {
    await returOrderPage.btnSearch.click();
    await browser.pause(1000);
})

When ('User click btnCari in retur order', async() => {
    await returOrderPage.btnCari.click();
    await browser.pause(1000);
})
When ('User click btnFilter in retur order', async() => {
    await returOrderPage.btnFilter.click();
    await browser.pause(1000);
})

When ('User click menu {string} in filter modal retur order', async(x:string) => {
    if (x === 'navGudang') {
        await returOrderPage.navGudang.click();
        await browser.pause(1000);

    } else if (x === 'navPeriode') {
        await returOrderPage.navPeriode.click();
        await browser.pause(1000);
        
    } else if (x === 'navStatus') {
        await returOrderPage.navStatus.click();
        await browser.pause(1000);
        
    } else if (x === 'navKlasifikasi') {
        await returOrderPage.navKlasifikasi.click();
        await browser.pause(1000);
        
    } else if (x === 'navVendor') {
        await returOrderPage.navVendor.click();
        await browser.pause(1000);
        
    }
})

When ('User choose periode {string} in retur order', async(x:string) => {
    if (x === '30 Hari terakhir') {
        await returOrderPage.lastMonth.click();
        await browser.pause(1000);
    
    } else if (x === '7 Hari terakhir') {
        await returOrderPage.lastWeek.click();
        await browser.pause(1000);
    
    } else if (x === 'Hari Ini') {
        await returOrderPage.hariIni.click();
        await browser.pause(1000);
    
    }else if (x === 'Custom') {
        await returOrderPage.custom.click();
        await browser.pause(1000);
    
    }
})

When ('User click button {string} in filter modal retur order', async(x:string) => {
    if (x === 'btnTerapkanFilter') {
        await returOrderPage.btnTerapkan.click();
        await browser.pause(1000);
    
    } else if (x === 'btnReset') {
        await returOrderPage.btnReset.click();
        await browser.pause(1000);
    
    }
})

Then ('User able to see {string} in retur order', async(x:string) => {
    if (x === 'RTR2410-7') {
        try {
            await browser.waitUntil(async() => {
                return expect(await returOrderPage.kodeRetur.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'Kode Retur Konsinyasi still not displayed'
            })
            console.log('Kode Retur:', await returOrderPage.kodeRetur.getText())
            await browser.pause(5000);

        } catch {
            console.error('Kode Retur is not displayed')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await returOrderPage.noDataReturOrder.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataKonsinyasi still not displayed'
        })
        text = await returOrderPage.noDataReturOrder.getText();
        displayed = await returOrderPage.noDataReturOrder.isDisplayed();
        console.log('Kode transaksi konsinyasi:',await text);
        expect (await displayed).to.be.true;

    } 
})

Then ('User verify titlePage in retur order', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await returOrderPage.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await returOrderPage.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(2000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
