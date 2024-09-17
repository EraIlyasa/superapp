import path from "path";
import pointTukarPage from "../../pageobjects/Engagement/pointTukarPage";
import { When, Then, Given } from "@wdio/cucumber-framework";
import { error } from "console";

const poinTukar = pointTukarPage;

Given ('User click "btnCreateNewParameterVoucher" inside "menuPointTukar"', async() => {
    await poinTukar.btnCreateNewParameterVoucher.click();
})


When ('User click "menuPoinTukar" inside "navMenuMarketing"', async() => {
    await poinTukar.menuPoinTukar.scrollIntoView();
    await browser.pause(1000);
    // await poinTukar.menuPoinTukar.click();
    (await poinTukar.getMenu('PoinTukar')).click();
})


When ('User click "subMenuVoucherParameter" inside "menuPointTukar"', async() => {
    await poinTukar.subMenuVoucherParameter.click();
})


When ('User upload image to "uploadImage" voucher detail', async() => {
    const uploadElement = await poinTukar.uploadImage;
    await poinTukar.uploadImage.scrollIntoView();
    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('C:\\Users\\Asus\\Documents\\git\\griya-super\\Images\\Product Banner Design.jpg');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
    await browser.keys(['Enter'])
})


When ('User click "fieldInputVoucherName"', async() => {
    await poinTukar.fieldInputVoucherName.waitForDisplayed({timeout:3000});
    await poinTukar.fieldInputVoucherName.click();
})


When ('User input {string} into "fieldInputVoucherName"', async(voucherName) => {
    await poinTukar.fieldInputVoucherName.setValue(voucherName);
})


When ('User click "fieldInputVoucherPrefix"', async() => {
    await poinTukar.fieldInputVoucherPrefix.waitForDisplayed({timeout:3000});
    await poinTukar.fieldInputVoucherPrefix.click();
})


When ('User input {string} into "fieldInputVoucherPrefix"', async(voucherPrefix) => {
    await poinTukar.fieldInputVoucherPrefix.setValue(voucherPrefix);
})


When ('User click "fieldInputDuration"', async() => {
    await poinTukar.fieldInputDuration.click();
})


When ('User input {string}', async(duration) => {
    await poinTukar.fieldInputDuration.setValue(duration);
})


When ('User click "toggleAllDay"', async() => {
    await poinTukar.toggleAllDay.click();
})


When ('User click "fieldValidDay"', async() => {
    await poinTukar.fieldValidDay.click();
})


When ('User input {string} into "fieldValidDay"', async(validDay) => {
    await poinTukar.fieldValidDay.setValue(validDay);
})


When ('User click "fieldcondition"', async() => {
    await poinTukar.fieldCondition.scrollIntoView();
    await poinTukar.fieldCondition.click();
})


When ('User click "getConditions" inside "fieldCondition"', async() => {
    (await poinTukar.getConditions('All Product Except')).click();
    await browser.pause(1000);
})


When ('User click "fieldProductCluster"', async() => {
    await poinTukar.fieldProductCluster.click();
    await browser.pause(1000);
})


When ('User get "getProductCluster" inside fieldProductCluster"', async() => {
    (await poinTukar.getProductCluster('ad')).click();
})


When ('User click "fieldDiscountBy"', async() => {
    await poinTukar.fieldDiscountBy.click();
})


When ('User click "optDiscountBy1" inside "fieldDiscountBy"', async() => {
    await poinTukar.optDiscountBy1.click();
})


When ('User click "fieldInputJumlahDiskon"', async() => {
    await poinTukar.fieldInputJumlahDiskon.click();
})


When ('User input {string} inside "fieldInputJumlahDiskon"', async(diskon) => {
    for (const char of diskon) {
        await poinTukar.fieldInputJumlahDiskon.setValue(char);
        await browser.pause(100);  
    }
})


When ('User click "fieldInputJumlahTransaksi"', async() => {
    await poinTukar.fieldInputJumlahTransaksi.click();
})


When ('User input {string} inside "fieldInputJumlahTransaksi"', async(jumlahTransaksi) => {
    for (const char of jumlahTransaksi) {
        await poinTukar.fieldInputJumlahTransaksi.setValue(char);
        await browser.pause(100);  // Jeda 200ms antara setiap input
    }
})

When ('User click "fieldInputTitle"', async() => {
    await poinTukar.fieldInputTitle.scrollIntoView();
    await poinTukar.fieldInputTitle.click();
})


When ('User click "fieldInputDesc"', async() => {
    await poinTukar.fieldInputDesc.click();
})


When ('User input {string} inside "fieldInputDesc"', async(description) => {
    await poinTukar.fieldInputDesc.setValue(description);
    await browser.pause(1000);
})

When ('User input {string} inside "fieldInputTitle"', async(title) => {
    await poinTukar.fieldInputTitle.setValue(title);
})


When ('User input {string} inside "fieldInputDescAboutVoucher"', async(description) => {
    (await poinTukar.getDesc('[1]')).scrollIntoView();
    await browser.pause(1000);
    (await poinTukar.getDesc('[1]')).click();
    (await poinTukar.getDesc('[1]')).setValue(description);
})


When ('User input {string} inside "fieldInputDescTC"', async(description) => {
    // (await poinTukar.getDesc('[2]')).scrollIntoView();
    // await browser.pause(1000);
    (await poinTukar.getDesc('[2]')).click();
    (await poinTukar.getDesc('[2]')).setValue(description);
    await browser.pause(1000);
})


When ('User input {string} inside "fieldInputDescH2U"', async(description) => {
    await poinTukar.scroll.scrollIntoView();
    await browser.pause(1000);
    (await poinTukar.getDesc('[3]')).click();
    (await poinTukar.getDesc('[3]')).setValue(description);
    await browser.pause(1000);
})


When ('User click "btnCreateVoucher" to create voucher', async() => {
    await poinTukar.btnCreateVoucher.click();
})


Then ('User verify "allertUploadImage"', async() => {
    // const expected = (await poinTukar.allertUploadImage).isDisplayed()
    if (expect ((await poinTukar.allertUploadImage).isDisplayed())) {
        await poinTukar.allertUploadImage.isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertVoucherName"', async() => {
    if (expect ((await poinTukar.getAllert('[1]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertVoucherPrefix"', async() => {
    if (expect ((await poinTukar.getAllert('[2]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertDuration"', async() => {
    if (expect ((await poinTukar.getAllert('[3]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertValidDay"', async() => {
    if (expect ((await poinTukar.getAllert('[4]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertJumlahDiskon"', async() => {
    (await poinTukar.getAllert('[5]')).scrollIntoView();
    if (expect ((await poinTukar.getAllert('[5]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertJumlahTransaksi"', async() => {
    if (expect ((await poinTukar.getAllert('[6]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertTitle"', async() => {
    (await poinTukar.getAllert('[7]')).scrollIntoView();
    if (expect ((await poinTukar.getAllert('[7]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertMainDesc"', async() => {
    if (expect ((await poinTukar.getAllert('[8]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertAboutVoucher"', async() => {
    if (expect ((await poinTukar.getAllert('[9]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertTC"', async() => {
    if (expect ((await poinTukar.getAllert('[10]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


Then ('User verify "allertH2U"', async() => {
    await poinTukar.scroll.scrollIntoView();
    if (expect ((await poinTukar.getAllert('[11]')).isDisplayed())) {
        // (await poinTukar.getAllert('[1]')).isDisplayed();
        console.log('there is an allert showed');
    } else {
        throw error('there is no allert showed')
    }
})


When ('User close the window', async() => {
    await browser.sessionEnd;
    // await browser.reloadSession();
    // await browser.navigateTo('http://v3-web-app-micro.staging.superapp.co.id/auth/login');
})


When ('User click "btnCancel"', async() => {
    await poinTukar.btnCancel.click();
})


Then ('User validate the "fieldInputVoucherPrefix" input', async() => {
    const text = await poinTukar.fieldInputVoucherPrefix.getValue();
    const karkaterLength = text.length;
    console.log('Jumlah karakter input voucher prefix: ', karkaterLength);

    if (karkaterLength > 10) {
        console.log('Jumlah karakter melebihi batas maksimal')
    } else {
        console.log('Jumlah karakter telah sesuai')
    }
})


Then ('User validate the "fieldInputVoucherName" input', async() => {
    const text = await poinTukar.fieldInputVoucherName.getValue();
    const karkaterLength = text.length;
    console.log('Jumlah karakter input voucher name: ', karkaterLength);

    if (karkaterLength > 40) {
        console.log('Jumlah karakter melebihi batas maksimal')
    } else {
        console.log('Jumlah karakter telah sesuai')
    }
})


Then ('User validate the "fieldInputTitle" input', async() => {
    const text = await poinTukar.fieldInputTitle.getValue();
    const karkaterLength = text.length;
    console.log('Jumlah karakter input title: ', karkaterLength);

    if (karkaterLength > 40) {
        console.log('Jumlah karakter melebihi batas maksimal')
    } else {
        console.log('Jumlah karakter telah sesuai')
    }
})


Then ('User validate the "fieldInputDesc" input', async() => {
    const text = await poinTukar.fieldInputDesc.getValue();
    const karkaterLength = text.length;
    console.log('Jumlah karakter input title: ', karkaterLength);

    if (karkaterLength > 100) {
        console.log('Jumlah karakter melebihi batas maksimal')
    } else {
        console.log('Jumlah karakter telah sesuai')
    }
})


Then ('User will be back to "subMenuVoucherParameter" and able to see {string}', async(expectedTitle: string) => {
    const title = await poinTukar.titleMenu.getText();
    expect (await title).toEqual(expectedTitle);
})


When ('User upload invalid image to "uploadImage" voucher detail', async() => {
    const uploadElement = await poinTukar.uploadImage;
    await poinTukar.uploadImage.scrollIntoView();
    await uploadElement.waitForExist({ timeout: 5000 });

    await browser.execute((el:HTMLElement) => {
        el.style.display = 'block';
    }, uploadElement);
    const filePath = path.resolve('C:\\Users\\Asus\\Documents\\git\\griya-super\\Images\\200 x300 .png');
    const uploadFile = await browser.uploadFile(filePath)

    await uploadElement.setValue(uploadFile);
    await browser.keys(['Enter'])
})


Given ('I refresh the browser', async() => {
    await browser.deleteCookies();
    await browser.refresh();
})


When ('User back to previous page', async() => {
    await browser.back();
})