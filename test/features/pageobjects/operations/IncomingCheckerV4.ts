class IncomingChecker {
    public get tabSupplier() {
        return $('//*[@data-node-key="tab-supplier"]');
    }
    public get inputSearch() {
        return $('//*[@id="__next"]//div/main//div[2]/div[3]/div[2]/div[1]//div/span');
    }
    public get filterGudang() {
        return $('//*[@id="__next"]//div/main//div[2]/div[3]/div[2]/div[2]/span[1]');
    }
    public get filterSupplier() {
        return $('//*[@id="__next"]//div/main//div[2]/div[3]/div[2]/div[2]/span[2]');
    }
    public get countMengantri() {
        return $('//*[@id="__next"]//div/main//div[2]/div[3]/div[2]/div[3]/div[1]');
    }
    public get countDicekByTL() {
        return $('//*[@id="__next"]//div/main//div[2]/div[3]/div[2]/div[3]/div[2]');
    }
    public get countSelesai() {
        return $('//*[@id="__next"]//div/main//div[2]/div[3]/div[2]/div[3]/div[3]');
    }
}