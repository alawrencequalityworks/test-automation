import HomePage from  '../../pageObjects/home.page';
import ProductDetailPage from '../../pageObjects/productDetails.page';
import CartPage from '../../pageObjects/cart.page';
import NavigationBar from '../../pageObjects/navigationBar.page';
import UserDetails from '../../pageObjects/userDetailsModel.page';
import BillingData from '../../../data/billing.data';
import LoginPage from '../../pageObjects/login.page';
import Users from '../../../data/users.data';


describe('CheckOut feature', () => {
    it('Checkout as guest user', async () => {
        await HomePage.open();
        await HomePage.productCards[0].click();
        await ProductDetailPage.clickAddToCartButton();
        await NavigationBar.checkCartLinkText(1);
        await ProductDetailPage.clickOnCarLink();
        await CartPage.clickCheckOutButton();
        await browser.pause(3000)
        await browser.switchToFrame(0)
        await $('.bodyView').isDisplayed();
        await $('#email').isDisplayed();
        await UserDetails.fillBillingDetails(BillingData.billingData.email, BillingData.billingData.name,
            BillingData.billingData.address, BillingData.billingData.postCode, BillingData.billingData.city);
        await browser.pause(1000)
        await UserDetails.fillCreditCardDetailsAndSubmit(BillingData.creditCard.cardNo, BillingData.creditCard.expireDate,
            BillingData.creditCard.cvc);
        await browser.pause(5000)
        await CartPage.checkSuccessMessage("Your placed!\nCongratulations. Your order and payment has been accepted.")
    });

    it('Checkout as authenticated user', async () => {
        await LoginPage.open()
        await LoginPage.login(Users.correctCredentials.username, Users.correctCredentials.password)
        await browser.pause(5000)
        await HomePage.open();
        await browser.pause(5000)
        await HomePage.productCards[0].click();
        await ProductDetailPage.clickAddToCartButton();
        await NavigationBar.checkCartLinkText(1);
        await ProductDetailPage.clickOnCarLink();
        await CartPage.clickCheckOutButton();
        await browser.pause(3000)
        await browser.switchToFrame(0)
        await $('.bodyView').isDisplayed();
        await $('#email').isDisplayed();
        await UserDetails.fillBillingDetails(BillingData.billingData.email, BillingData.billingData.name,
            BillingData.billingData.address, BillingData.billingData.postCode, BillingData.billingData.city);
        await browser.pause(1000)
        await UserDetails.fillCreditCardDetailsAndSubmit(BillingData.creditCard.cardNo, BillingData.creditCard.expireDate,
            BillingData.creditCard.cvc);
        await browser.pause(5000)
        await CartPage.checkSuccessMessage("Your placed!\nCongratulations. Your order and payment has been accepted.")
    });
});


