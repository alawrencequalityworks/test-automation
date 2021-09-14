import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MyAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get myAccountTab () { return $('a[href="/myaccount/"]') }

    async checkUserIsInMyAccountTab() {
        await expect(this.myAccountTab).toBeDisplayed();
    }
}

export default new MyAccountPage();
