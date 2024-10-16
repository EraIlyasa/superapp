export default new class merekPage {

    //List 
    get titlePage() { return $('(//*[@class="s_qzwtq9Zy"])')}
    get fieldInputSearch() {return $('(//*[@placeholder="Cari nama merk"])')}
    get namaMerek() { return $('(//*[@data-row-key="1044"])//*[contains(text(), "Mama Koko")]')}
    get noDataMerek() { return $('(//*[@class="css-1vp3ixv ant-empty"])')}
    
}