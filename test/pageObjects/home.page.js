import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get productMenu() { return $('div.two.cards')}
    get productCards () { return $$('a.ui.card') }
    get homeButton() { return $('a[href="/"]')}


    async navigateToHome() {
        this.homeButton.click();
    }

    async checkProductsAreDisplayed() {
        await expect(this.productMenu).toBeDisplayed();
    }

    open () {
        return super.open('');
    }
}

export default new HomePage();
