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
    ##
    And User directed to "Stok Bermasalah" via "<url>"
    And User wait for 5 seconds
    # And User click "menuStockBermasalahV4" button in "Stock" page
    # And User wait for 5 seconds
    Given User click "btnCreateStokBermasalah"
    And User wait for 5 seconds
    And User click "fieldInputGudang"
    And User click "optGudang0"
    And User click "btntambahProduk"
    And User wait for 5 seconds
    # And User click "btnTambahProdukModal"
    And User click "fieldNamaProduk"
    And User click "optNamaProduk0"
    And User click "fieldKodeSumber"
    And User click "optKodeSumber0"
    And User click "fieldInputQty"
    And User input "<qty>" "fieldInputQty"
    And User upload file to "imgUploadModal"
    And User wait for 5 seconds
    # And User click "fieldInputCatatan"
    And User input "<catatan>" into "fieldInputCatatanModal"
    And User click "btnSimpanModal" in BS page
    And User wait for 5 seconds
    And User upload file to "imgUploadPB"
    And User click "menuBuktiAlokasiBarang"
    And User upload file into "imgUploadBAB0"
    And User click "btnSimpan" to create BS
    And User click "btnYaSimpanModal" to create BS
    Then User able to see "Success Message"
    # #
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
      |   5 | automated testing | Teh Pucuk 350ml | https://v3-web-app-micro.staging.superapp.co.id/stock/bad-stock-v4 | Automated Testing |
