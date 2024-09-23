
@Purchase-Order
Feature: Create - Purchase Order

  @PO-0001
  Scenario Outline: Memastikan Create PO Finish Good dan berhasil disimpan dengan status set
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
    
    And User click "navNotaPengajuan"
    And User upload image to "imgUploadNotaPengajuan" in "PO" page
    And User click "btnSimpanCreatePO" button in "PO" page
    Then User able to see "Purchase Order berhasil dibuat!" message verification

    Examples:
      | notes                  | pic   | productName     | qty  | price | diskon1 | diskonOffFaktur | textValueDPP      | textValuePPN      | textValueSubTotal  | textValueGrandTotal |
      | Catatan Purchase Order | Angga | Automated Stock | 1000 | 95000 |     500 |             100 | Rp 94.500.000,000 | Rp 10.395.000,000 | Rp 104.895.000,000 | Rp 104.894.900,000  |
