export default new class masterDataGudang {

    //List 
    get titlePage() { return $('(//*[@class="flex gap-size-16"])')}
    get fieldInputSearch() { return $('(//*[@placeholder="Cari nama gudang"])')}
    get textNamaGUdang() { return $('(//*[@data-testid="name-0"])/*/*[1]')}
    get noData() { return $('(//*[@class="css-1vp3ixv ant-empty"])')}

}