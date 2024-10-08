import e2eTransferGoods from '../../pageobjects/e2e/e2eTransferGoodsPage.ts';
import { Given, When, Then } from '@cucumber/cucumber';
import { Key } from 'webdriverio';
import axios from 'axios';
import { expect } from 'chai';
import * as path from 'path';
import fs from 'fs';

const tg = e2eTransferGoods;
let qtyBefore: string;
let qtyBeforeInt: number;
let qtyAfter: string;
let qtyAfterInt: number;
let tsfID: string;
let qtyIncoming: string;
let qtyIncomingInt: number;
let calculateQty: number;


    When ('User click "menuInventoryV3" in "navMenuStock"', async () => {
        await tg.menuInventoryV3.click();
    });

    When ('User click "btnFilterWarehouseInventory"', async () => {
        await tg.btnFilterWarehouseInventory.click();
    });

    When('User click "warehouseAloha" in "btnFilterWarehouseInventory"', async () => {
        await tg.warehouseAloha.scrollIntoView();
        await tg.warehouseAloha.click();
    });

    When('User click "warehouseJember" in "btnFilterWarehouseInventory"', async () => {
        await tg.warehouseJember.scrollIntoView();
        await tg.warehouseJember.click();
    });

    When('User click "warehouseAlohaRTP" in "btnFilterWarehouseInventory"', async () => {
        await tg.warehouseAlohaRTP.scrollIntoView();
        await tg.warehouseAlohaRTP.click();
    });

    When('User click "warehouseVirtualConsignment" in "btnFilterWarehouseInventory"', async () => {
        await tg.warehouseVirtualConsignment.scrollIntoView();
        await tg.warehouseVirtualConsignment.click();
    })
    
    When('User click "btnTerapkanFilterWarehouse"', async () => {
        await tg.btnTerapkanFilterWarehouse.click();
    });
    
    When('User click "btnSearch"', async () => {
        await tg.btnSearch.click();
    });
    
    When('User click "searchBarInventory"', async () => {
        await tg.searchBarInventory.click();
    });
    
    When('User input {string} into "searchBarInventory"', async (nama) => {
        await tg.searchBarInventory.setValue(nama);
    });
    
    When('User click "btnCari"', async () => {
        await tg.btnCari.click();
    });

    When('User click "btnExpandStokGudang"', async () => {
        await tg.btnExpandStokGudang.click();
    });
    
    When('User get "qtyStokBlmRilisBefore"', async () => {
        qtyBefore = await tg.qtyStokBlmRilisBefore.getText();
        qtyBeforeInt = parseInt(qtyBefore);
        console.log('Stok awal:', qtyBefore);
    });

    export { qtyBeforeInt };

    When('User click "navMenuLogistic" in global page', async () => {
        await tg.navMenuLogistic.scrollIntoView();
        await tg.navMenuLogistic.click();
    });
    
    When('User click "menuTransferGoods" in "navMenuLogistic"', async () => {
        await tg.menuTransferGoods.click();
    });

    When('User click "btnCreateTransferGoods"', async () => {
        await tg.btnCreateTransferGoods.click();
    });
    
    When('User click "fieldWarehouseFrom"', async () => {
        await tg.fieldWarehouseFrom.click();
    });
    
    When('User click "optWarehouseAlohaFrom" into "fieldWarehouseFrom"', async () => {
        await tg.optWarehouseAlohaFrom.click();
    });

    When('User click "optWarehouseAlohaRTPFrom" into "fieldWarehouseFrom"', async () => {
        await tg.optWarehouseAlohaRTPFrom.click();
    });

    When('User click "optWarehouseAlohaRTPTo" into "fieldWarehouseTo"', async () => {
        await tg.optWarehouseAlohaRTPTo.click();
    });

    When('User click "optWarehouseAlohaTo" into "fieldWarehouseTo"', async () => {
        await tg.optWarehouseAlohaTo.click();
    });
    
    When('User click "fieldWarehouseTo"', async () => {
        await tg.fieldWarehouseTo.click();
    });
    
    When('User click "optWarehouseJember" into "fieldWarehouseTo"', async () => {
        async function sendArrowDownMultipleTimes(n: number) {
            for (let i = 0; i < n; i++) {
                await browser.keys(Key.ArrowDown);
            }
        }
        async function checkElementAndStop() {
            const maxRetries = 100; // Set a limit for retries
            let found = false;
        
            for (let i = 0; i < maxRetries; i++) {
                const element = await tg.optWarehouseJember;
                
                if (await element.isDisplayed()) { // Check if the element is displayed
                    console.log('Found');
                    found = true;
                    await tg.optWarehouseJember.click();
                    break; // Exit the loop if the element is found
                } else {
                    await sendArrowDownMultipleTimes(3); // Send Arrow Down multiple times
                    await browser.pause(1000); // Wait for a second before retrying
                }
            }
        
            if (!found) {
                console.log('Element not found after maximum retries.');
            }
        }
        checkElementAndStop();
    });

    When('User click "optWarehouseVirtualConsignment" into "fieldWarehouseTo"', async () => {
        async function sendArrowDownMultipleTimes(n: number) {
            for (let i = 0; i < n; i++) {
                await browser.keys(Key.ArrowDown);
            }
        }
        async function checkElementAndStop() {
            const maxRetries = 100; // Set a limit for retries
            let found = false;
        
            for (let i = 0; i < maxRetries; i++) {
                const element = await tg.optWarehouseVirtualConsignment;
                
                if (await element.isDisplayed()) { // Check if the element is displayed
                    console.log('Found');
                    found = true;
                    await tg.optWarehouseVirtualConsignment.click();
                    break; // Exit the loop if the element is found
                } else {
                    await sendArrowDownMultipleTimes(3); // Send Arrow Down multiple times
                    await browser.pause(1000); // Wait for a second before retrying
                }
            }
        
            if (!found) {
                console.log('Element not found after maximum retries.');
            }
        }
        checkElementAndStop();
    });
    
    When('User click "fieldCompanyType"', async () => {
        await tg.fieldCompanyType.click();
    });

    When('User click "optCompanyTypePTGandaSegarArum" into "fieldTipeCompany"', async () => {
        await tg.optCompanyTypePTGandaSegarArum.click();
    });

    When('User click "optCompanyTypePTPutraAbyudaya" into "fieldTipeCompany"', async () => {
        await tg.optCompanyTypePTPutraAbyudaya.click();
    });

    When('User click "btnAddProduct"', async () => {
        await tg.btnAddProduct.click();
    });

    When('User click "searchBarProduct"', async () => {
        await tg.searchBarProduct.click();
    });
    
    When('User type {string} into "searchBarProduct"', async (nama) => {
        await tg.searchBarProduct.setValue(nama);
        await browser.keys(['Enter']);
    });

    When('User click "btnAddProductList"', async () => {
        await tg.btnAddProductList.click();
    });
    
    When('User click "btnSelectedProductModal"', async () => {
        await tg.btnSelectedProductModal.click();
    });
    
    When('User click "fieldQtyProduct"', async () => {
        await tg.fieldQtyProduct.click();
    });
    
    When('User type {string} into "fieldQtyProduct"', async (qty) => {
        await tg.fieldQtyProduct.setValue(qty);
    });
    
    // When('User click "btnAddProductModal"', async () => {
    //     await tg.btnAddProductModal.click();
    // });
    
    When('User click "btnCreateTransfer"', async () => {
        await tg.btnCreateTransfer.click();
    });

    When('User click "btnSubmitApproval"', async () => {
        await tg.btnSubmitApproval.click();
    });

    When('User click "btnChangeStatus"', async () => {
        await tg.btnChangeStatus.click();
    });

    When('User click "btnApprove"', async () => {
        await tg.btnApprove.click();
    });

    When('User get "transferID"', async () => {
        tsfID = await tg.transferID.getText();
        console.log('Transfer ID:', tsfID);
    });

    export { tsfID };

    When('User click "menuOutgoingTransfer" in "navMenuLogistic"', async () => {
        await tg.menuOutgoingTransfer.click();
    });

    When('User click "filterWarehouseTo"', async () => {
        await tg.filterWarehouseTo.click();
    });

    When('User click "filterWarehouseFrom"', async () => {
        await tg.filterWarehouseFrom.click();
    });

    When('User click "warehouseJember" into "filterWarehouseTo"', async () => {
        await tg.warehouseJember.scrollIntoView();
        await tg.warehouseJember.click();
    });

    When('User click "warehouseAlohaRTP" into "filterWarehouseTo"', async () => {
        await tg.warehouseAlohaRTP.scrollIntoView();
        await tg.warehouseAlohaRTP.click();
    });

    When('User click "warehouseAlohaRTP" into "filterWarehouseFrom"', async () => {
        await tg.warehouseAlohaRTP.scrollIntoView();
        await tg.warehouseAlohaRTP.click();
    });

    When('User click "filterPeriode"', async () => {
        await tg.filterPeriode.click();
    });

    When('User click "periodeToday" into "filterPeriode"', async () => {
        await tg.periodeToday.click();
    });

    When('User click "searchBarOutgoingTransfer"', async () => {
        await tg.searchBarOutgoingTransfer.click();
    });

    When('User type transferID into "searchBarOutgoingTransfer"', async () => {
        await tg.searchBarOutgoingTransfer.setValue(tsfID);
        await browser.keys(['Enter']);
    });

    When('User click "checkBoxOutgoingTransfer"', async () => {
        await tg.checkBoxOutgoingTransfer.click();
    });

    When('User click "btnReadyChooseVendor"', async () => {
        await tg.btnReadyChooseVendor.click();
    });

    When('User click "btnChangeStatusDeliver"', async () => {
        await tg.btnChangeStatusDeliver.click();
    });

    When('User click "btnChooseVendor"', async () => {
        await tg.btnChooseVendor.click();
    });

    When('User click "selectGroupVendor"', async () => {
        await tg.selectGroupVendor.click();
    });

    When('User type {string} into "selectGroupVendor"', async (nama) => {
        await tg.selectGroupVendor.setValue(nama);
        await browser.keys(['Enter']);
    });

    When('User click "selectDriver"', async () => {
        await tg.selectDriver.click();
    });

    When('User type {string} into "selectDriver"', async (nama) => {
        await tg.selectDriver.setValue(nama);
        await browser.keys(['Enter']);
    });

    When('User click "selectPlateNo"', async () => {
        await tg.selectPlateNo.click();
    });

    When('User type {string} into "selectPlateNo"', async (no) => {
        await tg.selectPlateNo.setValue(no);
        await browser.keys(['Enter']);
    });

    When('User click "btnAssign"', async () => {
        await tg.btnAssign.click();
    });

    When('User click "btnDelivered"', async () => {
        await tg.btnDelivered.click();
    });

    When('User click "menuIncomingGoods" in "navMenuLogistic"', async () => {
        await tg.menuIncomingGoods.click();
        await browser.refresh();
    });

    When('User click "tabTransferStock"', async () => {
        await tg.tabTransferStock.scrollIntoView();
        await tg.tabTransferStock.click();
    });

    When('User click "filterWarehouseFrom2"', async () => {
        await tg.filterWarehouseFrom2.click();
    });

    When('User click "warehouseAlohaRTP" into "filterWarehouseFrom2"', async () => {
        await tg.warehouseAlohaRTP.click();
    })

    When('User click "filterWarehouseTo2"', async () => {
        await tg.filterWarehouseTo2.click();
    });

    When('User click "warehouseJember" into "filterWarehouseTo2"', async () => {
        await tg.warehouseJember.click();
    });

    When('User click "warehouseAlohaRTP" into "filterWarehouseTo2"', async () => {
        await tg.warehouseAlohaRTP.click();
    });

    When('User click "warehouseVirtualConsignment" into "filterWarehouseTo2"', async () => {
        await tg.warehouseVirtualConsignment.click();
    });

    When('User click "searchBarIncomingGoods"', async () => {
        await tg.searchBarIncomingGoods.click();
    });

    When('User type transferID into "searchBarIncomingGoods"', async () => {
        await tg.searchBarIncomingGoods.setValue(tsfID);
        await browser.keys(['Enter']);
    });

    When('User click "btnInputIncoming"', async () => {
        await tg.btnInputIncoming.click();
    });

    When('User click "uploadSuratJalan"', async () => {
        await tg.uploadSuratJalan.click();
    });

    When('User input image into "uploadSuratJalan"', async () => {
        const uploadElement = await tg.suratJalan;

        await uploadElement.waitForExist({ timeout: 5000 });
    
        await browser.execute((el:HTMLElement) => {
            el.style.display = 'block';
        }, uploadElement);
        const filePath = path.resolve('../griya-super/Images/16Photo0094_1.jpg');
        const uploadFile = await browser.uploadFile(filePath)
    
        await uploadElement.setValue(uploadFile);
        await browser.keys(['Enter'])
    });

    When('User click "inputQtyIncoming"', async () => {
        await tg.inputQtyIncoming.click();
    });

    When('User type {string} into "inputQtyIncoming"', async (qty) => {
        await tg.inputQtyIncoming.setValue(qty);
    });

    When('User click "btnSubmitIncoming"', async () => {
        await tg.btnSubmitIncoming.click();
    });

    When('User get "qtyIncoming"', async () => {
        qtyIncoming = await tg.qtyIncoming.getText();
        qtyIncomingInt = parseInt(qtyIncoming);
        console.log('Quantity Incoming:', qtyIncoming);
    });

    export { qtyIncomingInt };

    When('User get "qtyStokBlmRilisAfter"', async () => {
        qtyAfter = await tg.qtyStokBlmRilisAfter.getText();
        qtyAfterInt = parseInt(qtyAfter);
        console.log('Stok akhir:', qtyAfter);
    });

    export { qtyAfterInt };

    When('the incoming product should be added to qty unreleased', async () => {
        calculateQty = qtyAfterInt - qtyBeforeInt;
        if (calculateQty === qtyIncomingInt) {
            console.log('The quantities match:', calculateQty);
        } else {
            console.log('The quantities do not match. Expected:', qtyIncomingInt, 'but got:', calculateQty);
        }
        
        // You can also include this with the assertion check
        expect(calculateQty).to.equal(qtyIncomingInt, 'Quantities should match');
        await browser.refresh();
    });

    When('User click "InventoryV3" in "navMenuStock"', async () => {
        await tg.InventoryV3.click();
    });
