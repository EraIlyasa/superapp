class badStock {
    public get createStokBermasalah() {
        return $('//*[@data-testid="add-button"]');
    }
    public get inputSearch() {
        return $('//*[@data-testid="search-bar"]');
    }
    public get btnCari() {
        return $('//*[@id="searchBar"]/div/span/span/span[2]/button');
    }
    public get filterGudang() {
        return $('//*[@data-testid="btn-filter-warehouse"]');
    }
    public get filterPeriode() {
        return $('data-testid="btn-filter-period"');
    }
    public get filterTipeStok() {
        return $('//*[@data-testid="btn-filter-type"]');
    }
    public get filterStatus() {
        return $('//*[@data-testid="btn-filter-status"]');
    }
    public get btnExport() {
        return $('//*[@data-testid="export-csv-bad-stock"]');
    }
    public get tabDaftarPengajuan() {
        return $('//*[@data-node-key="daftar-pengajuan"]');
    }
    public get btnExpand() {
        return $('//*[@id="rc-tabs-3-panel-daftar-pengajuan"]/div[1]//div/table/tbody/tr[2]/td[1]/button');
    }
    public get source() {
        return $('//*[@data-testid="source-0"]');
    }
    public get kodeNG() {
        return $('//*[@id="rc-tabs-2-panel-daftar-pengajuan"]//div[1]//div/table/tbody/tr[2]/td[3]/a');
    }
    public get colStatus() {
        return $('//*[@id="rc-tabs-3-panel-daftar-pengajuan"]/div/div[1]//div/table/tbody/tr[2]/td[7]/div/span');
    }
    public get btnPrint() {
        return $('//*[@data-testid="btn-print"]');
    }
    public get tabSkuStokRusak() {
        return $('//*[@data-node-key="list-badstock"]');
    }
    public get colTotalNG() {
        return $('//*[@id="rc-tabs-3-panel-list-badstock"]/div/div[1]//div/table/tbody/tr[2]/td[6]/div[2]');
    }
    public get tabSkuStokRetur() {
        return $('//*[@id="tabs-parent-container"]/div/div[1]/div[1]/div/div[3]');
    } 
    public get colTotalNGRetur () {
        return $('//*[@id="rc-tabs-3-panel-list-returnstock"]/div[1]//div/table/tbody/tr[3]/td[6]/div[2]');
    }

}