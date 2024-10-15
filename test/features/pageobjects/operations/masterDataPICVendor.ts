export default new class masterDataPICVendor {

    //List 
    get titlePage() { return $('(//*[@class="flex gap-size-16"])')}
    get fieldInputSearch() { return $('(//*[@placeholder="Cari nama vendor"])')}
    get textNamaVendor() { return $('(//*[@class="ant-table-tbody"])/*[2]/*[2]/*[1]')}
    get noDataVendor() { return $('(//*[@class="css-1vp3ixv ant-empty"])')}
}