import popUpBannerPage from '../../pageobjects/Engagement/cms/popUpBanner';
import { Given, When } from '@cucumber/cucumber';
// import * as path from 'path';

const popup = popUpBannerPage;


When ('User click "menuCMSV4" inside "navMenuMarketing"', async() => {
    await popup.menuCMSV4.scrollIntoView();
    await popup.menuCMSV4.click();
})

When ('User click "menuPopUpBanner" inside "menuCMSV4"', async() => {
    await popup.menuPopUpBanner.click();
})

Given ('User click "btnBuat" inside "menuPopUpBanner"', async() => {
    await popup.btnBuat.click();
})

When ('User click "inputNama"', async() => {
    await popup.inputNama.click();
})

When ('User input {string} into "fieldNama"', async(namaBanner) => {
    await popup.inputNama.setValue(namaBanner);
})

When ('User click "pickSumber"', async() => {
    await popup.pickSumber.click();
})

When ('User click "pickSumberAplikasi" inside "pickSumber"', async() => {
    await popup.pickSumberAplikasi.click();
})

When ('User click "pickSlot"', async() => {
    await popup.pickSlot.click();
})

When ('User click "pickSlotPopup" inside "pickSlot"', async() => {
    await popup.pickSlotPopup.click();
})

When ('User click "startDate"', async() => {
    await popup.startDate.click();
})

When ('User click "selectStartDate" inside "startDate"', async() => {
    await popup.selectStartDate.click();
})

When ('User wait for 1 seconds', async() => {
    await browser.pause(1000);
})

When ('User click "startTime"', async() => {
    await popup.startTime.click();
})

When ('User click "selectStartTime" inside "startTime"', async() => {
    await popup.selectStartTime.click();
})

When ('User click "endDate"', async() => {
    await popup.endDate.click();
})

When ('User click "selectEndDate" inside "endDate"', async() => {
    await popup.selectEndDate.click();
})

When ('User click "endTime"', async() => {
    await popup.endTime.click();
})

When ('User click "selectEndTime" inside "endTime"', async() => {
    await popup.selectEndTime.click();
})

When ('User input {string} into "contentTextBox"', async(contentTxt) => {
    await popup.contentTextBox.setValue(contentTxt);
})

When ('User click "pickCustomerType"', async() => {
    await popup.pickCustomerType.click();
})

When ('User click "pickSemuaCustomer" inside "pickCustomerType"', async() => {
    await popup.pickSemuaCustomer.click();
})

When ('User click "pickGudang"', async() => {
    await popup.pickGudang.click();
})

When ('User click "pickSemuaGudang" inside "pickGudang"', async() => {
    await popup.pickSemuaGudang.click();
})

When ('User click "pickArea"', async() => {
    await popup.pickArea.click();
})

When ('User click "pickSemuaArea" inside "pickArea"', async() => {
    await popup.pickSemuaArea.click();
})

When ('User click "pickBannerImage"', async() => {
    await popup.pickBannerImage.click();
})

// When ('User select image inside "pickBannerImage"', async() => {
//     const input = browser.$('input[type="file"]');
//     const filePath = browser.uploadFile(path.join(__dirname, '../engagement/src/images.jpeg'));

//     browser.url('/');
//     await input.setValue(await filePath);
//     // const fileInput = await browser.$('input[type="file"]');
//     // await fileInput.setValue(filePath);
// })


