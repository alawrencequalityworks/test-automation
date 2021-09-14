import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#email') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get uiErrorMessage () { return $('div.error') }
    get passwordRequiredMessage () { return $('p[style="color: red;"]') }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async checkErrorMessage(message) {
        await expect(this.uiErrorMessage).toBeDisplayed();
        await expect(this.uiErrorMessage).toHaveTextContaining(message)
    }

    async checkPasswordRequiredMessage(message) {
        await expect(this.passwordRequiredMessage).toBeDisplayed();
        await expect(this.passwordRequiredMessage).toHaveTextContaining(message)
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
