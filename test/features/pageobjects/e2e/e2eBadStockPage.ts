export default new class e2eBadStockPage {

    //Menu Stock Bermasalah
    
    public get menuStockBermasalahV4() { 
        return $('//*[@data-testid="Menu-StokBermasalah V4"]'); 
    }
    //List 
    public get btnCreateStokBermasalah() {
        return $('//*[@data-testid="btn-create-bad-stock"]');
    }
    public get fieldInputSearch() {
        return $('//*[@data-testid="search-bar"]');
    }
    public get btnCari() {
        return $('//*[@id="searchBar"]/div/span/span/span[2]/button');
    }
    public get filterGudang() {
        return $('//*[@data-testid="btn-filter-warehouse"]');
    }
    public get filterPeriode() {
        return $('data-testid="btn-filter-period"');
    }
    public get filterTipeStok() {
        return $('//*[@data-testid="btn-filter-type"]');
    }
    public get filterStatus() {
        return $('//*[@data-testid="btn-filter-status"]');
    }
    public get btnExport() {
        return $('//*[@data-testid="export-csv-bad-stock"]');
    }
    public get tabDaftarPengajuan() {
        return $('//*[@data-node-key="daftar-pengajuan"]');
    }
    public get btnExpand() {
        return $('//*[@id="rc-tabs-3-panel-daftar-pengajuan"]/div[1]//div/table/tbody/tr[2]/td[1]/button');
    }
    public get source() {
        return $('//*[@data-testid="source-0"]');
    }
    public get kodeNG() {
        return $('//*[@id="rc-tabs-2-panel-daftar-pengajuan"]//div[1]//div/table/tbody/tr[2]/td[3]/a');
    }
    public get colStatus() {
        return $('//*[@id="rc-tabs-3-panel-daftar-pengajuan"]/div/div[1]//div/table/tbody/tr[2]/td[7]/div/span');
    }
    public get btnPrint() {
        return $('//*[@data-testid="btn-print"]');
    }
    public get tabSkuStokRusak() {
        return $('//*[@data-node-key="list-badstock"]');
    }
    public get colTotalNG() {
        return $('//*[@id="rc-tabs-3-panel-list-badstock"]/div/div[1]//div/table/tbody/tr[2]/td[6]/div[2]');
    }
    public get tabSkuStokRetur() {
        return $('//*[@id="tabs-parent-container"]/div/div[1]/div[1]/div/div[3]');
    } 
    public get colTotalNGRetur () {
        return $('//*[@id="rc-tabs-3-panel-list-returnstock"]/div[1]//div/table/tbody/tr[3]/td[6]/div[2]');
    }

    //Create Bad Stock
    public get btnSimpan() { return $('//*[@data-testid="btn-create"]'); }
    public get btnBatal() { return $('//*[@data-testid="btn-back"]'); }
    public get btnYaSimpanModal() { return $('//*[@class="ModalIllustration_modalDefaultFooter___8umW"]/*[1]'); }
    public get btnKembaliModal() { return $('//*[@class="ModalIllustration_modalDefaultFooter___8umW"]/*[2]'); }

    //Section 1 Detail
    public get radioBtnFG() { return $('//*[@class="ant-radio-wrapper ant-radio-wrapper-checked Radio_radioContainer__zOW35 css-1vp3ixv"]'); }
    public get radioBtnRM() { return $('//*[@class="ant-radio-wrapper Radio_radioContainer__zOW35 css-1vp3ixv"]'); }
    public get fieldInputGudang() { return $('(//*[@class="ant-select-selection-search-input"])[2]'); }

    //Section 1 option
    public get optGudang0() { return $('(//*[@title="Aloha"])[2]'); }

    //Section 2 Daftar Produk Bermasalah
    public get btntambahProduk() { return $('//*[@data-testid="btn-add-product"]'); }

    //Section 2 Modal 
    public get radioBtnNonPRO() { return $('(//*[@class="ant-radio-wrapper ant-radio-wrapper-checked Radio_radioContainer__zOW35 css-1vp3ixv"])[2]'); }
    public get radioBtnPRO() { return $('(//*[@class="ant-radio-wrapper Radio_radioContainer__zOW35 css-1vp3ixv"])[2]'); }
    public get fieldNamaProduk() { return $('(//*[@class="ant-select-selection-search"])[3]'); }
    public get optNamaProduk0() { return $('(//*[@title="Teh Pucuk 350ml"])'); }
    public get fieldKodeSumber() { return $('(//*[@class="ant-select-selection-overflow"])'); }
    public get optKodeSumber0() { return $('(//*[@title="POP2402-393"])'); }
    public get fieldInputQty() { return $('(//*[@class="ant-input-number-input"])'); }
    public get imgUploadModal() { return $('(//*[@data-testid="proof-photo-product"])'); }
    public get fieldInputCatatanModal() { return $('(//*[@placeholder="ketik catatan stok bermasalah"])'); }
    public get deleteIconModal() { return $('(//*[@class="text-danger-50 cursor-pointer align-center"])'); }
    public get btnSimpanModal() { return $('(//*[@data-testid="btn-submit-product"])'); }
    public get btnTambahProdukModal() { return $('(//*[@data-testid="btn-add-new-product"])'); }
    public get btnCancelModal() { return $('(//*[@data-testid="btn-cancel-modal"])'); }

    // Section 3 Dokumen 
    public get menuPermintaanBarang() { return $('//*[@data-node-key="permintaan_barang"]'); }
    public get menuBuktiAlokasiBarang() { return $('//*[@data-node-key="proof_allocation"]'); }
    public get imgUploadPB() { return $('//*[@data-testid="bad-stock-request-doc"]'); }
    public get imgUploadBAB0() { return $('//*[@data-testid="bad-stock-proof-allocation-0"]'); }
    public get imgUploadBAB1() { return $('//*[@data-testid="bad-stock-proof-allocation-1"]'); }
    public get imgUploadBAB2() { return $('//*[@data-testid="bad-stock-proof-allocation-2"]'); }
    public get imgUploadBAB3() { return $('//*[@data-testid="bad-stock-proof-allocation-3"]'); }


    //Menu Inventory
    public get navMenuStock() { return $('//*[@data-testid="Menu-Stock"]'); }
    public get menuInventory() { return $('//*[@data-testid="Menu-InventoryV3"]'); }
    public get btnSearch() { return $('//*[@id="btnSearch"]'); }
    public get fieldInputSearchStock() { return $('//*[@placeholder="Cari Nama Product"]'); }
    public get btnCariStock() { return $('//*[@data-id="enter-btn"]'); }
    public get btnExpandSG() { return $('//*[@data-id="btn-expand-stock-warehouse"]'); }
    public get btnExpandSLG() { return $('//*[@data-id="btn-expand-stock-out-warehouse"]'); }
    public get textStokBlmRilis() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[6]/*[1]'); } //*[@data-id="btn-unreleased-stock-0"]
    public get textStokTemporary() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[14]/*[1]'); } //*[@data-id="btn-temporary-stock-0"]
    public get textStokRusak() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[15]/*[1]'); } //*[@data-id="btn-bad-stock-0"]
    public get textStokRetur() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[16]/*[1]'); } //*[@data-id="btn-retur-stock-0"]
    public get loadingScreen() { return $('//*[@class="s_Z-4M6HSt"]'); }

    //raw material v3
    public get menuRawMaterialV3 () {
        return $('//*[@data-testid="Menu-RawMaterial V3"]');
    }
    public get menuRawMaterialV3_2 () {
        return $('//*[@data-testid="menu-Raw Material V3"]');
    }
    public get btnCreateRM() {
        return $('//*[@id="product-create-btn"]');
    }
    public get imgUploadRM() {
        return $('//*[@class="ant-upload"]');
    }
    public get gambarProdukRM() {
        return $('//*[@id="img-upload"]');
    }
    public get pilihMerek() {
        return $('//input[@placeholder="--Pilih Merek--"]');
    }
    public get inputNama() {
        return $('//input[@placeholder="Nama Produk..."]');
    }
    public get pilihKategori() {
        return $('//input[@placeholder="--Pilih Kategori--"]');
    }
    public get btnTambahAttribute() {
        return $('//*[@data-testid="btn-add-attribute"]');
    }
    public get inputSatuan() {
        return $('//input[@placeholder="Pilih Satuan"]');
    }
    public get inputKonversi() {
        return $('//input[@id="conversion"]');
    }
    public get inputIsi() {
        return $('//input[@id="input-product-content"]');
    }
    public get btnSimpanAttribute() {
        return $('//*[@data-testid="btn-start-searching"]');
    }
    public get btnSimpanRM() {
        return $('//*[@data-testid="btn-save"]');
    }

    //purchase order v3
    public get menuPurchasingV3() {
        return $('(//*[@class="ant-menu-submenu ant-menu-submenu-inline"])[4]');
    }
    public get menuPurchaseOrderV3() {
        return $('//*[@data-testid="menu-Purchase Order V3"]');
    }
    public get btnCreatePO() {
        return $('//*[@id="purchase-create-btn"]');
    }
    public get selectJenisPO() {
        return $('(//*[@class="ant-select-selector"])[1]');
    }
    public get optJenisPORawMaterial() {
        return $('(//*[@class="ant-select-item-option-content"])[2]');
    }
    public get selectGudang() {
        return $('(//*[@class="ant-select-selector"])[2]');
    }
    public get optGudangSumberPangan() {
        return $('(//*[@class="ant-select-item-option-content"])[12]');
    }
    public get optGudangAloha() {
        return $('(//*[@class="ant-select-item-option-content"])[3]');
    }
    public get selectTipePT() {
        return $('//*[@data-testid="warehouse_company_id"]');
    }

    public get selectSupplier() {
        return $('//*[@data-testid="supplier_id"]');
    }
    public get selectTanggalKirim() {
        return $('//input[@id="tanggal-kirim-dropdown"]');
    }
    public get selectToday() {
        return $('//*[@class="ant-picker-today-btn"]')
    }
    public get selectMetodeBayar() {
        return $('(//*[@class="ant-select-selector"])[3]')
    }
    public get optMetodeBayarCOD() {
        return $('(//*[@class="ant-select-item-option-content"])[14]')
    }
    public get selectPengiriman() {
        return $('(//*[@class="ant-select-selector"])[4]')
    }
    public get optPengirimanLocco() {
        return $('(//*[@class="ant-select-item-option-content"])[16]')
    }
    public get selectPIC() {
        return $('//*[@data-testid="pic"]');
    }
    public get selectBankSupplier() {
        return $('//*[@data-testid="supplier_bank_id"]');
    }
    public get btnTambahProdukPO() {
        return $('//*[@data-testid="btn-add-product"]');
    }
    public get inputNamaProduk() {
        return $('//*[@data-testid="product_id"]');
    }
    public get selectSatuan() {
        return $('(//*[@class="ant-select-selector"])[6]')
    }
    public get inputQty() {
        return $('(//input[@class="ant-input-number-input"])[3]')
    }
    public get inputHargaSatuan() {
        return $('(//input[@class="ant-input-number-input"])[4]')
    }
    public get btnSimpanTambahProduk() {
        return $('//*[@data-testid="btn-start-searching"]');
    }
    public get imgUploadNotaPengajuan() {
        return $('//*[@class="ant-upload"]')
    }
    public get gambarNotaPengajuan() {
        return $('//*[@id="filing_note_docs"]')
    }
    public get btnSimpanPO() {
        return $('//*[@data-testid="btn-save"]');
    }
    public get kodePO() {
        return $('(//td[@class="ant-table-cell"]/span)[2]')
    }
    public get btnDetailPO() {
        return $('//*[@id="purchase-po-code-0"]')
    }
    public get btnRequestPrepayment() {
        return $('(//*[@class="PurchaseOrder_btnExportPo__Oc06b PurchaseOrder_ml2__o4l2t"])[1]')
    }
    public get btnSimpanRequestPrepayment() {
        return $('//*[@data-testid="btn-start-searching"]');
    }

    //incoming goods v3
    public get menuLogisticV3_1() {
        return $('(//*[@class="ant-menu-submenu ant-menu-submenu-inline"])[9]');
    }
    public get menuLogisticV3_2() {
        return $('(//*[@class="ant-menu-submenu ant-menu-submenu-inline"])[10]');
    }
    public get filterGudangV3() {
        return $('(//*[@class="ant-btn ant-btn-default Modal_filterButton__kNBQ1"])[1]');
    }
    public get warehouseSumberPangan() {
        return $('//label[span[text()="CV Sumber Pangan"]]');
    }
    public get btnTerapkanFilterWarehouse() {
        return $('//*[@data-testid="filter-apply-button"]');
    }
    public get btnSearchV3() {
        return $('//*[@data-testid="search-bar-icon-closed"]');
    }
    public get searchBarV3() {
        return $('//input[@data-id="search-bar"]');
    }
    public get searchBarV3_2() {
        return $('//input[@data-testid="search-bar"]');
    }
    public get searchBarIncomingChecker() {
        return $('//input[@data-testid="search-bar"]');
    }
    public get btnCariV3() {
        return $('//*[@data-id="enter-btn"]');
    }
    public get btnAmbilAntrian() {
        return $('//*[@data-id="get-queue-0"]');
    }
    public get btnAmbilAntrian_2() {
        return $('(//*[@class="cursor-pointer"])[3]');
    }
    public get imgUploadSuratJalan() {
        return $('//*[@class="ant-upload"]');
    }
    public get gambarSuratJalan() {
        return $('//*[@data-testid="upload-queue"]');
    }
    public get inputNamaDriver() {
        return $('//input[@id="inputDriverName"]');
    }
    public get btnCheckIn() {
        return $('//*[@data-testid="btn-submit"]');
    }
    public get menuIncomingChecker() {
        return $('//*[@data-testid="menu-Incoming Checker"]');
    }
    public get btnInputIncomingV3() {
        return $('//*[@data-testid="input-incoming"]');
    }
    public get btnInputIncomingV3_2() {
        return $('(//*[@class="ant-btn ant-btn-text ant-btn-icon-only"])[6]');
    }
    public get addProductInputIncoming() {
        return $('//*[@data-testid="btn-add-product"]');
    }
    public get imgUploadProductIncoming() {
        return $('//*[@class="ant-upload"]');
    }
    public get gambarProductIncoming() {
        return $('//*[@data-testid="upload-image"]');
    }
    public get selectProductIncoming() {
        return $('(//*[@class="ant-select-selection-item"])[1]');
    }
    public get selectUnitIncoming() {
        return $('(//*[@class="ant-select-selection-item"])[2]');
    }
    public get inputQuantityIncoming() {
        return $('//input[@data-id="input-qty"]');
    }
    public get selectProductionDate() {
        return $('//*[@data-id="production-date-0"]');
    }
    public get selectProductionDateToday() {
        return $('//*[@data-id="btn-today"]');
    }
    public get btnSubmitIncomingModal() {
        return $('//*[@data-id="btn-submit-swipeable"]');
    }
    public get btnConfirmSubmitIncomingModal() {
        return $('//*[@data-id="btn-update-status"]');
    }
    public get btnValidasiChecker() {
        return $('//*[@data-id="validate-checker-0"]');
    }
    public get btnValidasiChecker_2() {
        return $('(//*[@class="cursor-pointer"])[7]');
    }
    public get btnSubmitValidasiIncoming() {
        return $('//*[@class="rounded-lg bg-[#406ae2] text-white text-center p-3 font-semibold"]');
    }
    public get menuIncomingGoodsV3() {
        return $('//*[@data-testid="Menu-IncomingGoods"]')
    }
    public get menuIncomingGoodsV3_2() {
        return $('//*[@data-testid="menu-Incoming Goods"]')
    }
    public get tabReturSupplierV3() {
        return $('//*[@data-testid="returnSupplier"]')
    }
    public get tabReturSupplierIncomingCheckerV3() {
        return $('//*[@data-node-key="retur_supplier"]')
    }

    //stock v3
    public get menuStockV3() {
        return $('(//*[@class="ant-menu-submenu ant-menu-submenu-inline"])[7]');
    }
    public get menuStokBermasalah() {
        return $('//*[@data-testid="menu-Stok Bermasalah"]');
    }
    public get btnTambahStokBermasalah() {
        return $('//*[@data-testid="add-button"]');
    }
    public get optKategoriRM() {
        return $('//*[@data-id="button-segment-1"]');
    }
    public get selectGudangRM() {
        return $('//*[@class="ant-select-selector"]');
    }
    public get optGudangRMSumberPangan() {
        return $('//*[@title="CV Sumber Pangan"]');
    }
    public get cariProdukBermasalah () { 
        return $('//input[@placeholder="Cari produk"]');
    }
    public get pilihKodeSource() {
        return $('(//*[@class="ant-select-selector"])[2]');
    }
    public get checkboxKodeSource() {
        return $('//input[@class="ant-checkbox-input"]');
    }
    public get inputQtyRusak() {
        return $('//input[@class="ant-input-number-input"]');
    }
    public get imgUploadBuktiRusak() {
        return $('(//span[@class="ant-upload"])[2]');
    }
    public get gambarBuktiRusak() {
        return $('//*[@data-testid="upload-image"]');
    }
    public get inputCatatanRusak() {
        return $('//textarea[@placeholder="Ketik catatan stok rusak"]');
    }
    public get btnSubmitModalProdukBermasalah() {
        return $('//*[@data-id="btn-submit-modal"]');
    }
    public get imgUploadPermintaanBarang() {
        return $('(//*[@class="ant-upload"])[1]');
    }
    public get gambarPermintaanBarang() {
        return $('//*[@data-testid="upload-permintaan-barang"]');
    }
    public get tabBuktiAlokasiBarang() { 
        return $('//*[@data-node-key="allocation-goods"]');
    }
    public get imgUploadBuktiAlokasiBarang() {
        return $('(//*[@class="ant-upload"])[1]');
    }
    public get gambarBuktiAlokasiBarang() {
        return $('//*[@data-testid="upload-alokasi-barang"]');
    }
    public get btnSubmitBuatStokBermasalah() {
        return $('//*[@data-testid="form-save-btn"]');
    }
    public get btnAjukan() {
        return $('//*[@data-testid="btn-processed"]');
    }
    public get btnConfirmAjukan() {
        return $('//*[@class="ant-btn ant-btn-default ant-btn-sm ant-btn-block s_wvibGNsL undefined s_Ct2S1-z5"]');
    }
    public get btnSetujuAjukan() {
        return $('//*[@data-testid="btn-approve"]');
    }
    public get optTipeStokRetur() {
        return $('//*[@data-testid="stok-retur"]');
    }

    //return v3
    public get menuReturnV3 () {
        return $('//*[@data-testid="menu-Return"]');
    }
    public get btnBuatRetur() {
        return $('//*[@id="return-create-btn"]');
    }
    public get selectGudangRetur() {
        return $('(//*[@class="ant-select-selector"])[1]')
    }
    public get optGudangReturSumberPangan() {
        return $('//*[@title="CV Sumber Pangan"]');
    }
    public get selectKategoriRetur() {
        return $('(//*[@class="ant-select-selector"])[2]');
    }
    public get optKategoriReturRM() {
        return $('(//*[@class="ant-select-item-option-content"])[12]');
    }
    public get selectSupplierRetur () {
        return $('//input[@placeholder="Pilih supplier"]');
    }
    public get selectKodeTransaksiRetur() {
        return $('//input[@placeholder="Pilih kode transaksi"]');
    }
    public get inputQtyRetur() {
        return $('//input[@data-testid="modal-notgood-items-quantity-return-0"]');
    }
    public get selectTipeRetur() {
        return $('(//*[@class="ant-select ant-select-lg ant-select-single ant-select-show-arrow"])[2]');
    }
    public get optTipeReturBarang() {
        return $('(//*[@class="ant-select-item-option-content"])[15]');
    }
    public get pilihProdukRetur () { 
        return $('//input[@placeholder="Pilih Produk"]');
    }
    public get pilihUnitRetur() {
        return $('(//*[@class="ant-select-selector"])[4]');
    }
    public get inputQtyImbalanRetur() {
        return $('(//input[@class="ant-input-number-input"])[1]');
    }
    public get inputHargaBeliImbalanRetur() {
        return $('(//input[@class="ant-input-number-input"])[2]');
    }
    public get btnSubmitRetur() {
        return $('//button[@data-testid="btn-simpan"]');
    }
    public get filterGudangRetur() {
        return $('(//button[@class="ant-btn ant-btn-default ReturnFilter_shortcutFilterButton__sATHM"])[1]');
    }
    public get kodeRetur() {
        return $('//*[@data-testid="kode-retur-0"]');
    }
    public get btnSubmitReturModal() {
        return $('//*[@data-testid="open-modal-submit-0"]');
    }
    public get btnSetujuRetur() {
        return $('//*[@id="btn-submit-yes"]');
    }

    //outgoing goods v4
    public get tabReturSupplier() {
        return $('//*[@data-testid="tabs-label-retur-supplier"]');
    }
    public get searchBarReturSupplier() {
        return $('//input[@placeholder="Cari kode retur supplier"]');
    }
    public get checkboxReturSupplier() {
        return $('//input[@data-testid="btn-checkbox-0"]');
    }
    public get btnSiapDikeluarkan() {
        return $('//*[@data-testid="btn-siap-dikeluarkan"]');
    }
    public get imgUploadPicklist() {
        return $('//*[@class="ant-upload"]');
    }
    public get gambarPicklist() {
        return $('//*[@data-testid="form-image-upload"]');
    }
    public get btnSubmitSiapDikeluarkan() {
        return $('//*[@data-testid="confirm-form-update-status"]');
    }
    public get btnConfirmUpdateStatus() {
        return $('//*[@data-testid="confirm-update-status"]');
    }
    public get btnDikeluarkan() {
        return $('//*[@data-testid="btn-dikeluarkan"]');
    }

    //product v3
    public get menuProductV3() {
        return $('//*[@data-testid="menu-Product"]');
    }
    public get pilihTipeProduk() {
        return $('(//*[@class="ant-select-selection-item"])[1]');
    }
    public get optTipeProdukRTP() {
        return $('(//*[@class="ant-select-item-option-content"])[2]');
    }
    public get pilihSubtipeProduk() {
        return $('//input[@placeholder="Pilih Subtipe"]');
    }
    public get inputNamaProdukRTP() {
        return $('//input[@placeholder="Tambahkan Nama Produk"]');
    }
    public get pilihMerek2() {
        return $('//input[@placeholder="Pilih Merek"]');
    }
    public get pilihKategori2() {
        return $('//input[@placeholder="Pilih Kategori"]');
    }
    public get checkboxIngredients() {
        return $('(//*[@class="ant-checkbox-input"])[3]');
    }
    public get inputNamaIngredients() {
        return $('//input[@placeholder="Masukkan nama ingredients"]');
    }

    //pro v4
    public get menuPROV4() {
        return $('//*[@data-testid="menu-Production Order"');
    }
    public get btnBuatPRO() {
        return $('//*[@data-testid="button-solid-large-buat-pro"]');
    }
    public get selectTipePT_2() {
        return $('(//*[@class="ant-select-selector"])[3]');
    }
    public get selectSupplierPRO() {
        return $('(//*[@class="ant-select-selector"])[4]');
    }
    public get pilihPengirimanPRO() {
        return $('(//*[@class="ant-select-selector"])[5]');
    }
    public get pilihPICPRO() {
        return $('(//*[@class="ant-select-selector"])[6]');
    }
}