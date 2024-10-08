@Purchasing-List-PIC-Products
Feature: List PIC - Product

  @PR-0068
  Scenario Outline: Ensure search product feature
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page

    And User click navTabProduk pic produk in produk page 
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<sku>" in Product page
    And User click btnCari button in Product page
    Then User be able to see "<produkName>" in pic list produk

    Examples:
      | sku      | produkName             |
      | AGR-0016 | Automated Testing hehe |

  @PR-0069
  Scenario Outline: Ensure default option in warehouse filter is Aloha
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page 
    And User click "btnFilter" in product list modal

    Then User be able to see "<option>" as a warehouse default 

    Examples:
      | option |
      | Aloha  |

  @PR-0070
  Scenario Outline: Ensure warehouse filter on list pic product
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page 

    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<sku>" in Product page
    And User click btnCari button in Product page
    And User wait for 5 seconds 

    And User click "btnFilter" in product list modal
    And User click optWarehouseJember in filter modal PIC produk
    And User click "btnTerapkanModal" in product list modal
    And User wait for 5 seconds 
    Then User able to see table only shows "<warehouseName>" on Gudang section
    
    Examples:
      | sku            | warehouseName |
      | KRT-111858123  | Jember        |

  @PR-0071
  Scenario Outline: Ensure default option in pic filter is semua
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page 
    And User click "btnFilter" in product list modal
    When User click navFilterModal pic produk in filter modal
    And User wait for 5 seconds 
    Then User be able to see "<option>" selected as a pic produk default 

    Examples:
      | option     |
      | Semua Pic  |

  @PR-0072
  Scenario Outline: Ensure PIC product filter on list pic product
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page 

    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<sku>" in Product page
    And User click btnCari button in Product page
    And User wait for 5 seconds 

    And User click "btnFilter" in product list modal
    And User click optWarehouseJember in filter modal PIC produk
    When User click navFilterModal pic produk in filter modal
    And User click fieldSearchModal in pic filter
    And User fill "<keyword>" into fieldSearchModal
    And User click "EraIlyasa" after search modal 
    And User click "btnTerapkanModal" in product list modal
    And User wait for 5 seconds 

    Then User able to see table only shows "<warehouseName>" on Gudang section
    And User able to see table shows "<picName>" on Gudang section
    Examples:
      | sku            | warehouseName | keyword    | picName    |
      | KRT-111858123  | Jember        | Era Ilyasa | Era Ilyasa |

  @PR-0073
  Scenario Outline: Ensure reset filter in filter list pic product
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page 

    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<sku>" in Product page
    And User click btnCari button in Product page
    And User wait for 5 seconds 

    And User click "btnFilter" in product list modal
    And User click optWarehouseJember in filter modal PIC produk
    When User click navFilterModal pic produk in filter modal
    And User click fieldSearchModal in pic filter
    And User fill "<keyword>" into fieldSearchModal
    And User click "EraIlyasa" after search modal 
    And User click "btnTerapkanModal" in product list modal
    And User wait for 5 seconds 

    Then User able to see table only shows "<warehouseName>" on Gudang section
    And User able to see table shows "<picName>" on Gudang section
    And User click "btnFilter" in product list modal
    When User click btnResetModal in filter modal
    And User wait for 5 seconds
    Then User able to see "<option1>" radio as default warehouse
    Then User able to see "<option2>" radio as default pic produk


    Examples:
      | sku            | warehouseName | keyword    | picName    | option1 | option2   |
      | KRT-111858123  | Jember        | Era Ilyasa | Era Ilyasa | Aloha   | Semua Pic |

  @PR-0074
  Scenario Outline: Ensure while user input non registered product, no data is displayed
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page 

    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value "<keyword>" in Product page
    And User click btnCari button in Product page
    And User wait for 5 seconds 
    Then User able to see "<message>" message verification in product page

    Examples: 
      | keyword        | message |
      | OWL-0007123123 | No data |
     
  @PR-0075
  Scenario Outline: Ensure while user input emoji, then alert is displayed
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page 
  
    When User click btnSearch button in Product page
    And User click fieldInputSearch button in Product page
    And User fill fieldInputSearch with value in Product page
    And User click btnCari button in Product page
    Then User able to see "<message>" message verification in product page
    
    Examples:
      | message                                                                       |
      | 3 INVALID_ARGUMENT: Karakter pencarian Tidak Valid: emoji tidak diperbolehkan |