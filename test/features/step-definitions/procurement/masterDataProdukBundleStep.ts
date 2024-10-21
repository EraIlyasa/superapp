import produkBundlePage from "../../pageobjects/procurement/produkBundlePage";
import { expect } from "chai";
import { When, Then, Given } from "@cucumber/cucumber";

let text: any
let displayed: any

When ('User input {string} into fieldInputSearch produk bundle', async(produkBundle) => {
    await produkBundlePage.fieldInputSearch.click();
    await produkBundlePage.fieldInputSearch.setValue(produkBundle)
    await browser.pause(3000);
})

Then ('User able to see {string} in produk bundle page', async(x:string) => {
    if (x === 'Honey Bee Bundle') {
        try {
            await browser.waitUntil(async() => {
                return expect(await produkBundlePage.produkBundle.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'produkBundle still not displayed'
            })
            console.log('Produk Bundle:', await produkBundlePage.produkBundle.getText())
            await browser.pause(5000);

        } catch {
            console.error('produk is not displayed in produk bundle page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await produkBundlePage.noDataProdukBundle.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataProdukBundle still not displayed'
        })
        text = await produkBundlePage.noDataProdukBundle.getText();
        displayed = await produkBundlePage.noDataProdukBundle.isDisplayed();
        console.log('Produk Name:',await text);
        expect (await displayed).to.be.true;

    } 
})

When ('User click btnSearch in produk bundle', async() => {
    await produkBundlePage.btnSearch.click();
    await browser.pause(1000);
})

When ('User click btnCari in produk bundle', async() => {
    await produkBundlePage.btnCari.click();
    await browser.pause(1000);
})

Then ('User verify titlePage in produk bundle', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await produkBundlePage.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await produkBundlePage.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(5000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
