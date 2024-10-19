@Supplier
Feature: Master Data - Supplier

@Supplier-001
Scenario: Memastikan user dapat masuk ke halaman supplier
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuSupllier" in navMenuMasterData
Then User verify titlePage in merek
And User wait for 5 seconds 

Examples: 
| a |
| b |

@Supplier-002
Scenario: Memastikan user dapat cari supplier 
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuSupllier" in navMenuMasterData
Then User verify titlePage in supplier
And User wait for 5 seconds 
And User input "<supplier>" into fieldInputSearch supplier
And User wait for 5 seconds 
Then User able to see "Supplier RJ" in supplier

Examples: 
| supplier          |
| Supplier RJ       |

@Supplier-003
Scenario: Memastikan user tidak dapat cari supplier invalid
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click "menuSupllier" in navMenuMasterData
Then User verify titlePage in supplier
And User wait for 5 seconds 
And User input "<supplier>" into fieldInputSearch supplier
And User wait for 5 seconds 
Then User able to see "No Data" in supplier

Examples: 
| supplier               |
| Supplier RJ not found  |
