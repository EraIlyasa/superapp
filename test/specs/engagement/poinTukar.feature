@PoinTukar
Feature: Create-Poin Tukar

  Background: User login into the system
  #   Given I send login url
  #   When I login with credential
  #   Then I see usernameDisplay

  @PT-0001
  Scenario Outline: Memastikan dapat buat poin tukar baru dengan toggle All day aktif
    Given I send login url
    When I login with credential
    Then I see usernameDisplay
    And User click "navMenuMarketing" in global page
    And User click "menuPoinTukar" inside "navMenuMarketing"
    And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User upload image to "uploadImage" voucher detail
    And User click "fieldInputVoucherName"
    And User input "<voucherName>" into "fieldInputVoucherName"
    And User click "fieldInputVoucherPrefix"
    And User input "<voucherPrefix>" into "fieldInputVoucherPrefix"
    And User click "fieldInputDuration"
    And User input "<duration>"
    And User click "toggleAllDay"
    # And User click "fieldValidDay"
    # And User input "<validDay>" into "fieldValidDay"
    And User click "fieldcondition"
    And User click "getConditions" inside "fieldCondition"
    And User click "fieldProductCluster"
    And User get "getProductCluster" inside fieldProductCluster"
    # And User click "fieldDiscountBy"
    # And User click "optDiscountBy1" inside "fieldDiscountBy"
    And User click "fieldInputJumlahDiskon"
    And User input "<diskon>" inside "fieldInputJumlahDiskon"
    And User click "fieldInputJumlahTransaksi"
    And User input "<jumlahTransaksi>" inside "fieldInputJumlahTransaksi"
    And User click "fieldInputTitle"
    And User input "<title>" inside "fieldInputTitle"
    And User input "<description>" inside "fieldInputDesc"
    And User input "<description>" inside "fieldInputDescAboutVoucher"
    And User input "<description>" inside "fieldInputDescTC"
    And User input "<description>" inside "fieldInputDescH2U"
    And User wait for 5 seconds
    And User click "btnCreateVoucher" to create voucher
    Then User able to see "Data berhasil disimpan" message verification
    And User wait for 5 seconds
    # And User close the window

    Examples:
      | voucherName       | voucherPrefix | duration | title             | description     | jumlahTransaksi | diskon |
      | Automated testing | SUPERBB       |        2 | automated testing | Voucher Testing |         9500000 |  10000 |

  @PT-0002
  Scenario Outline: Memastikan tidak dapat buat poin tukar baru dengan button cancel
    # Given I send login url
    # When I login with credential
    # Then I see usernameDisplay
    And User click "navMenuMarketing" in global page
    And User click "menuPoinTukar" inside "navMenuMarketing"
    And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User upload image to "uploadImage" voucher detail
    And User click "fieldInputVoucherName"
    And User input "<voucherName>" into "fieldInputVoucherName"
    And User click "fieldInputVoucherPrefix"
    And User input "<voucherPrefix>" into "fieldInputVoucherPrefix"
    And User click "fieldInputDuration"
    And User input "<duration>"
    And User click "toggleAllDay"
    # And User click "fieldValidDay"
    # And User input "<validDay>" into "fieldValidDay"
    And User click "fieldcondition"
    And User click "getConditions" inside "fieldCondition"
    And User click "fieldProductCluster"
    And User get "getProductCluster" inside fieldProductCluster"
    # And User click "fieldDiscountBy"
    # And User click "optDiscountBy1" inside "fieldDiscountBy"
    And User click "fieldInputJumlahDiskon"
    And User input "<diskon>" inside "fieldInputJumlahDiskon"
    And User click "fieldInputJumlahTransaksi"
    And User input "<jumlahTransaksi>" inside "fieldInputJumlahTransaksi"
    And User click "fieldInputTitle"
    And User input "<title>" inside "fieldInputTitle"
    And User input "<description>" inside "fieldInputDesc"
    And User input "<description>" inside "fieldInputDescAboutVoucher"
    And User input "<description>" inside "fieldInputDescTC"
    And User input "<description>" inside "fieldInputDescH2U"
    And User wait for 5 seconds
    And User click "btnCancel"
    Then User will be back to "subMenuVoucherParameter" and able to see "<expectedTitle>"
    And User wait for 5 seconds
    # And User close the window

    Examples:
      | voucherName       | voucherPrefix | duration | title             | description     | jumlahTransaksi | diskon | expectedTitle     |
      | Automated testing | SUPERBB       |        2 | automated testing | Voucher Testing |         9500000 |  10000 | Parameter Voucher |

  @PT-0003
  Scenario: Memastikan tidak dapat create poin tukar ketika tidak isi semua field
    # Given I send login url
    # When I login with credential
    # Then I see usernameDisplay
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertUploadImage"
    Then User verify "allertVoucherName"
    Then User verify "allertVoucherPrefix"
    Then User verify "allertDuration"
    Then User verify "allertValidDay"
    Then User verify "allertJumlahDiskon"
    Then User verify "allertJumlahTransaksi"
    Then User verify "allertTitle"
    Then User verify "allertMainDesc"
    Then User verify "allertAboutVoucher"
    Then User verify "allertTC"
    Then User verify "allertH2U"
    And User back to previous page

  @PT-0004
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi upload gambar
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User upload image to "uploadImage" voucher detail
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertVoucherName"
    Then User verify "allertVoucherPrefix"
    Then User verify "allertDuration"
    Then User verify "allertValidDay"
    Then User verify "allertJumlahDiskon"
    Then User verify "allertJumlahTransaksi"
    Then User verify "allertTitle"
    Then User verify "allertMainDesc"
    Then User verify "allertAboutVoucher"
    Then User verify "allertTC"
    Then User verify "allertH2U"
    And User back to previous page

  @PT-0005
  Scenario: Memastikan tidak dapat upload gambar ketika upload gambar tidak sesuai requirement
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User upload invalid image to "uploadImage" voucher detail
    Then User verify "allertUploadImage"
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    And User back to previous page

  @PT-0006
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi field voucher name
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User click "fieldInputVoucherName"
    And User input "<voucherName>" into "fieldInputVoucherName"
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertUploadImage"
    Then User verify "allertVoucherPrefix"
    Then User verify "allertDuration"
    Then User verify "allertValidDay"
    Then User verify "allertJumlahDiskon"
    Then User verify "allertJumlahTransaksi"
    Then User verify "allertTitle"
    Then User verify "allertMainDesc"
    Then User verify "allertAboutVoucher"
    Then User verify "allertTC"
    Then User verify "allertH2U"
    And User back to previous page

    Examples:
      | voucherName       |
      | Automated testing |

  @PT-0007
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi field section 1 voucher detail
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User upload image to "uploadImage" voucher detail
    And User click "fieldInputVoucherName"
    And User input "<voucherName>" into "fieldInputVoucherName"
    And User click "fieldInputVoucherPrefix"
    And User input "<voucherPrefix>" into "fieldInputVoucherPrefix"
    And User click "fieldInputDuration"
    And User input "<duration>"
    And User click "toggleAllDay"
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertJumlahDiskon"
    Then User verify "allertJumlahTransaksi"
    Then User verify "allertTitle"
    Then User verify "allertMainDesc"
    Then User verify "allertAboutVoucher"
    Then User verify "allertTC"
    Then User verify "allertH2U"
    And User back to previous page

    Examples:
      | voucherName       | voucherPrefix | duration |
      | Automated testing | SUPERBB       |        2 |

  @PT-0008
  Scenario Outline: Memastikan tidak dapat create poin tukar ketika hanya isi field section 2 conditions
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User click "fieldcondition"
    And User click "getConditions" inside "fieldCondition"
    And User click "fieldProductCluster"
    And User get "getProductCluster" inside fieldProductCluster"
    # And User click "fieldDiscountBy"
    # And User click "optDiscountBy1" inside "fieldDiscountBy"
    And User click "fieldInputJumlahDiskon"
    And User input "<diskon>" inside "fieldInputJumlahDiskon"
    And User click "fieldInputJumlahTransaksi"
    And User input "<jumlahTransaksi>" inside "fieldInputJumlahTransaksi"
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertUploadImage"
    Then User verify "allertVoucherName"
    Then User verify "allertVoucherPrefix"
    Then User verify "allertDuration"
    Then User verify "allertValidDay"
    Then User verify "allertTitle"
    Then User verify "allertMainDesc"
    Then User verify "allertAboutVoucher"
    Then User verify "allertTC"
    Then User verify "allertH2U"
    And User back to previous page

    Examples:
      | jumlahTransaksi | diskon |
      |         9500000 |  10000 |

  @PT-0009
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi field section 3 push notification
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User click "fieldInputTitle"
    And User input "<title>" inside "fieldInputTitle"
    And User input "<description>" inside "fieldInputDesc"
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertUploadImage"
    Then User verify "allertVoucherName"
    Then User verify "allertVoucherPrefix"
    Then User verify "allertDuration"
    Then User verify "allertValidDay"
    Then User verify "allertJumlahDiskon"
    Then User verify "allertJumlahTransaksi"
    Then User verify "allertAboutVoucher"
    Then User verify "allertTC"
    Then User verify "allertH2U"
    And User back to previous page

    Examples:
      | title             | description     |
      | automated testing | Voucher Testing |

  @PT-0010
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi field section 4 about voucher
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User input "<description>" inside "fieldInputDescAboutVoucher"
    And User input "<description>" inside "fieldInputDescTC"
    And User input "<description>" inside "fieldInputDescH2U"
    And User wait for 5 seconds
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertUploadImage"
    Then User verify "allertVoucherName"
    Then User verify "allertVoucherPrefix"
    Then User verify "allertDuration"
    Then User verify "allertValidDay"
    Then User verify "allertJumlahDiskon"
    Then User verify "allertJumlahTransaksi"
    Then User verify "allertTitle"
    Then User verify "allertMainDesc"
    And User back to previous page

    Examples:
      | description     |
      | Voucher Testing |

  @PT-0011
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi field section 1 voucher detail dan section 2 conditions
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User upload image to "uploadImage" voucher detail
    And User click "fieldInputVoucherName"
    And User input "<voucherName>" into "fieldInputVoucherName"
    And User click "fieldInputVoucherPrefix"
    And User input "<voucherPrefix>" into "fieldInputVoucherPrefix"
    And User click "fieldInputDuration"
    And User input "<duration>"
    And User click "toggleAllDay"
    And User click "fieldcondition"
    And User click "getConditions" inside "fieldCondition"
    And User click "fieldProductCluster"
    And User get "getProductCluster" inside fieldProductCluster"
    # And User click "fieldDiscountBy"
    # And User click "optDiscountBy1" inside "fieldDiscountBy"
    And User click "fieldInputJumlahDiskon"
    And User input "<diskon>" inside "fieldInputJumlahDiskon"
    And User click "fieldInputJumlahTransaksi"
    And User input "<jumlahTransaksi>" inside "fieldInputJumlahTransaksi"
    And User click "fieldInputTitle"
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertTitle"
    Then User verify "allertMainDesc"
    Then User verify "allertAboutVoucher"
    Then User verify "allertTC"
    Then User verify "allertH2U"
    And User back to previous page

    Examples:
      | voucherName       | voucherPrefix | duration | jumlahTransaksi | diskon |
      | Automated testing | SUPERBB       |        2 |         9500000 |  10000 |

  @PT-0012
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi field section 1 voucher detail dan section 3 push notification
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    # When I refresh the browser
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    # And User wait for 5 seconds
    And User upload image to "uploadImage" voucher detail
    And User click "fieldInputVoucherName"
    And User input "<voucherName>" into "fieldInputVoucherName"
    And User click "fieldInputVoucherPrefix"
    And User input "<voucherPrefix>" into "fieldInputVoucherPrefix"
    And User click "fieldInputDuration"
    And User input "<duration>"
    And User click "fieldInputTitle"
    And User input "<title>" inside "fieldInputTitle"
    And User click "fieldInputDesc"
    And User input "<description>" inside "fieldInputDesc"
    And User click "btnCreateVoucher" to create voucher
    # And User wait for 5 seconds
    # Then User verify "allertUploadImage"
    # Then User verify "allertVoucherName"
    # Then User verify "allertVoucherPrefix"
    # Then User verify "allertDuration"
    # Then User verify "allertValidDay"
    Then User verify "allertJumlahDiskon"
    Then User verify "allertJumlahTransaksi"
    Then User verify "allertAboutVoucher"
    Then User verify "allertTC"
    Then User verify "allertH2U"
    And User back to previous page

    Examples:
      | voucherName       | voucherPrefix | duration | title             | description     |
      | Automated testing | SUPERBB       |        2 | automated testing | Voucher Testing |

  @PT-0013
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi field section 1 voucher detail dan section 4 about voucher
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User upload image to "uploadImage" voucher detail
    And User click "fieldInputVoucherName"
    And User input "<voucherName>" into "fieldInputVoucherName"
    And User click "fieldInputVoucherPrefix"
    And User input "<voucherPrefix>" into "fieldInputVoucherPrefix"
    And User click "fieldInputDuration"
    And User input "<duration>"
    And User input "<description>" inside "fieldInputDescAboutVoucher"
    And User input "<description>" inside "fieldInputDescTC"
    And User input "<description>" inside "fieldInputDescH2U"
    And User wait for 5 seconds
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertValidDay"
    Then User verify "allertJumlahDiskon"
    Then User verify "allertJumlahTransaksi"
    Then User verify "allertTitle"
    Then User verify "allertMainDesc"
    And User back to previous page

    Examples:
      | voucherName       | voucherPrefix | duration | description     |
      | Automated testing | SUPERBB       |        2 | Voucher Testing |

  @PT-0014
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi field section 2 conditions dan section 3 push notification
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User click "fieldcondition"
    And User click "getConditions" inside "fieldCondition"
    And User click "fieldProductCluster"
    And User get "getProductCluster" inside fieldProductCluster"
    And User click "fieldInputJumlahDiskon"
    And User input "<diskon>" inside "fieldInputJumlahDiskon"
    And User click "fieldInputJumlahTransaksi"
    And User input "<jumlahTransaksi>" inside "fieldInputJumlahTransaksi"
    And User input "<title>" inside "fieldInputTitle"
    And User input "<description>" inside "fieldInputDesc"
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertUploadImage"
    Then User verify "allertVoucherName"
    Then User verify "allertVoucherPrefix"
    Then User verify "allertDuration"
    Then User verify "allertValidDay"
    Then User verify "allertAboutVoucher"
    Then User verify "allertTC"
    Then User verify "allertH2U"
    And User back to previous page

    Examples:
      | title             | description     | jumlahTransaksi | diskon |
      | automated testing | Voucher Testing |         9500000 |  10000 |

  @PT-0015
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi field section 2 conditions dan section 4 about voucher
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User click "fieldcondition"
    And User click "getConditions" inside "fieldCondition"
    And User click "fieldProductCluster"
    And User get "getProductCluster" inside fieldProductCluster"
    And User click "fieldInputJumlahDiskon"
    And User input "<diskon>" inside "fieldInputJumlahDiskon"
    And User click "fieldInputJumlahTransaksi"
    And User input "<jumlahTransaksi>" inside "fieldInputJumlahTransaksi"
    And User input "<description>" inside "fieldInputDescAboutVoucher"
    And User input "<description>" inside "fieldInputDescTC"
    And User input "<description>" inside "fieldInputDescH2U"
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertUploadImage"
    Then User verify "allertVoucherName"
    Then User verify "allertVoucherPrefix"
    Then User verify "allertDuration"
    Then User verify "allertValidDay"
    Then User verify "allertAboutVoucher"
    Then User verify "allertTC"
    Then User verify "allertH2U"
    And User back to previous page

    Examples:
      | description     | jumlahTransaksi | diskon |
      | Voucher Testing |         9500000 |  10000 |

  @PT-0016
  Scenario: Memastikan tidak dapat create poin tukar ketika hanya isi field section 3 push notification dan section 4 about voucher
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User click "fieldInputTitle"
    And User input "<title>" inside "fieldInputTitle"
    And User input "<description>" inside "fieldInputDesc"
    And User input "<description>" inside "fieldInputDescAboutVoucher"
    And User input "<description>" inside "fieldInputDescTC"
    And User input "<description>" inside "fieldInputDescH2U"
    And User click "btnCreateVoucher" to create voucher
    And User wait for 5 seconds
    Then User verify "allertUploadImage"
    Then User verify "allertVoucherName"
    Then User verify "allertVoucherPrefix"
    Then User verify "allertDuration"
    Then User verify "allertValidDay"
    Then User verify "allertJumlahDiskon"
    Then User verify "allertJumlahTransaksi"
    And User back to previous page

    Examples:
      | title             | description     |
      | automated testing | Voucher Testing |

  @PT-0017
  Scenario: Memastikan input maksimal field voucher name hanya 40 karakter
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User click "fieldInputVoucherName"
    And User input "<voucherName>" into "fieldInputVoucherName"
    Then User validate the "fieldInputVoucherName" input
    And User wait for 5 seconds
    And User back to previous page

    Examples:
      | voucherName                                                                               | voucherPrefix | duration | title             | description     | jumlahTransaksi | diskon |
      | Automated testing Automated testing Automated testing Automated testing Automated testing | SUPERBB       |        2 | automated testing | Voucher Testing |         9500000 |  10000 |

  @PT-0018
  Scenario: Memastikan input maksimal field voucher pre fix hanya 10 karakter
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User click "fieldInputVoucherPrefix"
    And User input "<voucherPrefix>" into "fieldInputVoucherPrefix"
    And User wait for 5 seconds
    Then User validate the "fieldInputVoucherPrefix" input
    And User back to previous page

    Examples:
      | voucherPrefix   |
      | SUPERBB SUPERBB |

  @PT-0019
  Scenario: Memastikan input maksimal field title hanya 40 karakter
    # 
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User click "fieldInputTitle"
    And User input "<title>" inside "fieldInputTitle"
    And User wait for 5 seconds
    Then User validate the "fieldInputTitle" input
    And User back to previous page

    Examples:
      | title                                               |
      | voucher automated testing voucher automated testing |

  @PT-0020
  Scenario: Memastikan input maksimal field description push notification hanya 100 karakter
    # And User click "navMenuMarketing" in global page
    # And User click "menuPoinTukar" inside "navMenuMarketing"
    # And User click "subMenuVoucherParameter" inside "menuPointTukar"
    And User wait for 5 seconds
    Given User click "btnCreateNewParameterVoucher" inside "menuPointTukar"
    And User wait for 5 seconds
    And User input "<description>" inside "fieldInputDesc"
    And User wait for 5 seconds
    Then User validate the "fieldInputDesc" input
    And User back to previous page

    Examples:
      | description                                                                                                                                                                         |
      | Automated testing Automated testing Automated testing Automated testing Automated testing Automated testing Automated testing Automated testing Automated testing Automated testing |
