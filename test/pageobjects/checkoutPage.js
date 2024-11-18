import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'


class CheckoutPage {

    get FirstNameInput () {
        return $('#first-name')
    }

    get LastNameInput () {
        return $('#last-name')
    }

    get PostalCodeInput () {
        return $('#postal-code')
    }

    get ContinueButton () {
        return $('#continue')
    }

    get FormError () {
        return $('h3[data-test="error"]')
    }

    async fillForm () {
        await this.FirstNameInput.setValue('temp')
        await this.LastNameInput.setValue('temp')
        await this.PostalCodeInput.setValue('temp')
    }

    async fillFormWrong() {
        await this.FirstNameInput.setValue('')
        await this.LastNameInput.setValue('Bad temp')
        await this.PostalCodeInput.setValue('Bad temp')
        await this.ContinueButton.click();
        await expect(this.FormError).toBeExisting();
        await expect(this.FormError).toHaveText(
            expect.stringContaining('Error: First Name is required'))
    }
}

export default new CheckoutPage();