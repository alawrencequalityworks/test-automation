import HomePage from  '../../pageObjects/home.page';
import ProductDetailPage from '../../pageObjects/productDetails.page';
import CartPage from '../../pageObjects/cart.page';
import NavigationBar from '../../pageObjects/navigationBar.page';


describe('Add to card from landing page as a guest', () => {
    it('Add one item to cart as guest user', async () => {
        await HomePage.open();
        await HomePage.productCards[0].click();
        await ProductDetailPage.clickAddToCartButton();
        await NavigationBar.checkCartLinkText(1);
    });

    it('Add multiple item to cart as guest user', async () => {
        await HomePage.open();
        await HomePage.checkProductsAreDisplayed()
        await HomePage.productCards[2].click();
        await ProductDetailPage.clickAddToCartButton();
        await browser.pause(3000)
        await NavigationBar.checkCartLinkText(2);
        await NavigationBar.navigateToHome();
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
});


