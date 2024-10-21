export default new class PaymentRequestPage {
    
    //List 
    get fieldInputSearch() { return $('(//*[@data-testid="search-bar"])')}
    get btnSearch() { return $('(//*[@id="btnSearch"])')}
    get btnCari() { return $('(//*[@data-id="enter-btn"])')}
    get btnDetail() { return $('(//*[@id="payment-request-transaction-detail-0"])')}
    get statusPR() { return $('(//*[@id="payment-request-prepayment-status-0"])/*')}
    
    //Detail 
    get btnSetujui() { return $('(//*[@id="btnApprove"])')}
    get btnTolak() { return $('(//*[@id="btnReject"])')}
    get btnSimpanSR() { return $('(//*[@id="btnSubmit"])')}
    get btnBatalSR() { return $('(//*[@id="btnCancel"])')}
    get statusText() { return $('(//*[@class="Tabs_alertBox__XfHb5 Tabs_warningBox__JmRre undefined"])')}
    get inputFieldPaidByModal() { return $('(//*[@id="Dibayarkan oleh"])')}
    get imgUpload() { return $('(//*[@id="img-upload"])')}
    get btnSelesaikanModal() { return $('(//*[@id="updateBtnEdit"])')}
    get btnBatalModal() { return $('(//*[@id="cancelBtnEdit"])')}

    //Alert 
    get failedAlert() { return $('(//*[@class="ant-notification-notice-description"])')}
    get successAlert() { return $('(//*[@class="ant-notification-notice-description"])')}


}
