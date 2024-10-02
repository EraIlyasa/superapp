export default new class voucherPage {
    get menuVoucher() {
        return $('//*[@data-testid="Menu-Voucher"]');
    }
    get btnAddVoucher() {
        return $('//*[@data-testid="layout-list-add-button"]');
    }
    get btnCreateVoucher() {
        return $('(//*[@class="tooltip-options"])[1]');
    }
    get inputVoucherBannerImage() {
        return $('//*[@class="ant-upload ant-upload-select ant-upload-select-picture-card"]');
    }
    get btnUploadVoucherBannerImage() {
        return $('//span[@class="ant-upload"]/*[@type="file"]');
    }
    get selectVoucherDiscount() {
        return $('(//*[@class="ant-radio-input"])[1]');
    }
    get selectVoucherCashback() {
        return $('(//*[@class="ant-radio-input"])[2]');
    }
    get selectVoucherProduct() {
        return $('(//*[@class="ant-radio-input"])[3]');
    }
    get inputVoucherName() {
        return $('//*[@placeholder="Enter the voucher name"]');
    }
    get platformSalesForce() {
        return $('(//*[@class="ant-checkbox-input"])[1]');
    }
    get platformDashboard() {
        return $('(//*[@class="ant-checkbox-input"])[2]');
    }
    get platformApps() {
        return $('(//*[@class="ant-checkbox-input"])[3]');
    }
    get inputDiscountNominal() {
        return $('(//*[@placeholder="Rp 0"])[1]');
    }
    get inputMinimumOrder() {
        return $('(//*[@placeholder="Rp 0"])[2]');
    }
    get selectProductCondition() {
        return $('//*[@placeholder="Choose Condition"]');
    }
    //product conditions
    get optProductConditionAllProduct() {
        return $('//*[@id="react-autowhatever-1--item-0"]');
    }
    get optProductConditionAllProductExcept() {
        return $('//*[@id="react-autowhatever-1--item-1"]');
    }
    get optProductConditionAllProductExceptSpecial() {
        return $('//*[@id="react-autowhatever-1--item-2"]');
    }
    get optProductConditionAllProductExceptCigarette() {
        return $('//*[@id="react-autowhatever-1--item-3"]');
    }
    get optProductConditionAnd() {
        return $('//*[@id="react-autowhatever-1--item-4"]');
    }
    get optProductConditionOr() {
        return $('//*[@id="react-autowhatever-1--item-5"]');
    }
    get optProductConditionAndSpecial() {
        return $('//*[@id="react-autowhatever-1--item-6"]');
    }
    get optProductConditionOrSpecial() {
        return $('//*[@id="react-autowhatever-1--item-7"]');
    }
    get btnAddProductVoucher() {
        return $('//*[@class="sub d-flex flex-col"]');
    }
    get searchProductVoucher() {
        return $('(//*[@class="ant-input ant-input-lg"])[6]');
    }
    get clearSearchProductVoucher() {
        return $('(//*[@class="anticon anticon-close-circle"])[5]');
    }
    get optBotol() {
        return $('(//*[@data-testid="btn-add"])[2]');
    }
    get btnAddProductModal() {
        return $('//*[@data-testid="btn-add-product"]');
    }
    get selectVoucherStartDate() {
        return $('//*[@placeholder="Select date"]');
    }
    get selectVoucherStartDateToday() {
        return $('//*[@class="ant-picker-today-btn"]');
    }
    get selectVoucherEndDate() {
        return $('//*[@placeholder="Select Date"]');
    }
    get selectVoucherEndDateSpecific() {
        return $('//*[@title="2024-10-12"]');
    }
    get voucherAlwaysOn() {
        return $('//*[@data-testid="switch-valid-date-voucher"]');
    }
    get selectUserType() {
        return $('(//*[@class="ant-select-selector"])[1]');
    }
    get optTypeAllUser() {
        return $('(//*[@class="ant-select-item-option-content"])[2]');
    }
    get inputVoucherQty() {
        return $('//*[@data-testid="test-voucher-qty"]');
    }
    get selectProductType() {
        return $('(//*[@class="ant-select-selection-search"])[2]');
    }
    get selectWarehouse() {
        return $('(//*[@class="select__input"])[2]');
    }
    get optWarehouse() {
        return $('//*[@class="select__option select__option--is-focused css-d7l1ni-option"]');
    }
    get chooseArea() {
        return $('(//*[@class="select__input"])[3]');
    }
    get optArea() {
        return $('//*[@class="select__option select__option--is-focused css-d7l1ni-option"]');
    }
    get tabPushNotification() {
        return $('(//*[@class="ant-tabs-tab-btn"])[1]');
    }
    get inputVoucherTitle() {
        return $('//*[@placeholder="Enter the push notification title"]');
    }
    get inputVoucherDescription() {
        return $('//*[@placeholder="Type the description here"]');
    }
    get tabAboutVoucher() {
        return $('(//*[@class="ant-tabs-tab-btn"])[2]');
    }
    get inputAboutVoucher() {
        return $('(//*[@class="ql-editor ql-blank"])[1]');
    }
    get tabTermsAndConditions() {
        return $('(//*[@class="ant-tabs-tab-btn"])[3]');
    }
    get inputTnC() {
        return $('//*[@class="ql-editor ql-blank"]')
    }
    get tabHowToUse() {
        return $('(//*[@class="ant-tabs-tab-btn"])[4]');
    }
    get inputHowToUse() {
        return $('//*[@class="ql-editor ql-blank"]')
    }
    get btnSubmitVoucher() {
        return $('//*[@data-testid="btn-submit"]')
    }
    get selectVoucherCode() {
        return $('(//td[contains(@class, "ant-table-cell")]//span[contains(text(), "Code:")])[1]');
    }
    get btnPublishVoucher() {
        return $('(//*[@data-testid="submit"])[1]');
    }
    get btnConfirmPublishVoucher() {
        return $('//*[@id="submit-status"]');
    }
}