class UserDetails {

    get emailField () { return $('#email') }
    get nameField() { return $('#billing-name') }
    get addressField() { return $('#billing-street') }
    get postCodeField() { return $('#billing-zip') }
    get cityField() { return $('#billing-city') }
    get paymentInfoButton() {return $('.iconContinue') }
    get cardNumberField() { return $('#card_number') };
    get expireFiled() { return $('#cc-exp') };
    get cvcField() { return $('#cc-csc') };
    get payButton() { return $('#submitButton') };


    async fillBillingDetails(email, name, address, postalCode, city) {
        await this.emailField.setValue(email);
        await this.nameField.setValue(name);
        await this.addressField.setValue(address);
        await this.postCodeField.setValue(postalCode);
        await this.cityField.setValue(city);
        await this.paymentInfoButton.click();
    }

    async fillCreditCardDetailsAndSubmit(cardNo, expireDate, cvc) {
        await this.cardNumberField.click()
        let list = cardNo.split("")
        console.log(list)
        list.forEach(async element => {
            await browser.keys([element, "Right arrow"])
        })
        await this.expireFiled.click()
        list = expireDate.split("")
        list.forEach(async element => await browser.keys(element))
        await this.cvcField.setValue(cvc);
        await this.payButton.click();
    }
}

export default new UserDetails();