class NavigationBar {

    get signOutButton() {return $$('a.item')[2] }
    get homeButton() { return $('a[href="/"]')}
    get cartLink () { return $('a[href="/cart/"]') }

    async clickSignOutButton() {
        await this.signOutButton.click();
    }

    async navigateToHome() {
        this.homeButton.click();
    }

    async checkCartLinkText(number) {
        await expect(this.cartLink).toHaveTextContaining(`Cart (${number})`)
    }
}

export default new NavigationBar()