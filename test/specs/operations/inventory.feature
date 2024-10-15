@Inventory
Feature: Stock - Inventory

@Inventory-001
Scenario: Memastikan user dapat masuk kehalaman Warehouserack
When api user login
When open dashboard superapp
Given User click menu "navMenuStock" in side menu page
And User click submenu "menuInventory" in side menu page
Then User verify titlePage in outgoing goods page
And User wait for 5 seconds 

Examples: 
| a |
| b |

@Inventory-002
Scenario: Memastikan user dapat cari produk pada inventory
When api user login
When open dashboard superapp
Given User click menu "navMenuStock" in side menu page
And User click submenu "menuInventory" in side menu page
Then User verify titlePage in outgoing goods page
And User wait for 5 seconds 

And User click btnSearch in inventory
And User input rak "<produk>" into fieldInputSearch inventory
And User click btnCari in inventory
And User able to see "Automated Testing hehe" in 
And And User wait for 5 seconds 

Examples: 
| produk                 |
| Automated Testing hehe |

@Inventory-003
Scenario: Memastikan user tidak dapat cari produk invalid pada inventory
When api user login
When open dashboard superapp
Given User click menu "navMenuStock" in side menu page
And User click submenu "menuInventory" in side menu page
Then User verify titlePage in outgoing goods page
And User wait for 5 seconds 

And User click btnSearch in inventory
And User input rak "<produk>" into fieldInputSearch inventory
And User click btnCari in inventory
And User able to see "Automated Testing hehe" in inventory
And User wait for 5 seconds 

Examples: 
| produk                 |
| produk tidak akan ada  |
