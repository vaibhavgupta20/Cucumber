package login;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import base.WebConnector;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginTest {
	WebDriver driver;
	WebConnector app = new WebConnector();

	@Given("^i open \"([^\"]*)\" and go to \"([^\"]*)\"$")
	public void gotofacebook(String bType, String URL) {
		
		
		app.openBrowser(bType);
		app.navigate(URL);

	}

	@Then("^i enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void i_enter_username_and_password(String xpath, String data) {

		app.input(xpath, data);
	}

	@Then("^i click on \"([^\"]*)\"$")
	public void i_click_on_loginbutton(String xpath) {
		app.click(xpath);
	}

	@Then("^login should be sucessful and \"([^\"]*)\" should be visible$")
	public void login_should_be_sucessful(String xpath) {
		boolean result = app.isElementPresent(xpath);
		Assert.assertTrue("profile link was not present", result);
	}

	@Then ("^I close the browser$")
	public void i_close_the_browser()  {
		app.close();
		
		
	}
}
