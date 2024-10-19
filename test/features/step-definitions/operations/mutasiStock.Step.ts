import mutasiStock from '../../pageobjects/operations/mutasiStock';
import { addAttachment } from '@wdio/allure-reporter';
import { When, Then, Given } from '@cucumber/cucumber';
import { expect } from 'chai';
import { error } from 'console';

let result: any 
let text: any
let displayed: any

let today: any
let year: any
let month: any
let day:any

const getDateThreeMonthsAgo = (): string => {
    today = new Date();
    today.setMonth(today.getMonth() - 3); 

    year = today.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    month = monthNames[today.getMonth()]; 
    day = String(today.getDate()).padStart(2, '0');
    return `${day} ${month} ${year}`;
}
const getDateTodayMonth = (): string => {
    today = new Date();
    year = today.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    month = monthNames[today.getMonth()]; 
    day = String(today.getDate()).padStart(2, '0');
    return `${day} ${month} ${year}`;
}


Then ('User verify titlePage in mutasi stock', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await mutasiStock.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await mutasiStock.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(5000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})

When ('User click {string} in mutasi stock', async(x:string) => {
    if (x === 'stok bagus') {
        await mutasiStock.stockBagusTab.click();
        await browser.pause(1000);

    } else if (x === 'stok rusak') {
        await mutasiStock.stockRusakTab.click();
        await browser.pause(1000);
        
    } else if (x === 'stok vendor') {
        await mutasiStock.stockVendorTab.click();
        await browser.pause(1000);
        
    }
})

When ('User set periode {string} mutasi stock', async(x:string) => {
    if (x === 'awal') {
        await mutasiStock.startDate.click();
        await browser.keys(['Control', 'a']);
        await browser.pause(1000);
        await browser.keys(['Delete']);
        console.log('Periode awal:',getDateThreeMonthsAgo());
        await mutasiStock.startDate.setValue(getDateThreeMonthsAgo());
        await browser.keys(['Enter'])
        await browser.pause(3000); 

    } else if (x === 'akhir') {
        await mutasiStock.endDate.click();
        await browser.keys(['Control', 'a']);
        await browser.pause(1000);
        await browser.keys(['Delete']);
        console.log('Periode akhir',getDateTodayMonth());
        await mutasiStock.endDate.setValue(getDateTodayMonth());
        await browser.keys(['Enter'])
        await browser.pause(3000); 

    }
})

When ('User set gudang in mutasi stock', async() => {
    await mutasiStock.warehouseGoods.click();
    await mutasiStock.optWarehouseGoods.waitForDisplayed({timeout:20000, timeoutMsg:'gudang still not displayed'});
    await mutasiStock.optWarehouseGoods.click();
    await browser.pause(1000);
})

When ('User set produk in mutasi stock', async() => {
    await mutasiStock.productGoods.click();
    await mutasiStock.optProductGoods.waitForDisplayed({timeout:20000, timeoutMsg:'product still not displayed'});
    await mutasiStock.optProductGoods.click();
    await browser.pause(1000);
})

When ('User set satuan in mutasi stock', async() => {
    await mutasiStock.satuan.click();
    await mutasiStock.optSatuan.waitForDisplayed({timeout:20000, timeoutMsg:'satuan still not displayed'});
    await mutasiStock.optSatuan.click();
    await browser.pause(1000);
})

When ('User set tipe pt in mutasi stock', async() => {
    await mutasiStock.companyType.click();
    await mutasiStock.optCompanyType.waitForDisplayed({timeout:20000, timeoutMsg:'satuan still not displayed'});
    await mutasiStock.optCompanyType.click();
    await browser.pause(1000);

})

When ('User click btnShow in mutasi stock', async() => {
    await mutasiStock.btnShow.click();
    await browser.pause(5000);
})

Then ('User able to see namaProduk in list mutasi stock', async() => {
    try {
        expect (await mutasiStock.namaProduk.waitForDisplayed({timeout:20000, timeoutMsg:'namaProduk still not displayed'}))
        text = await mutasiStock.namaProduk.getText();
        console.log('Produk:',await text);
    } catch {
        console.error('namaProduk is not displayed, not as expected', error)
    }
})






/////////////////////////////////////////////////////////
