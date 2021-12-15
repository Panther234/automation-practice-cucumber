package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());
    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Authentication']")
    WebElement verifyAuthenticationMessage;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Sign in']")
    WebElement clickSignInButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-danger']//ol")
    WebElement errorMessageDisplayed;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutLink;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailCreate;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Create an account']")
    WebElement createAccountButton;


    public void authenticationMessage(String text) {
        verifyThatTextIsDisplayed(verifyAuthenticationMessage, text);
        log.info("Verify Text displayed  : " + text + verifyAuthenticationMessage.toString());
    }

    public void signInButton() {
        clickOnElement(clickSignInButton);
        log.info("Click SignIn  : " + clickSignInButton.toString());
    }

    public void wrongEmailCredentials(String username) {
        sendTextToElement(emailField, username);
        log.info("Using wrong Email credential  : " +username+ emailField.toString());
    }

    public void wrongPasswordCredentials(String password) {
        sendTextToElement(passwordField, password);
        log.info("Using wrong Password credential   : " +password +  passwordField.toString());
    }

    public void errorMessageVerify(String errorMessage) {
        verifyThatTextIsDisplayed(errorMessageDisplayed, errorMessage);
        log.info("Verify Error : " + errorMessage + errorMessageDisplayed.toString());
    }

    public void emailAddress(String text) {
        sendTextToElement(emailField, text);
        log.info("Send Email : " + text + emailField.toString());
    }

    public void setPasswordField(String text) {
        sendTextToElement(passwordField, text);
        log.info("Send Password : " + text + passwordField.toString());
    }

    public void signOutLink() {
        verifyThatElementIsDisplayed(signOutLink);
        log.info("Verify SignOut link  : "  + signOutLink.toString());
    }

    public void clickSignOutLink() {
        clickOnElement(signOutLink);
        log.info("Click SignOut link : "  + signOutLink.toString());
    }

    public void verifySignInLinkDisplayed() {
        verifyThatElementIsDisplayed(clickSignInButton);
        log.info("Verify SignIn link : "  + clickSignInButton.toString());
    }

    public void enterEmail(String text) {
        sendTextToElement(emailCreate, text);
        log.info("Enter Email : " + text + emailCreate.toString());
    }

    public void clickCreateAccountButton() {
        clickOnElement(createAccountButton);
        log.info("Click create account  : " + createAccountButton.toString());
    }
}
