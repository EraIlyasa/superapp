export default new class rewardPage {

    //
    get menuRewardV4() { return $('(//*[@data-testid="Menu-RewardV4"])'); }

    //Alert 
    get successAlert() { return $('(//*[@class="Toast_section__uLPED"])')}

    //Menu Page 
    get detailReward() { return $('(//*[@data-testid="button-link-small-detail"])')}
    get tabListReward() { return $('//*[@data-node-key="reward"]'); }
    get tabRingkasanReward() { return $('//*[@data-node-key="summary-reward"]'); }
    get tabStokGudangReward() { return $('//*[@data-node-key="summary-reward"]'); }
    get btnBuatRewardNew() { return $('//*[contains(text(), "Buat Reward")]'); }
    
    //Status Reward 
    get statusReward() { return $('(//*[@data-testid="tag-filled-primary-published"])[1]')}

    //Detail Reward 
    get batalModal() { return $('(//*[@data-testid="button-ghost-large-batal"])')}
    get btnSimpanModal() { return $('(//*[@data-testid="button-solid-large-simpan"])')}
    get btnPublish() { return $('(//*[@data-testid="button-solid-medium-publish-reward"])')}
    get btnBatalPublish() { return $('(//*[@data-testid="button-outline-medium-batalkan-reward"])')}
    get btnEditReward() { return $('(//*[@data-testid="button-outline-medium-edit-reward"])')}

    //Buat Reward
    get btnSimpan() { return $('//*[contains(text(), "Simpan")]'); }
    get btnBatal() { return $('//*[contains(text(), "Batal")]'); }

    //Section 1 Informasi Umum 
    get fieldInputNamaReward() { return $('(//*[@placeholder="Masukkan Nama Reward"])[1]'); }
    get fieldTipeReward() { return $('(//*[@class="ant-select-selection-search-input"])[2]'); }
    get fieldInputMinimalBelanja() { return $('(//*[@placeholder="Masukkan Minimal Belanja"])'); }
    get fieldTipeUser() { return $('(//*[@class="ant-select-selection-search-input"])[3]'); }
    get fieldKondisi() { return $('(//*[@class="ant-select-selection-search-input"])[4]'); }
    get fieldGudang() { return $('(//*[@class="ant-select-selection-search-input"])[5]'); }
    get fieldInputKuotaUser() { return $('(//*[@placeholder="Masukkan Kuota User"])'); }
    get fieldInputStartDate() { return $('(//*[@placeholder="Select date"])[1]'); }
    get fieldInputEndDate() { return $('(//*[@placeholder="Select date"])[2]'); }
    get fieldArea() { return $('(//*[@class="ant-select-selector"])[6]'); }
    get fieldInputIntervalExp() { return $('//*[@placeholder="Masukkan waktu interval expired"]'); }
    get allertNamaReward() { return $('//*[contains(text(), "Nama Reward wajib diisi")]'); }
    get allertTipeReward() { return $('(//*[contains(text(), "Tipe Reward wajib dipiliih")])'); }
    get allertTipeUser() { return $('Tipe User wajib dipilih'); }
    get allertKondisi() { return $('(//*[contains(text(), "Kondisi wajib dipilih")])'); }
    get allertGudang() { return $('(//*[contains(text(), "Gudang wajib dipiliih")])'); }

    //Section 3 Daftar Reward 

    //Section 3 Daftar Reward
    get btnTambahDariInven() { return $('//*[contains(text(), "Tambah Dari Inventory")]'); }
    get fieldNamaProduk() { return $('(//*[@title=""])[1]'); }
    get optNamaProduk() { return $('(//*[@title="Automated Testing hehe"])'); }
    get fieldUnit() { return $('(//*[@title=""])[1]');}
    get optUnit() { return $('(//*[@title="Bag"])'); }
    get fieldInputKuotaReward() { return $('(//*[@class="ant-input-number-input"])[1]'); }
    get fieldInputQtyReward() { return $('(//*[@class="ant-input-number-input"])[2]'); }
    get actionV() { return $('(//*[@class="flex gap-size-16"])[2]/*[1]'); }
    get actionX() { return $('(//*[@class="flex gap-size-16"])[2]/*[2]'); }
    get totalStokInventory() { return $('(//tbody[@class="ant-table-tbody"])[2]/*[2]/*[4]'); }
    get btnPlus0() { return $('(//*[@class="ant-input-number-suffix"])[1]'); }
    get btnPlus1() { return $('(//*[@class="ant-input-number-suffix"])[2]'); }

    //Section 1 Informasi Umum option
    get optTipeReward0() { return $('(//*[@title="Transaksi"])'); }
    get optTipeReward1() { return $('(//*[@title="Daily Check-in"])'); }
    get optTipeReward2() { return $('(//*[@title="Tukar Poin"])'); }
    get optTipeUser0() { return $('(//*[@title="All User"])'); }
    get optTipeUser1() { return $('(//*[@title="Segment"])'); }
    get optTipeUser2() { return $('(//*[@title="User"])'); }
    get optKondisi0() { return $('(//*[@title="All Product"])'); }
    get optKondisi1() { return $('(//*[@title="All Product(Tanpa Rokok)"])'); }
    get optKondisi2() { return $('(//*[@title="And"])'); }
    get optKondisi3() { return $('(//*[@title="Or"])'); }
    get optKondisi4() { return $('(//*[@title="And Khusus"])'); }
    get optKondisi5() { return $('(//*[@title="Or Khusus"])'); }
    get optGudang() { return $('(//*[@title="Aloha"])[2]'); }
    get optArea0() { return $('(//*[@title="All"])'); }
    get optArea1() { return $('(//*[@title="kabupaten-bangkalan"])'); }
    get optArea2() { return $('(//*[@title="kabupaten-gresik"])'); }


}