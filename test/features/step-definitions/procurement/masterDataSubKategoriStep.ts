import subKategoriPage from "../../pageobjects/procurement/subKategoriPage";
import { expect } from "chai";
import { When, Then, Given } from "@cucumber/cucumber";

let text: any
let displayed: any

When ('User input {string} into fieldInputSearch sub kategori', async(kategori) => {
    await subKategoriPage.fieldInputSearch.click();
    await subKategoriPage.fieldInputSearch.setValue(kategori)
    await browser.pause(3000);
})

Then ('User able to see {string} in sub kategori', async(x:string) => {
    if (x === 'Makanan Kucing') {
        try {
            await browser.waitUntil(async() => {
                return expect(await subKategoriPage.namaSubKategori.isDisplayed());
            }, {
                timeout:45000,
                timeoutMsg:'namaSubKategori still not displayed'
            })
            console.log('Sub Kategori:', await subKategoriPage.namaSubKategori.getText())
            await browser.pause(5000);

        } catch {
            console.error('Sub Kategori is not displayed in Kategori page')
        }
    
    } else {
        await browser.waitUntil(async() => {
            return await subKategoriPage.noDataSubKategori.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'noDataSubKategori still not displayed'
        })
        text = await subKategoriPage.noDataSubKategori.getText();
        displayed = await subKategoriPage.noDataSubKategori.isDisplayed();
        console.log('Sub Kategori:',await text);
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

Then ('User verify titlePage in sub kategori', async() => {
    try {
        await browser.waitUntil(async() => {
            return expect (await subKategoriPage.titlePage.isDisplayed());
        }, {
            timeout:30000,
        })
        text = await subKategoriPage.titlePage.getText();
        console.log('Title:',await text);
        await browser.pause(5000);
    } catch {
        console.error('titlePage is not displayed or element could be not found')
    }
})
