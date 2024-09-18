import {Given, When, Then } from '@wdio/cucumber-framework';
import missionPage from '../../pageobjects/Engagement/missionPage';

const MissionPage = missionPage;

When('I click missionMenuV4', async () => {
    await MissionPage.missionMenuV4.scrollIntoView();
    await MissionPage.missionMenuV4.waitForClickable();
    await MissionPage.missionMenuV4.click();
    await browser.pause(3000);
});

When('I click misiRegulerSetionV4', async () => {
    await MissionPage.misiRegulerSetionV4.scrollIntoView();
    await MissionPage.misiRegulerSetionV4.waitForClickable();
    await MissionPage.misiRegulerSetionV4.click();
    await browser.pause(5000);
});

Then('I should verify misiRegulerPageV4', async() => {
    await expect(MissionPage.misiRegulerPageV4).toBeExisting();  // Cek keberadaan elemen
    const title = await MissionPage.misiRegulerPageV4.getText();  // Ambil teks dari elemen
    await browser.pause(10000);
    console.log(title);
});

Given ('I click buttonBuatMisiV4', async() => {
    await MissionPage.buttonBuatMisiV4.waitForClickable();
    await MissionPage.buttonBuatMisiV4.click();
    await browser.pause(2000);
})

// Detail Misi Section 1

When('I input {string} into "fieldInputNamaMisiV4"', async (namaMission) => {
    await MissionPage.fieldInputNamaMisiV4.waitForDisplayed();
    await MissionPage.fieldInputNamaMisiV4.setValue(namaMission);
});

Then('I should verify "radioButtonUser" in "userCustomer"', async() => {
    await expect(MissionPage.radioButtonUser).toBeExisting();  // Cek keberadaan elemen
    const title = await MissionPage.radioButtonUser.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});

When('I click "tipeUser" in "userRegulerMissionV4"', async () => {
    await MissionPage.userRegulerMissionV4.scrollIntoView();
    await MissionPage.userRegulerMissionV4.waitForClickable();
    await MissionPage.userRegulerMissionV4.click();
    await browser.pause(3000);
});

When('I click fieldAreaMissionV4', async () => {
    await MissionPage.fieldAreaMissionV4.scrollIntoView();
    await MissionPage.fieldAreaMissionV4.waitForClickable();
    await MissionPage.fieldAreaMissionV4.click();
    await browser.pause(3000);
});

When('I click "pilihArea" in "areaRegulerMissionV4"', async () => {
    await MissionPage.areaRegulerMissionV4.scrollIntoView();
    await MissionPage.areaRegulerMissionV4.waitForClickable();
    await MissionPage.areaRegulerMissionV4.click();
    await browser.pause(3000);
});

When('I click feildTipeTergetMissionV4', async () => {
    await MissionPage.feildTipeTergetMissionV4.scrollIntoView();
    await MissionPage.feildTipeTergetMissionV4.waitForClickable();
    await MissionPage.feildTipeTergetMissionV4.click();
    await browser.pause(3000);
});

When('I click "pilihTarget" in "tipeTargetRegulerMissionV4"', async () => {
    await MissionPage.tipeTargetRegulerMissionV4.scrollIntoView();
    await MissionPage.tipeTargetRegulerMissionV4.waitForClickable();
    await MissionPage.tipeTargetRegulerMissionV4.click();
    await browser.pause(3000);
});

When('I click "fieldSyaratDanKetentuan" in "syaratDanKetentuanMissionV4"', async () => {
    await MissionPage.syaratDanKetentuanMissionV4.scrollIntoView();
    await MissionPage.syaratDanKetentuanMissionV4.waitForClickable();
    await MissionPage.syaratDanKetentuanMissionV4.click();
    await browser.pause(3000);
});

When('I input {string} into "fieldSyaratDanKetentuan" in "syaratDanKetentuanMissionV4"', async (syaratDanKetentuan) => {
    await MissionPage.syaratDanKetentuanMissionV4.waitForDisplayed();
    await MissionPage.syaratDanKetentuanMissionV4.setValue(syaratDanKetentuan);
});

// Detail Misi Section 2

When('I click "fieldPeriodeMisi" inside "periodeMisiRegulerV4"', async () => {
    await MissionPage.fieldPeriodeMisi.scrollIntoView();
    await MissionPage.fieldPeriodeMisi.waitForClickable();
    await MissionPage.fieldPeriodeMisi.click();
    await browser.pause(3000);
});

When('I click "startDate" into "periodeMisiRegulerV4"', async () => {
    await MissionPage.startDate.waitForClickable();
    await MissionPage.startDate.click();
    await browser.pause(3000);
});

When('I click "endDate" into "periodeMisiRegulerV4"', async () => {
    await MissionPage.endDate.waitForClickable();
    await MissionPage.endDate.click();
    await browser.pause(3000);
});

Then('I should verify kedaluwarsaFixed', async() => {
    await expect(MissionPage.kedaluwarsaFixed).toBeExisting();  // Cek keberadaan elemen
    const title = await MissionPage.kedaluwarsaFixed.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});

// Detail Misi Section 3

When('I click "selectProduct" in "tipeProdukMissionV4"', async () => {
    await MissionPage.selectProduct.scrollIntoView();
    await MissionPage.selectProduct.waitForClickable();
    await MissionPage.selectProduct.click();
    await browser.pause(3000);
});

When('I click "allProduct" in "tipeProdukMissionV4"', async () => {
    await MissionPage.allProduct.scrollIntoView();
    await MissionPage.allProduct.waitForClickable();
    await MissionPage.allProduct.click();
    await browser.pause(3000);
});

When('I click "flashSale" in "filterProdukMissionV4"', async () => {
    await MissionPage.flashSale.scrollIntoView();
    await MissionPage.flashSale.waitForClickable();
    await MissionPage.flashSale.click();
    await browser.pause(3000);
});

When('I click "Bundling" in "filterProdukMissionV4"', async () => {
    await MissionPage.Bundling.scrollIntoView();
    await MissionPage.Bundling.waitForClickable();
    await MissionPage.Bundling.click();
    await browser.pause(3000);
});

// Detail Misi Section 4

When('I click "fieldInputTarget" in "targetRewardMissionV4"', async () => {
    await MissionPage.fieldInputTarget.scrollIntoView();
    await MissionPage.fieldInputTarget.waitForClickable();
    await MissionPage.fieldInputTarget.click();
    await browser.pause(3000);
});

When('I input {string} into "fieldInputTarget"', async (target) => {
    await MissionPage.fieldInputTarget.waitForDisplayed();
    await MissionPage.fieldInputTarget.setValue(target);
});

When('I click "selectReward" in "targetRewardMissionV4"', async () => {
    await MissionPage.selectReward.scrollIntoView();
    await MissionPage.selectReward.waitForClickable();
    await MissionPage.selectReward.click();
    await browser.pause(3000);
});

When('I click "rewardKoin" in "targetRewardMissionV4"', async () => {
    await MissionPage.rewardKoin.scrollIntoView();
    await MissionPage.rewardKoin.waitForClickable();
    await MissionPage.rewardKoin.click();
    await browser.pause(3000);
});

When('I click "fieldInputReward" in "targetRewardMissionV4"', async () => {
    await MissionPage.fieldInputReward.scrollIntoView();
    await MissionPage.fieldInputReward.waitForClickable();
    await MissionPage.fieldInputReward.click();
    await browser.pause(3000);
});

When('I input {string} into "fieldInputReward"', async (reward) => {
    await MissionPage.fieldInputReward.waitForDisplayed();
    await MissionPage.fieldInputReward.setValue(reward);
});

When('I click "toggleSwitchLeaderBoard" in "targetRewardMissionV4"', async () => {
    await MissionPage.toggleSwitchLeaderBoard.scrollIntoView();
    await MissionPage.toggleSwitchLeaderBoard.waitForClickable();
    await MissionPage.toggleSwitchLeaderBoard.click();
    await browser.pause(3000);
});

When('I click "fieldPencapaianMinimal" in "targetRewardMissionV4"', async () => {
    await MissionPage.fieldPencapaianMinimal.scrollIntoView();
    await MissionPage.fieldPencapaianMinimal.waitForClickable();
    await MissionPage.fieldPencapaianMinimal.click();
    await browser.pause(3000);
});

When('I input {string}', async (pencapaianMinimal) => {
    await MissionPage.fieldPencapaianMinimal.waitForDisplayed();
    await MissionPage.fieldPencapaianMinimal.waitForClickable();
    await MissionPage.fieldPencapaianMinimal.setValue(pencapaianMinimal);
});

When('I click "fieldBatasPemenang" in "targetRewardMissionV4"', async () => {
    await MissionPage.fieldBatasPemenang.scrollIntoView();
    await MissionPage.fieldBatasPemenang.waitForClickable();
    await MissionPage.fieldBatasPemenang.waitForDisplayed();
    await MissionPage.fieldBatasPemenang.click();
    await browser.pause(3000);
});

When('I input "batasPemenang" in "targetRewardMissionV4"', async () => {
    await MissionPage.fieldBatasPemenang.waitForDisplayed();
    await MissionPage.fieldBatasPemenang.waitForClickable();
    await MissionPage.fieldBatasPemenang.setValue(3);
});

When('I click "buttonBuatMisi" in "buatMisiButtonRegulerV4"', async () => {
    await MissionPage.buttonBuatMisi.scrollIntoView();
    await MissionPage.buttonBuatMisi.waitForClickable();
    await MissionPage.buttonBuatMisi.click();
    await browser.pause(3000);
});

Then('I can to see "Data berhasil disimpan" message verification', async() => {
    await browser.pause(3000);
});