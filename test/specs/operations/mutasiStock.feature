@MutasiStock
Feature: Master Data - Kendaraan

@MS-001
Scenario: Memastikan user dapat masuk ke mutasi stok
When api user login
When open dashboard superapp
Given User click menu "navMenuStock" in side menu page
And User click submenu "menuMutasiStock" in side menu page
Then User verify titlePage in mutasi stock
And User wait for 5 seconds 

Examples: 
| a |
| b |

@MS-002
Scenario: Memastikan user dapat masuk ke mutasi stok
When api user login
When open dashboard superapp
Given User click menu "navMenuStock" in side menu page
And User click submenu "menuMutasiStock" in side menu page
Then User verify titlePage in mutasi stock
And User wait for 5 seconds 

And User click "stok bagus" in mutasi stock
And User set periode "awal" mutasi stock
And User set periode "akhir" mutasi stock
And User set gudang in mutasi stock
And User set produk in mutasi stock
And User set satuan in mutasi stock
And User set tipe pt in mutasi stock
And User click btnShow in mutasi stock
Then User able to see namaProduk in list mutasi stock

Examples: 
| a |
| b |
