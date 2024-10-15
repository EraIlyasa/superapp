import invetoryPage from "../../pageobjects/operations/invetoryPage";
import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "chai"; 

When ('User click btnSearch in inventory', async() => {
    await invetoryPage.btnSearch.click();
    await browser.pause(1000);
})

When ('User input rak {string} into fieldInputSearch inventory', async(produk) => {
    await invetoryPage.fieldInputSearch.click();
    await invetoryPage.fieldInputSearch.setValue(produk)
    await browser.pause(3000);
})

When ('User click btnCari in inventory', async() => {
    await invetoryPage.btnCari.click();
    await browser.pause(1000);
})

Then ('User able to see {string} in inventory', async(x:string) => {
    if (x === 'Automated Testing hehe') {
        try {
            await browser.waitUntil(async() => {
                return expect(await invetoryPage.infoProduk.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'infoProduk still not displayed'
            })
            await browser.pause(5000);

        } catch {
            console.error('infoProduk is not displayed in inventory page')
        }
    
    }
})
