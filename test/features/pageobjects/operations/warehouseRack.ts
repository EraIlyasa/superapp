export default new class warehouseRack {

    //List 
    get btnExportCSV() { return $('(//*[@id="exportCSVButtonList"])')}
    get fieldInputSearch() {return $('//input[@data-testid="search-bar"]')}
    get btnCari() {return $('//span[@data-id="enter-btn"]');}
    get btnSearch() {return $('(//*[@id="btnSearch"])')}
    get titlePage() { return $('(//*[@class="s_qzwtq9Zy"])')}
    get textRackName() {return $('(//*[@id="rackName-undefined"])[1]')}


}