import deeplinkPage from '../../pageobjects/Engagement/cms/deeplink';
import { Given, When, Then } from '@cucumber/cucumber';
import * as path from 'path';

const dl = deeplinkPage;

When ('User click "menuDeeplink" inside "menuCMSV4"', async () => {
    await dl.menuDeeplink.click();
})

When ('User click "btnBuatDeeplink" inside "menuPages"', async () => {
    await dl.btnBuatDeeplink.click();
})

When ('User input {string} into "inputNamaDeeplink"', async(deepLink) => {
    await dl.inputNamaDeeplink.setValue(deepLink);
})

When ('User input {string} into "inputLinkDeeplink"', async(link) => {
    await dl.inputLinkDeeplink.setValue(link);
})

When ('User click "btnSimpanDeeplink"', async () => {
    await dl.btnSimpanDeeplink.click();
})

When ('User able to see alert', async () => {
    await dl.alertEmpty.isDisplayed();
})