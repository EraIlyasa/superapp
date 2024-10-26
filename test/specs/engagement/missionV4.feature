# Feature: Login functionality and mission V4 for SuperApp

#         Scenario: Login with valid credentials and navigate to mission V4
#             Given I send login url
#              When I login with credential
#              Then I see usernameDisplay
#              When I click marketingMenuV4
#              When I click missionMenuV4
#              When I click misiRegulerSetionV4
#              Then I should verify misiRegulerPageV4

#         Scenario: ensure create new missionV4
#             Given I click buttonBuatMisiV4
#              When I input "<namaMission>" into "fieldInputNamaMisiV4"
#              Then I should verify "radioButtonUser" in "userCustomer"
#              When I click "tipeUser" in "userRegulerMissionV4"
#              When I click fieldAreaMissionV4
#              When I click "pilihArea" in "areaRegulerMissionV4"
#              When I click feildTipeTergetMissionV4
#              When I click "pilihTarget" in "tipeTargetRegulerMissionV4"
#              When I click "fieldSyaratDanKetentuan" in "syaratDanKetentuanMissionV4"
#              When I input "<syaratDanKetentuan>" into "fieldSyaratDanKetentuan" in "syaratDanKetentuanMissionV4"
#              When I click "fieldPeriodeMisi" inside "periodeMisiRegulerV4"
#              When I click "startDate" into "periodeMisiRegulerV4"
#              When I click "endDate" into "periodeMisiRegulerV4"
#              Then I should verify kedaluwarsaFixed
#              When I click "selectProduct" in "tipeProdukMissionV4"
#              When I click "allProduct" in "tipeProdukMissionV4"
#              When I click "flashSale" in "filterProdukMissionV4"
#              When I click "Bundling" in "filterProdukMissionV4"

#              When I click "fieldInputTarget" in "targetRewardMissionV4"
#              When I input "<target>" into "fieldInputTarget"

#              When I click "selectReward" in "targetRewardMissionV4"
#              When I click "rewardKoin" in "targetRewardMissionV4"

#              When I click "fieldInputReward" in "targetRewardMissionV4"
#              When I input "<reward>" into "fieldInputReward"

#              When I click "toggleSwitchLeaderBoard" in "targetRewardMissionV4"
             
#              When I click "fieldPencapaianMinimal" in "targetRewardMissionV4"
#              When I input "<pencapaianMinimal>"

#              When I click "fieldBatasPemenang" in "targetRewardMissionV4"
#              When I input "batasPemenang" in "targetRewardMissionV4"

#              When I click "buttonBuatMisi" in "buatMisiButtonRegulerV4"

#              Then I can to see "Data berhasil disimpan" message verification


#         Examples:
#                   | namaMission          | syaratDanKetentuan                | target | reward | pencapaianMinimal |
#                   | testAutomateKamal001 | syarat dan ketentuan yang berlaku | 50000  | 50000  | 500000            |