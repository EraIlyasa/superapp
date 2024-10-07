@Purchasing-Products
Feature: List - Product

  @PR-0053
  Scenario Outline: Ensure search product feature
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<sku>" in Product page
    And User click btnCari button in Product page
    Then User able to see "<produkName>" in product list
    Examples:
      | sku      | produkName             |
      | AGR-0016 | Automated Testing hehe |

  @PR-0054
  Scenario Outline: Ensure user able to search product based on tag filter
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click "fieldSearchModal" in product list modal
    And User fill "<keyword>" into fieldSearchModal
    And User click "Automated Hehe" after search modal 
    And User click "btnTerapkanModal" in product list modal
    Then User able to see "<produkName>" in product list

    Examples:
      | keyword        | produkName             |
      | Automated Hehe | Automated Testing hehe |

  @PR-0055
  Scenario Outline: Ensure user able to see semua option is default radio
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click "fieldSearchModal" in product list modal
    Then User able to see selected radio default is "<option>"

    Examples:
      | option |
      |  Semua |

@PR-0056
  Scenario Outline: Ensure user able to select product type non rtp from related filter
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click navFilterModal tipe produk in filter modal
    And User click optNonRTP in filter modal
    And User click "btnTerapkanModal" in product list modal

    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<namaProduk>" in Product page
    And User click btnCari button in Product page
    Then User able to see "<produkName>" in product list

    Examples:
        | namaProduk      | produkName      |
        | Automated Test  | Automated Test  |

@PR-0057
  Scenario Outline: Ensure user able to select product type rtp from related filter
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click navFilterModal tipe produk in filter modal
    And User click optTPRTP in filter modal

    And User click "btnTerapkanModal" in product list modal
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<namaProduk>" in Product page
    And User click btnCari button in Product page
    Then User able to see "<produkName>" in product list

    Examples:
        | namaProduk      | produkName      |
        | RTP-ingredients | RTP-ingredients |

  @PR-0058
  Scenario Outline: Ensure user able to see option semua is default option in filter status
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click navFilterModal status in filter modal
    Then User able to see selected radio default is "<option>" in filter status 

    Examples:
      | option |
      |  Semua |

  @PR-0059
  Scenario Outline: Ensure user able to select active product from related filter
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click navFilterModal status in filter modal
    And User click optAktif in filter modal

    And User click "btnTerapkanModal" in product list modal
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<namaProduk>" in Product page
    And User click btnCari button in Product page
    Then User able to see "<produkName>" in product list

    Examples:
        | namaProduk      | produkName      |
        | RTP-ingredients | RTP-ingredients |

  @PR-0060
  Scenario Outline: Ensure user able to select non active product from related filter
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click navFilterModal status in filter modal
    And User click optAktif in filter modal

    And User click "btnTerapkanModal" in product list modal
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<namaProduk>" in Product page
    And User click btnCari button in Product page
    Then User able to see "<produkName>" in product list

    Examples:
        | namaProduk        | produkName      |
        | Produk Otomatis 0 | Produk Otomatis 0 |

@PR-0061
  Scenario Outline: Ensure user able to select spesific category
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click navFilterModal kategori in filter modal    
    And User click optBahanDapur in filter modal
    And User click "btnTerapkanModal" in product list modal
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<namaProduk>" in Product page
    And User click btnCari button in Product page
    Then User able to see "<produkName>" in product list

    Examples:
        | namaProduk        | produkName      |
        | RTP-ingredients   | RTP-ingredients |

  @PR-0062
  Scenario Outline: Ensure default option in pin product filter is semua
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click navFilterModal pin produk in filter modal    
    Then User able to see selected radio default is "<option>" in filter pin produk

    Examples:
        | namaProduk        | produkName      | option |
        | RTP-ingredients   | RTP-ingredients | Semua  |

@PR-0063
  Scenario Outline: Ensure user able to select pinned product from related filter
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click navFilterModal pin produk in filter modal   
    And User click "optPinYa" in filter pin produk
    And User click "btnTerapkanModal" in product list modal
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<namaProduk>" in Product page
    And User click btnCari button in Product page
    Then User able to see "<produkName>" in product list

    Examples:
        | namaProduk        | produkName      |
        | RTP-ingredients   | RTP-ingredients |

  @PR-0064
  Scenario Outline: Ensure user able too select unpinned product from related filter
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal
    And User click navFilterModal pin produk in filter modal   
    And User click "optPinTidak" in filter pin produk
    And User click "btnTerapkanModal" in product list modal
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<namaProduk>" in Product page
    And User click btnCari button in Product page
    Then User able to see "<produkName>" in product list

    Examples:
        | namaProduk        | produkName      |
        | RTP-ingredients   | RTP-ingredients |

  @PR-0065
  Scenario Outline: Ensure user able to reset applied filter
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click "btnFilter" in product list modal

    And User click navFilterModal tag produk in filter modal  

    And User click "fieldSearchModal" in product list modal
    And User fill "<keyword>" into fieldSearchModal
    And User click "Automated Hehe" after search modal 

    And User click navFilterModal status in filter modal
    And User click optAktif in filter modal
    And User click navFilterModal satuan in filter modal
    And User click optSatuanBag in filter modal
    And User click navFilterModal tipe produk in filter modal
    And User click optTPRTP15 in filter modal
    And User click navFilterModal sub tipe in filter modal
    And User click optSubTipe0 in filter modal
    And User click navFilterModal kategori in filter modal
    And User click optBahanDapur in filter modal
    And User click navFilterModal pin produk in filter modal

    And User click "optPinTidak" in filter pin produk
    And User click "btnTerapkanModal" in product list modal
    And User wait for 5 seconds
    And User click "btnFilter" in product list modal
    When User click btnResetModal in filter modal
    And User wait for 5 seconds
    Then User able to see "<option>" radio default

    Examples:
      | keyword        | produkName             | option |
      | Automated Hehe | Automated Testing hehe | Semua  |

  @PR-0066
  Scenario Outline: Ensure while user input non registered product, no data is displayed
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<keyword>" in Product page
    And User click btnCari button in Product page

    Then User able to see "<message>" message verification in product page

    Examples: 
      | keyword        | message |
      | OWL-0007123123 | No data |

  @PR-0067
  Scenario Outline: Ensure while user input emoji, then alert is displayed
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value in Product page
    And User click btnCari button in Product page
    Then User able to see "<message>" message verification in product page
    
    Examples:
      | message                                                                       |
      | 3 INVALID_ARGUMENT: Karakter pencarian Tidak Valid: emoji tidak diperbolehkan |