class materData_Kendaraanv4 {

    //List 
    get titlePage() { return $('(//*[@class="flex gap-size-16"])')}
    get fieldInputSearch() { return $('(//*[@placeholder="Cari nama kendaraan"])')}
    get textNamaKendaraan() { return $('(//*[@class="ant-table-tbody"])/*[2]/*[3]')}
    get noDataKendaraan() { return $('(//*[@class="css-1vp3ixv ant-empty"])')}
    
    public get masterData() {
        return $('//span[@data-testid="Menu-MasterData"]');
    }
    public get kendaraanV4Menu() {
        return $('//span[@class="ant-menu-title-content"]/*[@data-testid="Menu-KendaraanV4"]');
    }
    public get buatKendaraan() {
        return $('//button[@data-testid="btn-create-vehicle"]');
    }
    public get inputSearch() {
        return $('//input[@placeholder="Cari nama kendaraan"]');
    }
    public get btnExport() {
        return $('//button[@data-testid="btn-export-csv"]');
    }
    public get btnImport() {
        return $('//button[@data-testid="btn-import-csv"]');
    }
    public get Motor() {
        return $('//span[@class="ant-radio ant-wave-target"]/*[@value="Motor"]');
    }
    public get Mobil() {
        return $('//span[@class="ant-radio ant-wave-target ant-radio-checked"]/*[@value="Mobil"]');
    }
    public get inputKendaraan() {
        return $('//input[@placeholder="Ketik atau cari nama kendaraan"]')
    }
    public get inputPlatNomor() {
        return $('//input[@placeholder="Ketik plat nomor kendaraan"]')
    }
    public get switchStatusBtn() {
        return $('//button[@data-testid="vehicle-form-select-status"]');
    }
    public get batalBtn() {
        return $('//button[@type="button"]/*[contains(text(), "Batal")]');
    }
    public get simpanBtn() {
        return $('//button[@type="button"]/*[contains(text(), "Simpan")]');
    }
    public get simpanBtnKonfirmasi() {
        return $('//button[@data-testid="btn-confirm-modal"]');
    }
    public get tidakJadiBtn() {
        return $('//button[@class="ant-btn css-1vp3ixv ant-btn-ghost ant-btn-lg Button_button_QU6uO Button_ghostt9rWe Button_large_Z_hZd"]');
    }
    public get kembaliKeFormBtn() {return $('//div[@class="ant-col ant-col-24 css-1vp3ixv"]/[@type="button"]');} //('//button[@type="button"]/[contains(text(), "Kembali ke Form")]');}

    //Expect
    public get title() {
        return $('//div[@class="flex gap-size-16"]');
    }
    public get namaKendaraan() {
        return $('//tbody[@class="ant-table-tbody"]/[2]/[3]');
    }
    public get errorPlatNomor() {
        return $('//div[@class="VehicleForm_title__C5G_4"]');
    }
}
export default new materData_Kendaraanv4();