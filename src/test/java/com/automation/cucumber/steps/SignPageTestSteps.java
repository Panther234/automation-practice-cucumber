package com.automation.cucumber.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignPageTestSteps {
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I Click on Sign In link$")
    public void iClickOnSignInLink() {
        new HomePage().signInLink();
    }

    @Then("^I can verify that 'AUTHENTICATION' message is displayed$")
    public void iCanVerifyThatAUTHENTICATIONMessageIsDisplayed() {
        new SignInPage().authenticationMessage("Authentication");
    }

    @And("^I enter \"([^\"]*)\" in email address field$")
    public void iEnterInEmailAddressField(String username) {
        new SignInPage().wrongEmailCredentials(username);
    }

    @And("^I enter \"([^\"]*)\" in password field$")
    public void iEnterInPasswordField(String password) {
        new SignInPage().wrongPasswordCredentials(password);
    }

    @And("^I click on 'Sign In' button$")
    public void iClickOnSignInButton() {
        new SignInPage().signInButton();
    }

    @Then("^I verify Error message \"([^\"]*)\" displayed$")
    public void iVerifyErrorMessageDisplayed(String errorMessage) {
        new SignInPage().errorMessageVerify(errorMessage);
    }

    @And("^I Enter Email in email address field$")
    public void iEnterEmailInEmailAddressField() {
        new SignInPage().emailAddress("bobalexa@gmail.com");
    }

    @And("^I Enter Password in password field$")
    public void iEnterPasswordInPasswordField() {
        new SignInPage().setPasswordField("Abc1234");
    }

    @Then("^I can Verify that Sign out link is displayed$")
    public void iCanVerifyThatSignOutLinkIsDisplayed() {
        new SignInPage().signOutLink();
    }
    @And("^I click on 'Sign Out' Link$")
    public void iClickOnSignOutLink() {
        new SignInPage().clickSignOutLink();
    }

    @Then("^I can Verify that Sign in link is displayed$")
    public void iCanVerifyThatSignInLinkIsDisplayed() {
        new SignInPage().verifySignInLinkDisplayed();
    }
}
