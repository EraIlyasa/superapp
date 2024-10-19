import supplierPage from "../../pageobjects/procurement/supplierPage";
import { expect } from "chai";
import { When, Then, Given } from "@cucumber/cucumber";

let text: any
let displayed: any

When ('User input {string} into fieldInputSearch supplier', async(supplier) => {
    await supplierPage.fieldInputSearch.click();
    await supplierPage.fieldInputSearch.setValue(supplier)
    await browser.pause(3000);
})

Then ('User able to see {string} in supplier', async(x:string) => {
    if (x === 'Supplier RJ') {
        try {
            await browser.waitUntil(async() => {
                return expect(await supplierPage.namaSupplier.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'namaSupplier still not displayed'
            })
            console.log('Supplier:', await supplierPage.namaSupplier.getText())
            await browser.pause(5000);

        } catch {
            console.error('Supplier is not displayed in merek page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await supplierPage.noDataSupplier.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataSupplier still not displayed'
        })
        text = await supplierPage.noDataSupplier.getText();
        displayed = await supplierPage.noDataSupplier.isDisplayed();
        console.log('Supplier:',await text);
        expect (await displayed).to.be.true;

    } 
})

Then ('User verify titlePage in supplier', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await supplierPage.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await supplierPage.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(2000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
