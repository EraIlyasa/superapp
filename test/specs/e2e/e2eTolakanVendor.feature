@e2eTolakanVendor
Feature: E2E - Tolakan Vendor

# @e2eTolakanVendor-001
# Scenario: Memastikan berhasil incoming tolakan vendor dengan item reward dari 2 reward
# When api user login
# When open dashboard superapp
# # Given User click menu "navMenuMarketing" in side menu page
# # And User click "menuRewardV4" in navMenuMarketing
# # And User wait for 5 seconds

# # Given User click "btnBuatRewardNew" in menu reward
# # And User wait for 5 seconds
# # And User click "fieldInputNamaReward" in create reward page
# # And User input "reward01" into "fieldInputNamaReward"
# # And User click "fieldTipeReward" in create reward page
# # And User click "optTipeReward0"
# # And User click "fieldInputMinimalBelanja" in create reward page
# # And User input "<minBelanja>" into "fieldInputMinimalBelanja"
# # And User click "fieldTipeUser" in create reward page
# # And User click "optTipeUser0"
# # And User click "fieldKondisi" in create reward page
# # And User click "optKondisi0"
# # And User click "fieldGudang" in create reward page
# # And User click "optGudang"
# # And User click "fieldArea" in create reward page
# # And User click "optArea0"
# # And User click "fieldInputKuotaUser" in create reward page
# # # And User input "<kuotaUser>" into "fieldInputKuotaUser"
# # And User click "fieldInputStartDate" in create reward page
# # And User input start date into "fieldInputStartDate"
# # And User click "fieldInputEndDate" in create reward page
# # And User input end date into "fieldInputEndDate"
# # And User wait for 5 seconds
# # And User click "btnTambahDariInven" in create reward page
# # And User click "fieldNamaProduk" in create reward page
# # Given User input "optNamaProduk" into "fieldNamaProduk"
# # And User click "fieldUnit" in create reward page
# # Given User input "optUnit" into "fieldUnit"
# # Then User able to see "totalStokInventory" beside fieldUnit
# # And User click "fieldInputKuotaReward" in create reward page
# # And User input "reward" into "fieldInputKuotaReward"
# # And User click "fieldInputQtyReward" in create reward page
# # And User input "reward" into "fieldInputQtyReward"
# # And User click "actionV" to save the product
# # And User wait for 5 seconds
# # Given User click "btnSimpan" to create new reward
# # Then User able to see success messasge verification pop up modal

# # And User click detailReward in reward page 
# # And User click btnPublish in detail reward 
# # And User click btnSimpanModal in detal reward 
# # And User wait for 5 seconds
# # Then User able to see status reward "Published"

# # Given User click "btnBuatRewardNew" in menu reward
# # And User wait for 5 seconds
# # And User click "fieldInputNamaReward" in create reward page
# # And User input "reward02" into "fieldInputNamaReward"
# # And User click "fieldTipeReward" in create reward page
# # And User click "optTipeReward0"
# # And User click "fieldInputMinimalBelanja" in create reward page
# # And User input "<minBelanja>" into "fieldInputMinimalBelanja"
# # And User click "fieldTipeUser" in create reward page
# # And User click "optTipeUser0"
# # And User click "fieldKondisi" in create reward page
# # And User click "optKondisi0"
# # And User click "fieldGudang" in create reward page
# # And User click "optGudang"
# # And User click "fieldArea" in create reward page
# # And User click "optArea0"
# # And User click "fieldInputKuotaUser" in create reward page
# # And User input "<kuotaUser>" into "fieldInputKuotaUser"
# # # And User click "fieldInputStartDate" in create reward page
# # And User input start date into "fieldInputStartDate"
# # And User click "fieldInputEndDate" in create reward page
# # And User input end date into "fieldInputEndDate"
# # And User wait for 5 seconds
# # And User click "btnTambahDariInven" in create reward page
# # And User click "fieldNamaProduk" in create reward page
# # Given User input "optNamaProduk" into "fieldNamaProduk"
# # And User click "fieldUnit" in create reward page
# # Given User input "optUnit" into "fieldUnit"
# # Then User able to see "totalStokInventory" beside fieldUnit
# # And User click "fieldInputKuotaReward" in create reward page
# # And User input "reward" into "fieldInputKuotaReward"
# # And User click "fieldInputQtyReward" in create reward page
# # And User input "reward" into "fieldInputQtyReward"
# # And User click "actionV" to save the product
# # And User wait for 5 seconds
# # Given User click "btnSimpan" to create new reward
# # Then User able to see success messasge verification pop up modal

# # And User click detailReward in reward page 
# # And User click btnPublish in detail reward 
# # And User click btnSimpanModal in detal reward 
# # And User wait for 5 seconds
# # Then User able to see status reward "Published"

# Given User click menu "navMenuOrder" in side menu page
# And User click "menuPenjualan" in navMenuOrder
# And User wait for 5 seconds
# And User click button add
# And User create order by "marketplace" in order page
# And User click fieldAgenPemesan in order page
# And User input "<agenPemesanan>" in filedAgenPemesanan order page
# And User click alamatKirim in order page
# And User click "<alamatKirim>" in alamatKirim order page
# # And User click metodePembayaran in order page 
# # And User click metodePembayaran in order page 
# # And User click tipePT in order page 
# # And User input "GSA - Aloha-RTP" in tipePT order page
# And User click superagen in order page
# And User click optSuperagen in superagen order page
# # Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
# When User click btnTambahProduk in order page
# # And User click btnTambahProdukModal in order modal 
# And User input "Automated Stock" on namaProduk modal order page
# And User click satuan modal on order page 
# And User choose "Bag" on satuan modal order page
# # And I select quantity "1" 
# And User input "12" on quantity modal order page 
# And User click "btnSaveModall1" on modal order page 
# And User click btnSaveOrderModal on modal order page 
# And User click btnSubmit in order modal page 
# And User wait for 10 seconds
# And User get invoice code order
# And User click detail penjualan in order penjualan
# And User get order id

# Given User get dashboard url

# Given User click menu "logistic" in side menu page
# And User click "menuOutgoingGoodsV4" in logistic
# And User wait for 5 seconds
# Then User verify "titlePageV4" in outgoing goods page
# And User click "tabTanggalKirim" in outgoing goods
# And User click optFilter "Hari ini" modal in outgoing goods
# # And User click btnTerapkan in modal filter outgoing goods
# And User input invoice into "inputKodeTransaksi" outgoing goods page
# And User wait for 5 seconds
# And User click btnDetailOutgoing on outgoing goods
# And User input invoice into "inputKodeTransaksiDetail" outgoing goods page
# And User wait for 5 seconds
# And User click checkbox v4 outgoing goods

# And User click "btnGantiVendor" outgoing goods
# And User click "fieldVendorTo" in btnGantiVendor
# And User input "INHOUSE ALL AREA" in btnGantiVendor
# And User click "fieldAlasan" in btnGantiVendor
# And User input "Order jumlah besar" in btnGantiVendor
# And User click btnGanti in btnGantiVendor
# And User wait for 5 seconds
# And User click "menuOutgoingGoodsV4" in logistic
# And User wait for 5 seconds
# And User click "tabTanggalKirim" in outgoing goods
# And User click optFilter "Hari ini" modal in outgoing goods

# And User input invoice into "inputKodeTransaksi" outgoing goods page
# And User wait for 5 seconds
# And User click btnDetailOutgoing on outgoing goods
# And User input invoice into "inputKodeTransaksiDetail" outgoing goods page
# And User wait for 5 seconds
# And User click checkbox v4 outgoing goods

# And User click "btnAssignKurir" outgoing goods
# And User click "fieldInputDriverV4" in btnAssignKurir
# And User input "Kurir NF" in btnAssignKurir
# And User click "fieldInputHelperV4" in btnAssignKurir
# And User input "udin" in btnAssignKurir
# And User click "fieldInputPlatV4" in btnAssignKurir
# And User input "S9430NG" in btnAssignKurir
# And User click btnAssignModal in btnAssignKurir
# Then User able to see "successAlert" message in detail outgoing goods
# And User click checkbox v4 outgoing goods
# And User click "btnSiapDikirimV4" outgoing goods
# And User click "Ubah Status" in modal detail outgoing
# Then User able to see "successAlert" message in detail outgoing goods
# And User click checkbox v4 outgoing goods
# And User click "btnDikirimV4" outgoing goods
# And User click "Ubah Status" in modal detail outgoing
# Then User able to see "successAlert" message in detail outgoing goods

# When api user login
# And User get api order detail

# When api courier user login
# And api courier user kirim 1x order 1 product ditolak semua customer

# # Given User get dashboard url

# When api user login
# When open dashboard superapp
# Given User click menu "logistic" in side menu page
# And User click "menuIncomingGoods" in logistic
# And User wait for 5 seconds
# Then User verify titlePage in incoming goods
# When User click tab "tabTolakan" in incoming goods



# Examples: 
# | radioBTn                 | value  | value2 | message1                              | agenPemesanan | alamatKirim | minBelanja | kuotaUser | 
# | Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | AsrulTesting  | Warung      | 1000000    | 1         | 

@e2eTolakanVendor-002
Scenario: Memastikan berhasil incoming tolakan vendor dengan item reward dari 2 reward
When api user login
When open dashboard superapp
# Given User click menu "navMenuMarketing" in side menu page
# And User click "menuRewardV4" in navMenuMarketing
# And User wait for 5 seconds

# Given User click "btnBuatRewardNew" in menu reward
# And User wait for 5 seconds
# And User click "fieldInputNamaReward" in create reward page
# And User input "reward01" into "fieldInputNamaReward"
# And User click "fieldTipeReward" in create reward page
# And User click "optTipeReward0"
# And User click "fieldInputMinimalBelanja" in create reward page
# And User input "<minBelanja>" into "fieldInputMinimalBelanja"
# And User click "fieldTipeUser" in create reward page
# And User click "optTipeUser0"
# And User click "fieldKondisi" in create reward page
# And User click "optKondisi0"
# And User click "fieldGudang" in create reward page
# And User click "optGudang"
# And User click "fieldArea" in create reward page
# And User click "optArea0"
# And User click "fieldInputKuotaUser" in create reward page
# # And User input "<kuotaUser>" into "fieldInputKuotaUser"
# And User click "fieldInputStartDate" in create reward page
# And User input start date into "fieldInputStartDate"
# And User click "fieldInputEndDate" in create reward page
# And User input end date into "fieldInputEndDate"
# And User wait for 5 seconds
# And User click "btnTambahDariInven" in create reward page
# And User click "fieldNamaProduk" in create reward page
# Given User input "optNamaProduk" into "fieldNamaProduk"
# And User click "fieldUnit" in create reward page
# Given User input "optUnit" into "fieldUnit"
# Then User able to see "totalStokInventory" beside fieldUnit
# And User click "fieldInputKuotaReward" in create reward page
# And User input "reward" into "fieldInputKuotaReward"
# And User click "fieldInputQtyReward" in create reward page
# And User input "reward" into "fieldInputQtyReward"
# And User click "actionV" to save the product
# And User wait for 5 seconds
# Given User click "btnSimpan" to create new reward
# Then User able to see success messasge verification pop up modal

# And User click detailReward in reward page 
# And User click btnPublish in detail reward 
# And User click btnSimpanModal in detal reward 
# And User wait for 5 seconds
# Then User able to see status reward "Published"

# Given User click "btnBuatRewardNew" in menu reward
# And User wait for 5 seconds
# And User click "fieldInputNamaReward" in create reward page
# And User input "reward02" into "fieldInputNamaReward"
# And User click "fieldTipeReward" in create reward page
# And User click "optTipeReward0"
# And User click "fieldInputMinimalBelanja" in create reward page
# And User input "<minBelanja>" into "fieldInputMinimalBelanja"
# And User click "fieldTipeUser" in create reward page
# And User click "optTipeUser0"
# And User click "fieldKondisi" in create reward page
# And User click "optKondisi0"
# And User click "fieldGudang" in create reward page
# And User click "optGudang"
# And User click "fieldArea" in create reward page
# And User click "optArea0"
# And User click "fieldInputKuotaUser" in create reward page
# And User input "<kuotaUser>" into "fieldInputKuotaUser"
# # And User click "fieldInputStartDate" in create reward page
# And User input start date into "fieldInputStartDate"
# And User click "fieldInputEndDate" in create reward page
# And User input end date into "fieldInputEndDate"
# And User wait for 5 seconds
# And User click "btnTambahDariInven" in create reward page
# And User click "fieldNamaProduk" in create reward page
# Given User input "optNamaProduk" into "fieldNamaProduk"
# And User click "fieldUnit" in create reward page
# Given User input "optUnit" into "fieldUnit"
# Then User able to see "totalStokInventory" beside fieldUnit
# And User click "fieldInputKuotaReward" in create reward page
# And User input "reward" into "fieldInputKuotaReward"
# And User click "fieldInputQtyReward" in create reward page
# And User input "reward" into "fieldInputQtyReward"
# And User click "actionV" to save the product
# And User wait for 5 seconds
# Given User click "btnSimpan" to create new reward
# Then User able to see success messasge verification pop up modal

# And User click detailReward in reward page 
# And User click btnPublish in detail reward 
# And User click btnSimpanModal in detal reward 
# And User wait for 5 seconds
# Then User able to see status reward "Published"

Given User click menu "navMenuOrder" in side menu page
And User click "menuPenjualan" in navMenuOrder
And User wait for 5 seconds
And User click button add
And User create order by "marketplace" in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
# And User click metodePembayaran in order page 
# And User click metodePembayaran in order page 
# And User click tipePT in order page 
# And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
# Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page
# And User click btnTambahProdukModal in order modal 
And User input "Automated Stock" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
# And I select quantity "1" 
And User input "12" on quantity modal order page 
And User click "btnSaveModall1" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
And User wait for 10 seconds
And User get invoice code order
And User click detail penjualan in order penjualan
And User get order id

Given User get dashboard url

Given User click menu "logistic" in side menu page
And User click "newOutgoingGoods" in logistic
And User wait for 5 seconds
Then User verify "titlePageV3" in outgoing goods page

And User clik btnMore filter in outgoin goods page
And User click nav "Tgl Kirim" in filter modal
And User click optFilter "Hari ini V3" modal in outgoing goods
And User click btnTerapkan in modal filter outgoing goods
And User input invoice into inputKodeInvoice outgoing goods page
And User click cari kode invoice
And User wait for 5 seconds

And User click btnSeeDetails in outgoing goods
And User input invoice into inputKodeInvoice outgoing goods page
And User click cari kode invoice
And User click checkbox v3 outgoing goods


## this is for v4
# And User click "tabTanggalKirim" in outgoing goods
# And User click optFilter "Hari ini" modal in outgoing goods
# # And User click btnTerapkan in modal filter outgoing goods
# And User input invoice into inputKodeInvoice outgoing goods page
# # And User input invoice code into "inputKodeTransaksi" outgoing goods page
# And User click cariKodeInvoice in outgoing goods
# And User wait for 5 seconds
# And User click btnDetailOutgoing on outgoing goods
# And User input invoice into "inputKodeTransaksiDetail" outgoing goods page
# And User wait for 5 seconds
## this is for v4


And User click "btnGantiVendor" outgoing goods
And User click "fieldVendorTo" in btnGantiVendor
And User input "INHOUSE ALL AREA" in btnGantiVendor
And User click "fieldAlasan" in btnGantiVendor
And User input "Order jumlah besar" in btnGantiVendor
And User click btnGanti in btnGantiVendor
And User wait for 5 seconds

##################################
And I click outgoing goods v3
# Given User get dashboard url
# Given User click menu "logistic" in side menu page
# And User click "newOutgoingGoods" in logistic
And User wait for 5 seconds
Then User verify "titlePageV3" in outgoing goods page

And User clik btnMore filter in outgoin goods page
And User click nav "Tgl Kirim" in filter modal
And User click optFilter "Hari ini V3" modal in outgoing goods
And User click btnTerapkan in modal filter outgoing goods
And User input invoice into inputKodeInvoice outgoing goods page
And User click cari kode invoice
And User wait for 5 seconds

And User click btnSeeDetails in outgoing goods
And User input invoice into inputKodeInvoice outgoing goods page
And User click cari kode invoice

And User click checkbox v3 outgoing goods
And User click "btnAssignKurir" outgoing goods
And User click "fieldInputDriver" in btnAssignKurir
And User input "Kurir NF" in btnAssignKurir
And User click "fieldHelper" in btnAssignKurir
And User input "udin" in btnAssignKurir
And User click "fieldInputPlat" in btnAssignKurir
And User input "S9430NG" in btnAssignKurir
And I click assign
Then User able to see "successAlertV3" message in detail outgoing goods

# And User click checkbox v3 outgoing goods
# And User click "btnSiapDikirim" outgoing goods
# And User click "Ubah Status V3" in modal detail outgoing
# Then User able to see "successAlertV3" message in detail outgoing goods


############## v4
Given User get dashboard url
Given User click menu "logistic" in side menu page
And User click "menuOutgoingGoodsV4" in logistic
And User wait for 5 seconds
Then User verify "titlePageV4" in outgoing goods page
And User click "tabTanggalKirim" in outgoing goods
And User click optFilter "Hari ini" modal in outgoing goods
# And User click btnTerapkan in modal filter outgoing goods
And User input invoice into "inputKodeTransaksi" outgoing goods page
And User wait for 5 seconds
And User click btnDetailOutgoing on outgoing goods
And User input invoice into "inputKodeTransaksiDetail" outgoing goods page
And User wait for 5 seconds

And User click checkbox v4 outgoing goods
And User click "btnSiapDikirimV4" outgoing goods
And User click "Ubah Status" in modal detail outgoing
Then User able to see "successAlert" message in detail outgoing goods
And User click checkbox v4 outgoing goods
And User click "btnDikirimV4" outgoing goods
And User click "Ubah Status" in modal detail outgoing
Then User able to see "successAlert" message in detail outgoing goods

# And User click checkbox v3 outgoing goods
# And User click "btnDikirim" outgoing goods
# And User click "Ubah Status V3" in modal detail outgoing
# Then User able to see "successAlertV3" message in detail outgoing goods

# When api user login
And User get api order detail

When api courier user login
And api courier user kirim 1x order 1 product ditolak semua customer

Given User get dashboard url

Given User click menu "logistic" in side menu page
And User click "menuIncomingGoods" in logistic
And User wait for 5 seconds
Then User verify titlePage in incoming goods
When User click tab "Tolakan Vendor" in incoming goods
When User search invoice code in incoming goods
And User get qty tolakan pending
And User close daftar tolakan modal outgoing
And User click input tolakan pending
And User input tolakan diterima
And User click button modal "submit tolakan" in tolakan pending
And User wait for 5 seconds
And User click button "Sudah Benar" in tab
Then User able to see message verification in incoming goods

Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan | alamatKirim | minBelanja | kuotaUser | 
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | mas mas qa    | Warung      | 1000000    | 1         | 


