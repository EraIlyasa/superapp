Feature: Create-flashsale

  Background: User login into the system
    # Given I send login url
    # When I login with credential
    # Then I see usernameDisplay

  @flashsale-0001
  Scenario Outline: Memastikan dapat buat flashsale baru
    When api user login
    When open dashboard superapp
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

  @flashsale-0002
  Scenario Outline: Memastikan Field gambar ada validation required ketika user tidak meinput gambar pada create flashsale
    When api user login
    When open dashboard superapp
    And User click "navMenuMarketing" in global page
    And User click "menuFlashsale" inside "navMenuMarketing"
    And User wait for 10 seconds
    Given User click "createFsale" inside "Flashsale"
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
    Then displayed "<allertMessage>" on field image flashsale
    And User wait for 10 seconds

    Examples:
      | namaFlashsale     | endDate     | startDate   | hargaJual | allertMessage |
      | Automated testing | 15 Sep 2025 | 14 Sep 2025 |     95000 | Required      |

  @flashsale-0003
  Scenario Outline: Memastikan Field gambar ada validation required ketika user tidak menginput gambar pada create flashsale
    When api user login
    When open dashboard superapp
    And User click "navMenuMarketing" in global page
    And User click "menuFlashsale" inside "navMenuMarketing"
    And User wait for 10 seconds
    Given User click "createFsale" inside "Flashsale"
    And User wait for 5 seconds
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
    Then I see Invalid Message modal popup "tanggal selesai flashsale harus lebih besar dari tanggal mulai"
    And User wait for 10 seconds

    Examples:
      | namaFlashsale     | endDate     | startDate   | hargaJual |
      | Automated testing | 15 Sep 2025 | 15 Sep 2025 |     95000 |

  @flashsale-0004
  Scenario Outline: Memastikan ada validation jika user tidak input nama flashsale
    When api user login
    When open dashboard superapp
    And User click "navMenuMarketing" in global page
    And User click "menuFlashsale" inside "navMenuMarketing"
    And User wait for 10 seconds
    Given User click "createFsale" inside "Flashsale"
    And User wait for 5 seconds
    And User input "filePath" into "uploadGambar"
    And User wait for 5 seconds
    And User click "fieldInputWarehouse" in "menuFlashsaleV4"
    And User click "optWarehouse" in "menuFlashsaleV4"
    And User click "fieldInputArea" in "menuFlashsaleV4"
    And User click "optArea0" in "menuFlashsaleV4"
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
    Then Displayed "<allertMessage>" on field name flashsale
    And User wait for 10 seconds

    Examples:
      | endDate     | startDate   | hargaJual | allertMessage |
      | 15 Sep 2025 | 14 Sep 2025 |     95000 | Required      |

  @flashsale-0005
  Scenario Outline: Memastikan ada validation jika user tidak input quota SKU flashsale
    When api user login
    When open dashboard superapp
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
    # And User click "fieldInputProductQuotaUser" in "menuFlashsaleV4"
    # And User input "fieldInputProductQuotaUser" in "menuFlashsaleV4"
    # And User click "fieldInputFlashsaleQuota" in "menuFlashsaleV4"
    # And User input "fieldInputFlashsaleQuota" in "menuFlashsaleV4"
    # And User click "fieldMinPurchase" in "menuFlashsaleV4"
    # And User input "fieldMinPurchase" in "menuFlashsaleV4"
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
    Then Displayed "<allertMessage>" on field product quota SKU
    Then Displayed "<allertMessage>" on field flashsale quota
    Then Displayed "<allertMessage>" on field min. purchase
    And User wait for 10 seconds

    Examples:
      | namaFlashsale     | endDate     | startDate   | hargaJual | allertMessage |
      | Automated testing | 15 Sep 2025 | 15 Sep 2025 |     95000 | Required      |

  @flashsale-0006
  Scenario Outline: Memastikan dapat buat flashsale baru
    When api user login
    When open dashboard superapp
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
    Then User able to see "<statsBefore>" before publish
    Given User click "btnDetailFS" in flashsale page
    And User wait for 5 seconds
    And User click "btnPublishFlashSale" in detail flashsale
    And User click "btnPublishFlashSaleModal" in detail modal flashsale
    And User wait for 5 seconds
    And User back to flashsale main page
    And User wait for 5 seconds
    Then User able to see "<statsAfter>" after publish

    Examples:
      | namaFlashsale     | endDate     | startDate   | hargaJual | statsBefore | statsAfter |
      | Automated testing | 16 Sep 2025 | 15 Sep 2025 |     95000 | Draft       | Published  |
