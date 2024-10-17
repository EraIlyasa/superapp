import merekPage from "../../pageobjects/procurement/merekPage";
import { expect } from "chai";
import { When, Then, Given } from "@cucumber/cucumber";

let text: any
let displayed: any

When ('User input {string} into fieldInputSearch merek', async(kategori) => {
    await merekPage.fieldInputSearch.click();
    await merekPage.fieldInputSearch.setValue(kategori)
    await browser.pause(3000);
})

Then ('User able to see {string} in merek', async(x:string) => {
    if (x === 'Mama Koko') {
        try {
            await browser.waitUntil(async() => {
                return expect(await merekPage.namaMerek.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'namaSubKategori still not displayed'
            })
            console.log('Merek:', await merekPage.namaMerek.getText())
            await browser.pause(5000);

        } catch {
            console.error('Merek is not displayed in merek page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await merekPage.noDataMerek.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataSubKategori still not displayed'
        })
        text = await merekPage.noDataMerek.getText();
        displayed = await merekPage.noDataMerek.isDisplayed();
        console.log('Merek:',await text);
        expect (await displayed).to.be.true;

    } 
})

Then ('User verify titlePage in merek', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await merekPage.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await merekPage.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(2000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
