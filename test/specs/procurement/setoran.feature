@Setoran
Feature: Create-Setoran


@Setoran-0001
Scenario: Memastikan user dapat masuk ke halaman setoran
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
And User wait for 5 seconds 

Examples: 
| a |
| b |

@Setoran-0002
Scenario: Memastikan user dapat cari kode setoran
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
And User wait for 5 seconds 

And User click "tglSetoranFilter" filter setoran
And User choose "30 Hari Terakhir" in tglSetoran setoran
And User input "<kodeSetoran>" into fieldInputSearch setoran
Then User able to see "STR241017-1" in setoran

Examples: 
| kodeSetoran |
| STR241017-1 |

@Setoran-0003
Scenario: Memastikan user tidak dapat cari kode setoran invalid
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
And User wait for 5 seconds 

And User click "tglSetoranFilter" filter setoran
And User choose "30 Hari Terakhir" in tglSetoran setoran
And User input "<kodeSetoran>" into fieldInputSearch setoran
Then User able to see "Nod Data" in setoran

Examples: 
| kodeSetoran      |
| STR241017-1asd23 |

@Setoran-0004
Scenario Outline: Memastikan berhasil buat setoran tipe inhouse tanpa merubah apapun (full cash, full transfer dan partial)
Given I send login url
When I login with credential
Then I see usernameDisplay
When User click "navMenuFinance" in global page
When User click "menuSetoran"
And User wait for 5 seconds
Given User click "btnBuatSetoranNew"
And User wait for 5 seconds
And User click "fieldTipeOrder" in setoran page
And User click "optTipeOrder0" in setoran page
And User click "fieldGudang" in setoran page
And User click "optGudang0" in setoran page
And User click "fieldInputNamaKurir" in setoran page
And User input "<namaKurir>" inhouse into "fieldInputNamaKurir"
And User wait for 5 seconds
And User click "btnBuatSetoran" in setoran page
# And User click "btnSayaYakin" in setoran page
And User wait for 5 seconds
Then User able to see successfull message create setoran

Examples:
  | namaKurir | cash    |
  | feboi243  | 744.000 |

@Setoran-0005
Scenario Outline: Memastikan berhasil buat setoran tipe inhouse dengan data full cash (jadi transfer), full transfer (jadi cash dengan dilebihkan) dan partial (no change) melalui konfirmasi setoran
Given I send login url
When I login with credential
Then I see usernameDisplay
When User click "navMenuFinance" in global page
When User click "menuSetoran"
And User wait for 5 seconds
Given User click "btnBuatSetoranNew"
And User wait for 5 seconds
And User click "fieldTipeOrder" in setoran page
And User click "optTipeOrder0" in setoran page
And User click "fieldGudang" in setoran page
And User click "optGudang0" in setoran page
And User click "fieldInputNamaKurir" in setoran page
And User input "<namaKurir>" inhouse into "fieldInputNamaKurir"
And User wait for 5 seconds
And User click "aksiKonfirmasi0" in setoran page
And User click "fieldInputBayarCash" in modal konfirmasi setoran
And User input "<cash>" into "fieldInputBayarCash"
And User upload image to "uploadImage1" in modal konfirmasi button
And User click "fieldInputBuktiTF1" in modal konfirmasi button
# And User upload image to "uploadImage1" in modal konfirmasi button
# And User upload image to "uploadImage1" in modal konfirmasi button
And User input "<cash>" into "fieldInputBuktiTF1"
And User click "btnSimpanModal" in modal konfirmasi button
And User wait for 5 seconds
And User delete "hapusRow1" in setoran page
# And User delete "hapusRow2" in setoran page
And User click "btnBuatSetoran" in setoran page
# And User click "btnSayaYakin" in setoran page
And User wait for 5 seconds

Examples:
  | namaKurir | cash    |
  | feboi243  | 744.000 |

@Setoran-0006
Scenario Outline: Memastikan berhasil buat setoran tipe inhouse tanpa merubah apapun (full cash, full transfer dan partial)
Given I send login url
When I login with credential
Then I see usernameDisplay
When User click "navMenuFinance" in global page
When User click "menuSetoran"
And User wait for 5 seconds
Given User click "btnBuatSetoranNew"
And User wait for 5 seconds
And User click "fieldTipeOrder" in setoran page
And User click "optTipeOrder0" in setoran page
And User click "fieldGudang" in setoran page
And User click "optGudang0" in setoran page
And User click "fieldInputNamaKurir" in setoran page
And User input "<namaKurir>" inhouse into "fieldInputNamaKurir"
And user attach file import CSV
And User click "btnBuatSetoran" in setoran page
# And User click "btnSayaYakin" in setoran page
And User wait for 5 seconds
Then User able to see successfull message create setoran

Examples:
  | namaKurir |
  | feboi243  |

@Setoran-0007
Scenario Outline: Memastikan berhasil buat setoran tipe inhouse dengan data full cash (jadi transfer), full transfer (jadi cash) dan partial (no change) melalui import
Given I send login url
When I login with credential
Then I see usernameDisplay
When User click "navMenuFinance" in global page
When User click "menuSetoran"
And User wait for 5 seconds
Given User click "btnBuatSetoranNew"
And User wait for 5 seconds
And User click "fieldTipeOrder" in setoran page
And User click "optTipeOrder0" in setoran page
And User click "fieldGudang" in setoran page
And User click "optGudang0" in setoran page
And User click "fieldInputNamaKurir" in setoran page
And User input "<namaKurir>" inhouse into "fieldInputNamaKurir"
And User attach file import CSV inhouse
And User wait for 5 seconds
And User click "aksiKonfirmasi0" in setoran page
And User delete nominal inside "fieldInputBayarCash"
And User upload image to "uploadImage1" in modal konfirmasi button
And User click "fieldInputBuktiTF1" in modal konfirmasi button
And User input "<cash1>" into "fieldInputBuktiTF1"
And User click "btnSimpanModal" in modal konfirmasi button
And User wait for 5 seconds
And User click "aksiKonfirmasi1" in setoran page
And User click "fieldInputBayarCash" in modal konfirmasi setoran
And User input "<cash2>" into "fieldInputBayarCash"
And User click "btnSimpanModal" in modal konfirmasi button
And User wait for 5 seconds
And User click "btnBuatSetoran" in setoran page
# And User click "btnSayaYakin" in setoran page
And User wait for 5 seconds
Then User able to see successfull message create setoran

Examples:
  | namaKurir | cash1  | cash2  |
  | feboi243  | 900000 | 700000 |

@Setoran-0008
Scenario Outline: Memastikan berhasil buat setoran tipe vendor tanpa merubah apapun (full cash, full transfer dan partial)
Given I send login url
When I login with credential
Then I see usernameDisplay
When User click "navMenuFinance" in global page
When User click "menuSetoran"
And User wait for 5 seconds
Given User click "btnBuatSetoranNew"
And User wait for 5 seconds
And User click "fieldTipeOrder" in setoran page
And User click "optTipeOrder1" in setoran page
And User click "fieldGudang" in setoran page
And User click "optGudang0" in setoran page
And User click "fieldInputNamaKurir" in setoran page
And User input "<namaKurir>" vendor into "fieldInputNamaKurir"
And User attach file import CSV vendor
And User wait for 5 seconds
And User click "btnBuatSetoran" in setoran page
# And User click "btnSayaYakin" in setoran page
And User wait for 5 seconds
Then User able to see successfull message create setoran

Examples:
  | namaKurir       |
  | Sangar Surabaya |
