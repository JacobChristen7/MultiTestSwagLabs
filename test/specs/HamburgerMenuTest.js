import Login from '../pageobjects/login.js';
import HamburgerMenu from '../pageobjects/hamburgerMenu.js';
import HamburgerNavigate from '../pageobjects/hamburgerNavigate.js';


describe('Hamburger Menu', () => {
    it('Hamburger menu functions work on all pages', async () => {
        await Login.login('standard_user', 'secret_sauce')
        await HamburgerMenu.hamburgerMenuMainPage()
        await HamburgerNavigate.navToCart()
        await HamburgerMenu.hamburgerMenu()
        await HamburgerNavigate.navToCheckout()
        await HamburgerMenu.hamburgerMenu()
        await HamburgerNavigate.navToContinue()
        await HamburgerMenu.hamburgerMenu()
        await HamburgerNavigate.navToFinish()
        await HamburgerMenu.hamburgerMenu()
    })
})

