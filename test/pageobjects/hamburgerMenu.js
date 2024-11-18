import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import DefaultPage from './defaultPage.js';


class HamburgerMenu extends DefaultPage {

    get OpenBurgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get CloseBurgerMenu () {
        return $('#react-burger-cross-btn')
    }

    get AllItemsOption () {
        return $('#inventory_sidebar_link')
    }

    get AboutOption () {
        return $('#about_sidebar_link')
    }

    get LogoutOption () {
        return $('#logout_sidebar_link')
    }

    get ResetAppStateOption () {
        return $('#reset_sidebar_link')
    }

    get BackpackAddToCart () {
        return $('#add-to-cart-sauce-labs-backpack')
    }


    async hamburgerMenuMainPage () {
        await this.OpenBurgerMenu.click();
        await this.CloseBurgerMenu.click();
        await this.OpenBurgerMenu.click();
        await this.AllItemsOption.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await this.AboutOption.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/');
        await browser.back();
        await this.OpenBurgerMenu.click();
        await this.ResetAppStateOption.click();
        await this.LogoutOption.click();
    }

    async hamburgerMenu () {
        await this.OpenBurgerMenu.click();
        await this.CloseBurgerMenu.click();
        await this.OpenBurgerMenu.click();
        await this.AllItemsOption.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await browser.back();
        await this.OpenBurgerMenu.click();
        await this.AboutOption.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/');
        await browser.back();
        await this.OpenBurgerMenu.click();
        await this.ResetAppStateOption.click();
        await this.LogoutOption.click();
    }
}

export default new HamburgerMenu();