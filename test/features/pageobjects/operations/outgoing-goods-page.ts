import { $ } from '@wdio/globals';

export default new class outgoingGoodsPage {

    //List 
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
        return $('(//*[@class="s_qzwtq9Zy"])')
    }
    get tanggalKirim() {
        return $('//button[@data-id="period"]');
    }
    get inputDetailKodeInvoice() {
        return $('//input[@placeholder="Kode Invoice"]');
    }
    get inputKodeTransaksi() {
        return $('//input[@placeholder="Cari kode transaksi"]');
    }

    //Filter option
    get btnTerapkan() {
        return $('(//*[@data-id="filter-apply-button"])')
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



    //Alert
    get erorValidation() {
        return $('(//*[@class="s_RR3nZRCC"])')
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

    get terapkan() {
        return $('//button[@data-id="filter-apply-button"]')
    }

    get buttonKodeInvoice() {
        return $('//button[@data-id="btn-search-outgoing"]');
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

    get cariKodeInvoice() {
        return $('//span[@data-id="enter-btn"]');
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
        return $('//*[contains(text(), "Ganti Vendor")]');
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

    get btnGanti() {
        return $('(//*[contains(text(), "Ganti")])[3]')
    }

    get assignKurir() {
        return $('//div[@data-id="btn-assign-kurir"]')
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

    get btnSiapDikirimV4() {
        return $('//*[@class="ant-col flex gap-size-8 css-1vp3ixv"]/*[4]');
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

    get btnDikirimV4() {
        return $('//div[@class="ant-col flex gap-size-8 css-1vp3ixv"]/*[4]')
    }

    get btnUbahStatusDikirim() {
        return $('//button[@type="button"]//span[text()="Ubah Status"]')
    }

}