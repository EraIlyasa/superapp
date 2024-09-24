import { Given, When, Then } from "@cucumber/cucumber";
import incomingGoodsPage from "../../pageobjects/operations/incomingGoodsPage";
import path from "path";
const incomingGoods = incomingGoodsPage;
import { kodeInvoice } from "./purchaseOrderStep";

When ('User click "fieldInputSearch" button in "Incoming" page', async() => {
    await incomingGoods.fieldInputSearch.click();
    await browser.pause(1000);
})


When ('User fill "fieldInputSearch" get value "keywordPOCode" in "Incoming" page', async() => {
    await incomingGoods.fieldInputSearch.setValue(kodeInvoice);
    await browser.pause(3000);
})


Given ('User get link to incoming goods', async() => {
    await browser.url('https://v3-web-app-micro.staging.superapp.co.id/logistic/incoming-goods-v4?page=1&limit=10');
    await browser.pause(10000);
})


When ('User click "menuIncomingGoodsV4" in "navMenuLogistik"',async() => {
    await browser.waitUntil(async() => {
        return await incomingGoods.menuIncomingGoodsV4.isClickable();
    }, {
        timeout:17000,
        timeoutMsg:'menuIncomingGoodsV4 still not clickable'
    })
    await incomingGoods.menuIncomingGoodsV4.click();
})



