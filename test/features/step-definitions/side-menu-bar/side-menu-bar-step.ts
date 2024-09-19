import { Given, When, Then } from '@cucumber/cucumber';
import sideMenuBarPage from '../../../src/pages/side-menu-bar/side-menu-bar-page.ts';

When('I click order', async() => {
    await sideMenuBarPage.order.scrollIntoView();
    await sideMenuBarPage.order.click();
        });
    
When('I click penjualan', async() => {
    await sideMenuBarPage.penjualan.scrollIntoView();
    await sideMenuBarPage.penjualan.click();
        });

When('I click logistic', async() => {
    await sideMenuBarPage.logistic.scrollIntoView();
    await sideMenuBarPage.logistic.click();
    await browser.pause(3000);
        });

When('I click new outgoing goods', async() => {
    await sideMenuBarPage.newOutgoingGoods.scrollIntoView();
    await sideMenuBarPage.newOutgoingGoods.click();
    await browser.pause(3000);
        });

When('I click outgoing goods v3', async() => {
    await browser.url('https://v3-web-app-micro.staging.superapp.co.id/logistic/new-outgoing-goods')
    // await sideMenuBarPage.outgoingGoodsV3.scrollIntoView()
    // await sideMenuBarPage.outgoingGoodsV3.click()
});

