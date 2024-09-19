@Reward
Feature: Create-Feature

  @Reward-0001
  Scenario Outline: Memastikan dapat create reward dengan tipe transaksi
    Given I send login url
    When I login with credential
    Then I see usernameDisplay
    When User click "navMenuMarketing" in global page
    When User click "menuRewardV4"
    And User wait for 5 seconds
    Given User click "btnBuatRewardNew" in menu reward
    And User wait for 5 seconds
    And User click "fieldInputNamaReward" in create reward page
    And User input "<namaReward>" into "fieldInputNamaReward"
    And User click "fieldTipeReward" in create reward page
    And User click "optTipeReward0"
    And User click "fieldInputMinimalBelanja" in create reward page
    And User input "<minBelanja>" into "fieldInputMinimalBelanja"
    And User click "fieldTipeUser" in create reward page
    And User click "optTipeUser0"
    And User click "fieldKondisi" in create reward page
    And User click "optKondisi0"
    And User click "fieldGudang" in create reward page
    And User click "optGudang"
    And User click "fieldArea" in create reward page
    And User click "optArea0"
    And User click "fieldInputKuotaUser" in create reward page
    And User input "<kuotaUser>" into "fieldInputKuotaUser"
    And User click "fieldInputStartDate" in create reward page
    And User input "<startDate>" into "fieldInputStartDate"
    And User click "fieldInputEndDate" in create reward page
    And User input "<endtDate>" into "fieldInputEndDate"
    And User wait for 5 seconds
    And User click "btnTambahDariInven" in create reward page
    And User click "fieldNamaProduk" in create reward page
    Given User input "optNamaProduk" into "fieldNamaProduk"
    And User click "fieldUnit" in create reward page
    Given User input "optUnit" into "fieldUnit"
    Then User able to see "totalStokInventory" beside fieldUnit
    And User click "fieldInputKuotaReward" in create reward page
    And User input "reward" into "fieldInputKuotaReward"
    And User click "fieldInputQtyReward" in create reward page
    And User input "reward" into "fieldInputQtyReward"
    And User click "actionV" to save the product
    And User wait for 5 seconds
    Given User click "btnSimpan" to create new reward
    Then User able to see success messasge verification pop up modal

    Examples:
      | namaReward     | minBelanja | kuotaUser | startDate   | endtDate    | productName            | reward |
      | Reward Testing |      95000 |         1 | 19 Sep 2026 | 20 Sep 2026 | Automated Testing hehe |      4 |

  @Reward-0002
  Scenario Outline: Memastikan dapat create reward dengan tipe reward daily checkin
    And User wait for 5 seconds
    Given User click "btnBuatRewardNew" in menu reward
    And User wait for 5 seconds
    And User click "fieldInputNamaReward" in create reward page
    And User input "<namaReward>" into "fieldInputNamaReward"
    And User click "fieldTipeReward" in create reward page
    And User click "optTipeReward1"
    # And User click "fieldInputMinimalBelanja" in create reward page
    # And User input "<minBelanja>" into "fieldInputMinimalBelanja"
    # And User click "fieldTipeUser" in create reward page
    # And User click "optTipeUser0"
    # And User click "fieldKondisi" in create reward page
    # And User click "optKondisi0"
    And User click "fieldGudang" in create reward page
    And User click "optGudang"
    And User click "fieldArea" in create reward page
    And User click "optArea0"
    And User click "fieldInputIntervalExp" in create reward page
    And User input "<intervalExp>" into "fieldInputIntervalExp"
    And User click "fieldInputKuotaUser" in create reward page
    And User input "<kuotaUser>" into "fieldInputKuotaUser"
    And User click "fieldInputStartDate" in create reward page
    And User input "<startDate>" into "fieldInputStartDate"
    And User click "fieldInputEndDate" in create reward page
    And User input "<endtDate>" into "fieldInputEndDate"
    And User wait for 5 seconds
    And User click "btnTambahDariInven" in create reward page
    And User click "fieldNamaProduk" in create reward page
    Given User input "optNamaProduk" into "fieldNamaProduk"
    And User click "fieldUnit" in create reward page
    Given User input "optUnit" into "fieldUnit"
    Then User able to see "totalStokInventory" beside fieldUnit
    And User click "fieldInputKuotaReward" in create reward page
    And User input "reward" into "fieldInputKuotaReward"
    And User click "fieldInputQtyReward" in create reward page
    And User input "reward" into "fieldInputQtyReward"
    And User click "actionV" to save the product
    And User wait for 5 seconds
    Given User click "btnSimpan" to create new reward
    Then User able to see success messasge verification pop up modal

    Examples:
      | namaReward     | minBelanja | kuotaUser | startDate   | endtDate    | productName            | reward | intervalExp |
      | Reward Testing |      95000 |         1 | 19 Sep 2026 | 20 Sep 2026 | Automated Testing hehe |      4 |           2 |

  @Reward-0003
  Scenario Outline: Memastikan dapat create reward dengan tipe reward daily checkin
    And User wait for 5 seconds
    Given User click "btnBuatRewardNew" in menu reward
    And User wait for 5 seconds
    And User click "fieldInputNamaReward" in create reward page
    And User input "<namaReward>" into "fieldInputNamaReward"
    And User click "fieldTipeReward" in create reward page
    And User click "optTipeReward2"
    # And User click "fieldInputMinimalBelanja" in create reward page
    # And User input "<minBelanja>" into "fieldInputMinimalBelanja"
    # And User click "fieldTipeUser" in create reward page
    # And User click "optTipeUser0"
    # And User click "fieldKondisi" in create reward page
    # And User click "optKondisi0"
    And User click "fieldGudang" in create reward page
    And User click "optGudang"
    And User click "fieldArea" in create reward page
    And User click "optArea0"
    And User click "fieldInputIntervalExp" in create reward page
    And User input "<intervalExp>" into "fieldInputIntervalExp"
    And User click "fieldInputKuotaUser" in create reward page
    And User input "<kuotaUser>" into "fieldInputKuotaUser"
    And User click "fieldInputStartDate" in create reward page
    And User input "<startDate>" into "fieldInputStartDate"
    And User click "fieldInputEndDate" in create reward page
    And User input "<endtDate>" into "fieldInputEndDate"
    And User wait for 5 seconds
    And User click "btnTambahDariInven" in create reward page
    And User click "fieldNamaProduk" in create reward page
    Given User input "optNamaProduk" into "fieldNamaProduk"
    And User click "fieldUnit" in create reward page
    Given User input "optUnit" into "fieldUnit"
    Then User able to see "totalStokInventory" beside fieldUnit
    And User click "fieldInputKuotaReward" in create reward page
    And User input "reward" into "fieldInputKuotaReward"
    And User click "fieldInputQtyReward" in create reward page
    And User input "reward" into "fieldInputQtyReward"
    And User click "actionV" to save the product
    And User wait for 5 seconds
    Given User click "btnSimpan" to create new reward
    Then User able to see success messasge verification pop up modal

    Examples:
      | namaReward     | minBelanja | kuotaUser | startDate   | endtDate    | productName            | reward | intervalExp |
      | Reward Testing |      95000 |         1 | 19 Sep 2026 | 20 Sep 2026 | Automated Testing hehe |      4 |           2 |

  @Reward-0004
  Scenario Outline: Memastikan dapat create reward dengan tipe reward daily checkin
    And User wait for 5 seconds
    Given User click "btnBuatRewardNew" in menu reward
    And User wait for 5 seconds
    Given User click "btnSimpan" to create new reward
    Then User able to see invalid verification message
    Then User verify "<allertnamareward>" on "allertNamaReward"
    Then User verify "<allerttipereward>" on "allertTipeReward"
    Then User verify "<allerttipeuser>" on "allertTipeUser"
    Then User verify "<allertkondisi>" on "allertKondisi"
    Then User verify "<allertgudang>" on "allertGudang"

    Examples:
      | allertnamareward        | allerttipereward           | allerttipeuser          | allertkondisi         | allertgudang          |
      | Nama Reward wajib diisi | Tipe Reward wajib dipiliih | Tipe User wajib dipilih | Kondisi wajib dipilih | Gudang wajib dipiliih |
