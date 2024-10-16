@Kurir
Feature: Master Data - Kurir

@Kurir-001
Scenario: Memastikan user dapat masuk ke halaman kurir
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuKurir" in side menu page
Then User verify titlePage in kurir
And User wait for 5 seconds 

Examples: 
| a |
| b |

@Kurir-002
Scenario: Memastikan user dapat cari nama kurir 
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuKurir" in side menu page
Then User verify titlePage in kurir
And User wait for 5 seconds 
And User input "<kurir>" into fieldInputSearch kurir
Then User able to see "Kurir Spesial" in kurir page

Examples: 
| kurir         |
| Kurir Spesial |

@Kurir-003
Scenario: Memastikan user dapat cari nama kurir 
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuKurir" in side menu page
Then User verify titlePage in kurir
And User wait for 5 seconds 
And User input "<kurir>" into fieldInputSearch kurir
Then User able to see "No Data" in kurir page

Examples: 
| kurir              |
| Kurir Spesialberrr |
