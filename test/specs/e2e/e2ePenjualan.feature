@E2EPenjualanRTP
Feature: Create-e2e-penjualan-minimum-order

@e2e-penjualan-rtp-001
Scenario Outline: Memastikan tampil validasi minimum order ketika tidak memenuhi minimum order dengan format 'Pesanan kurang dari minimum order sebesar Rp xxx Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan.' (Create - Direct (RTP) -> Non Lifestyle not fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page

And User click btnTambahProdukModal in order modal 
And User input "Supercow" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Karton" on satuan modal order page
# And I select quantity "1" 
And User input "1" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see "<message2>" verification create order
And User wait for 5 seconds

Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan | alamatKirim | message2                                                                                                                                  |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | AsrulTesting  | Warung      | 3 INVALID_ARGUMENT: Pesanan kurang dari minimum order sebesar Rp 500000 Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan. |

@e2e-penjualan-rtp-002
Scenario Outline: Memastikan tampil validasi minimum order ketika tidak memenuhi minimum order dengan format 'Pesanan kurang dari minimum order sebesar Rp xxx Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan.' (Create - Direct (RTP) -> Lifestyle not fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page
And User click btnTambahProdukModal in order modal 

And User input "Testing RTP Hikmah 1" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
# And I select quantity "1" 
And User input "1" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see "<message2>" verification create order
And User wait for 5 seconds

Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan | alamatKirim | message2                                                                                                                                 |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | AsrulTesting  | Warung      | 3 INVALID_ARGUMENT: Pesanan kurang dari minimum order sebesar Rp 500000 Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan. |

@e2e-penjualan-rtp-003
Scenario Outline: Memastikan tampil validasi minimum order ketika tidak memenuhi minimum order dengan format 'Pesanan kurang dari minimum order sebesar Rp xxx Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan.' (Create - Direct (RTP) -> Lifestyle + Non Lifestyle not fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page

And User click btnTambahProdukModal in order modal 
And User input "Supercow" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Karton" on satuan modal order page
# And I select quantity "1" 
And User input "1" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnTambahProdukModal in order modal 
And User input "Testing RTP Hikmah 2" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
# And I select quantity "1" 
And User input "1" on quantity modal2 order page 
And User click "btnSaveModal1" on modal order page 

And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see "<message2>" verification create order
And User wait for 5 seconds

Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan | alamatKirim | produk   | message2                                                                                                                                  |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | AsrulTesting  | Warung      | Supercow | 3 INVALID_ARGUMENT: Pesanan kurang dari minimum order sebesar Rp 500000 Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan. |


@e2e-penjualan-rtp-004
Scenario Outline: Memastikan tidak tampil validasi minimum order ketika memenuhi minimum order (Create - Direct (RTP) -> Lifestyle fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page
And User click btnTambahProdukModal in order modal 

And User input "Testing RTP Hikmah 1" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
# And I select quantity "1" 
And User input "3" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds

Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan | alamatKirim | message2               |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | AsrulTesting  | Warung      | Data berhasil disimpan |

@e2e-penjualan-rtp-005
Scenario Outline: Memastikan tidak tampil validasi minimum order ketika memenuhi minimum order (Create - Direct (RTP) -> Non Lifestyle fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page
And User click btnTambahProdukModal in order modal 

And User input "Supercow" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
# And I select quantity "1" 
And User input "3" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds

Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan | alamatKirim | message2               |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | AsrulTesting  | Warung      | Data berhasil disimpan |

@e2e-penjualan-rtp-006
Scenario Outline: Memastikan tidak tampil validasi minimum order ketika memenuhi minimum order (Create - Direct (RTP) -> Non Lifestyle + Lifestyle fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page

And User click btnTambahProdukModal in order modal 
And User input "RTP-ingredients" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
# And I select quantity "1" 
And User input "5" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnTambahProdukModal in order modal 
And User input "Testing RTP Hikmah 2" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal2 order page
# And I select quantity "1" 
And User input "3" on quantity modal2 order page 
And User click "btnSaveModal1" on modal order page 

And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds

Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan        | alamatKirim | message2               |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | test dua ratus satu  | Warung      | Data berhasil disimpan |

@e2e-penjualan-rtp-007
Scenario Outline: Memastikan tampil validasi minimum order ketika tidak memenuhi minimum order dengan format 'Pesanan kurang dari minimum order sebesar Rp xxx Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan.' (Edit - Direct (RTP) -> Non Lifestyle not fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page

And User click btnTambahProdukModal in order modal 
And User input "RTP-ingredients" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
And User input "5" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 

And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds
And User click btnMoreFilter in order list
And User click optGudangAlohaRTP on gudang section filter
And User click btnTerapkanFilter in more filter modal
And I get kode transaksi
And I click kode transaksi
And User click btnEditPenjualan in detail order page

Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnEditList in detail order page
And User click btnUbahModal in order modal page
And User change input decrease "5" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see "<message2>" verification create order
And User wait for 5 seconds


Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan        | alamatKirim | message2                                                                                                                                 |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | test dua ratus satu  | Warung      | 3 INVALID_ARGUMENT: Pesanan kurang dari minimum order sebesar Rp 500000 Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan. |

@e2e-penjualan-rtp-008
Scenario Outline: Memastikan tampil validasi minimum order ketika tidak memenuhi minimum order dengan format 'Pesanan kurang dari minimum order sebesar Rp xxx Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan.' (Edit - Direct (RTP) -> Lifestyle not fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page

And User click btnTambahProdukModal in order modal 
And User input "Testing RTP Hikmah 1" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
And User input "5" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 

And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds
And User click btnMoreFilter in order list
And User click optGudangAlohaRTP on gudang section filter
And User click btnTerapkanFilter in more filter modal
And I get kode transaksi
And I click kode transaksi
And User click btnEditPenjualan in detail order page

Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnEditList in detail order page
And User click btnUbahModal in order modal page
And User change input decrease "1" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see "<message2>" verification create order
And User wait for 5 seconds


Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan        | alamatKirim | message2                                                                                                                                 |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | test dua ratus satu  | Warung      | 3 INVALID_ARGUMENT: Pesanan kurang dari minimum order sebesar Rp 500000 Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan. |

@e2e-penjualan-rtp-009
Scenario Outline: Memastikan tampil validasi minimum order ketika tidak memenuhi minimum order dengan format 'Pesanan kurang dari minimum order sebesar Rp xxx Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan.' (Edit - Direct (RTP) -> Lifestyle + Non Lifestyle not fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page

And User click btnTambahProdukModal in order modal 
And User input "RTP-ingredients" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
# And I select quantity "1" 
And User input "5" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnTambahProdukModal in order modal 
And User input "Testing RTP Hikmah 2" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal2 order page
# And I select quantity "1" 
And User input "1" on quantity modal2 order page 
And User click "btnSaveModal1" on modal order page 

And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds
And User click btnMoreFilter in order list
And User click optGudangAlohaRTP on gudang section filter
And User click btnTerapkanFilter in more filter modal
And I get kode transaksi
And I click kode transaksi
And User click btnEditPenjualan in detail order page

Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnEditList in detail order page
And User click btnUbahModal in order modal page
And User change input decrease "1" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see "<message2>" verification create order
And User wait for 5 seconds


Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan        | alamatKirim | produk   | message2                                                                                                                                  |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | test dua ratus satu  | Warung      | Supercow | 3 INVALID_ARGUMENT: Pesanan kurang dari minimum order sebesar Rp 500000 Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan. |

@e2e-penjualan-rtp-010
Scenario Outline: Memastikan tidak tampil validasi minimum order ketika memenuhi minimum order (Edit - Direct (RTP) -> Non Lifestyle fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page
And User click btnTambahProdukModal in order modal 

And User input "Supercow" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Karton" on satuan modal order page
And User input "5" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds

And User click btnMoreFilter in order list
And User click optGudangAlohaRTP on gudang section filter
And User click btnTerapkanFilter in more filter modal
And I get kode transaksi
And I click kode transaksi
And User click btnEditPenjualan in detail order page

Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnEditList in detail order page
And User click btnUbahModal in order modal page
And User change input increase "1" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
# Then User able to see message verification
And User wait for 5 seconds

Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan | alamatKirim | message2               |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | AsrulTesting  | Warung      | Data berhasil disimpan |

@e2e-penjualan-rtp-011
Scenario Outline: Memastikan tidak tampil validasi minimum order ketika memenuhi minimum order (Edit - Direct (RTP) -> Lifestyle fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page
And User click btnTambahProdukModal in order modal 

And User input "Testing RTP Hikmah 1" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
And User input "5" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds

And User click btnMoreFilter in order list
And User click optGudangAlohaRTP on gudang section filter
And User click btnTerapkanFilter in more filter modal
And I get kode transaksi
And I click kode transaksi
And User click btnEditPenjualan in detail order page

Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnEditList in detail order page
And User click btnUbahModal in order modal page
And User change input increase "1" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds

Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan | alamatKirim | message2               |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | AsrulTesting  | Warung      | Data berhasil disimpan |


@e2e-penjualan-rtp-012
Scenario Outline: Memastikan tidak tampil validasi minimum order ketika memenuhi minimum order (Edit - Direct (RTP) -> Non Lifestyle + Lifestyle fullfill minimum order
When api user login
When open dashboard superapp
Given User click menu "navMenuConfig" in side menu page
And User click submenu "menuGudangV4" in side menu page 
And User search specific warehouse in gudang page 
And User click btnDetailGudang on Column Nama Gudang
And User click btnEditGudang in detail gudang 
And User choose set minimum order "<radioBtn>"
And User input Minimum Order Lifestyle "<value>"
And User input Minimum Order All Category "<value2>"
And User click simpan in gudang page 
And User click simpan validation gudang page
Then User able to see "<message1>" verification in gudang page 
Given User click menu "navMenuAdministrator" in side menu page
And User click submenu "menuGeneral" in side menu page 
And User choose Tab Minimum Order
And User choose filter gudang Aloha
Then User verify minimum order on selected warehouse
Given User get dashboard url
Given User click menu "navMenuOrder" in side menu page    
And User click submenu "menuPenjualan" in side menu page
And User click "btnAddOrder"
And User create order by "direct" in order page
And User click fieldTipePenjualan in order page
And User click optTipePenjualanRTP in order page
And User click fieldAgenPemesan in order page
And User input "<agenPemesanan>" in filedAgenPemesanan order page
And User click alamatKirim in order page
And User click "<alamatKirim>" in alamatKirim order page
And User click metodePembayaran in order page 
And User click metodePembayaran in order page 
And User click tipePT in order page 
And User input "GSA - Aloha-RTP" in tipePT order page
And User click superagen in order page
And User click optSuperagen in superagen order page
Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnTambahProduk in order page

And User click btnTambahProdukModal in order modal 
And User input "Supercow" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Karton" on satuan modal order page
And User input "4" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnTambahProdukModal in order modal 
And User input "Testing RTP Hikmah 2" on namaProduk modal order page
And User click satuan modal on order page 
And User choose "Bag" on satuan modal order page
And User input "1" on quantity modal2 order page 
And User click "btnSaveModal1" on modal order page 

And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds
And User click btnMoreFilter in order list
And User click optGudangAlohaRTP on gudang section filter
And User click btnTerapkanFilter in more filter modal
And I get kode transaksi
And I click kode transaksi
And User click btnEditPenjualan in detail order page

Then User able to see minimum order in section 2 order list same nominal with minimum order all category "Rp 500.000"
When User click btnEditList in detail order page
And User click btnUbahModal in order modal page
And User change input increase "2" on quantity modal order page 
And User click "btnSaveModal0" on modal order page 
And User click btnSaveOrderModal on modal order page 
And User click btnSubmit in order modal page 
Then User able to see message verification
And User wait for 5 seconds

Examples: 
| radioBTn                 | value  | value2 | message1                              | agenPemesanan        | alamatKirim | produk   | message2                                                                                                                                  |
| Berdasarkan Create Order | 200000 | 500000 | Gudang \"Aloha-RTP\" berhasil diubah  | AsrulTesting         | Warung      | Supercow | 3 INVALID_ARGUMENT: Pesanan kurang dari minimum order sebesar Rp 500000 Tambahkan barang/quantity untuk mencapai jumlah minimum pesanan. |

