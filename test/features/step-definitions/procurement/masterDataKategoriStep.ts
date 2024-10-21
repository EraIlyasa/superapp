import kategoriPage from "../../pageobjects/procurement/kategoriPage";
import { expect } from "chai";
import { When, Then, Given } from "@cucumber/cucumber";

let text: any
let displayed: any

When ('User input {string} into fieldInputSearch kategori', async(kategori) => {
    await kategoriPage.fieldInputSearch.click();
    await kategoriPage.fieldInputSearch.setValue(kategori)
    await browser.pause(3000);
})

Then ('User able to see {string} in kategori', async(x:string) => {
    if (x === 'Cath Non Aktif') {
        try {
            await browser.waitUntil(async() => {
                return expect(await kategoriPage.namKategori.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'namKategori still not displayed'
            })
            console.log('Kategori:', await kategoriPage.namKategori.getText())
            await browser.pause(5000);

        } catch {
            console.error('Kategori is not displayed in Kategori page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await kategoriPage.noDataKategori.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataKategori still not displayed'
        })
        text = await kategoriPage.noDataKategori.getText();
        displayed = await kategoriPage.noDataKategori.isDisplayed();
        console.log('Kategori:',await text);
        expect (await displayed).to.be.true;

    } 
})

// When ('User click btnSearch in kategori', async() => {
//     await kategoriPage.btnSearch.click();
//     await browser.pause(1000);
// })

// When ('User click btnEnter in kategori', async() => {
//     await kategoriPage.btnEnter.click();
//     await browser.pause(1000);
// })

Then ('User verify titlePage in kategori', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await kategoriPage.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await kategoriPage.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(5000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
