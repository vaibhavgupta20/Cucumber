package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "D:\\Selenium\\Workspace\\Cucumber\\src\\test\\resources\\login\\",
	glue = {"login" }, 
	dryRun = false,
	monochrome = true, 
	strict = true, //
	plugin = { "html:reports/html/cucumber-html-report","json:reports/json/cucumber-json-report.json","junit:reports/xml/cucumber.xml" }//xml
)
public class TestRunner {

	
}
