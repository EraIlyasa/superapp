import masterDataKurir from "../../pageobjects/operations/masterDataKurir";
import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "chai";

let text: any
let displayed: any

When ('User input {string} into fieldInputSearch kurir', async(kurir) => {
    await masterDataKurir.fieldInputSearch.click();
    await masterDataKurir.fieldInputSearch.setValue(kurir)
    await browser.pause(3000);
})

Then ('User able to see {string} in kurir page', async(x:string) => {
    if (x === 'Kurir Spesial') {
        try {
            await browser.waitUntil(async() => {
                return expect(await masterDataKurir.textNamaKurir.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'kurir still not displayed'
            })
            console.log('Kurir:', await masterDataKurir.textNamaKurir.getText())
            await browser.pause(5000);

        } catch {
            console.error('kurir is not displayed in kurir page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await masterDataKurir.noDataKurir.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataKurir still not displayed'
        })
        text = await masterDataKurir.noDataKurir.getText();
        displayed = await masterDataKurir.noDataKurir.isDisplayed();
        console.log('text is:',await text);
        expect (await displayed).to.be.true;

    } 
})

Then ('User verify titlePage in kurir', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await masterDataKurir.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await masterDataKurir.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(5000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
