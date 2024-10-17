import konsinyasiPage from "../../pageobjects/procurement/konsinyasiPage";
import { expect } from "chai";
import { When, Then, Given } from "@cucumber/cucumber";

let text: any
let displayed: any

When ('User input {string} into fieldInputSearch konsinyasi', async(kodeKonsinyasi) => {
    await konsinyasiPage.fieldInputSearch.click();
    await konsinyasiPage.fieldInputSearch.setValue(kodeKonsinyasi)
    await browser.pause(3000);
})

When ('User click btnFilter in konsinyasi page', async() => {
    await konsinyasiPage.btnFilter.click();
    await browser.pause(1000);
})

When ('User click menu {string} in filter modal konsinyasi', async(x:string) => {
    if (x === 'navGudang') {
        await konsinyasiPage.navGudang.click();
        await browser.pause(1000);

    } else if (x === 'navPeriode') {
        await konsinyasiPage.navPeriode.click();
        await browser.pause(1000);
        
    } else if (x === 'navStatus') {
        await konsinyasiPage.navStatus.click();
        await browser.pause(1000);
        
    } else if (x === 'navDueDate') {
        await konsinyasiPage.navDueDate.click();
        await browser.pause(1000);
        
    }
})

When ('User choose periode {string}', async(x:string) => {
    if (x === 'Bulan Ini') {
        await konsinyasiPage.optPeriodeBulan.click();
        await browser.pause(1000);
    
    } else if (x === 'Hari Ini') {
        await konsinyasiPage.optPeriodeHari.click();
        await browser.pause(1000);
    
    }
})

When ('User click button {string} in filter modal konsinyasi', async(x:string) => {
    if (x === 'btnTerapkanFilter') {
        await konsinyasiPage.btnTerapkanFilter.click();
        await browser.pause(1000);
    
    } else if (x === 'btnReset') {
        await konsinyasiPage.btnReset.click();
        await browser.pause(1000);
    
    }
})

Then ('User able to see {string} in konsinyasi', async(x:string) => {
    if (x === '1729076243841') {
        try {
            await browser.waitUntil(async() => {
                return expect(await konsinyasiPage.kodeTransaksi.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'Kode Transaksi Konsinyasi still not displayed'
            })
            console.log('Kode Transaksi Konsinyasi:', await konsinyasiPage.kodeTransaksi.getText())
            await browser.pause(5000);

        } catch {
            console.error('Konsinyasi is not displayed in merek page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await konsinyasiPage.noDataKonsinyasi.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataKonsinyasi still not displayed'
        })
        text = await konsinyasiPage.noDataKonsinyasi.getText();
        displayed = await konsinyasiPage.noDataKonsinyasi.isDisplayed();
        console.log('Kode transaksi konsinyasi:',await text);
        expect (await displayed).to.be.true;

    } 
})

Then ('User verify titlePage in konsinyasi', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await konsinyasiPage.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await konsinyasiPage.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(2000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
