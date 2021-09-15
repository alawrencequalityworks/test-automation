class CartPage {
    get removeButton() { return $$('i.remove.icon') }
    get productName() { return $('div.header') }
    get productPrice() { return $('div.meta') }
    get signOutButton() { return $$('a.item')[2] }
    get checkoutButton() { return $('button=Check out') }
    get successMessage() { return $('div.success') }

    async checkProductName(expectedProductName) {
        await expect(this.productName).toHaveTextContaining(expectedProductName)
    }

    async checkProductPrice(expectedProductPrice) {
        await expect(this.productPrice).toHaveTextContaining(expectedProductPrice)
    }

    async clickSignOutButton() {
        await this.signOutButton.click();
    }

    async clickCheckOutButton() {
        await this.checkoutButton.click();
    }

    async checkSuccessMessage(expectedMessage) {
        await expect(this.successMessage).toHaveTextContaining(expectedMessage)
    }
}

export default new CartPage();
//Andrew