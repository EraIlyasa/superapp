export default new class incomingGoodsPage {
    
    //Menu 
    get menuIncomingGoodsV4() {return $('//*[@data-testid="Menu-IncomingGoods V4"]');}


    //List Incoming Goods
    get fieldInputSearch() {return $('//*[@placeholder="Cari kode PO/CG/Nama Produk/Supplier"]');}
    get btnTglKirim() {return $('(//*[@class="ant-select-selection-search-input"])[2]');}
    get btnGudang() {return $('');}
    get btnSupplier() {return $('');}
    get btnStatus() {return $('');}
    get btnTipeIncoming() {return $('(//*[@class="ant-tag Table_filterItem__x3tSg Chips_container__Uk_w2 Chips_large__DNi_I css-1vp3ixv"])[5]');}
    get btnMoreFilter() {return $('(//*[@class="ant-tag Table_filterItem__x3tSg Chips_container__Uk_w2 Chips_large__DNi_I css-1vp3ixv"])[6]');}

    //Filter 
    get filterGudangModal() {return $('//*[@data-node-key="warehouse_id"]');}
    get filterSupplierModal() {return $('(//*[@data-node-key="supplier"])[2]');}
    get filterStatusModal() {return $('(//*[@data-node-key="status_incoming"])');}
    get filterTipeIncomingModal() {return $('(//*[@data-node-key="type"])');}
    get filterKategoriModal() {return $('(//*[@data-node-key="category"])]');}
    get filterAntrianModal() {return $('(//*[@data-node-key="queue_status"])');}

    //Option Filter Gudang 
    get fieldInputSearchGudang() {return $('(//*[@placeholder="Cari Gudang"])');}
    get optGudang0() {return $('(//*[contains(text(), "Aloha")])[4]');}
    get optGudang1() {return $('(//*[contains(text(), "Aloha-RTP")])');}
    get btnTerapkanFilterModal() {return $('//*[@data-testid="filter-incoming-goods-supplier-apply-filter"]');}
    get btnResetFilterModal() {return $('//*[@data-testid="filter-incoming-goods-supplier-reset-filter"]');}
    


    public get fieldInputSearch0() {
        return $('//*[@id="searchBar"]/div/span/span/span[1]/input');
    }
    public get btnCariProduk() {
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