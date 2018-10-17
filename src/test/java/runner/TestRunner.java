package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\Selenium\\Workspace\\Cucumber\\src\\test\\resources\\login\\", 
		glue = { "login" }
)
public class TestRunner {

}
