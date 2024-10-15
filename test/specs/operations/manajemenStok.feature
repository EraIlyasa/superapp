@Manajemen-Stok
Feature: Stock - Manajemen Stok

@MS-001
Scenario: Memastikan user dapat masuk kehalaman manajemen stok
When api user login
When open dashboard superapp
Given User click menu "navMenuStock" in side menu page
And User click submenu "menuManajemenStok" in side menu page
Then User verify titlePage in outgoing goods page
And User wait for 5 seconds 

Examples: 
| a |
| b |

@MS-002
Scenario: Memastikan user dapat cari produk di menu manajemen stok
When api user login
When open dashboard superapp
Given User click menu "navMenuStock" in side menu page
And User click submenu "menuManajemenStok" in side menu page
Then User verify titlePage in outgoing goods page
And User wait for 5 seconds 

And User click btnSearch in manajemen stock
And User input rak "<produk>" into fieldInputSearch manajemen stock
And User click btnCari in manajemen stock
And User able to see "Automated Testing hehe" in manajemen stock
And User wait for 5 seconds 

Examples: 
| produk                 |
| Automated Testing hehe |

@MS-003
Scenario: Memastikan user dapat cari produk invalid di menu manajemen stok
When api user login
When open dashboard superapp
Given User click menu "navMenuStock" in side menu page
And User click submenu "menuManajemenStok" in side menu page
Then User verify titlePage in outgoing goods page
And User wait for 5 seconds 

And User click btnSearch in manajemen stock
And User input rak "<produk>" into fieldInputSearch manajemen stock
And User click btnCari in manajemen stock
And User able to see "produk tidak akan ada" in manajemen stock
And User wait for 5 seconds 

Examples: 
| produk                 |
| produk tidak akan ada  |

