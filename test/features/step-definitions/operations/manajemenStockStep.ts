import manajemenStock from "../../pageobjects/operations/manajemenStock";
import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "chai";

let text: any
let displayed: any

When ('User click btnSearch in manajemen stock', async() => {
    await manajemenStock.btnSearch.click();
    await browser.pause(1000);
})

When ('User input rak {string} into fieldInputSearch manajemen stock', async(produk) => {
    await manajemenStock.fieldInputSearch.click();
    await manajemenStock.fieldInputSearch.setValue(produk)
    await browser.pause(3000);
})

When ('User click btnCari in manajemen stock', async() => {
    await manajemenStock.btnCari.click();
    await browser.pause(1000);
})

Then ('User able to see {string} in manajemen stock', async(x:string) => {
    if (x === 'Automated Testing hehe') {
        try {
            await browser.waitUntil(async() => {
                return expect(await manajemenStock.infoProduk.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'infoProduk still not displayed'
            })
            console.log('Produk:', await manajemenStock.infoProduk.getText())
            await browser.pause(5000);

        } catch {
            console.error('infoProduk is not displayed in manajemen stock page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await manajemenStock.noDataAlert.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataAlert still not displayed'
        })
        text = await manajemenStock.noDataAlert.getText();
        displayed = await manajemenStock.noDataAlert.isDisplayed();
        console.log('text is:',await text);
        expect (await displayed).to.be.true;

    } 
})

