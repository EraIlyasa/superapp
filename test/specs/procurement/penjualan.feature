Feature: Order

        Scenario: As a user, I want to use order
            Given I send login url
             When I login with credential
             Then I see usernameDisplay

             When I click order
              And I click penjualan
              And I click button add
              And I click marketplace

             When I select agen pemesanan
              And I select alamat kirim
              And I select superagen

             When I click button tambah produk
              And I select nama produk
              And I select satuan
              And I select quantity "4"
              And I click simpan item
              And I click simpan form
              And I click simpan order
             Then I get kode transaksi
             
             When I click kode transaksi
             Then I get order id

