class transferGoodsv4 {
    public get logistikModul() {
        return $('//span[@data-testid="Menu-Logistic"]');
    }

    public get transferGoodsMenu() {
        return $('//span[@class="ant-menu-title-content"]/*[@data-testid="Menu-TransferGoods V4"]')
    }

    public get btnBuatTransferGoods() {
        return $('//a[@href="/logistic/transfer-goods-v4/new"]'); //('//button[@type="button"]/*[contains(text(), "Buat Transfer Goods")]'); //('//div[@data-testid="page-header-extra"]');
    }
    public get gudangAsal() {
        return $('//div[@data-testid="dropdown-warehouse-from"]/*[2]');
    }
    public get gudangTujuan() {
        return $('//div[@data-testid="dropdown-warehouse-to"]/*[2]');
    }
    public get choosenGudangAsal() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[1]');
    }
    public get tanggalKirim() {
        return $('//div[@class="ant-picker-input"]');
    }
    public get tambahkanProduk() {
        return $('//div[@class="flex flex-row space-x-12"]');
    }
    public get btnTambahProduk() {
        return $('//div[@class="ModalFullFrame_footerRight__c5wWR"]/*[1]');
    }
    public get pilihProduk() {
        return $('//*[contains(text(), "Pilih produk")]');
    }
    public get choosenPilihProduk() {
        return $('//div[@name="44S Hijau Beras 5kg"]');
    }
    public get pilihSatuan() {
        return $('//*[contains(text(), "Pilih satuan")]');
    }
    public get choosenPilihSatuan() {
        return $('//div[@title="Karton"]');
    }
    public get qtyTransfer() {
        return $('//div[@class="ant-input-number ant-input-number-sm css-1vp3ixv"]');
    }
    public get btnSimpan() {
        return $('//div[@class="ModalFullFrame_footerRight__c5wWR"]/*[2]');
    }
    public get btnSimpanUtama() {
        return $('//div[@class="ant-col css-1vp3ixv"]/*[@type="button"]');
    }
    public get btnKonfirmasiValidasi() {
        return $('//*[contains(text(), "Ya, Simpan")]');
    }
    public get validasiSimpan() {
        return $('//main[@class="ModalIllustration_modalBody__VucKT"]');
    }

    //Expect 
    public get title() {
        return $('//div[@class="flex gap-size-16"]');
    }
    public get kodeTransfer() {
        return $('//tbody[@class="ant-table-tbody"]/*/*[3]/*');
    }
}
export default new transferGoodsv4();