import { $ } from '@wdio/globals';

export default new class sideMenuBarPage {

    //Menu
    get navMenuMarketing() { 
        return $('//*[@data-testid="Menu-Marketing"]') 
    }
    get order(){ 
        return $('//span[contains(text(),"Order")]');
    }
    get navMenuConfig() { 
        return $('//*[@data-testid="Menu-Config"]');
    }
    get logistic(){ 
        return $('//span[@data-testid="Menu-Logistic"]');
    }
    get navMenuStock() { 
        return $('//*[@data-testid="Menu-Stock"]')
    }
    get navMenuAdministrator() { 
        return $('(//*[@data-testid="Menu-Administrator_"])')
    }
    get navMenuOrder() {
        return $('(//*[@data-testid="Menu-Order"])')
    }
    get navMenuFinance() { 
        return $('//*[@data-testid="Menu-Finances"]')
    }
    get navMenuMasterData() {
        return $('(//*[@data-testid="Menu-MasterData"])')
    }
    get navMenuPurchasing() {
        return $('(//*[@data-testid="Menu-Purchasing"])')
    }

    //Sub Menu
    get menuOutgoingGoodsV4() {
        return $('(//*[@data-testid="Menu-OutgoingGoods V4"])')
    }
    get menuIncomingGoods() { 
        return $('(//*[@data-testid="Menu-IncomingGoods"])[1]')
    }
    get menuRewardV4() { 
        return $('(//*[@data-testid="Menu-RewardV4"])')
     }
    get menuReturn() {
        return $('(//*[@data-testid="Menu-Return"])')
    }
    get setoranTOP() {
        return $('(//*[@data-testid="Menu-SetoranTOP"])')
    }
    get menuSetoran() {
        return $('(//*[@data-testid="Menu-Setoran"])')
    }
    get menuReturPenjualan() { 
        return $('(//*[@data-testid="Menu-ReturPenjualan"])')
    }
    get menuKonsinyasi() {
        return $('(//*[@data-testid="Menu-Konsinyasi"])')
    }
    get menuSupllier() {
        return $('(//*[@data-testid="Menu-SuppliersV4"])')
    }
    get menuMerek() {
        return $('(//*[@data-testid="Menu-Merk"])')
    }
    get menuSubKategori() {
        return $('(//*[@data-testid="Menu-SubCategory"])')
    }
    get menuKategori() {
        return $('(//*[@data-testid="Menu-Category"])')
    }
    get menuRawMaterial() {
        return $('(//*[@data-testid="Menu-RawMaterial V3"])')
    }
    get menuProdukBundle() {
        return $('(//*[@data-testid="Menu-ProductBundle"])')
    }
    get menuMutasiStock() {
        return $('(//*[@data-testid="Menu-MutasiStock V4"])')
    }
    get menuKendaraan() {
        return $('(//*[@data-testid="Menu-KendaraanV4"])')
    }
    get menuKurir() {
        return $('(//*[@data-testid="Menu-Kurir4"])')
    }
    get menuPICVendor() {
        return $('(//*[@data-testid="Menu-PICVendor"])')
    }
    get menuWarehouse() {
        return $('(//*[@data-testid="Menu-GudangV4"])[1]')
    }
    get menuManajemenStok() {
        return $('(//*[@data-testid="Menu-ManajemenStok"])')
    }
    get menuWarehouseRack() {
        return $('(//*[@data-testid="Menu-WarehouseRack"])')
    }
    get menuOutgoingRecap() { 
        return $('(//*[@data-testid="Menu-OutgoingRecap"])[1]')
    }
    get menuPaymentRequest() { 
        return $('//*[@data-testid="Menu-PaymentRequest"]')
    }
    get menuPenjualan() {
        return $('(//*[@data-testid="Menu-Penjualan"])')
    }
    get menuGeneral() {
        return $('(//*[@data-testid="Menu-General"])')
    }
    get penjualan(){ 
        return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-Penjualan"]');
    }
    get menuGudangV4() {
        return $('(//*[@data-testid="Menu-GudangV4"])[1]')
    }
    get menuInventory() { 
        return $('//*[@data-testid="Menu-InventoryV3"]')
    }
    get newOutgoingGoods() {
        return $('(//*[@data-testid="Menu-NewOutgoing Goods"])')
    }
    get outgoingGoodsV3() {
        return $('(//*[@data-testid="Menu-NewOutgoing Goods"])')
    }
    get menuProduk() { 
        return $('//*[@data-testid="Menu-Product"]')
    }
    get menuStockBermasalahV4() { 
        return $('//*[@data-testid="Menu-StokBermasalah V4"]')
    }
    




}