export default new class supplierPage {

    //List 
    get titlePage() { return $('(//*[@class="s_qzwtq9Zy"])')}
    get fieldInputSearch() {return $('(//*[@placeholder="Cari nama atau alias supplier"])')}
    get namaSupplier() { return $('(//*[@data-row-key="795"])//*[contains(text(),"Supplier RJ")]')}
    get noDataSupplier() { return $('(//*[@class="css-1vp3ixv ant-empty"])')}
    
}