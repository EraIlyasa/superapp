@voucher
Feature: Create Voucher
    @create-voucher-discount-all-product
    Scenario Outline: User berhasil membuat voucher discount all product
    When api user login
    When open dashboard superapp
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuVoucher" inside "navMenuMarketing"
    And User wait for 10 seconds
    And User click "btnAddVoucher"
    And User click "btnCreateVoucher"
    And User wait for 10 seconds
    And User click "inputVoucherBannerImage"
    And User select image inside "inputVoucherBannerImage"
    And User click "selectVoucherDiscount"
    And User click "inputVoucherName"
    And User type "Voucher all product rj" into "inputVoucherName"
    And User click "platformSalesForce"
    And User click "platformDashboard"
    And User click "platformApps"
    And User click "inputDiscountNominal"
    And User type "20000" into "inputDiscountNominal"
    And User click "inputMinimumOrder"
    And User type "100000" into "inputMinimumOrder"
    And User click "selectProductCondition"
    And User click "optProductConditionAllProduct"
    And User click "selectVoucherStartDate"
    And User click "selectVoucherStartDateToday" in "selectVoucherStartDate"
    And User click "selectVoucherEndDate"
    And User click "selectVoucherEndDateSpecific" in "selectVoucherEndDate"
    And User click "selectUserType"
    And User click "optTypeAllUser" in "selectUserType"
    And User click "inputVoucherQty"
    And User type "00" into "inputVoucherQty"
    And User click "selectWarehouse"
    And User click "optWarehouse"
    And User type enter button
    And User wait for 5 seconds
    And User click "chooseArea"
    And User click "optArea"
    And User type enter button
    And User click "inputVoucherTitle"
    And User type "Voucher testing rj" into "inputVoucherTitle"
    And User click "inputVoucherDescription"
    And User type "testing" into "inputVoucherDescription"
    And User click "tabAboutVoucher"
    And User click "inputAboutVoucher"
    And User type "About voucher testing rj" into "inputAboutVoucher"
    And User click "tabTermsAndConditions"
    And User click "inputTnC"
    And User type "testing" into "inputTnC"
    And User click "tabHowToUse"
    And User click "inputHowToUse"
    And User type "testing" into "inputHowToUse"
    And User click "btnSubmitVoucher"
    # Then User should see "Voucher Create Successfully"
    And User wait for 10 seconds
    And User click "btnPublishVoucher"
    And User wait for 5 seconds
    And User click "btnConfirmPublishVoucher"
    And User wait for 5 seconds

    @create-voucher-discount-all-product-except
    Scenario Outline: User berhasil membuat voucher discount all product except abc kecap manis
    When api user login
    When open dashboard superapp
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuVoucher" inside "navMenuMarketing"
    And User click "btnAddVoucher"
    And User click "btnCreateVoucher"
    And User click "inputVoucherBannerImage"
    And User select image inside "inputVoucherBannerImage"
    And User click "selectVoucherDiscount"
    And User click "inputVoucherName"
    And User type "Voucher all product except rj" into "inputVoucherName"
    And User click "platformSalesForce"
    And User click "platformDashboard"
    And User click "platformApps"
    And User click "inputDiscountNominal"
    And User type "20000" into "inputDiscountNominal"
    And User click "inputMinimumOrder"
    And User type "100000" into "inputMinimumOrder"
    And User click "selectProductCondition"
    And User click "optProductConditionAllProductExcept"
    And User click "btnAddProductVoucher"
    And User wait for 5 seconds
    And User click "searchProductVoucher"
    And User type "ABC Kecap Manis 135ml" into "searchProductVoucher"
    And User wait for 3 seconds
    And User click "optBotol"
    And User wait for 3 seconds
    And User click "btnAddProductModal"
    And User click "selectVoucherStartDate"
    And User click "selectVoucherStartDateToday" in "selectVoucherStartDate"
    And User click "voucherAlwaysOn"
    # And User click "selectVoucherEndDate"
    # And User click "selectVoucherEndDateSpecific" in "selectVoucherEndDate"
    And User click "selectUserType"
    And User click "optTypeAllUser" in "selectUserType"
    And User click "inputVoucherQty"
    And User type "00" into "inputVoucherQty"
    And User click "selectWarehouse"
    And User click "optWarehouse"
    And User type enter button
    And User wait for 5 seconds
    And User click "chooseArea"
    And User click "optArea"
    And User type enter button
    And User click "inputVoucherTitle"
    And User type "Voucher testing rj" into "inputVoucherTitle"
    And User click "inputVoucherDescription"
    And User type "testing" into "inputVoucherDescription"
    And User click "tabAboutVoucher"
    And User click "inputAboutVoucher"
    And User type "About voucher testing rj" into "inputAboutVoucher"
    And User click "tabTermsAndConditions"
    And User click "inputTnC"
    And User type "testing" into "inputTnC"
    And User click "tabHowToUse"
    And User click "inputHowToUse"
    And User type "testing" into "inputHowToUse"
    And User click "btnSubmitVoucher"
    # Then User should see "Voucher berhasil ditambahkan"
    And User wait for 10 seconds
    And User click "btnPublishVoucher"
    And User wait for 5 seconds
    And User click "btnConfirmPublishVoucher"
    And User wait for 5 seconds
    And User select voucher code and add to csv file

    @create-voucher-discount-all-product-except-special
    Scenario Outline: User berhasil membuat voucher discound all product except special
    When api user login
    When open dashboard superapp
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuVoucher" inside "navMenuMarketing"
    And User click "btnAddVoucher"
    And User click "btnCreateVoucher"
    And User click "inputVoucherBannerImage"
    And User select image inside "inputVoucherBannerImage"
    And User click "selectVoucherDiscount"
    And User click "inputVoucherName"
    And User type "Voucher all product except special rj" into "inputVoucherName"
    And User click "platformSalesForce"
    And User click "platformDashboard"
    And User click "platformApps"
    And User click "inputDiscountNominal"
    And User type "20000" into "inputDiscountNominal"
    And User click "inputMinimumOrder"
    And User type "100000" into "inputMinimumOrder"
    And User click "selectProductCondition"
    And User click "optProductConditionAllProductExceptSpecial"
    And User click "btnAddProductVoucher"
    And User wait for 5 seconds
    And User click "searchProductVoucher"
    And User type "ABC Kecap Manis 135ml" into "searchProductVoucher"
    And User click "optBotol"
    And User click "btnAddProductModal"
    And User click "selectVoucherStartDate"
    And User click "selectVoucherStartDateToday" in "selectVoucherStartDate"
    And User click "voucherAlwaysOn"
    # And User click "selectVoucherEndDate"
    # And User click "selectVoucherEndDateSpecific" in "selectVoucherEndDate"
    And User click "selectUserType"
    And User click "optTypeAllUser" in "selectUserType"
    And User click "inputVoucherQty"
    And User type "00" into "inputVoucherQty"
    And User click "selectWarehouse"
    And User click "optWarehouse"
    And User type enter button
    And User wait for 5 seconds
    And User click "chooseArea"
    And User click "optArea"
    And User type enter button
    And User click "inputVoucherTitle"
    And User type "Voucher testing rj" into "inputVoucherTitle"
    And User click "inputVoucherDescription"
    And User type "testing" into "inputVoucherDescription"
    And User click "tabAboutVoucher"
    And User click "inputAboutVoucher"
    And User type "About voucher testing rj" into "inputAboutVoucher"
    And User click "tabTermsAndConditions"
    And User click "inputTnC"
    And User type "testing" into "inputTnC"
    And User click "tabHowToUse"
    And User click "inputHowToUse"
    And User type "testing" into "inputHowToUse"
    And User click "btnSubmitVoucher"
    # Then User should see "Voucher berhasil ditambahkan"
    And User wait for 10 seconds
    And User click "btnPublishVoucher"
    And User wait for 5 seconds
    And User click "btnConfirmPublishVoucher"
    And User wait for 5 seconds
    And User select voucher code and add to csv file

    @create-voucher-discount-all-product-except-cigarette
    Scenario Outline: User berhasil membuat voucher discount all product except cigarette
    When api user login
    When open dashboard superapp
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuVoucher" inside "navMenuMarketing"
    And User wait for 10 seconds
    And User click "btnAddVoucher"
    And User click "btnCreateVoucher"
    And User wait for 10 seconds
    And User click "inputVoucherBannerImage"
    And User select image inside "inputVoucherBannerImage"
    And User click "selectVoucherDiscount"
    And User click "inputVoucherName"
    And User type "Voucher all product except cigarette rj" into "inputVoucherName"
    And User click "platformSalesForce"
    And User click "platformDashboard"
    And User click "platformApps"
    And User click "inputDiscountNominal"
    And User type "20000" into "inputDiscountNominal"
    And User click "inputMinimumOrder"
    And User type "100000" into "inputMinimumOrder"
    And User click "selectProductCondition"
    And User click "optProductConditionAllProductExceptCigarette"
    And User click "selectVoucherStartDate"
    And User click "selectVoucherStartDateToday" in "selectVoucherStartDate"
    And User click "voucherAlwaysOn"
    # And User click "selectVoucherEndDate"
    # And User click "selectVoucherEndDateSpecific" in "selectVoucherEndDate"
    And User click "selectUserType"
    And User click "optTypeAllUser" in "selectUserType"
    And User click "inputVoucherQty"
    And User type "00" into "inputVoucherQty"
    And User click "selectWarehouse"
    And User click "optWarehouse"
    And User type enter button
    And User wait for 5 seconds
    And User click "chooseArea"
    And User click "optArea"
    And User type enter button
    And User click "inputVoucherTitle"
    And User type "Voucher testing rj" into "inputVoucherTitle"
    And User click "inputVoucherDescription"
    And User type "testing" into "inputVoucherDescription"
    And User click "tabAboutVoucher"
    And User click "inputAboutVoucher"
    And User type "About voucher testing rj" into "inputAboutVoucher"
    And User click "tabTermsAndConditions"
    And User click "inputTnC"
    And User type "testing" into "inputTnC"
    And User click "tabHowToUse"
    And User click "inputHowToUse"
    And User type "testing" into "inputHowToUse"
    And User click "btnSubmitVoucher"
    # Then User should see "Voucher Create Successfully"
    And User wait for 10 seconds
    And User click "btnPublishVoucher"
    And User wait for 5 seconds
    And User click "btnConfirmPublishVoucher"
    And User wait for 5 seconds
    And User select voucher code and add to csv file

    @create-voucher-discount-and
    Scenario Outline: User berhasil membuat voucher discount and
    When api user login
    When open dashboard superapp
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuVoucher" inside "navMenuMarketing"
    And User click "btnAddVoucher"
    And User click "btnCreateVoucher"
    And User click "inputVoucherBannerImage"
    And User select image inside "inputVoucherBannerImage"
    And User click "selectVoucherDiscount"
    And User click "inputVoucherName"
    And User type "Voucher and rj" into "inputVoucherName"
    And User click "platformSalesForce"
    And User click "platformDashboard"
    And User click "platformApps"
    And User click "inputDiscountNominal"
    And User type "20000" into "inputDiscountNominal"
    And User click "inputMinimumOrder"
    And User type "100000" into "inputMinimumOrder"
    And User click "selectProductCondition"
    And User click "optProductConditionAnd"
    And User click "btnAddProductVoucher"
    And User wait for 5 seconds
    And User click "searchProductVoucher"
    And User type "ABC Kecap Manis 135ml" into "searchProductVoucher"
    And User click "optBotol"
    And User wait for 5 seconds
    And User click "clearSearchProductVoucher"
    And User click "searchProductVoucher"
    And User type "ABC Kecap Manis 520ml" into "searchProductVoucher"
    And User click "optBotol"
    And User wait for 5 seconds
    And User click "btnAddProductModal"
    And User click "selectVoucherStartDate"
    And User click "selectVoucherStartDateToday" in "selectVoucherStartDate"
    And User click "voucherAlwaysOn"
    # And User click "selectVoucherEndDate"
    # And User click "selectVoucherEndDateSpecific" in "selectVoucherEndDate"
    And User click "selectUserType"
    And User click "optTypeAllUser" in "selectUserType"
    And User click "inputVoucherQty"
    And User type "00" into "inputVoucherQty"
    And User click "selectWarehouse"
    And User click "optWarehouse"
    And User type enter button
    And User wait for 5 seconds
    And User click "chooseArea"
    And User click "optArea"
    And User type enter button
    And User click "inputVoucherTitle"
    And User type "Voucher testing rj" into "inputVoucherTitle"
    And User click "inputVoucherDescription"
    And User type "testing" into "inputVoucherDescription"
    And User click "tabAboutVoucher"
    And User click "inputAboutVoucher"
    And User type "About voucher testing rj" into "inputAboutVoucher"
    And User click "tabTermsAndConditions"
    And User click "inputTnC"
    And User type "testing" into "inputTnC"
    And User click "tabHowToUse"
    And User click "inputHowToUse"
    And User type "testing" into "inputHowToUse"
    And User click "btnSubmitVoucher"
    # Then User should see "Voucher berhasil ditambahkan"
    And User wait for 10 seconds
    And User click "btnPublishVoucher"
    And User wait for 5 seconds
    And User click "btnConfirmPublishVoucher"
    And User wait for 5 seconds
    And User select voucher code and add to csv file

    @create-voucher-discount-or
    Scenario Outline: User berhasil membuat voucher discount or
    When api user login
    When open dashboard superapp
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuVoucher" inside "navMenuMarketing"
    And User click "btnAddVoucher"
    And User click "btnCreateVoucher"
    And User click "inputVoucherBannerImage"
    And User select image inside "inputVoucherBannerImage"
    And User click "selectVoucherDiscount"
    And User click "inputVoucherName"
    And User type "Voucher or rj" into "inputVoucherName"
    And User click "platformSalesForce"
    And User click "platformDashboard"
    And User click "platformApps"
    And User click "inputDiscountNominal"
    And User type "20000" into "inputDiscountNominal"
    And User click "inputMinimumOrder"
    And User type "100000" into "inputMinimumOrder"
    And User click "selectProductCondition"
    And User click "optProductConditionOr"
    And User click "btnAddProductVoucher"
    And User wait for 5 seconds
    And User click "searchProductVoucher"
    And User type "ABC Kecap Manis 135ml" into "searchProductVoucher"
    And User click "optBotol"
    And User wait for 5 seconds
    And User click "clearSearchProductVoucher"
    And User click "searchProductVoucher"
    And User type "ABC Kecap Manis 520ml" into "searchProductVoucher"
    And User wait for 3 seconds
    And User click "optBotol"
    And User wait for 5 seconds
    And User click "btnAddProductModal"
    And User click "selectVoucherStartDate"
    And User click "selectVoucherStartDateToday" in "selectVoucherStartDate"
    And User click "voucherAlwaysOn"
    # And User click "selectVoucherEndDate"
    # And User click "selectVoucherEndDateSpecific" in "selectVoucherEndDate"
    And User click "selectUserType"
    And User click "optTypeAllUser" in "selectUserType"
    And User click "inputVoucherQty"
    And User type "00" into "inputVoucherQty"
    And User click "selectWarehouse"
    And User click "optWarehouse"
    And User type enter button
    And User wait for 5 seconds
    And User click "chooseArea"
    And User click "optArea"
    And User type enter button
    And User click "inputVoucherTitle"
    And User type "Voucher testing rj" into "inputVoucherTitle"
    And User click "inputVoucherDescription"
    And User type "testing" into "inputVoucherDescription"
    And User click "tabAboutVoucher"
    And User click "inputAboutVoucher"
    And User type "About voucher testing rj" into "inputAboutVoucher"
    And User click "tabTermsAndConditions"
    And User click "inputTnC"
    And User type "testing" into "inputTnC"
    And User click "tabHowToUse"
    And User click "inputHowToUse"
    And User type "testing" into "inputHowToUse"
    And User click "btnSubmitVoucher"
    # Then User should see "Voucher berhasil ditambahkan"
    And User wait for 10 seconds
    And User click "btnPublishVoucher"
    And User wait for 5 seconds
    And User click "btnConfirmPublishVoucher"
    And User wait for 5 seconds
    And User select voucher code and add to csv file

    @create-voucher-discount-and-special
    Scenario Outline: User berhasil membuat voucher discount and special
    When api user login
    When open dashboard superapp
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuVoucher" inside "navMenuMarketing"
    And User click "btnAddVoucher"
    And User click "btnCreateVoucher"
    And User click "inputVoucherBannerImage"
    And User select image inside "inputVoucherBannerImage"
    And User click "selectVoucherDiscount"
    And User click "inputVoucherName"
    And User type "Voucher and special rj" into "inputVoucherName"
    And User click "platformSalesForce"
    And User click "platformDashboard"
    And User click "platformApps"
    And User click "inputDiscountNominal"
    And User type "20000" into "inputDiscountNominal"
    And User click "inputMinimumOrder"
    And User type "100000" into "inputMinimumOrder"
    And User click "selectProductCondition"
    And User click "optProductConditionAndSpecial"
    And User click "btnAddProductVoucher"
    And User wait for 5 seconds
    And User click "searchProductVoucher"
    And User type "ABC Kecap Manis 135ml" into "searchProductVoucher"
    And User click "optBotol"
    And User wait for 5 seconds
    And User click "clearSearchProductVoucher"
    And User click "searchProductVoucher"
    And User type "ABC Kecap Manis 520ml" into "searchProductVoucher"
    And User wait for 3 seconds
    And User click "optBotol"
    And User wait for 5 seconds
    And User click "btnAddProductModal"
    And User click "selectVoucherStartDate"
    And User click "selectVoucherStartDateToday" in "selectVoucherStartDate"
    And User click "voucherAlwaysOn"
    # And User click "selectVoucherEndDate"
    # And User click "selectVoucherEndDateSpecific" in "selectVoucherEndDate"
    And User click "selectUserType"
    And User click "optTypeAllUser" in "selectUserType"
    And User click "inputVoucherQty"
    And User type "00" into "inputVoucherQty"
    And User click "selectWarehouse"
    And User click "optWarehouse"
    And User type enter button
    And User wait for 5 seconds
    And User click "chooseArea"
    And User click "optArea"
    And User type enter button
    And User click "inputVoucherTitle"
    And User type "Voucher testing rj" into "inputVoucherTitle"
    And User click "inputVoucherDescription"
    And User type "testing" into "inputVoucherDescription"
    And User click "tabAboutVoucher"
    And User click "inputAboutVoucher"
    And User type "About voucher testing rj" into "inputAboutVoucher"
    And User click "tabTermsAndConditions"
    And User click "inputTnC"
    And User type "testing" into "inputTnC"
    And User click "tabHowToUse"
    And User click "inputHowToUse"
    And User type "testing" into "inputHowToUse"
    And User click "btnSubmitVoucher"
    # Then User should see "Voucher berhasil ditambahkan"
    And User wait for 10 seconds
    And User click "btnPublishVoucher"
    And User wait for 5 seconds
    And User click "btnConfirmPublishVoucher"
    And User wait for 5 seconds
    And User select voucher code and add to csv file

    @create-voucher-discount-or-special
    Scenario Outline: User berhasil membuat voucher discount or special
    When api user login
    When open dashboard superapp
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuVoucher" inside "navMenuMarketing"
    And User click "btnAddVoucher"
    And User click "btnCreateVoucher"
    And User click "inputVoucherBannerImage"
    And User select image inside "inputVoucherBannerImage"
    And User click "selectVoucherDiscount"
    And User click "inputVoucherName"
    And User type "Voucher or special rj" into "inputVoucherName"
    And User click "platformSalesForce"
    And User click "platformDashboard"
    And User click "platformApps"
    And User click "inputDiscountNominal"
    And User type "20000" into "inputDiscountNominal"
    And User click "inputMinimumOrder"
    And User type "100000" into "inputMinimumOrder"
    And User click "selectProductCondition"
    And User click "optProductConditionOrSpecial"
    And User click "btnAddProductVoucher"
    And User wait for 5 seconds
    And User click "searchProductVoucher"
    And User type "ABC Kecap Manis 135ml" into "searchProductVoucher"
    And User click "optBotol"
    And User wait for 5 seconds
    And User click "clearSearchProductVoucher"
    And User click "searchProductVoucher"
    And User type "ABC Kecap Manis 520ml" into "searchProductVoucher"
    And User wait for 3 seconds
    And User click "optBotol"
    And User wait for 5 seconds
    And User click "btnAddProductModal"
    And User click "selectVoucherStartDate"
    And User click "selectVoucherStartDateToday" in "selectVoucherStartDate"
    And User click "voucherAlwaysOn"
    # And User click "selectVoucherEndDate"
    # And User click "selectVoucherEndDateSpecific" in "selectVoucherEndDate"
    And User click "selectUserType"
    And User click "optTypeAllUser" in "selectUserType"
    And User click "inputVoucherQty"
    And User type "00" into "inputVoucherQty"
    And User click "selectWarehouse"
    And User click "optWarehouse"
    And User type enter button
    And User wait for 5 seconds
    And User click "chooseArea"
    And User click "optArea"
    And User type enter button
    And User click "inputVoucherTitle"
    And User type "Voucher testing rj" into "inputVoucherTitle"
    And User click "inputVoucherDescription"
    And User type "testing" into "inputVoucherDescription"
    And User click "tabAboutVoucher"
    And User click "inputAboutVoucher"
    And User type "About voucher testing rj" into "inputAboutVoucher"
    And User click "tabTermsAndConditions"
    And User click "inputTnC"
    And User type "testing" into "inputTnC"
    And User click "tabHowToUse"
    And User click "inputHowToUse"
    And User type "testing" into "inputHowToUse"
    And User click "btnSubmitVoucher"
    # Then User should see "Voucher berhasil ditambahkan"
    And User wait for 10 seconds
    And User click "btnPublishVoucher"
    And User wait for 5 seconds
    And User click "btnConfirmPublishVoucher"
    And User wait for 5 seconds
    And User select voucher code and add to csv file

