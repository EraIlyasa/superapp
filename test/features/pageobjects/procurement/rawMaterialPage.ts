export default new class rawMaterialPage {

    //List 
    get titlePage() { return $('(//*[@class="s_qzwtq9Zy"])')}
    get fieldInputSearch() {return $('(//*[@placeholder="Cari Raw Material"])')}
    get btnEnter() {return $('(//*[@data-icon="enter"])');}
    get btnSearch() {return $('(//*[@id="btnSearch"])')}
    get rawMaterialName() { return $('(//*[@class="ant-table-tbody"])/*[2]/*[3]/*/*[2]/*[1]')}
    get noDataRM() { return $('(//*[@class="ant-empty ant-empty-normal"])')}

}