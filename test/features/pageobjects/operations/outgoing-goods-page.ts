import { $ } from '@wdio/globals';

export default new class outgoingGoodsPage {

    //List 
    get btnSeeDetails() {
        return $('(//*[@data-id="btn-detail-outgoing"])')
    }
    get btnDetailOutgoing() {
        return $('(//*[@data-testid="button-link-small-detail-outgoing"])')
    }
    get btnExportCSV() {
        return $('(//*[@data-id="export-csv-outgoing-goods"])')
    }
    get btnKecamatan() {
        return $('(//*[@data-id="district"])')
    }
    get btnKota() {
        return $('(//*[@data-id="city"])')
    }
    get btnGudang() {
        return $('(//*[@data-id="warehouse_id"])')
    }
    get btnPeriode() {
        return $('(//*[@data-id="period"])')
    }
    get btnTabMotor() {
        return $('(//*[@id="btn-tab-motor"])')
    }
    get btnSearch() {
        return $('(//*[@id="btnSearch"])')
    }
    get listMobil() {
        return $('(//*[@class="detailWrapper"])')
    }
    get titlePage() {
        return $('(//*[@class="flex gap-size-16"])')
    }
    get titlePageV3() {
        return $('(//*[@id="page-title"])')
    }
    get tanggalKirim() {
        return $('//button[@data-id="period"]');
    }
    get tabTanggalKirim() {
        return $('(//*[@data-testid="dropdown-filter-periode"])');
    }

    get inputDetailKodeInvoice() {
        return $('//input[@placeholder="Kode Invoice"]');
    }
    get inputKodeTransaksi() { 
        return $('//input[@placeholder="Cari kode invoice"]')
    }
    get inputKodeTransaksiDetail() {
        return $('//input[@placeholder="Cari kode transaksi"]');
    }
    /////////
    get btnMoreFilter() { 
        return $('(//*[@data-id="filter-modal-trigger"])')
    }
    get btnCari() {
        return $('//span[@data-id="enter-btn"]');
    }

    //Filter option
    get btnTerapkan() {
        return $('(//*[@data-id="filter-apply-button"])')
    }

    //Filter Modal 
    get navKecamatan() {
        return $('(//*[@data-node-key="district"])')
    }
    get navCity() {
        return $('(//*[@data-node-key="city"])')
    }
    get navTipeVendor() {
        return $('(//*[@data-node-key="vendor_type"])')
    }
    get navTglKirim() {
        return $('(//*[@data-node-key="period"])')
    }
    get navGudang() {
        return $('(//*[@data-node-key="warehouse_id"])')
    }
    get optKirimHariIni() {
        return $('(//*[@class="ant-radio-group ant-radio-group-outline"])//*[contains(text(),"Hari ini")]')
    }
    get optKirimBesok() {
        return $('(//*[@class="ant-radio-group ant-radio-group-outline"])//*[contains(text(),"Besok")]')
    }
    get optKirimKemarin() {
        return $('(//*[@class="ant-radio-group ant-radio-group-outline"])//*[contains(text(),"Kemarin")]')
    }
    get buttonKodeInvoice() {
        return $('//button[@data-id="btn-search-outgoing"]');
    }
    

    //Filter option - Tgl Kirim
    //V4
    get optKemarin() {
        return $('(//*[@class="rc-virtual-list-holder-inner"])//*[contains(text(),"Kemarin")]')
    }
    get optHariIni() {
        return $('(//*[@class="rc-virtual-list-holder-inner"])//*[contains(text(),"Hari Ini")]')
    }
    get optBesok() {
        return $('(//*[@class="rc-virtual-list-holder-inner"])//*[contains(text(),"Besok")]')
    }
    get optCustom() {
        return $('(//*[@class="rc-virtual-list-holder-inner"])//*[contains(text(),"Custom")]')
    }

    //V3
    get optHariIniV3() {
        return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[2]//*[contains(text(),"Hari ini")]')
    }
    get optBesokV3() {
        return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[2]//*[contains(text(),"Besok")]')
    }
    get optKemarinV3() {
        return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[2]//*[contains(text(),"Kemarin")]')
    }
    get optCustomV3() {
        return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[2]//*[contains(text(),"Custom")]')
    }

    //Alert
    //v3
    get successAlertV3() { 
        return $('(//*[@class="ant-notification-notice-message"])')
    }
    //v4
    get erorValidation() {
        return $('(//*[@class="s_RR3nZRCC"])')
    }
    get successAlert() {
        return $('(//*[@class="Toast_section__uLPED"])')
    }


    //Detail Outgoing goods
    get btnTidakJadiV3() {
        return $('(//*[@type="button"]//*[contains(text(),"Tidak Jadi")])')
    }
    get btnUbahStatusModalV3() {
        return $('(//*[@type="button"]//*[contains(text(),"Ubah Status")])')
    }
    get checkBoxAll() {
        return $('(//*[@data-id="checkbox-all"])')
    }
    get fieldInputPlatV4() {
        return $('(//*[@data-testid="dropdown-no-plat"])//*[@type="search"]')
    }
    get fieldInputHelperV4() {
        return $('(//*[@label="Helper"])//*[@type="search"]')
    }
    get fieldInputDriverV4() {
        return $('(//*[@data-testid="dropdown-driver"])//*[@type="search"]')
    }
    get btnAssignKurirV4() {
        return $('(//*[@data-testid="button-outline-medium-assign-kurir"])')
    }
    get btnGantiVendorV4() {
        return $('(//*[@data-testid="button-outline-medium-ganti-vendor"])')
    }
    get fieldHelper() {
        return $('(//*[@data-id="dropdown-driver"]//*[@type="search"])[2]')
    }
    get fieldAlasanV4() {
        return $('(//*[@data-testid="dropdown-alasan"])//*[@type="search"]')
    }
    get fieldAlasan() {
        return $('(//*[@data-id="dropdown-reason"])//*[@type="search"]')
    }
    get fieldVendorToV4() {
        return $('(//*[@data-testid="dropdown-vendor-tujuan"])//*[@type="search"]')
    }
    get fieldVendorTo() {
        return $('(//*[@data-id="dropdown-vendor-to"])//*[@type="search"]')
    }
    get btnGantiVendor() {
        return $('(//*[@data-id="btn-ganti-vendor"])')
    }
    get btnKembaliModal() {
        return $('(//*[@data-testid="button-outline-large-kembali"])')
    }
    get btnAssignModal() { 
        return $('(//*[@data-testid="button-solid-large-assign"])')
    }
    get fieldInputPlat() {
        return $('(//*[@data-testid="select-plate-number"])//*[@type="search"]')
    }
    get fieldInputDriver() {
        return $('(//*[@data-testid="select-driver"])//*[@type="search"]')
    }
    get statusOutgoing() { 
        return $('(//*[@class="ant-table-cell ant-table-cell-fix-right ant-table-cell-fix-right-first"])[2]/*')
    }
    get btnDikirimV4() {
        return $('(//*[@data-testid="button-solid-medium-dikirim"])[1]')
    }
    get btnSiapDikirimV4() {
        return $('(//*[@data-testid="button-solid-medium-siap-dikirim"])[1]')
    }
    get btnAssignKurir() {
        return $('(//*[@data-id="btn-assign-kurir"])')
    } 
    get cbOutgoingAll() {
        return $('(//*[@data-testid="checkbox-"])[1]')
    }
    get tanggalKirimV4() {
        return $('//span[@class="ant-select-selection-item" and @title="Besok"]');
    }

    get tanggalHariIni() {
        return $('//input[@type="radio" and @value="today"]')
    }

    get tanggalHariIniV4() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Hari Ini"]')
    }

    get inputKodeInvoice() {
        return $('//input[@placeholder="Kode Invoice" and @data-testid="search-bar"]');
    }

    get buttonDetailKodeInvoice() {
        return $('//button[@data-id="btn-search-detail-outgoing"]');
    }

    get inputKodeInvoiceV4() {
        return $('//input[@placeholder="Cari kode invoice"]');
    }

    get seeDetails() {
        return $('//a[@data-id="btn-detail-outgoing"]');
    }

    get checkbox() {
        return $('//input[@data-id="checkbox-0"]');
    }

    get checkboxV4() {
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[3]/div[2]/div[4]/div/div/div/div/div[2]/table/tbody/tr[2]/td[2]/label/span/input');
    }

    get detailOutgoing() {
        return $('//div[contains(@class, "Table_regular__xL3JO")]//button[span[text()="Detail Outgoing"]]');
    }

    get gantiVendor() {
        return $('(//*[@data-testid="button-outline-medium-ganti-vendor"])[1]');
    }

    get vendorTujuan() {
        return $('(//*[@class="ant-select-selection-search-input"])[4]')
    }

    public get vendorTujuanInhouseAllArea() {
        return $('//*[contains(text(), "INHOUSE ALL AREA")]');
    }
    
    public get alasan() {
        return $('(//*[@class="ant-select-selection-search-input"])[5]')
    }

    get alasanMinimalDrop() {
        return $('//*[contains(text(), "Minimal drop point tidak tercukupi")]')
    }

    // get btnGanti() {
    //     return $('(//*[contains(text(), "Ganti")])[3]')
    // }

    get assignKurir() {
        return $('(//*[@data-id="btn-assign-kurir"])')
    }

    get assignKurirV4() {
        return $('//*[@id="__next"]/div/div/main/div/footer/div/div/div[2]/button[3]');
    }

    get driver() {
        return $('//div[@data-id="dropdown-driver"]//input[@type="search"]');
    }

    get driverV4() {
        return $('(//*[@class="ant-select-selection-search-input"])[3]');
    }

    get driverKurirNF() {
        return $('//div[@class="ant-select-item ant-select-item-option" and @title="Kurir NF"]');
    }

    get noPlate() {
        return $('//div[@data-id="dropdown-plate-number"]//input[@type="search"]');
    }

    get noPlateV4() {
        return $('(//*[@class="ant-select-selection-search-input"])[5]');
    }

    get choosenPlate() {
        return $('//div[@class="ant-select-item ant-select-item-option" and @title="S9430NG"]')
    }

    get btnAssign() {
        return $('//div[@data-id="btn-submit-modal"]')
    }

    get btnAssignV4() {
        return $('//span[text()="Assign"]')
    }

    get btnSiapDikirim() {
        return $('//div[@data-id="btn-Siap Dikirim"]');
    }

    get btnUbahStatus() {
        return $('//button[span[text()="Ubah Status"]]')
    }

    get btnUbahStatusV4() {
        return $('//div[@class="ModalIllustration_modalDefaultFooter___8umW"]/*[1]')
    }

    get btnDikirim() {
        return $('//div[@data-id="btn-Dikirim"]')
    }
    
    get btnCancel() {
        return $('(//*[@data-id="btn-cancel-modal"])')
    }
    get btnGanti() {
        return $('(//*[@data-id="btn-submit-modal"])')
    }
    get btnGantiV4() {
        return $('(//*[@data-testid="button-solid-large-ganti"])')
    }
    // get btnDikirimV4() {
    //     return $('//div[@class="ant-col flex gap-size-8 css-1vp3ixv"]/*[4]')
    // }

    get btnUbahStatusDikirim() {
        return $('//button[@type="button"]//span[text()="Ubah Status"]')
    }

    //Detail Outgoing Goods Option
    get optHelper() {
        return $('(//*[@title="udin"])')
    }
    get optAlasan() {
        return $('(//*[@class="rc-virtual-list-holder-inner"])//*[@title="Order jumlah besar"]')
    }
    get optVendorTo() {
        return $('(//*[@class="rc-virtual-list-holder-inner"])//*[@title="INHOUSE ALL AREA"]')
    }

    get optHelperV4() {
        return $('(//*[@class="rc-virtual-list-holder-inner"])//*[@title="udin"]')
    }
    get optDriverSangar() { 
        return $('(//*[@title="SANGAR SURABAYA"])')
    }
    get optPlat() {
        return $('(//*[@title="S9430NG"])')
    }

    //Modal Detail Outgoing
    get btnUbahStatusModal() { 
        return $('(//*[@data-testid="button-solid-large-ubah-status"])[1]')
    }
    get btnTidakJadi() {
        return $('(//*[@data-testid="button-ghost-large-tidak-jadi"])[1]')
    }
}