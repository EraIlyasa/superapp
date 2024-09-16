export default new class poinTukarPage {

    //navigation menu
    get menuPoinTukar() { return $('//*[@data-testid="Menu-PoinTukar"]'); }
    get subMenuKonfigurasi() { return $('//*[@data-testid="Menu-Konfigurasi"]'); }
    get subMenuVoucherParameter() { return $('//*[@data-testid="Menu-VoucherParameter"]'); }

    //Sub Menu Voucher Parameter - List element 
    get btnSearch() { return $('//*[@id="btnSearch"]'); }
    get btnDiscountBy() { return $('//*[@title="All Discount"]'); }
    get btnCondition() { return $('//*[@title="All Conditions"]'); }
    get btnPages() { return $('//*[@data-testid="limit-per-page"]')}
    get fieldInputSearch() { return $('//*[@data-testid="search-bar"]'); }
    get voucherNameText() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[2]/*/*[1]/*'); }
    get btnVouchername() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[2]/*/*[1]'); }
    get btnEdit() { return $('(//*[@data-id="icon-actions"])[1]/*[1]/*'); }
    get btnDelete() { return $('(//*[@data-id="icon-actions"])[1]/*[2]/*'); }
    get btnCreateNewParameterVoucher() { return $('//*[@id="btnAdd"]'); }
    get titleMenu() { return $('//*[@class="s_UaT9TnT-"]'); }


    //Sub Menu Voucher Parameter Option
    get optPages10() { return $('//*[@data-id="limit-per-page-options-0"]'); }
    get optPages20() { return $('//*[@data-id="limit-per-page-options-1"]'); }
    get optPages50() { return $('//*[@data-id="limit-per-page-options-2"]'); }
    get optPages100() { return $('//*[@data-id="limit-per-page-options-3"]'); }
    get btnOptDiscountBy0() { return $('(//*[@data-id="undefined-0"])[2]'); }
    get btnOptDiscountBy1() { return $('(//*[@data-id="undefined-1"])[2]'); }
    get btnOptDiscountBy2() { return $('(//*[@data-id="undefined-2"])[2]'); }
    get btnOptCondition0() { return $('(//*[@data-id="undefined-0"])[1]'); }
    get btnOptCondition1() { return $('(//*[@data-id="undefined-1"])[1]'); }
    get btnOptCondition2() { return $('(//*[@data-id="undefined-2"])[1]'); }


    //Create New Voucher Parameter
    get btnCreateVoucher() {return $('//*[contains(text(), "Create Voucher")]'); }
    get btnCancel() {return $('//*[contains(text(), "Cancel")]'); }

    //Section 1 Voucher Detail 
    get uploadImage() { return $('//*[@id="img-upload"]'); } //Image aspect ratio size should be in 3:1 (328x110)
    get fieldInputVoucherName() { return $('//*[@placeholder="Enter Voucher Name"]'); }
    get fieldInputVoucherPrefix() { return $('//*[@placeholder="Ex: SUPEREATS"]'); }
    get fieldInputDuration() { return $('//*[@id="duration-form"]'); }
    get toggleAllDay() { return $('//*[@role="switch"]'); }
    get fieldValidDay() { return $('//*[contains(text(), "Type & select value")]'); }
    get btnDecreaseDuration() { return $('//*[@aria-label="Decrease Value"]'); }
    get btnIncreaseDuration() { return $('//*[@aria-label="Increase Value"]'); }
    get fieldInputValidDay() { return $('//*[@id="react-select-4-placeholder"]'); }
    get allertUploadImage() { return $('(//*[@class="m-top-2 d-flex align center gap-1"])'); }
    

    //Section 2 Conditions
    get fieldCondition() { return $('//*[@title="All Product"]'); }
    get fieldDiscountBy() { return $('(//*[@title="Price"])[1]')}
    get fieldProductCluster() { return $('//*[@id="Product Cluster"]'); }
    get btnViewProductList() { return $('//*[contains(text(), "View Product List")]'); }
    get fieldInputJumlahDiskon() { return $('//*[@id="nominal-price-form"]'); }
    get fieldInputJumlahTransaksi() { return $('//*[@id="minimal-order-form"]'); }
    get fieldMaxDisc() { return $('//*[@id="nominal-percentage-form"]'); }
    get allertVoucherName() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[1]'); }
    get allertVoucherPrefix() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[2]'); }
    get allertDuration() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[3]'); }
    get allertValidDay() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[4]'); }

    //Section 2 Conditions Options
    get optCondition0() { return $('//*[@title="All Product Except"]'); }
    get optCondition1() { return $('//*[@title="All Product Except Cigarettes"]'); }
    get optCondition2() { return $('//*[@title="Or"]'); }
    get optDiscountBy1() { return $('//*[@title="Percentage"]'); }
    get optProductCluster0() { return $('//*[@id="ad"]'); }
    get optProductCluster1() { return $('//*[@id="Ab"]'); }
    get optProductCluster2() { return $('//*[@id="Cluster All Beras RTP"]'); }
    get allertJumlahDiskon() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[5]'); }
    get allertJumlahTransaksi() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[6]'); }

    //Section 3 Push Notification
    get fieldInputTitle() { return $('//*[@placeholder="Enter Notification Title"]'); }
    get fieldInputDesc() { return $('//*[@placeholder="Describe the descriptions"]'); }
    get allertTitle() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[7]'); }
    get allertMainDesc() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[8]'); }
    
    //Section 4 About Voucher
    get fieldInputDescAboutVoucher() { return $('(//*[@data-placeholder="Describe the descriptions"])[1]'); }
    get fieldInputDescTC() { return $('(//*[@data-placeholder="Describe the descriptions"])[2]'); }
    get fieldInputDescH2U() { return $('(//*[@data-placeholder="Describe the descriptions"])[3]'); }
    get scroll() { return $('(//*[@class="ql-container ql-snow"])[3]'); }
    get allertAboutVoucher() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[9]'); }
    get allertTC() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[10]'); }
    get allertH2U() { return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])[11]'); }
    


    


    //Methode if the element most likely have the same xpath
    //getMenu
    async getMenu(menuName: string) {
        return $('//*[@data-testid="Menu-'+menuName+'"]');
    }
    async getConditions(ConditionName: string) { 
        return $('//*[@title="'+ConditionName+'"]'); 
    }
    async getProductCluster(pcName: string) { 
        return $('//*[@id="'+pcName+'"]'); 
    }
    async getDesc(que: string) { 
        return $('(//*[@data-placeholder="Describe the descriptions"])'+que+''); 
    }
    async getAllert(allertQue: string) {
        return $('(//*[@class="font-mini color-red m-top-2 d-flex align-center gap-1"])'+allertQue+''); 
    }
}   