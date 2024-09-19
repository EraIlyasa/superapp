import { $ } from '@wdio/globals';

export default new class orderPage {

    get btnAdd(){ 
        return $('//button[@id="btnAdd"]');
    }

    get marketplace(){ 
        return $('//*[contains(text(), "MarketPlace")]');
    }

    get agenPemesanan(){ 
        return $('//input[@id="Agen Pemesan"]');
    }

    get optAgenPemesan() {
        return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-0"]');
    }

    get alamatKirim(){
        return $('//input[@id="Pilih alamat kirim"]');
    }

    get optAlamatKirim() {
        return $('//*[contains(text(), "Warung")]');
    }

    get superagen(){
        return $('//input[@id="Superagen"]');
    }

    get optSuperagen() {
        return $('//*[contains(text(), "Bobby")]');
    }

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
        return $('//input[@id="quantity"]');
    }

    get btnSave() {
        return $('//span[@data-testid="btn-save"]');
    }

    get btnUpdate() {
        return $('//button[@id="updateBtnEdit"]');
    }

    get btnSubmit() {
        return $('//button[@data-testid="btn-submit"]');
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

}