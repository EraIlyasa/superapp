class transferGoodsv4 {
    public get navMenuLogistik() {
        return $('//span[@data-testid="Menu-Logistic"]');
    }

    public get menuTransferGoodsV4() {
        return $('//span[@class="ant-menu-title-content"]/*[@data-testid="Menu-TransferGoods V4"]')
    }

    public get btnBuatTransferGoods() {
        return $('//a[@href="/logistic/transfer-goods-v4/new"]'); //('//button[@type="button"]/*[contains(text(), "Buat Transfer Goods")]'); //('//div[@data-testid="page-header-extra"]');
    }
    public get fieldGudangAsal() {
        return $('//div[@data-testid="dropdown-warehouse-from"]/*[2]');
    }
    public get fieldGudangTujuan() {
        return $('//div[@data-testid="dropdown-warehouse-to"]/*[2]');
    }
    public get optGudangAsal() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[1]');
    }
    public get optGudangTujuan() {
        return $('(//*[@title="Aloha-RTP"])[2]');
    }
    public get fieldTanggalKirim() {
        return $('//*[@data-testid="date-picker-delivery-date"]');
    }
    public get fieldInputCatatan() {
        return $('(//*[@data-testid="textarea-note"])');
    }
    public get fieldTipePT() { 
        return $('//div[@data-testid="dropdown-warehouse-company-id"]/*[2]'); 
    }
    public get optTipePT() {
        return $('//div[@title="PT. Ganda Segar Arum"]');
    }
    public get btnTambahkanProduk() {
        return $('//div[@class="flex flex-row space-x-12"]');
    }
    public get btnTambahProdukModal() {
        return $('//div[@class="ModalFullFrame_footerRight__c5wWR"]/*[1]');
    }
    public get fieldPilihProduk() {
        return $('(//*[@class="ant-select-selection-search"])[5]');
    }
    public get optPilihProduk() {
        return $('//div[@name="**Agarasa Melon 10g - Inner Box"]');
    }
    public get fieldPilihSatuan() {
        return $('(//*[@class="ant-select-selection-search"])[6]');
    }
    public get optPilihSatuan() {
        return $('(//div[@class="rc-virtual-list-holder-inner"])[5]/*[1]');
    }
    public get fieldQtyTransfer() {
        return $('//input[@class="ant-input-number-input"]');
    }    
    public get btnSimpanModal() {
        return $('//div[@class="ModalFullFrame_footerRight__c5wWR"]/*[2]');
    }
    public get btnSimpan() {
        return $('//div[@class="ant-col css-1vp3ixv"]/*[@type="button"]');
    }
    public get btnKonfirmasiValidasi() {
        return $('//*[contains(text(), "Ya, Simpan")]');
    }
    public get validasiSimpan() {
        return $('//main[@class="ModalIllustration_modalBody__VucKT"]');
    }
    public get btnYaSimpan() { 
        return $('(//*[@data-testid="btn-create-transfer-goods"])[2]')
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