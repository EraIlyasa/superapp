@RawMaterial
Feature: Master Data - Raw Material

@RM-001
Scenario: Memastikan user dapat masuk ke raw material
When api user login
When open dashboard superapp
Given User click menu "navMenuPurchasing" in side menu page
And User click "menuRawMaterial" in navMenuPurchasing
Then User verify titlePage in produk bundle
And User wait for 5 seconds 

Examples: 
| produkBundle     |
| Honey Bee Bundle |

@RM-002
Scenario: Memastikan user dapat cari raw material 
When api user login
When open dashboard superapp
Given User click menu "navMenuPurchasing" in side menu page
And User click "menuRawMaterial" in navMenuPurchasing
Then User verify titlePage in raw material
And User wait for 5 seconds 
# And User click btnSearch in raw material
And User input "<rawMaterial>" into fieldInputSearch raw material
And User click btnEnter in raw material
And User wait for 5 seconds 
Then User able to see "Automated Raw 2" in raw material

Examples: 
| rawMaterial     |
| Automated Raw 2 |

@RM-003
Scenario: Memastikan user tidak dapat cari raw material invalid
When api user login
When open dashboard superapp
Given User click menu "navMenuPurchasing" in side menu page
And User click "menuRawMaterial" in navMenuPurchasing
Then User verify titlePage in raw material
And User wait for 5 seconds 
# And User click btnSearch in raw material
And User input "<rawMaterial>" into fieldInputSearch raw material
And User click btnEnter in raw material
And User wait for 5 seconds 
Then User able to see "No Data" in raw material

Examples: 
| rawMaterial          |
| Automated Raw 2uhuyy |
