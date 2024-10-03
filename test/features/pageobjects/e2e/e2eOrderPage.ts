import { firstLine, secondLine, thirdLine, fourthLine, fifthLine, sixthLine, seventhLine, eighthLine, invoiceNumber } from "../../step-definitions/e2e/e2eOrderStep";
export default new class e2eOrderPage {
    //Order menu
    public get navMenuOrder() {
        return $('//span[@data-testid="Menu-Order"]')
    }
    public get menuPenjualan() {
        return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-Penjualan"]');
    }
    public get btnAddOrder() {
        return $('//button[@id="btnAdd"]');
    }
    public get btnMarketPlace() {
        return $('//*[contains(text(), "MarketPlace")]');
    }
    public get btnDirect() {
        return $('(//*[@class="cursor-pointer"])[3]')
    }
    public get inputSearchList() {
        return $('//input[@placeholder="Cari kode penjualan"]');
    }
    public get textKodeTransaksi() {
        return $('//tbody[@class="ant-table-tbody"]/*[2]/*[4]/*/span');
    }
    public get textTitle() {
        return $('//section[@class="s_qzwtq9Zy"]');
    }
    public get textStatus() {
        return $('//tr[@data-row-key="1435418948"]/*[11]/*[2]'); //untuk assertion status order (getText)
    }
    public get filterGudangV3(){
        return $('(//*[@class="ant-btn ant-btn-default additionalButton bg-white h-12 w-full"])[2]');
    }
    //Order page footer button
    public get btnSimpanPage() {
        return $('//button[@data-testid="btn-submit"]')
    }
    public get btnCancelPage() {
        return $('//button[@data-testid="btn-cancel"]')
    }
    //Market Order
    //section 1 customer info
    public get agenPemesanMarketPlace(){
        return $('//input[@id="Agen Pemesan"]');
    }
    public get alamatKirimMarketPlace(){
        return $('//input[@id="Pilih alamat kirim"]');
    }
    public get superAgenMarketPlace(){
        return $('//input[@id="Superagen"]');
    }
    //section 1 option 
    public get optSuperAgenMarketPlace() {
        return $('//*[contains(text(), "Andy Muhammad Fahmi |  SF-46823")]');
    }
    public get optAgenPemesan() {
        return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-4"]');
    }
    public get optAlamatKirimMarketPlace() {
        return $('//*[contains(text(), "Alamat Utama")]');
    }
    //section 3 order item
    public get addProductMP(){
        return $('//button[span[text()=" Tambah Produk"]]');
    }
    public get editProductMP(){
        return $('//*[@data-testid="btn-edit-product"]');
    }
    public get namaProductModalMP() {
        return $('//input[@id="Produk"]');
    }
    public get namaProductModalMP2() {
        return $('//*[@class="s_2qdcJJli   w-full"]');
    }
    public get inputSatuanModalMP() {
        return $('//span[@title=""]');
    }
    public get inputQtyModalMP() {
        return $('//input[@id="quantity"]');
    }
    public get inputQtyModalMP2() {
        return $('(//input[@id="quantity"])[2]');
    }
    public get btnSimpanModalListMP() {
        return $('//span[@data-testid="btn-save"]');
    }
    public get btnSimpanModalMP() {
        return $('//button[@id="updateBtnEdit"]');
    }
    public get btnTambahProdukModalMP() {
        return $('//button[@class="ant-btn ant-btn-default ant-btn-lg btn"]/*[contains(text(), "Tambah Produk")]');
    }
    public get alertVoucherLepas() {
        return $('//*[@class="ant-notification-notice-description"]');
    }
    public get btnSubmitOrder(){
        return $('//*[@data-testid="btn-submit"]');
    }
    public get btnDeleteProductModal(){
        return $('(//*[@data-testid="btn-delete"])[2]');
    }
    //section 3 option modal
    public get optNamaProduct() {
        // return $('//*[contains(text(), "Abang Kopi Cap MJ (JGN DIPAKAI)")]');
        return $('//*[contains(text(), "ABC Kecap Manis 520ml")]');
    }
    public get optNamaProduct2() {
        return $('//*[contains(text(), "ABC Kecap Manis 135ml")]');
    }
    public get optNamaProduct3() {
        return $('//*[contains(text(), "ABC Kopi Susu 30g (PROMO")]');
    }
    public get optNamaProduct4() {
        return $('//*[contains(text(), "Testing Rokok")]');
    }
    public get optNamaProduct5() {
        return $('//*[contains(text(), "Cap Opung Beras 1kg")]');
    }
    public get optSatuanModalMP() {
        return $('//*[contains(text(), "Karton")]');
    }
    public get optSatuanModalMP2() {
        return $('//*[contains(text(), "Botol")]');
    }
    public get optSatuanModalMP3() {
        return $('//*[contains(text(), "Renceng")]');
    }
    public get optSatuanModalMP4() {
        return $('//*[contains(text(), "Pouch")]');
    }
    public get optSatuanModalMP5() {
        return $('//*[contains(text(), "Sak")]');
    }
    //voucher
    public get btnTambahVoucher(){
        return $('//button[span[text()=" Tambah Voucher"]]');
    }
    public get checkboxVoucher(){
        return $('//*[@class="ant-checkbox-input"]');
    }
    public get btnSimpanVoucher(){
        return $('//*[@class="ant-btn ant-btn-primary ant-btn-lg"]');
    }
    public get btnEditVoucher(){
        return $('(//*[@data-testid="btn-edit-product"])[2]');
    }
    //Direct Order
    //section 1 detail
    
    public get alamatKirimDirect(){
        return $('//input[@id="Pilih alamat kirim"]');
    }
    public get agenPemesanDirect() {
        return $('//input[@id="Agen Pemesan"]');
    }
    public get tipePenjualanDirect() {
        return $('//span[@class="ant-select-selection-item" and @title="NON-RTP"]');
    }
    public get optRTP(){
        return $('//*[@data-id="undefined-1"]');
    }
    
    public get metodePembayaranDirect() {
        return $('//span[@class="ant-select-selection-item" and @title="COD"]')
    }
    public get tipePtDirect() {
        return $('//input[@id="Tipe PT"]');
    }
    public get superAgenDirect() {
        return $('//input[@id="Superagen"]');
    }
    public get btnTambahProduk() {
        return $('//button[@class="ant-btn ant-btn-default ant-btn-lg btn"]/*[contains(text(), "Tambah Produk")]');
    }
    public get inputSearch() {
        return $('//input[@placeholder="Cari kode penjualan"]');
    }
    public get optTipePTDirect() {
        return $('//*[@id="react-autowhatever-1--item-4"]');
    }
    public get optMetodePembayaran() {
        return $('//div[@data-id="undefined-1"]');
    }
    public get optTipePenjualanDirect() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="NON-RTP"]');
    }
    public get optAgenPemesanDirect() {
        return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-4"]');
    }
    public get optAlamatKirimDirect() {
        return $('//*[contains(text(), "Alamat Utama")]');
    }
    public get optSuperAgenDirect() {
        return $('//*[contains(text(), "Bobby |  SF-195520")]');
    }
    //section 2 detail list
    public get addProductDirect(){
        return $('//*[@class="ant-btn ant-btn-link"]');
    }
    public get addProductModalDirect(){
        return $('(//*[@data-testid="btn-cancel"])[3]');
    }
    public get pilihProductModalDirect() {
        return $('//input[@id="Produk"]');
    }
    public get inputSatuanModalDirect() {
        return $('//span[@title=""]');
    }
    public get inputQtyModalDirect() {
        return $('//input[@id="qty"]');
    }
    // public get inputQtyModalDirect() {
    //     return $('//input[@id="quantity"]');
    // }
    public get btnModalSimpanListDirect() {
        return $('//span[@data-testid="btn-save"]');
    }
    public get btnModalSimpanDirect() {
        return $('//button[@id="updateBtnEdit"]');
    }
    public get btnModalTambahProdukDirect() {
        return $('//button[@class="ant-btn ant-btn-default ant-btn-lg btn"]/*[contains(text(), "Tambah Produk")]');
    }
    // section 2 order list option 
    public get optPilihProductModalDirect() {
        return $('//ul[@role="listbox"]/*[contains(text(), "Supercow")]')
    }
    public get optSatuanModalDirect() {
        return $('//div[@data-id="undefined-0" and @title="Karton"]');
    }
    //select gudang
    public get selectGudang(){
        return $('(//*[@class="ant-btn ant-btn-default additionalButton bg-white h-12 w-full"])[2]');
    }
    public get optGudangAlohaRTP(){
        return $('(//*[@class="ant-radio-input"])[3]');
    }
    public get applyGudang(){
        return $('//*[@data-id="filter-apply-button"]');
    }
    //edit order
    public get btnEditOrder(){
        return $('//*[@data-testid="btn-submit"]');
    }
    public get btnUpdateOrder(){
        return $('//*[@data-testid="btn-submit"]');
    }
    public get btnConfirmUpdateOrder(){
        return $('//*[@class="ant-btn ant-btn-default ant-btn-sm ant-btn-block s_wvibGNsL undefined s_Ct2S1-z5"]');
    }
    // select specific order
    public get selectOrderNewest(){
        return $('(//span[contains(@id, "detail-invoice-penjualan-")])[1]')
    }
    public get searchTransaction(){
        return $('//*[@placeholder="Cari kode penjualan"]');
    }
    //Out Going Goods menu
    public get navMenuLogistic() {
        return $('(//*[@class="ant-menu-submenu-title"])[10]');
    }
    public get menuOutgoingGoods() {
        return $('//*[@data-testid="menu-Outgoing Goods V4"]');
    }
    public get kategoriPeriod() {
        return $('//*[@data-id="period"]');
    }
    public get periodHariIni(){
        return $('//*[@value="today"]');
    }
    public get terapkanBtn(){
        return $('//*[@data-id="filter-apply-button"]');
    }
    public get searchBtnOutgoingGoods() {
        return $('//*[@data-id="btn-search-outgoing"]');
    }
    public get enterSearchBtn(){
        return $('//*[@data-id="enter-btn"]');
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
        return $('//*[@data-id="btn-detail-outgoing"]');
    }
    public get checkbox() {
        return $('(//*[@data-testid="checkbox-"])[2]');
        
    }
    // public get inputSearchDetail() {
    //     return $('//input[@placeholder="Cari kode transaksi"]');
    // }
    public get checkBox() {
        return $('(//*[@class="ant-checkbox-input"])[2]');
    }
    public get btnSiapDikirim() {
        return $('//*[@class="ant-btn css-1vp3ixv ant-btn-primary Button_button__QU6uO Button_solid__yWcC4 Button_medium__hRLU4"]');
    }
    public get btnDikirim() {
        return $('//*[@class="ant-btn css-1vp3ixv ant-btn-primary Button_button__QU6uO Button_solid__yWcC4 Button_medium__hRLU4"]');
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
        return $('//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"]')
    }
    public get tabMotor() {
        return $('(//*[@class="Tabs_label__kDTL_"])[2]')
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
        return $('//*[@placeholder="Cari kode invoice"]'); 
    }
    public get tanggalKirim() {
        return $('(//*[@class="ant-select-selector"])[2]');
    }
    public get pilihHariIni(){
        return $('//*[@title="Hari Ini"]');
    }
    public get pilihFilterGudang(){
        return $('(//*[@class="ant-tag Table_filterItem__x3tSg Chips_container__Uk_w2 Chips_large__DNi_I css-1vp3ixv"])[1]');
    }
    public get pilihFilterGudangSetoran(){
        return $('(//*[@data-testid="chip-large-gudang-aloha"])[2]');
    }
    public get pilihFilterGudangCompleteOrder(){
        return $('(//*[@class="ant-tag Table_filterItem__x3tSg Chips_container__Uk_w2 Chips_large__DNi_I css-1vp3ixv"])[3]');
    }
    public get pilihFilterGudangAlohaRTP(){
        return $('(//*[@class="ant-radio-input"])[3]');
    }
    public get btnApplyFilterModal(){
        return $('//*[@data-testid="modal-apply-filter"]');
    }
    public get Custom() {
        return $('//*[contains(text(), "Custom")]');
    }
    public get choosenDate() {
        return $('//td[@title="August 1, 2024"]');
    }
    public get detailOutgoingBtn() {
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-link ant-btn-sm Table_regularCellButton__Ad8rl Button_button__QU6uO Button_link__6Ik2O Button_small__YB_NF"])[2]');
    }
    public get detailOutgoingBtn2() {
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-link ant-btn-sm Table_regularCellButton__Ad8rl Button_button__QU6uO Button_link__6Ik2O Button_small__YB_NF"])[1]');
    }
    public get gantiVendor() {
        return $('//*[@data-testid="button-outline-medium-ganti-vendor"]');
    }
    public get vendorTujuan() {
        return $('(//*[@class="ant-select ant-select-outlined ant-select-compact-item ant-select-compact-first-item ant-select-compact-last-item css-1vp3ixv ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-show-search"])[1]');
    }
    public get optVendor(){
        return $('//*[@title="INHOUSE MOTORIS AGUS RTP"]');
    }
    public get alasan() {
        return $('(//*[@class="ant-select ant-select-outlined ant-select-compact-item ant-select-compact-first-item ant-select-compact-last-item css-1vp3ixv ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-show-search"])[1]')
    }
    public get optAlasan(){
        return $('//*[@title="Order jumlah besar"]');
    }
    public get btnGanti() {
        return $('//*[@data-testid="button-solid-large-ganti"]'); 
    }
    public get btnCancel() {
        return $('//div[@data-id="btn-cancel-modal"]');
    }
    public get btnFilter() {
        return $('//button[@data-id="filter-modal-trigger"]');
    }
    public get btnBack(){
        return $('//*[@data-testid="page-header-back-btn"]');
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
    //Finance
    public get navMenuFinance() {
        return $('(//*[@class="ant-menu-submenu ant-menu-submenu-inline"])[5]');
    }
    public get menuSetoran(){
        return $('//*[@data-testid="menu-Setoran"]');
    }
    public get menuSetoranV4(){
        return $('//*[@data-testid="Menu-Setoran"]');
    }
    public get btnBuatSetoran(){
        return $('//*[@data-testid="btn-add-setoran"]');
    }
    public get pilihTipeOrder(){
        return $('(//*[@class="ant-select-selection-search-input"])[2]');
    }
    public get pilihInhouse(){
        return $('//*[contains(text(), "inhouse")]');
    }
    public get pilihVendor(){
        return $('(//*[@class="ant-select-item ant-select-item-option"])[1]');
    }
    public get pilihGudang(){
        return $('(//*[@class="ant-select-selection-search-input"])[3]');
    }
    public get pilihGudangAloha(){
        return $('(//*[@class="ant-select-item ant-select-item-option"])[3]');
    }
    public get pilihGudangAlohaRTP(){
        return $('(//*[@class="ant-select-item ant-select-item-option"])[4]');
    }
    public get pilihKurirVendor(){
        return $('(//*[@class="ant-select-selection-search-input"])[4]');
    }
    public get pilihInhouseMotoris(){
        return $('//*[@class="ant-select-dropdown ant-slide-up-leave ant-slide-up-leave-active ant-slide-up Dropdown_options__yAHra css-1vp3ixv ant-select-dropdown-placement-bottomLeft"]');
    }
    public get btnImportCSV(){
        return $('//*[@data-testid="btn-import-csv"]');
    }
    public get uploadFileCSV(){
        return $('//*[@class="css-f7vrd6 ant-upload ant-upload-drag"]');
        return $('//*[@class="ant-upload-drag-container"]');
    }
    public get fileCSV(){
        return $('//*[@data-testid="form-file-import"]');
    }
    public get submitCSV(){
        return $('//*[@id="submit-import"]');
    }
    public get btnSetor(){
        return $('//*[@data-testid="btn-setor"]');
    }
    public get btnConfirmSetor(){
        return $('//*[@data-testid="btn-submit"]')
    }
    public get checkboxInvoice(){
        return $('(//*[@class="ant-checkbox-input"])[2]');
    }
    public get tabInvoiceSudahDisetor(){
        return $('(//*[@class="Tabs_label__kDTL_"])[2]');
    }
    public get inputSearchKodeInvoiceSudahDisetor() { return $('(//*[@placeholder="Cari Kode Setoran / Kode Invoice"])[2]');
    }
    public get btnSelesaikanPesanan(){
        return $('//*[@data-testid="btn-complete-transaction"]');
    }
    public get uploadBuktiBayar(){
        return $('//*[@class="ant-upload"]');
    }
    public get buktiBayar(){
        return $('//*[@data-testid="upload-image"]');
    }
    public get btnUploadBuktiBayar(){
        return $('//*[@data-testid="btn-submit"]');
    }
    public get btnConfirmCompleteTransaction(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"])[3]');
    }
    public get menuCompleteOrder(){
        return $('//*[@data-testid="Menu-CompleteOrder"]');
    }
    public get inputSearchKodeBulkInvoice() { return $('//*[@placeholder="Cari Kode Invoice / bulk invoice"]');
    }
    public get btnDetailBulkInvoice(){
        return $('//*[@class="ant-btn css-1vp3ixv ant-btn-link ant-btn-sm Table_regularCellButton__Ad8rl Button_button__QU6uO Button_link__6Ik2O Button_small__YB_NF"]');
    }
    public get btnSimpanCompleteOrder(){
        return $('//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"]');
    }
    public get btnConfirmCompleteOrder(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"])[2]');
    }
    public get menuFinance(){
        return $('(//*[@class="ant-menu-submenu-title"])[5]');
    }

    //stock

    public get navMenuStock() {
        return $('(//*[@class="ant-menu-submenu ant-menu-submenu-inline"])[7]');
    }

    public get menuMutasiStockV4(){
        return $('//*[@data-testid="menu-Mutasi Stock V4"]');
    }

    public get pilihGudangCekMutasiStock(){
        return $('(//*[@class="ant-select-selection-search-input"])[2]')
    }

    public get pilihGudangAlohaCekMutasiStock(){
        return $('(//*[@title="Aloha"])[2]')
    }

    public get pilihProdukCekMutasiStock(){
        return $('(//*[@class="ant-select-selection-search-input"])[3]')
    }

    public get pilihSemuaProdukCekMutasiStock(){
        return $('(//*[@title="Semua"])[2]');
    }

    public get btnTampilkanMutasiStock(){
        return $('//*[@data-testid="button-solid-medium-tampilkan"]');
    }

    public get dataPageMutasiStock(){
        return $('(//*[@class="ant-select-selector"])[6]');
    }

    public get show100DataPerPageMutasiStock(){
        return $('//*[@title="100 / page"]');
    }

    //voucher
    public get allProductVoucher() {
        return $(`//tr[.//span[text()="${firstLine}"]]//input[@class="ant-checkbox-input"]`);
    }

    public get allProductExceptVoucher() {
        return $(`//tr[.//span[text()="${secondLine}"]]//input[@class="ant-checkbox-input"]`);
    }

    public get allProductExceptSpecialVoucher() {
        return $(`//tr[.//span[text()="${thirdLine}"]]//input[@class="ant-checkbox-input"]`);
    }

    public get allProductExceptCigaretteVoucher() {
        return $(`//tr[.//span[text()="${fourthLine}"]]//input[@class="ant-checkbox-input"]`);
    }

    public get andVoucher() {
        return $(`//tr[.//span[text()="${fifthLine}"]]//input[@class="ant-checkbox-input"]`);
    }

    public get orVoucher() {
        return $(`//tr[.//span[text()="${sixthLine}"]]//input[@class="ant-checkbox-input"]`);
    }

    public get andSpecialVoucher() {
        return $(`//tr[.//span[text()="${seventhLine}"]]//input[@class="ant-checkbox-input"]`);
    }

    public get orSpecialVoucher() {
        return $(`//tr[.//span[text()="${eighthLine}"]]//input[@class="ant-checkbox-input"]`);
    }
    public get successAlert() {
        return $('//*[@class="ant-notification-notice-description"]')
    }
}

