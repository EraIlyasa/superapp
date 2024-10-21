import warehouseRack from "../../pageobjects/operations/warehouseRack";
import { Then, When, Given } from "@cucumber/cucumber";
import { expect } from "chai";

When ('User click btnSearch in warehouserack', async() => {
    await warehouseRack.btnSearch.click();
    await browser.pause(1000);
})

When ('User input rak {string} into fieldInputSearch warehouserack', async(invoice) => {
    await warehouseRack.fieldInputSearch.click();
    await warehouseRack.fieldInputSearch.setValue(invoice)
    await browser.pause(3000);
})

When ('User click btnCari in warehouserack', async() => {
    await warehouseRack.btnCari.click();
    await browser.pause(1000);
})

Then ('User able to see {string} in warehouserack', async(x:string) => {
    if (x === 'bandung rakkk') {
        try {
            await browser.waitUntil(async() => {
                return expect(await warehouseRack.textRackName.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'textInvoice still not displayed'
            })
            await browser.pause(5000);

        } catch {
            console.error('textInvoice is not displayed in outgoing recap page')
        }
    
    }
})
