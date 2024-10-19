@Merek
Feature: Master Data - Merek

@Merek-001
Scenario: Memastikan user dapat masuk ke halaman merek
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuMerek" in navMenuMasterData
Then User verify titlePage in merek
And User wait for 5 seconds 

Examples: 
| a |
| b |

@Merek-002
Scenario: Memastikan user dapat cari merek 
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuMerek" in navMenuMasterData
Then User verify titlePage in merek
And User wait for 5 seconds 
And User input "<merek>" into fieldInputSearch merek
And User wait for 5 seconds 
Then User able to see "Mama Koko" in merek

Examples: 
| merek       |
| Mama Koko   |

@Merek-003
Scenario: Memastikan user tidak dapat cari merek invalid
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuMerek" in navMenuMasterData
Then User verify titlePage in merek
And User wait for 5 seconds 
And User input "<merek>" into fieldInputSearch merek
And User wait for 5 seconds 
Then User able to see "No Data" in merek

Examples: 
| merek             |
| Mama Koko lemon   |
