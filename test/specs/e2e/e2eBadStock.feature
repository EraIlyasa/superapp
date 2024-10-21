@E2EBadStock
Feature: Create - Bad Bad Stock

    @E2EBadStock-0001
    Scenario Outline: Memastikan User dapat create bad stock finished good
    Given I send login url
    When I login with credential
    Then I see usernameDisplay
    When User click "navMenuStock" button in "Global" page
    And User click "menuInventory" button in "Stock"
    And User wait for 10 seconds
    And User click "btnSearch" button in inventory page
    And User click "fieldInputSearchStock" button in inventory page
    Given User input "<productName>" into "fieldInputSearchStock"
    And User click "btnCariStock"
    And User wait for 10 seconds
    And User click "btnExpandSG"
    When User verify amount of "textStokBlmRilis"
    When User verify amount of "textStokTemporary"
    When User verify amount of "textStokRusak"
    When User verify amount of "textStokRetur"
    And User wait for 5 seconds
    And User directed to "Stok Bermasalah" via "<url>"
    And User wait for 5 seconds
    Given User click "btnCreateStokBermasalah"
    And User wait for 5 seconds
    And User click "fieldInputGudang"
    And User click "optGudang0"
    And User click "btntambahProduk"
    And User wait for 5 seconds
    And User click "fieldNamaProduk"
    And User click "optNamaProduk0"
    And User click "fieldKodeSumber"
    And User click "optKodeSumber0"
    And User click "fieldInputQty"
    And User input "<qty>" "fieldInputQty"
    And User upload file to "imgUploadModal"
    And User wait for 5 seconds
    And User input "<catatan>" into "fieldInputCatatanModal"
    And User click "btnSimpanModal" in BS page
    And User wait for 5 seconds
    And User upload file to "imgUploadPB"
    And User click "menuBuktiAlokasiBarang"
    And User upload file into "imgUploadBAB0"
    And User click "btnSimpan" to create BS
    And User click "btnYaSimpanModal" to create BS
    Then User able to see "Success Message"
    And User click "menuInventory" button in "Stock"
    And User wait for 10 seconds
    And User click "btnSearch" button in inventory page
    And User click "fieldInputSearchStock" button in inventory page
    Given User input "<productName>" into "fieldInputSearchStock"
    And User click "btnCariStock"
    And User wait for 10 seconds
    And User click "btnExpandSG"
    When User verify amount of "textStokBlmRilis"
    When User verify amount of "textStokTemporary"
    When User verify amount of "textStokRusak"
    When User verify amount of "textStokRetur"
    And User wait for 5 seconds

    Examples:
      | qty | catatan           | productName     | url                                                                | catatan           |
      | 5   | automated testing | Teh Pucuk 350ml | https://v3-web-app-micro.staging.superapp.co.id/stock/bad-stock-v4 | Automated Testing |

    @E2EBadStock-0002
    Scenario Outline: Memastikan berhasil approve stok bermasalah dengan type retur dan type rusak dari PRO yang raw materialnya hasil retur barang dari raw material lain
    Given api user login
    When open dashboard superapp
    And User click "navMenuPurchasing" button in "Global" page
    And User click "menuRawMaterialV3" inside "navMenuPurchasing"
    And User click "btnCreateRM"
    And User click "imgUploadRM"
    And User upload file to "imgUploadRM"
    And User click "pilihMerek"
    And User type "Keraton" in "pilihMerek"
    And User click "inputNamaRM"
    And User type raw material name into "inputNamaRM1"
    And User click "pilihKategori"
    And User type "frozen snack" into "pilihKategori"
    And User wait for 1 second
    And User click "btnTambahAttribute"
    And User click "inputSatuan"
    And User type "cup" into "inputSatuan"
    And User click "inputKonversi"
    And User type "1" into "inputKonversi"
    And User click "inputIsi"
    And User type "100 gram" into "inputIsi"
    And User click "btnSimpanAttribute"
    And User click "btnSimpanRM"
    And User wait for 5 seconds
    And User click "menuPurchasingV3"
    And User click "menuPurchaseOrderV3" inside "menuPurchasingV3"
    And User click "btnCreatePO"
    And User click "selectJenisPO"
    And User select "optJenisPORawMaterial" in "selectJenisPO"
    And User click "selectGudangPO"
    And User select "optGudangAloha" in "selectGudang"
    And User click "selectTipePT"
    And User type "PT. Putra Abyudaya Nusantara" into "selectTipePT"
    And User click "selectSupplier"
    And User type "Ali Boedi Santoso" into "selectSupplier"
    And User click "selectTanggalKirim"
    And User click "selectToday" in "selectTanggalKirim"
    And User click "selectMetodeBayar"
    And User click "optMetodeBayarCOD" in "selectMetodeBayar"
    And User click "selectPengiriman"
    And User click "optPengirimanLocco" in "selectPengiriman"
    And User click "selectPIC"
    And User type "admin" into "selectPIC"
    And User click "selectBankSupplier"
    And User type "mandiri" into "selectBankSupplier"
    And User click "btnTambahProdukPO"
    And User click "inputNamaProduk"
    And User type raw material name into "inputNamaProduk"
    And User click "selectSatuan"
    And User click "inputQty"
    And User type "100" into "inputQty"
    And User wait for 1 second
    And User click "inputHargaSatuan"
    And User type "100000" into "inputHargaSatuan"
    And User wait for 1 second
    And User click "btnSimpanTambahProduk"
    And User click "imgUploadNotaPengajuan"
    And User upload file to "imgUploadNotaPengajuan"
    And User wait for 3 seconds
    And User click "btnSimpanPO"
    And User wait for 5 seconds
    And User get "kodePO"
    And User click "btnDetailPO"
    And User click "btnRequestPrepayment"
    And User click "btnSimpanRequestPrepayment"
    And User click "menuLogisticV3_1"
    And User click "menuIncomingGoods" in "navMenuLogistic"
    And User click "filterGudangV3"
    And User click "warehouseSumberPangan" in "filterGudangV3"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearchV3"
    And User click "searchBarV3"
    And User type PO code to "searchBarV3"
    And User click "btnCariV3"
    And User wait for 3 seconds
    And User click "btnAmbilAntrian"
    And User click "imgUploadSuratJalan"
    And User upload file to "imgUploadSuratJalan"
    And User wait for 3 seconds
    And User click "inputNamaDriver"
    And User type "Budi" into "inputNamaDriver"
    And User click "btnCheckIn"
    And User click "menuLogisticV3_2"
    And User click "menuIncomingChecker" in "navMenuLogistic"
    And User wait for 3 seconds
    # And User click "filterGudangV3"
    # And User click "warehouseSumberPangan" in "filterGudangV3"
    # And User click "btnTerapkanFilterWarehouse"
    # And User wait for 3 seconds
    And User click "btnSearchV3"
    And User click "searchBarIncomingChecker"
    And User type PO code to "searchBarIncomingChecker"
    And User click "btnCariV3"
    And User wait for 3 seconds
    And User click "btnInputIncomingV3"
    And User click "addProductInputIncoming"
    And User click "imgUploadProductIncoming"
    And User upload file to "imgUploadProductIncoming"
    And User wait for 3 seconds
    And User click "selectProductIncoming"
    And User click "selectUnitIncoming"
    And User click "inputQuantityIncoming"
    And User type "00" into "inputQuantityIncoming"
    And User click "selectProductionDate"
    And User click "selectProductionDateToday" in "selectProductionDate"
    And User click "btnSubmitIncomingModal"
    And User click "btnConfirmSubmitIncomingModal"
    And User click "menuIncomingGoods" in "navMenuLogistic"
    # And User click "filterGudangV3"
    # And User click "warehouseSumberPangan" in "filterGudangV3"
    # And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearchV3"
    And User click "searchBarV3"
    And User type PO code to "searchBarV3"
    And User click "btnCariV3"
    And User click "btnValidasiChecker"
    And User click "btnSubmitIncomingModal"
    And User click "btnSubmitValidasiIncoming"
    And User click "menuStockV3"
    And User click "menuStokBermasalah" in "menuStockV3"
    And User click "btnTambahStokBermasalah"
    And User click "optKategoriRM"
    # And User click "selectGudangRM"
    # And User click "optGudangSumberPangan" in "selectGudangRM"
    # And User wait for 10 seconds
    And User click "btntambahProduk"
    And User click "cariProdukBermasalah"
    And User type raw material name into "cariProdukBermasalah"
    And User click "pilihKodeSource"
    And User click "checkboxKodeSource"
    And User click "inputQtyRusak"
    And User type "100" into "inputQtyRusak"
    And User click "imgUploadBuktiRusak"
    And User upload file to "imgUploadBuktiRusak"
    And User wait for 3 seconds
    And User click "inputCatatanRusak"
    And User type "Kualitas buruk" into "inputCatatanRusak"
    And User click "btnSubmitModalProdukBermasalah"
    And User click "gambarPermintaanBarang"
    And User upload file to "gambarPermintaanBarang"
    And User wait for 3 seconds
    And User click "tabBuktiAlokasiBarang"
    And User wait for 3 seconds
    And User click "imgUploadBuktiAlokasiBarang"
    And User upload file to "imgUploadBuktiAlokasiBarang"
    And User wait for 3 seconds
    And User click "btnSubmitBuatStokBermasalah"
    And User wait for 3 seconds
    # And User click "filterGudang"
    # And User click "warehouseSumberPangan" in "filterGudang"
    # And User click "btnTerapkanFilterWarehouse"
    # And User wait for 3 seconds
    And User click "btnAjukan"
    And User click "btnConfirmAjukan"
    And User click "btnSetujuAjukan"
    And User click "optTipeStokRetur"
    #reusable
    And User click "btnSubmitIncomingModal" 
    And User click "btnConfirmAjukan"
    And User click "MenuPurchasingV3"
    And User click "menuRawMaterialV3_2" inside "navMenuPurchasing"
    And User wait for 3 seconds
    And User click "btnCreateRM"
    And User click "imgUploadRM"
    And User upload file to "imgUploadRM"
    And User wait for 3 seconds
    And User click "pilihMerek"
    And User type "Keraton" in "pilihMerek"
    And User click "inputNamaRM"
    And User type raw material name into "inputNamaRM2"
    And User wait for 3 seconds
    And User click "pilihKategori"
    And User type "frozen snack" into "pilihKategori"
    And User wait for 3 seconds
    And User click "btnTambahAttribute"
    And User click "inputSatuan"
    And User type "karton" into "inputSatuan"
    And User click "inputKonversi"
    And User type "1" into "inputKonversi"
    And User click "inputIsi"
    And User type "100 pcs" into "inputIsi"
    And User click "btnSimpanAttribute"
    And User click "btnSimpanRM"
    And User wait for 3 seconds
    And User click "menuReturnV3"
    And User wait for 3 seconds
    And User click "btnBuatRetur"
    And User click "selectGudangRetur"
    And User click "optGudangAloha_1" in "selectGudangRetur"
    # And User wait for 10 seconds
    And User click "selectKategoriRetur"
    And User click "optKategoriReturRM" in "selectKategoriRetur"
    And User wait for 3 seconds
    And User click "selectSupplierRetur"
    And User type "Ali Boedi Santoso" into "selectSupplierRetur"
    And User wait for 1 second
    And User click "selectKodeTransaksiRetur"
    And User wait for 1 second
    And User type PO code into "selectKodeTransaksiRetur"
    And User wait for 1 second
    And User click "btntambahProduk"
    And User wait for 1 second
    And User click "inputQtyRetur"
    And User type "100" into "inputQtyRetur"
    #reusable
    And User click "btnCheckIn"
    And User click "selectTipeRetur"
    And User click "optTipeReturBarang" in "selectTipeRetur"
    And User wait for 1 second
    And User click "btntambahProduk"
    And User wait for 1 second
    And User click "pilihProdukRetur"
    And User type raw material name into "pilihProdukRetur"
    And User wait for 1 second
    And User click "pilihUnitRetur"
    And User wait for 1 second
    And User click "inputQtyImbalanRetur"
    And User type "100" into "inputQtyImbalanRetur"
    And User wait for 1 second
    And User click "inputHargaBeliImbalanRetur"
    And User type "100000" into "inputHargaBeliImbalanRetur"
    And User click "btnSubmitRetur"
    And User wait for 3 seconds
    #reusable
    And User click "btnSimpanRM"
    And User wait for 3 seconds
    # And User click "filterGudangRetur"
    # And User click "warehouseSumberPangan" in "filterGudang"
    # And User click "btnTerapkanFilterWarehouse"
    And User get "kodeRetur"
    # And User click "btnSearchV3"
    # And User click "searchBarV3"
    # And User type return code to "searchBarV3"
    # And User click "btnCariV3"
    And User wait for 3 seconds
    And User click "btnSubmitReturModal"
    And User click "btnSetujuRetur"
    And User click "menuLogisticV3_2"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "tabReturSupplier"
    And User click "searchBarReturSupplier"
    And User type "kodeRetur" into "searchBarReturSupplier"
    And User wait for 3 seconds
    And User click "checkboxReturSupplier"
    And User click "btnSiapDikeluarkan"
    And User click "imgUploadPicklist"
    And User upload file to "imgUploadPicklist"
    And User wait for 3 seconds
    And User click "btnSubmitSiapDikeluarkan"
    And User click "btnConfirmUpdateStatus"
    And User wait for 10 seconds
    And User wait for refresh
    And User click "checkboxReturSupplier"
    And User click "btnDikeluarkan"
    #reusable
    And User click "imgUploadPicklist"
    And User upload file to "imgUploadPicklist"
    And User wait for 3 seconds
    And User click "btnSubmitSiapDikeluarkan"
    And User click "btnConfirmUpdateStatus"
    And User wait for 10 seconds
    And User wait for refresh
    And User click "menuIncomingGoodsV3"
    And User wait for 3 seconds
    And User click "tabReturSupplierV3"
    And User wait for 3 seconds
    And User click "btnSearchV3"
    And User click "searchBarV3"
    And User type return code to "searchBarV3"
    And User click "btnCariV3"
    And User wait for 3 seconds
    And User click "btnAmbilAntrian_2"
    And User click "imgUploadSuratJalan"
    And User upload file to "imgUploadSuratJalan"
    And User wait for 3 seconds
    And User click "inputNamaDriver"
    And User type "Budi" into "inputNamaDriver"
    And User click "btnCheckIn"
    And User click "menuLogisticV3_2"
    And User click "menuIncomingChecker" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "tabReturSupplierIncomingCheckerV3"
    And User wait for 1 second
    And User click "btnSearchV3"
    And User click "searchBarV3_2"
    And User type return code to "searchBarV3_2"
    And User click "btnCariV3"
    And User wait for 3 seconds
    And User click "btnInputIncomingV3_2"
    And User click "addProductInputIncoming"
    And User click "imgUploadProductIncoming"
    And User upload file to "imgUploadProductIncoming"
    And User wait for 3 seconds
    And User click "selectProductIncoming"
    And User click "selectUnitIncoming"
    And User click "inputQuantityIncoming"
    And User type "00" into "inputQuantityIncoming"
    And User click "selectProductionDate"
    And User click "selectProductionDateToday" in "selectProductionDate"
    And User click "btnSubmitIncomingModal"
    And User click "btnConfirmSubmitIncomingModal"
    And User wait for 5 seconds
    And User click "menuIncomingGoodsV3_2" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "tabReturSupplierV3"
    And User click "btnSearchV3"
    And User click "searchBarV3"
    And User type return code to "searchBarV3"
    And User click "btnCariV3"
    And User click "btnValidasiChecker_2"
    And User click "btnSubmitIncomingModal"
    And User click "btnSubmitValidasiIncoming"
    And User click "menuPurchasingV3"
    And User click "menuProductV3"
    #reusable
    And User click "btnCreateRM"
    And User click "imgUploadRM"
    And User upload file to "imgUploadRM"
    And User wait for 3 seconds
    And User click "pilihTipeProduk"
    And User click "optTipeProdukRTP" in "pilihTipeProduk"
    And User click "pilihSubtipeProduk"
    And User type "Non White Label" into "pilihSubtipeProduk"
    And User click "inputNamaProdukRTP"
    And User type product name into "inputNamaProdukRTP"
    And User click "pilihMerek2"
    And User type "Keraton" into "pilihMerek2"
    And User wait for 3 seconds
    And User click "pilihKategori2"
    And User type "frozen snack" into "pilihKategori2"
    And User wait for 3 seconds
    And User click "checkboxIngredients"
    And User click "btnTambahAttribute"
    And User click "inputSatuan"
    And User type "karton" into "inputSatuan"
    And User wait for 3 seconds
    And User click "inputKonversi"
    And User type "1" into "inputKonversi"
    And User wait for 3 seconds
    And User click "inputIsi"
    And User type "100 pcs" into "inputIsi"
    And User wait for 3 seconds
    And User click "btnSimpanAttribute"
    # And User click "btnSimpanRM"
    And User wait for 3 seconds
    And User click "btntambahProduk"
    And User click "inputNamaIngredients"
    And User type "Resep 1" into "inputNamaIngredients"
    #reusable
    And User click "pilihProdukRetur"
    And User type product name into "pilihProdukRetur"
    And User wait for 1 second
    And User click "pilihUnitRetur"
    And User click "inputQtyImbalanRetur"
    And User type "1" into "inputQtyImbalanRetur"
    And User wait for 3 seconds
    And User click "btnSimpanAttribute"
    And User click "btnSimpanRM"
    And User wait for 3 seconds
    And User click "menuPROV4"
    And User wait for 1 second
    And User click "btnBuatPRO"
    And User wait for 1 second
    And User click "selectGudangPRO"
    And User wait for 1 second
    And User type "jember" into "selectGudangPRO"
    And User wait for 1 second
    And User click "selectTipePT_2"
    And User wait for 1 second
    And User type "cmi" into "selectTipePT_2"
    And User wait for 1 second
    And User click "selectSupplierPRO"
    And User wait for 1 second
    And User type "Ali Boedi Santoso" into "selectSupplierPRO"
    And User wait for 1 second
    And User click "pilihPengirimanPRO"
    And User type "Locco" into "pilihPengirimanPRO"
    And User wait for 1 second
    And User click "pilihPICPRO"
    And User type "admin" into "pilihPICPRO"
    And User wait for 1 second
    And User click "pilihGudangStok"
    And User wait for 1 second
    And User click "btnTambahBarangPRO"
    And User wait for 3 seconds
    And User click "btnTambahBarangModalPRO"
    And User click "pilihProdukModalPRO"
    And User wait for 3 seconds
    And User type product name into "pilihProdukModalPRO"
    And User wait for 3 seconds
    And User click "pilihIngredientsModalPRO"
    And User click "inputQtyPRO"
    And User wait for 3 seconds
    And User type "100" into "inputQtyPRO"
    And User click "checklistProduct"
    And User click "btnSimpanModalPRO"
    And User wait for 3 seconds
    And User click "btnSubmitPRO"
    And User wait for 3 seconds
    And User click "filterGudangPRO"
    And User click "selectGudangJember"
    And User click "applyFilterGudangPRO"
    And User wait for 3 seconds
    # And User click "btnDetailPRO"
    And User get "kodePRO"
    And User wait for 1 second
    # And User click "btnBackPRO"
    And User click "menuLogisticV3_3"
    And User click "menuIncomingGoodsV3"
    And User wait for 3 seconds
    And User click "filterGudangV3"
    And User click "warehouseJember" in "filterGudangV3"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 1 second
    And User click "btnSearchV3"
    And User click "searchBarV3"
    And User type PRO code to "searchBarV3"
    And User click "btnCariV3"
    And User wait for 3 seconds
    And User click "btnAmbilAntrian"
    And User click "imgUploadSuratJalan"
    And User upload file to "imgUploadSuratJalan"
    And User wait for 3 seconds
    And User click "inputNamaDriver"
    And User type "Budi" into "inputNamaDriver"
    And User click "btnCheckIn"
    And User click "menuLogisticV3_2"
    And User click "menuIncomingChecker" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "filterGudangV3"
    And User click "warehouseJember" in "filterGudangV3"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearchV3"
    And User click "searchBarIncomingChecker"
    And User type PRO code to "searchBarIncomingChecker"
    And User wait for 3 seconds
    And User click "btnInputIncomingV3"
    And User click "addProductInputIncoming"
    And User click "imgUploadProductIncoming"
    And User upload file to "imgUploadProductIncoming"
    And User wait for 3 seconds
    And User click "selectProductIncoming"
    And User click "selectUnitIncoming"
    And User click "inputQuantityIncoming"
    And User type "00" into "inputQuantityIncoming"
    And User click "selectProductionDate"
    And User click "selectProductionDateToday" in "selectProductionDate"
    And User click "btnSubmitIncomingModal"
    And User click "btnConfirmSubmitIncomingModal"
    And User wait for 5 seconds
    And User click "menuIncomingGoods" in "navMenuLogistic"
    And User click "filterGudangV3"
    And User click "warehouseJember" in "filterGudangV3"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearchV3"
    And User click "searchBarV3"
    And User type PRO code to "searchBarV3"
    And User click "btnCariV3"
    And User click "btnValidasiChecker"
    And User click "btnSubmitIncomingModal"
    And User click "btnSubmitValidasiIncoming"
    And User click "menuStockV3"
    And User click "menuStokBermasalah" in "menuStockV3"
    And User click "btnTambahStokBermasalah"
    And User wait for 3 seconds
    And User click "selectGudangRM"
    And User click "optGudangFGJember" in "selectGudangFG"
    And User wait for 10 seconds
    And User click "btntambahProduk"
    And User click "cariProdukBermasalah"
    And User type product name into "cariProdukBermasalah"
    And User click "pilihKodeSource"
    And User click "checkboxKodeSource"
    And User wait for 3 seconds
    And User click "btnQtyRusakDariRM"
    And User wait for 3 seconds
    And User click "btnExpandRowIngredients"
    And User click "qtyDiperlukan"
    And User type "50" into "qtyDiperlukan"
    And User click "qtyRusakModalRM"
    And User type "50" into "qtyRusakModalRM"
    And User click "catatanRusakModalRM"
    And User type "rusak" into "catatanRusakModalRM"
    And User click "btnSubmitModalProdukBermasalah"
    And User click "imgUploadBuktiRusak"
    And User upload file to "imgUploadBuktiRusak"
    And User wait for 3 seconds
    And User click "catatanStokRusak"
    And User type "rusak" into "catatanStokRusak"
    And User click "btnSubmitModalProdukBermasalah"
    And User wait for 3 seconds
    And User click "gambarPermintaanBarang"
    And User upload file to "gambarPermintaanBarang"
    And User wait for 3 seconds
    And User click "tabBuktiAlokasiBarang"
    And User wait for 3 seconds
    And User click "imgUploadBuktiAlokasiBarang"
    And User upload file to "imgUploadBuktiAlokasiBarang"
    And User wait for 3 seconds
    And User click "btnSubmitBuatStokBermasalah"
    And User wait for 3 seconds
    And User click "filterGudang"
    And User click "warehouseJember" in "filterGudangV3"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnAjukan"
    And User click "btnConfirmAjukan"
    And User click "btnSetujuAjukan"
    And User click "optTipeStokRetur"
    And User wait for 3 seconds
    #reusable
    And User click "btnSubmitIncomingModal" 
    And User click "btnConfirmAjukan"
    And User wait for 3 seconds
    And User click "btnTambahStokBermasalah"
    And User wait for 3 seconds
    And User click "selectGudangRM"
    And User click "optGudangFGJember" in "selectGudangFG"
    And User wait for 10 seconds
    And User click "btntambahProduk"
    And User click "cariProdukBermasalah"
    And User type product name into "cariProdukBermasalah"
    And User click "pilihKodeSource"
    And User click "checkboxKodeSource"
    And User wait for 1 second
    And User click "btnQtyRusakDariRM"
    And User wait for 3 seconds
    And User click "btnExpandRowIngredients"
    And User click "qtyDiperlukan"
    And User type "50" into "qtyDiperlukan"
    And User click "qtyRusakModalRM"
    And User type "50" into "qtyRusakModalRM"
    And User click "catatanRusakModalRM"
    And User type "rusak" into "catatanRusakModalRM"
    And User click "btnSubmitModalProdukBermasalah"
    And User click "imgUploadBuktiRusak"
    And User upload file to "imgUploadBuktiRusak"
    And User wait for 3 seconds
    And User click "catatanStokRusak"
    And User type "rusak" into "catatanStokRusak"
    And User click "btnSubmitModalProdukBermasalah"
    And User wait for 3 seconds
    And User click "gambarPermintaanBarang"
    And User upload file to "gambarPermintaanBarang"
    And User wait for 3 seconds
    And User click "tabBuktiAlokasiBarang"
    And User wait for 5 seconds
    And User click "imgUploadBuktiAlokasiBarang"
    And User upload file to "imgUploadBuktiAlokasiBarang"
    And User wait for 3 seconds
    And User click "btnSubmitBuatStokBermasalah"
    And User click "filterGudang"
    And User click "warehouseJember" in "filterGudangV3"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnAjukan"
    And User click "btnConfirmAjukan"
    And User click "btnSetujuAjukan"
    #reusable
    And User click "btnSubmitIncomingModal" 
    And User click "btnConfirmAjukan"
    And User wait for 3 seconds