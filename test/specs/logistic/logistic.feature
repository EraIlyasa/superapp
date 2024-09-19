Feature: Logistic

        Scenario: As a user, I want to use order
            Given I send login url
             When I login with credential
             Then I see usernameDisplay

            Given I am on the dashboard v4
             When I click logistic
              And I click new outgoing goods
              And I click tanggal kirim v4
              And I select hari ini v4

              And I input kode invoice v4
              And I click detail outgoing

              And I input kode transaksi
              And I click checkbox v4

              And I click ganti vendor
              And I select vendor tujuan
              And I select alasan
              And I click ganti

              And I click outgoing goods v3
              And I click tanggal kirim
              And I select hari ini
              And I click terapkan

              And I input kode invoice
              And I click cari kode invoice
              And I click see details

              And I input detail kode invoice
              And I click cari kode invoice
              And I click checkbox

              And I click assign kurir
              And I select driver
              And I select plat nomor
              And I click assign

              And I click checkbox
              And I click siap dikirim
              And I click ubah status

             When I click checkbox
              And I click dikirim
              And I click ubah status


