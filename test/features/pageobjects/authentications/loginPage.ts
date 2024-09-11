import { $ } from '@wdio/globals';

export default new class loginPage {
    get loginWithGoogleButton() { return $('//span[contains(text(),"Login dengan Google")]'); }
    get emailInput() { return $('//input[@type="email" and @aria-label="Email or phone"]'); }
    get passwordInput() { return $('//input[@type="password" and @aria-label="Enter your password"]'); }
    get nextButton() { return $('//span[contains(text(), "Next")]'); }
    get usernameDisplay() { return $('//*[@data-testid="page-header-title"]'); }     
}

