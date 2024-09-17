@deeplink
Feature: Deeplink

    @create
    Scenario Outline: User berhasil membuat deeplink
    Given I send login url
    When I login with credential
    Then I see usernameDisplay
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuCMSV4" inside "navMenuMarketing"
    And User click "menuDeeplink" inside "menuCMSV4"
    And User click "btnBuatDeeplink" inside "menuPages"
    And User input "Test QA 17 Sep 2024" into "inputNamaDeeplink"
    And User input "google.com" into "inputLinkDeeplink"
    And User click "btnSimpanDeeplink"
    And User wait for 5 seconds
    Then User able to see "Data Tersimpan!" message verification
    And User wait for 10 seconds 

    @required-field-is-empty
    Scenario: User mengisi kolom nama deeplink kosong
    And User wait for 5 seconds
    And User click "navMenuMarketing" in global page
    And User click "menuCMSV4" inside "navMenuMarketing"
    And User click "menuDeeplink" inside "menuCMSV4"
    And User click "btnBuatDeeplink" inside "menuPages"
    And User click "btnSimpanDeeplink"
    Then User able to see alert
    And User wait for 5 seconds