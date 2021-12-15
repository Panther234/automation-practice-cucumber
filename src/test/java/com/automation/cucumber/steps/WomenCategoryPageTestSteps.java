package com.automation.cucumber.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WomenCategoryPageTestSteps {
    @When("^I click on 'Women' tab$")
    public void iClickOnWomenTab() {
        new HomePage().selectMenu("Women");
    }

    @Then("^I can verify 'Women' text$")
    public void iCanVerifyWomenText() {
        new WomenCategoryPage().verifyWomenText("Women");
    }

    @And("^I click on \"([^\"]*)\"$")
    public void iClickOn(String product)  {
        new WomenCategoryPage().clickProductList(product);
    }

    @And("^I change the \"([^\"]*)\" in display quantity tab$")
    public void iChangeTheInDisplayQuantityTab(String qty)  {
        new ProductPage().addQuantityWanted(qty);
    }

    @And("^I select \"([^\"]*)\" from size list$")
    public void iSelectFromSizeList(String size)  {
        new ProductPage().selectSize(size);
    }

    @And("^I select \"([^\"]*)\" from available colour box$")
    public void iSelectFromAvailableColourBox(String colour)  {
        new ProductPage().selectColor(colour);
    }

    @And("^I click on 'Add to Cart' button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddToCartBtn();
    }

    @And("^I can verify 'Message' displayed in popup$")
    public void iCanVerifyMessageDisplayedInPopup() {
        new ProductPage().verifyPopUpDisplayMsg("Product successfully added to your shopping cart");
    }

    @Then("^I click 'close' button to close popup$")
    public void iClickCloseButtonToClosePopup() {
        new ProductPage().closePopUpButton();
    }
}
