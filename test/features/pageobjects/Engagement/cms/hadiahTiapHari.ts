class hadiahTiapHari {

    public get btnViewEditLog() {
        return $('//*[@id="site-layout-background"]//div[1]/div/div[2]/button');
    }
    public get linkTextDirectTo() {
        return $('//a[text()="custom-link"]');
    }

    //Edit
    public get btnEdit() {
        return $('//*[@id="site-layout-background"]/footer/div/button');
    }
    public get addNewBenefits() {
        return $('//*[@id="site-layout-background"]/div[2]//div[2]//div[1]/div[2]/button');
    }
    public get uploadImage() {
        return $('//input[@id="img-upload"]');
    }
    public get previewImage() {
        return $('//span[@aria-label="eye"]');
    }
    public get deleteImage() {
        return $('//span[@aria-label="delete"]');
    }
    public get titleBenefit() {
        return $('//input[@placeholder="Enter Benefit Title"]');
    }
    public get contentBenefit() {
        return $('//div[@data-placeholder="Describe the description apply to this content"]');
    }
    public get directCategory() {
        return $('//span[text()="Custom Link"]');
    }
    public get inputLink() {
        return $('//input[@placeholder="http://"]');
    }
    public get deleteBenefit() {
        return $('//*[@id="site-layout-background"]/div[2]//div[2]//div[2]//div/table/tbody/tr[3]/td[1]/div/svg');
    }
    
    //Action Button
    public get labelButton() {
        return $('//input[@placeholder="Enter Label Button"]');
    }
    public get colCategory() {
        return $('//span[text()="Custom Link"]');
    }
    public get linkContent() {
        return $('//input[@value="/mission"]');
    }
    public get btnBatal() {
        return $('//button//span[text()="Batal"]');
    }
    public get btnSave() {
        return $('//button//span[text()="Save"]');
    }
}