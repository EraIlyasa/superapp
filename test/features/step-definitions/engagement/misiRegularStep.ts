import misiRegularPage from '../../pageobjects/Engagement/misiRegularPage';
import { Given, When, Then } from '@cucumber/cucumber';


const misi = misiRegularPage;

When ('User click "navMenuMarketing" in global page', async() => {
    await misi.navMenuMarketing.scrollIntoView();
    await misi.navMenuMarketing.click();
})


When ('User click "menuMissionV4" inside "navMenuMarketing"', async() => {
    await misi.menuMissionV4.scrollIntoView();
    await misi.menuMissionV4.click();
})


When ('User click "menuMisiRegular" inside "menuMissionV4"', async()=> {
    await misi.menuMisiRegular.click();
})


When ('User wait for 5 seconds', async() => {
    await browser.pause(5000);
})


Given ('User click "btnBuatMisiPage" in "menuMissionRegular"', async() => {
    await misi.btnBuatMisiPage.click();
})


When ('User wait for 3 seconds', async() => {
    await browser.pause(3000);
})


When ('User input {string} into "fieldInputNamaMisi"', async(namaMission) => {
    await misi.fieldInputNamaMisi.setValue(namaMission);
})


When ('User click "fieldPeriodeMisi" inside "menuMissionRegular"', async() => {
    await misi.fieldPeriodeMisi.click();
})


When ('User input "startDate" into "fieldPeriodeMisi"', async() => {
    await misi.fieldInputStarDate.click();
})


When ('User input "endDate" into "fieldPeriodeMisi"', async() => {
    await misi.fieldInputEndDate.click();
})


When ('User click "radioBtnFixed" in "menuMissionV4"', async() => {
    await misi.radioBtnFixed.click();
})


 When ('User input "durasi" in "fieldInputDurasi" in "menuMissionV4"', async() => {
    await misi.fieldInputDurasi.setValue('2');
 })

 
When ('User click "fieldTipeUser" in "menuMissionV4"', async() => {
    await misi.fieldTipeUser.click();
})


When ('User click "optTipeUser0" in "fieldTipeUser"', async() => {
    await misi.optTipeUser0.click();
})


When ('User click "fieldArea" in "menuMissionV4"', async() => {
    await misi.fieldArea.click();
})


When ('User click "optArea1" in "fieldArea"', async() => {
    await misi.optArea1.click();
})


When ('User scrolldown to "fieldTipeTarget" in "menuMissionV4"', async() => {
    await misi.fieldTipeTarget.scrollIntoView();
})


When ('User click "fieldTipeTarget" in "menuMissionV4"', async() => {
    await misi.fieldTipeTarget.click();
})


When ('User click "optTipeTarget0" in "fieldTipeTarget"', async() => {
    await misi.optTipeTarget0.click();
})


When ('User click "fieldSyaratDanKetentuan" in "menuMissionV4"', async() => {
    await misi.fieldSyaratDanKetentuan.scrollIntoView();
    await misi.fieldSyaratDanKetentuan.click();
})


When ('User input {string} into "fieldSyaratDanKetentuan" in "menuMissionV4"', async(syaratDanKetentuan) => {
    await misi.fieldSyaratDanKetentuan.setValue(syaratDanKetentuan);
})


When ('User click "fieldTipeProduk" in "menuMissionV4"', async() => {
    await misi.fieldTipeProduk.click();
})


When ('User click "optTipeProduk0" in "menuMissionV4"', async() => {
    await misi.optTipeProduk0.click();
})


When ('User click "radioBtnFixed"', async() => {
    await misi.radioBtnFixed.click();
})


When ('User click "fieldInputTarget" in "menuMissionV4"', async() => {
    await misi.fieldInputTarget.click();
})


When ('User set value {string} into "fieldInputTarget"', async(target) => {
    await misi.fieldInputTarget.setValue(target)
})


When ('User click "fieldInputReward" in "menuMissionV4"', async() => {
    await misi.fieldInputReward.click();
})


When ('User set value {string} into "fieldInputReward"', async(reward) => {
    await misi.fieldInputReward.setValue(reward)
})


When ('User click "toggleSwitchLeaderBoard" in "menuMissionV4"', async() => {
    await misi.toggleSwitchLeaderBoard.click();
})


When ('User click "fieldPencapaianMinimal" in "menuMissionV4"', async() => {
    await misi.fieldPencapaianMinimal.click();
})


When ('User set value {string}', async(pencapaianMinimal) => {
    await misi.fieldPencapaianMinimal.setValue(pencapaianMinimal)
})



When ('User click "fieldBatasPemenang" in "menuMissionV4"', async() => {
    await misi.fieldBatasPemenang.click();
})


When ('User input batas pemenang in "menuMissionV4"', async() => {
    await misi.fieldBatasPemenang.setValue('2')
})


When ('User click "btnBuatMisi" in "menuMissionV4"', async() => {
    await misi.btnBuatMisi.click();
})


Then ('User able to see "Data berhasil disimpan" message verification', async() => {
    await browser.pause(10000);
})
    



