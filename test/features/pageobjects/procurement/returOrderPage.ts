export default new class returOrderPage {

    //List 
    get titlePage() { return $('(//*[@class="s_qzwtq9Zy"])')}
    get noDataReturOrder() { return $('(//*[@class="s_vnxcOuqb "])')}
    get kodeRetur() { return $('(//*[@id="detail-invoice-penjualan-undefined"])')}
    get btnSearch() { return $('//*[@id="btnSearch"]')}
    get fieldInputSearch() { return $('//*[@data-testid="search-bar"]')}
    get btnCari() { return $('//*[@data-id="enter-btn"]')}
    get btnFilter() { return $('//*[@data-id="filter-modal-trigger"]')}
    get kodeInvoice0() { return $('(//*[@id="detail-invoice-penjualan-undefined"])[1]')}
    get btnDetailInvoice() { return $('(//*[@class="color-primary d-flex align-center gap-1"])[1]')}
    get btnCreateRetur() { return $('(//*[@id="btnAdd"])')}

    //Filter Modal 
    get btnTerapkan() { return $('(//*[@data-id="filter-apply-button"])')}
    get btnReset() { return $('(//*[@data-id="filter-reset-button"])')}
    get navGudang() { return $('(//*[@data-node-key="warehouse_id"])')}
    get navVendor() { return $('(//*[@data-node-key="vendor_pic_id"])')}
    get navPeriode() { return $('(//*[@data-node-key="period"])')}
    get navStatus() { return $('(//*[@data-node-key="status"])')}
    get navKlasifikasi() { return $('(//*[@data-node-key="classification"])')}
    //navGudang
    get optGudangAloha() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(),"Aloha")])[1]')}
    get optGudangAlohaRTP() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(),"Aloha-RTP")])[1]')}
    get optGudangBandung() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(),"Bandung")])[1]')}
    //navPeriode
    get hariIni() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[3]//*[contains(text(),"Hari Ini")]')}
    get lastWeek() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[3]//*[contains(text(),"7 Hari Terakhir")]')}
    get lastMonth() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[3]//*[contains(text(),"30 Hari Terakhir")]')}
    get custom() { return $('(//*[@class="ant-radio-group ant-radio-group-outline"])[3]//*[contains(text(),"Custom")]')}

    //Create Retur Penjualan
    get btnSimpan() { return $('//*[@data-testid="btn-submit"]')}
    get btnBatal() { return $('//*[@data-testid="btn-cancel"]')}

    //Section 1 Informasi Umum
    get fieldSumber() { return $('(//*[@class="ant-select-selection-item"])[1]')}
    get fieldKodeSumber() { return $('(//*[@id="Kode Sumber"])')}
    get fieldKlasifikasi() { return $('(//*[@class="ant-select-selection-item"])[2]')}

    //Section 1 Option 
    get optKodeSumber() { return $('//*[@class="react-autosuggest__suggestions-list"]/*[1]')}
    async optSumber(x:string) {
        return $('//*[@title="'+x+'"]')
        //Penjualan, Retur Penjualan
    }
    
    //Section 2 Produk Retur Penjualan
    get btnTambahkanProduk() { return $('(//*[@class="ant-btn ant-btn-link"])')}
    get fieldInputQtyRetur() { return $('(//*[@class="ant-input-number-input"])')}
    get fieldAlasanRetur() { return $('(//*[@class="ant-select-selection-search-input"])[3]')}
    get btnResetModal() { return $('(//*[contains(text(), "Reset")])[2]')}
    get btnSimpanModal() { return $('//*[@data-id="btn-submit-swipeable"]')}
    get btnBatalModal() { return $('//*[@data-id="btn-cancel-swipeable"]')}
    get fieldInputCatatan() { return $('//*[@placeholder="Masukkan catatan retur"]')}
    get inputSearchModal() { return $('//*[@placeholder="Ketik untuk mencari produk"]')}
    get btnUbahProduk() { return $('//*[@data-testid="btn-edit-product"]')}

    //Section 2 Option 
    async alasanRetur(alasan:string) {
        return $('(//*[contains(text(), "'+alasan+'")])')
        //Rusak, Tidak sesuai pesanan, Lain-lain
    }
    async optKlasifikasi(x:string) {
        return $('//*[@title="'+x+'"]')
        //Soft Complaint, Hard Complaint
    }

    //Section 3 Dokumen Retur Penjualan
    get uploadImage() { return $('//*[@id="img-upload"]')}



}