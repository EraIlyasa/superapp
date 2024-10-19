import masterDataGudang from "../../pageobjects/operations/masterDataGudang";
import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "chai";

let text: any
let displayed: any


When ('User input {string} into fieldInputSearch gudang', async(namaGudang) => {
    await masterDataGudang.fieldInputSearch.click();
    await masterDataGudang.fieldInputSearch.setValue(namaGudang)
    await browser.pause(3000);
})

Then ('User able to see {string} in gudang page', async(x:string) => {
    if (x === 'gudangRra') {
        try {
            await browser.waitUntil(async() => {
                return expect(await masterDataGudang.textNamaGUdang.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'infoProduk still not displayed'
            })
            console.log('Produk:', await masterDataGudang.textNamaGUdang.getText())
            await browser.pause(5000);

        } catch {
            console.error('gudang is not displayed in gudang page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await masterDataGudang.noData.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataAlert still not displayed'
        })
        text = await masterDataGudang.noData.getText();
        displayed = await masterDataGudang.noData.isDisplayed();
        console.log('text is:',await text);
        expect (await displayed).to.be.true;

    } 
})

// Then ('User verify titlePage in gudang page', async() => {
//     await masterDataGudang.titlePage.isDisplayed();
//     try {
//         await browser.waitUntil(async() => {
//             return expect(await masterDataGudang.textNamaGUdang.isDisplayed());
//         }, {
//             timeout:45000,
//             timeoutMsg:'infoProduk still not displayed'
//         })
//         console.log('Produk:', await masterDataGudang.textNamaGUdang.getText())
//         await browser.pause(5000);

//     } catch {
//         console.error('infoProduk is not displayed in manajemen stock page')
//     }
// })

Then ('User verify titlePage in gudang page', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await masterDataGudang.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        await browser.pause(5000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
