package base;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class WebConnector {

	WebDriver driver = null;
	Properties OR = null;

	// intergrat this with properties files

	public WebConnector() {
		// initialize properties
		System.out.println("***************Initializing Properties file*******************");
		try {
			OR = new Properties();
			FileInputStream fs = new FileInputStream(
					System.getProperty("user.dir") + "\\src\\test\\resources\\OR.properties");
			OR.load(fs);
		} catch (Exception e) {
			System.out.println("Error in initializing Properties file");
		}

	}

	public void openBrowser(String bType) {
		if (bType.equals("Mozilla"))
			driver = new FirefoxDriver();
		else if (bType.equals("Chrome")) {

			ChromeOptions ops = new ChromeOptions();
			ops.addArguments("--disable-notifications");
			System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver.exe");
			driver = new ChromeDriver(ops);

		} else if (bType.equals("IE")) {
			// set path to exe
			driver = new InternetExplorerDriver();
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	public void close() {
		driver.quit();
	}
	
	public void navigate(String URL) {
		driver.get(URL);
	}

	// click on any object
	public void click(String key) {
		
		driver.findElement(By.xpath(OR.getProperty(key))).click();
	}

	// writing in a text field / select value from a list
	public void input(String key, String data) {
		driver.findElement(By.xpath(OR.getProperty(key))).sendKeys(data);
	}
	
	public boolean isElementPresent(String object){
		int count = driver.findElements(By.xpath(OR.getProperty(object))).size();
		if(count==0)
			return false;
		else 
			return true;
					
		
	}

}
