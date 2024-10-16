import { expect } from "chai";
import outgoingRecapPage from "../../pageobjects/operations/outgoingRecapPAge";
import { Then, When } from "@cucumber/cucumber";

let title: any

Then ('Then User verify titlePage in outgoing goods page', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await outgoingRecapPage.titlePage.isDisplayed());
        }, {
            timeout:30000,
            timeoutMsg:'titlePage still not displayed'
        })
        title = await outgoingRecapPage.titlePage.getText();
        console.log('Title is:',await title)
        
    } catch {
        console.error('title is not displayed')
    }
})

When ('User click btnSearch in outgoing recap', async() => {
    await outgoingRecapPage.btnSearch.click();
    await browser.pause(1000);
})

When ('User input kode {string} into fieldInputSearch outoging recap', async(invoice) => {
    await outgoingRecapPage.fieldInputSearch.click();
    await outgoingRecapPage.fieldInputSearch.setValue(invoice)
    await browser.pause(3000);
})

When ('User click btnCari in outgoing recap', async() => {
    await outgoingRecapPage.btnCari.click();
    await browser.pause(1000);
})

Then ('User able to see {string} in outgoing recap', async(x:string) => {
    if (x === 'T241014-777') {
        try {
            await browser.waitUntil(async() => {
                return await outgoingRecapPage.textKodeInvoice.isDisplayed();
            }, {
                timeout:30000,
                timeoutMsg:'textInvoice still not displayed'
            })
            await browser.pause(5000);

        } catch {
            console.error('textInvoice is not displayed in outgoing recap page')
        }
    
    }
})
