package login;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginTest {
	WebDriver driver;

	@Given("i go to facebook")
	public void gotofacebook() {

		ChromeOptions ops = new ChromeOptions();
		ops.addArguments("--disable-notifications");
		System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver.exe");
		driver = new ChromeDriver(ops);
		driver.get("http://facebook.com");

	}

	@Then("^i enter username and password$")
	public void i_enter_username_and_password() {

	}

	@Then("^i click on loginbutton$")
	public void i_click_on_loginbutton() {
		
	}

	@Then("^login should be sucessful$")
	public void login_should_be_sucessful() {
		
	}

}
