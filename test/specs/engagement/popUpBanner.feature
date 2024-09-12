@popupbanner
Feature: Create-popup-banner

    Background: User login into the system
        Given I send login url
        When I login with credential
        # Then I see usernameDisplay

    @createPopUpBanner
    Scenario Outline: Memastikan user dapat membuat pop-up banner baru
        And User click "navMenuMarketing" in global page
        And User click "menuCMSV4" inside "navMenuMarketing"
        And User click "menuPopUpBanner" inside "menuCMSV4"
        And User wait for 5 seconds
        Given User click "btnBuat" inside "menuPopUpBanner"
        And User wait for 3 seconds
        And User input "<namaBanner>" into "fieldNama"
        And User click "pickSumber"
        And User click "pickSumberAplikasi" inside "pickSumber"
        And User click "pickSlot"
        And User click "pickSlotPopup" inside "pickSlot"
        And User click "startDate"
        And User click "selectStartDate" inside "startDate"
        And User wait for 1 seconds
        And User click "startTime"
        And User click "selectStartTime" inside "startTime"
        And User click "endDate"
        And User click "selectEndDate" inside "endDate"
        And User wait for 1 seconds
        And User click "endTime"
        And User click "selectEndTime" inside "endTime"
        And User input "<test masukkan konten>" into "contentTextBox"
        And User click "pickCustomerType"
        And User click "pickSemuaCustomer" inside "pickCustomerType"
        And User click "pickGudang"
        And User click "pickSemuaGudang" inside "pickGudang"
        And User click "pickArea"
        And User click "pickSemuaArea" inside "pickArea"
        And User click "pickBannerImage"
        # And User select image inside "pickBannerImage"
        
