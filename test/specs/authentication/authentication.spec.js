import LoginPage from  '../../pageObjects/login.page';
import MyAccount from '../../pageObjects/myAccount.page';
import Users from '../../../data/users.data';


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(Users.correctCredentials.username, Users.correctCredentials.password);
        await MyAccount.checkUserIsInMyAccountTab()
    });

    it('should login with invalid password', async () => {
        await LoginPage.open();
        await LoginPage.login(Users.incorrectPassword.username, Users.incorrectPassword.password);
        await LoginPage.checkErrorMessage("Sorry\nPlease check your login details and try again.")
    });

    it('should login with no password', async () => {
        await LoginPage.open();
        await LoginPage.login(Users.noPassword.username, Users.noPassword.password);
        await LoginPage.checkPasswordRequiredMessage("Password is required")
    });

    it('should login with invalid email', async () => {
        await LoginPage.open();
        await LoginPage.login(Users.invalidEMail.username, Users.invalidEMail.password);
        await LoginPage.checkErrorMessage("Sorry\nPlease check your login details and try again.")
    });
});


