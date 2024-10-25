class faqJawara {

    public get btnViewEditLog() {
        return $('//*[@id="site-layout-background"]/div[2]/div[1]//div[2]/button');
    }
    public get linkTextCategory() {
        return $('//*[text()="SuperApp"]');
    }
    public get colQuestionsAmaount() {
        return $('//*[@id="site-layout-background"]//table/tbody/tr[2]/td[3]');
    }
    public get actionEdit() {
        return $('//*[@data-testid="edit"]');
    }
    public get deleteCategory() {
        return $('//*[@data-testid="delete"]');
    }

    //Add New Question
    public get inputTitleCategory() {
        return $('//*[@id="site-layout-background"]//div[2]//div[2]/div[2]//div[1]//div[2]/button');
    }
    public get addQuestions() {
        return $('//input[@placeholder="Add Question"]');
    }
    public get inputAnswer() {
        return $('//div[@data-placeholder="Add Answers"]');
    }
    public get btnDelete() {
        return $('//div[@class="m-top-3"]');
    }
    public get btnCancel() {
        return $('//*[@id="site-layout-background"]/footer/div/button[1]');
    }
    public get btnSave() {
        return $('//*[@id="site-layout-background"]/footer/div/button[2]');
    }
    
}