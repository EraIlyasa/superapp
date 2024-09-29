export default new class produkPage {

    //List 
    get titleProduk() { return $('(//*[@class="s_UaT9TnT-"])')}
    get btnSearch() { return $('//*[@id="btnSearch"]')}
    get fieldInputSearch() { return $('//*[@data-testid="search-bar"]')}
    get btnCari() { return $('//*[@data-id="enter-btn"]')}
    get btnMoreFilter() { return $('//*[@data-id="filter-modal-trigger"]')}
    get btnCreateProduk() { return $('(//*[@id="product-create-btn"])')}
    get successAlert() { return $('//*[@class="ant-notification-notice-description"]')}
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

    //Create Produk
    get btnSimpan() { return $('(//*[@id="btnSave"])')}
    get btnBatal() { return $('(//*[@id="btnCancel"])')}
    
    //Section 1 Gambar Produk
    get uploadImage() { return $('(//*[@id="img-upload"])')}
    
    //Section 2 Infor Produk
    get statusAktifBarang() { return $('class="ant-checkbox-input"')}
    get statusProdukRokok() { return $('(//*[@class="ant-checkbox-input"])[2]')}
    get pinProduk() { return $('(//*[@class="ant-checkbox-input"])[2]')}
    get fieldTipeProduk() { return $('(//*[@id="input-type-product"])')}
    get fieldSubtipe() { return $('(//*[@id="input-subtipe-product"])')}
    get fieldNamaProduk() { return $('(//*[@id="input-name-product"])')}
    get fieldMerek() { return $('(//*[@id="input-brand_id-product"])')}
    get fieldKategori() { return $('(//*[@id="input-category_id-product"])')}
    get fieldInputBarcode() { return $('(//*[@id="input-barcode-product"])')}
    get fieldTargetUsia() { return $('(//*[@title="Pilih Target Usia"])')}
    get fieldPPNPenjualan() { return $('(//*[@title="Pilih PPN Penjualan"])')}
    get fieldTagProduk() { return $('//*[@id="react-select-2-placeholder"]')}

    // get fieldTagProduk() { return $('(//*[contains(text(), "Pilih Tag Produk")])')}
    async field(x:string) {
        return $('(//*[@class="select__input-container css-1lx7dxn"])['+x+']')
        //product_tags
        //product_reference
        //product_variant
        //product_packaging_material
        //product_packaging_color
        //product_main_ingredient
        //product_texture
        //product_taste
    }
    async inputField(x:string) {
        return $('//*[@id="react-select-'+x+'-input"]')
    }


    //Section 2 Option 
    get optSubtipe() { return $('(//*[@id="react-autowhatever-1--item-0"])')}
    get inputTagProduk() {
        return $('//*[@id="react-select-2-input"]');
    }
    async optTargetUsia(x:string) { 
        return $('(//*[@class="rc-virtual-list-holder-inner"])[1]/*'+x+'')
        // [1], [2], [3], [4], [5], [6]
    }
    async optPPNPenjualan(x:string) { 
        return $('(//*[@class="rc-virtual-list-holder-inner"])[2]/*'+x+'')
        // [1], [2], [3], [4], [5], [6]
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
    get btnPAnduanAtribut() { return $('//*[@id="btnPanduanAtribut"]')}
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
        return $('(//*[@id="react-autowhatever-1--item-'+x+'"])[1]')
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, etc = x
    }
    async fieldInputKonversi(x:string) {
        return $('(//*[@id="conversion"])'+x+'')
        //[1]. [2], [3], etc = x
    }
    async fieldInputIsiProduk(x:string) {
        return $('(//*[@id="input-product-content"])'+x+'')
        //[1]. [2], [3], etc = x
    }


}