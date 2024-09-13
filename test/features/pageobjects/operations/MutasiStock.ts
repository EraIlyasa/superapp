class MutasiStock {
    public get inventory() {
        return $('//span[@data-testid="Menu-Stock"]');
    }
    public get mutasiStockMenu() {
        return $('//span[@class="ant-menu-title-content"]/*[@data-testid="Menu-MutasiStock V4"]')
    }
    public get stockBagusTab() {
        return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="good"]')
    }
    public get stockRusakTab() {
        return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="good"]')
    }
    public get stockVendorTab() {
        return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="good"]')
    }

    //
    public get stockBagus() {
        return $('//*[@id="rc-tabs-0-tab-good"]/div/div/span"]');
    }
    public get stockRusak2() {
        return $('//*[@id="rc-tabs-0-tab-good"]/div/div/span"]');
    }
    public get stockVendor3() {
        return $('//*[@id="rc-tabs-0-tab-good"]/div/div/span"]');
    }
    public get startDate() {
        return $('//*[@data-testid="filter-datepicker-good"]');
    }
    public get choosenStartDate() {
        return $('//td[@title="2023-09-01"]');
    }
    public get btnPrevyear() {
        return $('//button[@aria-label="super-prev-year"]')
    }
    public get startTime() {
        return $('//*[@id="rc-tabs-0-panel-good"]//div[1]/div[2]/main//div[1]/div[2]//div/span/input');
    }
    public get endDate() {
        return $('//*[@data-testid="filter-end-date-good"]');
    }
    public get endTime() {
        return $('//*[@id="rc-tabs-0-panel-good"]//div[1]/div[2]/main//div[2]/div[2]//div/span/input');
    }
    public get warehouseGoods() {
        return $('//*[@data-testid="filter-warehouse-good"]/*[2]'); //('//*[@data-testid="filter-warehouse-good"]');
    }
    public get choosenWarehouseGoods() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Aloha"]')
    }
    public get productGoods() {
        return $('//*[@data-testid="filter-product-good"]/*[2]'); //('//*[@data-testid="filter-product-good]');
    }
    public get choosenProductGoods() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="SKL"]');
    }
    public get satuan() {
        return $('//div[@data-testid="filter-unit-good"]/*[2]');
    }
    public get choosenSatuan() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Karton"]');
    }
    public get unitGoods() {
        return $('//*[@data-testid="filter-unit-good"]');
    }
    public get companyType() {
        return $('//*[@data-testid="filter-company-type-good"]');
    }
    public get choosenCompanyType() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="PT. Putra Abyudaya Nusantara"][1]');
    }
    public get btnShow() {
        return $('//*[@id="rc-tabs-0-panel-good"]/div/div[1]/div[2]/main/div/div[7]/button/span');
    }
    public get btnExport() {
        return $('//button[@data-testid="btn-export-csv"]');
    }

    //Expect
    public get mutasiListStockBagus() {
        return $('(//tbody[@class="ant-table-tbody"])[position()=1]');
    }
    public get listMutasiStockBagus() {
        return $('(//tbody[@class="ant-table-tbody"])[position()=1]/*[1]/*[6]')
    }
    public get listMutasiStockBagus2() {
        return $('(//tbody[@class="ant-table-tbody"])[position()=1]/*[2]/*[6]')
    }
    public get listMutasiStockBagus3() {
        return $('(//tbody[@class="ant-table-tbody"])[position()=1]/*[3]/*[6]')
    }
    public get listMutasiStockBagus4() {
        return $('(//tbody[@class="ant-table-tbody"])[position()=1]/*[4]/*[6]')
    }
    public get listMutasiStockBagus5() {
        return $('(//tbody[@class="ant-table-tbody"])[position()=1]/*[5]/*[6]')
    }

    public get mutasiListStockRusak() {
        return $('(//tbody[@class="ant-table-tbody"])[position()=1]');
    }
    public get mutasiListStockVendor() {
        return $('(//tbody[@class="ant-table-tbody"])[position()=1]');
    }
    

    public get productList() {
        return $('//tbody[@class="ant-table-tbody"]/*[2]/*[2]/*');
    }
    public get transferId() {
        return $('//tbody[@class="ant-table-tbody"]/*[2]/*[3]/*');
    }
    public get title() {
        return $('//div[@class="flex gap-size-16"]');
    }
    public get warehouseKolomValidation() {
        return $('//*[@data-testid="filter-warehouse-good"]/*[3]');
    }
    public get produkKolomValidation() {
        return $('//*[@data-testid="filter-product-good"]/*[3]');
    }
    public get satuanKolomValidation() {
        return $('//*[@data-testid="filter-unit-good"]/*[3]');
    }
    public get tipePtKolomValidation() {
        return $('//*[@data-testid="filter-company-type-good"]/*[3]');
    }
    public get mutasiList1() {
        return $('(//tbody[@class="ant-table-tbody"])/*[1]');
    }
    public get mutasiList2() {
        return $('(//tbody[@class="ant-table-tbody"])/*[2]');
    }
    public get mutasiList3() {
        return $('(//tbody[@class="ant-table-tbody"])/*[3]');
    }
    public get mutasiList4() {
        return $('(//tbody[@class="ant-table-tbody"])/*[4]');
    }
    public get mutasiList5() {
        return $('(//tbody[@class="ant-table-tbody"])/*[5]');
    }
    public get mutasiList6() {
        return $('(//tbody[@class="ant-table-tbody"])/*[6]');
    }
    public get mutasiList7() {
        return $('(//tbody[@class="ant-table-tbody"])/*[7]');
    }
    public get mutasiList8() {
        return $('(//tbody[@class="ant-table-tbody"])/*[8]');
    }
    public get mutasiList9() {
        return $('(//tbody[@class="ant-table-tbody"])/*[9]');
    }
    public get mutasiList10() {
        return $('(//tbody[@class="ant-table-tbody"])/*[10]');
    }
}
export default new  MutasiStock();