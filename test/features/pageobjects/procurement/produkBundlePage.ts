export default new class produkBundlePage {

    //List 
    get titlePage() { return $('(//*[@class="s_qzwtq9Zy"])')}
    get fieldInputSearch() {return $('//input[@data-testid="search-bar"]')}
    get btnCari() {return $('//span[@data-id="enter-btn"]');}
    get btnSearch() {return $('(//*[@id="btnSearch"])')}
    get produkBundle() { return $('(//*[@class="ant-table-tbody"])/*[2]/*[3]/*/*[2]/*[1]')}
    get noDataProdukBundle() { return $('(//*[@class="ant-empty ant-empty-normal"])')}

}