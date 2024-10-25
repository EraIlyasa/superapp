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
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
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
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
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
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
And User wait for 5 seconds 
Given User click "btnBuatSetoranNew"
And User wait for 5 seconds
And User click "fieldTipeOrder" in setoran page
And User click "optTipeOrder0" in setoran page
And User click "fieldGudang" in setoran page
And User click "optGudang0" in setoran page
And User click "fieldInputNamaKurir" in setoran page
And User input "<namaKurir>" inhouse into "fieldInputNamaKurir"
And user attach file import CSV vendor
And User click "btnBuatSetoran" in setoran page
# And User click "btnSayaYakin" in setoran page
And User wait for 5 seconds
Then User able to see successfull message create setoran

Examples:
  | namaKurir |
  | feboi243  |

@Setoran-0007
Scenario Outline: Memastikan berhasil buat setoran tipe inhouse dengan data full cash (jadi transfer), full transfer (jadi cash) dan partial (no change) melalui import
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
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
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
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

@Setoran-0009
Scenario: Memastikan berhasil filter Tanggal Kirim
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
And User wait for 5 seconds 

And User click "tglSetoranFilter" filter setoran
And User choose "30 Hari Terakhir" in tglSetoran setoran

@Setoran-0010
Scenario: Memastikan berhasil filter Gudang
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
And User wait for 5 seconds 

And User click "tglSetoranFilter" filter setoran
And User choose "30 Hari Terakhir" in tglSetoran setoran
And User click "gudangFilter" filter setoran
And User click nav menu "Jenis Setoran" setoran modal
And User choose "Aloha-RTP" in gudangFilter setoran
Then User able to see {string} on list setoran

@Setoran-0011
Scenario: Memastikan berhasil filter Jenis Setoran
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
And User wait for 5 seconds 

And User click "tglSetoranFilter" filter setoran
And User choose "30 Hari Terakhir" in tglSetoran setoran
And User click "gudangFilter" filter setoran
And User click nav menu "Jenis Setoran" setoran modal
And User choose "Vendor" in jenisSetoranFilter setoran
And User click "Terapkan" filter modal setoran
Then User able to see "<jenisSetoran>" on list setoran

Examples:
| jenisSetoran |
| vendor       |

# @Setoran-0012
# Scenario: Memastikan berhasil filter Tipe PT
# When api user login
# When open dashboard superapp
# Given User click menu "navMenuFinance" in side menu page
# And User click "menuSetoran" in navMenuFinance
# Then User verify titlePage in setoran
# And User wait for 5 seconds 

# And User click "tglSetoranFilter" filter setoran
# And User choose "30 Hari Terakhir" in tglSetoran setoran
# And User click "gudangFilter" filter setoran
# And User click nav menu "Jenis Setoran" setoran modal
# And User choose "Vendor" in jenisSetoranFilter setoran
# And User click "Terapkan" filter modal setoran
# Then User able to see "<jenisSetoran>" on list setoran

# Examples:
# | jenisSetoran |
# | vendor       |

@Setoran-0013
Scenario: Memastikan berhasil filter Nama Pembuat Setoran
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
And User wait for 3 seconds 

And User click "tglSetoranFilter" filter setoran
And User choose "30 Hari Terakhir" in tglSetoran setoran
And User click "gudangFilter" filter setoran
And User click nav menu "Pembuat Setoran" setoran modal
And User input "<pic>" into searchPembuatSetoran filter modal setoran
And User click "Terapkan" filter modal setoran
Then User able to see "<picSetoran>" on list setoran

Examples:
| picSetoran     | pic       |
| Era Ilyasa     | erailyasa |

@Setoran-0014
Scenario: Memastikan tampil modal Detail Nominal Transaksi ketika klik detail nilai transaksi
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
And User wait for 3 seconds 

And User click "tglSetoranFilter" filter setoran
And User choose "30 Hari Terakhir" in tglSetoran setoran
And User click detail "Detail Nilai Transaksi" list setoran
Then User able to see modal detail nilai transaksi 

@Setoran-0015
Scenario: Memastikan tampil preview print bukti setor ketika klik button print bukti setoran
When api user login
When open dashboard superapp
Given User click menu "navMenuFinance" in side menu page
And User click "menuSetoran" in navMenuFinance
Then User verify titlePage in setoran
And User wait for 3 seconds 

And User click "tglSetoranFilter" filter setoran
And User choose "30 Hari Terakhir" in tglSetoran setoran
And User click detail "Detail Kode Setoran" list setoran
And User wait for 3 seconds 
And User click button bukti setoran in detail setoran
Then User able to see page print bukti setoran