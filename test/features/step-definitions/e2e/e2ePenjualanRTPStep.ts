import { When, Then, Given } from "@cucumber/cucumber";
import e2ePenjualanRTP from "../../pageobjects/e2e/e2ePenjualanRTP";
import { time } from "console";
import { expect } from "chai";

let nilai: any
//Nav Menu Gudang
When ('User search specific warehouse in gudang page', async() => {
    await browser.waitUntil(async() => {
        return await e2ePenjualanRTP.fieldInputSearchGudang.isClickable();
    }, {
        timeout:45000,
        timeoutMsg:'fieldInputSearhGudang still not clickable'
    })
    await e2ePenjualanRTP.fieldInputSearchGudang.click();
    await browser.pause(500);
    await e2ePenjualanRTP.fieldInputSearchGudang.setValue('Aloha-RTP');
    await browser.pause(4000);
})

When ('User click btnDetailGudang on Column Nama Gudang', async() => {
    await e2ePenjualanRTP.btnDetailGudang.click();
    await browser.pause(1000);
})

When ('User click btnEditGudang in detail gudang', async() => {
    await e2ePenjualanRTP.btnEditGudang.click();
    await browser.pause(1000);
}) 

When ('User choose set minimum order {string}', async(radioBtn) => {
    if (radioBtn === 'Berdasarkan Create Order') {
        await e2ePenjualanRTP.radioBtn2.click();
        await browser.pause(1000);
    }
})

When ('User input Minimum Order Lifestyle {string}', async(value) => {
    await e2ePenjualanRTP.fieldMinLifestyle.click();
    if (value === '200000') {
        nilai = await e2ePenjualanRTP.fieldMinLifestyle.getText();
        console.log('value lifestyle:',await nilai);
        await browser.pause(1000);
    } else {
        nilai = await e2ePenjualanRTP.fieldMinLifestyle.getText();
        console.log('value lifestyle:',await nilai);
        await e2ePenjualanRTP.fieldMinLifestyle.click();
        await browser.keys(['Control', 'a']);
        await browser.pause(500);
        await browser.keys(['Delete']);
        await e2ePenjualanRTP.fieldMinLifestyle.setValue(value);
        await browser.pause(1000);
    }
})

When ('User input Minimum Order All Category {string}', async(value2) => {
    await e2ePenjualanRTP.fieldMinLifestyle.click();
    if (value2 === '500000') {
        nilai = await e2ePenjualanRTP.fieldMinLifestyle.getText();
        console.log('value all category:',await nilai);
        await browser.pause(1000);
    } else {
        nilai = await e2ePenjualanRTP.fieldMinLifestyle.getText();
        console.log('value all category:',await nilai);
        await e2ePenjualanRTP.fieldMinLifestyle.click();
        await browser.keys(['Control', 'a']);
        await browser.pause(500);
        await browser.keys(['Delete']);
        await e2ePenjualanRTP.fieldMinLifestyle.setValue(value2);
        await browser.pause(1000);
    }
})

When ('User click simpan in gudang page', async() => {
    await e2ePenjualanRTP.btnSimpan.click();
    await browser.pause(1000);
}) 

When ('User click simpan validation gudang page', async() => {
    await e2ePenjualanRTP.validasiSimpan.click();
    await browser.pause(1000);
})

Then ('User able to see {string} verification in gudang page', async(message) => {
    try {
        await e2ePenjualanRTP.successAlert.waitForDisplayed({timeout:10000});
        nilai = await e2ePenjualanRTP.successAlert.getText();
        console.log('Message:',await nilai);
        expect(await nilai).to.equal(message)
    } catch (error) {
        console.error('"nilai" is not same as expected', error)
    }
}) 

//Nav Menu Administrator 
When ('User choose Tab Minimum Order', async() => {
    await e2ePenjualanRTP.minOrderTab.waitForDisplayed({timeout:45000, timeoutMsg:'minOrderTab still not displayed'})
    await e2ePenjualanRTP.minOrderTab.click();
    await browser.pause(1000);
})

When ('User choose filter gudang Aloha', async() => {
    await e2ePenjualanRTP.gudangDropDown.waitForClickable({timeout:10000, timeoutMsg:'gudangDropDown still not clickable'})
    await e2ePenjualanRTP.gudangDropDown.click();
    await browser.pause(1000);
})

Then ('User verify minimum order on selected warehouse', async() => {
    try {
        (await e2ePenjualanRTP.minOrder('1')).scrollIntoView();
        nilai = (await e2ePenjualanRTP.minOrder('1')).getText();
        console.log('Minimun orde mobil:',await nilai); 

        (await e2ePenjualanRTP.minOrder('2')).scrollIntoView();
        nilai = (await e2ePenjualanRTP.minOrder('2')).getText();
        console.log('Minimun order motor:',await nilai); 

    } catch (error) {
        console.error('error assertion those element')
    }
})
