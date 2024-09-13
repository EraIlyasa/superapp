import { When, Then } from '@wdio/cucumber-framework';
import dailyCheckInPage from '../../pageobjects/Engagement/dailyCheckInPage';

const DailyCheckInPage = dailyCheckInPage;

When('I click marketing menus', async () => {
    await DailyCheckInPage.marketingMenus.scrollIntoView();
    await DailyCheckInPage.marketingMenus.waitForClickable();
    await DailyCheckInPage.marketingMenus.click();
    await browser.pause(3000);
});

When('I click DailyCheck In menu', async () => {
    await DailyCheckInPage.dailyCheckInMenu.scrollIntoView();
    await DailyCheckInPage.dailyCheckInMenu.waitForClickable();
    await DailyCheckInPage.dailyCheckInMenu.click();
    await browser.pause(3000);
});

When('I click Rewards menu', async () => {
    await DailyCheckInPage.rewardsMenu.scrollIntoView();
    await DailyCheckInPage.rewardsMenu.waitForClickable();
    await DailyCheckInPage.rewardsMenu.click();
    await browser.pause(3000);
});

Then('I should verify the page title is DailyCheckInRewards', async() => {
    await expect(DailyCheckInPage.DailyCheckInRewards).toBeExisting();  // Cek keberadaan elemen
    const title = await DailyCheckInPage.DailyCheckInRewards.getText();  // Ambil teks dari elemen
    await browser.pause(10000);
    console.log(title);
});

Then('I should verify subtitleRewards', async() => {
    await expect(DailyCheckInPage.subtitleRewards).toBeExisting();
    const title = await DailyCheckInPage.subtitleRewards.getText();
    await browser.pause(3000);
    console.log(title);
});

Then('I should verify totalRewards', async() => {
    await expect(DailyCheckInPage.totalRewards).toBeExisting();
    const title = await DailyCheckInPage.totalRewards.getText();
    await browser.pause(3000);
    console.log(title);
});

Then('I should verify totalCustomsRewards', async() => {
    await expect(DailyCheckInPage.totalCustomsRewards).toBeExisting();
    const title = await DailyCheckInPage.totalCustomsRewards.getText();
    await browser.pause(3000);
    console.log(title);
});

Then('I should verify listTableGroup', async() => {
    await expect(DailyCheckInPage.listTableGroup).toBeExisting();
    const title = await DailyCheckInPage.listTableGroup.getText();
    await browser.pause(3000);
    console.log(title);
});

When('I click record per page', async () => {
    await DailyCheckInPage.recordPerPage.scrollIntoView();
    await DailyCheckInPage.recordPerPage.waitForClickable();
    await DailyCheckInPage.recordPerPage.click();
    await browser.pause(3000);
});

When('I click content 20 item', async () => {
    await DailyCheckInPage.contentItem.waitForClickable();
    await DailyCheckInPage.contentItem.click();
    await browser.pause(3000);
});

When('I click last page', async () => {
    await DailyCheckInPage.lastPage.scrollIntoView();
    await DailyCheckInPage.lastPage.waitForClickable();
    await DailyCheckInPage.lastPage.click();
    await browser.pause(3000);
});

When('I click edit rewards', async () => {
    await DailyCheckInPage.editRewards.waitForClickable();
    await DailyCheckInPage.editRewards.click();
    await browser.pause(3000);
});

Then('I should verify edit rewards title', async() => {
    await expect(DailyCheckInPage.editRewardsTitle).toBeExisting();
    const title = await DailyCheckInPage.editRewardsTitle.getText();
    await browser.pause(3000);
    console.log(title);
});

When('I click backButton', async () => {
    await DailyCheckInPage.backButton.waitForClickable();
    await DailyCheckInPage.backButton.click();
    await browser.pause(3000);
});

When('I click Dashboard', async () => {
    await DailyCheckInPage.Dashboard.waitForClickable();
    await DailyCheckInPage.Dashboard.click();
    await browser.refresh();
    await browser.pause(3000);
});

When('I click marketingMenuV4', async () => {
    await DailyCheckInPage.marketingMenuV4.scrollIntoView();
    await DailyCheckInPage.marketingMenuV4.waitForClickable();
    await DailyCheckInPage.marketingMenuV4.click();
    await browser.pause(3000);
});

When('I click dailyCheckInV4Menu', async () => {
    await DailyCheckInPage.dailyCheckInV4Menu.scrollIntoView();
    // await DailyCheckInPage.dailyCheckInV4Menu.waitForClickable();
    await DailyCheckInPage.dailyCheckInV4Menu.click();
    await browser.pause(3000);
});

When('I click rewardsV4Menu', async () => {
    await DailyCheckInPage.rewardsV4Menu.scrollIntoView();
    await DailyCheckInPage.rewardsV4Menu.waitForClickable();
    await DailyCheckInPage.rewardsV4Menu.click();
    await browser.pause(3000);
});

Then('I should verify breadcrumbRewardsV4', async() => {
    await expect(DailyCheckInPage.breadcrumbRewardsV4).toBeExisting();
    const title = await DailyCheckInPage.breadcrumbRewardsV4.getText();
    await browser.pause(3000);
    console.log(title);
});

Then('I should verify titleDailyCheckInRewardsV4', async() => {
    await expect(DailyCheckInPage.titleDailyCheckInRewardsV4).toBeExisting();
    const title = await DailyCheckInPage.titleDailyCheckInRewardsV4.getText();
    await browser.pause(3000);
    console.log(title);
});

Then('I should verify subtitleDailyCheckInRewardsV4', async() => {
    await expect(DailyCheckInPage.subtitleDailyCheckInRewardsV4).toBeExisting();
    const title = await DailyCheckInPage.subtitleDailyCheckInRewardsV4.getText();
    await browser.pause(3000);
    console.log(title);
});

Then('I should verify listTableRewardsV4', async() => {
    await expect(DailyCheckInPage.listTableRewardsV4).toBeExisting();
    const title = await DailyCheckInPage.listTableRewardsV4.getText();
    await DailyCheckInPage.listTableRewardsV4.scrollIntoView();
    await browser.pause(3000);
    console.log(title);
});

When('I click editRewardsV4', async () => {
    await DailyCheckInPage.editRewardsV4.waitForClickable();
    await DailyCheckInPage.editRewardsV4.click();
    await browser.pause(3000);
});


Then('I should verify titleEditRewardsV4', async() => {
    await expect(DailyCheckInPage.titleEditRewardsV4).toBeExisting();
    const title = await DailyCheckInPage.titleEditRewardsV4.getText();
    await browser.pause(3000);
    console.log(title);
});

Then('I should verify dayRewardsTableV4', async() => {
    await expect(DailyCheckInPage.dayRewardsTableV4).toBeExisting();
    const title = await DailyCheckInPage.dayRewardsTableV4.getText();
    await browser.pause(3000);
    console.log(title);
});

Then('I should verify rewardTypeTableV4', async() => {
    await expect(DailyCheckInPage.rewardTypeTableV4).toBeExisting();
    const title = await DailyCheckInPage.rewardTypeTableV4.getText();
    await browser.pause(3000);
    console.log(title);
});

Then('I should verify rewardValueTableV4', async() => {
    await expect(DailyCheckInPage.rewardValueTableV4).toBeExisting();
    const title = await DailyCheckInPage.rewardValueTableV4.getText();
    await browser.pause(3000);
    console.log(title);
});

When('I click downListRewardsV4', async () => {
    await DailyCheckInPage.downListRewardsV4.waitForClickable();
    await DailyCheckInPage.downListRewardsV4.click();
    await browser.pause(3000);
});

When('I click rewardsTypeIsPoinV4', async () => {
    await DailyCheckInPage.rewardsTypeIsPoinV4.waitForClickable();
    await DailyCheckInPage.rewardsTypeIsPoinV4.click();
    await browser.pause(3000);
});

When('I click clearIconButtonRewardsV4', async () => {
    await DailyCheckInPage.clearIconButtonRewardsV4.click();
    await expect(DailyCheckInPage.clearIconButtonRewardsV4).toBeExisting();
    await DailyCheckInPage.clearIconButtonRewardsV4.waitForDisplayed();
    await DailyCheckInPage.clearIconButtonRewardsV4.waitForClickable();
    await browser.saveScreenshot('error_clearIconButtonRewardsV4.png');
    await DailyCheckInPage.clearIconButtonRewardsV4.click();
    await DailyCheckInPage.clearIconButtonRewardsV4.clearValue();
    await browser.pause(3000);  
});

When('I input jumlahPoinRewardsV4', async () => {
    await DailyCheckInPage.jumlahPoinRewardsV4.waitForClickable();
    await DailyCheckInPage.jumlahPoinRewardsV4.click();
    await DailyCheckInPage.jumlahPoinRewardsV4.setValue('25'); 
})

Then('I should verify iconRewardsTypeV4', async() => {
    await expect(DailyCheckInPage.iconRewardsTypeV4).toBeExisting();
    const title = await DailyCheckInPage.iconRewardsTypeV4.getText();
    await browser.pause(3000);
    console.log(title);
});

When('I click buttonSimpanRewardsV4', async () => {
    await DailyCheckInPage.buttonSimpanRewardsV4.waitForClickable();
    await DailyCheckInPage.buttonSimpanRewardsV4.click();
    await browser.pause(3000);
});