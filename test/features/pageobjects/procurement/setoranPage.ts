export default new class setoranPage {
    //Menu
    get navMenuFinance() {return $('(//*[@data-testid="Menu-Finances"])');}
    get menuSetoran() {return $('(//*[@data-testid="Menu-Setoran"])');}

    //List Menu Setoran
    get textPICSetoran() { return $('(//*[@data-testid="deposit-maker-0"])')}
    get textJenisSetoran() { return $('(//*[@data-testid="deposit-type-0"])')}
    get namaPembuat() { return $('(//*[@data-testid="filter-created-by"])')}
    get jenisSetoranFilter() { return $('(//*[@data-testid="chip-large-jenis-setoran-semua"])')}
    get gudangFilter() { return $('(//*[@data-testid="chip-large-gudang-aloha"])')}
    get tglSetoranFilter() { return $('(//*[@data-testid="dropdown-filter-periode"])')}
    get btnBuatSetoranNew() {return $('(//*[contains(text(), "Buat Setoran")])');} 
    get titlePage() { return $('(//*[@class="flex gap-size-16"])')}
    get fieldInputSearch() {return $('(//*[@placeholder="Cari Kode Setoran / Kode Invoice"])')}
    get kodeSetoran() { return $('(//*[@data-testid="code-0"])/*/*[1]')}
    get noDataSetoran() { return $('(//*[@class="css-1vp3ixv ant-empty"])')}

    //Filter Setoran 
    get btnReset() { return $('(//*[@data-testid="modal-reset-filter"])')}
    get btnTerapkan() { return $('(//*[@data-testid="modal-apply-filter"])')}
    get navGudang() { return $('(//*[@data-node-key="warehouse_id"])')}
    get navJenisSetoran() { return $('(//*[@data-node-key="type"])')}
    get navPetugasVendor() { return $('(//*[@data-node-key="vendor_pic_id"])')}
    get navPembuatSetoran() { return $('(//*[@data-node-key="created_by"])')}

    //jenisSetoranFilter
    get semua() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[2]//*[contains(text(),"Semua")]')}
    get inhouse() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[2]//*[contains(text(),"Inhouse")]')}
    get vendor() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[2]//*[contains(text(),"Vendor")]')}
    get consigment() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[2]//*[contains(text(),"Consignment")]')}
    
    //Pembuat Setoran fitler
    get searchPembuatSetoran() { return $('(//*[@placeholder="Cari Nama Pembuat Setoran"])')}
    get btnClear() { return $('(//*[@data-testid="button-link-small-clear"])')}

    //Option Pembuat Setoran Filter
    async picName() { return $('(//*[@label="Era Ilyasa"])')}
    get getName() { return $('(//*[@class="ant-checkbox-wrapper Checkbox_container__SAOkr undefined css-1vp3ixv"])')}
    //gudangFilter
    get gudangAlohaRTP() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])//*[contains(text(),"Aloha-RTP")]')}

    //tglSetoran
    get hariIni() { return $('(//*[@class="rc-virtual-list-holder-inner"])//*[@title="Hari Ini"]')}
    get lastWeek() { return $('(//*[@class="rc-virtual-list-holder-inner"])//*[@title="7 hari terakhir"]')}
    get lastMonth() { return $('(//*[@class="rc-virtual-list-holder-inner"])//*[@title="30 hari terakhir"]')}
    get custom() { return $('(//*[@class="rc-virtual-list-holder-inner"])//*[@title="Custom"]')}
    
    //Create Setoran
    get btnBuatSetoran() {return $('(//*[@data-testid="btn-setor"])');}
    get btnPrintBuktiSetor() {return $('(//*[@data-testid="btn-print"])');}
    get btnCancel() {return $('(//*[@data-testid="btn-cancel"])');}
    get btnSayaYakin() {return $('(//*[@data-testid="btn-submit"])');}
    get btnConfirmDelete() {return $('(//*[@data-testid="btn-delete"])');}

    //Section 1 Detail Kurir 
    get fieldTipeOrder() {return $('(//*[@class="ant-select-selection-search-input"])[2]');}
    get fieldGudang() {return $('(//*[@class="ant-select-selection-search-input"])[3]');}
    get fieldInputNamaKurir() {return $('(//*[@class="ant-select-selection-search-input"])[4]');}
    get fieldInputBayarCash() {return $('(//*[@class="ant-input css-1vp3ixv"])');}


    //Section 2 Pesanan Selesai 
    get aksiKonfirmasi0() {return $('(//*[@data-testid="action-0"])/*/*[1]');}
    get aksiKonfirmasi1() {return $('(//*[@data-testid="action-1"])/*/*[1]');}
    get aksiKonfirmasi2() {return $('(//*[@data-testid="action-2"])/*/*[1]');}

    //tbody element
    get assertMetodeBayar0() {return $('(//*[@class="ant-table-tbody"])[1]/*[2]/*[3]');}
    get assertMetodeBayar1() {return $('(//*[@class="ant-table-tbody"])[1]/*[3]/*[3]');}
    get assertMetodeBayar2() {return $('(//*[@class="ant-table-tbody"])[1]/*[4]/*[3]');}


    //without tbody element
    get textMetodeBayar0() {return $('(//*[@data-testid="invoice-0"])[2]');}
    get textMetodeBayar1() {return $('(//*[@data-testid="invoice-1"])[3]');}
    get textMetodeBayar2() {return $('(//*[@data-testid="invoice-2"])[3]');}

    get aksiHapus() {return $('(//*[@data-testid="action-0"])/*/*[2]');}
    get uploadImage1() {return $('(//*[@data-testid="form-image-upload"])[1]');}
    get uploadImage2() {return $('(//*[@data-testid="form-image-upload"])[2]');}
    get uploadImage3() {return $('(//*[@data-testid="form-image-upload"])[3]');}
    get fieldInputBuktiTF1() {return $('(//*[@class="ant-input css-1vp3ixv"])[2]'); }
    get fieldInputBuktiTF2() {return $('(//*[@class="ant-input css-1vp3ixv"])[3]'); }
    get fieldInputBuktiTF3() {return $('(//*[@class="ant-input css-1vp3ixv"])[4]'); }
    get btnSimpanModal() {return $('(//*[@data-testid="btn-cancel-delete"])');}
    get btnBatalModal() {return $('(//*[@data-testid="btn-submit"])');}
    get btnImportCSV() {return $('//*[@data-testid="btn-import-csv"]');}
    get importCSVModal() {return $('//*[@data-testid="form-file-import"]')}
    get btnImport() {return $('//*[@id="submit-import"]'); }
    get btnClearRevisiBayar() {return $('//*[@class="ant-input-clear-icon"]');}



    //Section 1 Detail Kurir Option
    get optTipeOrder0() {return $('//*[@title="Inhouse"]');}
    get optTipeOrder1() {return $('//*[@title="Vendor"]');}
    get optTipeOrder2() {return $('//*[@title="Consignment"]');}
    get optGudang0() {return $('(//*[@title="Aloha"])[2]');}
    get optGudang1() {return $('(//*[@title="Aloha-RTP"])');}
    get optGudang2() {return $('(//*[@title="Bandung"])');}
    get optNamaKurirInhouse() {return $('(//*[@title="feboi243"])');}
    get optNamaKurirVendor() {return $('(//*[@title="SANGAR SURABAYA"])');}

    get hapusRow1() {return $('(//*[@data-testid="action-1"])/*/*[2]');}
    get hapusRow2() {return $('(//*[@data-testid="action-2"])/*/*[2]');}

    async getOptKurir(name: string) {
        return $('(//*[@title="'+ name +'"])')
    }
}