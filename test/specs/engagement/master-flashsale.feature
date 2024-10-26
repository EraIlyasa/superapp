Feature: Create-flashsale

        # Background: User login into the system
        #     Given I send login url
        #      When I login with credential
        #      Then I see usernameDisplay

        # @flashsale-0001
        # Scenario Outline: Memastikan dapat buat flashsale baru
        #       When api user login
        #       When open dashboard superapp
        #       And User click "navMenuMarketing" in global page
        #       And User click "menuFlashsaleV4" inside "navMenuMarketing"
        #       And User wait for 5 seconds
        #       And User click "createFsale" inside "Flashsale"
        #       And User wait for 5 seconds
        #       And User click "uploadFsale" inside "Flashsale"
        #       And User input "filePath" into "uploadGambar"
            # Given User input "<namaFlashsale>" into "fieldInputNamaFlashsale"
            #   And User click "fieldPeriodeFlashsale" inside "Flashsale"
            #   And User input "startDate" into "fieldPeriodeFlashsale"
            #   And User wait for 5 seconds
            #   And User input "endDate" into "fieldPeriodeFlashsale"
            #   And User click "fieldProduk" in "Flashsale"
            #   And User click "optProduk0" in "fieldProduk"
            #   And User click "fieldArea" in "Flashsale"
            #   And User click "optArea1" in "fieldArea"
            #   And User wait for 3 seconds
            #   And User click "uploadFsale" inside "Flashsale"
            #   And User input "<filePath>" into "uploadFsale"
            #   And User click "toggleSwitchPromo" in "Flashsale"
            #   And User set value "<discount>" into "fieldInputDiscount"
            #   And User click "fieldTipePromo" in "Flashsale"
            #   And User click "optTipePromo0" in "fieldTipePromo"
            #   And User click "btnBuatFlashsale" in "Flashsale"
            #  Then User able to see "Data berhasil disimpan" message verification

        # Examples:
        #           | namaFlashsale | startDate  | endDate    | filePath                                                                     |
        #           | SuperSale     | 2024-09-01 | 2024-09-10 | /Users/maulanajayadi/Documents/tes/git/griya-super/Product Banner Design.jpg |