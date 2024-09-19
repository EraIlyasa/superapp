import { Given, When, Then } from '@cucumber/cucumber'
import outgoingGoodsPage from '../../pageobjects/operations/outgoing-goods-page.ts';
import { kodeTransaksi } from '../../step-definitions/procurement/penjualan-step.ts'

When('I click tanggal kirim', async() => {
    await outgoingGoodsPage.tanggalKirim.click();
        });

When('I click tanggal kirim v4', async() => {
    await outgoingGoodsPage.tanggalKirimV4.click();
        });

When('I select hari ini', async() => {
    await outgoingGoodsPage.tanggalHariIni.click();
        });

When('I select hari ini v4', async() => {
    await outgoingGoodsPage.tanggalHariIniV4.click();
        });

When('I input kode invoice', async () => {
    await outgoingGoodsPage.buttonKodeInvoice.click()
    await outgoingGoodsPage.inputKodeInvoice.setValue(kodeTransaksi)
    await browser.pause(3000);
});

When('I input detail kode invoice', async () => {
    await outgoingGoodsPage.buttonDetailKodeInvoice.click()
    await outgoingGoodsPage.inputDetailKodeInvoice.setValue(kodeTransaksi)
    await browser.pause(3000);
});

When('I input kode invoice v4', async () => {
    await outgoingGoodsPage.inputKodeInvoiceV4.setValue(kodeTransaksi);
    await browser.pause(20000);
});

When('I click cari kode invoice', async () => {
    await outgoingGoodsPage.cariKodeInvoice.click()
    await browser.pause(3000);
})

When('I click see details', async () => {
    await outgoingGoodsPage.seeDetails.click()
    await browser.pause(4000);
})

When('I input kode transaksi', async() => {
    await outgoingGoodsPage.inputKodeTransaksi.setValue(kodeTransaksi);
    await browser.pause(10000);
         });

When('I click detail outgoing', async() => {
    await outgoingGoodsPage.detailOutgoing.click();
    await browser.pause(10000)
        });

When('I click checkbox', async() => {
    await outgoingGoodsPage.checkbox.click()
        })

When('I click checkbox v4', async() => {
    await outgoingGoodsPage.checkboxV4.click()
        })

When('I click terapkan', async() => {
    await outgoingGoodsPage.terapkan.click()
    await browser.pause(5000)
        })

When('I click ganti vendor', async() => {
    await outgoingGoodsPage.gantiVendor.click()
})

When('I select vendor tujuan', async() => {
    await outgoingGoodsPage.vendorTujuan.click()
    await outgoingGoodsPage.vendorTujuan.setValue('Inhouse')
    await outgoingGoodsPage.vendorTujuanInhouseAllArea.click()
})

When('I select alasan', async() => {
    await outgoingGoodsPage.alasan.click()
    await outgoingGoodsPage.alasanMinimalDrop.click()
})

When('I click ganti', async() => {
    await outgoingGoodsPage.btnGanti.click()
    await browser.pause(5000)
});

When('I refresh the page', async() => {
    await browser.refresh()
});

When('I click assign kurir', async() => {
    await outgoingGoodsPage.assignKurir.click();
});

When('I select driver', async() => {
    await outgoingGoodsPage.driver.click();
    await outgoingGoodsPage.driver.setValue('Kurir NF');
    await browser.keys('Enter');
});

When('I select plat nomor', async() => {
    await outgoingGoodsPage.noPlate.click();
    await outgoingGoodsPage.noPlate.setValue('S9430NG');
    await browser.keys('Enter');
    await browser.pause(2000)
});

When('I click assign', async() => {
    await outgoingGoodsPage.btnAssign.click();
});

When('I click siap dikirim', async() => {
    await browser.pause(2000)
    await outgoingGoodsPage.btnSiapDikirim.click();
});

When('I click ubah status', async() => {
    await outgoingGoodsPage.btnUbahStatus.click();
    await browser.pause(5000);
});

When('I click dikirim', async() => {
    await browser.pause(2000)
    await outgoingGoodsPage.btnDikirim.click();
});



