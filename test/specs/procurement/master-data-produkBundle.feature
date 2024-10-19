@ProdukBundle
Feature: Master Data - Produk Bundle


@PB-001
Scenario: Memastikan user dapat masuk ke produk bundle
When api user login
When open dashboard superapp
Given User click menu "navMenuPurchasing" in side menu page
And User click "menuProdukBundle" in navMenuPurchasing
Then User verify titlePage in produk bundle
And User wait for 5 seconds 

Examples: 
| produkBundle     |
| Honey Bee Bundle |

@PB-002
Scenario: Memastikan user dapat cari produk bundle 
When api user login
When open dashboard superapp
Given User click menu "navMenuPurchasing" in side menu page
And User click "menuProdukBundle" in navMenuPurchasing
Then User verify titlePage in produk bundle
And User wait for 5 seconds 
And User click btnSearch in produk bundle
And User input "<produkBundle>" into fieldInputSearch produk bundle
And User click btnCari in produk bundle
And User wait for 5 seconds 
Then User able to see "Honey Bee Bundle" in produk bundle page

Examples: 
| produkBundle     |
| Honey Bee Bundle |

@PB-003
Scenario: Memastikan user tidak dapat cari produk bundle invalid 
When api user login
When open dashboard superapp
Given User click menu "navMenuPurchasing" in side menu page
And User click "menuProdukBundle" in navMenuPurchasing
Then User verify titlePage in produk bundle
And User wait for 5 seconds 
And User click btnSearch in produk bundle
And User input "<produkBundle>" into fieldInputSearch produk bundle
And User click btnCari in produk bundle
And User wait for 5 seconds 
Then User able to see "No Data" in produk bundle page

Examples: 
| produkBundle             |
| Honey Bee Bundlelelelele |
