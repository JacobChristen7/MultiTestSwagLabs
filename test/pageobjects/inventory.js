import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import DefaultPage from './defaultPage.js';


class Inventory extends DefaultPage {

    get ShopBackpack () {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get ShopBikeLight () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get ShopBoltTShirt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    get ShopFleeceJacket () {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }

    get ShopOnesie () {
        return $('#add-to-cart-sauce-labs-onesie')
    }

    get ShopRedTShirt () {
        return $('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }

    get RemoveBikeLight () {
        return $('#remove-sauce-labs-bike-light')
    }

    get RemoveOnesie () {
        return $('#remove-sauce-labs-onesie')
    }

    get RemoveBackpack () {
        return $('#remove-sauce-labs-backpack')
    }

    get RemoveRedTShirt () {
        return $('button[data-test="remove-test.allthethings()-t-shirt-(red)"]')
    }

    get RemoveBoltTShirt () {
        return $('#remove-sauce-labs-bolt-t-shirt')
    }

    get RemoveFleeceJacket () {
        return $('#remove-sauce-labs-fleece-jacket')
    }

    get ShopBadgeNumber () {
        return $('.shopping_cart_link')
    }

    async addItems() {
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('1'))
        await this.ShopBikeLight.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('2'))
        await this.ShopBoltTShirt.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('3'))
        await this.ShopFleeceJacket.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('4'))
        await this.ShopOnesie.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('5'))
        await this.ShopRedTShirt.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('6'))
    }
    async removeAllItems() {
        await this.RemoveBackpack.click()
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('5'))
        await this.RemoveBikeLight.click()
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('4'))
        await this.RemoveBoltTShirt.click()
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('3'))
        await this.RemoveFleeceJacket.click()
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('2'))
        await this.RemoveOnesie.click()
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('1'))
        await this.RemoveRedTShirt.click()
    }

    async addAllItems() {
        await this.ShopBackpack.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('1'))
        await this.ShopBikeLight.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('2'))
        await this.ShopBoltTShirt.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('3'))
        await this.ShopFleeceJacket.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('4'))
        await this.ShopOnesie.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('5'))
        await this.ShopRedTShirt.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('6'))
    }

    async removeItems() {
        await this.RemoveBikeLight.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('5'))
        await this.RemoveOnesie.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('4'))
        await this.RemoveBackpack.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('3'))
        await this.RemoveRedTShirt.click();
        await expect(this.ShopBadgeNumber).toBeExisting()
        await expect(this.ShopBadgeNumber).toHaveText(
            expect.stringContaining('2'))
    }

}

export default new Inventory();