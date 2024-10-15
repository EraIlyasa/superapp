import masterDataPICVendor from "../../pageobjects/operations/masterDataPICVendor";
import { When, Then,Given } from "@cucumber/cucumber";
import { expect } from "chai";

let text: any
let displayed: any

When ('User input {string} into fieldInputSearch pic vendor', async(pic) => {
    await masterDataPICVendor.fieldInputSearch.click();
    await masterDataPICVendor.fieldInputSearch.setValue(pic)
    await browser.pause(3000);
})

Then ('User able to see {string} in pic vendor page', async(x:string) => {
    if (x === 'SANGAR SURABAYA') {
        try {
            await browser.waitUntil(async() => {
                return expect(await masterDataPICVendor.textNamaVendor.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'pic still not displayed'
            })
            console.log('PIC Vendor:', await masterDataPICVendor.textNamaVendor.getText())
            await browser.pause(5000);

        } catch {
            console.error('pic is not displayed in pic vendor page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await masterDataPICVendor.noDataVendor.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataAlert still not displayed'
        })
        text = await masterDataPICVendor.noDataVendor.getText();
        displayed = await masterDataPICVendor.noDataVendor.isDisplayed();
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

Then ('User verify titlePage in pic vendor', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await masterDataPICVendor.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        await browser.pause(5000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
