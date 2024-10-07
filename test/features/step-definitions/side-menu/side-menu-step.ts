import { When } from '@cucumber/cucumber';
import sideMenuBarPage from '../../pageobjects/side-menu/side-menu-page';
import produkPage from '../../pageobjects/procurement/produkPage';

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

When ('User click produk menu in Product page', async() => {
    await sideMenuBarPage.menuProduk.click();
})

When('User click menuInventory in side menu page', async () => {
    await browser.waitUntil(async () => {
            await sideMenuBarPage.menuInventory.scrollIntoView();
            return sideMenuBarPage.menuInventory.isClickable();
        },
        {
            timeout: 17000, // Wait for up to 17 seconds
            timeoutMsg: 'menuInventory was not clickable after 17s'
        }
    );
    await sideMenuBarPage.menuInventory.click();
});

When ('User click navMenuStock in side menu page', async() => {
    await sideMenuBarPage.navMenuStock.click();
    await browser.pause(5000);
})