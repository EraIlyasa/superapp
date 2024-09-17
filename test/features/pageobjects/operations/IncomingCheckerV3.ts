class IncomingCheckerV3 {
    public get inputSearch() {
        return $('//*[@data-testid="search-bar"]');
    } 
    public get btnCari() {
        return $('//*[@id="searchBar"]/div/span/span/span[2]/button');
    }
    public get filterGudang() {
        return $('//*[@data-id="warehouse_id"]');
    }
    public get filterSupplier() {
        return $('//*[@data-id="supplier"]');
    }
    public get tabSupplier() {
        return $('//*[@data-id="tab-0-btn"]')
    }
    public get btnInputIncoming() {
        return $('//*[@id="icon-action"]');
    }
    //Modal Input Incoming
    public get noAntrian() {
        return $('//*[@data-id="antrian-no"]');
    }
    public get kodeSource() {
        return $('//*[@data-id="source"]');
    }
    public get btnAddProduct() {
        return $('//*[@data-testid="btn-add-product"]');
    }
    public get uploadImage() {
        return $('//*[@data-testid="upload-image"]');
    }
    public get dropdownProduct() {
        return $('//*[@id="modal-content"]/div[3]//div[2]/table/tbody/tr[2]/td[3]//div[2]/div/span[2]');
    }
    public get listProduct() {
        return $('//*[@id="modal-content"]/div[3]//div[2]/table/tbody/tr[2]/td[3]//div[2]/div[2]//div[2]//div');
    }
    public get unitProduct() {
        return $('//*[@id="modal-content"]/div[3]//div[2]/table/tbody/tr[2]/td[4]/div[1]/div[2]/div/span[2]');
    }
    public get chooseUnit() {
        return $('//*[@id="modal-content"]/div[3]//div[2]/table/tbody/tr[2]/td[4]/div[1]/div[2]/div[2]//div[2]//div');
    }
    public get inputQtySatuan() {
        return $('//*[@data-id="input-qty"]');
    }
    public get iconUp() {
        return $('//*[@data-icon="up"]');
    }
    public get iconDown() {
        return $('data-icon="down"');
    }
    public get expireDate() {
        return $('//*[@data-id="expired-date-0"]');
    }
    public get productionDate() {
        return $('//*[@data-id="production-date-0"]');
    }
    public get deleteProduct() {
        return $('//*[@data-id="btn-delete"]');
    }
    public get btnSubmitIncoming() {
        return $('//*[@data-id="btn-submit-swipeable"]');
    }
    public get btnSubmitModal() {
        return $('//*[@data-id="btn-update-status"]');
    }
    public get btnCancelModal() {
        return $('data-id="btn-close-modal"');
    }
}