import { When, Given } from '@cucumber/cucumber';
import sideMenuBarPage from '../../pageobjects/side-menu/side-menu-page';

Given ('User get dashboard url', async() => {
    await browser.url('https://v3-web-app-micro.staging.superapp.co.id/dashboard');
    await browser.pause(5000);
})

When('I click order', async() => {
    await sideMenuBarPage.order.scrollIntoView();
    await sideMenuBarPage.order.click();
});
    
When('I click penjualan', async() => {
    await sideMenuBarPage.penjualan.scrollIntoView();
    await sideMenuBarPage.penjualan.click();
});

When('I click logistic', async() => {
    await sideMenuBarPage.logistic.scrollIntoView();
    await sideMenuBarPage.logistic.click();
    await browser.pause(3000);
});

When('I click new outgoing goods', async() => {
    await sideMenuBarPage.newOutgoingGoods.scrollIntoView();
    await sideMenuBarPage.newOutgoingGoods.click();
    await browser.pause(3000);
});

When('I click outgoing goods v3', async() => {
    await browser.url('https://v3-web-app-micro.staging.superapp.co.id/logistic/new-outgoing-goods')
    // await sideMenuBarPage.outgoingGoodsV3.scrollIntoView()
    // await sideMenuBarPage.outgoingGoodsV3.click()
});

When ('User click produk menu in Product page', async() => {
    await sideMenuBarPage.menuProduk.click();
})

When('User click menuInventory in side menu page', async () => {
    await browser.waitUntil(async () => {
            await sideMenuBarPage.menuInventory.scrollIntoView();
            return sideMenuBarPage.menuInventory.isClickable();
        },
        {
            timeout: 17000, // Wait for up to 17 seconds
            timeoutMsg: 'menuInventory was not clickable after 17s'
        }
    );
    await sideMenuBarPage.menuInventory.click();
});

When ('User click navMenuStock in side menu page', async() => {
    await sideMenuBarPage.navMenuStock.click();
    await browser.pause(5000);
})

When ('User get window handle', async() => {
    const allWindowHandles = await browser.getWindowHandles();
    const newWindowHandle = allWindowHandles[allWindowHandles.length - 1];
    await browser.switchToWindow(newWindowHandle);
    const currentWindow = await browser.getWindowHandle();
    console.log('Current Window Handle:', currentWindow);
    await browser.pause(5000);
    await browser.refresh();
})

Given ('User click menu {string} in side menu page', async(x:string) => {
    if (x === 'navMenuConfig') {
        await sideMenuBarPage.navMenuConfig.scrollIntoView();
        await browser.waitUntil(async() => {
            return await sideMenuBarPage.navMenuConfig.isClickable(); 
          }, {
            timeout:60000,
            timeoutMsg: 'navMenuConfig still not clickable'
          })  
        await sideMenuBarPage.navMenuConfig.click();
        await browser.pause(1000);

    } else if (x === 'navMenuAdministrator') {
        await sideMenuBarPage.navMenuAdministrator.scrollIntoView();
        await browser.waitUntil(async() => {
            return await sideMenuBarPage.navMenuAdministrator.isClickable();
            }, {
                timeout:60000,
                timeoutMsg:'navMenuAdministrator still not clickable'
            })
        await sideMenuBarPage.navMenuAdministrator.click();
        await browser.pause(1000);
            
    } else if (x === 'navMenuOrder') {
        await browser.waitUntil(async() => {
            await sideMenuBarPage.navMenuOrder.scrollIntoView();
            return await sideMenuBarPage.navMenuOrder.isClickable();
            }, {
                timeout:60000,
                timeoutMsg:'navMenuOrder still not clickable'
            })
        await sideMenuBarPage.navMenuOrder.click();
        await browser.pause(1000);
    
    } else if (x === 'navMenuFinance') {
        await browser.waitUntil(async() => {
            await sideMenuBarPage.navMenuFinance.scrollIntoView();
            return await sideMenuBarPage.navMenuFinance.isClickable();
            }, {
                timeout:60000,
                timeoutMsg:'navMenuFinance still not clickable'
            })
        await sideMenuBarPage.navMenuFinance.click();
        await browser.pause(1000);
    
    } else if (x === 'logistic') {
        await browser.waitUntil(async() => {
            await sideMenuBarPage.logistic.scrollIntoView();
            return await sideMenuBarPage.logistic.isClickable();
            }, {
                timeout:60000,
                timeoutMsg:'logistic still not clickable'
            })
        await sideMenuBarPage.logistic.click();
        await browser.pause(1000);
    
    } else if (x === 'navMenuMasterData') {
        await browser.waitUntil(async() => {
            await sideMenuBarPage.navMenuMasterData.scrollIntoView();
            return await sideMenuBarPage.navMenuMasterData.isClickable();
            }, {
                timeout:60000,
                timeoutMsg:'navMenuMasterData still not clickable'
            })
        await sideMenuBarPage.navMenuMasterData.click();
        await browser.pause(1000);
    
    } else if (x === 'navMenuStock') {
        await browser.waitUntil(async() => {
            await sideMenuBarPage.navMenuStock.scrollIntoView();
            return await sideMenuBarPage.navMenuStock.isClickable();
            }, {
                timeout:60000,
                timeoutMsg:'navMenuStock still not clickable'
            })
        await sideMenuBarPage.navMenuStock.click();
        await browser.pause(1000);
    
    } else if (x === 'navMenuPurchasing') {
        await browser.waitUntil(async() => {
            await sideMenuBarPage.navMenuPurchasing.scrollIntoView();
            return await sideMenuBarPage.navMenuPurchasing.isClickable();
            }, {
                timeout:60000,
                timeoutMsg:'navMenuPurchasing still not clickable'
            })
        await sideMenuBarPage.navMenuPurchasing.click();
        await browser.pause(1000);
    
    }
})

When ('User click submenu {string} in side menu page', async(x:string) => {
    if (x === 'menuGudangV4') {
        await sideMenuBarPage.menuGudangV4.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuGudangV4.click();
        await browser.pause(5000);
    
    } else if (x === 'menuGeneral') {
        await sideMenuBarPage.menuGeneral.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuGeneral.click();
        await browser.pause(5000);
    
    } else if (x === 'menuPenjualan') {
        await sideMenuBarPage.menuPenjualan.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuPenjualan.click();
        await browser.pause(5000);
    
    } else if (x === 'menuPaymentRequest') {
        await sideMenuBarPage.menuPaymentRequest.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuPaymentRequest.click();
        await browser.pause(5000);
    
    } else if (x === 'outgoingGoodsV3') {
        await sideMenuBarPage.outgoingGoodsV3.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.outgoingGoodsV3.click();
        await browser.pause(5000);
    
    } else if (x === 'menuOutgoingRecap') {
        await sideMenuBarPage.menuOutgoingRecap.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuOutgoingRecap.click();
        await browser.pause(5000);
    
    } else if (x === 'menuWarehouseRack') {
        await sideMenuBarPage.menuWarehouseRack.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuWarehouseRack.click();
        await browser.pause(5000);
    
    } else if (x === 'menuInventory') {
        await sideMenuBarPage.menuInventory.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuInventory.click();
        await browser.pause(5000);
    
    } else if (x === 'menuManajemenStok') {
        await sideMenuBarPage.menuManajemenStok.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuManajemenStok.click();
        await browser.pause(5000);
    
    } else if (x === 'menuWarehouse') {
        await sideMenuBarPage.menuWarehouse.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuWarehouse.click();
        await browser.pause(5000);
    
    } else if (x === 'menuPICVendor') {
        await sideMenuBarPage.menuPICVendor.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuPICVendor.click();
        await browser.pause(5000);
    
    } else if (x === 'menuKurir') {
        await sideMenuBarPage.menuKurir.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuKurir.click();
        await browser.pause(5000);
    
    } else if (x === 'menuKendaraan') {
        await sideMenuBarPage.menuKendaraan.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuKendaraan.click();
        await browser.pause(5000);
    
    } else if (x === 'menuStockBermasalahV4') {
        await sideMenuBarPage.menuStockBermasalahV4.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuStockBermasalahV4.click();
        await browser.pause(5000);
    
    } else if (x === 'menuMutasiStock') {
        await sideMenuBarPage.menuMutasiStock.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuMutasiStock.click();
        await browser.pause(5000);
    
    }
})

When ('User click {string} in navMenuPurchasing', async(x:string) => {
    if (x === 'menuProdukBundle') {
        await sideMenuBarPage.menuProdukBundle.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuProdukBundle.click();
        await browser.pause(5000);

    } else if (x === 'menuRawMaterial') {
        await sideMenuBarPage.menuRawMaterial.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuRawMaterial.click();
        await browser.pause(5000);
        
    } else if (x === 'menuKategori') {
        await sideMenuBarPage.menuKategori.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuKategori.click();
        await browser.pause(5000);
        
    }
})

When ('User click {string} in navMenuMasterData', async(x:string) => {
    if (x === 'menuKategori') {
        await sideMenuBarPage.menuKategori.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuKategori.click();
        await browser.pause(5000);
        
    } else if (x === 'menuSubKategori') {
        await sideMenuBarPage.menuSubKategori.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuSubKategori.click();
        await browser.pause(5000);
        
    } else if (x === 'menuSupllier') {
        await sideMenuBarPage.menuSupllier.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuSupllier.click();
        await browser.pause(5000);
        
    } else if (x === 'menuMerek') {
        await sideMenuBarPage.menuMerek.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuMerek.click();
        await browser.pause(5000);
        
    }
})

When ('User click {string} in navMenuOrder', async(x:string) => {
    if (x === 'menuKonsinyasi') {
        await sideMenuBarPage.menuKonsinyasi.scrollIntoView();
        await browser.pause(1000);
        await sideMenuBarPage.menuKonsinyasi.click();
        await browser.pause(5000);
        
    } 
})

// Given ('User click "navMenuConfig" in side menu page', async() => {
//     await sideMenuBarPage.navMenuConfig.scrollIntoView();
//     await browser.waitUntil(async() => {
//         return await sideMenuBarPage.navMenuConfig.isClickable(); 
//       }, {
//         timeout:45000,
//         timeoutMsg: 'navMenuConfig still not clickable'
//       })  
//     await sideMenuBarPage.navMenuConfig.click();
//     await browser.pause(1000);
// })

// When ('User click "menuGudangV4" in side menu page', async() => {
//     await sideMenuBarPage.menuGudangV4.scrollIntoView();
//     await sideMenuBarPage.menuGudangV4.click();
//     await browser.pause(1000);
// }) 

// When ('User click "navMenuAdministrator" in side menu page', async() => {
//     await sideMenuBarPage.navMenuAdministrator.scrollIntoView();
//     await browser.waitUntil(async() => {
//         return await sideMenuBarPage.navMenuAdministrator.isClickable();
//     }, {
//         timeout:45000,
//         timeoutMsg:'navMenuAdministrator still not clickable'
//     })
//     await sideMenuBarPage.navMenuAdministrator.click();
//     await browser.pause(1000);
// })

// When ('User click "menuGeneral" in side menu page', async() => {
//     await sideMenuBarPage.menuGeneral.scrollIntoView();
//     await sideMenuBarPage.menuGeneral.click();
//     await browser.pause(1000);
// })
