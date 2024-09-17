class transferGoodsv3 {
    public get logistikModul() {
        return $('//span[@data-testid="Menu-Logistic"]');
    }  
    //transfergoods
    public get transferGoodsMenu() {
        return $('//span[@class="ant-menu-title-content"]/*[@data-testid="Menu-TransferGoods"]')
    }
    public get buttonAddTransferGoods() {
        return $('//button[@data-id="btn-add-tg"]');
    }
    public get warehouseFrom() {
        return $('//div[@data-id="warehouse_from"]');
    }
    public get warehouseTo() {
        return $('//div[@data-id="warehouse_to"]');
    }
    public get choosenWarehouseFrom() {
        return $('//div[@data-id="opt-from-input-0"]');
    }
    public get choosenWarehouseTO() {
        return $('//div[@data-id="opt-to-input-0"]');
    }
    public get companyType() {
        return $('//input[@id="Company Type"]');
    }
    public get choosenCompanyType() {
        return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-0"]');
    }
    public get addProduct() {
        return $('//button[@data-id="btn-add-list"]');
    }
    public get inputSearch() {
        return $('//input[@placeholder="Cari SKU atau nama produk"]');
    }
    public get kategoriFinishedGoods() {
        return $('//div[@data-testid="btn-input-segment"]/*[@id="btn0"]');
    }
    public get kategoriRawmaterial() {
        return $('//div[@data-testid="btn-input-segment"]/*[@id="btn1"]');
    }
    public get kategoriAddProduct() {
        return $('//div[@data-testid="category"]');
    }
    public get addKarton() {
        return $('//div[@class="action-container"]/*[1]/*[3]');
    }
    public get addPack() {
        return $('//div[@class="action-container"]/*[2]/*[3]');
    }
    public get btnSearchProduct() {
        return $('//button[@data-testid="btn-start-searching"]')
    }
    public get btnSelectedProduct() {
        return $('//span[@data-id="btn-selected-prod"]');
    }
    public get btnClear() {
        return $('//button[@data-id="btn-reset"]');
    }
    public get btnCancel() {
        return $('//span[@class="font-normal"]//button[@data-id="btn-cancel"]');
    }
    public get btnAddProduct() {
        return $('//button[@data-id="btn-add-product"]');
    }
    public get btnCreateTransfer() {
        return $('//button[@data-id="btn-submit"]');
    }
    public get btnOpenSearch() {
        return $('//button[@data-id="btn-search-tg"]');
    }
    public get btnInputSearch() {
        return $('//input[@placeholder="Cari Transfer Goods"]');
    }
    

    //Expect
    public get productList() {
        return $('//tbody[@class="ant-table-tbody"]/*[2]/*[2]/*');
    }
    public get transferId() {
        return $('//tbody[@class="ant-table-tbody"]/*[2]/*[3]/*');
    }

    
}
export default new transferGoodsv3();