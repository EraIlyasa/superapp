@SetPrice
Feature: Purchasing - Product - Set Price

@SPR-001
Scenario Outline: Button Product Muncul ketika akses level diaktifkan
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
And User wait for 5 seconds
Examples:
| sku      | produkName             |
| AGR-0016 | Automated Testing hehe |

@SPR-002
Scenario Outline: User dapat masuk ke form Product
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
And User wait for 5 seconds

And User click btnAturHarga in product list
And User wait for 5 seconds
And User get window handle
And User click btnUbahAturHarga in atur harga page
Then User verify btnUbahAturHarga is not displayed

Examples:
| sku      | produkName             |
| AGR-0016 | Automated Testing hehe |

@SPR-003
#  Scenario: Memastikan di list tidak terdapat fitur pin produk
#  "Given user login to Dashboard V3
#    When user is in dashboard home
#    And user click purchasing
#    And user click product
#    Then user successfully check list  "
#
@SPR-004
#  Scenario: Memastikan fitur pin product dipindahkan ke dalam form product
#  "Given user login to Dashboard V3
#    When user is in dashboard home
#    And user click purchasing
#    And user click product
#    Then user successfully check list  "
#
@SPR-005
#  Scenario: Memastikan terdapat check box pin product pada form product
#  "Given user login to Dashboard V3
#    When user is in dashboard home
#    And user click purchasing
#    And user click product
#    Then user successfully check list  "
#
@SPR-006
#  Scenario: Memastikan checklist check box pin product
#  "Given user login to Dashboard V3
#    When user is in dashboard home
#    And user click purchasing
#    And user click product
#    Then user successfully check list  "
#
@SPR-007
#  Scenario: Memastikan default unchecked fitur pin product
#  "Given user login to Dashboard V3
#    When user is in dashboard home
#    And user click purchasing
#    And user click product
#    Then user successfully check list  "
# 
@SPR-008
#  Scenario: User can see permission atur harga for product
#  "Given user login to Dashboard V3
#    When user is in dashboard home
#    And user click purchasing
#    And user click product
#    Then user successfully check list  "
#
@SPR-009
#  Scenario: User can activated permission atur harga
#  "Given user login to Dashboard V3
#    When user is in dashboard home
#    And user click purchasing
#    And user click product
#    Then user successfully check list  "
#
@SPR-010
#  Scenario: User can inactive permission atur harga
#  "Given user login to Dashboard V3
#    When user is in dashboard home
#    And user click purchasing
#    And user click product
#    Then user successfully check list  "

@SPR-011
Scenario Outline: User can see button atur harga in product list when user activated the permission
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
And User wait for 5 seconds

And User click btnAturHarga in product list
And User wait for 5 seconds
And User get window handle
And User click btnUbahAturHarga in atur harga page
Then User verify btnUbahAturHarga is not displayed

Examples:
| sku      | produkName             |
| AGR-0016 | Automated Testing hehe |

@SPR-0012
#  Scenario: User can't see button atur harga in product   list when user inactive the permission
#  "Given user login to Dashboard V3
#    When user is in dashboard home
#    And user click purchasing
#    And user click product
#    Then user get an error message"

@SPR-0013
#  Scenario: User can't see button atur harga when user can't access the warehouse where product   in use
#  "Given user login to Dashboard V3
#    When user is in dashboard home
#    And user click purchasing
#    And user click product
#    Then user get an error message"

@SPR-014
Scenario Outline: User can click button atur harga when product unrilis
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
And User wait for 5 seconds
And User click btnAturHarga in product list
Then User able to see "<message>" message verification in product page
And User wait for 5 seconds

Examples:
| sku           | produkName     | message                                                                 |
| KRT-111858123 | Automated Test | Harga jual belum dapat diatur karena stok unrilis belum pernah tersedia |
