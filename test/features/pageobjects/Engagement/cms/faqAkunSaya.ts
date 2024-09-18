class faqAkunSaya {

    public get btnViewEditLog() {
        return $('//*[@id="site-layout-background"]/div[2]/div[1]//div[2]/button');
    }
    public get colCategory() {
        return $('//*[@id="site-layout-background"]/div[2]/div[2]//div[2]//div/table/thead/tr/th[2]');
    }
    public get questionsAmount() {
        return $('//*[@id="site-layout-background"]/div[2]/div[2]//div[2]//div/table/tbody/tr[2]/td[3]');
    }
    public get detailCategory() {
        return $('//*[@id="site-layout-background"]/div[2]/div[2]//div[2]//div/table/tbody/tr[2]/td[2]');
    }
    public get EditFAQ() {
        return $('//*[@id="icon-action"]');
    }
    public get deleteFAQ() {
        return $('//*[@data-testid="delete"]');
    }
    public get btnHapusModal() {
        return $('/html/body/div[6]//div[2]//div[2]//div[3]/button[1]');
    }
    public get btnKembaliModal() {
        return $('/html/body/div[6]//div[2]//div[2]//div[3]/button[2]');
    }

}