@gudang
Feature: Master Data - Gudang

@Gudang-001
Scenario: Memastikan user dapat masuk kehalaman manajemen stok
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuWarehouse" in side menu page
Then User verify titlePage in outgoing goods page
And User wait for 5 seconds 

Examples: 
| a |
| b |

@Gudang-002
Scenario: Memastikan user dapat cari gudang di gudang page 
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuWarehouse" in side menu page
Then User verify titlePage in gudang page
And User wait for 5 seconds 
And User input "<namaGudang>" into fieldInputSearch gudang
Then User able to see "gudangRra" in gudang page

Examples: 
| namaGudang |
| gudangRra  |

@Gudang-003
Scenario: Memastikan user dapat cari gudang invalid di gudang page 
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuWarehouse" in side menu page
Then User verify titlePage in gudang page
And User wait for 5 seconds 
And User input "<namaGudang>" into fieldInputSearch gudang
Then User able to see "no data" in gudang page

Examples: 
| namaGudang             |
| gudang tidak akan ada  |
