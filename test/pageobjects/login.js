import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import DefaultPage from './defaultPage.js';


class Login extends DefaultPage {
    
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get buttonSubmit () {
        return $('input[type="submit"]');
    }

    get logoCheck () {
        return $('.app_logo');
    }

    get errorCheck () {
        return $('.error-button');
    }

    get lockedOutCheck () {
        return $('h3');
    }

    get BackpackAddToCart () {
        return $('#add-to-cart-sauce-labs-backpack')
    }


    async login (username, password) {  
        await this.open()  
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
        await expect(this.logoCheck).toBeExisting()
        await expect(this.logoCheck).toHaveText(
            expect.stringContaining('Swag Labs'))
        await this.BackpackAddToCart.click();
    }
}

export default new Login();
