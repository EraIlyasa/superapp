@Outgoing-goods
Feature: Logistic - Outgoing Goods

@OG-create-001
Scenario: As a user, I want to use order
Given I send login url
When I login with credential
Then I see usernameDisplay

When I click logistic
And I click new outgoing goods
And I click tanggal kirim v4
And I select hari ini v4

And I input kode invoice v4
And I click detail outgoing

And I input kode transaksi
And I click checkbox v4

And I click ganti vendor
And I select vendor tujuan
And I select alasan
And I click ganti

And I click outgoing goods v3
And I click tanggal kirim
And I select hari ini
And I click terapkan

And I input kode invoice
And I click cari kode invoice
And I click see details

And I input detail kode invoice
And I click cari kode invoice
And I click checkbox

And I click assign kurir
And I select driver
And I select plat nomor
And I click assign

And I click checkbox
And I click siap dikirim
And I click ubah status

When I click checkbox
And I click dikirim
And I click ubah status


@OG-002
Scenario Outline: Memastikan user dapat masuk kehalaman outgoing Goods
When api user login
When open dashboard superapp
Given User click menu "logistic" in side menu page
And User click submenu "outgoingGoodsV3" in side menu page
Then User verify titlePage in outgoing goods page

Examples: 
| a |
| b |

@OG-003
Scenario Outline: Memastikan user dapat cari kode invoice
# When api user login
# When User create order from api "<shipment>"
When api user login
When open dashboard superapp
Given User click menu "logistic" in side menu page
And User click submenu "outgoingGoodsV3" in side menu page
And User verify titlePage in outgoing goods page

And User input "<kode>" into inputKodeInvoice outgoing goods page 
And User click cariKodeInvoice in outgoing goods 
And User wait for 5 seconds
Then User able to see "list mobil" in outgoing goods page 

Examples: 
| kode        | shipment |
| T241015-886 | tomorrow |

@OG-004
Scenario Outline: Memastikan user tidak dapat cari kode invoice invalid
# When api user login
# When User create order from api "<shipment>"
When api user login
When open dashboard superapp
Given User click menu "logistic" in side menu page
And User click submenu "outgoingGoodsV3" in side menu page
And User verify titlePage in outgoing goods page

And User input "<kode>" into inputKodeInvoice outgoing goods page 
And User click cariKodeInvoice in outgoing goods 
And User wait for 5 seconds
Then User able to see "list mobil" in outgoing goods page 

Examples: 
| kode            | shipment |
| T241015-88asd16 | tomorrow |

@OG-005
Scenario Outline: Memastikan user dapat cari kode invoice periode hari ini
# When api user login
# When User create order from api "<shipment>"
# And User get kode invoice order
When api user login
When open dashboard superapp
Given User click menu "logistic" in side menu page
And User click submenu "outgoingGoodsV3" in side menu page
And User verify titlePage in outgoing goods page

And User click "btnPeriode" in tab filter outgoing goods
And User click optFilter "Hari ini" modal in outgoing goods page
And User click btnTerapkan in modal filter outgoing goods
And User input "<kode>" into inputKodeInvoice outgoing goods page 
And User click cariKodeInvoice in outgoing goods 
And User wait for 5 seconds
Then User able to see "list mobil" in outgoing goods page 

Examples: 
| kode        | shipment |
| T241015-900 | today    |

@OG-006
Scenario Outline: Memastikan user dapat cari kode invoice periode besok
# When api user login
# When User create order from api "<shipment>"
# And User get kode invoice order
When api user login
When open dashboard superapp
Given User click menu "logistic" in side menu page
And User click submenu "outgoingGoodsV3" in side menu page
And User verify titlePage in outgoing goods page

And User click "btnPeriode" in tab filter outgoing goods
And User click optFilter "Besok" modal in outgoing goods page
And User click btnTerapkan in modal filter outgoing goods
And User input "<kode>" into inputKodeInvoice outgoing goods page 
And User click cariKodeInvoice in outgoing goods 
And User wait for 5 seconds
Then User able to see "list mobil" in outgoing goods page 

Examples: 
| kode        | shipment |
| T241015-898 | today    |

@OG-007
Scenario Outline: Memastikan user dapat cari kode invoice periode kemarin
When api user login
When User create order from api "<shipment>"
And User get kode invoice order
When api user login
When open dashboard superapp
Given User click menu "logistic" in side menu page
And User click submenu "outgoingGoodsV3" in side menu page
And User verify titlePage in outgoing goods page

And User click "btnPeriode" in tab filter outgoing goods
And User click optFilter "Kemarin" modal in outgoing goods page
And User click btnTerapkan in modal filter outgoing goods
And User input invoice into inputKodeInvoice outgoing goods page
And User click cariKodeInvoice in outgoing goods 
And User wait for 5 seconds
Then User able to see "list mobil" in outgoing goods page 

Examples: 
| kode        | shipment   |
| T241015-901 | yesterday  |

@OG-008
Scenario Outline: Memastikan user dapat export csv
When api user login
When User create order from api "<shipment>"
And User get kode invoice order
When api user login
When open dashboard superapp
Given User click menu "logistic" in side menu page
And User click submenu "outgoingGoodsV3" in side menu page
And User verify titlePage in outgoing goods page

And User click "btnPeriode" in tab filter outgoing goods
And User click optFilter "Kemarin" modal in outgoing goods page
And User click btnTerapkan in modal filter outgoing goods
And User input invoice into inputKodeInvoice outgoing goods page
And User click cariKodeInvoice in outgoing goods 
And User wait for 5 seconds
Then User able to see "list mobil" in outgoing goods page 
And User export csv in outgoing goods page

Examples: 
| shipment   |
| yesterday  |
