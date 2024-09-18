class missionPage {
    get missionMenuV4() {
        return $('//span[contains(text(),"Mission V4")]');
    }

    get misiRegulerSetionV4() {
        return $('//*[@class="ant-menu-title-content"]/*[@data-testid="Menu-MisiReguler"]');
    }

    get misiRegulerPageV4() {
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[2]/div/div[1]/div/h1'); 
    }

    // Buat Misi 
    get buttonBuatMisiV4() {
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[2]/div/div[2]/a/button'); 
    }

    // Detail Misi Section 1 
    get fieldInputNamaMisiV4() {
        return $('//*[@placeholder="Masukkan Nama Misi"]'); 
    }

    public get radioButtonUser() {
        return $('//*[@data-testid="mission-id-radio"]/*[1]'); 
    }

    get userRegulerMissionV4() {
        return $('(//*[@title="Semua Customer"])[1]'); 
    }

    get fieldAreaMissionV4() {
        return $('(//*[@class="ant-select-selector"])[3]');
    }

    get areaRegulerMissionV4() {
        return $('//*[@title="All Area"]');
    }

    get feildTipeTergetMissionV4() {
        return $('(//*[@class="ant-select-selector"])[4]');
    }

    get tipeTargetRegulerMissionV4() {
        return $('//*[@title="GMV"]');
    }

    get syaratDanKetentuanMissionV4() {
        return $('//div[@data-placeholder="Tulis syarat dan ketentuan yang berlaku pada misi ini."]');
    }

    // Detail Misi Section 2

    get fieldPeriodeMisi() {
        return $("//div[contains(@class, 'ant-picker-range-separator')]//span[contains(@class, 'RangePicker_separator__BOaei')]");
    }

    get startDate() {
        return $('//*[@title="2024-09-01"]');
    }

    get endDate() {
        return $('//*[@title="2024-10-31"]');
    }

    public get kedaluwarsaFixed() {
        return $('//*[@data-testid="mission-period-id-radio"]/*[1]');
    }

    // Detail Misi Section 3

    get selectProduct() {
        return $('(//*[@class="ant-select-selector"])[6]');
    }

    get allProduct() {
        return $('(//*[@title="All Product"])[1]');
    }

    get flashSale() {
        return $("//label[contains(@class, 'ant-checkbox-wrapper') and .//input[@label='Flash Sale']]");
    }

    get Bundling() {
        return $("//label[contains(@class, 'ant-checkbox-wrapper') and .//input[@label='Bundling']]");
    }

    // Detail Misi Section 4

    get fieldInputTarget() {
        return $("(//input[@placeholder='0'])[1]");
    }

    get selectReward() {
        return $('(//*[@class="ant-select-selector"])[7]');
    }

    get rewardKoin() {
        return $("//div[@aria-selected='true' and .//span[text()='Koin']]");
    }

    get fieldInputReward() {
        return $("(//input[@placeholder='0'])[2]");
    }

    get toggleSwitchLeaderBoard() {
        return $('//*[@class="ant-switch-inner"]');
    }

    get fieldPencapaianMinimal() {
        return $('(//*[@placeholder="0"])[3]');
    }

    get fieldBatasPemenang() {
        return $('//*[@label="Batas Pemenang"]');
    }

    get buttonBuatMisi() {
        return $("//button[span[text()='Buat Misi']]");
    }


    async navigateToMissionPage() {
        await this.missionMenuV4.scrollIntoView();
        await this.missionMenuV4.waitForDisplayed();
        await this.missionMenuV4.click();

        await this.misiRegulerSetionV4.scrollIntoView();
        await this.misiRegulerSetionV4.waitForDisplayed();
        await this.misiRegulerSetionV4.click();
    }

    async createNewMission(namaMission: string) {
        await this.buttonBuatMisiV4.waitForClickable();
        await this.buttonBuatMisiV4.click();

        // Detail Misi Section 1
        await this.fieldInputNamaMisiV4.waitForDisplayed();
        await this.fieldInputNamaMisiV4.setValue(namaMission);

        await this.userRegulerMissionV4.waitForClickable();
        await this.userRegulerMissionV4.waitForDisplayed();
        await this.userRegulerMissionV4.click();

        await this.fieldAreaMissionV4.waitForClickable();
        await this.fieldAreaMissionV4.waitForDisplayed();
        await this.fieldAreaMissionV4.click();

        await this.areaRegulerMissionV4.waitForClickable();
        await this.areaRegulerMissionV4.waitForDisplayed();
        await this.areaRegulerMissionV4.click();

        await this.feildTipeTergetMissionV4.waitForClickable();
        await this.feildTipeTergetMissionV4.waitForDisplayed();
        await this.feildTipeTergetMissionV4.click();

        await this.tipeTargetRegulerMissionV4.waitForClickable();
        await this.tipeTargetRegulerMissionV4.waitForDisplayed();
        await this.tipeTargetRegulerMissionV4.click();

        await this.syaratDanKetentuanMissionV4.waitForClickable();
        await this.syaratDanKetentuanMissionV4.waitForDisplayed();
        await this.syaratDanKetentuanMissionV4.click();
        
        // Detail Misi Section 2
        await this.fieldPeriodeMisi.waitForClickable();
        await this.fieldPeriodeMisi.waitForDisplayed();
        await this.fieldPeriodeMisi.click();

        await this.startDate.waitForClickable();
        await this.startDate.waitForDisplayed();
        await this.startDate.click();

        await this.endDate.waitForClickable();
        await this.endDate.waitForDisplayed();
        await this.endDate.click();
        
        // Detail Misi Section 3
        await this.selectProduct.scrollIntoView();
        await this.selectProduct.waitForClickable();
        await this.selectProduct.waitForDisplayed();
        await this.selectProduct.click();

        await this.allProduct.scrollIntoView();
        await this.allProduct.waitForClickable();
        await this.allProduct.waitForDisplayed();
        await this.allProduct.click();
        
        await this.flashSale.scrollIntoView();
        await this.flashSale.waitForClickable();
        await this.flashSale.waitForDisplayed();
        await this.flashSale.click();

        await this.Bundling.scrollIntoView();
        await this.Bundling.waitForClickable();
        await this.Bundling.waitForDisplayed();
        await this.Bundling.click();

        // Detail Misi Section 4
        await this.fieldInputTarget.scrollIntoView();
        await this.fieldInputTarget.waitForClickable();
        await this.fieldInputTarget.waitForDisplayed();
        await this.fieldInputTarget.click();

        await this.selectReward.scrollIntoView();
        await this.selectReward.waitForClickable();
        await this.selectReward.waitForDisplayed();
        await this.selectReward.click();

        await this.rewardKoin.scrollIntoView();
        await this.rewardKoin.waitForClickable();
        await this.rewardKoin.waitForDisplayed();
        await this.rewardKoin.click();

        await this.fieldInputReward.scrollIntoView();
        await this.fieldInputReward.waitForClickable();
        await this.fieldInputReward.waitForDisplayed();
        await this.fieldInputReward.click();

        await this.toggleSwitchLeaderBoard.scrollIntoView();
        await this.toggleSwitchLeaderBoard.waitForClickable();
        await this.toggleSwitchLeaderBoard.waitForDisplayed();
        await this.toggleSwitchLeaderBoard.click();

        await this.fieldPencapaianMinimal.scrollIntoView();
        await this.fieldPencapaianMinimal.waitForClickable();
        await this.fieldPencapaianMinimal.waitForDisplayed();
        await this.fieldPencapaianMinimal.click();

        await this.fieldBatasPemenang.scrollIntoView();
        await this.fieldBatasPemenang.waitForClickable();
        await this.fieldBatasPemenang.waitForDisplayed();
        await this.fieldBatasPemenang.click();

        await this.buttonBuatMisi.scrollIntoView();
        await this.buttonBuatMisi.waitForClickable();
        await this.buttonBuatMisi.waitForDisplayed();
        await this.buttonBuatMisi.click();
    }

    async verifyPageTitle(expectedTitle: string) {
        const title = await browser.getTitle();
        return title === expectedTitle;
    }
}

export default new missionPage();
