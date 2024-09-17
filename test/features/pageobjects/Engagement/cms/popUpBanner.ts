class popUpBanner{

    get navMenuMarketing(){
        return $('//*[@data-testid="Menu-Marketing"]');
    }

    get menuCMSV4(){
        return $('//*[@class="ant-menu-title-content"]/*[@data-testid="Menu-CMSV4"]');
    }

    get menuPopUpBanner(){
        return $('//*[@data-testid="Menu-PopUp Banner"]');
    }

    get title(){
        return $('(//*[@data-testid="page-header-title"])');
    }

    get btnBuat(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"])');
    }

    get searchBar(){
        return $('(//*[@class="ant-input-affix-wrapper ant-input-affix-wrapper-sm css-1vp3ixv ant-input-borderless"])');
    }

    get btnUrut(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-ghost w-fit m-auto Button_button__QU6uO Button_ghost__t9rWe Button_medium__hRLU4"])');
    }

    get btnDownUrut(){
        return $ ('(//*[@data-testid="down-btn-0"])');
    }

    get btnUpUrut(){
        return $ ('(//*[@class="text-primary-50 cursor-pointer"])[2]');
    }

    get btnCancelUrut(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-default ant-btn-lg ant-btn-dangerous Button_button__QU6uO Button_outline__QxRzb Button_large__Z_hZd"])');
    }

    get btnSimpanUrut(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"])[2]');
    }

    get btnYesModal(){
        return $('(//*[@class="(//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg text-center flex flex-col justify-center Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"])');
    }

    get btnPeriksaKembaliModal(){
        return $('(//*[@data-testid="cancel-nonactive-toggle"])');
    }

    get btnSumber(){
        return $('(//*[@class="ant-tag Table_filterItem__x3tSg Chips_container__Uk_w2 Chips_large__DNi_I css-1vp3ixv"])[1]');
    }

    get btnSumberModal(){
        return $('(//*[@data-node-key="source"])');
    }

    get btnSumberAplikasi(){
        return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])/*[1]');
    }

    get btnSumberWebview(){
        return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])/*[2]');
    }

    get btnSumberCourier(){
        return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])/*[3]');
    }

    get btnStatus(){
        return $('(//*[@class="ant-tag Table_filterItem__x3tSg Chips_container__Uk_w2 Chips_large__DNi_I css-1vp3ixv"])[2]');
    }

    get btnStatusModal(){
        return $('(//*[@data-node-key="status"])');
    }

    get btnStatusSemua(){
        return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])/*[1]');
    }

    get btnStatusAktif(){
        return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])/*[2]');
    }

    get btnStatusNonaktif(){
        return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])/*[3]');
    }

    get btnGudang(){
        return $('(//*[@class="ant-tag Table_filterItem__x3tSg Chips_container__Uk_w2 Chips_large__DNi_I css-1vp3ixv"])[3]');
    }

    get btnGudangModal(){
        return $('(//*[@data-node-key="warehouse"])');
    }

    get btnGudangSemua(){
        return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])/*[1]');
    }

    get btnGudangAdada(){
        return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])/*[2]');
    }

    get btnDetail(){
        return $('(//*[@data-testid="detail-btn-0"])');
    }

    get btnEdit(){
        return $('(//*[@data-testid="edit-btn-0"])');
    }

    get btnDelete(){
        return $('(//*[@data-testid="delete-btn-0"])');
    }

    get btnCloseModal(){
        return $('(//*[@class="ModalHalfFrame_modalCloseIcon__yieRt"])');
    }

    get btnResetFilter(){
        return $('(//*[@data-testid="modal-reset-filter"])');
    }

    get btnApplyFilter(){
        return $('(//*[@data-testid="modal-apply-filter"])');
    }

    get fieldNama(){
        return $('(//*[@class="ant-input-affix-wrapper css-1vp3ixv ant-input-outlined"])[1]');
    }

    get inputNama(){
        return $('//*[@placeholder="Masukkan Nama Banner"]');
    }

    get pickSumber(){
        return $('(//*[@class="ant-select-selector"])[2]');
    }

    get pickSumberAplikasi(){
        return $('//*[@title="Aplikasi Super"]');
    }

    get pickSumberWebview(){
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Webview Sales Force"]');
    }

    get pickSumberCourier(){
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Courier App"]');
    }

    get pickSlot(){
        return $('(//*[@class="ant-select-selector"])[3]')
    }

    get pickSlotPopup(){
        return $('//*[@title="Popup Home"]')
    }

    get startDate(){
        return $('(//*[@class="ant-picker ant-picker-middle ant-picker-outlined css-1vp3ixv"])[1]');
    }

    get selectStartDate(){
        return $('(//*[@class="ant-picker-cell-inner"])[20]');
    }

    get endDate(){
        return $('(//*[@class="ant-picker ant-picker-middle ant-picker-outlined css-1vp3ixv"])[2]');
    }

    get selectEndDate(){
        return $('(//*[@class="ant-picker-cell ant-picker-cell-in-view"])[30]');
    }

    get startTime(){
        return $('//*[@placeholder="HH:MM"]');
    }

    get selectStartTime(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-default ant-btn-lg Button_button__QU6uO Button_outline__QxRzb Button_large__Z_hZd"])');
    }

    get endTime(){
        return $('//*[@placeholder="HH:MM"]');
    }

    get selectEndTime(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-default ant-btn-lg Button_button__QU6uO Button_outline__QxRzb Button_large__Z_hZd"])');
    }

    get pickType(){
        return $('(//*[@class="ant-select ant-select-outlined ant-select-compact-item ant-select-compact-first-item ant-select-compact-last-item css-1vp3ixv ant-select-single ant-select-show-arrow"])');
    }

    get pickTypeCustom(){
        return $('(//*[@class="ant-select-item ant-select-item-option"])[1]');
    }

    get pickTypePage(){
        return $('(//*[@class="ant-select-item ant-select-item-option"])[2]');
    }

    get pickTypeDeeplink(){
        return $('(//*[@class="ant-select-item ant-select-item-option"])[3]');
    }

    get toggleStatus(){
        return $('(//*[@class="ant-switch css-1vp3ixv ant-switch-checked"])');
    }

    get inputCustomLink(){
        return $('(//*[@class="ant-input-affix-wrapper css-1vp3ixv ant-input-outlined"])[4]');
    }

    get pickCustomerType(){
        return $('(//*[@class="ant-select-selector"])[6]');
    }

    get pickSemuaCustomer(){
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Semua Customer"]');
    }

    get pickGudang(){
        return $('(//*[@class="ant-select-selector"])[7]');
    }

    get pickSemuaGudang(){
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Semua"]');
    }

    get pickArea(){
        return $('(//*[@class="ant-select-selector"])[8]');
    }

    get pickSemuaArea(){
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="All Area"]');
    }

    get contentTextBox(){
        return $('(//*[@class="ql-editor ql-blank"])');
    }

    get pickPage(){
        return $('(//*[@class="ant-select-selector"])[4]');
    }

    get pickTemplateTesting4(){
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Template testing 4"]');
    }

    get pickDeepLink(){
        return $('(//*[@class="ant-select-selector"])[4]');
    }


    get pickDeepLinkDEEP2(){
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="DEEP 2"]');
    }

    get pickBannerImage(){
        return $('//*[@class="UploadArea_containerUpload__U47yP"]');
    }

    get btnBatal(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-default ant-btn-dangerous Button_button__QU6uO Button_outline__QxRzb Button_medium__hRLU4"])');
    }

    get btnBuatBanner(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-primary Button_button__QU6uO Button_solid__yWcC4 Button_medium__hRLU4"])');
    }

    get btnBack(){
        return $('(//*[@data-testid="page-header-back-btn"])');
    }

    get btnUploadGambar() {
        return $('//span[@class="ant-upload"]/*[@type="file"]');
    }

}
export default new popUpBanner();