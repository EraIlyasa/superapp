import { $ } from '@wdio/globals'

export default new class penjualanPage {

    //Order List
    get detailPenjualan() {
        return $('(//*[@rel="noreferrer"])[1]/*[1]')
    }
    get btnMoreFilter() {
        return $('//*[@data-testid="filter-modal-trigger"]')
    }
    get btnAdd(){ 
        return $('//button[@id="btnAdd"]')
    }

    get btnDirect(){
        return $('(//*[@class="cursor-pointer"])[3]')
    }
    
    get btnMarketplace(){ 
        return $('//*[contains(text(), "MarketPlace")]');
    }

    get agenPemesanan(){ 
        return $('//input[@id="Agen Pemesan"]');
    }

    get alamatKirim(){
        return $('//input[@id="Pilih alamat kirim"]');
    }

    // get optAlamatKirim() {
    //     return $('//*[contains(text(), "Warung")]');
    // }

    

    get btnTambahProduk() {
        return $('//*[contains(text(), "Tambah Produk")]');
    }

    get namaProduct() {
        return $('//input[@id="Produk"]');
    }

    get optNamaProduct() {
        return $('//*[contains(text(), "Automated Stock | ra")]');
    }

    get satuan() {
        return $('//span[@title=""]');
    }

    get optSatuan() {
        return $('//*[contains(text(), "Bag")]');
    }

    get quantity() {
        return $('//input[@id="qty"]');
    }

    get btnSave() {
        return $('//span[@data-testid="btn-save"]');
    }

    get btnUpdate() {
        return $('//button[@id="updateBtnEdit"]');
    }

    get kodeTransaksi() {
        return $('//tbody[@class="ant-table-tbody"]/*[2]/*[4]/*/span');
    }

    get inputKodeTransaksi() {
        return $('//input[@placeholder="Cari kode penjualan"]');
    }

    get shortcutInputDetailPenjualan() {
        return $('//input[@placeholder="Cari kode penjualan"]');
    }

    get shortcutDetailPenjualan() {
        return $('#detail-link-penjualan-T240913-272')
    }

    //More Filter 
    get optGudangAlohaRTP() {
        return $('//*[@class="ant-radio-group ant-radio-group-outline" ]//*[contains(text(),"Aloha-RTP")]')
    }
    get btnTerapkanFilter() {
        return $('//*[@data-id="filter-apply-button"]')
    }

    //Detail Penjualan 
    get btnEditPenjualan() {
        return $('//*[@data-testid="btn-submit"]')
    }
    get btnEditList() {
        return $('//*[@data-testid="btn-edit-product"]')
    }

    //Create Order
    get btnSubmit() {
        return $('//button[@data-testid="btn-submit"]');
    }
    get failedAlert() {
        return $('(//*[@class="s_RR3nZRCC"])')
    }
    get successAlert() {
        return $('(//*[@class="ant-notification-notice-description"])')
    }
    //Section 1 Detail 
    get fieldTipePenjualan() {
        return $('//span[@class="ant-select-selection-item" and @title="NON-RTP"]')
    }
    get fieldAgenPemesan() {
        return $('//input[@id="Agen Pemesan"]');
    }

    //Section 1 Option 
    async fieldInputQty(x:string) {
        return $('(//input[@id="qty"])['+x+']');
        // 1, 2 = x
    }
    async fieldInputQuantity(x:string) {
        return $('(//input[@id="quantity"])['+x+']')
    }

    async fieldNamaProduk(x:string) {
        return $('(//input[@id="Produk"])['+x+']');
        //1, 2 = x
    }
    get optTipePenjualanRTP(){
        return $('//*[@data-id="undefined-1"]');
    }
    get optAgenPemesan() {
        return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-4"]');
    }
    async optAlamatKirim(x:string) {
        return $('//*[@class="react-autosuggest__suggestions-list"]//*[contains(text(),"'+x+'")]')
        //Rumah, Pasar, Toko, etc = x
    }

    //Section 2 Order List 
    get increaseValue() {
        return $('(//*[@aria-label="Increase Value"])[2]')
    }
    get decreaseValue() {
        return $('(//*[@aria-label="Decrease Value"])[2]')
    }
    get btnSaveOrderModal() {
        return $('//button[@id="updateBtnEdit"]');
    }
    get tipePT() {
        return $('//input[@id="Tipe PT"]');
    }
    get metodePembayaran() {
        return $('//span[@class="ant-select-selection-item" and @title="COD"]')
    }
    get minOrderInf() { 
        return $('(//*[@class="font-bold"])')
    }
    get superagen(){
        return $('//input[@id="Superagen"]');
    }
    get btnTambahProdukModal() { 
        return $('(//*[@data-testid="btn-cancel"])[3]')
    }
    async btnUbahModal(x:string) {
        return $('(//*[@id="changeProduct-'+x+'"])')
    }
    async btnSaveModal(x:string) {
        return $('(//*[@id="saveProduct-'+x+'"])');
        //0, 1, 2, etc = x
    }
    async btnBatalModal(x:string) {
        return $('(//*[@id="removeProduct-'+x+'"])');
        //0, 1, 2, etc = x
    }
    /////////////////////////////
    async btnDeleteModal(x:string) {
        return $('(//*[@data-testid="btn-delete"])['+x+']')
    }
    async btnSaveModall(x:string) {
        return $('(//*[@data-testid="btn-save"])['+x+']')
    }

    


    //Section 2 Oder List Option 
    get optAgenpemesan() {
        return $('(//*[@id="react-autowhatever-1--item-0"])')
    }
    get optSuperagen() {
        return $('//*[contains(text(), "Bobby")]');
    }
    async optSatuanModal(x:string, y:string) {
        return $('(//*[@data-testid="dropdown-options" and @title="'+x+'"])['+y+']')
        //Karton, Bag, Bal, etc = x 
    }
    async optTipePT(x:string) {
        return $('(//*[@class="react-autosuggest__suggestions-list"])//*[contains(text(), "'+x+'")][1]')
    }
    
}