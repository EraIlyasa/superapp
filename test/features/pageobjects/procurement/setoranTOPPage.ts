export default new class setoranTOPPage {

    //List Menu Setoran
    get btnImportCSV() { return $('(//*[@data-testid="btn-import-csv"])')}
    get btnExportCSV() { return $('(//*[@data-testid="button-ghost-medium-export-csv"])')}
    get btnFilterTipePT() { return $('(//*[@data-testid="filter-tipe-pt"])')}
    get btnFilterGudang() { return $('(//*[@data-testid="filter-gudang"])')}
    get btnFilterPeriode() { return $('(//*[@data-testid="dropdown-filter-periode"])')}
    get tglSetoranTOPFilter() { return $('(//*[@data-testid="dropdown-filter-periode"])')}
    get titlePage() { return $('(//*[@class="flex gap-size-16"])')}
    get fieldInputSearch() {return $('(//*[@placeholder="Cari Kode Transaksi / Customer"])')}
    get textKodeTransaksi() { return $('(//*[@data-testid="invoice-1"])')}
    get noDataSetoranTOP() { return $('(//*[@class="css-1vp3ixv ant-empty"])')}
    
    //tglSetoran
    get hariIni() { return $('(//*[@class="rc-virtual-list-holder-inner"])//*[@title="Hari ini"]')}
    get bulanIni() { return $('(//*[@class="rc-virtual-list-holder-inner"])//*[@title="Bulan ini"]')}
    get custom() { return $('(//*[@class="rc-virtual-list-holder-inner"])//*[@title="Custom"]')}
    
}