package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());
    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement quantityWanted;

    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement sizeSelect;

    @CacheLookup
    @FindBy(className = "attribute_list")
    WebElement colourSelect;

    @CacheLookup
    @FindBy(xpath = "//button[@name='Submit']")
    WebElement addToCartBtn;

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement popUpDisplay;

    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closePopUp;

    public void verifyPopUpDisplayMsg(String text){
        verifyThatTextIsDisplayed(popUpDisplay,text);
        log.info("Verify PopUp Msg : " + text + popUpDisplay.toString());
    }
    public void clickOnAddToCartBtn() {
        clickOnElement(addToCartBtn);
        log.info("Click Add to cart  : "  + addToCartBtn.toString());
    }
    public void addQuantityWanted(String text) {
        sendKeysToElement(quantityWanted, Keys.BACK_SPACE);
        log.info("Add Quantity : " + text + quantityWanted.toString());
    }
    public void selectSize(String text) {
        selectByVisibleTextFromDropDown(sizeSelect, text);
        log.info("Select Size : " + text + sizeSelect.toString());
    }
    public void selectColor(String colour) {
        clickOnElement(colourSelect, colour);
        log.info("Select Colour : " + colour + colourSelect.toString());
    }
    public void closePopUpButton(){
        clickOnElement(closePopUp);
        log.info("Close PopUp : "  + closePopUp.toString());
    }

}
