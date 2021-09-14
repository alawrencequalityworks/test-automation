import Page from './page';

class ProductDetailPage extends Page {

    get addToCartButton () { return $('button=Add to Cart') }
    get cartLink () { return $('a[href="/cart/"]') }
    get productName () { return $('div.header') }
    get productPrice () { return $$('p')[0] }

    get homeButton() { return $('a[href="/"]')}


    async navigateToHome() {
        this.homeButton.click();
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }

    async checkCartLinkText(number) {
        await expect(this.cartLink).toHaveTextContaining(`Cart (${number})`)
    }

    async clickOnCarLink() {
        await this.cartLink.click();
    }

    async getProductName() {
        return await this.productName.getText();
    }

    async getProductPrice() {
        return await this.productPrice.getText();
    }

    open (productId) {
        return super.open(`/product/${productId}`);
    }
}

export default new ProductDetailPage();
