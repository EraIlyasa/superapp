@Purchasing-Update-PIC-Products
Feature: Update PIC - Product

  @PR-0076
  Scenario Outline: Ensure there is button pilih PIC for related product
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

    Examples:
      | sku      | produkName             | button    |
      | AGR-0016 | Automated Testing hehe | Pilih PIC |

  @PR-0077
  Scenario Outline: Ensure popup modal is displayed while user click pilih/ganti PIC button
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

    When User click btnPilihPIC on gudang section 
    Then User able to see "PIC Sebelumnya" message 
    Then User able to see "PIC Sekarang" message 


    Examples:
      | sku      | produkName             | button    |
      | AGR-0016 | Automated Testing hehe | Ganti PIC |

  @PR-0078
  Scenario Outline: Ensure latest PIC is - if there isnt any PIC
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

    When User click btnPilihPIC on gudang section 
    Then User able to see "PIC Sebelumnya" message 
    And User able to see "PIC Sekarang" message 
    And User able to see PIC LAMA value is "<picValue>"

    Examples:
      | sku      | produkName             | button    | picValue |
      | AGR-0016 | Automated Testing hehe | Ganti PIC |     -    |

  @PR-0079
  Scenario Outline: Ensure new PIC is displayed after user search in search column & scrollable
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

    When User click btnPilihPIC on gudang section 
    Then User able to see "PIC Sebelumnya" message 
    And User able to see "PIC Sekarang" message 

    When User click dropdownModalPICBaru button in Product page
    And User fill dropdownModalPICBaru with value "<picValue>" in Product page
    And User click btnSimpanModalPIC in product page
    And User wait for 5 seconds
    Then User able to see "<message>" message verification
    
    Examples:
    | sku      | produkName             | button    | picValue          | message                         |
    | AGR-0016 | Automated Testing hehe | Ganti PIC |     Era Ilyasa    | Berhasil memperbarui pic produk |

  @PR-0080
  Scenario Outline: Ensure there is log PIC
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

    When User click btnPilihPIC on gudang section 
    Then User able to see "PIC Sebelumnya" message 
    And User able to see "PIC Sekarang" message 
    And User able to see PIC LAMA value is "<picValue>"    
    And User able to see diubah oleh "<picValue>" and tanggal is "<date>"

    Examples:
    | sku      | produkName             | button    | picValue      | date      |
    | AGR-0016 | Automated Testing hehe | Ganti PIC | Era Ilyasa    |08 Oct 2024|

  @PR-0081
  Scenario Outline: Ensure user able to save PIC
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

    When User click btnPilihPIC on gudang section 
    Then User able to see "PIC Sebelumnya" message 
    And User able to see "PIC Sekarang" message 

    When User click dropdownModalPICBaru button in Product page
    And User fill dropdownModalPICBaru with value "<picValue>" in Product page
    And User click btnSimpanModalPIC in product page
    And User wait for 5 seconds
    Then User able to see "<message>" message verification
    
    Examples:
    | sku      | produkName             | button    | picValue          | message                         |
    | AGR-0016 | Automated Testing hehe | Ganti PIC |     Era Ilyasa    | Berhasil memperbarui pic produk |

  @PR-0082
  Scenario Outline: Ensure user able to cancel while editing PIC
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

    When User click btnPilihPIC on gudang section 
    Then User able to see "PIC Sebelumnya" message 
    And User able to see "PIC Sekarang" message 

    When User click dropdownModalPICBaru button in Product page
    And User fill dropdownModalPICBaru with value "<picValue>" in Product page
    And User click btnCancelModalPIC in product page
    # And User wait for 5 seconds
    # Then User able to see "<message>" message verification
    
    Examples:
    | sku      | produkName             | button    | picValue          | message                         |
    | AGR-0016 | Automated Testing hehe | Ganti PIC |     Era Ilyasa    | Berhasil memperbarui pic produk |
