@pages
Feature: Create-page

    @template-1
    Scenario Outline: User berhasil membuat page dengan template 1
    When api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuCMSV4" inside "navMenuMarketing"
    And User click "menuPages" inside "menuCMSV4"
    And User click "btnBuatPage" inside "menuPages"
    And User input "Test QA 17 Sep 2024 Template 1" into "inputNamaPage"
    And User input "google.com" into "inputPageLink"
    And User click "inputStartDateBuatPage"
    And User click "selectStartTimeBuatPage"
    And User click "inputEndDateBuatPage"
    And User click "selectEndTimeBuatPage"
    And User input "<judulHeader>" into "inputJudulHeader"
    And User click "toggleStatusPage"
    And User click "pickBannerImage"
    And User wait for 5 seconds
    And User select image
    And User wait for 3 seconds
    And User input "<isi konten>" into "isiKonten"
    And User click "btnSimpanPage"
    And User wait for 5 seconds
    Then User able to see "Data Tersimpan!" message verification
    And User wait for 10 seconds 

    @template-2
    Scenario Outline: User berhasil membuat page dengan template 2
    When api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuCMSV4" inside "navMenuMarketing"
    And User click "menuPages" inside "menuCMSV4"
    And User click "btnBuatPage" inside "menuPages"
    And User input "Test QA 17 Sep 2024 Template 2" into "inputNamaPage"
    And User input "google.com" into "inputPageLink"
    And User click "inputStartDateBuatPage"
    And User click "selectStartTimeBuatPage"
    And User click "inputEndDateBuatPage"
    And User click "selectEndTimeBuatPage"
    And User input "<judulHeader>" into "inputJudulHeader"
    And User click "toggleStatusPage"
    And User click "selectTemplatePage"
    And User click "selectTemplate2" inside "inputTemplatePage"
    And User click "pickBannerImage"
    And User wait for 5 seconds
    And User select image
    And User wait for 3 seconds
    And User input "<isi konten>" into "isiKonten"
    And User input "Click here" into "inputLabelDiButton"
    And User input "www.google.com" into "inputLinkButton"
    And User click "btnSimpanPage"
    And User wait for 5 seconds
    Then User able to see "Data Tersimpan!" message verification
    And User wait for 10 seconds 

    @template-3
    Scenario Outline: User berhasil membuat page dengan template 3
    When api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuCMSV4" inside "navMenuMarketing"
    And User click "menuPages" inside "menuCMSV4"
    And User click "btnBuatPage" inside "menuPages"
    And User input "Test QA 17 Sep 2024 Template 3" into "inputNamaPage"
    And User input "google.com" into "inputPageLink"
    And User click "inputStartDateBuatPage"
    And User click "selectStartTimeBuatPage"
    And User click "inputEndDateBuatPage"
    And User click "selectEndTimeBuatPage"
    And User input "<judulHeader>" into "inputJudulHeader"
    And User click "toggleStatusPage"
    And User click "selectTemplatePage"
    And User click "selectTemplate3" inside "inputTemplatePage"
    And User click "inputJumlahBanner"
    And User click "selectJumlahBanner" inside "inputJumlahBanner"
    And User click "pickFileBanner"
    And User wait for 5 seconds
    And User select file
    And User wait for 3 seconds
    And User click "btnSimpanPage"
    And User wait for 5 seconds
    Then User able to see "Data Tersimpan!" message verification
    And User wait for 10 seconds 

    @template-4-subkategori
    Scenario Outline: User berhasil membuat page dengan template 4
    When api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuCMSV4" inside "navMenuMarketing"
    And User click "menuPages" inside "menuCMSV4"
    And User click "btnBuatPage" inside "menuPages"
    And User input "Test QA 17 Sep 2024 Template 4" into "inputNamaPage"
    And User input "google.com" into "inputPageLink"
    And User click "inputStartDateBuatPage"
    And User click "selectStartTimeBuatPage"
    And User click "inputEndDateBuatPage"
    And User click "selectEndTimeBuatPage"
    And User input "<judulHeader>" into "inputJudulHeader"
    And User click "toggleStatusPage"
    And User click "selectTemplatePage"
    And User click "selectTemplate4" inside "inputTemplatePage"
    And User click "pickBannerImage"
    And User wait for 5 seconds
    And User select image
    And User wait for 3 seconds
    And User input "<isi konten>" into "isiKonten"
    And User click "pickKategori"
    And User click "pickKategoriSubkategori" inside "pickKategori"
    And User click "pickSubKategori"
    And User click "pickFrozenAyam" inside "pickSubKategori"
    And User wait for 5 seconds
    And User click "btnSimpanPage"
    And User wait for 5 seconds
    Then User able to see "Data Tersimpan!" message verification
    And User wait for 10 seconds 

    @template-4-produkspesifik
    Scenario Outline: User berhasil membuat page dengan template 4
    When api user login
    When open dashboard superapp
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuCMSV4" inside "navMenuMarketing"
    And User click "menuPages" inside "menuCMSV4"
    And User click "btnBuatPage" inside "menuPages"
    And User input "Test QA 17 Sep 2024 Template 4" into "inputNamaPage"
    And User input "google.com" into "inputPageLink"
    And User click "inputStartDateBuatPage"
    And User click "selectStartTimeBuatPage"
    And User click "inputEndDateBuatPage"
    And User click "selectEndTimeBuatPage"
    And User input "<judulHeader>" into "inputJudulHeader"
    And User click "toggleStatusPage"
    And User click "selectTemplatePage"
    And User click "selectTemplate4" inside "inputTemplatePage"
    And User click "pickBannerImage"
    And User wait for 5 seconds
    And User select image
    And User wait for 3 seconds
    And User input "<isi konten>" into "isiKonten"
    And User click "pickKategori"
    And User click "pickKategoriProdukSpesifik" inside "pickKategori"
    And User click "btnTambahProduk"
    And User wait for 3 seconds
    And User click "fieldCariNamaProduk"
    And User input "Produk Load Test 1" into "fieldCariNamaProduk"
    And User wait for 3 seconds
    And User click "selectBagUnit"
    And User click "btnSimpanProduk"
    And User wait for 3 seconds
    And The added product should be shown on preview
    And User click "btnSimpanPage"
    And User wait for 5 seconds
    Then User able to see "Data Tersimpan!" message verification
    And User wait for 10 seconds 

    @template-4-edit
    Scenario Outline: User berhasil mengubah page
    When api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuCMSV4" inside "navMenuMarketing"
    And User click "menuPages" inside "menuCMSV4"
    And User click "btnEditPage" inside "menuPages"
    And User click "btnEditProduk"
    And User wait for 3 seconds
    And User click "selectKartonUnit"
    And User wait for 3 seconds
    And User click "btnSimpanProduk"
    And User wait for 3 seconds
    And The added product should be shown on preview
    And User click "btnSimpanEdit"
    And User wait for 5 seconds
    Then User able to see "Data Tersimpan!" message verification
    And User wait for 10 seconds 

    @hapus-page
    Scenario Outline: Tampil alert hapus page
    When api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuCMSV4" inside "navMenuMarketing"
    And User click "menuPages" inside "menuCMSV4"
    And User click "btnDetailPage" inside "menuPages"
    And User click "btnHapusPage"
    And User click "btnConfirmHapusPage" inside "btnHapusPage"
    And User wait for 3 seconds
    Then User able to see "Gagal Menyimpan Data!" message verification
    And User wait for 5 seconds 