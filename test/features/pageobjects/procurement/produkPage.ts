export default new class produkPage {

    get menuProduk() { return $('//*[@data-testid="Menu-Product"]')}
    //List 
    get csvUpload() { return $('//*[@data-id="drager-modal-import"]')}
    get titleProduk() { return $('#page-title')}
    get btnSearch() { return $('//*[@id="btnSearch"]')}
    get fieldInputSearch() { return $('//*[@data-testid="search-bar"]')}
    get btnCari() { return $('//*[@data-id="enter-btn"]')}
    get btnFilter() { return $('//*[@data-id="filter-modal-trigger"]')}
    get btnCreateProduk() { return $('(//*[@id="product-create-btn"])')}
    get successAlert() { return $('//*[@class="ant-notification-notice-description"]')} 
    get failedAlert() { return $('//*[@class="ant-notification-notice-description"]')}
    get failedAlert2() { return $('//*[@class="ant-message-custom-content ant-message-error"]')}
    get skuProduk() { return $('#C')}
    get fieldSearchModal() { return $('//*[@placeholder="Search Tag Produk"]')}
    get btnTerapkanModal() { return $('//*[@data-id="filter-apply-button"]')}
    get btnResetModal() { return $('//*[@data-id="filter-reset-button"]')}
    get emptyData() { return $('(//*[@class="ant-empty-description"])')}
    get selectedGudang() { return $('(//*[@class="ant-table-cell"])[17]')}
    get inputSearchPICFilter() { return $('(//*[@placeholder="Search Pic Product"])')}
    get btnPilihPIC() { return $('(//*[@class="ant-btn ant-btn-default"])')}
    get btnExportFile() { return $('//*[contains(text(), "Export File")]')}
    get btnImportFile() { return $('//*[contains(text(), "Import File")]')}
    async textPICProduk(x:string) { 
        return $('(//*[@class="ant-table-cell"])[18]/*/*'+x+'')
    }
    async navTabProduk(x:string) { 
        return $('(//*[@data-node-key="'+x+'"])')
        //
    }
    async selectedRadio(x:string) { 
        return $('(//*[@data-id="selection-tag"])'+x+'')
        // start from [5] to [12]
    }
    async namaProduk(x:string) { 
        return $('//*[@id="product-name-'+x+'"]')
        //write your product id here
    }
    async btnAturHarga(x:string) {
        return $('(//*[@data-testid="Atur Harga"])'+x+'')
        //[1], [2], [3], etc = x
    }
    async btnEditProduk(x:string) {
        return $('(//*[@data-testid="Edit Produk"])'+x+'')
        //[1], [2], [3], etc = x
    }
    async tabProduk(x:string) {
        return $('(//*[@data-testid="tab-'+x+'-btn"])')
        //1, 0 = x
    }
    async navFilterModal(x:string) { 
        return $('(//*[@data-node-key="'+x+'"])')
    }

    //PIC Modal
    get picLama() { return $('(//*[@class="ant-col ant-col-12"])[7]/*[2]')}
    get dropdownModalPICBaru() { return $('#input-city-supplier')} //(//*[@id="input-city-supplier"])
    get textPICLama() { return $('(//*[@class="ant-col ant-col-12"])[5]/*[2]')}
    get btnSimpanModalPIC() { return $('(//*[@data-testid="btn-submit"])')}
    get btnCancelModalPIC() { return $('(//*[@data-testid="btn-cancel"])')}
    async logPIC(x:string) { 
        return $('(//*[@class="ant-table-row ant-table-row-level-0"])[3]/*'+x+'')
        //[1], [2]
    }

    //List Option
    get optSemuaGudang() { return $('//*[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Semua Gudang")]')}
    get optPICSemua() { return $('//*[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Semua Pic")]')}
    get picName() { return $('(//*[@id="product-pic-7473"])[2]/*[1]')}
    get optPICEra() { return $('//*[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Era Ilyasa")]')}
    get optSelectedPICProduk() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[2]/*[1]')}
    get optSelectedWarehouse() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[1]/*[2]')}
    get optWarehouseJember() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])/*[3]')}
    get optSubTipe0() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[5]//*[@value="90"]')} //('(//*[contains(text(), "White Label")])[8]')}
    get optSatuanBag() { return $('(//*[contains(text(), "Bag")])')}
    get optPinYa() { return $('(//*[contains(text(), "Ya")])[3]')}
    get optPinTidak() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[7]/*[3]')} //('(//*[contains(text(), "Tidak")])[11]')}
    get optBahanDapur() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[6]/*[2]')} //('(//*[contains(text(), "Bahan Dapur")])[8]')}
    get optTidakAktif() { return $('(//*[contains(text(), "Tidak Aktif")])')}
    get optAktif() { return $('(//*[contains(text(), "Aktif")])[11]')}
    get optCheckedPin() { return $('(//*[@class="ant-radio-wrapper ant-radio-wrapper-checked"])[2]')}
    get optCheckedStatus() { return $('(//*[@class="ant-radio-wrapper ant-radio-wrapper-checked"])[2]')}
    get optCheckedTag() { return $('(//*[@class="ant-radio-wrapper ant-radio-wrapper-checked"])')}
    get optNonRTP() { return $('(//*[contains(text(), "Non-RTP")])[6]')}
    async optTPRTP(x:string) { 
        return $('(//*[contains(text(), "RTP")])'+x+'')
        //[15] and [16]
    }
    async optTagProduk(x:string) { 
        return $('(//*[@class="ant-radio-wrapper"])'+x+'')
        //[1], [2], [3], etc = x
    }

    //Create Produk
    get btnSimpan() { return $('(//*[@id="btnSave"])')}
    get btnBatal() { return $('(//*[@id="btnCancel"])')}
    get alert() { return $('(//*[@class="ant-notification-notice-description"])[1]')}
    //3 INVALID_ARGUMENT: Product harus memliki 1 attribute dengan satuan terbesar (konversi 1)
    
    //Section 1 Gambar Produk
    get uploadImage() { return $('(//*[@id="img-upload"])')}
    get textGambarUtama() { return $('//*[@class="ant-radio-wrapper ant-radio-wrapper-checked"]')}
    get radioButton1() { return $('//*[@class="ant-radio-wrapper"]')}
    async btnDeleteImage(x:string) { 
        return $('(//*[@title="Remove file"])'+x+'')
    }
    async radioButton(x:string) { 
        return $('(//*[@class="ant-radio-input"])'+x+'')
        //[1], [2], [3], etc = x
    }

    
    //Section 2 Infor Produk
    get statusAktifBarang() { return $('//*[@class="ant-checkbox-input"]')}
    get statusProdukRokok() { return $('(//*[@class="ant-checkbox-input"])[2]')}
    get statusIngredients() { return $('(//*[@class="ant-checkbox-input"])[3]')}
    get statusPinProduk() { return $('(//*[@class="ant-checkbox-input"])[3]')}
    get alertLimmitProduk() { return $('//*[@class="mr-05"]')}
    // get pinProduk() { return $('(//*[@class="ant-checkbox-input"])[3]')}
    get fieldTipeProduk() { return $('(//*[@title="Non RTP"])[1]')}
    get fieldTipeProdukTest() { return $('(//*[@class="ant-select-selection-item"])[1]')}
    get fieldSubtipe() { return $('(//*[@id="input-subtipe-product"])')}
    get fieldNamaProduk() { return $('(//*[@id="input-name-product"])')}
    get fieldMerek() { return $('(//*[@id="input-brand_id-product"])')}
    get fieldKategori() { return $('(//*[@id="input-category_id-product"])')}
    get fieldInputBarcode() { return $('(//*[@id="input-barcode-product"])')}
    get fieldTargetUsia() { return $('(//*[@title="Pilih Target Usia"])')}
    get fieldPPNTest() { return $('(//*[@class="ant-select-selection-item"])[3]')}
    get fieldPPNPenjualan() { return $('(//*[@title="Pilih PPN Penjualan"])')}
    get fieldTagProduk() { return $('//*[@id="react-select-2-placeholder"]')}

    // get fieldTagProduk() { return $('(//*[contains(text(), "Pilih Tag Produk")])')}
    async field(x:string) {
        return $('(//*[@class="select__input-container css-1lx7dxn"])['+x+']')
    }
    async inputField(x:string) {
        return $('//*[@id="react-select-'+x+'-input"]')
    }
    async pinProduk(x:string) {
        return $('(//*[@class="ant-checkbox-input"])'+x+'')
        //it should be [3] if NonRTP and should be [4] if RTP
    }

    //Section 2 Option 
    get optTargetUmur() { return $('//*[@data-id="undefined-1"]')}
    get optSubtipe() { return $('(//*[@id="react-autowhatever-1--item-0"])')}
    async optTipeProduk(x:string) { 
        return $('//*[@data-id="undefined-'+x+'"]')
        // 0, 1
    }
    get inputTagProduk() {
        return $('//*[@id="react-select-2-input"]');
    }
    async optTargetUsia(x:string) { 
        return $('(//*[@data-id="undefined-'+x+'"])[2]')
        // 1, 2, 3, 4,, etc = x
    }
    async optPPNPenjualan(x:string) { 
        return $('(//*[@data-id="undefined-'+x+'"])[3]')
        // 1, 2, 3, 4, 5
    }
    async optMerek(x:string) {
        return $('(//*[@class="react-autosuggest__suggestions-list"])/*'+x+'')
        //[1], [2], [3], [4], [5], [6], [7], [8], [9], [10] = x
    }
    async optKategori(x:string) {
        return $('(//*[@id="react-autowhatever-1--item-'+x+'"])')
        // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 = x
    }
    
    //Section 3 Atribut Produk
    get btnTambahAtribut() { return $('//*[@id="btnAddProduct"]')}
    get btnEditList() { return $('//*[@id="btnEditProduct"]')}
    get btnPanduanAtribut() { return $('//*[@id="btnPanduanAtribut"]')}
    get btnSimpanModal() { return $('(//*[@id="updateBtnEdit"])')}
    get btnTambahAtributModal() { return $('(//*[@id="cancelBtnEdit"])[2]')}
    get btnBatalModal() { return $('(//*[@id="cancelBtnEdit"])[1]')}
    async btnRemoveModal(x:string) {
        return $('(//*[@id="removeProduct-'+x+'"])')
        // 0, 1, 2, 3, etc = x
    }
    async fieldSatuanModal(x:string) { 
        return $('(//*[@id="input-product-unit"])'+x+'')
        //[1], [2], [3], etc = x
    }
    async inputSatuanModal(x:string) {
        return $('(//*[@id="react-autowhatever-1--item-'+x+'"])')
        // 0, 1, 2, 3, etc = x
    }
    async fieldInputKonversi(x:string) {
        return $('(//*[@id="conversion"])'+x+'')
        //[1]. [2], [3], etc = x
    }
    async fieldInputIsiProduk(x:string) {
        return $('(//*[@id="input-product-content"])'+x+'')
        //[1]. [2], [3], etc = x
    }

    //Section 4 Ingredients
    get btnTambahIngredients() { return $('(//*[@id="btnAddProduct"])[2]')}
    get fieldInputNamaIngre() { return $('(//*[@placeholder="Masukkan nama ingredients"])')}
    get btnSimpanIngre() { return $('//*[@id="updateBtnEdit"]')}
    get btnTambahProdukIngre() { return $('(//*[@id="cancelBtnEdit"])[2]')}
    get btnBatalIngre() { return $('(//*[@id="cancelBtnEdit"])[1]')}
    get maxNamaIngre() { return $('(//*[@class="s_s-oHI3Fh"])')}

    async fieldInputSatuanIngre(x:string) { 
        return $('//*[@id="rc_select_'+x+'')
        //3, 4, 5, 6 = x
    }
    async fieldInputNamaProduk(x:string) { 
        return $('(//*[@id="Produk"])'+x+'')
        //[1], [2], [3], etc = x 
    }
    async fieldInputQtyIngre(x:string) { 
        return $('(//*[@id="quantity"])'+x+'')
        //[1], [2], etc = x 
    }
    async btnIncreaseValQty(x:string) { 
        return $('(//*[@aria-label="'+x+' Value"])')
        //Increase, Decrease
    }
    async btnHapusIngre(x:string) { 
        return $('(//*[@id="removeProduct-'+x+'"])')
        //0, 1, 2, etc = x
    }


    //Section 4 Ingredients Option 
    async optProdukModal(x:string) { 
        return $('(//*[@id="'+x+'"])')
        //Automated Raw, Automated Raw 2 = x
    }


}