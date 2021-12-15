package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WomenCategoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());
    public WomenCategoryPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = " //h2[normalize-space()='Women']")
    WebElement womenTextVerify;

    @CacheLookup
    @FindBy(xpath = "//a[@class='product-name']")
    WebElement productList;

    public void verifyWomenText(String text){

        verifyThatTextIsDisplayed(womenTextVerify, text);
        log.info("Verify Women Text " + text + womenTextVerify.toString());
    }
    public void clickProductList(String text){

        clickOnElement(productList,text);
        log.info("Click Product list : " + text + productList.toString());
    }

}
