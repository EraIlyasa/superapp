@e2e-order
Feature: Create-e2e-order

    Scenario Outline: User berhasil melakukan create order e2e
    Given I send login url
    When I login with credential
    # Then I see usernameDisplay
    # And User wait for 1 minute
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
    Then User able to see "Complete Order berhasil diupdate" message verification