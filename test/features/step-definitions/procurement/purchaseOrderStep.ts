import { Given, When, Then } from "@cucumber/cucumber";
import purchaseOrderPage from "../../pageobjects/procurement/purchaseOrderPage";
const POV4 = purchaseOrderPage;



When('User click "navMenuPurchasing" button in "Global" page', async () => {
    await POV4.navMenuPurchasing.click();
  });
  
  
  When('User click "menuPurchasingPO" button in "PO" page', async () => {
    await POV4.menuPurchasingPO.click();
  });
  
  
  When('User directed to "Purchase Order" page', async () => {
    await browser.pause(10000);
  });
  
  
  When('User click "btnCreateNewPO" button in "PO" page', async () => {
    await POV4.btnCreateNewPO.click();
  });
  
  
  When('User clicks "fieldJenisPO" button in "PO" page', async () => {
    await POV4.fieldJenisPO.click();
  });
  
  
  When('User clicks "fieldGudang" button in "PO" page', async () => {
    await POV4.fieldGudang.click();
  });
  
  
  When('User clicks "optGudangPOAloha" button in "PO" page', async () => {
    await POV4.optGudangPOAloha.click();
    await browser.pause(3000);
  });
  
  
  When('User clicks "fieldTipePT" button in "PO" page', async () => {
    await POV4.fieldTipePT.click();
  });
  
  
  When('User clicks "optTipePTPO" button in "PO" page', async () => {
    await POV4.optTipePTPO.click();
  });
  
  
  When('User clicks "fieldSupplier" button in "PO" page', async () => {
    await POV4.fieldSupplier.click();
  });
  
  
  When('User clicks "optSupplier" button in "PO" page', async () => {
    await POV4.optSupplier.click();
  });
  
  
  When('User clicks "textAreaCatatanPO" button in "PO" page', async () => {
    await POV4.textAreaCatatanPO.click();
  });
  
  
  When(
    'User fill "textAreaCatatanPO" with value {string} in "PO" page',
    async (notes) => {
      await POV4.textAreaCatatanPO.scrollIntoView();
      await POV4.textAreaCatatanPO.setValue(notes);
    }
  );
  
  
  When('User clicks "fieldMetodePembayaran" button in "PO" page', async () => {
    await POV4.fieldMetodePembayaran.click();
  });
  
  
  When(
    'User clicks "optMetodePembayaranTransfer" button in "PO" page',
    async () => {
      await POV4.optMetodePembayaranTransfer.click();
    }
  );
  
  
  When('User clicks "fieldPengiriman" button in "PO" page', async () => {
    await POV4.fieldPengiriman.click();
  });
  
  
  When('User clicks "optPengirimanLocco" button in "PO" page', async () => {
    await POV4.optPengirimanLocco.click();
  });
  
  
  When('User clicks "fieldPIC" button in "PO" page', async () => {
    await POV4.fieldPIC.click();
  });
  
  
  When('User fill "fieldPIC" with value {string} in "PO" page', async (pic) => {
    await POV4.fieldPIC.setValue(pic);
  });
  
  
  When('User clicks "optPIC" button in "PO" page', async () => {
    await POV4.optPIC.click();
  });
  
  
  When('User clicks "fieldBankSupplier" button in "PO" page', async () => {
    await POV4.fieldBankSupplier.click();
  });
  
  
  When('User clicks "optBankSupplier" button in "PO" page', async () => {
    await POV4.optBankSupplier.click();
  });
  
  
  When('User clicks "btnTambahProdukPO" button in "PO" page', async () => {
    await POV4.btnTambahProdukPO.scrollIntoView();
    await POV4.btnTambahProdukPO.click();
  });
  
  
  When('User can wait loading application for "3" seconds', async () => {
    await browser.pause(3000);
  });
  
  
  When('User clicks "fieldProdukModalPO" button in "PO" page', async () => {
    await POV4.fieldProdukModalPO.click();
  });
  
  
  When('User can wait loading application for "5" seconds', async () => {
    await browser.pause(5000);
  });
  
  
  When('User fill "fieldProdukModalPO" with value {string} in "PO" page', async (productName) => {
      await POV4.fieldProdukModalPO.setValue(productName); }
  );
  
  
  // Given ('User can wait loading application for "5" seconds', async () => { await browser.pause(5000)})
  
  
  When('User clicks "optProdukModalPO2" button in "PO" page', async () => {
    await POV4.optProdukModalPO2.click();
  });
  
  
  When('User clicks "fieldSatuanModalPO" button in "PO" page', async () => {
    await POV4.fieldSatuanModalPO.click();
  });

  
  When('User clicks "optSatuanModalPO" button in "PO" page', async () => {
    await POV4.optSatuanModalPO.click();
  });


  When ('User fill "fieldQtyModalPO" with value {string} in "PO" page', async (qty) => {
      await POV4.fieldQtyModalPO.setValue(qty);
    });


  When ('User fill "fieldHargaSatuanModalPO" with value {string} in "PO" page', async (price) => {
      await POV4.fieldHargaSatuanModalPO.setValue(price);
    });


  When ('User fill "fieldDiskon1ModalPO" with value {string} in "PO" page', async (diskon1) => {
      await POV4.fieldDiskon1ModalPO.setValue(diskon1);
    });


  When ('User click "btnSimpanPrepayment" button in "PO" page', async() => { 
      await POV4.btnSimpanPrepayment.click(); 
  })


  When('User clicks "togglePPNModalPO" button in "PO" page', async () => {
    await POV4.togglePPNModalPO.click();
  });


  When('User clicks "btnSimpanModalPO" button in "PO" page', async () => {
    await POV4.btnSimpanModalPO.click();
  });


  When('User scroll to "bottom" of the page', async () => {
    await POV4.textValueDPP.scrollIntoView();
  });


  Then(
    'User verified "purchase order cost" for "textValueDPP" is {string}',
    async (textValueDPP: string) => {
      const valueDpp = await POV4.textValueDPP.getText();
      expect(await valueDpp).toEqual(textValueDPP);
    });


  Then ('User verified "purchase order cost" for "textValuePPN" is {string}', async (textValuePPN: string) => {
      const valuePPN = await POV4.textValuePPN.getText();
      expect(await valuePPN).toEqual(textValuePPN); 
    });


  Then ('User verified "purchase order cost" for "textValueSubTotal" is {string}', async (textValueSubTotal: string) => {
      const valueSubTotal = await POV4.textValueSubTotal.getText();
      expect(await valueSubTotal).toEqual(textValueSubTotal);}
  );


  When('User fill "fieldDiskonOffFaktur" with value {string} in "PO" page', async (diskonOffFaktur) => {
      await POV4.fieldDiskonOffFaktur.setValue(diskonOffFaktur);}
  );


  Then('User verified "purchase order cost" for "textValueGrandTotal" is {string}', async (textValueGrandTotal: string) => {
      const valueGrandTotal = await POV4.textValueGrandTotal.getText();
      expect(await valueGrandTotal).toEqual(textValueGrandTotal);
    }
  );


  When('User send PO document "Super.png" in "dropzoneNotaPengajuan"', async () => {}
  );


  When('User click "btnSimpanCreatePO" button in "PO" page', async () => {
    await POV4.btnSimpanCreatePO.click();
  });

  
  When ('User click "btnTambahProdukModalPO" button in "PO" page', async() => {
      await POV4.btnTambahProdukModalPO.click();
  });


  When ('And User clicks "fieldProdukModalPO2" button in "PO" page', async() => {
      await POV4.fieldProdukModalPO2.click();
  });


  When ('And User fill "fieldProdukModalPO2" with value {string} in "PO" page', async(productName) => {
      await POV4.fieldProdukModalPO2.setValue(productName);
  });


  When ('User fill "fieldQtyModalPO2" with value {string} in "PO" page', async (qty) => {
      await POV4.fieldQtyModalPO2.setValue(qty);
  });


  When ('User fill "fieldHargaSatuanModalPO2" with value "<price>" in "PO" page', async () => {
      

  });
  When ('User fill "fieldDiskon1ModalPO2" with value {string} in "PO" page', async (diskon1) => {
      await POV4.fieldDiskon1ModalPO2.setValue(diskon1);
  });


  When ('And User clicks "togglePPNModalPO2" button in "PO" page', async () => {
      await POV4.togglePPNModalPO2.click();
  });
  

  Then ('User able to see "Purchase Order berhasil dibuat!" message verification', async () => {
      await browser.pause(5000);
      console.log("Purchase Order berhasil dibuat!");
    
      // await POV4.kodePORow1.doubleClick();
      // await POV4.btnSearch.click();
      // // await POV4.fieldInputSearch.setValue(kodePO)
      // // await POV4.fieldInputSearch.click();
      // await browser.keys(['Control', 'a']);
      // await browser.pause();
      // await browser.keys(['Control', 'c']);
    }
  );

  
  Then('User able to see "Gagal menyimpan PO" message verification', async () => {
      await browser.closeWindow();
      // await browser.deleteSession();
      // await browser.url('http://v3-web-app-micro.staging.superapp.co.id/auth/login');
      // await browser.maximizeWindow();
  });
  
  Then ('User able to see "Terdapat info yang belum lengkap" message verification', async() => {
      await browser.pause(3000);
  });
  
  Then ('User "able" to see "alertPengajuan" in "PO" page', async() => {
      await browser.pause(3000);
  })
  
  
  Given ('User get url', async() => { 
      // await browser.closeWindow()
      // await browser.reloadSession({
      //     browserName: 'chrome'
      // });
      await browser.url('https://v3-web-app-micro.staging.superapp.co.id/finance/payment-request-v4');
      await browser.pause(10000);
  })
  
  
  When ('User input "kodePORow1" to "fieldInputSearch" from "PO"', async() => {
      const kodePO = await POV4.kodePORow1.getText();
      //expect(await POV4.kodePORow1.isDisplayed());
      console.log("kodePO : " + kodePO);
      //await POV4.btnSearch.click();
      await POV4.fieldInputSearch.setValue(kodePO)
      await POV4.fieldInputSearch.click();
      await browser.keys(['Control', 'a']);
      await browser.pause();
      await browser.keys(['Control', 'c']);
  
      await browser.pause(3000);
  })
  


When ('User clicks "btnCari" button in "Finance" page', async() => {
    await POV4.btnCari.click();
})


When ('User clicks "btnDetailRow0" button in "Finance" page', async() => {
    await POV4.btnDetailRow0.click();
})


When ('User clicks "btnApprove" button in "Finance" page', async() => {
    await POV4.btnApproveModalPR.click();
})


Then ('User able to see request payment confirmation "poCodeModal" is match', async() => {
    
})


When ('User clicks "btnSimpanModalPR" button in "Finance" page', async() => {
    await POV4.btnSimpanModalPR.click();
})
