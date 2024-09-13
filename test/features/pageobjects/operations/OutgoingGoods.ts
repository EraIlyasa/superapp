export default new class OutgoingGoods {
    public get logistikModul() {
        return $('//span[@data-testid="Menu-Logistic"]');
    }


    //Out Going Goods menu
    public get outGoingGoodsMenu() {
        return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-OutgoingGoods V4"]');
    }
    public get inputSearch() {
        return $('//input[@class="ant-input ant-input-sm css-1vp3ixv"]'); //('//span[@class="ant-input-affix-wrapper ant-input-affix-wrapper-sm css-1vp3ixv ant-input-borderless"]');
    }
    public get tglKirim() {
        return $('//span[@class="ant-select-selection-item" and @title="Besok"]');
    }
    public get customTgl() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Custom"]')
    }
    public get choosenTglKirim() {
        return $('//td[@title="2024-08-01"]')
    }
    public get detailOutgoing() {
        return $('//div[@class="Table_regular__xL3JO"]/*/*[contains(text(), "Detail Outgoing")]');
    }
    public get checkbox() {
        return $('//span[@class="ant-checkbox"]/*[@data-id="checkbox-0"]');
    }
    // public get inputSearchDetail() {
    //     return $('//input[@placeholder="Cari kode transaksi"]');
    // }
    public get checkBox() {
        return $('//tr[@data-row-key="1435418983"]/*[2]/*');
    }
    public get btnSiapDikirim() {
        return $('//div[@data-id="btn-Siap Dikirim"]');
    }
    public get btnDikirim() {
        return $('//div[@class="ant-col flex gap-size-8 css-1vp3ixv"]/*[4]');
    }
    public get assignKurir() {
        return $('//div[@data-id="btn-assign-kurir"]'); //('//div[@class="ant-col flex gap-size-8 css-1vp3ixv"]/*[3]');
    }
    public get driver() {
        return $('//div[@class="ant-select-selector"]/*[2][contains(text(), "Pilih driver")]');
    }
    public get choosenDriver() {
        return $('//div[@title="SANGAR SURABAYA"]')
    }
    public get noPlate() {
        return $('//div[@class="ant-select-selector"]/*[2][contains(text(), "Pilih nomor plat kendaraan")]');
    }
    public get choosenPlate() {
        return $('S9430NG//div[@title="S9430NG"]')
    }
    public get btnAssign() {
        return $('//div[@data-id="btn-submit-modal"]'); //('//div[@class="ModalHalfFrame_footerRight__zutId"]/*[@type="button"]');
    }
    public get btnUbahStatus() {
        return $('//div[@class="ModalIllustration_modalDefaultFooter___8umW"]/*[1]')
    }
    public get tabMotor() {
        return $('//div[@class="Tabs_label__kDTL_"]/*[contains(text(), "Motor")]')
    }
    public get tabMobil() {
        return $('//div[@data-node-key="car"]')
    }
    public get openSearchBtn() {
        return $('//button[@data-id="btn-search-outgoing"]')
    }
    public get openSearchDetailBtn() {
        return $('//button[@data-id="btn-search-detail-outgoing"]');
    }
    public get inputSearchKodeInvoice() {
        return $('//input[@placeholder="Kode Invoice"]'); 
    }
    public get btnCari() {
        return $('//button[@type="button"]/*[@data-id="enter-btn"]');
    }
    public get tanggalKirim() {
        return $('//div[@data-node-key="period"]');
    }
    public get Custom() {
        return $('//*[contains(text(), "Custom")]');
    }
    public get choosenDate() {
        return $('//td[@title="August 1, 2024"]');
    }
    public get seeDetailsBtn() {
        return $('//a[@data-id="btn-detail-outgoing"]');
    }
    public get gantiVendor() {
        return $('//div[@data-id="btn-ganti-vendor"]');
    }
    public get vendorTujuan() {
        return $('//*[contains(text(), "Pilih Vendor")]');
    }public get alasan() {
        return $('//*[contains(text(), "Pilih alasan vendor diganti")]')
    }
    public get btnGanti() {
        return $('//div[@data-id="btn-submit-modal"]'); 
    }
    public get btnCancel() {
        return $('//div[@data-id="btn-cancel-modal"]');
    }
    public get btnFilter() {
        return $('//button[@data-id="filter-modal-trigger"]');
    }


    //modal Filter 
    public get tglKirimModal() {
        return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="warehouse_id"]');
    }
    public get gudangModal() {
        return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="period"]');
    }
    public get tipeVendorModal() {
        return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="vendor_type"]');
    }
    public get cityModal() {
        return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="city"]');
    }
    public get kecamatanModal() {
        return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="district"]');
    }
    public get btnTerapkan() {
        return $('//button[@data-id="filter-apply-button"]'); //('//button[@type="button" ]/*[contains(text(), "Terapkan")]');
    }

    //tanggal kirim custom option
    public get startDateTglKirimModal() {
        return $('//input[@id="date-range-start"]')
    }
    public get endDateTglKirimModal() {
        return $('//input[@id="date-range-end"]')
    }

    //tanggal kirim modal list
    public get hariIniTglKirimModal() {
        return $('//div[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Hari ini")]')
    }
    public get besokTglKirimModal() {
        return $('//div[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Besok")]')
    }
    public get kemarinTglKirimModal() {
        return $('//div[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Kemarin")]')
    }
    public get customTglKirimModal() {
        return $('//div[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Custom")]')
    }




    //tambahkan assert for status dikirim 

    //Expect
    public get title() {
        return $('//div[@class="flex gap-size-16"]');
    }
    public get statusPengiriman() {
        return $('//tbody[@class="ant-table-tbody"]/*[2]/*[11]/*[2]/*');
    }
}