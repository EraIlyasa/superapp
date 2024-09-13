Feature: Create-flashsale

  Background: User login into the system
    Given I send login url
    When I login with credential
    Then I see usernameDisplay

  @flashsale-0001
  Scenario Outline: Memastikan dapat buat flashsale baru
    And User click "navMenuMarketing" in global page
    And User click "menuFlashsale" inside "navMenuMarketing"
    And User wait for 10 seconds
    Given User click "createFsale" inside "Flashsale"
    And User wait for 5 seconds
    # And User click "uploadFsale" inside "Flashsale"
    And User wait for 10 seconds
    And User input "filePath" into "uploadGambar"
    And User wait for 5 seconds
    And User click "fieldInputWarehouse" in "menuFlashsaleV4"
    And User click "optWarehouse" in "menuFlashsaleV4"
    And User click "fieldInputArea" in "menuFlashsaleV4"
    And User click "optArea0" in "menuFlashsaleV4"
    And User input "<namaFlashsale>" into "fieldInputNamaFlashsale"
    And User click "toggleFsCountdown" in "menuFlashsaleV4"
    # And User click "fieldPeriodeFlashsale" inside "Flashsale"
    And User click and input "<startDate>" into "fieldPeriodeFlashsale"
    # And User input "<startDate>" into "fieldPeriodeFlashsale"
    And User wait for 5 seconds
    And User click and input "<endDate>" in "menuFlashsaleV4"
    # And User click "<endDate>" in "menuFlashsaleV4"
    And User click "fieldSegment" in "menuFlashsaleV4"
    And User click "optSegment" in "menuFlashsaleV4"
    And User click "fieldInputProductQuotaUser" in "menuFlashsaleV4"
    And User input "fieldInputProductQuotaUser" in "menuFlashsaleV4"
    And User click "fieldInputFlashsaleQuota" in "menuFlashsaleV4"
    And User input "fieldInputFlashsaleQuota" in "menuFlashsaleV4"
    And User click "fieldMinPurchase" in "menuFlashsaleV4"
    And User input "fieldMinPurchase" in "menuFlashsaleV4"
    And User click "btnTambahProduk" in "menuFlashsaleV4"
    And User wait for 5 seconds
    And User click "fieldCariProduk" in "menuFlashsaleV4"
    And User click "optCariProduk0" in "menuFlashsaleV4"
    And User click "fieldCariUnit" in "menuFlashsaleV4"
    And User click "optUnit0" in "menuFlashsaleV4"
    And User click "fieldInputQty" in "menuFlashsaleV4"
    And User input "fieldInputQty" in "menuFlashsaleV4"
    And User click "fieldInputHargaJual" in "menuFlashsaleV4"
    And User input "fieldInputHargaJual" in "menuFlashsaleV4"
    And User click "fieldQtyPerUser" in "menuFlashsaleV4"
    And User input "fieldQtyPerUser" in "menuFlashsaleV4"
    And User click "btnSaveModal" in "menuFlashsaleV4"
    And User wait for 5 seconds
    And User click "btnCreateFlashsale" in "menuFlashsaleV4"
    Then User able to see "Data berhasil disimpan" message verification
    And User wait for 10 seconds

    Examples:
      | namaFlashsale     | endDate     | startDate   | hargaJual |
      | Automated testing | 15 Sep 2025 | 14 Sep 2025 |     95000 |

