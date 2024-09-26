import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../../pageobjects/authentications/loginPage';

const login = loginPage;


Given('I send login url', async () => {
    await browser.url('http://v3-web-app-micro.staging.superapp.co.id/auth/login');
    await browser.maximizeWindow();
});

When('I login with credential', async() => {
    
    let btnlog = false;
        let maxAttempts = 3;

        do {
            try {
                await login.loginWithGoogleButton.click();
                btnlog = true;
            } catch (e) {
                const error = e as Error; 
                console.error('Error clicking button:', error.message);

                await new Promise(resolve => setTimeout(resolve, 1500)); 

                maxAttempts--;
                if (maxAttempts === 0) {
                    console.error('Maximum attempts reached. Reloading the page.');
                    await browser.refresh();
                    maxAttempts = 3;
                }
            }
        } while (!btnlog);

        const parentHandle = await browser.getWindowHandle();
        const childHandles = await browser.getWindowHandles();

        for (const handle of childHandles) {
            if (handle !== parentHandle) {
                await browser.switchToWindow(handle);
                console.log(`Switched to window with title: ${await browser.getTitle()}`);
                break;
            }
        }

        const iframes = await $$('iframe');
        if (await iframes.length > 0) {
            await browser.switchToFrame(iframes[0]);
            console.log('Switched to iframe containing the email input');
        }

        try {
            await login.emailInput.setValue('mariansyah.riwendi@nusantara.technology');
            await login.nextButton.click();
        } catch (e) {
            const error = e as Error
            console.error('Error interacting with email input:', error.message);
            throw error; 
        }

        await login.passwordInput.setValue('passwordsuperapp');
        await login.nextButton.click();

        await browser.switchToWindow(parentHandle);
        await browser.pause(5000);
})

Then('I see usernameDisplay', async () => {
    await browser.pause(3000);
    const isExisting = await login.usernameDisplay.isExisting();
    console.log('Element exists:', isExisting);

    if (isExisting) {
        const title = await login.usernameDisplay.getText();
        console.log('Title:', title);
    } else {
        console.error('usernameDisplay element not found.');
    }
    await browser.pause(1000);
});

Given ('User login', async() => {
    await browser.url('http://v3-web-app-micro.staging.superapp.co.id/auth/login');
    await browser.maximizeWindow();

    let btnlog = false;
        let maxAttempts = 3;

        do {
            try {
                await login.loginWithGoogleButton.click();
                btnlog = true;
            } catch (e) {
                const error = e as Error; 
                console.error('Error clicking button:', error.message);

                await new Promise(resolve => setTimeout(resolve, 1500)); 

                maxAttempts--;
                if (maxAttempts === 0) {
                    console.error('Maximum attempts reached. Reloading the page.');
                    await browser.refresh();
                    maxAttempts = 3;
                }
            }
        } while (!btnlog);

        const parentHandle = await browser.getWindowHandle();
        const childHandles = await browser.getWindowHandles();

        for (const handle of childHandles) {
            if (handle !== parentHandle) {
                await browser.switchToWindow(handle);
                console.log(`Switched to window with title: ${await browser.getTitle()}`);
                break;
            }
        }

        const iframes = await $$('iframe');
        if (await iframes.length > 0) {
            await browser.switchToFrame(iframes[0]);
            console.log('Switched to iframe containing the email input');
        }

        try {
            await login.emailInput.setValue('mariansyah.riwendi@nusantara.technology');
            await login.nextButton.click();
        } catch (e) {
            const error = e as Error
            console.error('Error interacting with email input:', error.message);
            throw error; 
        }

        await login.passwordInput.setValue('passwordsuperapp');
        await login.nextButton.click();
        await browser.switchToWindow(parentHandle);
        await browser.pause(5000);

        await browser.pause(3000);
        const isExisting = await login.usernameDisplay.isExisting();
        console.log('Element exists:', isExisting);

        if (isExisting) {
            const title = await login.usernameDisplay.getText();
            console.log('Title:', title);
        } else {
            console.error('usernameDisplay element not found.');
        }
        await browser.pause(1000);

})