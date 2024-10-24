import { Given, When, Then } from "@cucumber/cucumber";
import incomingGoodsPage from "../../pageobjects/operations/incomingGoodsPage";
import path from "path";
import { expect } from "chai";
const incomingGoods = incomingGoodsPage;
import { kodeInvoice } from "../procurement/purchaseOrderStep";
import { error } from "console";

let text: any
let rowIndex: any

let qtyPending: any
let qtyPending1: any
let qtyPending2: any
let qtyPending3: any



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

Then ('User verify titlePage in incoming goods', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await incomingGoods.titlePage.isDisplayed());
        }, {
            timeout:35000, timeoutMsg:'Title page is not displayed'
        })
        text = await incomingGoods.titlePage.getText();
        console.log('Title:',await text)
    }catch{
        console.error(error)
    }
})

When ('User click tab {string} in incoming goods', async(x:string) => {
    if (x === 'Tolakan Vendor') {
        // let found = false;

        // while (!found) {
        //     await browser.execute((el) => {
        //         el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        //     }, await incomingGoods.tabTolakanVendor);
    
        //     if (await incomingGoods.tabTolakanVendor.isDisplayed()) {
        //         await incomingGoods.tabTolakanVendor.scrollIntoView();
        //         await incomingGoods.tabTolakanVendor.click();
    
        //     }
        // }

        await incomingGoods.tabTolakanVendor.scrollIntoView();
        await browser.pause(1000);
        await incomingGoods.tabTolakanVendor.waitForDisplayed({timeout:35000});
        await incomingGoods.tabTolakanVendor.click();
        await browser.pause(1000);
    
    }
})

When ('User search invoice code in incoming goods', async function() {
    await incomingGoods.btnSearch.click();
    await incomingGoods.fieldInputSearch.setValue(this.invoiceOrder)
    await browser.pause(1000);
    await incomingGoods.btnCari.click();
    await browser.pause(5000);
}) 

When ('User get qty tolakan pending', async function() {
    await incomingGoods.btnDetailTV.click();
    await browser.pause(1000);

    const qtyPendingList = []
    rowIndex = 1;

    while(true) {
        try {
            qtyPending = await (await incomingGoods.fieldQTYPending(rowIndex.toString())).getText();
            console.log(`QTY Row ${rowIndex}:`, await qtyPending);
            qtyPendingList.push(await qtyPending);
            rowIndex++;

        }catch{
            console.log(`No more daftar tolakan. Stopping at row ${rowIndex}.`);
            break;

        }
    }
    console.log('Qty Pending List:', await qtyPendingList);
    
    // qtyPending1 = (await incomingGoods.fieldQTYPending('1')).getText();
    // console.log('QTY Row 1:',await qtyPending1);

    // qtyPending2 = (await incomingGoods.fieldQTYPending('2')).getText();
    // console.log('QTY Row 2:',await qtyPending2);

    // qtyPending3 = (await incomingGoods.fieldQTYPending('3')).getText();
    // console.log('QTY Row 3:',await qtyPending3);

    this.qtyPending1 = qtyPending[0] || null;
    this.qtyPending2 = qtyPending[1] || null;
    this.qtyPending3 = qtyPending[2] || null;
    this.qtyPendingList = qtyPendingList;

})

When ('User close daftar tolakan modal outgoing', async() => {
    await incomingGoods.closeModal.click();
    await browser.pause(1000);
})

When ('User click input tolakan pending', async() => {
    await incomingGoods.btnSubmit.click();
    await browser.pause(1000);
})

When ('User input tolakan diterima', async function() {
    for (let i = 0; i < this.qtyPendingList.length; i++) {
        rowIndex = (i + 1).toString();
        const fieldInput = await incomingGoods.fieldInputTolakanPending(rowIndex);
        // await fieldInput.click();
        // await browser.pause(500);
        await fieldInput.setValue(this.qtyPendingList[i])
    }
    
    // (await incomingGoods.fieldInputTolakanPending('1')).click();
    // (await incomingGoods.fieldInputTolakanPending('1')).setValue(this.qtyPending1);

})

When ('User click button modal {string} in tolakan pending', async(x:string) => {
    if (x === 'submit tolakan') {
        await incomingGoods.btnSubmitTolakan.click();
        await browser.pause(1000);
    
    } else if (x === 'batal tolakan') {
        await incomingGoods.btnBatalTolakan.click();
        await browser.pause(1000);
    
    }
})

When ('User click button {string} in tab', async(x:string) => {
    if (x === 'Sudah Benar') {
        await incomingGoods.btnSudahBenar.click();
        await browser.pause(1000);

    } else if (x === 'Kembali') {
        await incomingGoods.btnKembali.click();
        await browser.pause(1000);
    }
})

Then ('User able to see message verification in incoming goods', async() => {
    try {
        await browser.waitUntil(async() => {
            return await incomingGoods.successAlert.isDisplayed();
        }, {
            timeout:35000, timeoutMsg:'timeout'
        })
        await browser.pause(5000);

    }catch{
        console.error('Alert is not displayed', error)
    }
    
})
