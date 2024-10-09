@e2e-transfer-goods
Feature: Create-e2e-transfer-goods

    @gudang-regular-ke-gudang-regular
    Scenario: Transfer goods dari gudang regular (Aloha) ke gudang regular (Jember)
    Given api user login
    When open dashboard superapp
    And User click "navMenuStock" in global page
    And User click "menuInventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnFilterWarehouseInventory"
    And User click "warehouseJember" in "btnFilterWarehouseInventory"
    And User wait for 3 seconds
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "Timtam" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisBefore"
    And User wait for 3 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuTransferGoods" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "btnCreateTransferGoods"
    And User click "fieldWarehouseFrom"
    And User click "optWarehouseAlohaFrom" into "fieldWarehouseFrom"
    And User click "fieldWarehouseTo"
    And User click "optWarehouseJember" into "fieldWarehouseTo"
    And User wait for 3 seconds
    And User click "btnAddProduct"
    And User wait for 3 seconds
    And User click "searchBarProduct"
    And User type "Timtam" into "searchBarProduct"
    And User wait for 1 seconds
    And User click "btnAddProductList"
    And User wait for 3 seconds
    And User click "btnSelectedProductModal"
    And User wait for 3 seconds
    And User click "fieldQtyProduct"
    And User wait for 3 seconds
    And User type "0" into "fieldQtyProduct"
    And User wait for 3 seconds
    And User click "btnAddProductModal"
    And User wait for 3 seconds
    And User click "btnCreateTransfer"
    And User wait for 3 seconds
    And User click "btnSubmitApproval"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User click "btnApprove"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User get "transferID"
    And User click "navMenuLogistic" in global page
    And User click "menuOutgoingTransfer" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "filterWarehouseTo"
    And User click "warehouseJember" into "filterWarehouseTo"
    And User click "btnTerapkanFilterWarehouse"
    And User click "filterPeriode"
    And User click "periodeToday" into "filterPeriode"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarOutgoingTransfer"
    And User type transferID into "searchBarOutgoingTransfer"
    And User wait for 5 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnReadyChooseVendor"
    And User click "btnChangeStatusDeliver"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnChooseVendor"
    And User wait for 3 seconds
    And User click "selectGroupVendor"
    And User wait for 3 seconds
    And User type "inhouse motoris" into "selectGroupVendor"
    And User wait for 3 seconds
    And User click "selectDriver"
    And User wait for 3 seconds
    And User type "afasdda" into "selectDriver"
    And User wait for 3 seconds
    And User click "selectPlateNo"
    And User wait for 3 seconds
    And User type "84754511" into "selectPlateNo"
    And User wait for 3 seconds
    And User click "btnAssign"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnDelivered"
    And User click "btnChangeStatusDeliver"
    And User wait for 10 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuIncomingGoods" in "navMenuLogistic"
    And User click "tabTransferStock"
    And User click "filterWarehouseTo2"
    And User click "warehouseJember" into "filterWarehouseTo2"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarIncomingGoods"
    And User type transferID into "searchBarIncomingGoods"
    And User wait for 5 seconds
    And User click "btnInputIncoming"
    And User click "uploadSuratJalan"
    And User input image into "uploadSuratJalan"
    And User wait for 5 seconds
    And User click "inputQtyIncoming"
    And User type "10" into "inputQtyIncoming"
    And User click "btnSubmitIncoming"
    And User wait for 3 seconds
    And User get "qtyIncoming"
    And User click "navMenuStock" in global page
    And User click "InventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnFilterWarehouseInventory"
    And User click "warehouseJember" in "btnFilterWarehouseInventory"
    And User wait for 3 seconds
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "Timtam" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisAfter"
    And User wait for 3 seconds
    Then the incoming product should be added to qty unreleased

    @gudang-regular-ke-gudang-rtp
    Scenario: Transfer goods dari gudang regular (Aloha) ke gudang RTP (Aloha-RTP)
    Given api user login
    When open dashboard superapp
    And User click "navMenuStock" in global page
    And User click "menuInventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnFilterWarehouseInventory"
    And User click "warehouseAlohaRTP" in "btnFilterWarehouseInventory"
    And User wait for 3 seconds
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "**Agarasa Melon 10g - Inner Box" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisBefore"
    And User wait for 3 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuTransferGoods" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "btnCreateTransferGoods"
    And User click "fieldWarehouseFrom"
    And User click "optWarehouseAlohaFrom" into "fieldWarehouseFrom"
    And User click "fieldWarehouseTo"
    And User click "optWarehouseAlohaRTPTo" into "fieldWarehouseTo"
    And User wait for 3 seconds
    And User click "fieldCompanyType"
    And User click "optCompanyTypePTGandaSegarArum" into "fieldTipeCompany"
    And User click "btnAddProduct"
    And User wait for 3 seconds
    And User click "searchBarProduct"
    And User type "**Agarasa Melon 10g - Inner Box" into "searchBarProduct"
    And User wait for 1 seconds
    And User click "btnAddProductList"
    And User wait for 3 seconds
    And User click "btnSelectedProductModal"
    And User wait for 3 seconds
    And User click "fieldQtyProduct"
    And User wait for 3 seconds
    And User type "0" into "fieldQtyProduct"
    And User wait for 3 seconds
    And User click "btnAddProductModal"
    And User wait for 3 seconds
    And User click "btnCreateTransfer"
    And User wait for 3 seconds
    And User click "btnSubmitApproval"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User click "btnApprove"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User get "transferID"
    And User click "navMenuLogistic" in global page
    And User click "menuOutgoingTransfer" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "filterPeriode"
    And User click "periodeToday" into "filterPeriode"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarOutgoingTransfer"
    And User type transferID into "searchBarOutgoingTransfer"
    And User wait for 5 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnReadyChooseVendor"
    And User click "btnChangeStatusDeliver"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnChooseVendor"
    And User wait for 3 seconds
    And User click "selectGroupVendor"
    And User wait for 3 seconds
    And User type "inhouse motoris" into "selectGroupVendor"
    And User wait for 3 seconds
    And User click "selectDriver"
    And User wait for 3 seconds
    And User type "afasdda" into "selectDriver"
    And User wait for 3 seconds
    And User click "selectPlateNo"
    And User wait for 3 seconds
    And User type "84754511" into "selectPlateNo"
    And User wait for 3 seconds
    And User click "btnAssign"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnDelivered"
    And User click "btnChangeStatusDeliver"
    And User wait for 20 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuIncomingGoods" in "navMenuLogistic"
    And User click "tabTransferStock"
    And User click "filterWarehouseTo2"
    And User click "warehouseAlohaRTP" into "filterWarehouseTo2"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarIncomingGoods"
    And User type transferID into "searchBarIncomingGoods"
    And User wait for 5 seconds
    And User click "btnInputIncoming"
    And User click "uploadSuratJalan"
    And User input image into "uploadSuratJalan"
    And User wait for 5 seconds
    And User click "inputQtyIncoming"
    And User type "10" into "inputQtyIncoming"
    And User click "btnSubmitIncoming"
    And User wait for 3 seconds
    And User get "qtyIncoming"
    And User click "navMenuStock" in global page
    And User click "InventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnFilterWarehouseInventory"
    And User click "warehouseAlohaRTP" in "btnFilterWarehouseInventory"
    And User wait for 3 seconds
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "**Agarasa Melon 10g - Inner Box" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisAfter"
    And User wait for 3 seconds
    Then the incoming product should be added to qty unreleased

    @gudang-rtp-ke-gudang-regular
    Scenario: Transfer goods dari gudang rtp (Aloha-RTP) ke gudang regular (Aloha)
    Given api user login
    When open dashboard superapp
    And User click "navMenuStock" in global page
    And User click "menuInventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnFilterWarehouseInventory"
    And User click "warehouseAloha" in "btnFilterWarehouseInventory"
    And User wait for 3 seconds
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "**Agarasa Melon 10g - Inner Box" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisBefore"
    And User wait for 3 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuTransferGoods" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "btnCreateTransferGoods"
    And User click "fieldWarehouseFrom"
    And User click "optWarehouseAlohaRTPFrom" into "fieldWarehouseFrom"
    And User click "fieldWarehouseTo"
    And User click "optWarehouseAlohaTo" into "fieldWarehouseTo"
    And User wait for 3 seconds
    And User click "btnAddProduct"
    And User wait for 3 seconds
    And User click "searchBarProduct"
    And User type "**Agarasa Melon 10g - Inner Box" into "searchBarProduct"
    And User wait for 1 seconds
    And User click "btnAddProductList"
    And User wait for 3 seconds
    And User click "btnSelectedProductModal"
    And User wait for 3 seconds
    And User click "fieldQtyProduct"
    And User wait for 3 seconds
    And User type "0" into "fieldQtyProduct"
    And User wait for 3 seconds
    And User click "btnAddProductModal"
    And User wait for 3 seconds
    And User click "btnCreateTransfer"
    And User wait for 3 seconds
    And User click "filterWarehouseFrom"
    And User click "warehouseAlohaRTP" into "filterWarehouseFrom"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSubmitApproval"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User click "btnApprove"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User get "transferID"
    And User click "navMenuLogistic" in global page
    And User click "menuOutgoingTransfer" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "filterWarehouseFrom"
    And User click "warehouseAlohaRTP" into "filterWarehouseFrom"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "filterPeriode"
    And User click "periodeToday" into "filterPeriode"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarOutgoingTransfer"
    And User type transferID into "searchBarOutgoingTransfer"
    And User wait for 5 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnReadyChooseVendor"
    And User click "btnChangeStatusDeliver"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnChooseVendor"
    And User wait for 3 seconds
    And User click "selectGroupVendor"
    And User wait for 3 seconds
    And User type "inhouse motoris" into "selectGroupVendor"
    And User wait for 3 seconds
    And User click "selectDriver"
    And User wait for 3 seconds
    And User type "afasdda" into "selectDriver"
    And User wait for 3 seconds
    And User click "selectPlateNo"
    And User wait for 3 seconds
    And User type "84754511" into "selectPlateNo"
    And User wait for 3 seconds
    And User click "btnAssign"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnDelivered"
    And User click "btnChangeStatusDeliver"
    And User wait for 20 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuIncomingGoods" in "navMenuLogistic"
    And User click "tabTransferStock"
    And User click "filterWarehouseFrom2"
    And User click "warehouseAlohaRTP" into "filterWarehouseFrom2"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarIncomingGoods"
    And User type transferID into "searchBarIncomingGoods"
    And User wait for 5 seconds
    And User click "btnInputIncoming"
    And User click "uploadSuratJalan"
    And User input image into "uploadSuratJalan"
    And User wait for 5 seconds
    And User click "inputQtyIncoming"
    And User type "10" into "inputQtyIncoming"
    And User click "btnSubmitIncoming"
    And User wait for 3 seconds
    And User get "qtyIncoming"
    And User click "navMenuStock" in global page
    And User click "InventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "**Agarasa Melon 10g - Inner Box" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisAfter"
    And User wait for 3 seconds
    Then the incoming product should be added to qty unreleased

    @gudang-rtp-ke-gudang-rtp
    Scenario: Transfer goods dari gudang rtp (Aloha-RTP) ke gudang rtp (Aloha Virtual Consignment)
    Given api user login
    When open dashboard superapp
    And User click "navMenuStock" in global page
    And User click "menuInventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnFilterWarehouseInventory"
    And User click "warehouseVirtualConsignment" in "btnFilterWarehouseInventory"
    And User wait for 3 seconds
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "**Agarasa Vanilla 10g" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisBefore"
    And User wait for 3 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuTransferGoods" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "btnCreateTransferGoods"
    And User click "fieldWarehouseFrom"
    And User click "optWarehouseAlohaRTPFrom" into "fieldWarehouseFrom"
    And User click "fieldWarehouseTo"
    And User click "optWarehouseVirtualConsignment" into "fieldWarehouseTo"
    And User wait for 45 seconds
    And User click "fieldCompanyType"
    And User click "optCompanyTypePTPutraAbyudaya" into "fieldTipeCompany"
    And User click "btnAddProduct"
    And User wait for 3 seconds
    And User click "searchBarProduct"
    And User type "**Agarasa Vanilla 10g" into "searchBarProduct"
    And User wait for 1 seconds
    And User click "btnAddProductList"
    And User wait for 3 seconds
    And User click "btnSelectedProductModal"
    And User wait for 3 seconds
    And User click "fieldQtyProduct"
    And User wait for 3 seconds
    And User type "0" into "fieldQtyProduct"
    And User wait for 3 seconds
    And User click "btnAddProductModal"
    And User wait for 3 seconds
    And User click "btnCreateTransfer"
    And User wait for 3 seconds
    And User click "filterWarehouseFrom"
    And User click "warehouseAlohaRTP" into "filterWarehouseFrom"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSubmitApproval"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User click "btnApprove"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User get "transferID"
    And User click "navMenuLogistic" in global page
    And User click "menuOutgoingTransfer" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "filterWarehouseFrom"
    And User click "warehouseAlohaRTP" into "filterWarehouseFrom"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "filterPeriode"
    And User click "periodeToday" into "filterPeriode"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarOutgoingTransfer"
    And User type transferID into "searchBarOutgoingTransfer"
    And User wait for 5 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnReadyChooseVendor"
    And User click "btnChangeStatusDeliver"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnChooseVendor"
    And User wait for 3 seconds
    And User click "selectGroupVendor"
    And User wait for 3 seconds
    And User type "inhouse motoris" into "selectGroupVendor"
    And User wait for 3 seconds
    And User click "selectDriver"
    And User wait for 3 seconds
    And User type "afasdda" into "selectDriver"
    And User wait for 3 seconds
    And User click "selectPlateNo"
    And User wait for 3 seconds
    And User type "84754511" into "selectPlateNo"
    And User wait for 3 seconds
    And User click "btnAssign"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnDelivered"
    And User click "btnChangeStatusDeliver"
    And User wait for 20 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuIncomingGoods" in "navMenuLogistic"
    And User click "tabTransferStock"
    And User click "filterWarehouseFrom2"
    And User click "warehouseAlohaRTP" into "filterWarehouseFrom2"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "filterWarehouseTo2"
    And User click "warehouseVirtualConsignment" into "filterWarehouseTo2"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds    
    And User click "btnSearch"
    And User click "searchBarIncomingGoods"
    And User type transferID into "searchBarIncomingGoods"
    And User wait for 5 seconds
    And User click "btnInputIncoming"
    And User click "uploadSuratJalan"
    And User input image into "uploadSuratJalan"
    And User wait for 5 seconds
    And User click "inputQtyIncoming"
    And User type "10" into "inputQtyIncoming"
    And User click "btnSubmitIncoming"
    And User wait for 3 seconds
    And User get "qtyIncoming"
    And User click "navMenuStock" in global page
    And User click "InventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnFilterWarehouseInventory"
    And User click "warehouseVirtualConsignment" in "btnFilterWarehouseInventory"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "**Agarasa Vanilla 10g" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisAfter"
    And User wait for 3 seconds
    Then the incoming product should be added to qty unreleased

    @gudang-regular-ke-gudang-rtp-ke-gudang-regular
    Scenario: Transfer goods dari gudang regular (Aloha) ke gudang rtp (Aloha-RTP) ke gudang regular (Aloha)
    Given api user login
    When open dashboard superapp
    And User click "navMenuStock" in global page
    And User click "menuInventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnFilterWarehouseInventory"
    And User click "warehouseAlohaRTP" in "btnFilterWarehouseInventory"
    And User wait for 3 seconds
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "**Agarasa Melon 10g - Inner Box" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisBefore"
    And User wait for 3 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuTransferGoods" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "btnCreateTransferGoods"
    And User click "fieldWarehouseFrom"
    And User click "optWarehouseAlohaFrom" into "fieldWarehouseFrom"
    And User click "fieldWarehouseTo"
    And User click "optWarehouseAlohaRTPTo" into "fieldWarehouseTo"
    And User wait for 3 seconds
    And User click "fieldCompanyType"
    And User click "optCompanyTypePTGandaSegarArum" into "fieldTipeCompany"
    And User wait for 3 seconds
    And User click "btnAddProduct"
    And User wait for 3 seconds
    And User click "searchBarProduct"
    And User type "**Agarasa Melon 10g - Inner Box" into "searchBarProduct"
    And User wait for 1 seconds
    And User click "btnAddProductList"
    And User wait for 3 seconds
    And User click "btnSelectedProductModal"
    And User wait for 3 seconds
    And User click "fieldQtyProduct"
    And User wait for 3 seconds
    And User type "0" into "fieldQtyProduct"
    And User wait for 3 seconds
    And User click "btnAddProductModal"
    And User wait for 3 seconds
    And User click "btnCreateTransfer"
    And User wait for 3 seconds
    And User click "btnSubmitApproval"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User click "btnApprove"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User get "transferID"
    And User click "navMenuLogistic" in global page
    And User click "menuOutgoingTransfer" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "filterPeriode"
    And User click "periodeToday" into "filterPeriode"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarOutgoingTransfer"
    And User type transferID into "searchBarOutgoingTransfer"
    And User wait for 5 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnReadyChooseVendor"
    And User click "btnChangeStatusDeliver"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnChooseVendor"
    And User wait for 3 seconds
    And User click "selectGroupVendor"
    And User wait for 3 seconds
    And User type "inhouse motoris" into "selectGroupVendor"
    And User wait for 3 seconds
    And User click "selectDriver"
    And User wait for 3 seconds
    And User type "afasdda" into "selectDriver"
    And User wait for 3 seconds
    And User click "selectPlateNo"
    And User wait for 3 seconds
    And User type "84754511" into "selectPlateNo"
    And User wait for 3 seconds
    And User click "btnAssign"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnDelivered"
    And User click "btnChangeStatusDeliver"
    And User wait for 20 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuIncomingGoods" in "navMenuLogistic"
    And User click "tabTransferStock"
    And User click "filterWarehouseTo2"
    And User click "warehouseAlohaRTP" into "filterWarehouseTo2"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarIncomingGoods"
    And User type transferID into "searchBarIncomingGoods"
    And User wait for 5 seconds
    And User click "btnInputIncoming"
    And User click "uploadSuratJalan"
    And User input image into "uploadSuratJalan"
    And User wait for 5 seconds
    And User click "inputQtyIncoming"
    And User type "100" into "inputQtyIncoming"
    And User click "btnSubmitIncoming"
    And User wait for 3 seconds
    And User get "qtyIncoming"
    And User click "navMenuStock" in global page
    And User click "InventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnFilterWarehouseInventory"
    And User click "warehouseAlohaRTP" in "btnFilterWarehouseInventory"
    And User wait for 3 seconds
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "**Agarasa Melon 10g - Inner Box" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisAfter"
    And User wait for 3 seconds
    Then the incoming product should be added to qty unreleased
    And User wait for 3 seconds
    And User refresh the page
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "**Agarasa Melon 10g - Inner Box" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisBefore"
    And User wait for 3 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuTransferGoods" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "btnCreateTransferGoods"
    And User click "fieldWarehouseFrom"
    And User click "optWarehouseAlohaRTPFrom" into "fieldWarehouseFrom"
    And User click "fieldWarehouseTo"
    And User click "optWarehouseAlohaTo" into "fieldWarehouseTo"
    And User wait for 3 seconds
    And User click "btnAddProduct"
    And User wait for 3 seconds
    And User click "searchBarProduct"
    And User type "**Agarasa Melon 10g - Inner Box" into "searchBarProduct"
    And User wait for 1 seconds
    And User click "btnAddProductList"
    And User wait for 3 seconds
    And User click "btnSelectedProductModal"
    And User wait for 3 seconds
    And User click "fieldQtyProduct"
    And User wait for 3 seconds
    And User type "0" into "fieldQtyProduct"
    And User wait for 3 seconds
    And User click "btnAddProductModal"
    And User wait for 3 seconds
    And User click "btnCreateTransfer"
    And User wait for 3 seconds
    And User click "filterWarehouseFrom"
    And User click "warehouseAlohaRTP" into "filterWarehouseFrom"
    And User click "btnTerapkanFilterWarehouse"
    And User click "btnSubmitApproval"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User click "btnApprove"
    And User click "btnChangeStatus"
    And User wait for 3 seconds
    And User get "transferID"
    And User click "navMenuLogistic" in global page
    And User click "menuOutgoingTransfer" in "navMenuLogistic"
    And User wait for 3 seconds
    And User click "filterWarehouseFrom"
    And User click "warehouseAlohaRTP" into "filterWarehouseFrom"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "filterPeriode"
    And User click "periodeToday" into "filterPeriode"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarOutgoingTransfer"
    And User type transferID into "searchBarOutgoingTransfer"
    And User wait for 5 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnReadyChooseVendor"
    And User click "btnChangeStatusDeliver"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnChooseVendor"
    And User wait for 3 seconds
    And User click "selectGroupVendor"
    And User wait for 3 seconds
    And User type "inhouse motoris" into "selectGroupVendor"
    And User wait for 3 seconds
    And User click "selectDriver"
    And User wait for 3 seconds
    And User type "afasdda" into "selectDriver"
    And User wait for 3 seconds
    And User click "selectPlateNo"
    And User wait for 3 seconds
    And User type "84754511" into "selectPlateNo"
    And User wait for 3 seconds
    And User click "btnAssign"
    And User wait for 3 seconds
    And User click "checkBoxOutgoingTransfer"
    And User wait for 3 seconds
    And User click "btnDelivered"
    And User click "btnChangeStatusDeliver"
    And User wait for 20 seconds
    And User click "navMenuLogistic" in global page
    And User click "menuIncomingGoods" in "navMenuLogistic"
    And User click "tabTransferStock"
    And User click "filterWarehouseFrom2"
    And User click "warehouseAlohaRTP" into "filterWarehouseFrom2"
    And User click "btnTerapkanFilterWarehouse"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarIncomingGoods"
    And User type transferID into "searchBarIncomingGoods"
    And User wait for 5 seconds
    And User click "btnInputIncoming"
    And User click "uploadSuratJalan"
    And User input image into "uploadSuratJalan"
    And User wait for 5 seconds
    And User click "inputQtyIncoming"
    And User type "10" into "inputQtyIncoming"
    And User click "btnSubmitIncoming"
    And User wait for 3 seconds
    And User get "qtyIncoming"
    And User click "navMenuStock" in global page
    And User click "InventoryV3" in "navMenuStock"
    And User wait for 3 seconds
    And User click "btnSearch"
    And User click "searchBarInventory"
    And User input "**Agarasa Melon 10g - Inner Box" into "searchBarInventory"
    And User click "btnCari"
    And User wait for 5 seconds
    And User click "btnExpandStokGudang"
    And User wait for 3 seconds
    And User get "qtyStokBlmRilisAfter"
    And User wait for 3 seconds
    Then the incoming product should be added to qty unreleased