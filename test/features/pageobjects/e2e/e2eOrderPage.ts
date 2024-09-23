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
        return $('//*[contains(text(), "Direct")]')
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
    public get namaProductModalMP() {
        return $('//input[@id="Produk"]');
    }
    public get inputSatuanModalMP() {
        return $('//span[@title=""]');
    }
    public get inputQtyModalMP() {
        return $('//input[@id="quantity"]');
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
    public get btnSubmitOrder(){
        return $('//*[@data-testid="btn-submit"]');
    }

    //section 3 option modal
    public get optNamaProduct() {
        return $('//*[contains(text(), "Abang Kopi Cap MJ (JGN DIPAKAI)")]');
    }
    public get optSatuanModalMP() {
        return $('//*[contains(text(), "Karton")]');
    }


    //Direct Order
    //section 1 detail
    
    public get alamatKirimDirect(){
        return $('//input[@id="Pilih alamat kirim"]');
    }
    public get agenPemesananDirect() {
        return $('//input[@id="Agen Pemesan"]');
    }
    public get tipePenjualanDirect() {
        return $('//span[@class="ant-select-selection-item" and @title="NON-RTP"]');
    }
    
    public get metodePembayaranDirect() {
        return $('//span[@class="ant-select-selection-item" and @title="COD"]')
    }
    public get tipePtDirect() {
        return $('//input[@id="Tipe PT"]');
    }
    public get superAgenDirect() {
        return $('//div[@class="s_2qdcJJli  s_PSIUVpV- "]/*[@id="Superagen"]');
    }
    public get agenPemesanDirect(){
        return $('//input[@id="Agen Pemesan"]');
    }
    public get btnTambahProduk() {
        return $('//button[@class="ant-btn ant-btn-default ant-btn-lg btn"]/*[contains(text(), "Tambah Produk")]');
    }
    public get inputSearch() {
        return $('//input[@placeholder="Cari kode penjualan"]');
    }

    //section 1 option
    public get optTipePTDirect() {
        return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-0"]');
    }
    public get optMetodePembayaran() {
        return $('//div[@data-id="undefined-1"]');
    }
    public get optTipePenjualanDirect() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="NON-RTP"]');
    }
    public get optAgenPemesanDirect() {
        return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-0"]');
    }
    public get optAlamatKirimDirect() {
        return $('//*[contains(text(), "Warung")]');
    }
    public get optSuperAgenDirect() {
        return $('//*[contains(text(), "Bobby")]');
    }


    //section 2 detail list
    public get tambahkanProdukDirect() {
        return $('//button[@class="ant-btn ant-btn-link"]/*[2]');
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
        return $('//ul[@role="listbox"]/*[contains(text(), "ABC Kecap Manis 135ml")]')
    }
    public get optSatuanModalDirect() {
        return $('//div[@data-id="undefined-0" and @title="Botol"]');
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
        return $('//*[@data-id="checkbox-0"]');
        
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

    public get Custom() {
        return $('//*[contains(text(), "Custom")]');
    }
    public get choosenDate() {
        return $('//td[@title="August 1, 2024"]');
    }
    public get detailOutgoingBtn() {
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-link ant-btn-sm Table_regularCellButton__Ad8rl Button_button__QU6uO Button_link__6Ik2O Button_small__YB_NF"])[2]');
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

    //Finance
    public get navMenuFinance() {
        return $('(//*[@class="ant-menu-submenu ant-menu-submenu-inline"])[5]');
    }

    public get menuSetoran(){
        return $('//*[@data-testid="menu-Setoran"]');
    }

    public get btnBuatSetoran(){
        return $('//*[@data-testid="btn-add-setoran"]');
    }

    public get pilihTipeOrder(){
        return $('(//*[@class="ant-select-selection-search-input"])[2]');
    }

    public get pilihInhouse(){
        return $('//*[contains(text(), "inhouse")]')
    }

    public get pilihVendor(){
        return $('(//*[@class="ant-select-item ant-select-item-option"])[1]')
    }

    public get pilihGudang(){
        return $('(//*[@class="ant-select-selection-search-input"])[3]');
    }

    public get pilihGudangAloha(){
        return $('(//*[@class="ant-select-item ant-select-item-option"])[3]')
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
}