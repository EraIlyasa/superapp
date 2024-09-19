import { Given, When, Then } from '@cucumber/cucumber'
import logisticPage from '../../../src/pages/logistic/logistic-page'
import { kodeTransaksi } from '../../../test/steps/order/order-step.ts'

When('I click tanggal kirim', async() => {
    await logisticPage.tanggalKirim.click();
        });

When('I click tanggal kirim v4', async() => {
    await logisticPage.tanggalKirimV4.click();
        });

When('I select hari ini', async() => {
    await logisticPage.tanggalHariIni.click();
        });

When('I select hari ini v4', async() => {
    await logisticPage.tanggalHariIniV4.click();
        });

When('I input kode invoice', async () => {
    await logisticPage.buttonKodeInvoice.click()
    await logisticPage.inputKodeInvoice.setValue(kodeTransaksi)
    await browser.pause(3000);
});

When('I input detail kode invoice', async () => {
    await logisticPage.buttonDetailKodeInvoice.click()
    await logisticPage.inputDetailKodeInvoice.setValue(kodeTransaksi)
    await browser.pause(3000);
});

When('I input kode invoice v4', async () => {
    await logisticPage.inputKodeInvoiceV4.setValue(kodeTransaksi);
    await browser.pause(20000);
});

When('I click cari kode invoice', async () => {
    await logisticPage.cariKodeInvoice.click()
    await browser.pause(3000);
})

When('I click see details', async () => {
    await logisticPage.seeDetails.click()
    await browser.pause(4000);
})

When('I input kode transaksi', async() => {
    await logisticPage.inputKodeTransaksi.setValue(kodeTransaksi);
    await browser.pause(10000);
         });

When('I click detail outgoing', async() => {
    await logisticPage.detailOutgoing.click();
    await browser.pause(10000)
        });

When('I click checkbox', async() => {
    await logisticPage.checkbox.click()
        })

When('I click checkbox v4', async() => {
    await logisticPage.checkboxV4.click()
        })

When('I click terapkan', async() => {
    await logisticPage.terapkan.click()
    await browser.pause(5000)
        })

When('I click ganti vendor', async() => {
    await logisticPage.gantiVendor.click()
})

When('I select vendor tujuan', async() => {
    await logisticPage.vendorTujuan.click()
    await logisticPage.vendorTujuan.setValue('Inhouse')
    await logisticPage.vendorTujuanInhouseAllArea.click()
})

When('I select alasan', async() => {
    await logisticPage.alasan.click()
    await logisticPage.alasanMinimalDrop.click()
})

When('I click ganti', async() => {
    await logisticPage.btnGanti.click()
    await browser.pause(5000)
});

When('I refresh the page', async() => {
    await browser.refresh()
});

When('I click assign kurir', async() => {
    await logisticPage.assignKurir.click();
});

When('I select driver', async() => {
    await logisticPage.driver.click();
    await logisticPage.driver.setValue('Kurir NF');
    await browser.keys('Enter');
});

When('I select plat nomor', async() => {
    await logisticPage.noPlate.click();
    await logisticPage.noPlate.setValue('S9430NG');
    await browser.keys('Enter');
    await browser.pause(2000)
});

When('I click assign', async() => {
    await logisticPage.btnAssign.click();
});

When('I click siap dikirim', async() => {
    await browser.pause(2000)
    await logisticPage.btnSiapDikirim.click();
});

When('I click ubah status', async() => {
    await logisticPage.btnUbahStatus.click();
    await browser.pause(10000);
});

When('I click dikirim', async() => {
    await browser.pause(2000)
    await logisticPage.btnDikirim.click();
});



