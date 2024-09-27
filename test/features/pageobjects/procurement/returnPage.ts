export default new class returnPage {

    //List 
    get btnSearch() { return $('//*[@id="btnSearch"]')}
    get fieldInputSearch() { return $('//*[@data-testid="search-bar"]')}
    get btnCari() { return $('//*[@data-id="enter-btn"]')}
    get btnMoreFilter() { return $('//*[@data-id="filter-modal-trigger"]')}
    get kodeInvoice0() { return $('(//*[@id="detail-invoice-penjualan-undefined"])[1]')}
    get btnDetailInvoice() { return $('(//*[@class="color-primary d-flex align-center gap-1"])[1]')}
    get btnCreateReturn() { return $('(//*[@id="btnAdd"])')}


    //Create Return
    get btnSimpan() { return $('(//*[@id="btnSave"])')}
    get btnBatal() { return $('(//*[@id="btnCancel"])')}
    
    //Section 1 Informasi Umum
    get fieldGudang() { return $('//*[@data-testid="dropdown-gudang-return"]')}
    get fieldKategori() { return $('//*[@data-testid="dropdown-category-return"]')}
    get fieldSupplier() { return $('//*[@data-testid="dropdown-supplier-return"]')}
    get fieldKodeTransaksi() { return $('//*[@id="Kode Transaksi"]')}
    
    //Section 2 Produk Retur
    get btnTambahkanProduk() { return $('//*[@id="btnAddProduct"]')}
    async fieldInputQtyRetur(x:string) { 
        return $('(//*[@id="quantity"])'+x+'')
    }
        //[1], [2], [3], etc = x
    get btnSimpanModal() { return $('(//*[@id="submitBtn"])')}
    get btnBatalModal() { return $('(//*[@id="cancelBtn"])')}
    get btnSearchModal() { return $('(//*[@placeholder="Ketik untuk mencari produk"])')}
    get btnUbahProduk() { return $('//*[@data-testid="btn-edit-product"]')}
    async btnRemove(x:string) { 
        return $('//*[@id="removeProduct-'+x+'"]')
    }

    //Section 3 Imbalan Retur 
    get fieldTipeRetur() { return $('(//*[@class="ant-select-selection-search-input"])[3]')}

    //Section 3 Option
    async optTipeRetur(x:string) { 
        return $('(//*[@title="'+x+'"])')
        //Refuns, Kredit, Barang = x
    }


    }
    