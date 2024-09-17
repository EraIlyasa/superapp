import MasterFlashsale from '../../pageobjects/Engagement/masterFlashsale';
import { Given, When, Then } from '@cucumber/cucumber';
import * as path from 'path';
const Flashsale = MasterFlashsale;

// When('User click "navMenuMarketing" in global page', async () => {
//     await Flashsale.Marketing.scrollIntoView();
//     await Flashsale.Marketing.click();
// });

When('User click "menuFlashsaleV4" inside "navMenuMarketing"', async () => {
    await Flashsale.menuFlashsaleV4.scrollIntoView();
    await Flashsale.menuFlashsaleV4.click();
});

When('User click "createFsale" inside "Flashsale"', async () => {
    await Flashsale.createFs.scrollIntoView();
    await Flashsale.createFs.click();
});

// When('User wait for {int} seconds', async (seconds) => {
//     await browser.pause(seconds * 1000);
// });

When('User click "uploadFsale" inside "Flashsale"', async () => {
    await Flashsale.clickGambar.scrollIntoView();
    await Flashsale.clickGambar.click();
});



// When('User input {string} into "uploadFsale"', async (filePath) => {
//     console.log(`Uploading file from path: ${filePath}`);
//     await Flashsale.uploadFs.setValue(filePath);
// });


// When ('User input "filePath" into "uploadGambar"', async () => {
    
//         const filePath = path.resolve('/Users/maulanajayadi/Documents/tes/git/griya-super/Product Banner Design.jpg');
//         const uploadFile = await browser.uploadFile(filePath)
//         // Mengunggah file
//         await Flashsale.uploadGambar.setValue(uploadFile);
//         await browser.keys(['Enter'])
//     });

When('User input "filePath" into "uploadGambar"', async () => {
    const uploadElement = await Flashsale.uploadGambar;

    await uploadElement.waitForExist({ timeout: 5000 });

    // Dapatkan elemen DOM asli
    const elementHandle = await uploadElement;

    // Gunakan elemen DOM dalam browser.execute()
    await browser.execute((el) => {
        el.style.display = 'block';
    }, await uploadElement);
    

    // Dapatkan path dari file
    const filePath = path.resolve('/Users/maulanajayadi/Documents/tes/git/griya-super/Product Banner Design.jpg');
    const uploadFile = await browser.uploadFile(filePath);

    // Set file ke input element
    await uploadElement.setValue(uploadFile);
    await browser.keys(['Enter']);
});
