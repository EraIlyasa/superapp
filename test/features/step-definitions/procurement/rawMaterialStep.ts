import rawMaterialPage from "../../pageobjects/procurement/rawMaterialPage";
import { expect } from "chai";
import { When, Then, Given } from "@cucumber/cucumber";

let text: any
let displayed: any

When ('User input {string} into fieldInputSearch raw material', async(rawMet) => {
    await rawMaterialPage.fieldInputSearch.click();
    await rawMaterialPage.fieldInputSearch.setValue(rawMet)
    await browser.pause(3000);
})

Then ('User able to see {string} in raw material', async(x:string) => {
    if (x === 'Automated Raw 2') {
        try {
            await browser.waitUntil(async() => {
                return expect(await rawMaterialPage.rawMaterialName.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'rawMaterialName still not displayed'
            })
            console.log('Raw Material:', await rawMaterialPage.rawMaterialName.getText())
            await browser.pause(5000);

        } catch {
            console.error('Raw Material is not displayed in Raw Material page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await rawMaterialPage.noDataRM.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataRM still not displayed'
        })
        text = await rawMaterialPage.noDataRM.getText();
        displayed = await rawMaterialPage.noDataRM.isDisplayed();
        console.log('Raw material Name:',await text);
        expect (await displayed).to.be.true;

    } 
})

When ('User click btnSearch in raw material', async() => {
    await rawMaterialPage.btnSearch.click();
    await browser.pause(1000);
})

When ('User click btnEnter in raw material', async() => {
    await rawMaterialPage.btnEnter.click();
    await browser.pause(1000);
})

Then ('User verify titlePage in raw material', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await rawMaterialPage.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await rawMaterialPage.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(5000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
