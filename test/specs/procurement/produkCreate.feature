@Purchasing-Produk
Feature: Create - Produk

  @PR-0001
  Scenario Outline: Ensure user able to create product


    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    When User click btnCreateProduk button in Product page
    And User send image in uploadImage
    And User click fieldSubType button in Product page
    And User click optSubtipe in fieldSubType
    And User click fieldNamaProduk in product page 
    And User fill fieldNamaProduk with "<namaProduk>" in fieldNamaPRoduk
    And User click fieldMerek in product page 
    And User choose merek in optMerek
    And User click fieldKategori in product page 
    And User choose optKategori in fieldKategori 
    And User click fieldInputBarcode in product page 
    And User click field and choose Pilih Tag Produk in product page
    And User click field and choose Pilih Referensi Produk in product page
    And User click field and choose Pilih Variant in product page
    And User click field and choose Pilih Packaging Material in product page
    And User click field and choose Pilih Packaging Color in product page
    And User click field and choose Pilih Main Ingredients in product page
    And User click field and choose Pilih Texture in product page
    And User click field and choose Pilih Taste in product page
    # And User click fieldTargetUsia in product page 
    # And User choose taget usia 
    # And User click fieldPPNPenjualan in product page 
    # And User choose PPN Penjualan

    And User click btnTambahAtribut in product page 
    And User click fieldSatuanModal in tambah atribut 
    And User choose satuan 
    And User click and input "<konversi>" in tambah atribut 
    And User click and input isi "<produk>" in tambah atribut 
    And User click btnSimpanModal
    And User click btnSimpan in product page 
    And User able to see Berhasil membuat produk baru pesan verification

    Examples:
      | namaProduk       | konversi| produk |
      | Produk Otomatis1 |1        | 10     |

  @PR-0002
  Scenario Outline: Ensure user able to create product

    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page
    When User click btnCreateProduk button in Product page
    And User send image in uploadImage
    And User click fieldSubType button in Product page
    And User click optSubtipe in fieldSubType
    And User click fieldNamaProduk in product page 
    And User fill fieldNamaProduk with "<namaProduk>" in fieldNamaPRoduk
    And User click fieldMerek in product page 
    And User choose merek in optMerek
    And User click fieldKategori in product page 
    And User choose optKategori in fieldKategori 
    And User click fieldInputBarcode in product page 
    And User click field and choose Pilih Tag Produk in product page
    And User click field and choose Pilih Referensi Produk in product page
    And User click field and choose Pilih Variant in product page
    And User click field and choose Pilih Packaging Material in product page
    And User click field and choose Pilih Packaging Color in product page
    And User click field and choose Pilih Main Ingredients in product page
    And User click field and choose Pilih Texture in product page
    And User click field and choose Pilih Taste in product page
    # And User click fieldTargetUsia in product page 
    # And User choose taget usia 
    # And User click fieldPPNPenjualan in product page 
    # And User choose PPN Penjualan

    And User click btnTambahAtribut in product page 
    And User click fieldSatuanModal in tambah atribut 
    And User choose satuan 
    And User click and input "<konversi>" in tambah atribut 
    And User click and input isi "<produk>" in tambah atribut 
    And User click btnSimpanModal
    And User click btnSimpan in product page 
    And User able to see Berhasil membuat produk baru pesan verification

    Examples:
      | namaProduk       | konversi| produk |
      | Produk Otomatis1 |1        | 10     |

  @PR-0003
  Scenario Outline: Memastikan membuat product RTP tanpa chekclist Ingredients
    When api user login
    When open dashboard superapp
    When User click "navMenuPurchasing" button in "Global" page
    And User click produk menu in Product page
    And User directed to List barang yang terdaftar di Super page

    When User click btnCreateProduk button in Product page
    And User send image in uploadImage
    And User click fieldTipeProduk in product page 
    And User choose tipe product "<act>"

    And User click fieldSubType button in Product page
    And User click optSubtipe in fieldSubType
    And User click fieldNamaProduk in product page 
    And User fill fieldNamaProduk with "<namaProduk>" in fieldNamaPRoduk
    And User click fieldMerek in product page 
    And User choose merek in optMerek
    And User click fieldKategori in product page 
    And User choose optKategori in fieldKategori 
    And User click fieldInputBarcode in product page 
    And User click field and choose Pilih Tag Produk in product page
    And User click field and choose Pilih Referensi Produk in product page
    And User click field and choose Pilih Variant in product page
    And User click field and choose Pilih Packaging Material in product page
    And User click field and choose Pilih Packaging Color in product page
    And User click field and choose Pilih Main Ingredients in product page
    And User click field and choose Pilih Texture in product page
    And User click field and choose Pilih Taste in product page
    And User click fieldTargetUsia in product page 
    And User choose taget usia 
    And User click fieldPPNPenjualan in product page 
    And User choose PPN Penjualan

    And User click btnTambahAtribut in product page 
    And User click fieldSatuanModal in tambah atribut 
    And User choose satuan 
    And User click and input "<konversi>" in tambah atribut 
    And User click and input isi "<produk>" in tambah atribut 
    And User click btnSimpanModal
    And User click btnSimpan in product page 
    Then User able to see Berhasil membuat produk baru "<message>" verification    
    Given User go to main page product

    Examples:
      | namaProduk          | konversi| produk | act   |message                     |
      | Produk Otomatis RTP |1        | 10     | RTP   |Berhasil membuat produk baru|
