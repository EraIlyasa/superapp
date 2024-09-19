import { When, Given, Then } from "@cucumber/cucumber";
import rewardPage from "../../pageobjects/Engagement/rewardPage";
const reward = rewardPage;

When ('User click "menuRewardV4"', async() => {
    await browser.waitUntil( async() => {
        await reward.menuRewardV4.scrollIntoView();
        return reward.menuRewardV4.isClickable();
    }, {
        timeout:17000,
        timeoutMsg:'menuRewardV4 is not clickble'
    })
    await reward.menuRewardV4.click();
})


Given('User click "btnBuatRewardNew" in menu reward', async() => {
    await reward.btnBuatRewardNew.click();
}) 


When ('User click "fieldInputNamaReward" in create reward page', async() => {
    await reward.fieldInputNamaReward.click();
})


When ('User input {string} into "fieldInputNamaReward"', async(namaReward) => {
    await reward.fieldInputNamaReward.setValue(namaReward);
})


When ('User click "fieldTipeReward" in create reward page', async() => {
    await reward.fieldTipeReward.click();
}) 


When ('User click "optTipeReward0"', async() => {
    await reward.optTipeReward0.click();
})


When ('User click "optTipeReward1"', async() => {
    await reward.optTipeReward1.click();
}) 



When ('User click "optTipeReward2"', async() => {
    await reward.optTipeReward2.click();
}) 



When ('User click "fieldInputMinimalBelanja" in create reward page', async() => {
    await reward.fieldInputMinimalBelanja.click();
})


When ('User input {string} into "fieldInputMinimalBelanja"', async(minBelanja) => {
    await reward.fieldInputMinimalBelanja.setValue(minBelanja);
})


When ('User click "fieldTipeUser" in create reward page', async() => {
    await reward.fieldTipeUser.click();
})


When ('User click "optTipeUser0"', async() => {
    await reward.optTipeUser0.click();
})


When ('User click "fieldInputIntervalExp" in create reward page', async() => {
    await reward.fieldInputIntervalExp.click();
})


When ('User input {string} into "fieldInputIntervalExp"', async(intervalExp) => {
    await reward.fieldInputIntervalExp.setValue(intervalExp);
})


When ('User click "fieldKondisi" in create reward page', async() => {
    await reward.fieldKondisi.click();
})


When ('User click "optKondisi0"', async() => {
    await reward.optKondisi0.click();
})


When ('User click "fieldGudang" in create reward page', async() => {
    await reward.fieldGudang.click();
    await browser.pause(1000);
})


When ('User click "optGudang"', async() => {
    await reward.optGudang.click();
})


When ('User click "fieldInputKuotaUser" in create reward page', async() => {
    await reward.fieldInputKuotaUser.click();
})


When ('User input {string} into "fieldInputKuotaUser"', async(kuotaUser) => {
    await reward.fieldInputKuotaUser.setValue(kuotaUser);
})


When ('User click "fieldInputStartDate" in create reward page', async() => {
    await reward.fieldInputStartDate.click();
})


When ('User input {string} into "fieldInputStartDate"', async(startDate) => {
    await browser.waitUntil( async() => {
        await reward.fieldGudang.scrollIntoView();
        const isDisplayed = await reward.fieldInputStartDate.isDisplayed();  // Memeriksa apakah elemen terlihat
        return isDisplayed;
        
    }, {
        timeout:10000,
        timeoutMsg:'Field is not displayed'
    })
    await browser.keys(['Control', 'a']);
    await browser.keys(['Delete'])
    await reward.fieldInputStartDate.setValue(startDate);
    await browser.keys(['Enter'])
})


When ('User click "fieldInputEndDate" in create reward page', async() => {
    await reward.fieldInputEndDate.click();
})


When ('User input {string} into "fieldInputEndDate"', async(endtDate) => {
    await browser.waitUntil( async() => {
        const isDisplayed = await reward.fieldInputEndDate.isDisplayed();
        return isDisplayed;
    }, {
        timeout:10000,
        timeoutMsg:'Field is not displayed'
    })
    await browser.keys(['Control', 'a']);
    await browser.keys(['Delete'])
    await reward.fieldInputEndDate.setValue(endtDate);
    await browser.keys(['Enter'])
    
})


When ('User click "btnTambahDariInven" in create reward page', async() => {
    await browser.waitUntil( async() => {
        await reward.btnTambahDariInven.scrollIntoView();
        const isDisplayed = await reward.btnTambahDariInven.isDisplayed()
        return isDisplayed;
    }, {
        timeout:10000,
        timeoutMsg:'Element cannot to scroll'
    })
    await reward.btnTambahDariInven.click(); 
    
})


When ('User click "fieldNamaProduk" in create reward page', async() => {
    await browser.waitUntil( async() => {
        await reward.fieldNamaProduk.scrollIntoView();
        const isDisplayed = await reward.fieldNamaProduk.isDisplayed()
        return isDisplayed;
    }, {
        timeout:10000,
        timeoutMsg:'Element cannot to scroll'
    })
    await reward.fieldNamaProduk.click();
    
})


Given ('User input "optNamaProduk" into "fieldNamaProduk"', async() => {
    await reward.optNamaProduk.click();
})


Then ('User able to see "totalStokInventory" beside fieldUnit', async() => {
    const totalStokInven = await reward.totalStokInventory.getText();
    console.log(await totalStokInven);
})


When ('User click "fieldUnit" in create reward page', async() => {
    await reward.fieldUnit.click();
})


Given ('User input "optUnit" into "fieldUnit"', async() => {
    await reward.optUnit.click();
})


When ('User click "fieldInputKuotaReward" in create reward page', async() => {
    await reward.fieldInputKuotaReward.click();
    await browser.pause(2000);
})


When ('User input "reward" into "fieldInputKuotaReward"', async() => {
    await reward.btnPlus0.click();
    await reward.btnPlus0.click();
    // for (const int of reward) {
    //     await reward.fieldInputKuotaReward.setValue(int);
    //     await browser.pause(50)}
        
})


When ('User click "fieldInputQtyReward" in create reward page', async() => {
    await reward.fieldInputQtyReward.click();
    await browser.pause(2000);
})


When ('User input "reward" into "fieldInputQtyReward"', async() => {
    await reward.btnPlus1.click();
    await reward.btnPlus1.click();
    // for (const int of reward) {
    //     await reward.fieldInputQtyReward.setValue(int);
    //     await browser.pause(50)}
})


When ('User click "actionV" to save the product', async() => {
    await reward.actionV.click();
})


Given ('User click "btnSimpan" to create new reward', async() => {
    await reward.btnSimpan.click();
})


Then ('User able to see success messasge verification pop up modal', async() => {
    await browser.pause(5000);
}) 


When ('User click "fieldArea" in create reward page', async() => {
    await reward.fieldArea.click();
})


When ('User click "optArea0"', async() => {
    await reward.optArea0.click();
})