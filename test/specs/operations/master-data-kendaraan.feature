@Kendaraan
Feature: Master Data - Kendaraan

@Kendaraan-001
Scenario: Memastikan user dapat masuk ke halaman kurir
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuKendaraan" in side menu page
Then User verify titlePage in kendaraan
And User wait for 5 seconds 

Examples: 
| a |
| b |

@Kendaraan-002
Scenario: Memastikan user dapat cari kendaraan
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuKendaraan" in side menu page
Then User verify titlePage in kendaraan
And User wait for 5 seconds 
And User input "<kendaraan>" into fieldInputSearch kukendaraan
Then User able to see "Mercy" in kendaraan page

Examples: 
| kendaraan |
| Mercy     |

@Kendaraan-003
Scenario: Memastikan user dapat cari kendaraan
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuKendaraan" in side menu page
Then User verify titlePage in kendaraan
And User wait for 5 seconds 
And User input "<kendaraan>" into fieldInputSearch kukendaraan
Then User able to see "No Data" in kendaraan page

Examples: 
| kendaraan        |
| Mercyuhuyyyy     |
