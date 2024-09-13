class IncomingGoods {
    public get inputSearch() {
        return $('//*[@id="searchBar"]/div/span/span/span[1]/input');
    }
    public get btnCari() {
        return $('//*[@data-id="enter-btn"]');
    }
    public get btnFilterGudang() {
        return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[1]');
    }
    public get btnFilterPeriode() {
        return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[2]');
    }
    public get btnFilterSupplier() {
        return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[3]');
    }
    public get btnFilterStatus() {
        return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[4]');
    }
    public get btnExport() {
        return $('//*[@data-id="export-csv"]');
    }
    public get tabSupplier() {
        return $('//*[@id="rc-tabs-0-tab-purchasing"]/div/span');
    } 
    public get tabReturSupplier() {
        return $('//*[@id="rc-tabs-0-tab-returnSupplier"]/div/span');
    }
    public get tabTolakan() {
        return $('//*[@id="rc-tabs-0-tab-canceled"]/div/span');
    }
    public get tabReturPenjualan() {
        return $('//*[@id="rc-tabs-0-tab-returnOrder"]/div/span');
    }
    public get tabTransferStock() {
        return $('//*[@id="rc-tabs-0-tab-transfer"]/div/span');
    }
    public get tabConsignment() {
        return $('//*[@id="rc-tabs-0-tab-transfer"]/div/span');
    }
    public get tabTolakanVendor() {
        return $('//*[@id="rc-tabs-0-tab-canceledPending"]/div/span');
    }
}