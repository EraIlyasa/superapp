export default new class manajemenStock {
    
    //List
    public get noDataAlert() {
        return $('(//*[@class="s_vnxcOuqb "])')
    }
    public get infoProduk() {
        return $('(//*[@data-id="product-name-0"])/*[1]')
    }
    public get titlePage() {
        return $('(//*[@class="s_qzwtq9Zy"])')
    }
    public get fieldInputSearch() {
        return $('//*[@data-testid="search-bar"]');
    }
    public get btnSearch() {
        return $('(//*[@id="btnSearch"])')
    }
    public get btnCari() {
        return $('//*[@data-id="enter-btn"]');
    }
    public get filterGudang() {
        return $('//*[@data-id="btn-filter-warehouse"]');
    }
    public get filterKetersediaanStok() {
        return $('//*[@data-id="btn-filter-stock-availability"]');
    }
    public get filterTipeProduk() {
        return $('//*[@data-id="btn-filter-type"]');
    }
    public get filterSatuan() {
        return $('//*[@data-id="btn-filter-unit"]');
    }
    public get tabReguler() {
        return $('//*[@id="site-layout-background"]//div[3]//div[1]/div[1]//div[1]');
    }
    public get colInfoProduk() {
        return $('//*[@data-id="product-name-0"]');
    }
    public get statusProduk() {
        return $('//*[@data-id="btn-update-status-0"]');
    }
    public get colStokblmRilis() {
        return $('//*[@data-id="btn-unreleased-stock-0"]');
    }
    public get colStokRilis() {
        return $('//*[@data-id="btn-released-stock-0"]');
    }
    public get colStokFlashSale() {
        return $('//*[@data-id="btn-flashsale-stock-0"]');
    }
    public get colStokHadiah() {
        return $('//*[@data-id="btn-reward-stock-0"]');
    }
    public get colStokConsigment() {
        return $('//*[@data-id="btn-consignment-stock-0"]');
    }
    //Action rilis/unril dan konversi
    public get btnRilis() {
        return $('//*[@data-id="btn-release-undefined"]');
    }
    public get btnUnrilis() {
        return $('/*[@data-id="btn-unrelease-undefined"]');
    }
    public get btnKonversi() {
        return $('//*[@data-id="btn-conversion-1684"]');
    }

    //Modal Rilis-Unrilis
    public get rilisStokReguler() {
        return $('//*[@data-id="regular"]')
    }
    public get rilisFlashSale() {
        return $('//*[@data-id="flashsale"]');
    }
    public get rilisHadiah() {
        return $('//*[@data-id="reward"]');
    }
    public get rilisConsignment() {
        return $('//*[@data-id="consignment"]');
    }
    public get btnRilisUnrilis() {
        return $('//*[@data-id="btn-submit-release-unrelease"]');
    }
}