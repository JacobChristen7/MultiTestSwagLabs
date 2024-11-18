import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import DefaultPage from './defaultPage.js'


class InventoryNavigate extends DefaultPage {

    get CartNav () {
        return $('.shopping_cart_link')
    }

    get CartCheck () {
        return $('span[data-test="title"]')
    }

    get CheckoutNav () {
        return $('#checkout')
    }

    get CheckoutCheck () {
        return $('span[data-test="title"]')
    }

    get ContinueNav () {
        return $('#continue')
    }

    get ContinueCheck () {
        return $('span[data-test="title"]')
    }

    get FinishNav () {
        return $('#finish')
    }

    get FinishCheck () {
        return $('span[data-test="title"]')
    }

    get BackToItemsNav () {
        return $('#back-to-products')
    }
    
    get CartIconCheck () {
        return $('.shopping_cart_badge')
    }

    get FleeceJacketCheck () {
        return $('#item_5_title_link')
    }

    get BoltTShirtCheck () {
        return $('#item_1_title_link')
    }
    
    async navToCart() {
        await this.CartNav.click();
        await expect(this.CartCheck).toBeExisting()
        await expect(this.CartCheck).toHaveText(
            expect.stringContaining('Your Cart'))
    }

    async navToCheckout() {
        await this.CheckoutNav.click();
        await expect(this.CheckoutCheck).toBeExisting()
        await expect(this.CheckoutCheck).toHaveText(
            expect.stringContaining('Checkout: Your Information'))
    }

    async navToContinue () {
        await this.ContinueNav.click();
        await expect(this.ContinueCheck).toBeExisting()
        await expect(this.ContinueCheck).toHaveText(
            expect.stringContaining('Checkout: Overview'))
        await expect(this.CartIconCheck).toBeExisting()
        await expect(this.CartIconCheck).toHaveText(
            expect.stringContaining('2'))
        await expect(this.BoltTShirtCheck).toBeExisting()
        await expect(this.BoltTShirtCheck).toHaveText(
            expect.stringContaining('Sauce Labs Bolt T-Shirt'))
        await expect(this.FleeceJacketCheck).toBeExisting()
        await expect(this.FleeceJacketCheck).toHaveText(
            expect.stringContaining('Sauce Labs Fleece Jacket'))
    }

    async navToFinish () {
        await this.FinishNav.click();
        await expect(this.FinishCheck).toBeExisting()
        await expect(this.FinishCheck).toHaveText(
            expect.stringContaining('Checkout: Complete!'))
    }

    async navToBackToItems () {
        await this.BackToItemsNav.click();
    }
}

export default new InventoryNavigate();