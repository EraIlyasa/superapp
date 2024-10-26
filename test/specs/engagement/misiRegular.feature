@mission
Feature: Create-mission

# Background: User login into the system
# Given I send login url
# When I login with credential
# Then I see usernameDisplay

@missionRegular-0001
Scenario Outline: Memastikan dapat buat misi baru
When api user login
When open dashboard superapp
And User wait for 3 seconds
Given User click "btnBuatMisiPage" in "menuMissionRegular"
And User wait for 3 seconds
And User input "<namaMission>" into "fieldInputNamaMisi"
And User click "fieldPeriodeMisi" inside "menuMissionRegular"
And User input "startDate" into "fieldPeriodeMisi"
And User wait for 5 seconds
And User input "endDate" into "fieldPeriodeMisi"
And User click "radioBtnFixed" in "menuMissionV4"
# And User input "durasi" in "fieldInputDurasi" in "menuMissionV4"
And User click "fieldTipeUser" in "menuMissionV4"
And User click "optTipeUser0" in "fieldTipeUser"
And User click "fieldArea" in "menuMissionV4"
And User click "optArea1" in "fieldArea"
And User wait for 3 seconds
And User click "fieldArea" in "menuMissionV4"
And User scrolldown to "fieldTipeTarget" in "menuMissionV4"
And User click "fieldTipeTarget" in "menuMissionV4"
And User click "optTipeTarget0" in "fieldTipeTarget"
And User click "fieldSyaratDanKetentuan" in "menuMissionV4"
And User input "<syaratDanKetentuan>" into "fieldSyaratDanKetentuan" in "menuMissionV4"
And User click "fieldTipeProduk" in "menuMissionV4"
And User click "optTipeProduk0" in "menuMissionV4"
And User click "radioBtnFixed"
And User click "fieldInputTarget" in "menuMissionV4"
And User set value "<target>" into "fieldInputTarget"
And User click "fieldInputReward" in "menuMissionV4"
And User set value "<reward>" into "fieldInputReward"
And User click "toggleSwitchLeaderBoard" in "menuMissionV4"
And User click "fieldPencapaianMinimal" in "menuMissionV4"
And User set value "<pencapaianMinimal>"
And User click "fieldBatasPemenang" in "menuMissionV4"
And User input batas pemenang in "menuMissionV4"
And User click "btnBuatMisi" in "menuMissionV4"
Then User able to see "Data berhasil disimpan" message verification

Examples:
| namaMission   | syaratDanKetentuan   | target | reward | pencapaianMinimal |
| RailAutomated | syarat dan ketentuan | 10000  | 10000  | 100000            |
