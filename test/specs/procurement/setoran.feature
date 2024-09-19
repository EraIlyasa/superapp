@Setoran
Feature: Create-Setoran

@Setoran-0001
  Scenario Outline: Memastikan berhasil buat setoran tipe inhouse tanpa merubah apapun (full cash, full transfer dan partial)
    Given I send login url
    When I login with credential
    Then I see usernameDisplay
    When User click "navMenuFinance" in global page
    When User click "menuSetoran"
    And User wait for 5 seconds
    Given User click "btnBuatSetoranNew"
    And User wait for 5 seconds
    And User click "fieldTipeOrder" in setoran page
    And User click "optTipeOrder0" in setoran page
    And User click "fieldGudang" in setoran page
    And User click "optGudang0" in setoran page
    And User click "fieldInputNamaKurir" in setoran page
    And User input "<namaKurir>" into "fieldInputNamaKurir"
    # And User click "aksiKonfirmasi" in setoran page
    # And User wait for 5 seconds
    # And User click "fieldInputBayarCash" in modal konfirmasi setoran
    # And User input "<cash>" into "fieldInputBayarCash"
    # And User upload image to "uploadImage1" in modal konfirmasi button
    # And User click "fieldInputBuktiTF1" in modal konfirmasi button 
    # # And User upload image to "uploadImage1" in modal konfirmasi button
    # # And User upload image to "uploadImage1" in modal konfirmasi button
    # And User input "<cash>" into "fieldInputBuktiTF1"
    # And User click "btnSimpanModal" in modal konfirmasi button  
    # And User wait for 5 seconds
    And User delete "hapusRow1" in setoran page
    # And User delete "hapusRow1" in setoran page 
    # And User delete "hapusRow2" in setoran page
    And User click "btnBuatSetoran" in setoran page 
    # And User click "btnSayaYakin" in setoran page
    And User wait for 5 seconds 

    Examples:
      | namaKurir | cash    |
      | feboi243  | 744.000 |

@Setoran-0002
Scenario Outline: Memastikan berhasil buat setoran tipe inhouse tanpa merubah apapun (full cash, full transfer dan partial)
    Given I send login url
    When I login with credential
    Then I see usernameDisplay
    When User click "navMenuFinance" in global page
    When User click "menuSetoran"
    And User wait for 5 seconds
    Given User click "btnBuatSetoranNew"
    And User wait for 5 seconds
    And User click "fieldTipeOrder" in setoran page
    And User click "optTipeOrder0" in setoran page
    And User click "fieldGudang" in setoran page
    And User click "optGudang0" in setoran page
    And User click "fieldInputNamaKurir" in setoran page
    And User input "<namaKurir>" into "fieldInputNamaKurir"
    And User wait for 5 seconds
    And User click "aksiKonfirmasi" in setoran page 
    And User click "fieldInputBayarCash" in modal konfirmasi setoran
    And User input "<cash>" into "fieldInputBayarCash"
    And User upload image to "uploadImage1" in modal konfirmasi button
    And User click "fieldInputBuktiTF1" in modal konfirmasi button 
    # And User upload image to "uploadImage1" in modal konfirmasi button
    # And User upload image to "uploadImage1" in modal konfirmasi button
    And User input "<cash>" into "fieldInputBuktiTF1"
    And User click "btnSimpanModal" in modal konfirmasi button  
    And User wait for 5 seconds
    And User delete "hapusRow1" in setoran page 
    # And User delete "hapusRow2" in setoran page
    And User click "btnBuatSetoran" in setoran page 
    # And User click "btnSayaYakin" in setoran page
    And User wait for 5 seconds 

    Examples:
      | namaKurir | cash    |
      | feboi243  | 744.000 |