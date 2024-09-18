export default new class e2eBadStockPage {

    //Menu Stock Bermasalah
    
    public get menuStockBermasalahV4() { return $('//*[@data-testid="Menu-StokBermasalah V4"]'); }
    //List 
    public get btnCreateStokBermasalah() {
        return $('//*[@data-testid="btn-create-bad-stock"]');
    }
    public get fieldInputSearch() {
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

    //Create Bad Stock
    public get btnSimpan() { return $('//*[@data-testid="btn-create"]'); }
    public get btnBatal() { return $('//*[@data-testid="btn-back"]'); }
    public get btnYaSimpanModal() { return $('//*[@class="ModalIllustration_modalDefaultFooter___8umW"]/*[1]'); }
    public get btnKembaliModal() { return $('//*[@class="ModalIllustration_modalDefaultFooter___8umW"]/*[2]'); }

    //Section 1 Detail
    public get radioBtnFG() { return $('//*[@class="ant-radio-wrapper ant-radio-wrapper-checked Radio_radioContainer__zOW35 css-1vp3ixv"]'); }
    public get radioBtnRM() { return $('//*[@class="ant-radio-wrapper Radio_radioContainer__zOW35 css-1vp3ixv"]'); }
    public get fieldInputGudang() { return $('(//*[@class="ant-select-selection-search-input"])[2]'); }

    //Section 1 option
    public get optGudang0() { return $('(//*[@title="Aloha"])[2]'); }

    //Section 2 Daftar Produk Bermasalah
    public get btntambahProduk() { return $('//*[@data-testid="btn-add-product"]'); }

    //Section 2 Modal 
    public get radioBtnNonPRO() { return $('(//*[@class="ant-radio-wrapper ant-radio-wrapper-checked Radio_radioContainer__zOW35 css-1vp3ixv"])[2]'); }
    public get radioBtnPRO() { return $('(//*[@class="ant-radio-wrapper Radio_radioContainer__zOW35 css-1vp3ixv"])[2]'); }
    public get fieldNamaProduk() { return $('(//*[@class="ant-select-selection-search"])[3]'); }
    public get optNamaProduk0() { return $('(//*[@title="Teh Pucuk 350ml"])'); }
    public get fieldKodeSumber() { return $('(//*[@class="ant-select-selection-overflow"])'); }
    public get optKodeSumber0() { return $('(//*[@title="POP2402-393"])'); }
    public get fieldInputQty() { return $('(//*[@class="ant-input-number-input"])'); }
    public get imgUploadModal() { return $('(//*[@data-testid="proof-photo-product"])'); }
    public get fieldInputCatatanModal() { return $('(//*[@placeholder="ketik catatan stok bermasalah"])'); }
    public get deleteIconModal() { return $('(//*[@class="text-danger-50 cursor-pointer align-center"])'); }
    public get btnSimpanModal() { return $('(//*[@data-testid="btn-submit-product"])'); }
    public get btnTambahProdukModal() { return $('(//*[@data-testid="btn-add-new-product"])'); }
    public get btnCancelModal() { return $('(//*[@data-testid="btn-cancel-modal"])'); }

    // Section 3 Dokumen 
    public get menuPermintaanBarang() { return $('//*[@data-node-key="permintaan_barang"]'); }
    public get menuBuktiAlokasiBarang() { return $('//*[@data-node-key="proof_allocation"]'); }
    public get imgUploadPB() { return $('//*[@data-testid="bad-stock-request-doc"]'); }
    public get imgUploadBAB0() { return $('//*[@data-testid="bad-stock-proof-allocation-0"]'); }
    public get imgUploadBAB1() { return $('//*[@data-testid="bad-stock-proof-allocation-1"]'); }
    public get imgUploadBAB2() { return $('//*[@data-testid="bad-stock-proof-allocation-2"]'); }
    public get imgUploadBAB3() { return $('//*[@data-testid="bad-stock-proof-allocation-3"]'); }


    //Menu Inventory
    public get navMenuStock() { return $('//*[@data-testid="Menu-Stock"]'); }
    public get menuInventory() { return $('//*[@data-testid="Menu-InventoryV3"]'); }
    public get btnSearch() { return $('//*[@id="btnSearch"]'); }
    public get fieldInputSearchStock() { return $('//*[@placeholder="Cari Nama Product"]'); }
    public get btnCariStock() { return $('//*[@data-id="enter-btn"]'); }
    public get btnExpandSG() { return $('//*[@data-id="btn-expand-stock-warehouse"]'); }
    public get btnExpandSLG() { return $('//*[@data-id="btn-expand-stock-out-warehouse"]'); }
    public get textStokBlmRilis() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[6]/*[1]'); } //*[@data-id="btn-unreleased-stock-0"]
    public get textStokTemporary() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[14]/*[1]'); } //*[@data-id="btn-temporary-stock-0"]
    public get textStokRusak() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[15]/*[1]'); } //*[@data-id="btn-bad-stock-0"]
    public get textStokRetur() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[16]/*[1]'); } //*[@data-id="btn-retur-stock-0"]
    public get loadingScreen() { return $('//*[@class="s_Z-4M6HSt"]'); }

}