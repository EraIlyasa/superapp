@SetoranTOP
Feature: Create-Setoran


@Setoran-TOP-001
Scenario: Memastikan user dapat masuk ke halaman setoran top
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoranTOPPage
And User wait for 5 seconds 

Examples: 
| a |
| b |

@Setoran-TOP-002
Scenario: Memastikan user dapat cari kode transaksi setoran top
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "setoranTOP" in navMenuFinance
Then User verify titlePage in setoranTOPPage
And User wait for 5 seconds 
And User click "tglSetoranFilter" filter setoranTOPPage
And User choose "Bulan Ini" in tglSetoran setoranTOPPage
And User input "<kodeTransaksi>" into fieldInputSearch setoranTOPPage
And User able to see "T-GSA241018-63" in setoranTOPPage

Examples: 
| kodeTransaksi  |
| T-GSA241018-63 |

@Setoran-TOP-003
Scenario: Memastikan user tidak dapat cari kode transaksi setoran top invalid 
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "setoranTOP" in navMenuFinance
Then User verify titlePage in setoranTOPPage
And User wait for 5 seconds 
And User click "tglSetoranFilter" filter setoranTOPPage
And User choose "Bulan Ini" in tglSetoran setoranTOPPage
And User input "<kodeTransaksi>" into fieldInputSearch setoranTOPPage
And User able to see "No Data" in setoranTOPPage

Examples: 
| kodeTransaksi       |
| T-GSA241018-631q234 |
