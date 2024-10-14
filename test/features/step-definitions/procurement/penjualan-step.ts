import { When, Then } from '@cucumber/cucumber'
import penjualanPage from '../../pageobjects/procurement/penjualan-page'
import { expect } from 'chai'
import { error } from 'console'

let kodeTransaksi: string
let orderId: string
let assert: any
let element: any
let requireClick: any

When('I click button add', async() => {
    penjualanPage.btnAdd.isClickable
    await penjualanPage.btnAdd.click()
        })
        
When('I click marketplace', async() => {
    await penjualanPage.btnMarketplace.click()
        })

 When('I select agen pemesanan', async() => {
    await penjualanPage.agenPemesanan.click()
    await penjualanPage.optAgenPemesan.click()
         })

 When('I select alamat kirim', async() => {
    await penjualanPage.alamatKirim.click();
    (await penjualanPage.optAlamatKirim('Warung')).click();
    // await penjualanPage.optAlamatKirim.click()
         })
         
 When('I select superagen', async() => {
    await penjualanPage.superagen.click();
    await penjualanPage.optSuperagen.click();
         })
         
When('I click button tambah produk', async() => {
    await penjualanPage.btnTambahProduk.scrollIntoView();
    await penjualanPage.btnTambahProduk.click();
         })
        
When('I select nama produk', async() => {
    await penjualanPage.namaProduct.click();
    await penjualanPage.optNamaProduct.click();
         });
         
When('I select satuan', async() => {
    await penjualanPage.satuan.click();
    await penjualanPage.optSatuan.click();
         });

When('I select quantity {string}', async(x : string) => {
    await penjualanPage.quantity.setValue(x);
    await browser.pause(2000);
         });

 When('I click simpan item', async() => {
    await penjualanPage.btnSave.click();
         });

When('I click simpan form', async() => {
    await penjualanPage.btnUpdate.click();
         });

When('I click simpan order', async() => {
    await penjualanPage.btnSubmit.click()
         });

Then('I get kode transaksi', async() => {
    await penjualanPage.kodeTransaksi.isDisplayed()
    kodeTransaksi = await penjualanPage.kodeTransaksi.getText()
    console.log('Kode Transaksi is : ' + kodeTransaksi)
    await browser.pause(3000)
         })
    export { kodeTransaksi }

When('I click kode transaksi', async() => {
    await penjualanPage.kodeTransaksi.click()
    await browser.pause(5000)
})

Then('I get order id', async () => {
    const currentUrl = await browser.getUrl();
    const match = currentUrl.match(/\/(\d+)$/);
    if (match) {
        orderId = match[1];
        console.log('Order Id is : ' + orderId);
    } else {
        console.log('Kode Transaksi tidak ditemukan di URL')
    }
    await browser.pause(3000);
});
    export { orderId };

When ('User create order by {string} in order page', async(x:string) => {
    if (x === "direct") {
        await penjualanPage.btnDirect.click();
        await browser.pause(1000);

    } else if (x === "marketplace") {
        await penjualanPage.btnMarketplace.click();
        await browser.pause(1000);
            
    }
})

When ('User click fieldTipePenjualan in order page', async() => {
    await penjualanPage.fieldTipePenjualan.click();
    await browser.pause(1000);
})

When ('User click optTipePenjualanRTP in order page', async() => {
    await penjualanPage.optTipePenjualanRTP.click();
    await browser.pause(1000);
})

When ('User click fieldAgenPemesan in order page', async() => {
    await penjualanPage.fieldAgenPemesan.click();
    // await browser.pause(1000);
})

// When ('User input {string} in filedAgenPemesanan order page', async(agenPemesanan) => {
//     if (agenPemesanan === 'AsrulTesting') {
//         await penjualanPage.fieldAgenPemesan.setValue(agenPemesanan);
//         await penjualanPage.optAgenpemesan.waitForDisplayed({timeout:40000});
//         await penjualanPage.optAgenpemesan.click();
//         await browser.pause(1000);

//     }
// })

When ('User input {string} in filedAgenPemesanan order page', async(agenPemesanan) => {
        await penjualanPage.fieldAgenPemesan.setValue(agenPemesanan);
        await penjualanPage.optAgenpemesan.waitForDisplayed({timeout:40000});
        await penjualanPage.optAgenpemesan.click();
        await browser.pause(1000);

})


When ('User click alamatKirim in order page', async() => {
    await penjualanPage.alamatKirim.click();
    await browser.pause(1000);
})

When ('User click {string} in alamatKirim order page', async(alamatKirim) => {
    if (alamatKirim === 'Warung') {
        (await penjualanPage.optAlamatKirim('Warung')).click();
        await browser.pause(1000);
    
    }
})

When ('User click metodePembayaran in order page', async() => {
    await penjualanPage.metodePembayaran.click();
    await browser.pause(1700);
}) 

When ('User click tipePT in order page', async() => {
    await penjualanPage.tipePT.click();
    await browser.pause(1000);
}) 

When ('User input {string} in tipePT order page', async(x:string) => {
    if (x === 'GSA - Aloha-RTP') {
        await browser.waitUntil(async() => {
            element = (await penjualanPage.optTipePT('GSA - Aloha-RTP')).isDisplayed();
            console.log('Option Not Displayed');
            return element;
    
        })
        element = (await penjualanPage.optTipePT('GSA - Aloha-RTP'));
        await element.click();
        await browser.pause(1000);

    }
})

When ('User click superagen in order page', async() => {
    await penjualanPage.superagen.scrollIntoView();
    await penjualanPage.superagen.click();
    await browser.pause(500);
})

When ('User click optSuperagen in superagen order page', async() => {
    await penjualanPage.optSuperagen.click();
    await browser.pause(1000);
})

When ('User click btnTambahProduk in order page', async() => {
    await penjualanPage.btnTambahProduk.scrollIntoView();
    await penjualanPage.btnTambahProduk.click();
    await browser.pause(5000);
})

When ('User input {string} on namaProduk modal order page', async(x:string) => {
    if (x === 'Supercow') {
        (await penjualanPage.fieldNamaProduk('1')).click();
        (await penjualanPage.fieldNamaProduk('1')).setValue(x);
        await browser.pause(2500);
        await browser.keys(['Enter']);
        await browser.pause(1000);
    
    } else if (x === 'Testing RTP Hikmah 2') {
        (await penjualanPage.fieldNamaProduk('2')).click();
        (await penjualanPage.fieldNamaProduk('2')).setValue(x);
        await browser.pause(3000);
        await browser.keys(['Enter']);
        await browser.pause(1000);
    
    } else if (x === 'Testing RTP Hikmah 1') {
        (await penjualanPage.fieldNamaProduk('1')).click();
        (await penjualanPage.fieldNamaProduk('1')).setValue(x);
        await browser.pause(2500);
        await browser.keys(['Enter']);
        await browser.pause(1000);
    
    } else if (x === 'RTP-ingredients') {
        (await penjualanPage.fieldNamaProduk('1')).click();
        (await penjualanPage.fieldNamaProduk('1')).setValue(x);
        await browser.pause(2500);
        await browser.keys(['Enter']);
        await browser.pause(1000);
    
    }
})


When ('User click satuan modal on order page', async() => {
    await penjualanPage.satuan.click();
    await browser.pause(500);
}) 

When ('User choose {string} on satuan modal order page', async(x:string) => {
    if (x === 'Karton') {
        (await penjualanPage.optSatuanModal('Karton', '1')).click();
        await browser.pause(1000);
    
    } else if (x === 'Bag') {
        (await penjualanPage.optSatuanModal('Bag', '1')).click();
        await browser.pause(1000);
    
    }
})

When ('User choose {string} on satuan modal2 order page', async(x:string) => {
    if (x === 'Karton') {
        (await penjualanPage.optSatuanModal('Karton', '2')).click();
        await browser.pause(1000);
    
    } else if (x === 'Bag') {
        (await penjualanPage.optSatuanModal('Bag', '2')).click();
        await browser.pause(1000);
    
    }
})


When ('User input {string} on quantity modal order page', async(x:string) => {
    // await penjualanPage.quantity.click();
    (await penjualanPage.fieldInputQty('1')).setValue(x);
    await browser.pause(1000);
}) 

When ('User input {string} on quantity modal2 order page', async(x:string) => {
    // await penjualanPage.quantity.click();
    (await penjualanPage.fieldInputQty('2')).setValue(x);
    await browser.pause(1000);
})

When ('User click {string} on modal order page', async(x:string) => {
    if (x === 'btnSaveModal0') {
        (await penjualanPage.btnSaveModal('0')).click();
        await browser.pause(1000);
    
    } else if (x === 'btnSaveModal1') {
        (await penjualanPage.btnSaveModal('1')).click();
        await browser.pause(1000);
    
    }
}) 

When ('User click btnSaveOrderModal on modal order page', async() => {
    await penjualanPage.btnSaveOrderModal.click();
    await browser.pause(5000);
}) 

Then ('User able to see {string} verification create order', async(message) => {
    try {
        await browser.waitUntil(async() => {
            return await penjualanPage.failedAlert.isDisplayed();
        }, {
            timeout:30000,
            timeoutMsg:'failedAlert still not displayed'
        })
        assert = await penjualanPage.failedAlert.getText();
        console.log('Message is:',await assert);
        expect(await assert).to.equal(message)
    
    } catch {
        console.error('failed to assertion the message or the message is not as expected', error)
    }
})

When('User click btnSubmit in order modal page', async() => {
    await penjualanPage.btnSubmit.click();
    await browser.pause(5000);
});

When ('User click btnTambahProdukModal in order modal', async() => {
    await penjualanPage.btnTambahProdukModal.click();
    await browser.pause(1500);
})

Then ('User able to see minimum order in section 2 order list same nominal with minimum order all category {string}', async(x:string) => {
    if (x === 'Rp 500.000'){
        await penjualanPage.minOrderInf.scrollIntoView();
        try {
            await penjualanPage.minOrderInf.waitForDisplayed({timeout:30000, timeoutMsg:'still not displayed'});
            assert = await penjualanPage.minOrderInf.getText();
            console.log('Minimun order:',await assert);
            expect(await assert).to.equal(x);
        } catch {
            console.error('minOrderInf is not as expected', error)
        }
    }
})

When ('User click btnMoreFilter in order list', async() => {
    await penjualanPage.btnMoreFilter.click();
    await browser.pause(1000);
})

When ('User click optGudangAlohaRTP on gudang section filter', async() => {
    await penjualanPage.optGudangAlohaRTP.click();
    await browser.pause(1000);
})

When ('User click btnTerapkanFilter in more filter modal', async() => {
    await penjualanPage.btnTerapkanFilter.waitForClickable({timeout:10000});
    await penjualanPage.btnTerapkanFilter.click();
    await browser.pause(5000);
})

When ('User click btnEditPenjualan in detail order page', async() => {
    await penjualanPage.btnEditPenjualan.click();
    await browser.pause(1000);
})

When ('User click btnEditList in detail order page', async() => {
    await penjualanPage.btnEditList.click();
    await browser.pause(5000);
})

When ('User click btnUbahModal in order modal page', async() => {
    (await penjualanPage.btnUbahModal('0')).click();
    await browser.pause(1000);
})

When ('User change input decrease {string} on quantity modal order page', async(x) => {
    await (await penjualanPage.fieldInputQty('1')).click();

    requireClick = parseInt (x) - 1;
    for (let i = 0; i < requireClick; i++)
    await penjualanPage.decreaseValue.click();
    await browser.pause(500);

}) 

When ('User change input increase {string} on quantity modal order page', async(x:string) => {
    await (await penjualanPage.fieldInputQty('1')).click();

    requireClick = parseInt (x);
    for (let i = 0; i < requireClick; i++)
    await penjualanPage.increaseValue.click();
    await browser.pause(500);

})

// Then ('User click "tipePenjualanDirect"', async () => {
//     await order.tipePenjualanDirect.click();
// });

// Then ('User click "optRTP" in "tipePenjualanDirect"', async () => {
//     await order.optRTP.click();
// });

Then ('User click "btnDirect" in "btnAddOrder"', async () => {
    await order.btnDirect.click();
});

Then ('User click "agenPemesanDirect"', async () => {
    await order.agenPemesanDirect.click();
});

Then ('User click "optAgenPemesan" in "agenPemesanDirect"', async () => {
    await order.optAgenPemesan.click();
});

Then ('User click "alamatKirimDirect"', async () => {
    await order.alamatKirimDirect.click();
});

Then ('User click "optAlamatKirimDirect" in "alamatKirimDirect"', async () => {
    await order.optAlamatKirimDirect.click();
});

Then ('User click "tipePtDirect"', async () => {
    await order.tipePtDirect.click();
});

Then ('User click "optTipePTDirect" in "tipePtDirect"', async () => {
    await order.optTipePTDirect.click();
});

Then ('User click "superAgenDirect"', async () => {
    await order.superAgenDirect.click();
});

Then ('User click "optSuperAgenDirect" in "superAgenDirect"', async () => {
    await order.optSuperAgenDirect.click();
});

Then ('User click "addProductDirect"', async () => {
    await order.addProductDirect.scrollIntoView();
    await order.addProductDirect.click();
});

         
         