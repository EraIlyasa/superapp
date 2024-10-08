export default new class e2eTransferGoodsPage {

    //menu
    public get navMenuStock() {
        return $('(//*[@class="ant-menu-submenu ant-menu-submenu-inline"])[7]');
    }
    public get menuInventoryV3() {
        return $('//*[@data-testid="Menu-InventoryV3"]');
    }
    public get InventoryV3() {
        return $('//*[@data-testid="menu-Inventory V3"]');
    }
    public get navMenuLogistic() {
        return $('(//*[@class="ant-menu-submenu-title"])[10]');
    }
    public get menuTransferGoods() {
        return $('//*[@data-testid="menu-Transfer Goods"]');
    }
    public get menuOutgoingTransfer() {
        return $('//*[@data-testid="menu-Outgoing Transfer"]');
    }
    public get menuIncomingGoods() {
        return $('//*[@data-testid="menu-Incoming Goods"]');
    }

    //filter element
    public get btnSearch() {
        return $('//*[@data-testid="search-bar-icon-closed"]');
    }
    public get btnCari() {
        return $('//*[@data-id="enter-btn"]');
    }
    public get btnFilterWarehouseInventory() {
        return $('//*[@data-id="btn-filter-warehouse"]');
    }
    public get btnTerapkanFilterWarehouse() {
        return $('//*[@data-testid="filter-apply-button"]');
    }
    public get btnResetFilterWarehouse() {
        return $('//*[@data-testid="filter-reset-button"]');
    }
    public get warehouseAloha() {
        return $('//label[span[text()="Aloha"]]');
    }
    public get warehouseJember() {
        return $('//label[span[text()="Jember"]]');
    }
    public get warehouseAlohaRTP() {
        return $('//label[span[text()="Aloha-RTP"]]');
    }
    public get warehouseVirtualConsignment() {
        return $('//label[span[text()="Virtual Consignment"]]');
    }
    public get filterWarehouseFrom() {
        return $('//*[@data-id="warehouse_from"]');
    }
    public get filterWarehouseTo() {
        return $('//*[@data-id="warehouse_to"]');
    }
    public get filterPeriode() {
        return $('//*[@data-id="periode"]');
    }
    public get periodeToday() {
        return $('//label[span[text()="Today"]]');
    }

    //menu inventory v3
    public get searchBarInventory() {
        return $('//input[@placeholder="Cari Nama Product"]');
    }
    public get btnExpandStokGudang() {
        return $('//*[@data-id="btn-expand-stock-warehouse"]');
    }
    public get qtyStokBlmRilisBefore() {
        return $('div[data-id="btn-unreleased-stock-0"]');
    }
    public get qtyStokBlmRilisAfter() {
        return $('div[data-id="btn-unreleased-stock-0"]');
    }

    //menu transfer goods
    public get btnCreateTransferGoods() {
        return $('//*[@data-id="btn-add-tg"]');
    }
    public get btnCategoryFinishedGoods() {
        return $('//*[@id="btn0"]');
    }
    public get btnCategoryRawMaterial() {
        return $('//*[@id="btn1"]');
    }
    public get fieldWarehouseFrom() {
        return $('//*[@data-id="wh-from-input"]');
    }
    public get fieldWarehouseTo() {
        return $('//*[@data-id="wh-to-input"]');
    }
    public get optWarehouseJember() {
        return $('//div[@data-testid="dropdown-options" and @title="Jember"]');
    }
    public get optWarehouseAlohaFrom() {
        return $('(//div[@data-testid="dropdown-options" and @title="Aloha"])[1]');
    }
    public get optWarehouseAlohaTo() {
        return $('(//div[@data-testid="dropdown-options" and @title="Aloha"])[2]');
    }
    public get optWarehouseAlohaRTPFrom() {
        return $('(//div[@data-testid="dropdown-options" and @title="Aloha-RTP"])[1]');
    }
    public get optWarehouseAlohaRTPTo() {
        return $('(//div[@data-testid="dropdown-options" and @title="Aloha-RTP"])[2]');
    }
    public get optWarehouseVirtualConsignment() {
        return $('//div[@data-testid="dropdown-options" and @title="Virtual Consignment"]');
    }
    public get fieldCompanyType() {
        return $('//input[@placeholder="Select company"]');
    }
    public get optCompanyTypePTGandaSegarArum() {
        return $('//li[@id="react-autowhatever-1--item-0" and text()="PT. Ganda Segar Arum"]')
    }
    public get optCompanyTypePTPutraAbyudaya() {
        return $('//li[@id="react-autowhatever-1--item-0" and text()="PT. Putra Abyudaya Nusantara"]')
    }
    public get btnAddProduct() {
        return $('//*[@data-testid="btn-add-list"]');
    }
    public get searchBarProduct() {
        return $('//*[@data-testid="search-sku"]');
    }
    public get btnAddProductList() {
        return $('//*[@data-testid="btn-add"]');
    }
    public get btnSelectedProductModal() {
        return $('//*[@data-id="btn-selected-prod"]');
    }
    public get fieldQtyProduct() {
        return $('//*[@class="ant-input-number-input"]');
    }
    public get btnAddProductModal() {
        return $('//*[@data-testid="btn-add-product"]');
    }
    public get btnCreateTransfer() {
        return $('//*[@data-testid="btn-submit"]');
    }
    public get btnSubmitApproval() {
        return $('//*[@data-testid="status-waiting"]');
    }
    public get btnChangeStatus() {
        return $('//*[@data-testid="btn-update-status"]');
    }
    public get btnApprove() {
        return $('//*[@data-testid="approve"]');
    }
    public get transferID() {
        return $('//*[@data-id="tf-id-0"]');
    }


    //menu outgoing transfer
    public get searchBarOutgoingTransfer() {
        return $('//input[@placeholder="Cari Outgoing Transfer"]');
    }
    public get checkBoxOutgoingTransfer() {
        return $('//*[@data-testid="btn-checkbox-table"]');
    }
    public get btnReadyChooseVendor() {
        return $('//*[@data-id="btn-ready-choose-pic"]');
    }
    public get btnChangeStatusDeliver() {
        return $('//*[@data-testid="btn-change-status"]');
    }
    public get btnChooseVendor() {
        return $('//*[@data-id="btn-choose-vendor"]');
    }
    public get selectGroupVendor() {
        return $('//input[@placeholder="Search & select group vendor"]');
    }
    public get selectDriver() {
        return $('//input[@placeholder="Search & select driver"]');
    }
    public get selectPlateNo() {
        return $('//input[@placeholder="Search & select vehicle plate number"]');
    }
    public get btnAssign() {
        return $('//*[@data-testid="btn-submit-modal"]');
    }
    public get btnDelivered() {
        return $('//*[@data-id="btn-delivered"]');
    }

    
    //menu incoming goods
    public get tabTransferStock() {
        return $('//*[@data-node-key="transfer"]');
    }
    public get filterWarehouseFrom2() {
        return $('(//*[@class="ant-btn ant-btn-default Modal_filterButtonMinWidth__ZOaKY"])[1]');
    }
    public get filterWarehouseTo2() {
        return $('(//*[@class="ant-btn ant-btn-default Modal_filterButtonMinWidth__ZOaKY"])[2]');
    }
    public get searchBarIncomingGoods() {
        return $('//input[@placeholder="Cari Kode Transfer"]')
    }
    public get btnInputIncoming() {
        return $('(//*[@data-testid="input-incoming"])[2]');
    }
    public get uploadSuratJalan() {
        return $('//*[@class="ant-upload"]');
    }
    public get suratJalan() {
        return $('//*[@data-testid="upload-incoming"]');
    }
    public get inputQtyIncoming() {
        return $('//input[@data-id="input-incoming-qty-0"]')
    }
    public get btnSubmitIncoming() {
        return $('//*[@data-testid="btn-submit"]');
    }
    public get qtyIncoming() {
        return $('(//*[@data-id="total-qty-0"])[2]');
    }
}