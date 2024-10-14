export default new class e2ePenjualanRTP {

    //Menu Gudang
    //Gudang List 
    get btnDetailGudang() { return $('(//*[@data-testid="name-0"])//*[contains(text(), "Detail")]')}
    get btnBuatGudang() { return $('(//*[@data-testid="button-solid-large-buat-gudang"])')}
    get fieldInputSearchGudang() { return $('(//*[@placeholder="Cari nama gudang"])')}
    
    //Detail Gudang 
    get btnEditGudang() { return $('(//*[@data-testid="button-edit"])[2]')}
    get btnKembali() { return $('(//*[@data-testid="button-edit"])[1]')}

    //Edit Gudang
    get successAlert() { return $('(//*[@class="Toast_contentDetail__XdAlQ"])')}
    get validasiSimpan() { return $('(//*[@data-testid="button-solid-large-ya-simpan"])')}
    get radioBtn1() { return $('(//*[@data-testid="radio-berdasarkan-kendaraan"])')}
    get radioBtn2() { return $('(//*[@data-testid="radio-berdasarkan-create-order"])')}
    get fieldMinLifestyle() { return $('(//*[@placeholder="0"])[1]')}
    get fieldMinAllCat() { return $('(//*[@placeholder="0"])[2]')}
    get btnSimpan() { return $('(//*[@data-testid="button-submit"])')}
    get btnBatal() { return $('(//*[@data-testid="button-cancel"])')}

    //Menu Administrator
    //Setting General 
    async minOrder(x:string) { 
        return $('//*[@class="defaultTable"]/*[2]//*[contains(text(),"kota surabaya")]/following-sibling::*['+x+']/*')
        //1, 2, etc = x 
    }
    get gudangDropDown() { return $('//*[@class="MuiSelect-root MuiSelect-select MuiInputBase-input MuiInput-input"]')}
    get minOrderTab() { return $('//*[@class="MuiTab-wrapper" and contains(text(), "Minimum Order")]')}

    //Option General
    get optGudang() { return $('//*[@value="8"]')}
}