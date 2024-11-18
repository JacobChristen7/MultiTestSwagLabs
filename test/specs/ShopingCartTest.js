import Login from '../pageobjects/login.js';
import Inventory from '../pageobjects/inventory.js'
import CheckoutPage from '../pageobjects/checkoutPage.js';
import InventoryNavigate from '../pageobjects/inventoryNavigate.js';


describe('Shopping Cart', () => {
    it('Shopping cart function was fully tested', async () => {
        await Login.login('standard_user', 'secret_sauce');
        await Inventory.addItems();
        await Inventory.removeAllItems();
        await Inventory.addAllItems();
        await InventoryNavigate.navToCart();
        await Inventory.removeItems();
        await InventoryNavigate.navToCheckout();
        await CheckoutPage.fillFormWrong();
        await CheckoutPage.fillForm();
        await InventoryNavigate.navToContinue();
        await InventoryNavigate.navToFinish();
        await InventoryNavigate.navToBackToItems();
    })
})