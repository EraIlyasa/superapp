@Purchasing-Export-PIC-Products
Feature: Export PIC - Product

  @PR-0083
  Scenario Outline: Ensure user able to export PIC
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page

    When User click btnExportPIC button in Product page
    Then User verify the CSV file has been downloaded

  @PR-0084
  Scenario Outline: Ensure user able to export PIC based on spesific warehouse
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
    And User able to see "<button>" on Gudang section

    And User click "btnFilter" in product list modal
    And User click optWarehouseJember in filter modal PIC produk
    And User click "btnTerapkanModal" in product list modal
    And User wait for 5 seconds 
    Then User able to see table only shows "<warehouseName>" on Gudang section

    When User click btnExportPIC button in Product page
    Then User verify the CSV file has been downloaded

    Examples:
    | sku      | produkName             | button    | warehouseName | message                         |
    | AGR-0016 | Automated Testing hehe | Ganti PIC |     Jember    | Berhasil memperbarui pic produk |

  @PR-0085
  Scenario Outline: Ensure user able to export PIC based on SKU
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
    And User able to see "<button>" on Gudang section

    When User click btnExportPIC button in Product page
    Then User verify the CSV file has been downloaded

    Examples:
    | sku      | produkName             | button    | warehouseName | message                         |
    | AGR-0016 | Automated Testing hehe | Ganti PIC |     Jember    | Berhasil memperbarui pic produk |

  @PR-0086
  Scenario Outline: Ensure user able to export PIC based on spesific PIC product
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page

    And User click "btnFilter" in product list modal
    When User click navFilterModal pic produk in filter modal
    And User click fieldSearchModal in pic filter
    And User fill "<keyword>" into fieldSearchModal
    And User click "EraIlyasa" after search modal 
    And User click "btnTerapkanModal" in product list modal
    And User wait for 5 seconds 
    And User able to see table shows "<picName>" on Gudang section

    When User click btnExportPIC button in Product page
    Then User verify the CSV file has been downloaded

    Examples:
    | produkName             | keyword    |  picName    |
    | Automated Testing hehe | Era Ilyasa |  Era Ilyasa |

  @PR-0087
  Scenario Outline: Ensure user able to export PIC based on all PIC product
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page

    And User click "btnFilter" in product list modal
    When User click navFilterModal pic produk in filter modal

    And User click "optPICSemua" after search modal    
    And User click "btnTerapkanModal" in product list modal
    And User wait for 5 seconds 

    When User click btnExportPIC button in Product page
    Then User verify the CSV file has been downloaded

    Examples:
    | a |
    | b |

#  @PR-0088
#  Scenario: Memastikan pada file xlsx yang di export memiliki halaman kedua dengan nama export-pic-list
#    When User click "navMenuPurchasing" button in "Global" page
#    And User click "menuPurchasingProduct" button in "Product" page
#    And User directed to "List barang yang terdaftar di Super" page
#    And User click "tabListPICProduk" button in "Product" page
#    And User click "btnExportPIC" button in "Product" page
#    Then user get file export lxl"

  @PR-0089
  Scenario Outline: Ensure user able to export PIC based on all warehouse
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page

    And User click "btnFilter" in product list modal

    And User click "optSemuaGudang" after search modal    
    And User click "btnTerapkanModal" in product list modal
    And User wait for 5 seconds 

    When User click btnExportPIC button in Product page
    Then User able to see "<message>" message verification in product page
    
    Examples:
    | message |
    | Saat ini export PIC produk hanya dapat dilakukan per satu gudang, silakan ganti filter Warehouse |

  @PR-0090
  Scenario Outline: Ensure user able to export PIC based on all warehouse
    # Given User login
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    And User click navTabProduk pic produk in produk page

    And User click "btnFilter" in product list modal
    And User click "optSemuaGudang" after search modal    
    When User click navFilterModal pic produk in filter modal
    And User click "optPICSemua" after search modal    
 
    And User click "btnTerapkanModal" in product list modal
    And User wait for 5 seconds 

    When User click btnExportPIC button in Product page
    Then User able to see "<message>" message verification in product page
    
    Examples:
    | message |
    | Saat ini export PIC produk hanya dapat dilakukan per satu gudang, silakan ganti filter Warehouse |
