import HomePage from  '../../pageObjects/home.page';
import LoginPage from '../../pageObjects/login.page';
import ProductDetailPage from '../../pageObjects/productDetails.page';
import CartPage from '../../pageObjects/cart.page';
import NavigationBar from '../../pageObjects/navigationBar.page';
import Users from '../../../data/users.data';


describe('Add to card from landing page as authenticated user', () => {
    it('Add one item to cart as authenticated user', async () => {
        await LoginPage.open()
        await LoginPage.login(Users.correctCredentials.username, Users.correctCredentials.password)
        await browser.pause(3000)
        await HomePage.open();
        await browser.pause(5000)
        await HomePage.productCards[2].click();
        await browser.pause(5000);
        await ProductDetailPage.clickAddToCartButton();
        await NavigationBar.checkCartLinkText(1);
    });

    it('Add multiple item to cart as authenticated user', async () => {
        await HomePage.open()
        await browser.pause(5000)
        await HomePage.productCards[1].click();
        await browser.pause(5000);
        await ProductDetailPage.clickAddToCartButton();
        await browser.pause(3000)
        await NavigationBar.checkCartLinkText(2);
    });

    it('Remove all added items from the cart', async () => {
        await ProductDetailPage.clickOnCarLink();
        await browser.pause(3000)
        let numberOfItems = await CartPage.removeButton.length
        for(let i = 0; i <  numberOfItems; i++) {
            await CartPage.removeButton[i].click();
        }
        await ProductDetailPage.checkCartLinkText(0);
    });

    it('Navigate to product and check product description', async () => {
        await HomePage.open();
        await browser.pause(5000)
        await HomePage.checkProductsAreDisplayed();
        await HomePage.productCards[3].click();
        await browser.pause(5000);
        let productName = await ProductDetailPage.getProductName();
        let productPrice = await ProductDetailPage.getProductPrice();
        await browser.pause(5000)
        await ProductDetailPage.clickAddToCartButton();
        await ProductDetailPage.clickOnCarLink();
        await browser.pause(5000);
        await CartPage.checkProductName(productName);
        await CartPage.checkProductPrice(productPrice);
    });

    it('Sign out check cart is not cleared', async () => {
        await CartPage.clickSignOutButton();
        await LoginPage.open();
        await LoginPage.login(Users.correctCredentials.username, Users.correctCredentials.password);
        await NavigationBar.navigateToHome();
        await browser.pause(5000)
        await NavigationBar.checkCartLinkText(1)
    });
});


