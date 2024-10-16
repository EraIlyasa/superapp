@SubKategori
Feature: Master Data - Sub Kategori

@SK-001
Scenario: Memastikan user dapat masuk ke halaman Kategori
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuSubKategori" in navMenuMasterData
Then User verify titlePage in sub kategori
And User wait for 5 seconds 

Examples: 
| a |
| b |

@SK-002
Scenario: Memastikan user dapat cari sub kategori 
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuSubKategori" in navMenuMasterData
Then User verify titlePage in sub kategori
And User wait for 5 seconds 
And User input "<subKategori>" into fieldInputSearch sub kategori
And User wait for 5 seconds 
Then User able to see "Makanan Kucing" in sub kategori

Examples: 
| subKategori       |
| Makanan Kucing    |

@SK-003
Scenario: Memastikan user tidak dapat cari sub kategori invalid
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuSubKategori" in navMenuMasterData
Then User verify titlePage in sub kategori
And User wait for 5 seconds 
And User input "<subKategori>" into fieldInputSearch sub kategori
And User wait for 5 seconds 
Then User able to see "No Data" in sub kategori

Examples: 
| subKategori                    |
| Makanan Kucing dan makan tikus |
