@Purchasing-Import-PIC-Products
Feature: Import PIC - Product

@PR-0091
Scenario: Ensure user able to import PIC 
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
And User able to see table shows "a" on Gudang section2
And User wait for 5 seconds 

When User write csv file and store it
And User click btnImportFile button in Product page
And User uplaod csvUpload to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page
And User able to see table shows "aa" on Gudang section2
And User wait for 5 seconds

Examples: 
| message                        | sku      | picName    |  picName           |
| Semua Data Berhasil Di Simpan! | AGR-0016 | Era Ilyasa |  Ariansyah Riwendi |

# when you running tc PR-0091, dont forget to switch step "User able to see table shows "aa" on Gudang section2" and "User able to see table shows "a" on Gudang section2


@PR-0092
Scenario: Ensure user able to import PIC based on spesific SKU
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
And User able to see table shows "aa" on Gudang section2
And User wait for 5 seconds 

When User write csv file and store it
And User click btnImportFile button in Product page
And User uplaod csvUpload to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page
And User able to see table shows "a" on Gudang section2
And User wait for 5 seconds

Examples: 
| message                        | sku      | picName    |
| Semua Data Berhasil Di Simpan! | AGR-0016 | Era Ilyasa |


@PR-0093
Scenario: Ensure user able to import PIC based on exported file before
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
When User write csv file and store it2
And User click btnImportFile button in Product page
And User uplaod csvUpload to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

When User write csv file and store it2
And User click btnImportFile button in Product page
And User uplaod csvUpload to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

When User click btnSearch button in Product page
And User click fieldInputSearch button in Product page
And User fill fieldInputSearch with value "<sku>" in Product page
And User click btnCari button in Product page
And User able to see table shows "aa" on Gudang section2
And User wait for 5 seconds

Examples: 
| message                        | sku      | picName    |
| Semua Data Berhasil Di Simpan! | AGR-0016 | Era Ilyasa |

@PR-0094
Scenario: Ensure user able to import csv with empty PIC
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
And User click btnImportFile button in Product page
And User write csv file with empty pic and store it
And User upload csvUpload "<condition>" to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

When User click btnSearch button in Product page
And User click fieldInputSearch button in Product page
And User fill fieldInputSearch with value "<sku>" in Product page
And User click btnCari button in Product page

And User wait for 5 seconds

Examples: 
| message                        | sku      | condition |
| Semua Data Berhasil Di Simpan! | AGR-0016 | no pic    |

@PR-0095
Scenario: Ensure user able to change old PIC with newest PIC
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
And User able to see table shows "a" on Gudang section2
And User wait for 5 seconds 

When User write csv file and store it
And User click btnImportFile button in Product page
And User uplaod csvUpload to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page
And User able to see table shows "aa" on Gudang section2
And User wait for 5 seconds

Examples: 
| message                        | sku      | picName    |
| Semua Data Berhasil Di Simpan! | AGR-0016 | Era Ilyasa |

@PR-0096
Scenario: Ensure user able to see changes after import PIC
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
And User able to see table shows "a" on Gudang section2
And User wait for 5 seconds 

When User write csv file and store it
And User click btnImportFile button in Product page
And User uplaod csvUpload to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page
And User able to see table shows "aa" on Gudang section2
And User wait for 5 seconds

Examples: 
| message                        | sku      | picName           |
| Semua Data Berhasil Di Simpan! | AGR-0016 | Ariansyah Riwendi |

@PR-0097
Scenario: Ensure user able to see changes after import PIC
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
And User able to see table shows "a" on Gudang section2
And User wait for 5 seconds 

When User write csv file and store it
And User click btnImportFile button in Product page
And User uplaod csvUpload to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page
And User able to see table shows "aa" on Gudang section2
And User wait for 5 seconds

Examples: 
| message                        | sku      | picName           |
| Semua Data Berhasil Di Simpan! | AGR-0016 | Ariansyah Riwendi |

# @PR-0098
# Scenario:  Ensure user able to change from dashboard imported PIC data before
# When api user login
# When open dashboard superapp
# When User click "navMenuPurchasing" button in "Global" page
# And User click produk menu in Product page
# And User directed to List barang yang terdaftar di Super page
# And User click navTabProduk pic produk in produk page

# When User click btnSearch button in Product page
# And User click fieldInputSearch button in Product page
# And User fill fieldInputSearch with value "<sku>" in Product page

# And User click btnCari button in Product page
# And User wait for 5 seconds 
# And User able to see table shows "a" on Gudang section2
# And User wait for 5 seconds 

# When User write csv file and store it
# And User click btnImportFile button in Product page
# And User uplaod csvUpload to import csv PIC product
# And User click btn submit csv in product page
# And User wait for 5 seconds
# Then User able to see "<message>" message verification in product page
# And User able to see table shows "aa" on Gudang section2
# And User wait for 5 seconds

# Examples: 
# | message                        | sku      | picName           |
# | Semua Data Berhasil Di Simpan! | AGR-0016 | Ariansyah Riwendi |

@PR-0099
Scenario:  Ensure user able to cancel upload PIC
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
And User able to see table shows "a" on Gudang section2
And User wait for 5 seconds 
When User write csv file and store it
And User click btnImportFile button in Product page
And User uplaod csvUpload to import csv PIC product
And User click btnCancelModalPIC in modal import PIC
Then User directed to List barang yang terdaftar di Super page

# @PR-0100
#   Scenario: Ensure user able to import different PIC
#  "Given authorized user to login V3
#    When User click ""menuPurchasing"" menu in ""dashboard"" page
#    And User click ""submenuProduk"" submenu in ""dashboard"" page
#    And User Click Tab PIC
#    And user click import
#    And user Import PIC input files according to the provisions
#    And user imput gudang 'Makassar'
#    And user input pic '361'
#    And user input pic '360'
#    And user click submit
#    Then user redairect pic list "

@PR-0101
Scenario: Ensure user able to import csv file with column pic is empty
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
And User click btnImportFile button in Product page
And User write csv file with empty pic and store it
And User upload csvUpload "<condition>" to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

When User click btnSearch button in Product page
And User click fieldInputSearch button in Product page
And User fill fieldInputSearch with value "<sku>" in Product page
And User click btnCari button in Product page

And User wait for 5 seconds

Examples: 
| message                        | sku      | 
| Semua Data Berhasil Di Simpan! | AGR-0016 | 

@PR-0102
Scenario: Ensure user unable to import empty csv
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
And User click btnImportFile button in Product page
And User write "<csvCondition>" csv file and store it
And User upload csvUpload "<condition>" to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

Examples: 
| message                                   | condition | csvCondition |
| 3 INVALID_ARGUMENT: Data file xlsx kosong | empty     | empty csv    |

@PR-0103
Scenario: Ensure user able to see alert after import unregistered PIC ID
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
And User click btnImportFile button in Product page
And User write "<csvCondition>" csv file and store it
And User upload csvUpload "<condition>" to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

Examples: 
| message                                                                    | condition         | csvCondition      |
| 3 INVALID_ARGUMENT: Pada baris ke 2, PIC dengan ID 2930138 tidak ditemukan | unregistered pic  | unregistered pic  |

@PR-0104
Scenario: Ensure user get alert after import with unregistered warehouse
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
And User click btnImportFile button in Product page
And User write "<csvCondition>" csv file and store it
And User upload csvUpload "<condition>" to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

Examples: 
| message                                                                              | condition               | csvCondition            |
| 3 INVALID_ARGUMENT: Pada baris ke 2, Gudang kaca kaca bukan tape uli tidak ditemukan | unregistered warehouse  | unregistered warehouse  |

# @PR-0105
# Scenario: Ensure user get alert after import with unregistered product and warehouse
# When api user login
# When open dashboard superapp
# When User click "navMenuPurchasing" button in "Global" page
# And User click produk menu in Product page
# And User directed to List barang yang terdaftar di Super page
# And User click navTabProduk pic produk in produk page
# And User click btnImportFile button in Product page
# And User write "<csvCondition>" csv file and store it
# And User upload csvUpload "<condition>" to import csv PIC product
# And User click btn submit csv in product page
# And User wait for 5 seconds
# Then User able to see "<message>" message verification in product page

# Examples: 
# | message                                                                              | condition                           | csvCondition                        |
# | 3 INVALID_ARGUMENT: Pada baris ke 2, Gudang kaca kaca bukan tape uli tidak ditemukan | unregistered product and warehouse  | unregistered product and warehouse  |

@PR-0106
Scenario: Ensure user get alert after import with empty product SKU
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
And User click btnImportFile button in Product page
And User write "<csvCondition>" csv file and store it
And User upload csvUpload "<condition>" to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

Examples: 
| message                                                 | condition          | csvCondition       |
| 3 INVALID_ARGUMENT: Format data pada row 2 tidak valid  | empty product sku  | empty product sku  |

@PR-0107
Scenario: Ensure user get alert after import with invalid satuan
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
And User click btnImportFile button in Product page
And User write "<csvCondition>" csv file and store it
And User upload csvUpload "<condition>" to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

Examples: 
| message                                                                           | condition       | csvCondition    |
| 3 INVALID_ARGUMENT: Pada baris ke 2, SKU agr-0016 Satuan baggggs tidak ditemukan  | invalid satuan  | invalid satuan  |

@PR-0108
Scenario: Ensure user get alert after import with invalid satuan
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
And User click btnImportFile button in Product page
And User write "<csvCondition>" csv file and store it
And User upload csvUpload "<condition>" to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

Examples: 
| message                                                 | condition       | csvCondition    |
| 3 INVALID_ARGUMENT: Format data pada row 2 tidak valid  | empty satuan    | empty satuan    |

@PR-0109
Scenario: Ensure user get alert after import without warehouse
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click produk menu in Product page
And User directed to List barang yang terdaftar di Super page
And User click navTabProduk pic produk in produk page
And User click btnImportFile button in Product page
And User write "<csvCondition>" csv file and store it
And User upload csvUpload "<condition>" to import csv PIC product
And User click btn submit csv in product page
And User wait for 5 seconds
Then User able to see "<message>" message verification in product page

Examples: 
| message                                                 | condition          | csvCondition       |
| 3 INVALID_ARGUMENT: Format data pada row 2 tidak valid  | empty warehouse    | empty warehouse    |

# @PR-0110
# Scenario: Ensure user get alert after not active warehouse
# When api user login
# When open dashboard superapp
# When User click "navMenuPurchasing" button in "Global" page
# And User click produk menu in Product page
# And User directed to List barang yang terdaftar di Super page
# And User click navTabProduk pic produk in produk page
# And User click btnImportFile button in Product page
# And User write "<csvCondition>" csv file and store it
# And User upload csvUpload "<condition>" to import csv PIC product
# And User click btn submit csv in product page
# And User wait for 5 seconds
# Then User able to see "<message>" message verification in product page

# Examples: 
# | message                                                                                  | condition             | csvCondition          |
# | 3 INVALID_ARGUMENT: Pada baris ke 2, Status Gudang dengan nama angga inactive Non Aktif  | inactive warehouse    | inactive warehouse    |

# @PR-0111
# Scenario: Ensure user get alert after import using not active PIC
# When api user login
# When open dashboard superapp
# When User click "navMenuPurchasing" button in "Global" page
# And User click produk menu in Product page
# And User directed to List barang yang terdaftar di Super page
# And User click navTabProduk pic produk in produk page
# And User click btnImportFile button in Product page
# And User write "<csvCondition>" csv file and store it
# And User upload csvUpload "<condition>" to import csv PIC product
# And User click btn submit csv in product page
# And User wait for 5 seconds
# Then User able to see "<message>" message verification in product page

# Examples: 
# | message                                                                   | condition       | csvCondition    |
# | 3 INVALID_ARGUMENT: Pada baris ke 2, Status User dengan ID 441 Non Aktif  | inactive pic    | inactive pic    |

