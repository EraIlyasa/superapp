class DailyCheckInPage {

    get marketingMenus() {
        return $('//span[contains(text(),"Marketing")]');
    }

    get dailyCheckInMenu() {
        return $('//span[contains(text(),"Daily Check In")]');
    }

    get rewardsMenu() {
        return $('//*[@data-testid="Menu-Rewareds"]');
    }

    public get DailyCheckInRewards() {
        return $('//*[@id="page-title"]/section/p');
    }

    public get subtitleRewards(){
        return $('//*[@id="page-title"]/section/span');
    }

    public get totalRewards(){
        return $('//*[@id="site-layout-background"]/div/div/div[1]/div/div[2]/div/p');
    }

    public get totalCustomsRewards(){
        return $('//*[@id="site-layout-background"]/div/div/div[1]/div/div[2]/div/span');
    }

    public get listTableGroup(){
        return $('//*[@id="site-layout-background"]/div/div/div[2]/div[1]/div/div/div/div/div/table/colgroup');
    }

    get recordPerPage(){
        return $('//*[@data-testid="limit-per-page"]');
    }

    get contentItem(){
        return $('/html/body/div[2]/div/div/ul/li[2]/span');
    }

    get lastPage(){
        return $('//*[@id="site-layout-background"]/div/div/div[2]/div[2]/div[2]/button[2]');
    }

    get editRewards(){
        return $('//*[@id="site-layout-background"]/footer/div/a');
    }

    public get editRewardsTitle() {
        return $('//*[@id="page-title"]/section/p');
    }

    get backButton (){
        return $('//*[@id="page-title"]/button');
    }

    get Dashboard (){
        return $('//*[@id="94"]');
    }

    get marketingMenuV4 (){
        return $('//span[contains(text(),"Marketing")]');
    }

    get dailyCheckInV4Menu (){
        return $('//*[@class="ant-menu-title-content"]/*[@data-testid="Menu-DailyCheck In V4"]');
    }

    get rewardsV4Menu (){
        return $('//*[@data-testid="Menu-Rewards"]');
    }

    public get breadcrumbRewardsV4() {
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[1]/nav/ol');  
    }

    public get titleDailyCheckInRewardsV4() {
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[2]/div/div[1]/div/h1'); 
    }

    public get subtitleDailyCheckInRewardsV4() {
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[2]/div/div[1]/div/span');
    }

    public get listTableRewardsV4() {
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[3]/div'); 
    }

    get editRewardsV4(){
        return $('//*[@id="__next"]/div/div/main/div/footer/div/div/div[2]');
    }

    public get titleEditRewardsV4() {
        return $('//*[@id="__next"]//h1');
    }

    public get dayRewardsTableV4() {
        return $('//thead//th[1]');
    }

    public get rewardTypeTableV4() {
        return $('//thead//th[2]');
    }

    public get rewardValueTableV4() {
        return $('//thead//th[3]');
    }
    
    get downListRewardsV4(){
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[3]/div/div[2]/div/div/div/div/div/table/tbody/tr[2]/td[2]/div/div/div/div/div/div/span[2]');
    }

    get rewardsTypeIsPoinV4(){
        return $('/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/div/span');
    }

    get clearIconButtonRewardsV4(){
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[3]/div/div[2]/div/div/div/div/div/table/tbody/tr[2]/td[3]/div/div/span/span/span[1]/span/span/span');
    }

    async clickClearIconButtonRewardsV4() {
        console.log("Mencoba mencari elemen clearIconButtonRewardsV4...");
        
        const isExisting = await this.clearIconButtonRewardsV4.isExisting();
        console.log(`Apakah elemen ada di halaman? ${isExisting}`);
        
        if (!isExisting) {
            throw new Error("Elemen clearIconButtonRewardsV4 tidak ditemukan di halaman.");
        }

        await this.clearIconButtonRewardsV4.scrollIntoView(); 
        console.log("Elemen telah discroll ke dalam view.");

        const isClickable = await this.clearIconButtonRewardsV4.isClickable();
        console.log(`Apakah elemen dapat diklik? ${isClickable}`);

        if (isClickable) {
            console.log("Klik elemen sekarang...");
            await this.clearIconButtonRewardsV4.click();  // Metode standar
            console.log("Klik berhasil.");
        } else {
            console.log("Elemen tidak dapat diklik, mencoba menggunakan execute...");
            await browser.execute("arguments[0].click();", this.clearIconButtonRewardsV4);  // Metode alternatif
            console.log("Klik menggunakan execute berhasil.");
        }
    }

    public get jumlahPoinRewardsV4(){
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[3]/div/div[2]/div/div/div/div/div/table/tbody/tr[2]/td[3]/div/div/span/span/span[1]/input');
    }

    public get iconRewardsTypeV4() {
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[3]/div/div[2]/div/div/div/div/div/table/tbody/tr[2]/td[3]/div/div/span/span/span[2]/div');
    }

    get buttonSimpanRewardsV4(){
        return $('//*[@id="__next"]/div/div/main/div/footer/div/div/div[2]/button');
    }

    async navigateToDailyCheckIn() {
        await (this.marketingMenus).scrollIntoView(); 
        await (this.marketingMenus).waitForClickable();
        await (this.marketingMenus).click();
        await (this.dailyCheckInMenu).scrollIntoView();
        await (this.dailyCheckInMenu).waitForClickable();
        await (this.dailyCheckInMenu).click();
        await (this.rewardsMenu).scrollIntoView();
        await (this.rewardsMenu).waitForClickable();
        await (this.rewardsMenu).click();
        await (this.recordPerPage).scrollIntoView();
        await (this.recordPerPage).waitForClickable();
        await (this.recordPerPage).click();
        await (this.contentItem).waitForClickable();
        await (this.contentItem).click();
        await (this.lastPage).scrollIntoView();
        await (this.lastPage).waitForClickable();
        await (this.lastPage).click();
        await (this.editRewards).waitForClickable();
        await (this.editRewards).click();
        await (this.backButton).scrollIntoView();
        await (this.backButton).waitForClickable();
        await (this.backButton).click();
        await (this.Dashboard).scrollIntoView();
        await (this.Dashboard).waitForClickable();
        await (this.Dashboard).click();
        await (this.marketingMenuV4).scrollIntoView();
        await (this.marketingMenuV4).waitForClickable();
        await (this.marketingMenuV4).click();
        await (this.dailyCheckInV4Menu).scrollIntoView();
        await (this.dailyCheckInV4Menu).waitForClickable();
        await (this.dailyCheckInV4Menu).click();
        await (this.rewardsV4Menu).scrollIntoView();
        await (this.rewardsV4Menu).waitForClickable();
        await (this.rewardsV4Menu).click();
        await (this.editRewardsV4).scrollIntoView();
        await (this.editRewardsV4).waitForClickable();
        await (this.editRewardsV4).click();
        await (this.downListRewardsV4).scrollIntoView();
        await (this.downListRewardsV4).waitForClickable();
        await (this.downListRewardsV4).click();
        await (this.rewardsTypeIsPoinV4).scrollIntoView();
        await (this.rewardsTypeIsPoinV4).waitForClickable();
        await (this.rewardsTypeIsPoinV4).click();
        await (this.clearIconButtonRewardsV4).scrollIntoView();
        await (this.clearIconButtonRewardsV4).waitForClickable();
        await (this.clearIconButtonRewardsV4).click();
        await browser.execute("arguments[0].click();", this.clearIconButtonRewardsV4);
        await (this.buttonSimpanRewardsV4).scrollIntoView();
        await (this.buttonSimpanRewardsV4).waitForClickable();
        await (this.buttonSimpanRewardsV4).click();
    }

    async verifyPageTitle(expectedTitle: string) {
        const title = await browser.getTitle(); 
        return title === expectedTitle;
    }
}

export default new DailyCheckInPage();
