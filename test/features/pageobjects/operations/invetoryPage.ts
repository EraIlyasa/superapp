export default new class invetoryPage {

    //List 
    get btnExportCSV() { return $('(//*[@id="exportCSVButtonList"])')}
    get fieldInputSearch() {return $('//input[@data-testid="search-bar"]')}
    get btnCari() {return $('//span[@data-id="enter-btn"]');}
    get btnSearch() {return $('(//*[@id="btnSearch"])')}
    get titlePage() { return $('(//*[@class="s_qzwtq9Zy"])')}
    get infoProduk() { return $('(//*[@data-id="product-name-0"])')}
}