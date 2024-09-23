@Purchasing-Purchase-Order-Request-Payment
Feature: Create - Purchase Order

  Background: User login into the system
    Given I send login url
    When I login with credential
    Then I see usernameDisplay

  @PO-0053
  Scenario Outline: Memastikan Request payment berhasil untuk PO dengan payment method cod/tf
    Given I send login url
    When I login with credential
    Then I see usernameDisplay
    When User click "navMenuPurchasing" button in "Global" page
    And User click "menuPurchasingPO" button in "PO" page
    And User directed to "Purchase Order" page
    When User click "btnCreateNewPO" button in "PO" page
    And User clicks "fieldJenisPO" button in "PO" page
    And User clicks "fieldGudang" button in "PO" page
    And User clicks "optGudangPOAloha" button in "PO" page
    And User clicks "fieldTipePT" button in "PO" page
    And User clicks "optTipePTPO" button in "PO" page
    And User clicks "fieldSupplier" button in "PO" page
    And User clicks "optSupplier" button in "PO" page
    And User clicks "textAreaCatatanPO" button in "PO" page
    And User fill "textAreaCatatanPO" with value "<notes>" in "PO" page
    And User clicks "fieldMetodePembayaran" button in "PO" page
    And User clicks "optMetodePembayaranTransfer" button in "PO" page
    And User clicks "fieldPengiriman" button in "PO" page
    And User clicks "optPengirimanLocco" button in "PO" page
    And User clicks "fieldPIC" button in "PO" page
    And User fill "fieldPIC" with value "<pic>" in "PO" page
    And User clicks "optPIC" button in "PO" page
    And User clicks "fieldBankSupplier" button in "PO" page
    And User clicks "optBankSupplier" button in "PO" page
    When User clicks "btnTambahProdukPO" button in "PO" page
    And User can wait loading application for "3" seconds
    And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User fill "fieldProdukModalPO" with value "<productName>" in "PO" page
    # And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User clicks "optProdukModalPO2" button in "PO" page
    And User clicks "fieldSatuanModalPO" button in "PO" page
    And User clicks "optSatuanModalPO" button in "PO" page
    And User fill "fieldQtyModalPO" with value "<qty>" in "PO" page
    And User fill "fieldHargaSatuanModalPO" with value "<price>" in "PO" page
    And User fill "fieldDiskon1ModalPO" with value "<diskon1>" in "PO" page
    And User clicks "togglePPNModalPO" button in "PO" page
    And User clicks "btnSimpanModalPO" button in "PO" page
    And User scroll to "bottom" of the page
    Then User verified "purchase order cost" for "textValueDPP" is "<textValueDPP>"
    And User verified "purchase order cost" for "textValuePPN" is "<textValuePPN>"
    And User verified "purchase order cost" for "textValueSubTotal" is "<textValueSubTotal>"
    And User fill "fieldDiskonOffFaktur" with value "<diskonOffFaktur>" in "PO" page
    And User verified "purchase order cost" for "textValueGrandTotal" is "<textValueGrandTotal>"
    # And User click "navNotaPengajuan"
    And User click "btnSimpanCreatePO" button in "PO" page
    Then User able to see "Purchase Order berhasil dibuat!" message verification
    And User click "btnDetailRow0" button in "PO" page
    And User click "btnPrepayment" button in "PO" page
    And User click "reqNavNotaPengajuan" button in "PO" page
    And User fill "fieldDeskripsiPrepayment" with value "Notes Prepayment" in "PO" page
    And User upload image to "imgUploadRPNP" in request payment modal
    And User can wait loading application for "3" seconds
    And User click "btnSimpanRPModal" button in request payment modal
    Then User able to see "Data has been updated" message verification

    Examples:
      | notes                  | pic   | productName     | qty  | price | diskon1 | diskonOffFaktur | textValueDPP      | textValuePPN      | textValueSubTotal  | textValueGrandTotal |
      | Catatan Purchase Order | Angga | Automated Stock | 1000 | 95000 |     500 |             100 | Rp 94.500.000,000 | Rp 10.395.000,000 | Rp 104.895.000,000 | Rp 104.894.900,000  |

  @PO-0054
  Scenario Outline: Memastikan fungsi button batal Request payment berfungsi dengan baik
    # Given I send login url
    # When I login with credential
    # Then I see usernameDisplay
    # When User click "navMenuPurchasing" button in "Global" page
    # And User click "menuPurchasingPO" button in "PO" page
    # And User directed to "Purchase Order" page
    When User click "btnCreateNewPO" button in "PO" page
    And User clicks "fieldJenisPO" button in "PO" page
    And User clicks "fieldGudang" button in "PO" page
    And User clicks "optGudangPOAloha" button in "PO" page
    And User clicks "fieldTipePT" button in "PO" page
    And User clicks "optTipePTPO" button in "PO" page
    And User clicks "fieldSupplier" button in "PO" page
    And User clicks "optSupplier" button in "PO" page
    And User clicks "textAreaCatatanPO" button in "PO" page
    And User fill "textAreaCatatanPO" with value "<notes>" in "PO" page
    And User clicks "fieldMetodePembayaran" button in "PO" page
    And User clicks "optMetodePembayaranTransfer" button in "PO" page
    And User clicks "fieldPengiriman" button in "PO" page
    And User clicks "optPengirimanLocco" button in "PO" page
    And User clicks "fieldPIC" button in "PO" page
    And User fill "fieldPIC" with value "<pic>" in "PO" page
    And User clicks "optPIC" button in "PO" page
    And User clicks "fieldBankSupplier" button in "PO" page
    And User clicks "optBankSupplier" button in "PO" page
    When User clicks "btnTambahProdukPO" button in "PO" page
    And User can wait loading application for "3" seconds
    And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User fill "fieldProdukModalPO" with value "<productName>" in "PO" page
    # And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User clicks "optProdukModalPO2" button in "PO" page
    And User clicks "fieldSatuanModalPO" button in "PO" page
    And User clicks "optSatuanModalPO" button in "PO" page
    And User fill "fieldQtyModalPO" with value "<qty>" in "PO" page
    And User fill "fieldHargaSatuanModalPO" with value "<price>" in "PO" page
    And User fill "fieldDiskon1ModalPO" with value "<diskon1>" in "PO" page
    And User clicks "togglePPNModalPO" button in "PO" page
    And User clicks "btnSimpanModalPO" button in "PO" page
    And User scroll to "bottom" of the page
    Then User verified "purchase order cost" for "textValueDPP" is "<textValueDPP>"
    And User verified "purchase order cost" for "textValuePPN" is "<textValuePPN>"
    And User verified "purchase order cost" for "textValueSubTotal" is "<textValueSubTotal>"
    And User fill "fieldDiskonOffFaktur" with value "<diskonOffFaktur>" in "PO" page
    And User verified "purchase order cost" for "textValueGrandTotal" is "<textValueGrandTotal>"
    # And User click "navNotaPengajuan"
    And User click "btnSimpanCreatePO" button in "PO" page
    Then User able to see "Purchase Order berhasil dibuat!" message verification
    And User click "btnDetailRow0" button in "PO" page
    And User click "btnPrepayment" button in "PO" page
    And User click "btnBatalRPModal" button in request payment modal
    Then User verifiy the page
    Given User get create PO url

    Examples:
      | notes                  | pic   | productName     | qty  | price | diskon1 | diskonOffFaktur | textValueDPP      | textValuePPN      | textValueSubTotal  | textValueGrandTotal |
      | Catatan Purchase Order | Angga | Automated Stock | 1000 | 95000 |     500 |             100 | Rp 94.500.000,000 | Rp 10.395.000,000 | Rp 104.895.000,000 | Rp 104.894.900,000  |

  @PO-0055
  Scenario Outline: Memastikan submit berhasil untuk PO dengan kondisi grandtotal = 0 atau tempo
    # Given I send login url
    # When I login with credential
    # Then I see usernameDisplay
    # When User click "navMenuPurchasing" button in "Global" page
    # And User click "menuPurchasingPO" button in "PO" page
    # And User directed to "Purchase Order" page
    # When User click "btnCreateNewPO" button in "PO" page
    And User clicks "fieldJenisPO" button in "PO" page
    And User clicks "fieldGudang" button in "PO" page
    And User clicks "optGudangPOAloha" button in "PO" page
    And User clicks "fieldTipePT" button in "PO" page
    And User clicks "optTipePTPO" button in "PO" page
    And User clicks "fieldSupplier" button in "PO" page
    And User clicks "optSupplier" button in "PO" page
    And User clicks "textAreaCatatanPO" button in "PO" page
    And User fill "textAreaCatatanPO" with value "<notes>" in "PO" page
    And User clicks "fieldMetodePembayaran" button in "PO" page
    And User clicks "optMetodePembayaranTempo" button in "PO" page
    And User clicks "fieldPengiriman" button in "PO" page
    And User clicks "optPengirimanLocco" button in "PO" page
    And User clicks "fieldPIC" button in "PO" page
    And User fill "fieldPIC" with value "<pic>" in "PO" page
    And User clicks "optPIC" button in "PO" page
    And User clicks "fieldBankSupplier" button in "PO" page
    And User clicks "optBankSupplier" button in "PO" page
    When User clicks "btnTambahProdukPO" button in "PO" page
    And User can wait loading application for "3" seconds
    And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User fill "fieldProdukModalPO" with value "<productName>" in "PO" page
    # And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User clicks "optProdukModalPO2" button in "PO" page
    And User clicks "fieldSatuanModalPO" button in "PO" page
    And User clicks "optSatuanModalPO" button in "PO" page
    And User fill "fieldQtyModalPO" with value "<qty>" in "PO" page
    And User fill "fieldHargaSatuanModalPO" with value "<price>" in "PO" page
    And User fill "fieldDiskon1ModalPO" with value "<diskon1>" in "PO" page
    And User clicks "togglePPNModalPO" button in "PO" page
    And User clicks "btnSimpanModalPO" button in "PO" page
    And User scroll to "bottom" of the page
    Then User verified "purchase order cost" for "textValueDPP" is "<textValueDPP>"
    And User verified "purchase order cost" for "textValuePPN" is "<textValuePPN>"
    And User verified "purchase order cost" for "textValueSubTotal" is "<textValueSubTotal>"
    And User fill "fieldDiskonOffFaktur" with value "<diskonOffFaktur>" in "PO" page
    And User verified "purchase order cost" for "textValueGrandTotal" is "<textValueGrandTotal>"
    And User click "navNotaPengajuan"
    And User upload image to "imgUploadNotaPengajuan" in "PO" page
    # And User click "btnSimpanCreatePO" button in "PO" page
    Then User able to see "Purchase Order berhasil dibuat!" message verification
    Given User get create PO url

    Examples:
      | notes                  | pic   | productName     | qty  | price | diskon1 | diskonOffFaktur | textValueDPP | textValuePPN | textValueSubTotal | textValueGrandTotal |
      | Catatan Purchase Order | Angga | Automated Stock | 1000 |     0 |       0 |               0 | Rp 0,000     | Rp 0,000     | Rp 0,000          | Rp 0,000            |

  @PO-0056
  Scenario Outline: Memastikan  Request payment gagal untuk PO dengan payment method tf dengan kondisi belum upload nota pengajuan
    # Given I send login url
    # When I login with credential
    # Then I see usernameDisplay
    # When User click "navMenuPurchasing" button in "Global" page
    # And User click "menuPurchasingPO" button in "PO" page
    # And User directed to "Purchase Order" page
    # When User click "btnCreateNewPO" button in "PO" page
    And User clicks "fieldJenisPO" button in "PO" page
    And User clicks "fieldGudang" button in "PO" page
    And User clicks "optGudangPOAloha" button in "PO" page
    And User clicks "fieldTipePT" button in "PO" page
    And User clicks "optTipePTPO" button in "PO" page
    And User clicks "fieldSupplier" button in "PO" page
    And User clicks "optSupplier" button in "PO" page
    And User clicks "textAreaCatatanPO" button in "PO" page
    And User fill "textAreaCatatanPO" with value "<notes>" in "PO" page
    And User clicks "fieldMetodePembayaran" button in "PO" page
    # And User clicks "optMetodePembayaranTransfer" button in "PO" page
    And User choose metode pembayaran "<metodePembayaran>"
    And User clicks "fieldPengiriman" button in "PO" page
    And User clicks "optPengirimanLocco" button in "PO" page
    And User clicks "fieldPIC" button in "PO" page
    And User fill "fieldPIC" with value "<pic>" in "PO" page
    And User clicks "optPIC" button in "PO" page
    And User clicks "fieldBankSupplier" button in "PO" page
    And User clicks "optBankSupplier" button in "PO" page
    When User clicks "btnTambahProdukPO" button in "PO" page
    And User can wait loading application for "3" seconds
    And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User fill "fieldProdukModalPO" with value "<productName>" in "PO" page
    # And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User clicks "optProdukModalPO2" button in "PO" page
    And User clicks "fieldSatuanModalPO" button in "PO" page
    And User clicks "optSatuanModalPO" button in "PO" page
    And User fill "fieldQtyModalPO" with value "<qty>" in "PO" page
    And User fill "fieldHargaSatuanModalPO" with value "<price>" in "PO" page
    And User fill "fieldDiskon1ModalPO" with value "<diskon1>" in "PO" page
    And User clicks "togglePPNModalPO" button in "PO" page
    And User clicks "btnSimpanModalPO" button in "PO" page
    And User scroll to "bottom" of the page
    Then User verified "purchase order cost" for "textValueDPP" is "<textValueDPP>"
    And User verified "purchase order cost" for "textValuePPN" is "<textValuePPN>"
    And User verified "purchase order cost" for "textValueSubTotal" is "<textValueSubTotal>"
    And User fill "fieldDiskonOffFaktur" with value "<diskonOffFaktur>" in "PO" page
    And User verified "purchase order cost" for "textValueGrandTotal" is "<textValueGrandTotal>"
    # And User click "navNotaPengajuan"
    And User click "btnSimpanCreatePO" button in "PO" page
    Then User able to see "Purchase Order berhasil dibuat!" message verification
    And User click "btnDetailRow0" button in "PO" page
    And User click "btnPrepayment" button in "PO" page
    And User click "reqNavNotaPengajuan" button in "PO" page
    # And User fill "fieldDeskripsiPrepayment" with value "Notes Prepayment" in "PO" page
    # And User upload image to "imgUploadRPNP" in request payment modal
    And User can wait loading application for "3" seconds
    And User click "btnSimpanRPModal" button in request payment modal
    Then User "able" to see "allertNotaPengajuan" in "PO" page
    Given User get create PO url

    Examples:
      | metodePembayaran | notes                  | pic   | productName     | qty  | price | diskon1 | diskonOffFaktur | textValueDPP      | textValuePPN      | textValueSubTotal  | textValueGrandTotal |
      | Transfer         | Catatan Purchase Order | Angga | Automated Stock | 1000 | 95000 |     500 |             100 | Rp 94.500.000,000 | Rp 10.395.000,000 | Rp 104.895.000,000 | Rp 104.894.900,000  |
      # | Cash On Delivery | Catatan Purchase Order | Angga | Automated Stock | 1000 | 95000 |     500 |             100 | Rp 94.500.000,000 | Rp 10.395.000,000 | Rp 104.895.000,000 | Rp 104.894.900,000  |

  @PO-0057
  Scenario Outline: Memastikan Request payment gagal untuk PO dengan payment method cod dengan kondisi belum upload nota pengajuan
    # Given I send login url
    # When I login with credential
    # Then I see usernameDisplay
    # When User click "navMenuPurchasing" button in "Global" page
    # And User click "menuPurchasingPO" button in "PO" page
    # And User directed to "Purchase Order" page
    # When User click "btnCreateNewPO" button in "PO" page
    And User clicks "fieldJenisPO" button in "PO" page
    And User clicks "fieldGudang" button in "PO" page
    And User clicks "optGudangPOAloha" button in "PO" page
    And User clicks "fieldTipePT" button in "PO" page
    And User clicks "optTipePTPO" button in "PO" page
    And User clicks "fieldSupplier" button in "PO" page
    And User clicks "optSupplier" button in "PO" page
    And User clicks "textAreaCatatanPO" button in "PO" page
    And User fill "textAreaCatatanPO" with value "<notes>" in "PO" page
    And User clicks "fieldMetodePembayaran" button in "PO" page
    # And User clicks "optMetodePembayaranTransfer" button in "PO" page
    And User choose metode pembayaran "<metodePembayaran>"
    And User clicks "fieldPengiriman" button in "PO" page
    And User clicks "optPengirimanLocco" button in "PO" page
    And User clicks "fieldPIC" button in "PO" page
    And User fill "fieldPIC" with value "<pic>" in "PO" page
    And User clicks "optPIC" button in "PO" page
    And User clicks "fieldBankSupplier" button in "PO" page
    And User clicks "optBankSupplier" button in "PO" page
    When User clicks "btnTambahProdukPO" button in "PO" page
    And User can wait loading application for "3" seconds
    And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User fill "fieldProdukModalPO" with value "<productName>" in "PO" page
    # And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User clicks "optProdukModalPO2" button in "PO" page
    And User clicks "fieldSatuanModalPO" button in "PO" page
    And User clicks "optSatuanModalPO" button in "PO" page
    And User fill "fieldQtyModalPO" with value "<qty>" in "PO" page
    And User fill "fieldHargaSatuanModalPO" with value "<price>" in "PO" page
    And User fill "fieldDiskon1ModalPO" with value "<diskon1>" in "PO" page
    And User clicks "togglePPNModalPO" button in "PO" page
    And User clicks "btnSimpanModalPO" button in "PO" page
    And User scroll to "bottom" of the page
    Then User verified "purchase order cost" for "textValueDPP" is "<textValueDPP>"
    And User verified "purchase order cost" for "textValuePPN" is "<textValuePPN>"
    And User verified "purchase order cost" for "textValueSubTotal" is "<textValueSubTotal>"
    And User fill "fieldDiskonOffFaktur" with value "<diskonOffFaktur>" in "PO" page
    And User verified "purchase order cost" for "textValueGrandTotal" is "<textValueGrandTotal>"
    # And User click "navNotaPengajuan"
    And User click "btnSimpanCreatePO" button in "PO" page
    Then User able to see "Purchase Order berhasil dibuat!" message verification
    And User click "btnDetailRow0" button in "PO" page
    And User click "btnPrepayment" button in "PO" page
    And User click "reqNavNotaPengajuan" button in "PO" page
    # And User fill "fieldDeskripsiPrepayment" with value "Notes Prepayment" in "PO" page
    # And User upload image to "imgUploadRPNP" in request payment modal
    And User can wait loading application for "3" seconds
    And User click "btnSimpanRPModal" button in request payment modal
    Then User "able" to see "allertNotaPengajuan" in "PO" page
    Given User get create PO url

    Examples:
      | metodePembayaran | notes                  | pic   | productName     | qty  | price | diskon1 | diskonOffFaktur | textValueDPP      | textValuePPN      | textValueSubTotal  | textValueGrandTotal |
      | Cash On Delivery | Catatan Purchase Order | Angga | Automated Stock | 1000 | 95000 |     500 |             100 | Rp 94.500.000,000 | Rp 10.395.000,000 | Rp 104.895.000,000 | Rp 104.894.900,000  |

  @PO-0058
  Scenario Outline: Memastikan submit gagal untuk PO dengan kondisi grandtotal = 0 atau tempo kondisi belum upload nota pengajuan
    # Given I send login url
    # When I login with credential
    # Then I see usernameDisplay
    # When User click "navMenuPurchasing" button in "Global" page
    # And User click "menuPurchasingPO" button in "PO" page
    # And User directed to "Purchase Order" page
    # When User click "btnCreateNewPO" button in "PO" page
    And User clicks "fieldJenisPO" button in "PO" page
    And User clicks "fieldGudang" button in "PO" page
    And User clicks "optGudangPOAloha" button in "PO" page
    And User clicks "fieldTipePT" button in "PO" page
    And User clicks "optTipePTPO" button in "PO" page
    And User clicks "fieldSupplier" button in "PO" page
    And User clicks "optSupplier" button in "PO" page
    And User clicks "textAreaCatatanPO" button in "PO" page
    And User fill "textAreaCatatanPO" with value "<notes>" in "PO" page
    And User clicks "fieldMetodePembayaran" button in "PO" page
    # And User clicks "optMetodePembayaranTransfer" button in "PO" page
    And User choose metode pembayaran "<metodePembayaran>"
    And User clicks "fieldPengiriman" button in "PO" page
    And User clicks "optPengirimanLocco" button in "PO" page
    And User clicks "fieldPIC" button in "PO" page
    And User fill "fieldPIC" with value "<pic>" in "PO" page
    And User clicks "optPIC" button in "PO" page
    And User clicks "fieldBankSupplier" button in "PO" page
    And User clicks "optBankSupplier" button in "PO" page
    When User clicks "btnTambahProdukPO" button in "PO" page
    And User can wait loading application for "3" seconds
    And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User fill "fieldProdukModalPO" with value "<productName>" in "PO" page
    And User can wait loading application for "5" seconds
    And User clicks "optProdukModalPO2" button in "PO" page
    And User clicks "fieldSatuanModalPO" button in "PO" page
    And User clicks "optSatuanModalPO" button in "PO" page
    And User fill "fieldQtyModalPO" with value "<qty>" in "PO" page
    And User fill "fieldHargaSatuanModalPO" with value "<price>" in "PO" page
    And User fill "fieldDiskon1ModalPO" with value "<diskon1>" in "PO" page
    And User clicks "togglePPNModalPO" button in "PO" page
    And User clicks "btnSimpanModalPO" button in "PO" page
    And User scroll to "bottom" of the page
    Then User verified "purchase order cost" for "textValueDPP" is "<textValueDPP>"
    And User verified "purchase order cost" for "textValuePPN" is "<textValuePPN>"
    And User verified "purchase order cost" for "textValueSubTotal" is "<textValueSubTotal>"
    And User fill "fieldDiskonOffFaktur" with value "<diskonOffFaktur>" in "PO" page
    And User verified "purchase order cost" for "textValueGrandTotal" is "<textValueGrandTotal>"
    And User click "btnSimpanCreatePO" button in "PO" page
    Then User able to see "Purchase Order berhasil dibuat!" message verification
    And User click "btnDetailRow0" button in "PO" page
    And User click "btnSubmitPO" in detail page
    And User click "reqNavNotaPengajuan" button in "PO" page
    And User can wait loading application for "3" seconds
    And User click "btnSimpanRPModal" button in request payment modal
    Then User "able" to see "allertNotaPengajuanTempo" in "PO" page
    Given User get create PO url

    Examples:
      | metodePembayaran | notes                  | pic   | productName     | qty  | price | diskon1 | diskonOffFaktur | textValueDPP | textValuePPN | textValueSubTotal | textValueGrandTotal |
      | Tempo            | Catatan Purchase Order | Angga | Automated Stock | 1000 |     0 |       0 |               0 | Rp 0,000     | Rp 0,000     | Rp 0,000          | Rp 0,000            |

  @PO-0059
  Scenario Outline: Memastikan  Request payment gagal untuk PO dengan payment method cod dengan kondisi jumlah payment request = 0
    # Given I send login url
    # When I login with credential
    # Then I see usernameDisplay
    # When User click "navMenuPurchasing" button in "Global" page
    # And User click "menuPurchasingPO" button in "PO" page
    # And User directed to "Purchase Order" page
    # When User click "btnCreateNewPO" button in "PO" page
    And User clicks "fieldJenisPO" button in "PO" page
    And User clicks "fieldGudang" button in "PO" page
    And User clicks "optGudangPOAloha" button in "PO" page
    And User clicks "fieldTipePT" button in "PO" page
    And User clicks "optTipePTPO" button in "PO" page
    And User clicks "fieldSupplier" button in "PO" page
    And User clicks "optSupplier" button in "PO" page
    And User clicks "textAreaCatatanPO" button in "PO" page
    And User fill "textAreaCatatanPO" with value "<notes>" in "PO" page
    And User clicks "fieldMetodePembayaran" button in "PO" page
    # And User clicks "optMetodePembayaranTransfer" button in "PO" page
    And User choose metode pembayaran "<metodePembayaran>"
    And User clicks "fieldPengiriman" button in "PO" page
    And User clicks "optPengirimanLocco" button in "PO" page
    And User clicks "fieldPIC" button in "PO" page
    And User fill "fieldPIC" with value "<pic>" in "PO" page
    And User clicks "optPIC" button in "PO" page
    And User clicks "fieldBankSupplier" button in "PO" page
    And User clicks "optBankSupplier" button in "PO" page
    When User clicks "btnTambahProdukPO" button in "PO" page
    And User can wait loading application for "3" seconds
    And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User fill "fieldProdukModalPO" with value "<productName>" in "PO" page
    And User can wait loading application for "5" seconds
    And User clicks "optProdukModalPO2" button in "PO" page
    And User clicks "fieldSatuanModalPO" button in "PO" page
    And User clicks "optSatuanModalPO" button in "PO" page
    And User fill "fieldQtyModalPO" with value "<qty>" in "PO" page
    And User fill "fieldHargaSatuanModalPO" with value "<price>" in "PO" page
    And User fill "fieldDiskon1ModalPO" with value "<diskon1>" in "PO" page
    And User clicks "togglePPNModalPO" button in "PO" page
    And User clicks "btnSimpanModalPO" button in "PO" page
    And User scroll to "bottom" of the page
    Then User verified "purchase order cost" for "textValueDPP" is "<textValueDPP>"
    And User verified "purchase order cost" for "textValuePPN" is "<textValuePPN>"
    And User verified "purchase order cost" for "textValueSubTotal" is "<textValueSubTotal>"
    And User fill "fieldDiskonOffFaktur" with value "<diskonOffFaktur>" in "PO" page
    And User verified "purchase order cost" for "textValueGrandTotal" is "<textValueGrandTotal>"
    And User click "btnSimpanCreatePO" button in "PO" page
    Then User able to see "Purchase Order berhasil dibuat!" message verification
    And User click "btnDetailRow0" button in "PO" page
    And User click "btnPrepayment" button in "PO" page
    And User click "fieldNominalPrepayment" button in "PO" page
    And User fill "fieldNominalPrepayment" with value "0" in "PO" page
    And User click "btnSimpanRPModal" button in request payment modal
    Then User able to see "[Rincian PO] Jumlah Payment request wajib diisi" message verification
    And User click "reqNavNotaPengajuan" button in "PO" page
    And User can wait loading application for "3" seconds
    Then User "able" to see "allertNotaPengajuan" in "PO" page
    Then User "able" to see "allertNotaPengajuan" in "PO" page
    Given User get create PO url

    Examples:
      | metodePembayaran | notes                  | pic   | productName     | qty  | price | diskon1 | diskonOffFaktur | textValueDPP      | textValuePPN      | textValueSubTotal  | textValueGrandTotal |
      | Cash On Delivery | Catatan Purchase Order | Angga | Automated Stock | 1000 | 95000 |     500 |             100 | Rp 94.500.000,000 | Rp 10.395.000,000 | Rp 104.895.000,000 | Rp 104.894.900,000  |

  @PO-0060
  Scenario Outline: Memastikan  Request payment gagal untuk PO dengan payment method tf dengan kondisi jumlah payment request = 0
    # Given I send login url
    # When I login with credential
    # Then I see usernameDisplay
    When User click "navMenuPurchasing" button in "Global" page
    And User click "menuPurchasingPO" button in "PO" page
    And User directed to "Purchase Order" page
    When User click "btnCreateNewPO" button in "PO" page
    And User clicks "fieldJenisPO" button in "PO" page
    And User clicks "fieldGudang" button in "PO" page
    And User clicks "optGudangPOAloha" button in "PO" page
    And User clicks "fieldTipePT" button in "PO" page
    And User clicks "optTipePTPO" button in "PO" page
    And User clicks "fieldSupplier" button in "PO" page
    And User clicks "optSupplier" button in "PO" page
    And User clicks "textAreaCatatanPO" button in "PO" page
    And User fill "textAreaCatatanPO" with value "<notes>" in "PO" page
    And User clicks "fieldMetodePembayaran" button in "PO" page
    # And User clicks "optMetodePembayaranTransfer" button in "PO" page
    And User choose metode pembayaran "<metodePembayaran>"
    And User clicks "fieldPengiriman" button in "PO" page
    And User clicks "optPengirimanLocco" button in "PO" page
    And User clicks "fieldPIC" button in "PO" page
    And User fill "fieldPIC" with value "<pic>" in "PO" page
    And User clicks "optPIC" button in "PO" page
    And User clicks "fieldBankSupplier" button in "PO" page
    And User clicks "optBankSupplier" button in "PO" page
    When User clicks "btnTambahProdukPO" button in "PO" page
    And User can wait loading application for "3" seconds
    And User clicks "fieldProdukModalPO" button in "PO" page
    And User can wait loading application for "5" seconds
    And User fill "fieldProdukModalPO" with value "<productName>" in "PO" page
    And User can wait loading application for "5" seconds
    And User clicks "optProdukModalPO2" button in "PO" page
    And User clicks "fieldSatuanModalPO" button in "PO" page
    And User clicks "optSatuanModalPO" button in "PO" page
    And User fill "fieldQtyModalPO" with value "<qty>" in "PO" page
    And User fill "fieldHargaSatuanModalPO" with value "<price>" in "PO" page
    And User fill "fieldDiskon1ModalPO" with value "<diskon1>" in "PO" page
    And User clicks "togglePPNModalPO" button in "PO" page
    And User clicks "btnSimpanModalPO" button in "PO" page
    And User scroll to "bottom" of the page
    Then User verified "purchase order cost" for "textValueDPP" is "<textValueDPP>"
    And User verified "purchase order cost" for "textValuePPN" is "<textValuePPN>"
    And User verified "purchase order cost" for "textValueSubTotal" is "<textValueSubTotal>"
    And User fill "fieldDiskonOffFaktur" with value "<diskonOffFaktur>" in "PO" page
    And User verified "purchase order cost" for "textValueGrandTotal" is "<textValueGrandTotal>"
    And User click "btnSimpanCreatePO" button in "PO" page
    Then User able to see "Purchase Order berhasil dibuat!" message verification
    And User click "btnDetailRow0" button in "PO" page
    And User click "btnPrepayment" button in "PO" page
    And User click "fieldNominalPrepayment" button in "PO" page
    And User fill "fieldNominalPrepayment" with value "0" in "PO" page
    And User click "btnSimpanRPModal" button in request payment modal
    Then User able to see "[Rincian PO] Jumlah Payment request wajib diisi" message verification
    And User click "reqNavNotaPengajuan" button in "PO" page
    And User can wait loading application for "3" seconds
    Then User "able" to see "allertNotaPengajuan" in "PO" page

    Examples:
      | metodePembayaran | notes                  | pic   | productName     | qty  | price | diskon1 | diskonOffFaktur | textValueDPP      | textValuePPN      | textValueSubTotal  | textValueGrandTotal |
      | Transfer         | Catatan Purchase Order | Angga | Automated Stock | 1000 | 95000 |     500 |             100 | Rp 94.500.000,000 | Rp 10.395.000,000 | Rp 104.895.000,000 | Rp 104.894.900,000  |
