import voucherPage from '../../pageobjects/Engagement/voucherPage.ts';
import e2eTransferGoods from '../../pageobjects/e2e/e2eTransferGoodsPage.ts';
import { Given, When, Then } from '@cucumber/cucumber';
import * as path from 'path';
import fs from 'fs';
const voucher = voucherPage;
const tg = e2eTransferGoods;
let csvData: string;

When ('User click "menuVoucher" inside "navMenuMarketing"', async () => {
    await voucher.menuVoucher.click();
});
When ('User click "btnAddVoucher"', async () => {
    await voucher.btnAddVoucher.click();
});
When ('User click "btnCreateVoucher"', async () => {
    await voucher.btnCreateVoucher.click();
});
When ('User click "inputVoucherBannerImage"', async () => {
    await voucher.inputVoucherBannerImage.click();
});
When ('User select image inside "inputVoucherBannerImage"', async () => {
    const uploadElement = await voucher.btnUploadVoucherBannerImage;
    await uploadElement.waitForExist({ timeout: 5000 });
    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('../Images/Product Banner Design.jpg');
    const uploadFile = await browser.uploadFile(filePath)
    await uploadElement.setValue(uploadFile);
    // await browser.keys(['Enter'])
});
When ('User click "selectVoucherDiscount"', async () => {
    await voucher.selectVoucherDiscount.click();
});
When ('User click "inputVoucherName"', async () => {
    await voucher.inputVoucherName.click();
});
When ('User type {string} into "inputVoucherName"', async (nama) => {
    await voucher.inputVoucherName.setValue(nama);
});
When ('User click "platformSalesForce"', async () => {
    await voucher.platformSalesForce.click();
});
When ('User click "platformDashboard"', async () => {
    await voucher.platformDashboard.click();
});
When ('User click "platformApps"', async () => {
    await voucher.platformApps.click();
});
When ('User click "inputDiscountNominal"', async () => {
    await voucher.inputDiscountNominal.click();
});
When ('User type {string} into "inputDiscountNominal"', async (nominal) => {
    await voucher.inputDiscountNominal.setValue(nominal);
});
When ('User click "inputMinimumOrder"', async () => {
    await voucher.inputMinimumOrder.click();
});
When ('User type {string} into "inputMinimumOrder"', async (order) => {
    await voucher.inputMinimumOrder.setValue(order);
});
When ('User click "selectProductCondition"', async () => {
    await voucher.selectProductCondition.scrollIntoView();
    await voucher.selectProductCondition.click();
});
When ('User click "optProductConditionAllProduct"', async () => {
    await voucher.optProductConditionAllProduct.click();
});
When ('User click "optProductConditionAllProductExcept"', async () => {
    await voucher.optProductConditionAllProductExcept.click();
});
When ('User click "optProductConditionAllProductExceptSpecial"', async () => {
    await voucher.optProductConditionAllProductExceptSpecial.click();
});
When ('User click "optProductConditionAllProductExceptCigarette"', async () => {
    await voucher.optProductConditionAllProductExceptCigarette.click();
});
When('User click "optProductConditionAnd"', async () => {
    await voucher.optProductConditionAnd.click();
});
When('User click "optProductConditionOr"', async () => {
    await voucher.optProductConditionOr.click();
});
When('User click "optProductConditionAndSpecial"', async () => {
    await voucher.optProductConditionAndSpecial.click();
});
When ('User click "optProductConditionOrSpecial"', async () => {
    await voucher.optProductConditionOrSpecial.click();
});
When ('User click "btnAddProductVoucher"', async () => {
    await voucher.btnAddProductVoucher.click();
});
When ('User click "searchProductVoucher"', async () => {
    await voucher.searchProductVoucher.click();
});
When ('User type {string} into "searchProductVoucher"', async (nama) => {
    await voucher.searchProductVoucher.setValue(nama);
    await browser.keys('Enter');
});
When ('User click "clearSearchProductVoucher"', async () => {
    await voucher.clearSearchProductVoucher.click();
});
When ('User click "optBotol"', async () => {
    await voucher.optBotol.click();
});
When ('User click "btnAddProductModal"', async () => {
    if (await voucher.btnAddProductModal.isDisplayed()) {
    await voucher.btnAddProductModal.click();
    } else if (await tg.btnAddProductModal.isDisplayed()) {
        await tg.btnAddProductModal.click();
    };
});
When ('User click "selectVoucherStartDate"', async () => {
    await voucher.selectVoucherStartDate.click();
});
When ('User click "voucherAlwaysOn"', async () => {
    await voucher.voucherAlwaysOn.click();
});
When ('User click "selectVoucherStartDateToday" in "selectVoucherStartDate"', async () => {
    await voucher.selectVoucherStartDateToday.click();
});
When ('User click "selectVoucherEndDate"', async () => {
    // await voucher.selectVoucherEndDate.scrollIntoView();
    await voucher.selectVoucherEndDate.click();
});
When ('User click "selectVoucherEndDateSpecific" in "selectVoucherEndDate"', async () => {
    await voucher.selectVoucherEndDateSpecific.click();
});
When ('User click "selectUserType"', async () => {
    await voucher.selectUserType.scrollIntoView();
    await voucher.selectUserType.click();
});
When ('User click "optTypeAllUser" in "selectUserType"', async () => {
    await voucher.optTypeAllUser.click();
});
When ('User click "inputVoucherQty"', async () => {
    await voucher.inputVoucherQty.click();
});
When ('User type {string} into "inputVoucherQty"', async (qty) => {
    await voucher.inputVoucherQty.setValue(qty);
});
When ('User click "selectWarehouse"', async () => {
    await voucher.selectWarehouse.scrollIntoView();
    await voucher.selectWarehouse.click();
});
When ('User click "optWarehouse"', async () => {
    await voucher.optWarehouse.click();
});
When ('User type {string} into "selectWarehouse"', async (warehouse) => {
    await voucher.selectWarehouse.setValue(warehouse);
    await browser.keys(['Enter']);
});
When ('User click "chooseArea"', async () => {
    await voucher.selectWarehouse.scrollIntoView();
    await voucher.chooseArea.click();
});
When ('User click "optArea"', async () => {
    await voucher.optWarehouse.click();
});
When ('User type {string} into "chooseArea"', async (area) => {
    await voucher.chooseArea.setValue(area);
    await browser.keys(['Enter']);
});
When ('User click "inputVoucherTitle"', async () => {
    await voucher.inputVoucherTitle.scrollIntoView();
    await voucher.inputVoucherTitle.click();
});
When ('User type {string} into "inputVoucherTitle"', async (title) => {
    await voucher.inputVoucherTitle.setValue(title);
});
When ('User click "inputVoucherDescription"', async () => {
    await voucher.inputVoucherDescription.click();
});
When ('User type {string} into "inputVoucherDescription"', async (description) => {
    await voucher.inputVoucherDescription.setValue(description);
});
When ('User click "tabAboutVoucher"', async () => {
    await voucher.tabAboutVoucher.click();
});
When ('User click "inputAboutVoucher"', async () => {
    await voucher.inputAboutVoucher.click();
});
When ('User type {string} into "inputAboutVoucher"', async (about) => {
    await voucher.inputAboutVoucher.setValue(about);
});
When ('User click "tabTermsAndConditions"', async () => {
    await voucher.tabTermsAndConditions.click();
});
When ('User click "inputTnC"', async () => {
    await voucher.inputTnC.click();
});
When ('User type {string} into "inputTnC"', async (tnc) => {
    await voucher.inputTnC.setValue(tnc);
});
When ('User click "tabHowToUse"', async () => {
    await voucher.tabHowToUse.click();
});
When ('User click "inputHowToUse"', async () => {
    await voucher.inputHowToUse.click();
});
When ('User type {string} into "inputHowToUse"', async (howtouse) => {
    await voucher.inputHowToUse.setValue(howtouse);
});
When ('User click "btnSubmitVoucher"', async () => {
    await voucher.btnSubmitVoucher.click();
});
When ('User select voucher code and add to csv file', async () => {
    const fullText = await voucher.selectVoucherCode.getText();
    const voucherCode = fullText.replace('Code: ', '');
    console.log('Voucher Code:', voucherCode);
    const filePath = path.join('../griya-super/file-csv', 'voucher-code.csv');
    csvData = `${voucherCode}\n`;
    fs.appendFileSync(filePath, csvData);
    console.log(`Voucher code "${voucherCode}" has been added to voucher-code.csv`);
});
When ('User click "btnPublishVoucher"', async () => {
    await voucher.btnPublishVoucher.click();
});
When ('User click "btnConfirmPublishVoucher"', async () => {
    await voucher.btnConfirmPublishVoucher.click();
});
