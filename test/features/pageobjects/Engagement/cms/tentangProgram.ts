class tentangProgram {

    //Tentang Level Program

    public get btnViewEditLog() {
        return $('//*[@id="site-layout-background"]//div[1]//div[2]/button');
    }
    public get previewImage() {
        return $('//*[@id="site-layout-background"]/div/div/div[2]//div[1]//div[1]//div');
    }
    public get tabPejuang() {
        return $('//*[@id="rc-tabs-3-tab-0"]');
    }
    public get tabJagoan() {
        return $('//*[@id="rc-tabs-3-tab-1"]');
    }
    public get tabSatria() {
        return $('//*[@id="rc-tabs-3-tab-2"]');
    }
    public get tabJawara() {
        return $('//*[@id="rc-tabs-3-tab-3"]');
    }

    //Tentang Poin
    public get tabCaraMendapatkan() {
        return $('//*[@id="rc-tabs-4-tab-0"]');
    }
    public get tabCaraPerhitungan() {
        return $('//*[@id="rc-tabs-4-tab-1"]');
    }
    public get tabCaraMempertahankan() {
        return $('//*[@id="rc-tabs-4-tab-2"]');
    }

    //Edit
    public get btnEdit() {
        return $('//*[@id="site-layout-background"]/footer/div/button');
    }
    public get previewBannerImg() {
        return $('//*[@id="site-layout-background"]//div[2]//div[1]/div/div[1]//div[2]//div/span//div[1]/div/span/a/span');
    }
    public get deleteBannerImg() {
        return $('//*[@id="site-layout-background"]//div[2]//div[1]//div[1]//div[2]//span//div[1]/div/span/button');
    }
    public get addLinkBanner() {
        return $('//*[@id="site-layout-background"]//div[2]//div[1]//div[1]//div[4]/div/input');
    }
    public get addNewBenefit() {
        return $('//*[@id="site-layout-background"]//div[2]//div[2]/div[2]//div[1]//div[2]/button');
    }
    public get deleteBenefit() {
        return $('//*[@id="icon-action"]');
    }
    public get colBenefitTitle() {
        return $('//*[@id="site-layout-background"]//div[2]//div[2]/div[2]//div[2]//div/table/tbody/tr[2]/td[2]/div/input');
    }
    public get colFootnote() {
        return $('//*[@id="site-layout-background"]//div[2]//div[2]/div[2]//div[2]//div/table/tbody/tr[2]/td[3]/div/input');
    }
    public get colPejuang() {
        return $('//*[@id="site-layout-background"]//div[2]//div[2]/div[2]//div[2]//div/table/tbody/tr[2]/td[4]/div/span/input[1]');
    }
    public get colJagoan() {
        return $('//*[@id="site-layout-background"]//div[2]/div/div[2]/div[2]//div[2]//div/table/tbody/tr[2]/td[5]/div/span/input[1]');
    }
    public get colSatria() {
        return $('//*[@id="site-layout-background"]//div[2]/div/div[2]/div[2]//div[2]//div/table/tbody/tr[2]/td[6]/div/span/input[1]');
    }
    public get colJawara() {
        return $('//*[@id="site-layout-background"]//div[2]//div[2]/div[2]//div[2]//div/table/tbody/tr[2]/td[7]/div/span/input[1]');
    }
    public get btnSave() {
        return $('//*[@id="site-layout-background"]/footer/div/button[2]');
    }
    public get btnBatal() {
        return $('//*[@id="site-layout-background"]/footer/div/button[1]');
    }

}