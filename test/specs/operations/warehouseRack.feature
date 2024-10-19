@Warehouse-Rack
Feature: Master Data - Warehouserack

@OR-001
Scenario: Memastikan user dapat masuk kehalaman Warehouserack
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuWarehouseRack" in side menu page
Then User verify titlePage in outgoing goods page
And User wait for 5 seconds 

Examples: 
| rakName |
| bandung rakkk |

@OR-002
Scenario: Memastikan user dapat cari nama rak
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuWarehouseRack" in side menu page
Then User verify titlePage in outgoing goods page
And User wait for 5 seconds
And User click btnSearch in warehouserack
And User input rak "bandung rakkk" into fieldInputSearch warehouserack
And User click btnCari in warehouserack
And User click btnCari in warehouserack
Then User able to see "bandung rakkk" in warehouserack

Examples: 
| a |
| b |