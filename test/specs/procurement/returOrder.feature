@ReturOrder
Feature: Retur Order

@RO-001
Scenario: Memastikan user dapat masuk ke halaman retur order
When api user login
When open dashboard superapp
Given User click menu "navMenuOrder" in side menu page
And User click "menuReturPenjualan" in navMenuOrder
Then User verify titlePage in retur order
And User wait for 5 seconds 

Examples: 
| a |
| b |

@RO-002
Scenario: Memastikan user dapat cari kode transaksi retur order
When api user login
When open dashboard superapp
Given User click menu "navMenuOrder" in side menu page
And User click "menuReturPenjualan" in navMenuOrder
Then User verify titlePage in retur order
And User wait for 5 seconds 

And User click btnFilter in retur order
And User click menu "navVendor" in filter modal retur order
And User click menu "navPeriode" in filter modal retur order
And User choose periode "30 Hari terakhir" in retur order
And User click button "btnTerapkanFilter" in filter modal retur order 
And User click btnSearch in retur order
And User input "<kodeRetur>" into fieldInputSearch retur order
And User click btnCari in retur order
Then User able to see "RTR2410-7" in retur order

Examples: 
| kodeRetur |
| RTR2410-7 |

@RO-003
Scenario: Memastikan user dapat cari kode transaksi retur order
When api user login
When open dashboard superapp
Given User click menu "navMenuOrder" in side menu page
And User click "menuReturPenjualan" in navMenuOrder
Then User verify titlePage in retur order
And User wait for 5 seconds 

And User click btnFilter in retur order
And User click menu "navVendor" in filter modal retur order
And User click menu "navPeriode" in filter modal retur order
And User choose periode "30 Hari terakhir" in retur order
And User click button "btnTerapkanFilter" in filter modal retur order 
And User click btnSearch in retur order
And User input "<kodeRetur>" into fieldInputSearch retur order
And User click btnCari in retur order
Then User able to see "No Data" in retur order

Examples: 
| kodeRetur     |
| RTR2410-71234 |
