export default new class pages{

    get navMenuMarketing(){
        return $('//*[@data-testid="Menu-Marketing"]');
    }

    get menuCMSV4(){
        return $('//*[@class="ant-menu-title-content"]/*[@data-testid="Menu-CMSV4"]');
    }

    get menuPages(){
        return $('//*[@data-testid="Menu-Pages"]');
    }

    get btnBuatPage(){
        return $('//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"]');
    }

    get inputNamaPage(){
        return $('//*[@placeholder="Masukkan Nama Page"]');
    }

    get inputPageLink(){
        return $('//*[@placeholder="Masukan link"]');
    }

    get inputStartDateBuatPage(){
        return $('(//*[@placeholder="HH:MM:SS"])[1]');
    }

    get inputEndDateBuatPage(){
        return $('(//*[@placeholder="DD Mon YYYY"])[2]');
    }

    get selectStartTimeBuatPage(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-default ant-btn-lg Button_button__QU6uO Button_outline__QxRzb Button_large__Z_hZd"])[1]');
    }

    get selectEndTimeBuatPage(){
        return $('(//*[@title="2024-09-24"])[1]');
    }

    get inputJudulHeader(){
        return $('//*[@placeholder="Masukkan Judul Header"]');
    }

    get toggleStatusPage(){
        return $('//*[@class="ant-switch-handle"]');
    }

    get selectTemplatePage(){
        return $('(//*[@class="ant-select-selection-item"])[2]');
    }

    get selectTemplate2(){
        return $('//*[@title="Template 2"]');
    }

    get inputLabelDiButton(){
        return $('//*[@placeholder="Masukkan Label"]');
    }

    get inputLinkButton(){
        return $('//*[@placeholder="Masukkan Link"]');
    }

    get selectTemplate3(){
        return $('//*[@title="Template 3"]');
    }

    get inputJumlahBanner(){
        return $('(//*[@class="ant-select-selection-item"])[3]');
    }

    get selectJumlahBanner(){
        return $('//*[@title="3"]');
    }

    get pickFileBanner(){
        return $('//*[@class="UploadArea_draggerContainer__UzQE0"]');
    }

    get selectTemplate4(){
        return $('//*[@title="Template 4"]');
    }

    get pickBannerImage(){
        return $('//*[@class="UploadArea_containerUpload__U47yP"]');
    }

    get btnUploadGambar() {
        return $('//span[@class="ant-upload"]/*[@type="file"]');
    }

    get btnUploadFile() {
        return $('//*[@data-testid="form-file-upload-image"]');
    }

    get pickKategori(){
        return $('(//*[@class="Dropdown_selectContainer__CJTkE"])[4]');
    }

    get pickKategoriSubkategori(){
        return $('//*[@title="Subkategori"]');
    }

    get pickKategoriProdukSpesifik(){
        return $('//*[@title="Produk Spesifik"]');
    }

    get btnTambahProduk(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-ghost text-primary-50 w-full justify-center Button_button__QU6uO Button_ghost__t9rWe Button_medium__hRLU4"])');
    }

    get fieldCariNamaProduk(){
        return $('//*[@placeholder="Cari nama produk"]');
    }

    get selectBagUnit(){
        return $('(//*[@type="checkbox"])[1]');
    }

    get btnSimpanProduk(){
        return $('//*[@class="ModalFullFrame_footerRight__c5wWR"]');
    }

    get cardPreview(){
        return $('//*[@class="product-name"]');
    }

    get pickSubKategori(){
        return $('(//*[@class="ant-select ant-select-outlined ant-select-compact-item ant-select-compact-first-item ant-select-compact-last-item css-1vp3ixv ant-select-single ant-select-show-arrow ant-select-show-search"])');
    }

    get pickFrozenAyam(){
        return $('//*[@title="Frozen Ayam"]');
    }

    get isiKonten(){
        return $('//*[@class="ql-editor ql-blank"]');
    }

    get btnSimpanPage(){
        return $('//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"]');
    }

    get btnEditPage(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-ghost text-greyscale-50 Button_button__QU6uO Button_ghost__t9rWe Button_medium__hRLU4"])[2]');
    }

    get btnEditProduk(){
        return $('//*[@class="ant-btn css-1vp3ixv ant-btn-ghost text-primary-50 w-full justify-center Button_button__QU6uO Button_ghost__t9rWe Button_medium__hRLU4"]');
    }

    get selectKartonUnit(){
        return $('(//*[@class="ant-checkbox-input"])[1]');
    }

    get btnSimpanEdit(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"])[1]');
    }

}