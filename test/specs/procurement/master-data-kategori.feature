@Kategori
Feature: Master Data - Kategori

@Kategori-001
Scenario: Memastikan user dapat masuk ke halaman Kategori
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuKategori" in navMenuMasterData
Then User verify titlePage in kategori
And User wait for 5 seconds 

Examples: 
| a |
| b |

@Kategori-002
Scenario: Memastikan user dapat cari kategori 
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuKategori" in navMenuMasterData
Then User verify titlePage in kategori
And User wait for 5 seconds 
And User input "<kategori>" into fieldInputSearch kategori
And User wait for 5 seconds 
Then User able to see "Cath Non Aktif" in kategori

Examples: 
| kategori       |
| Cath Non Aktif |

@Kategori-003
Scenario: Memastikan user tidak dapat cari raw kategori invalid
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuKategori" in navMenuMasterData
Then User verify titlePage in kategori
And User wait for 5 seconds 
And User input "<kategori>" into fieldInputSearch kategori
And User wait for 5 seconds 
Then User able to see "No Data" in kategori

Examples: 
| kategori                   |
| cath non aktif aktif aktif |
