@PICVendor
Feature: Master Data - PIC Vendor

@PICV-001
Scenario: Memastikan user dapat masuk kehalaman pic vendor
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuPICVendor" in side menu page
Then User verify titlePage in pic vendor
And User wait for 5 seconds 

Examples: 
| a |
| b |

@PICV-002
Scenario: Memastikan user dapat cari pic vendor
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuPICVendor" in side menu page
Then User verify titlePage in pic vendor
And User wait for 5 seconds 
And User input "<pic>" into fieldInputSearch pic vendor
Then User able to see "SANGAR SURABAYA" in pic vendor page

Examples: 
| pic              |
| SANGAR SURABAYA  |

@PICV-003
Scenario: Memastikan user tidak dapat cari pic vendor invalid
When api user login
When open dashboard superapp
Given User click menu "navMenuMasterData" in side menu page
And User click submenu "menuPICVendor" in side menu page
Then User verify titlePage in pic vendor
And User wait for 5 seconds 
And User input "<pic>" into fieldInputSearch pic vendor
Then User able to see "No Data" in pic vendor page

Examples: 
| pic                   |
| SANGAR SURABAYAAAAAA  |
