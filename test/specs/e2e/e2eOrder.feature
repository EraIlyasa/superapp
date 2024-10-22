@e2e-order
Feature: Create-e2e-order

    @marketplace
    Scenario Outline: User berhasil melakukan create order e2e untuk marketplace
    Given api user login
    When open dashboard superapp
    # Then I see usernameDisplay
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 10 seconds
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User click "optAgenPemesan" in "agenPemesanMarketPlace"
    And User click "alamatKirimMarketPlace"
    And User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"
    And User click "superAgenMarketPlace"
    And User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User click "optNamaProduct6" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP" in "inputSatuanModalMP"
    And User click "inputQtyModalMP"
    And User input "2" in "inputQtyModalMP"
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User click "checkboxVoucher"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 5 seconds
    And User click "tabMotor" 
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 45 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID
    And User click "navMenuFinance" in global page
    And User click "menuSetoran" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAloha"
    And User click "pilihKurirVendor"
    And User type "inhouse motoris agus" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    And User wait for 5 seconds
    Then User able to see message verification

    @direct
    Scenario Outline: User berhasil melakukan create order e2e untuk direct
    Given api user login
    When open dashboard superapp
    # Then I see usernameDisplay
    # And User refresh the page
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "tipePenjualanDirect"
    And User click "optRTP" in "tipePenjualanDirect"
    And User click "agenPemesanDirect"
    And User click "optAgenPemesan" in "agenPemesanDirect"
    And User wait for 3 second
    And User click "alamatKirimDirect"
    And User click "optAlamatKirimDirect" in "alamatKirimDirect"
    And User click "tipePtDirect"
    And User click "optTipePTDirect" in "tipePtDirect"
    And User click "superAgenDirect"
    And User click "optSuperAgenDirect" in "superAgenDirect"
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "Supercow" in "pilihProductModalDirect"
    And User click "optPilihProductModalDirect" in "pilihProductModalDirect"
    And User click "inputSatuanModalDirect"
    And User click "optSatuanModalDirect" in "inputSatuanModalDirect"
    And User click "inputQtyModalDirect"
    And User input "2" in "inputQtyModalDirect"
    And User click "btnModalSimpanListDirect"
    And User click "btnModalSimpanDirect"
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User click "checkboxVoucher"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User click "selectGudang"
    And User click "optGudangAlohaRTP" in "selectGudang"
    And User click "applyGudang"
    And User wait for 3 seconds
    And User select the invoice number
    # And User click "selectOrderNewest"
    And User wait for 3 seconds
    # And User click "btnEditOrder"
    # And User click "btnEditVoucher"
    # And User click "checkboxVoucher"
    # And User click "btnSimpanVoucher"
    # And User click "btnUpdateOrder"
    # # And User click "btnConfirmUpdateOrder"
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User click "tabMotor" 
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "pilihFilterGudang"
    And User click "pilihFilterGudangAlohaRTP" in "pilihFilterGudang"
    And User click "btnApplyFilterModal"
    And User wait for 5 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    # And User wait for 45 seconds
    And User wait for 10 seconds
    And User click "detailOutgoingBtn2"
    And User click "checkbox"
    And User click "gantiVendor"
    And User click "vendorTujuan"
    And User wait for 3 seconds
    And User click "optVendor"
    And User wait for 3 seconds
    And User click "alasan"
    And User wait for 3 seconds
    And User click "optAlasan"
    And User wait for 3 seconds
    And User click "btnGanti"
    And User wait for 3 seconds
    And User click "btnBack"
    And User wait for 45 seconds
    And User refresh the page
    And User wait for 3 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "pilihFilterGudang"
    And User click "pilihFilterGudangAlohaRTP" in "pilihFilterGudang"
    And User click "btnApplyFilterModal"
    And User wait for 5 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "selectGudang"
    And User click "optGudangAlohaRTP" in "selectGudang"
    And User click "applyGudang"
    And User wait for 3 seconds
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User wait for 3 seconds
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID
    And User click "menuFinance" in global page
    And User click "menuSetoran" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAlohaRTP"
    And User click "pilihKurirVendor"
    And User type "inhouse motoris agus" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User wait for 5 seconds
    And User click "pilihFilterGudangSetoran"
    And User click "pilihFilterGudangAlohaRTP" in "pilihFilterGudang"
    And User click "btnApplyFilterModal"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "pilihFilterGudangCompleteOrder"
    And User click "pilihFilterGudangAlohaRTP" in "pilihFilterGudangCompleteOrder"
    And User click "btnApplyFilterModal"
    And User wait for 3 seconds
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    And User wait for 5 seconds
    Then User able to see message verification

    @marketplace-discount-all-product
    Scenario Outline: User berhasil melakukan create order e2e untuk marketplace dengan voucher all product
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 10 seconds
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User click "optAgenPemesan" in "agenPemesanMarketPlace"
    And User click "alamatKirimMarketPlace"
    And User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"
    And User click "superAgenMarketPlace"
    And User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User click "optNamaProduct" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP" in "inputSatuanModalMP"
    And User click "inputQtyModalMP"
    And User input "3" in "inputQtyModalMP"
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User select voucher discount all product
    And User click "allProductVoucher"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID and accept all
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 10 seconds
    And User click "menuFinance" in global page
    And User click "menuSetoran" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAloha"
    And User click "pilihKurirVendor"
    And User type "SANGAR SURABAYA" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    And User wait for 5 seconds
    Then User able to see message verification

    @marketplace-discount-all-product-except-kecap-manis-abc-135ml-botol
    Scenario Outline: User berhasil melakukan create order e2e untuk marketplace dengan voucher all product except
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 10 seconds
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User click "optAgenPemesan" in "agenPemesanMarketPlace"
    And User click "alamatKirimMarketPlace"
    And User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"
    And User click "superAgenMarketPlace"
    And User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User click "optNamaProduct" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP" in "inputSatuanModalMP"
    And User click "inputQtyModalMP"
    And User input "1" in "inputQtyModalMP"
    And User click "btnSimpanModalListMP"
    And User wait for 3 seconds
    And User click "addProductModalDirect"
    And User click "namaProductModalMP2"
    And User click "optNamaProduct2" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP2" in "inputSatuanModalMP"
    And User click "inputQtyModalMP2"
    And User input "1" in "inputQtyModalMP2"
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User select voucher discount all product except
    And User click "allProductExceptVoucher"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID 2 products
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 10 seconds
    And User click "menuFinance" in global page
    And User click "menuSetoran" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAloha"
    And User click "pilihKurirVendor"
    And User type "SANGAR SURABAYA" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    And User wait for 5 seconds
    Then User able to see message verification

    @marketplace-discount-all-product-except-special-kecap-manis-abc-135ml-botol
    Scenario Outline: User berhasil melakukan create order e2e untuk marketplace dengan voucher all product except special
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 10 seconds
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User click "optAgenPemesan" in "agenPemesanMarketPlace"
    And User click "alamatKirimMarketPlace"
    And User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"
    And User click "superAgenMarketPlace"
    And User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User click "optNamaProduct" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP" in "inputSatuanModalMP"
    And User click "inputQtyModalMP"
    And User input "1" in "inputQtyModalMP"
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User wait for 3 seconds
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User select voucher discount all product except special
    And User click "allProductExceptSpecialVoucher"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "editProductMP"
    And User click "addProductModalDirect"
    And User click "namaProductModalMP2"
    And User click "optNamaProduct2" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP2" in "inputSatuanModalMP"
    And User click "inputQtyModalMP2"
    And User input "1" in "inputQtyModalMP2"
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User wait for 3 seconds
    And Alert voucher disabled shown
    And User wait for 5 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID 2 products
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 10 seconds
    And User click "menuFinance" in global page
    And User click "menuSetoran" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAloha"
    And User click "pilihKurirVendor"
    And User type "SANGAR SURABAYA" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    And User wait for 5 seconds
    Then User able to see message verification

    @marketplace-discount-all-product-except-cigarette
    Scenario Outline: User berhasil melakukan create order e2e untuk marketplace dengan voucher all product except cigarette
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 10 seconds
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User click "optAgenPemesan" in "agenPemesanMarketPlace"
    And User click "alamatKirimMarketPlace"
    And User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"
    And User click "superAgenMarketPlace"
    And User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"
    And User click "addProductMP"
    And User click "namaProductModalMP2"
    And User wait for 5 seconds
    And User type "Testing Rokok" in "namaProductModalMP"
    And User wait for 3 seconds
    And User type enter button
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP" in "inputSatuanModalMP"
    And User click "inputQtyModalMP"
    And User input "3" in "inputQtyModalMP"
    And User click "btnSimpanModalListMP"
    And User click "addProductModalDirect"
    And User wait for 3 seconds
    And User click "namaProductModalMP2"
    And User click "optNamaProduct3" in "namaProductModalMP2"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP3" in "inputSatuanModalMP"
    And User click "inputQtyModalMP2"
    And User input "10" in "inputQtyModalMP2"
    And User click "btnSimpanModalListMP"
    And User wait for 5 seconds
    And User click "btnSimpanModalMP"
    And User wait for 3 seconds
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User select voucher discount all product except cigarette
    And User click "allProductExceptCigaretteVoucher"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "editProductMP"
    And User click "btnDeleteProductModal"
    And User click "btnSimpanModalMP"
    And User wait for 3 seconds
    And Alert voucher disabled shown
    And User wait for 5 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID and accept all
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 10 seconds
    And User click "menuFinance" in global page
    And User click "menuSetoran" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAloha"
    And User click "pilihKurirVendor"
    And User type "SANGAR SURABAYA" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    And User wait for 5 seconds
    Then User able to see message verification

    @marketplace-discount-and
    Scenario Outline: User berhasil melakukan create order e2e untuk marketplace dengan voucher and
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 10 seconds
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User click "optAgenPemesan" in "agenPemesanMarketPlace"
    And User click "alamatKirimMarketPlace"
    And User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"
    And User click "superAgenMarketPlace"
    And User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User click "optNamaProduct" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP4" in "inputSatuanModalMP"
    And User click "inputQtyModalMP"
    And User input "1" in "inputQtyModalMP"
    And User click "btnSimpanModalListMP"
    And User wait for 3 seconds
    And User click "addProductModalDirect"
    And User click "namaProductModalMP2"
    And User click "optNamaProduct2" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP2" in "inputSatuanModalMP"
    And User click "inputQtyModalMP2"
    And User input "1" in "inputQtyModalMP2"
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User select voucher discount and
    And User click "andVoucher"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID 2 products
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 10 seconds
    And User click "menuFinance" in global page
    And User click "menuSetoran" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAloha"
    And User click "pilihKurirVendor"
    And User type "SANGAR SURABAYA" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    And User wait for 5 seconds
    Then User able to see message verification

    @marketplace-discount-or
    Scenario Outline: User berhasil melakukan create order e2e untuk marketplace dengan voucher or
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 10 seconds
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User click "optAgenPemesan" in "agenPemesanMarketPlace"
    And User click "alamatKirimMarketPlace"
    And User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"
    And User click "superAgenMarketPlace"
    And User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User click "optNamaProduct" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP4" in "inputSatuanModalMP"
    And User click "inputQtyModalMP"
    And User input "1" in "inputQtyModalMP"
    And User click "btnSimpanModalListMP"
    And User wait for 3 seconds
    And User click "addProductModalDirect"
    And User click "namaProductModalMP2"
    And User click "optNamaProduct2" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP2" in "inputSatuanModalMP"
    And User click "inputQtyModalMP2"
    And User input "1" in "inputQtyModalMP2"
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User select voucher discount or
    And User click "orVoucher"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID 2 products
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 10 seconds
    And User click "menuFinance" in global page
    And User click "menuSetoran" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAloha"
    And User click "pilihKurirVendor"
    And User type "SANGAR SURABAYA" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    And User wait for 5 seconds
    Then User able to see message verification

    @marketplace-discount-and-special
    Scenario Outline: User berhasil melakukan create order e2e untuk marketplace dengan voucher and special
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 10 seconds
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User click "optAgenPemesan" in "agenPemesanMarketPlace"
    And User click "alamatKirimMarketPlace"
    And User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"
    And User click "superAgenMarketPlace"
    And User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User click "optNamaProduct2" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP2" in "inputSatuanModalMP"
    And User click "inputQtyModalMP"
    And User input "1" in "inputQtyModalMP"
    And User click "btnSimpanModalListMP"
    And User wait for 3 seconds
    And User click "addProductModalDirect"
    And User click "namaProductModalMP2"
    And User click "optNamaProduct" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP4" in "inputSatuanModalMP"
    And User click "inputQtyModalMP2"
    And User input "1" in "inputQtyModalMP2"
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User select voucher discount and special
    And User click "andSpecialVoucher"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID 2 products
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 10 seconds
    And User click "menuFinance" in global page
    And User click "menuSetoran" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAloha"
    And User click "pilihKurirVendor"
    And User type "SANGAR SURABAYA" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    And User wait for 5 seconds
    Then User able to see message verification

    @marketplace-discount-or-special
    Scenario Outline: User berhasil melakukan create order e2e untuk marketplace dengan voucher or special
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 10 seconds
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User click "optAgenPemesan" in "agenPemesanMarketPlace"
    And User click "alamatKirimMarketPlace"
    And User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"
    And User click "superAgenMarketPlace"
    And User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"
    And User click "addProductMP"
    And User click "namaProductModalMP2"
    And User wait for 5 seconds
    And User type "Cap Opung Beras 1kg" in "namaProductModalMP"
    And User wait for 3 seconds
    And User type enter button
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP5" in "inputSatuanModalMP"
    And User click "inputQtyModalMP"
    And User input "1" in "inputQtyModalMP"
    And User click "btnSimpanModalListMP"
    And User wait for 3 seconds
    And User click "addProductModalDirect"
    And User click "namaProductModalMP2"
    And User click "optNamaProduct" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP4" in "inputSatuanModalMP"
    And User click "inputQtyModalMP2"
    And User input "1" in "inputQtyModalMP2"
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User select voucher discount or special
    And User click "orSpecialVoucher"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID 2 products
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 10 seconds
    And User click "menuFinance" in global page
    And User click "menuSetoran" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAloha"
    And User click "pilihKurirVendor"
    And User type "SANGAR SURABAYA" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    And User wait for 5 seconds
    Then User able to see message verification

    @marketplace-cek-mutasi
    Scenario Outline: User berhasil melakukan create order e2e untuk marketplace - cek mutasi
    Given api user login
    When open dashboard superapp
    # Then I see usernameDisplay
    And User wait for 10 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 10 seconds
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User click "optAgenPemesan" in "agenPemesanMarketPlace"
    And User click "alamatKirimMarketPlace"
    And User click "optAlamatKirimMarketPlace" in "alamatKirimMarketPlace"
    And User click "superAgenMarketPlace"
    And User click "optSuperAgenMarketPlace" in "superAgenMarketPlace"
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User click "optNamaProduct" in "namaProductModalMP"
    And User click "inputSatuanModalMP"
    And User click "optSatuanModalMP" in "inputSatuanModalMP"
    And User click "inputQtyModalMP"
    And User input "2" in "inputQtyModalMP"
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    # And User click "btnTambahVoucher"
    # And User wait for 3 seconds
    # And User click "checkboxVoucher"
    # And User click "btnSimpanVoucher"
    # And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User click "tabMotor" 
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "checkBox"
    And User click "btnDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User fetches data from API using the existing session
    And User click detail of the transaction
    And User logged in and have obtained a valid token
    And User perform a transaction with specific ID
    And User click "navMenuStock" in global page
    And User click "menuMutasiStockV4" in "navMenuStock"
    And User click "pilihGudangCekMutasiStock"
    And User click "pilihGudangAlohaCekMutasiStock"
    And User click "pilihProdukCekMutasiStock"
    And User click "pilihSemuaProdukCekMutasiStock"
    And User click "btnTampilkanMutasiStock"
    And User wait for 5 seconds
    And User click "dataPageMutasiStock"
    And User click "show100DataPerPageMutasiStock"
    And User wait for 5 seconds
    And User select the row element
    And User click "menuFinance" in global page
    And User click "menuSetoranV4" in "navMenuFinance"
    And User click "btnBuatSetoran"
    And User click "pilihTipeOrder"
    And User click "pilihVendor"
    And User click "pilihGudang"
    And User click "pilihGudangAloha"
    And User click "pilihKurirVendor"
    And User type "inhouse motoris agus" into "pilihKurirVendor"
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User click "btnImportCSV"
    And User click "uploadFileCSV"
    And User upload file to "uploadFileCSV"
    And User wait for 3 seconds
    And User click "submitCSV"
    And User wait for 3 seconds
    And User click "btnSetor"
    And User click "btnConfirmSetor"
    And User wait for 5 seconds
    And User click "tabInvoiceSudahDisetor"
    And User click "inputSearchKodeInvoiceSudahDisetor"
    And User paste the copied invoice number into "inputSearchKodeInvoiceSudahDisetor"
    And User wait for 3 seconds
    And User click "checkboxInvoice"
    And User click "btnSelesaikanPesanan"
    And User click "uploadBuktiBayar"
    And User upload file to "uploadBuktiBayar"
    And User wait for 3 seconds
    And User click "btnUploadBuktiBayar"
    And User click "btnConfirmCompleteTransaction"
    And User click "menuCompleteOrder" in "navMenuFinance"
    And User click "inputSearchKodeBulkInvoice"
    And User paste the copied invoice number into "inputSearchKodeBulkInvoice"
    And User wait for 3 seconds
    And User click "btnDetailBulkInvoice"
    And User click "btnSimpanCompleteOrder"
    And User click "btnConfirmCompleteOrder"
    Then User able to see message verification

    @marketplace-cek-lepas-voucher
    Scenario Outline: Memastikan voucher lepas saat user edit produk dan tidak memenuhi minimum voucher
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 3 second
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User wait for 3 second
    And User type "082210803538" into "agenPemesanMarketPlace"
    And User wait for 3 second
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User wait for 1 second
    And User type "warung" into "alamatKirimMarketPlace"
    And User wait for 1 second
    And User type enter button
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User type "ABC Kecap Manis 520ml" into "namaProductModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputSatuanModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputQtyModalMP"
    And User input "10" in "inputQtyModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User select voucher discount all product specific rj
    And User click "allProductRJ"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User wait for 3 seconds
    And User get grand total before
    And User wait for 1 second
    And User click "btnEditOrder_2"
    And User wait for 1 second
    And User click "editProductMP_2"
    And User wait for 1 second
    And User click "btnUbah"
    And User wait for 1 second
    And User click "inputQtyModalMP"
    And User clear value
    And User wait for 3 seconds
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User wait for 1 second
    And User should see toast message voucher lepas
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User get grand total after
    And the nominal should be changed
    And User click "btnPrintSJ"
    And User wait for 3 seconds
    And the nominal of grand total on SJ should be equal to detail
    And User close the new tab
    And User refresh the page
    And User click "btnPrintInvoice"
    And User wait for 3 seconds
    Then the nominal of grand total on Invoice should be equal to detail


    @marketplace-edit-produk-order
    Scenario Outline: Memastikan voucher tidak lepas dan nominal bertambah sesuai dengan produk yang ditambahkan
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 3 second
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User wait for 3 second
    And User type "082210803538" into "agenPemesanMarketPlace"
    And User wait for 3 second
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User wait for 1 second
    And User type "warung" into "alamatKirimMarketPlace"
    And User wait for 1 second
    And User type enter button
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User type "ABC Kecap Manis 520ml" into "namaProductModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputSatuanModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputQtyModalMP"
    And User input "5" in "inputQtyModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "btnSimpanModalListMP"
    And User click "btnTambahProdukModal_2"
    And User wait for 3 seconds
    And User click "namaProductModalMP"
    And User type "ABC Kecap Manis 135ml" into "namaProductModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputSatuanModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputQtyModalMP"
    And User input "5" in "inputQtyModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "btnSimpanModalListMP"
    And User click "btnTambahProdukModal_2"
    And User wait for 3 seconds
    And User click "namaProductModalMP"
    And User type "**Agarasa Chocolate 22g - Inner Box" into "namaProductModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputSatuanModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputQtyModalMP"
    And User input "5" in "inputQtyModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User click "btnTambahVoucher"
    And User wait for 3 seconds
    And User select voucher discount all product specific rj
    And User click "allProductRJ"
    And User click "btnSimpanVoucher"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User get grand total before
    And User wait for 1 second
    And User click "btnEditOrder_2"
    And User wait for 1 second
    And User click "editProductMP_2"
    And User wait for 1 second
    And User click "btnUbah_2"
    And User wait for 1 second
    And User click "inputQtyModalMP"
    And User decrease the value
    And User wait for 3 seconds
    And User click "btnSimpanModalListMP"
    And User click "btnTambahProdukModal_2"
    And User click "namaProductModalMP_last"
    And User type "ABC Kopi Susu Gula Aren 27g" into "namaProductModalMP_last"
    And User wait for 1 second
    And User type enter button
    And User click "inputSatuanModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputQtyModalMP_last"
    And User input "5" in "inputQtyModalMP_last"
    And User wait for 1 second
    And User type enter button
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "selectOrderNewest"
    And User get grand total after
    And the grand total should be changed
    And User click "btnPrintSJ"
    And User wait for 3 seconds
    And the nominal of grand total on SJ should be equal to detail
    And User close the new tab
    And User refresh the page
    And User click "btnPrintInvoice"
    And User wait for 3 seconds
    Then the nominal of grand total on Invoices should be equal to detail

    @marketplace-cek-status-ditolak
    Scenario Outline: Memastikan status order 'Ditolak' saat orderan ditolak
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 3 second
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User wait for 3 second
    And User type "082210803538" into "agenPemesanMarketPlace"
    And User wait for 3 second
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User wait for 1 second
    And User type "warung" into "alamatKirimMarketPlace"
    And User wait for 1 second
    And User type enter button
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User type "ABC Kecap Manis 520ml" into "namaProductModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputSatuanModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputQtyModalMP"
    And User input "10" in "inputQtyModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "btnRejectOrder"
    And User click "pilihAlasanTolakPesanan"
    And User type enter button
    And User click "btnSimpanTolakPesanan"
    And User wait for 1 second
    And User click "selectOrderNewest"
    And User wait for 3 seconds
    Then the order status should be ditolak

    @marketplace-cek-incoming-apabila-ditolak
    Scenario Outline: Memastikan produk dari order status SD masuk ke incoming tolakan vendor
    Given api user login
    When open dashboard superapp
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 3 second
    And User click "btnAddOrder"
    And User click "btnMarketPlace" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User wait for 3 second
    And User type "082210803538" into "agenPemesanMarketPlace"
    And User wait for 3 second
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User wait for 1 second
    And User type "warung" into "alamatKirimMarketPlace"
    And User wait for 1 second
    And User type enter button
    And User click "addProductMP"
    And User click "namaProductModalMP"
    And User type "ABC Kecap Manis 520ml" into "namaProductModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputSatuanModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "inputQtyModalMP"
    And User input "50" in "inputQtyModalMP"
    And User wait for 1 second
    And User type enter button
    And User click "btnSimpanModalListMP"
    And User click "btnSimpanModalMP"
    And User wait for 3 seconds
    And User click "btnSubmitOrder"
    And User wait for 10 seconds
    And User select the invoice number
    And User click "navMenuLogistic"
    And User click "menuOutgoingGoods" in "navMenuLogistic"
    And User wait for 5 seconds
    And User refresh the page
    And User wait for 5 seconds
    And User click "tanggalKirim"
    And User click "pilihHariIni" in "tanggalKirim"
    And User wait for 3 seconds
    And User click "inputSearchKodeInvoice"
    And User paste the copied invoice number into "inputSearchKodeInvoice"
    And User wait for 10 seconds
    And User click "detailOutgoingBtn"
    And User click "checkBox"
    And User click "btnSiapDikirim"
    And User click "btnUbahStatus"
    And User wait for 3 seconds
    And User click "navMenuOrder2"
    And User click "menuPenjualan2" in "navMenuOrder2"
    And User wait for 3 seconds
    And User click "searchTransaction"
    And User paste the copied invoice number into "searchTransaction"
    And User type enter button
    And User click "btnRejectOrder"
    And User click "pilihAlasanTolakPesanan"
    And User type enter button
    And User click "btnSimpanTolakPesanan"
    And User wait for 1 second
    And User click "selectOrderNewest"
    And User wait for 3 seconds
    And the order status should be ditolak
    And User get the total qty order
    And User wait for 1 second
    And User click "navMenuLogistic"
    And User click "menuIncomingGoods" in "navMenuLogistic"
    And User click "tabTolakanVendor"
    And User click "btnSearchV3"
    And User click "searchBarV3"
    And User wait for 1 second
    And User type invoice code to "searchBarV3"
    And User click "btnCariV3"
    And User wait for 3 seconds
    And User click "btnInputTolakanPending"
    And User get total qty tolakan pesanan
    Then the number of qty order should be same as the number of qty tolakan pesanan
