@TransferGoods
Feature: Create - Transfer Transfer Goods

  @TransferGoods-0001
  Scenario Outline: Memastikan dapat buat transfer goods
    Given I send login url
    When I login with credential
    Then I see usernameDisplay
    When User click "navMenuLogistik" button in "Global" page
    And User click "menuTransferGoodsV4" button in "PO" page
    And User wait for 5 seconds
    Given User click "btnBuatTransferGoods"
    And User wait for 5 seconds
    And User click "fieldGudangAsal"
    And User click "optGudangAsal"
    And User click "fieldGudangTujuan"
    And User click "optGudangTujuan"
    And User click "fieldTanggalKirim"
    And User input "<tglKirim>" into "fieldTanggalKirim"
    And User click "fieldTipePT"
    And User click "optTipePT"
    And User click "fieldInputCatatan"
    And User input "<catatan>" into "fieldInputCatatan"
    And User click "btnTambahkanProduk"
    And User wait for 5 seconds
    And User click "btnTambahProdukModal"
    And User click "fieldPilihProduk"
    And User click "optPilihProduk"
    And User click "fieldPilihSatuan"
    And User click "optPilihSatuan"
    And User click "fieldQtyTransfer"
    And User input "<qty>" into "fieldQtyTransfer"
    And User click "btnSimpanModal"
    And User wait for 5 seconds
    And User click "btnSimpan"
    And User click "btnYaSimpan"
    Then User able to see "Data berhasil disimpan" message verification

    Examples:
      | tglKirim    | catatan          | qty |
      | 17 Sep 2025 | automated tesing |   5 |
