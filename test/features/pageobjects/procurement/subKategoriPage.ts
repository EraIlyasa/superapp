export default new class subKategoriPage {
    
    //List 
    get titlePage() { return $('(//*[@class="s_qzwtq9Zy"])')}
    get fieldInputSearch() {return $('(//*[@placeholder="Cari Nama Sub Kategori"])')}
    get namaSubKategori() { return $('(//*[@data-row-key="73"])//*[contains(text(), "Makanan Kucing")]')}
    get noDataSubKategori() { return $('(//*[@class="css-1vp3ixv ant-empty"])')}
    
}