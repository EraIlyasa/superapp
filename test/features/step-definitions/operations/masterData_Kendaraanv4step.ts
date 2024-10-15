import masterData_Kendaraanv4 from '../../pageobjects/operations/masterData_Kendaraanv4';
import { addAttachment } from '@wdio/allure-reporter';

function uniqueNumber(max: number): number {
    return Math.floor(Math.random() * max);
}

let randomNumber = uniqueNumber(1000);
console.log(randomNumber); // returns a unique number
let uniqueChar = Math.random().toString(36).substring(2, 5).toUpperCase();

class masterData_Kendaraanv4step {
    public async stepOne() {
        const KendaraanV4 = masterData_Kendaraanv4;
        
        await KendaraanV4.masterData.scrollIntoView();
        await KendaraanV4.masterData.click();
        await this.captureScreenshot('Clicked on Master Data');
        
        await KendaraanV4.kendaraanV4Menu.scrollIntoView();
        await KendaraanV4.kendaraanV4Menu.waitForClickable();
        await KendaraanV4.kendaraanV4Menu.click();
        await this.captureScreenshot('Clicked on Kendaraan V4 Menu');

        const Title = await KendaraanV4.title.getText();
        console.log('KendaraanV4 ' + Title);
        
        await browser.pause(5000);
        await KendaraanV4.buatKendaraan.click();
        await this.captureScreenshot('Clicked on Buat Kendaraan');

        await KendaraanV4.Motor.click();
        await this.captureScreenshot('Selected Motor Type');

        await KendaraanV4.inputKendaraan.setValue('suprax2');
        await this.captureScreenshot('Entered Kendaraan Name');
        
        await browser.pause(3000);

        let isPlatNomorUnique = false;
        let attempts = 0;

        while (!isPlatNomorUnique && attempts < 3) { // Retry a maximum of 3 times
            const platNomor = 'B ' + randomNumber + uniqueChar;
            await KendaraanV4.inputPlatNomor.setValue(platNomor);
            await this.captureScreenshot('Entered Plat Nomor: ${platNomor}');
            
            await KendaraanV4.simpanBtn.click();
            await this.captureScreenshot('Clicked on Simpan Button');

            await KendaraanV4.simpanBtnKonfirmasi.click();
            
            await browser.pause(3000); 

            if (await KendaraanV4.errorPlatNomor.isDisplayed()) { 
                console.log('Plat Nomor ' + platNomor + ' already exists, retrying...');
                await KendaraanV4.errorPlatNomor.waitForClickable();
                await KendaraanV4.errorPlatNomor.click();
                await this.captureScreenshot('Retrying - Clicked on Buat Kendaraan Again');
                
                attempts++;
                // Generate new unique values
                randomNumber = uniqueNumber(1000);
                uniqueChar = Math.random().toString(36).substring(2, 5).toUpperCase();
            } else {
                isPlatNomorUnique = true; 
            }
        }

        if (!isPlatNomorUnique) {
            throw new Error('Failed to create a unique plat nomor after 3 attempts');
        }

        await KendaraanV4.simpanBtnKonfirmasi.waitForClickable();
        await KendaraanV4.simpanBtnKonfirmasi.click();
        await this.captureScreenshot('Clicked on Simpan Confirmation Button');

        await browser.pause(5000);
        await KendaraanV4.namaKendaraan.isDisplayed();
        const getNamaKendaraan = await KendaraanV4.namaKendaraan.getText();
        console.log('#Nama Kendaraan is ' + getNamaKendaraan);
        await this.captureScreenshot('Final - Nama Kendaraan is Displayed');
    }

    private async captureScreenshot(stepDescription: string) {
        const screenshot = await browser.takeScreenshot();
        addAttachment(stepDescription, Buffer.from(screenshot, 'base64'), 'image/png');
    }

    public async stepTwo() {
        const KendaraanV4 = masterData_Kendaraanv4;
        await KendaraanV4.masterData.scrollIntoView();
        await KendaraanV4.masterData.click();
        await KendaraanV4.kendaraanV4Menu.scrollIntoView();
        await KendaraanV4.kendaraanV4Menu.waitForClickable();
        await KendaraanV4.kendaraanV4Menu.click();

        const Title = await KendaraanV4.title.getText();
        expect (console.log('KendaraanV4 ' + Title));

        await browser.pause(5000);
        await KendaraanV4.buatKendaraan.click();

        await KendaraanV4.Motor.click();
        await KendaraanV4.inputKendaraan.setValue('suprax2');
        await browser.pause(3000);
        await KendaraanV4.inputPlatNomor.setValue('B ' + randomNumber + ' ' + uniqueChar);
        await KendaraanV4.simpanBtn.click();
        await KendaraanV4.simpanBtnKonfirmasi.waitForClickable();
        await KendaraanV4.simpanBtnKonfirmasi.click();

        await browser.pause(5000);
        await KendaraanV4.namaKendaraan.isDisplayed();
        const getNamaKendaraan = await KendaraanV4.namaKendaraan.getText();
        expect (console.log('#Nama Kendaraan is ' + getNamaKendaraan));
    }
}
export default new masterData_Kendaraanv4step();