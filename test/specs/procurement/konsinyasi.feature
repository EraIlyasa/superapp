@Konsinyasi
Feature: Konsinyasi

@Konsinyasi-001
Scenario: Memastikan user dapat masuk ke halaman konsinyasi
When api user login
When open dashboard superapp
Given User click menu "navMenuOrder" in side menu page
And User click "menuKonsinyasi" in navMenuOrder
Then User verify titlePage in merek
And User wait for 5 seconds 

Examples: 
| a |
| b |

@Konsinyasi-002
Scenario: Memastikan user dapat cari konsinyasi 
When api user login
When open dashboard superapp
Given User click menu "navMenuOrder" in side menu page
And User click "menuKonsinyasi" in navMenuOrder
Then User verify titlePage in konsinyasi
And User wait for 5 seconds 

And User click btnFilter in konsinyasi page
And User click menu "navPeriode" in filter modal konsinyasi
And User choose periode "Bulan Ini"
And User click button "btnTerapkanFilter" in filter modal konsinyasi
And User wait for 5 seconds 
And User input "<kodeKonsinyasi>" into fieldInputSearch konsinyasi
Then User able to see "1729076243841" in konsinyasi

Examples: 
| kodeKonsinyasi |
| 1729076243841  |

@Konsinyasi-003
Scenario: Memastikan user tidak dapat cari konsinyasi invalid
When api user login
When open dashboard superapp
Given User click menu "navMenuOrder" in side menu page
And User click "menuKonsinyasi" in navMenuOrder
Then User verify titlePage in konsinyasi
And User wait for 5 seconds 

And User click btnFilter in konsinyasi page
And User click menu "navPeriode" in filter modal konsinyasi
And User choose periode "Bulan Ini"
And User click button "btnTerapkanFilter" in filter modal konsinyasi
And User wait for 5 seconds 
And User input "<kodeKonsinyasi>" into fieldInputSearch konsinyasi
Then User able to see "No Data" in konsinyasi

Examples: 
| kodeKonsinyasi        |
| 17dasd29076243841123  |
