export default new class masterDataKurir {

    //List 
    get titlePage() { return $('(//*[@class="flex gap-size-16"])')}
    get fieldInputSearch() { return $('(//*[@placeholder="Cari nama kurir"])')}
    get textNamaKurir() { return $('(//*[@class="ant-table-tbody"])/*[2]/*[3]/*/*[1]')}
    get noDataKurir() { return $('(//*[@class="css-1vp3ixv ant-empty"])')}

}