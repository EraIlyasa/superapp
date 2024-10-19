export default new class kategoriPage {

    //List 
    get titlePage() { return $('(//*[@class="s_qzwtq9Zy"])')}
    get fieldInputSearch() {return $('(//*[@placeholder="Cari Nama Kategori"])')}
    get namKategori() { return $('(//*[@data-row-key="50"])//*[contains(text(), "cath non aktif")]')}
    get noDataKategori() { return $('(//*[@class="css-1vp3ixv ant-empty"])')}

}