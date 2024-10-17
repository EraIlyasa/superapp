export default new class konsinyasiPage {
    
    //List
    get noDataKonsinyasi() { return $('(//*[@class="s_vnxcOuqb "])')} 
    get kodeTransaksi() { return $('(//*[@data-id="invoice-0"])/*')}
    get btnFilter() { return $('(//*[@data-id="filter-modal-trigger"])')}
    get fieldInputSearch() {return $('(//*[@data-id="input-search"])')}
    get btnCari() {return $('//span[@data-id="enter-btn"]');}
    get btnSearch() {return $('(//*[@id="btnSearch"])')}
    get titlePage() { return $('(//*[@class="s_qzwtq9Zy"])')}
    // get kodeTransaksi() { return $('(//*[@data-id="invoice-0"])/*')}

    //Filter Modal
    get btnReset() { return $('(//*[@data-id="filter-reset-button"])')}
    get btnTerapkanFilter() { return $('(//*[@data-id="filter-apply-button"])')}
    get navGudang() { return $('(//*[@data-node-key="warehouse_id"])')}
    get navPeriode() { return $('(//*[@data-node-key="period"])')}
    get navStatus() { return $('(//*[@data-node-key="status"])')}
    get navDueDate() { return $('(//*[@data-node-key="due_date"])')}

    get optPeriodeBulan() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[2]//*[contains(text(),"Bulan Ini")]')}
    get optPeriodeHari() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[2]//*[contains(text(),"Hari Ini")]')}

    get optSemua() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[3]//*[contains(text(),"Semua")]')}
    //Alert
    get failedAlert() { return $('(//*[@class="ant-notification-notice-description"])')}
    
        
}