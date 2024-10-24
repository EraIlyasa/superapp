export default new class incomingGoodsPage {
    
    //Menu 
    get menuIncomingGoodsV4() {return $('//*[@data-testid="Menu-IncomingGoods V4"]');}

    //Global
    get successAlert() { return $('(//*[@class="ant-notification-notice-description"])')}

    //List Incoming Goods
    get btnSearch() { return $('(//*[@id="btnSearch"])')}
    get btnCari() { return $('(//*[@data-id="enter-btn"])')}
    get titlePage() { return $('(//*[@id="page-title"])')}
    get tabTolakanVendor() { return $('(//*[@data-id="canceledPending"])')}
    get fieldInputSearch() {return $('(//*[@data-id="search-bar" and @placeholder="Search..."])');}
    get btnTglKirim() {return $('(//*[@class="ant-select-selection-search-input"])[2]');}
    get btnGudang() {return $('');}
    get btnSupplier() {return $('');}
    get btnStatus() {return $('');}
    get btnTipeIncoming() {return $('(//*[@class="ant-tag Table_filterItem__x3tSg Chips_container__Uk_w2 Chips_large__DNi_I css-1vp3ixv"])[5]');}
    get btnMoreFilter() {return $('(//*[@class="ant-tag Table_filterItem__x3tSg Chips_container__Uk_w2 Chips_large__DNi_I css-1vp3ixv"])[6]');}
    get btnAmbilAntrian() {return $('//*[@data-testid="get-queue-0"]');}
    get uploadSJ() {return $('//*[@data-testid="form-image-upload"]');}
    get fieldInputDriver() {return $('//*[@placeholder="Masukkan nama driver supplier"]');}
    get btnCheckinModalNomorAntrian() {return $('//*[@data-testid="btn-submit"]');}
    get btnBatalModalNomorAntrian() {return $('//*[@data-testid="btn-cancel"]');}

    //Tab Tolakan Vendor
    get btnKembali() { return $('(//*[@type="button"])//*[contains(text(),"Kembali")]')}
    get btnSudahBenar() { return $('(//*[@type="button"])//*[contains(text(),"Sudah Benar")]')}
    get closeModal() { return $('(//*[@aria-label="close"])')}
    get btnDetailTV() { return $('(//*[@data-testid="button-total-sku-1"])[2]')}
    get btnBatalTolakan() { return $('(//*[@data-id="btn-cancel-swipeable"])')}
    get btnSubmitTolakan() { return $('(//*[@data-id="btn-submit-swipeable"])')}
    get btnSubmit() { return $('(//*[@data-testid="button-submit-1"])[2]')}
    async fieldInputTolakanPending(x:string) { 
        return $('(//*[@name="new_incoming_qty"])['+x+']')
        //1, 2, etc = x
    } 
    async fieldQTYPending(x:string) {
        return $('(//*[@data-testid="tolakan-pending-'+x+'"])')
        //1, 2, 3, etc = x
    }
    
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



     get fieldInputSearch0() {
        return $('//*[@id="searchBar"]/div/span/span/span[1]/input');
    }
     get btnCariProduk() {
        return $('//*[@data-id="enter-btn"]');
    }
     get btnFilterGudang() {
        return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[1]');
    }
     get btnFilterPeriode() {
        return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[2]');
    }
     get btnFilterSupplier() {
        return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[3]');
    }
     get btnFilterStatus() {
        return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[4]');
    }
     get btnExport() {
        return $('//*[@data-id="export-csv"]');
    }
     get tabSupplier() {
        return $('//*[@id="rc-tabs-0-tab-purchasing"]/div/span');
    } 
     get tabReturSupplier() {
        return $('//*[@id="rc-tabs-0-tab-returnSupplier"]/div/span');
    }
     get tabTolakan() {
        return $('//*[@id="rc-tabs-0-tab-canceled"]/div/span');
    }
     get tabReturPenjualan() {
        return $('//*[@id="rc-tabs-0-tab-returnOrder"]/div/span');
    }
     get tabTransferStock() {
        return $('//*[@id="rc-tabs-0-tab-transfer"]/div/span');
    }
     get tabConsignment() {
        return $('//*[@id="rc-tabs-0-tab-transfer"]/div/span');
    }
}