
import { Given, When, Then } from '@cucumber/cucumber'
import e2eBadStockPage from '../../pageobjects/e2e/e2eBadStockPage'
const e2eBs = e2eBadStockPage;

// When ('User click "navMenuStock" button in "Global" page', async() => {
//     await e2eBs.navMenuStock.click();
// })

When('User click "menuInventory" button in "Stock"', async () => {
    await browser.waitUntil(
        async () => {
            await e2eBs.menuInventory.scrollIntoView();
            return e2eBs.menuInventory.isClickable();
        },
        {
            timeout: 17000, // Wait for up to 17 seconds
            timeoutMsg: 'menuInventory was not clickable after 17s'
        }
    );
    await e2eBs.menuInventory.click();
});



When('User click "btnSearch" button in inventory page', async () => {
    // Custom wait for the button to be clickable
    await browser.waitUntil(
        async () => await e2eBs.btnSearch.isClickable(),
        {
            timeout: 17000, // Wait for up to 17 seconds
            timeoutMsg: 'btnSearch was not clickable after 17s'
        }
    );
    
    // Then click the button
    await e2eBs.btnSearch.click();
});


When ('User click "fieldInputSearchStock" button in inventory page', async() => {
    await e2eBs.fieldInputSearchStock.click();
})


Given ('User input {string} into "fieldInputSearchStock"', async(productName) => {
    await e2eBs.fieldInputSearchStock.setValue(productName);
})


When ('User click "btnCariStock"', async() => {
    await e2eBs.btnCariStock.click();
})


When ('User verify amount of "textStokBlmRilis"', async() => {
    await e2eBs.textStokBlmRilis.scrollIntoView();
    const stokBlmRilis = await e2eBs.textStokBlmRilis.getText();
    console.log('Stok belum rilis before : ', await stokBlmRilis);
    await browser.pause(1000);
})


When ('User verify amount of "textStokTemporary"', async() => {
    await e2eBs.textStokTemporary.scrollIntoView();
    const StokTemporary = await e2eBs.textStokTemporary.getText();
    console.log('Stok temporary before : ', await StokTemporary);
    await browser.pause(1000);
})


When ('User verify amount of "textStokRusak"', async() => {
    await e2eBs.textStokRusak.scrollIntoView();
    const StokRusak = await e2eBs.textStokRusak.getText();
    console.log('Stok rusak before : ', await StokRusak);
    await browser.pause(1000);
})


When ('User verify amount of "textStokRetur"', async() => {
    await e2eBs.textStokRetur.scrollIntoView();
    const StokRetur = await e2eBs.textStokRetur.getText();
    console.log('Stok retur before : ', await StokRetur);
    await browser.pause(1000);
})


When ('User click "btnExpandSG"', async() => {
    await e2eBs.btnExpandSG.click();
})


When ('User directed to "Stok Bermasalah" via {string}', async(url) => {
    await browser.url(url);
})